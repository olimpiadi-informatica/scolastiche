import { Menu } from "@olinfo/react-components";
import { kebabCase } from "lodash-es";
import { Link } from "wouter";

import { Navbar } from "~/utils/navbar";
import { Score } from "~/utils/score";

export const metadata = {
  title: "OII - Scolastiche",
  description: "Raccolta delle prove delle selezioni scolastiche delle Olimpiadi di Informatica",
};

const editions = [2023, 2022, "2022 - Demo", 2021, 2020, 2019];

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex w-full max-w-screen-xl grow flex-col p-4 pb-8">
        <div className="flex flex-col gap-4">
          <h1 className="px-2 text-center text-2xl font-bold">
            Olimpiadi di Informatica - Selezioni scolastiche
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
