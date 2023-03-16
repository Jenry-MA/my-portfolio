
import { motion } from "framer-motion";
import Biography from "./Biography";
import HisstoryTimeLine from "./HistoryTimeLine";

const About = () => {
  return (
    <>
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
    className="container mx-auto"
  >
    <Biography />
    
    
    
    </motion.section>
    
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 1 }}
        className="container mx-auto"
    >

    <HisstoryTimeLine />

    </motion.section>
    
    
    </>
  )
}

export default About