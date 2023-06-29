import { Calendar } from "../../../utils/SVGComponents";
import { historyJob } from "../../../utils/Constants/about";
const HisstoryTimeLine = (): JSX.Element => {
  const historyJobs = historyJob.map((data) => (
    <li className="relative mb-6 sm:w-2/6 sm:mb-0">
      <div className="flex items-center">
        <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-500 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-primary-dark shrink-0">
          <Calendar />
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>

      <div className="mt-3 sm:pr-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {data.title_job}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {data.time_job}
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {data.description_job}
          <p>{data.tecnology_job}</p>
        </p>
      </div>
    </li>
  ));

  return (
    <div className="">
      <div className="py-10">
        <span className="text-black dark:text-white font-mono font-semibold text-4xl">
          History
        </span>
      </div>
      <ol className="sm:flex">{historyJobs}</ol>
    </div>
  );
};

export default HisstoryTimeLine;
