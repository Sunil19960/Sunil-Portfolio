import "../../index.css";
export function NavElement({ link, text }) {
  return (
    <li className="flex items-center p-1 text-md gap-x-2">
      <a
        href={link}
        className={`flex items-center font-semibold hover:text-green-500 transition duration-300`}
      >
        {text}
      </a>
    </li>
  );
}
