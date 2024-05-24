import { Student } from "@olinfo/quizms/student";
import clsx from "clsx";
import { isFuture } from "date-fns";
import { kebabCase } from "lodash-es";

export function Score({ edition }: { edition: string }) {
  const key = `${window.location.pathname}${kebabCase(edition)}/`;
  const student: Student | undefined = JSON.parse(localStorage.getItem("quizms") ?? "{}")[key];
  if (!student) return;

  if (student.finishedAt && isFuture(student.finishedAt)) {
    return (
      <div className="rounded-lg px-2 text-sm bg-warning text-warning-content">
        in corso...
      </div>
    )
  }

  const score = student.score;
  const maxScore = student.maxScore;
  if (!score || !maxScore) return;

  const colors = [
    "bg-red-400 text-error-content",
    "bg-orange-400 text-warning-content",
    "bg-yellow-400 text-warning-content",
    "bg-lime-400 text-warning-content",
    "bg-green-400 text-success-content",
  ];

  const color = colors[Math.floor((score / maxScore) * 4)];

  return (
    <div className={clsx("rounded-lg px-2 text-sm", color)}>
      {Math.round(score)} {maxScore && <>/ {maxScore}</>}
    </div>
  );
}
