import "../../index.css";
import { ProgressBar } from "./progressbar";
import { skills } from "../../constants";
export function Skills() {
  return (
    <div id={skills} className="mt-5 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-4xl font-semibold flex justify-center text-green-500">
        {skills}
      </h2>
      <div className="grid grid-cols-2 gap-x-30 mt-5 px-5 text-right">
        <ProgressBar text="HTML" width="w-4/5" />
        <ProgressBar text="CSS" width="w-4/5" />
        <ProgressBar text="Javascript" width="w-9/10" />
        <ProgressBar text="ReactJS" width="w-9/10" />
        <ProgressBar text="Kotlin" width="w-8/9" />
        <ProgressBar text="Flutter" width="w-8/9" />
        <ProgressBar text="Java" width="w-8/9" />
        <ProgressBar text="Git" width="w-8/9" />
      </div>
    </div>
  );
}
