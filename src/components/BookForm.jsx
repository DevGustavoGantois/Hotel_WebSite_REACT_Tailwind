import React, { useContext } from 'react'
//import components
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import Checkln from '../components/Checkln';
import CheckOut from '../components/CheckOut';
import { RoomContext } from '../context/RoomContext';

const BookForm = () => {

 const { handleClick } = useContext(RoomContext)

  return (
    <form className='h-[300px] w-full bg-white lg:h-[70px]'>
      <div className='flex flex-col w-full h-full lg:flex-row'>
        <div className='flex-1 border-r'>
          <Checkln />
        </div>
        <div className='flex-1 border-r'>
          <CheckOut />
        </div>
        <div className='flex-1 border-r'>
          <AdultsDropdown />
        </div>
        <div className='flex-1 border-r'>
          <KidsDropdown />
        </div>
        <button onClick={(e) => handleClick(e)} type='submit' className='btn btn-primary'>Verifique Agora</button>
      </div>
    </form>
  )
}

export default BookForm
