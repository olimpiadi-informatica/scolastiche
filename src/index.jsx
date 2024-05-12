import { kebabCase } from "lodash-es";

import "./index.css";
import logo from "./logo.svg";

export const title = "OII e Giochi di Fibonacci";
export const description =
  "Raccolta delle prove delle gare scolastiche delle Olimpiadi Italiane di Informatica e dei Giochi di Fibonacci";

const links = {
  "Sito ufficiale delle Olimpiadi Italiane di Informatica": "https://olimpiadi-informatica.it",
  "Sito ufficiale dei Giochi di Fibonacci": "https://fibonacci.olinfo.it",
  "Indice delle risorse per le Olimpiadi di Informatica": "https://olinfo.it",
};

const contests = {
  "fibonacci-primarie": {
    name: "Giochi di Fibonacci - Scuole primarie",
    editions: [
      "2023 - Seconda fase",
      "2023 - Seconda fase - Demo",
      "2023 - Prima fase",
      "2022 - Prima fase",
    ],
  },
  "fibonacci-secondarie": {
    name: "Giochi di Fibonacci - Scuole secondarie",
    editions: [
      "2023 - Terza fase",
      "2023 - Seconda fase",
      "2023 - Seconda fase - Demo",
      "2023 - Prima fase",
      "2022 - Prima fase",
    ],
  },
  scolastiche: {
    name: "Selezioni scolastiche delle Olimpiadi Italiane di Informatica",
    editions: [2023, 2022, "2022 - Demo", 2021, 2020, 2019],
  },
};

export function App() {
  return (
    <main className="prose mx-auto mb-12 p-5 lg:max-w-[90ch]">
      <div className="mb-8 w-full rounded-xl border-2 bg-white p-5 dark:border-0">
        <img {...logo} alt="Logo OII" className="mx-auto my-0 max-h-32" />
      </div>
      Raccolta delle prove delle gare scolastiche delle Olimpiadi Italiane di Informatica e dei
      Giochi di Fibonacci.
      <ul>
        {Object.entries(links).map(([name, url]) => (
          <li key={name}>
            {name}: <a href={url}>{url}</a>.
          </li>
        ))}
      </ul>
      <div className="*:inline-block prose-headings:mt-4 lg:columns-2">
        {Object.entries(contests).map(([id, { name, editions }]) => (
          <div key={id}>
            <h2>{name}</h2>
            <ul>
              {editions.map((edition) => (
                <li key={edition}>
                  <a href={`/${id}/${kebabCase(edition)}/`}>Edizione {edition}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
