import useThemeSwitcher from "../../../helpers/customHooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { Devjm } from "../../../utils/SVGComponents";
import { perfil } from "../../../assets/images";
import { resume } from "../../../assets/docs";

const Biography = ():JSX.Element => {
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={perfil} className="rounded-lg w-96" alt="" />
    </div>

    <div className="text-justify font-mono font-general-regular w-full sm:w-3/4">
        
            <p
                className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                
            >
                Me considero un desarrollador Jr. con dos años de experiencia en el desarrollo de aplicaciones web,
                y conocimientos basicos en el desarrollo de aplicaciones moviles.
            </p>
            <p
                className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                
            >
                Utilizando el framework laravel, laravel/livewire del lenguaje PHP junto con otras tecnologías tales 
                como CSS3 con sus framework bootstrap, tailwindcss y algunos plugins, con buenos conocimientos en JavaScript,
                además de SQL con conocimiento en PL/SQL, además de trabajar con AWS y/o DigitalOcean para el despliegue de proyectos. 
            </p>
            <p
                className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
                
            >
                Actualmente desarrollando con ReactJS & React Native junto a Cloud functions de Google 
                y Firebase como gestor de base de datos y de archivos. 
            </p>
        
    </div>
</div>
  )
}

export default Biography