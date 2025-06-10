import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import WorksPage from "./pages/WorksPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
