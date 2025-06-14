import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Card from "../../components/Card";
import Container from "../../components/Container";
import type { Note } from "./types";

dayjs.extend(relativeTime);

export type NotesPageProps = {
  notes: Note[];
};

export default function NotesPage({ notes }: NotesPageProps) {
  return (
    <Container>
      <h1 className="mb-4 font-bold text-3xl">Notes</h1>

      <div className="flex flex-col gap-8">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {notes.map((note) => (
            <li key={note.slug}>
              <a
                href={`https://zenn.dev/kou_pg_0131/articles/${note.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card className="flex h-full flex-col gap-1">
                  <h2 className="grow text-lg">{note.title}</h2>
                  <p className="text-gray-400 text-sm">
                    {dayjs(note.published_at).fromNow()}
                  </p>
                </Card>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <a
            href="https://zenn.dev/kou_pg_0131"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="py-2">View more</Card>
          </a>
        </div>
      </div>
    </Container>
  );
}
