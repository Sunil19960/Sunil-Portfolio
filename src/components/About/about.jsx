import "../../index.css";
import {
  about,
  name,
  greetingMessage,
  intro,
  prof,
  summary,
  downloadCV,
  profilePic,
  myCV,
} from "../../constants";
export function About() {
  return (
    <main>
      <div className="flex px-4 mt-5 justify-around bg-white rounded-lg shadow-md p-4">
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

        <div className=" text-right">
          <img alt={name} src={profilePic} className="w-35 h-35 rounded-full" />
          <div className="mt-4 text-center mx-2 bg-yellow-100 text-green-700 p-2 rounded-lg sm:justify-center float-right text-lg font-semibold">
            <a href={myCV} download>
              {downloadCV}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
