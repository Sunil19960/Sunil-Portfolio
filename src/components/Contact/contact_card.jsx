import "../../index.css";

export function ContactCard({ url, imgPath, alt }) {
  return (
    <a href={url} target="_blank" className="flex">
      <img src={imgPath} alt={alt} className="w-15 h-10 rounded-md"></img>
    </a>
  );
}
