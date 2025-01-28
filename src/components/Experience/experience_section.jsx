import "../../index.css";
import { dummyData, experience } from "../../constants";
import { ExperienceCard } from "./experience_card";
export function ExperienceSection() {
  return (
    <div id={experience} className="mt-5 bg-white rounded-lg shadow-md p-4 ">
      <h2 className="flex justify-center font-semibold text-4xl text-green-500">
        {experience}
      </h2>
      <div className="space-y-6">
        {dummyData.map((item, index) => (
          <ExperienceCard
            key={index}
            image={item.image}
            companyName={item.companyName}
            projectTitle={item.projectTitle}
            toolsUsed={item.toolsUsed}
            keyResponsibilities={item.keyResponsibilities}
          />
        ))}
      </div>
    </div>
  );
}
