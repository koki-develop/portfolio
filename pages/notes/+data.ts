export const data = async () => {
  const response = await fetch(
    "https://zenn.dev/api/articles?username=kou_pg_0131&count=20&order=latest",
  ).then((res) => res.json());
  return response.articles;
};
