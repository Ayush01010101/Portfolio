import HomeSection from "./components/Sections/HomeSection"

function App() {

  return (
    <>
      <div className="fixed w-screen bg-black/10 pointer-events-none z-200  h-screen">
      </div>
      <div className="min-h-screen  bg-[#0b0b0d]">
        < HomeSection />
      </div>

    </>
  )
}
export default App
