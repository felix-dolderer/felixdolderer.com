import type {
  IndexDeCollectionItem,
  IndexEnCollectionItem,
  IndexEsCollectionItem,
  IndexFrCollectionItem,
  PagesDeCollectionItem,
  PagesEnCollectionItem,
  PagesEsCollectionItem,
  PagesFrCollectionItem,
} from "@nuxt/content";

export type LocalizedIndexPageCollectionItem =
  | IndexEnCollectionItem
  | IndexDeCollectionItem
  | IndexEsCollectionItem
  | IndexFrCollectionItem;

export type LocalizedPagesCollectionItem =
  | PagesEnCollectionItem
  | PagesDeCollectionItem
  | PagesEsCollectionItem
  | PagesFrCollectionItem;

export type FaqQuestion = IndexEnCollectionItem["faq"]["categories"][number]["questions"][number];
export type FaqCategory = IndexEnCollectionItem["faq"]["categories"][number];
export type Testimonial = IndexEnCollectionItem["testimonials"][number];
