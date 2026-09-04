export const POSTS = [
  {
    slug: "traceline-24h-alignment",
    title: "How I built Traceline in 24 hours",
    date: "2025-02-15",
    minutes: 6,
    tags: ["Hackathon", "Data", "Streamlit"],
    excerpt:
      "No fancy model. Just a clear plan: understand the data, fix the drift, match simplement, and check everything visually. Here's how we built it in a day.",
    body: `# How I built Traceline in 24 hours

**In one line:** Traceline matches pipeline cracks across yearly reports, even when the distance numbers have drifted.

We had 24 hours at TidalHack, so we kept the plan simple and finished it.

## Start with the real problem
Inspection teams get a new report every year. The same crack shows up at mile 102.3 one year and mile 103.1 the next. If you match by exact numbers, nothing matches.

So the goal was not prediction. It was alignment: which row in 2023 is the same crack as which row in 2024?

## Hour 0-4: look at the data first
We did not build anything at first. We just opened the files and asked:
- What columns do we actually have?
- Which columns are messy or missing?
- Does the drift look consistent or random?

This saved us later. We learned the drift was small but real, so we needed a flexible match, not an exact one.

## Hour 4-10: clean and normalize
Next we made the years comparable:
- Put everything in the same units and format
- Picked one reference point both years share
- Sorted everything by distance so we could walk through it in order

Boring work, but this is what makes the rest easy.

## Hour 10-16: match simply
Our matching rule was plain English:
- For each crack in year A, look at nearby cracks in year B
- Nearby means within a small distance window
- If there are a few options, pick the one that looks most similar in size and depth

No complex model. Just a window plus a similarity check. It ran fast and we could explain it to judges in 30 seconds.

## Hour 16-22: check with your eyes
This was the most important part. We plotted year A and year B on the same chart and drew lines between matches.

Bad matches jump out immediately on a chart. We found three bad ones in minutes and fixed the window size. Without the chart we would have shipped wrong answers.

## Hour 22-24: make a demo anyone can click
We put it in a simple web app:
- Upload or pick a sample file
- See the matched table
- See the chart with lines between years

Judges do not read code during a demo. They click. So we made the clicking obvious.

## What I would do with a week
- Save every match decision so you can trace why two rows were linked
- Add a confidence score: strong match, weak match, needs review
- Let users correct a match and remember that correction

*Stack: Python, Pandas, Scikit-learn, Plotly, Streamlit. Won 1st Place at TidalHack @ TAMU.*`,
  },
  {
    slug: "data-quality-before-models",
    date: "2025-06-02",
    title: "How I build data projects before touching a model",
    minutes: 5,
    tags: ["Data", "AWS", "Process"],
    excerpt:
      "My simple build order: profile the data, fix the dataset, then model. How this won us 3rd place and how I reuse it for every CSV project.",
    body: `# How I build data projects before touching a model

I used to start with the model. Now I start with the data. It is slower for one hour and faster for the whole project.

This is the exact order I use now, from our Chihuahua-vs-Muffin hackathon and my Noisy-to-Nice CSV profiler.

## Step 1: profile before you build
First I answer simple questions about the file:
- What is missing in each column?
- What are the duplicates, and what counts as a duplicate?
- Is one value dominating everything and hiding the rest?

I write these down. They become my to-do list. If I skip this, I end up debugging the model for a problem that was in the data.

## Step 2: fix the dataset, not the model
In Chihuahua-vs-Muffin we got to 93.5% by curating images, not by changing the model. We removed bad labels, balanced the weak classes, and kept the test set clean.

Same idea for tables: fix labels, fix keys, remove leakage. A clean small dataset beats a messy big one.

## Step 3: build a tiny end-to-end slice first
I do not build the full pipeline first. I build one thin path:
- One file in
- One cleaned table out
- One simple screen or chart to see the result

For Noisy-to-Nice that slice was: upload a CSV, see a quality report, get a suggested cleanup action. Once that works, the rest is just adding more checks.

## Step 4: add checks one by one
After the slice works, I add checks in this order:
- Missing values and types
- Duplicates on the real business key
- Outliers and skewed columns
- Join safety: will this key actually join cleanly?

Each check gets a plain-English explanation. No jargon. If a non-technical user cannot understand the warning, I rewrite it.

## Step 5: keep proof of everything
I save the before and after: row counts, what was removed, what was changed. I also keep one chart per big assumption.

This makes demos easy. Instead of saying trust me, I can show the quality report improving after each fix.

## My takeaway
If your project feels stuck, do not tune the model yet. Go back to step 1 and look at the data again. That is usually where the win is.

*Next: how I would turn this checklist into a shareable S3 + Bedrock quality report.*`,
  },
];
