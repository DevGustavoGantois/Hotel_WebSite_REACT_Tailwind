import React from 'react';
//import Link
import { Link } from 'react-router-dom';
//import icons
import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs';


const Room = ( { room } ) => {
  //destructure room
  const {id, name, image, size, maxPerson, description, price} = room;
  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>
      <div className='overflow-hidden'>
        <img className='group-hover:scale-110 transition-all duration-300 w-full' src={image} alt="" />
      </div>
      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
        <div className='flex justify-between w-[80%]'>
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsArrowsFullscreen className='text-[15px]'/>
            </div>
            <div className='flex gap-x-1'>
              <div>Tam</div>
              <div>{size}m2</div>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsPeople className='text-[18px]'/>
            </div>
            <div className='flex gap-x-1'>
              <div>Pessoas</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
       </div>
       <div className='text-center'>
        <Link to={`/room/${id}`}>
          <h3 className='h3'>{name}</h3>
        </Link>
        <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{description.slice(0, 56)}</p>
       </div>
       <Link to={`/room/${id}`} className='btn btn-secondary btn-sm max-w-[240px] mx-auto'>
         Reserve por R${price}
       </Link>
    </div>
  )
}

export default Room