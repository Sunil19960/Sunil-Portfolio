import "../../index.css";
import { keyResponsibilitiesText } from "../../constants";
export function ExperienceCard(props) {
  const image = props.image;
  const companyName = props.companyName;
  const projectTitle = props.projectTitle;
  const toolsUsed = props.toolsUsed;
  const keyResponsibilities = props.keyResponsibilities;
  return (
    <div className="flex flex-col md:flex-row ">
      <img
        className=" w-full object-contain rounded-t-lg md:w-48 md:h-auto  md:rounded-s-lg bg-white rounded-xl shadow-md p-4 mt-4 mb-4"
        src={image}
        alt=""
      />
      <div className="flex-3 flex flex-col justify-between p-4 leading-normal">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-xl font-bold text-gray-900">{companyName}</h3>
          <p className="text-lg font-semibold text-gray-500">
            Project: {projectTitle}
          </p>
          <p className="text-sm text-gray-500">Tools Used: {toolsUsed}</p>
          <div className="mt-4">
            <h4 className="font-semibold text-gray-500">
              {keyResponsibilitiesText}
            </h4>
            <ul className="list-disc pl-6 space-y-2">
              {keyResponsibilities.map((responsibility, index) => (
                <li key={index} className="text-gray-500">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
