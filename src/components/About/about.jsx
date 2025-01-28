import "../../index.css";
import resumeDoc from "../../assets/documents/SUNIL_CV.pdf";
import {
  about,
  name,
  greetingMessage,
  intro,
  prof,
  summary,
  downloadCV,
  profilePic,
} from "../../constants";

export function About() {
  return (
    <main>
      <div className="flex px-4 mt-5 justify-around bg-white rounded-lg shadow-md p-4">
        <div>
          <div className="text-center">
            <p className="font-semibold text-gray-500 text-lg">
              {greetingMessage}
            </p>
            <p className="text-green-500 font-semibold text-4xl">{intro}</p>
            <p className="font-semibold text-gray-500 text-lg">{prof}</p>
            <p className="mt-3 font-semibold text-gray-500 text-md max-w-xl mx-auto">
              {summary}
            </p>
          </div>
          <div className="py-2 text-center mx-4 bg-yellow-100 text-green-700 w-1/4 rounded-lg sm:justify-center float-right text-lg font-semibold">
            <a href={resumeDoc} download>
              {downloadCV}
            </a>
          </div>
        </div>
        <div className="mt-10 text-right">
          <img alt={name} src={profilePic} className="w-40 h-40 rounded-full" />
        </div>
      </div>
    </main>
  );
}
