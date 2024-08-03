
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import homeImage from "../../assets/images/avataaars.svg";

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-center bg-emerald-500 text-white py-28">
    <img src={homeImage} alt='image' className='w-1/6'></img>
      <h2 className="font-bold text-4xl mt-3">START FRAMEWORK</h2>
      <div className="star-container flex my-2">
        <div className="star-line"> </div>
        <FontAwesomeIcon icon={faStar} className="mx-2" />
        <div className="star-line"> </div>
      </div>
      <p className=''>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}

