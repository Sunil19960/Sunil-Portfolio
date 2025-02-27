import "../../index.css";
import { keyResponsibilitiesText } from "../../constants";
export function ExperienceCard(props) {
  const image = props.image;
  const companyName = props.companyName;
  const designation = props.designation;
  const projectTitle = props.projectTitle;
  const year = props.year;
  const toolsUsed = props.toolsUsed;
  const keyResponsibilities = props.keyResponsibilities;
  return (
    <div className="flex flex-col md:flex-row items-start p-4 bg-white rounded-lg shadow-md">
      <img
        className="w-20 h-20 object-contain rounded-lg bg-white shadow-md mb-4 md:mb-0 md:mr-4"
        src={image}
        alt="Company Logo"
      />
      <div className="flex flex-col justify-start">
        <h3 className="text-2xl font-bold text-gray-900">{companyName}</h3>
        <p className="text-lg text-gray-500">
          {designation} | {year}
        </p>
        <div className="mt-4">
          <p className="text-lg font-semibold text-gray-900">
            Project: {projectTitle}
          </p>
          <p className="text-sm text-gray-500">Tools Used: {toolsUsed}</p>
          <h4 className="font-semibold text-gray-500 mt-4">
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

    // <div className="flex flex-col md:flex-row ">
    //   <img
    //     className=" w-full object-contain rounded-t-lg md:w-48 md:h-auto  md:rounded-s-lg bg-white rounded-xl shadow-md p-4 mt-4 mb-4"
    //     src={image}
    //     alt=""
    //   />
    //   <div className="flex-3 flex flex-col justify-between p-4 leading-normal">
    //     <div className="bg-white rounded-lg shadow-md p-4">
    //       <h3 className="text-xl font-bold text-gray-900">{companyName}</h3>
    //       <p className="text-lg font-semibold text-gray-500">
    //         Project: {projectTitle}
    //       </p>
    //       <p className="text-sm text-gray-500">Tools Used: {toolsUsed}</p>
    //       <div className="mt-4">
    //         <h4 className="font-semibold text-gray-500">
    //           {keyResponsibilitiesText}
    //         </h4>
    //         <ul className="list-disc pl-6 space-y-2">
    //           {keyResponsibilities.map((responsibility, index) => (
    //             <li key={index} className="text-gray-500">
    //               {responsibility}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
