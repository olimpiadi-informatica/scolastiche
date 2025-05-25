import { Menu } from "@olinfo/react-components";
import { kebabCase } from "lodash-es";
import { Link } from "wouter";

import { Navbar } from "~/utils/navbar";
import { Score } from "~/utils/score";

export const metadata = {
  title: "Giochi di Fibonacci - Corso di Programmazione",
  description:
    "Corso di programmazione a blocchi, preparatorio per la seconda e terza fase dei Giochi di Fibonacci per le scuole primarie e secondarie",
};

const editions = [
  "1 - Blocchi Esecuzione e Ripeti N",
  "2 - Blocchi Condizionali e Ripeti Mentre",
];

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex w-full max-w-screen-xl grow flex-col p-4 pb-8">
        <div className="flex flex-col gap-4">
          <h1 className="px-2 text-center text-2xl font-bold">
            Giochi di Fibonacci - Corso di Programmazione
          </h1>
          <Menu fallback="Nessun problema trovato">
            {editions.map((edition) => (
              <li key={edition}>
                <Link href={`/${kebabCase(edition)}/`} className="grid-cols-[1fr_auto]">
                  <div>Lezione {edition}</div>
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
