import { useState } from "react"
import HomeSection from "./components/Sections/HomeSection"
import CustomCursor from "./components/CustomUI/CustomCursor"
import Navbar from "./components/CustomUI/Navbar"
import SplashScreen from "./components/CustomUI/SplashScreen"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen min-w-screen overflow-x-hidden bg-[#0b0b0d]">
        <Navbar />
        <HomeSection />
      </div>
    </>
  )
}
export default App
