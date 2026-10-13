export default function robots() {
  const disallow = ['/admin', '/api'];

  return {
    rules: [
      // All crawlers — full access except admin/api
      { userAgent: '*', allow: '/', disallow },

      // Google Search
      { userAgent: 'Googlebot', allow: '/', disallow },

      // Google AI Overviews / Gemini training
      { userAgent: 'Google-Extended', allow: '/', disallow },

      // Bing / Copilot
      { userAgent: 'Bingbot', allow: '/', disallow },

      // OpenAI — GPT training crawler
      { userAgent: 'GPTBot', allow: '/', disallow },

      // OpenAI — ChatGPT live browse
      { userAgent: 'ChatGPT-User', allow: '/', disallow },

      // Anthropic — Claude
      { userAgent: 'ClaudeBot', allow: '/', disallow },

      // Perplexity AI
      { userAgent: 'PerplexityBot', allow: '/', disallow },

      // Apple — Siri / Spotlight
      { userAgent: 'Applebot', allow: '/', disallow },

      // Meta AI
      { userAgent: 'FacebookBot', allow: '/', disallow },

      // Cohere AI
      { userAgent: 'cohere-ai', allow: '/', disallow },

      // Common AI research crawlers
      { userAgent: 'OAI-SearchBot', allow: '/', disallow },
    ],
    sitemap: 'https://www.kentandvale.com/sitemap.xml',
    host: 'https://www.kentandvale.com',
  };
}
