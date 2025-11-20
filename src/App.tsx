import HomeSection from "./components/Sections/HomeSection"
import CustomCursor from "./components/CustomUI/CustomCursor"
import Navbar from "./components/CustomUI/Navbar"
function App() {

  return (
    <>

      <CustomCursor />
      <div className="min-h-screen min-w-screen overflow-x-hidden  bg-[#0b0b0d]">
        <Navbar />
        < HomeSection />

      </div>
    </>
  )
}
export default App
