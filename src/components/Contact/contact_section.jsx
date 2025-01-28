import {
  altLinkedin,
  altGitHub,
  altGmail,
  contact,
  copyright,
  gitHubImg,
  githubUrl,
  gmailImg,
  gmailUrl,
  linkedInImg,
  linkedInUrl,
} from "../../constants";
import "../../index.css";
import { ContactCard } from "./contact_card";

export function ContactSection() {
  return (
    <div
      id={contact}
      className="p-4 flex bg-green-600 px-10 flex justify-between"
    >
      <div className="flex gap-5">
        <ContactCard
          url={linkedInUrl}
          imgPath={linkedInImg}
          alt={altLinkedin}
        />
        <ContactCard url={githubUrl} imgPath={gitHubImg} alt={altGitHub} />
        <ContactCard url={gmailUrl} imgPath={gmailImg} alt={altGmail} />
      </div>
      <p className="flex text-xl text-white">
        &copy; {new Date().getFullYear()} {copyright}
      </p>
    </div>
  );
}
