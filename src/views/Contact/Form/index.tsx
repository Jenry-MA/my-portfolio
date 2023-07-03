import React from "react";
import emailjs from "@emailjs/browser";
import { LuMapPin, LuPhone, LuMail, LuUser } from "react-icons/lu";
import { useForm, SubmitHandler } from "react-hook-form"

// interface bodyJson {
//     full_name: string
//     user_mail: string
//     body_message: string
// }

type bodyJson = {
  [key:string]: unknown
}

const index = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<bodyJson>()

  const onSubmit = (data: bodyJson) => {
    emailjs.send('service_urts9nu', 'template_oo0v4qu', data, 'zoswiNnkzJG0ZSXqm')
    reset()
  }

  const myData = [
    {
      icon: <LuUser className="md:w-7 md:h-7 " />,
      text: "Jenry Oswaldo Mazariegos Aragón",
    },
    { icon: <LuMapPin className="md:w-7 md:h-7 " />, text: "Izabal, Guatemala" },
    { icon: <LuPhone className="md:w-7 md:h-7 " />, text: "+502 58399094" },
    { icon: <LuMail className="md:w-7 md:h-7 " />, text: "jenrymazariegos@gmail.com" },
  ];

  const dataMap = myData.map((data, index) => (
    <span
      key={index}
      className="font-mono  inline-flex items-center gap-2 text-ternary-light dark:text-primary-dark"
    >
      {data.icon}
      <span className="xl:text-xl lg:text-xl md:text-lg break-all" >{data.text}</span>
    </span>
  ));

  return (
    <div className="shadow drop-shadow-md h-full w-full rounded-xl">
      <div className="grid lg:grid-cols-3 grid-cols-1 h-full">
        <div className="bg-primary-dark dark:bg-primary-light lg:rounded-l-xl rounded-t flex flex-col justify-center">
          <div className="xl:p-10 p-5 flex flex-col lg:gap-y-5 gap-y-0.5">
            <span className="lg:absolute xl:top-10 top-5 text-ternary-light dark:text-primary-dark font-mono font-semibold md:text-4xl text-2xl">
              Mis datos
            </span>

            {dataMap}
          </div>
        </div>
        <div className="lg:relative col-span-2 bg-primary-light dark:bg-ternary-dark lg:rounded-r-xl rounded-b flex flex-col justify-center">
        <span className="lg:absolute xl:p-10 px-5 pt-5 lg:text-center w-full lg:top-0   dark:text-ternary-light text-primary-dark font-mono font-semibold md:text-4xl text-2xl">
              Contactame
            </span>
          <div className="xl:p-10 p-5 flex flex-col lg:gap-y-5 gap-y-0.5">
          
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
            <div className="flex flex-col" >
                <label className="font-mono text-lg font-semibold text-primary-dark dark:text-primary-light" >Nombre completo</label>
                <input 
                    type="text" 
                    {...register("full_name")}
                    className="text-primary-light dark:text-primary-dark h-auto p-1 bg-primary-dark dark:bg-primary-light rounded border-0 focus:outline focus:outline-[3px] focus:outline-primary-dark/50 focus:dark:outline-primary-light/30"/>
            </div>
            <div className="flex flex-col">
                <label className="font-mono text-lg font-semibold text-primary-dark dark:text-primary-light">Correo electronico</label>
                <input type="email" {...register("user_mail")} className="text-primary-light dark:text-primary-dark h-auto p-1 bg-primary-dark dark:bg-primary-light rounded border-0 focus:outline focus:outline-[3px] focus:outline-primary-dark/50 focus:dark:outline-primary-light/30"/>
            </div>
            <div className="flex flex-col">
                <label className="font-mono text-lg font-semibold text-primary-dark dark:text-primary-light" >Mensaje</label>
                <textarea {...register("body_message")} className="min-h-[100px] text-primary-light dark:text-primary-dark h-auto p-1 bg-primary-dark dark:bg-primary-light rounded border-0 focus:outline focus:outline-[3px] focus:outline-primary-dark/50 focus:dark:outline-primary-light/30"/>
            </div>
            <div>
                <button type="submit" className="bg-primary-dark dark:bg-primary-light text-primary-light dark:text-primary-dark font-mono font-semibold rounded py-1 px-2">Enviar</button>
            </div>
            
          </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default index
