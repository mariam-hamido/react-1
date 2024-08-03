import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';





export default function Footer() {
  return (
    <div>
      

<footer className="bg-gray-700 ">
<div className="mx-auto w-full max-w-screen-xl py-20">
  <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3 text-white">
    <div className="">
        <h2 className="mb-6  font-semibold text-gray-900 uppercase dark:text-white text-3xl">LOCATION</h2>
        <p>2215 John Daniel Drive</p>
        <p> Clark, MO 65243</p>
    </div>
    <div className="">
    <h2 className="mb-6  font-semibold text-gray-900 uppercase dark:text-white text-3xl">AROUND THE WEB</h2>
    <div className="icons flex mx-auto justify-between px-28">
    <div className="flex items-center">
      <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center">
      <FontAwesomeIcon icon="fa-brands fa-facebook" />
      <FontAwesomeIcon icon={faFacebook} />
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center">
      <FontAwesomeIcon icon={faTwitter} />
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center">
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
    </div>
    <div className="flex items-center">
      <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center">
        <FontAwesomeIcon icon={faGlobe} />
      </div>
    </div>


    </div>
    </div>
    <div className="">
    <h2 className="mb-6  font-semibold text-gray-900 uppercase dark:text-white text-3xl">ABOUT FREELANCER</h2>
    <p>Freelance is a free to use, licensed Bootstrap theme</p>
    <p>created by Route</p>
    </div>
</div>

</div>
<div className=" px-4 py-6 bg-gray-100 dark:bg-gray-800 md:flex md:items-center md:justify-center ">
    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Your Website 2021</a>
    </span>
  </div>
</footer>




    </div>
  )
}
