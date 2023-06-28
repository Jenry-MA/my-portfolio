import { perfil } from "../../../assets/images";
import { aboutMe } from "../../../utils/Constants/about";

const Biography = ():JSX.Element => {
  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={perfil} className="rounded-lg w-96" />
      </div>

      <div className="text-justify font-mono font-general-regular w-full sm:w-3/4">
        {aboutMe.map((data, i) => (
          <biography-text key={i}>{data}</biography-text>
        ))}
      </div>
    </div>
  );
};

export default Biography;
