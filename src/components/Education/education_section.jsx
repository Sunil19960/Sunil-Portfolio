import { bachelorsDegree, education, mastersDegree } from "../../constants";
import "../../index.css";
export function EducationSection() {
  return (
    <div
      id={education}
      className="md:flex-row bg-white rounded-lg shadow-md p-4 mt-2"
    >
      <h2 className="text-4xl flex justify-center text-green-500">
        {education}
      </h2>
      <div className="text-lg text-gray-500 py-2">
        {mastersDegree}
        <br />
        {bachelorsDegree}
      </div>
    </div>
  );
}
