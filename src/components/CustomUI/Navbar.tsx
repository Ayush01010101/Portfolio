import Menu from "./Menu";
import type { FC } from "react";
const Navbar: FC = () => {

  return (
    <>
      <nav className="p-3 flex  justify-between  ">



        <div className="rounded-2xl text-center text-5xl p-5  text-[#f4f4f5]  w-full  ">
          Ayush Awachar
        </div>
        <div className="fixed z-100">

          <Menu />
        </div>
      </nav >

    </>
  )
}

export default Navbar


