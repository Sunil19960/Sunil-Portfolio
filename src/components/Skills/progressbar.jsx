import "../../index.css";
export function ProgressBar(props) {
  const text = props.text;
  const width = props.width;
  return (
    <>
      <div className="m-2">
        <div className="flex items-center justify-between">
          <div className="text-gray-500 font-medium text-lg ">{text}</div>
          <div className="w-2/3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className={`bg-green-500 h-2.5 rounded-full dark:bg-blue-500 ${width}`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
