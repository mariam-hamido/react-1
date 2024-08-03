import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import photo1 from '../../assets/images/poert1.png';
import photo2 from '../../assets/images/port2.png';
import photo3 from '../../assets/images/port3.png';




export default function Portofolio() {
  return (
    <div>
    <div className=" flex flex-col items-center justify-center ">
      <h2 className="font-bold text-4xl mt-3 text-gray-700">PORTFOLIO COMPONENT</h2>
      <div className="star-container flex my-2">
        <div className="star-line-c"> </div>
        <FontAwesomeIcon icon={faStar} className="mx-2 text-gray-700" />
        <div className="star-line-c"> </div>
      </div>
    </div>

    
    <div className= " container mx-auto my-10 grid grid-cols-3 gap-10">
    
    <div className="relative group col-span-1">
    <img src={photo1} alt="Image 1" className="rounded-lg hover:opacity-80" />
    <div className="absolute inset-0 bg-emerald-500 to-transparent opacity-0 group-hover:opacity-80 flex justify-center items-center duration-1000 "><FontAwesomeIcon icon={faPlus} className='text-white text-center text-6xl font-bold' /></div>
</div>

<div className="relative group col-span-1">
<img src={photo2} alt="Image 1" className="rounded-lg hover:opacity-80" />
<div className="absolute inset-0 bg-emerald-500 to-transparent opacity-0 group-hover:opacity-80 flex justify-center items-center duration-1000 "><FontAwesomeIcon icon={faPlus} className='text-white text-center text-6xl font-bold' /></div>
</div>
<div className="relative group col-span-1">
<img src={photo3} alt="Image 1" className="rounded-lg hover:opacity-80" />
<div className="absolute inset-0 bg-emerald-500 to-transparent opacity-0 group-hover:opacity-80 flex justify-center items-center duration-1000 "><FontAwesomeIcon icon={faPlus} className='text-white text-center text-6xl font-bold' /></div>
</div>
<div className="relative group col-span-1">
<img src={photo1} alt="Image 1" className="rounded-lg hover:opacity-80" />
<div className="absolute inset-0 bg-emerald-500 to-transparent opacity-0 group-hover:opacity-80 flex justify-center items-center duration-1000 "><FontAwesomeIcon icon={faPlus} className='text-white text-center text-6xl font-bold' /></div>
</div>
<div className="relative group col-span-1">
<img src={photo2} alt="Image 1" className="rounded-lg hover:opacity-80" />
<div className="absolute inset-0 bg-emerald-500 to-transparent opacity-0 group-hover:opacity-80 flex justify-center items-center duration-1000 "><FontAwesomeIcon icon={faPlus} className='text-white text-center text-6xl font-bold' /></div>
</div>
<div className="relative group col-span-1">
<img src={photo3} alt="Image 1" className="rounded-lg hover:opacity-80" />
<div className="absolute inset-0 bg-emerald-500 to-transparent opacity-0 group-hover:opacity-80 flex justify-center items-center duration-1000 "><FontAwesomeIcon icon={faPlus} className='text-white text-center text-6xl font-bold' /></div>
</div>
</div>


    </div>
  )
}
