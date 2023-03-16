import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Outlet } from "react-router-dom";

const MainPage = ():JSX.Element => {
  return (
    <>

    <div className="container min-h-screen min-w-full mx-auto bg-secondary-light dark:bg-primary-dark transition duration-300">
    <Header />
      <Outlet/>
    <Footer />

    </div>
      
      </>
  )
}

export default MainPage