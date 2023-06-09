import useThemeSwitcher from "../../helpers/customHooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { Programming } from "../../utils/SVGComponents";
import { programming } from "../../assets/images";
import { resume } from "../../assets/docs";

const Home = (): JSX.Element => {
  const [activeTheme] = useThemeSwitcher();

  const onButtonClick = async () => {
    let blob = await fetch(resume).then((r) => r.blob());

    let blobURL = URL.createObjectURL(blob);

    window.open(blobURL, "_blank");
    // var reader = new FileReader();
    // reader.readAsDataURL(blob);
    // reader.onload = function () {
    //     let dowloadLink = document.createElement("a");
    //     dowloadLink.href= reader.result as string;
    //     dowloadLink.download = "resume_jenry_mazariegos.pdf";
    //     document.body.appendChild(dowloadLink);
    //     dowloadLink.click();
    //     document.body.removeChild(dowloadLink);
    // };
    // reader.onerror = function (error) {
    //   console.log("Error: ", error);
    // };
  };

  return (
    <>
      {/*Start AboutMe*/}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="container flex flex-col-reverse items-center sm:flex-row mt-12 md:mt-2 2xl:h-[35rem] xl:h-[49rem] sm:h-[30rem] h-full"
      >
        <div className="w-auto text-left flex flex-col sm:mt-0 mt-10 justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
            className="font-mono text-2xl lg:text-3xl xl:text-4xl text-center md:text-left text-ternary-dark dark:text-primary-light uppercase"
          >
            Hola, soy <strong> Jenry Mazariegos</strong>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.2,
            }}
            className="font-mono  md:w-3/4 w-full mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl leading-normal text-center md:text-left  text-gray-500 dark:text-gray-200"
          >
            Desarrollador web and movil, apasionado por la tecnologia y programacion.
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.3,
            }}
            className="flex justify-center sm:block"
          >
            <button
              onClick={onButtonClick}
              // download="devjm-resume.pdf"
              // href="/resume_es.pdf"
              className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
              aria-label="Download Resume"
            >
              <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100" />
              <span className="font-mono text-sm sm:text-lg font-general-medium duration-100">
                Descargar CV
              </span>
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="w-full sm:w-2/3 flex md:justify-end justify-center mt-0 sm:mt-0"
        >
          <Programming className="2xl:block xl:block lg:hidden md:hidden hidden" />
          <div className="2xl:hidden xl:hidden lg:w-96 md:w-80 ">
            <img src={programming} />
          </div>
        </motion.div>
      </motion.section>
      {/*End AboutMe*/}
    </>
  );
};

export default Home;
