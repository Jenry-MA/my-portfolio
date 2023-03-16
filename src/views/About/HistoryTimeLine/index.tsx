const HisstoryTimeLine = (): JSX.Element => {
  return (
    <div className="">
      <div className="py-10">
        <span className="text-black dark:text-white font-mono font-semibold text-4xl">
          History
        </span>
      </div>
      <ol className="sm:flex">
        <li className="relative mb-6 sm:w-2/6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-500 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-primary-dark shrink-0">
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-ternary-light dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              FullStack Freelance
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Since Feb. 2021 to Oct. 2021
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              First formal project. Aplication web for customs and logistics company. 
              <p>Using Laravel, MySQL, Bootstrap, JavaScript, AWS.</p>
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:w-2/6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-500 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-primary-dark shrink-0">
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-ternary-light dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                FullStack Freelance
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Since Nov. 2021 to May. 2022
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Booking and logistics system for a hotel. 
              <p>Using Laravel, Livewire, MySQL, TailwindCSS, DigitalOcean.</p>
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:w-2/6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-10 h-10 bg-indigo-500 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-primary-dark shrink-0">
              <svg
                aria-hidden="true"
                className="w-7 h-7 text-ternary-light dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Developer frontend and backend web and mobile
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Since Jun. 2022 to Feb. 2023
            </time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Aplication web and mobile for a service of taxis, food delivery, package, freight.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default HisstoryTimeLine