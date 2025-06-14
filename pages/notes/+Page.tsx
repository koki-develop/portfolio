import { useData } from "vike-react/useData";
import NotesPage from "../../src/pages/NotesPage";
import type { Note } from "../../src/pages/NotesPage/types";

export default function Page() {
  const notes = useData<Note[]>();

  return <NotesPage notes={notes} />;
}
