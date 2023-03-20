import { User } from "@/model/user";
import dayjs from "dayjs";

const birth = dayjs("1998-01-31");
const age = dayjs().diff(birth, "years");

export const user: User = {
  name: "Koki Sato",
  tag: "Developer",
  description: `埼玉県在住の ${age} 歳。\nのんびり生きています。`,
  email: "kou.pg.0131@gmail.com",
};
