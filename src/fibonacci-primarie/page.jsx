import { Menu } from "@olinfo/react-components";
import { kebabCase } from "lodash-es";
import { Link } from "wouter";

import { Navbar } from "~/utils/navbar";
import { Score } from "~/utils/score";

export const metadata = {
  title: "Giochi di Fibonacci - Scuole Primarie",
  description: "Raccolta delle prove dei Giochi di Fibonacci per le scuole primarie",
};

const editions = [
  "2024 - Prima fase",
  "2023 - Seconda fase",
  "2023 - Seconda fase - Demo",
  "2023 - Prima fase",
  "2022 - Prima fase",
];

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex w-full max-w-screen-xl grow flex-col p-4 pb-8">
        <div className="flex flex-col gap-4">
          <h1 className="px-2 text-center text-2xl font-bold">
            Giochi di Fibonacci - Scuole primarie
          </h1>
          <Menu fallback="Nessun problema trovato">
            {editions.map((edition) => (
              <li key={edition}>
                <Link href={`/${kebabCase(edition)}/`} className="grid-cols-[1fr_auto]">
                  <div>Edizione {edition}</div>
                  <Score edition={edition} />
                </Link>
              </li>
            ))}
          </Menu>
        </div>
      </div>
    </>
  );
}
