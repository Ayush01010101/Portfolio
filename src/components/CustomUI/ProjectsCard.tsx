import type { CardSim } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
const ProjectsCard = () => {
  const CardHolderRef = useRef<any>(null)


  return (
    <div ref={CardHolderRef} className="card-holder">
      <div className="h-60 check rounded-2xl  w-64">
        Card
      </div>
      <div className="h-60 check rounded-2xl  w-64">
        Card
      </div>
      <div className="h-60 check rounded-2xl  w-64">
        Card
      </div>
      <div className="h-60 check rounded-2xl  w-64">
        Card
      </div>

      <div className="h-60 check rounded-2xl  w-64">
        Card
      </div>


      <div className="h-60 check rounded-2xl  w-64">
        Card
      </div>








      *::-webkit-scrollbar {
        display: none;
}

      .show-scroll::-webkit-scrollbar {
        display: block;
      width: 4px !important;
}ault ProjectsCard
