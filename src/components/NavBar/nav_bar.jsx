import "../../index.css";
import {
  about,
  education,
  experience,
  name,
  skills,
  contact,
} from "../../constants";
import { NavElement } from "./nav_element";
export function NavBar() {
  return (
    <nav className="block w-full  px-4 py-2 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
        <h2 className="mr-4 block cursor-pointer font-bold text-3xl text-gray-500">
          {name}
        </h2>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <NavElement link="#About" text={about} />
            <NavElement link={`#${skills}`} text={skills} />
            <NavElement link={`#${experience}`} text={experience} />
            <NavElement link={`#${education}`} text={education} />
            <NavElement link={`#${contact}`} text={contact} />
          </ul>
        </div>
      </div>
    </nav>
  );
}
