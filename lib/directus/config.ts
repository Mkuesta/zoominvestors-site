/**
 * Directus CMS configuration for ZoomInvestors.
 */

// ── Connection ──────────────────────────────────────────────────────────────
export const DIRECTUS_URL = (process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://cms.drlogist.com').trim();
export const DIRECTUS_TOKEN = process.env.DIRECTUS_STATIC_TOKEN || '';

// ── Site identity ───────────────────────────────────────────────────────────
export const SITE_NAME = 'ZoomInvestors';
export const BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL || 'https://zoominvestors.com').trim();

// ── Collection prefix ───────────────────────────────────────────────────────
const PREFIX = 'zoominvestors';

export const COLLECTIONS = {
  settings: `${PREFIX}_settings`,
  posts: `${PREFIX}_posts`,
  blogCategories: `${PREFIX}_blog_categories`,
  categories: `${PREFIX}_categories`,
  products: `${PREFIX}_products`,
  pages: `${PREFIX}_pages`,
  navigationItems: `${PREFIX}_navigation_items`,
  formSubmissions: `${PREFIX}_form_submissions`,
  analyticsSettings: `${PREFIX}_analytics_settings`,
  redirects: `${PREFIX}_redirects`,
  banners: `${PREFIX}_banners`,
  translations: `${PREFIX}_translations`,
  subscribers: `${PREFIX}_subscribers`,
  emailTemplates: `${PREFIX}_email_templates`,
  emailLog: `${PREFIX}_email_log`,
  notificationTemplates: `${PREFIX}_notification_templates`,
} as const;

// No siteId — zoominvestors collections don't have a site column
export const SITE_ID: number | undefined = undefined;

// ── Routes ──────────────────────────────────────────────────────────────────
export const BLOG_ROUTE = 'blog';
export const PRODUCT_ROUTE = 'products';
