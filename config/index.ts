import { certifications } from "./certification";
import { experiences } from "./experience";
import { skillGroups } from "./skill";
import { user } from "./user";
import { workGroups } from "./work";
import notes from "@/../notes.json";
import { Note } from "@/model/note";

export const config = {
  url: "https://koki.me",
  user,
  skillGroups,
  certifications,
  experiences,
  workGroups,
  notes: notes as Note[],
};
