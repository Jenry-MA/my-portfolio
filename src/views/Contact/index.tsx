import Form from './Form'
import { motion } from "framer-motion";

const index = (): JSX.Element => {


  return (
    <>
     <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="container gap-4 w-full flex flex-col-reverse items-center sm:flex-row mt-12 md:mt-2 2xl:h-[35rem] xl:h-[49rem] sm:h-[30rem] h-full"
      >
       
        <Form/>
    </motion.section>
    </>

  )
}

export default index
