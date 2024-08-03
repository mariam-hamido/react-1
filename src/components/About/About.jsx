import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons"


export default function About() {
  return (
    <div>
    <div className=" flex flex-col items-center justify-center bg-emerald-500 text-white py-56">
      <h2 className="font-bold text-4xl mt-3">ABOUT COMPONENT</h2>
      <div className="star-container flex my-2">
        <div className="star-line"> </div>
        <FontAwesomeIcon icon={faStar} className="mx-2" />
        <div className="star-line"> </div>
      </div>
      <div className="flex mx-32 justify-between text-start  ">
      <p className="w-1/2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      <p className="w-1/2 ">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      </div>
    </div>
    </div>
  )
}
