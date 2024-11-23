export type Data = {
  articles: {
    title: string;
    slug: string;
    published_at: string;
  }[];
};

const url =
  "https://zenn.dev/api/articles?username=kou_pg_0131&count=20&order=latest";

export const data = async () => {
  return fetch(url).then((res) => res.json());
};
