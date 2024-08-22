import { Card, CardActions, CardBody } from "@olinfo/react-components";
import { Link } from "wouter";

import { Navbar } from "~/utils/navbar";

import logo from "./logo.svg";

export const metadata = {
  title: "OII e Giochi di Fibonacci",
  description:
    "Raccolta delle prove delle gare scolastiche delle Olimpiadi Italiane di Informatica e dei Giochi di Fibonacci",
};

export default function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto flex w-full max-w-screen-xl grow flex-col p-4 pb-8">
        <div className="flex grow flex-col gap-8">
          <div className="hero">
            <div className="hero-content flex-col text-center">
              <div className="flex w-full sm:items-end justify-center gap-8 max-sm:flex-col">
                <img {...logo} alt="Logo OII" className="max-h-32 w-auto max-sm:mx-auto" />
                <h1 className="text-pretty text-4xl font-bold sm:text-left sm:text-5xl">
                  <div className="whitespace-nowrap">Olimpiadi di</div>
                  <div className="whitespace-nowrap">Informatica</div>
                </h1>
              </div>
              <p className="max-w-xl py-2 text-lg">
                Raccolta delle prove delle gare scolastiche delle Olimpiadi Italiane di Informatica
                e dei Giochi di Fibonacci.
              </p>
            </div>
          </div>
          <div className="grid w-full gap-4 *:mb-auto md:grid-cols-2">
            <Card>
              <CardBody title="Giochi di Fibonacci">
                <p>
                  Allenati con i quesiti di logica e programmazione a blocchi delle passate edizioni
                  dei Giochi di Fibonacci.
                </p>
                <CardActions>
                  <Link href="/fibonacci-primarie/" className="btn btn-accent">
                    Scuole Primarie
                  </Link>
                  <Link href="/fibonacci-secondarie/" className="btn btn-accent">
                    Scuole Secondarie
                  </Link>
                </CardActions>
              </CardBody>
            </Card>
            <Card>
              <CardBody title="Olimpiadi di Informatica">
                <p>
                  Allenati per la fase scolastica delle Olimpiadi di Informatica, la prima fase con
                  cui puoi qualificarti alla selezione territoriale.
                </p>
                <CardActions>
                  <Link href="/scolastiche/" className="btn btn-accent">
                    Selezione scolastica
                  </Link>
                </CardActions>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
