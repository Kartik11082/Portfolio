import { useEffect, useMemo, useState } from "react";
import { POSTS } from "../../posts/posts";
import "./Blog.css";

function renderInline(text) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i} className="md-code">{part.slice(1, -1)}</code>;
    }
    const boldSplit = part.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i}>
        {boldSplit.map((b, j) =>
          b.startsWith("**") && b.endsWith("**") ? (
            <strong key={j}>{b.slice(2, -2)}</strong>
          ) : (
            <span key={j}>{b}</span>
          )
        )}
      </span>
    );
  });
}

function Markdown({ text }) {
  const blocks = useMemo(() => {
    const lines = text.split("\n");
    const out = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (line.startsWith("```")) {
        const lang = line.slice(3).trim();
        const code = [];
        i += 1;
        while (i < lines.length && !lines[i].startsWith("```")) {
          code.push(lines[i]);
          i += 1;
        }
        i += 1;
        out.push({ type: "code", lang, code: code.join("\n") });
      } else if (line.startsWith("# ")) {
        out.push({ type: "h1", text: line.slice(2) });
        i += 1;
      } else if (line.startsWith("## ")) {
        out.push({ type: "h2", text: line.slice(3) });
        i += 1;
      } else if (/^\d+\.\s/.test(line)) {
        const items = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
          items.push(lines[i].replace(/^\d+\.\s/, ""));
          i += 1;
        }
        out.push({ type: "ol", items });
      } else if (line.startsWith("- ")) {
        const items = [];
        while (i < lines.length && lines[i].startsWith("- ")) {
          items.push(lines[i].slice(2));
          i += 1;
        }
        out.push({ type: "ul", items });
      } else if (line.trim() === "") {
        i += 1;
      } else {
        out.push({ type: "p", text: line });
        i += 1;
      }
    }
    return out;
  }, [text]);

  const [copied, setCopied] = useState(-1);

  const copyCode = async (code, idx) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(idx);
      setTimeout(() => setCopied(-1), 1200);
    } catch {
      setCopied(-1);
    }
  };

  return (
    <div className="md-body">
      {blocks.map((b, idx) => {
        if (b.type === "h1") return <h1 key={idx} className="md-h1">{renderInline(b.text)}</h1>;
        if (b.type === "h2") return <h2 key={idx} className="md-h2">{renderInline(b.text)}</h2>;
        if (b.type === "ul")
          return (
            <ul key={idx} className="md-ul">
              {b.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
            </ul>
          );
        if (b.type === "ol")
          return (
            <ol key={idx} className="md-ol">
              {b.items.map((it, j) => <li key={j}>{renderInline(it)}</li>)}
            </ol>
          );
        if (b.type === "code")
          return (
            <div key={idx} className="md-codeblock">
              <div className="md-codebar">
                <span>{b.lang || "code"}</span>
                <button onClick={() => copyCode(b.code, idx)} className="md-copy">
                  {copied === idx ? "copied ✓" : "copy"}
                </button>
              </div>
              <pre><code>{b.code}</code></pre>
            </div>
          );
        return <p key={idx} className="md-p">{renderInline(b.text)}</p>;
      })}
    </div>
  );
}

export const BlogReader = ({ post, onClose }) => {
  useEffect(() => {
    if (!post) return undefined;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [post, onClose]);

  if (!post) return null;
  return (
    <div className="resume-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={post.title}>
      <div className="resume-modal-container blog-reader" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <div className="terminal-dots">
            <span className="dot dot-red" onClick={onClose} title="Close" />
            <span className="dot dot-yellow" onClick={onClose} title="Minimize" />
            <span className="dot dot-green" title="Reading" />
          </div>
          <div className="resume-modal-title">$ cat ./blog/{post.slug}.md</div>
          <div className="resume-modal-actions">
            <button className="modal-action-btn close-btn" onClick={onClose}>Esc</button>
          </div>
        </div>
        <div className="blog-reader-body">
          <p className="blog-meta">{post.date} · {post.minutes} min · {post.tags.join(" / ")}</p>
          <Markdown text={post.body} />
        </div>
      </div>
    </div>
  );
};

const Blog = ({ onOpen }) => (
  <div className="blog-shell">
    <p className="craft-kicker">$ ls ./blog</p>
    <h2 className="craft-heading">Notes</h2>
    <p className="craft-sub">Short build notes — what I tried, what worked, what I’d do next. No backend, just markdown.</p>
    <div className="blog-grid">
      {POSTS.map((p) => (
        <button key={p.slug} className="blog-card glass-panel" onClick={() => onOpen(p)}>
          <span className="blog-date">{p.date} · {p.minutes} min</span>
          <span className="blog-title">{p.title}</span>
          <span className="blog-excerpt">{p.excerpt}</span>
          <span className="blog-tags">
            {p.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
          </span>
          <span className="blog-open">read →</span>
        </button>
      ))}
    </div>
  </div>
);

export default Blog;
