import type { LocalizedPagesCollectionItem } from "~/types/content";

const pageCollectionsByLocale = {
  en: "pages_en",
  de: "pages_de",
  es: "pages_es",
  fr: "pages_fr",
} as const;

type SupportedLocale = keyof typeof pageCollectionsByLocale;

function isSupportedLocale(localeCode: string): localeCode is SupportedLocale {
  return localeCode in pageCollectionsByLocale;
}

function findPageBySlug(
  pages: LocalizedPagesCollectionItem[],
  slug: "/projects" | "/blog",
): LocalizedPagesCollectionItem | null {
  return pages.find((entry) => entry.path.endsWith(slug)) || null;
}

export async function getLocalizedPageBySlug(
  localeCode: string,
  slug: "/projects" | "/blog",
): Promise<LocalizedPagesCollectionItem | null> {
  const collection = isSupportedLocale(localeCode)
    ? pageCollectionsByLocale[localeCode]
    : pageCollectionsByLocale.en;

  const pages = await queryCollection(collection).all();
  return findPageBySlug(pages, slug);
}
