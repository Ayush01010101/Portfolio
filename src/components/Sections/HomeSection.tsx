import type { ReactNode } from "react";
import Menu from "../CustomUI/Menu";
const HomeSection = (): ReactNode => {
  return (
    <>
      <div className="fixed  ">
        <Menu />
      </div>
      <div>

        <h2 className="text-5xl text-white text-center pt-9 ">Ayush Awachar</h2>

      </div>


      {/* for main screen */}
      <div className="mx-20 items-center h-[50vh] rounded-2xl flex justify-evenly  mt-20"  >
      </div>

    </>
  )
}


export default HomeSection
