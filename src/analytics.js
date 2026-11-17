// Privacy-friendly analytics via Umami (no cookies, so no consent banner).
// Inert until VITE_UMAMI_WEBSITE_ID is set at build time: locally in .env.local,
// in production as an environment variable on the host that builds the site.
// Clicks are tracked declaratively with data-umami-event attributes in the markup.
export function initAnalytics() {
  const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
  if (!websiteId || import.meta.env.DEV) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://cloud.umami.is/script.js";
  script.dataset.websiteId = websiteId;
  document.head.appendChild(script);
}
