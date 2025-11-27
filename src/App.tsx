import HomeSection from "./components/Sections/HomeSection"
import CustomCursor from "./components/CustomUI/CustomCursor"
import Navbar from "./components/CustomUI/Navbar"
import SplashScreen from "./components/CustomUI/SplashScreen"

function App() {
  return (
    <>
      <CustomCursor />
      <SplashScreen onComplete={() => { }} />

      <div className="min-h-screen min-w-screen overflow-x-hidden bg-[#0b0b0d]">
        <Navbar />
        <HomeSection />
      </div>
    </>
  )
}
export default App
