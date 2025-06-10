export type Article = {
  title: string;
  slug: string;
  published_at: string;
};

export type ArticlesData = {
  articles: Article[];
};
