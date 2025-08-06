import React from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

    const [pickupLocation, setPickupLocation] = useState('')

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-15 bg-light text-center'>

            <h1 className='text-4x1 md:text-5x1 font-semibold'>Affordable Luxury Cars on Rent</h1>

        <form className='flex flex-col md:flex-row items-start md:items-center
        justify-between p-10 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200
        bg-white shadow-[opx_8px_2-px_rgba(0,0,0,0,1)]'>

            <div className='flex flex-col md:flex-row items-start md:items-center
            gap-10 min-md:ml-10'>
                <div className='flex flex-col items-start gap-2'>
                    <select required value ={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)}> 
                        <option value="">Pickup Location</option>
                        {cityList.map((city)=> <option key={city} value={city}>{city}</
                        option>)}
                    </select>
                    <p className="px-1 text-sm text-gray-500">{pickupLocation ? pickupLocation : 'Please select location'}Please select Location</p>
                </div>
            </div>

        </form> 

        <img src={assets.main_car} alt="car" className='max-h-135'/>
    </div>
  )
}

export default Hero
