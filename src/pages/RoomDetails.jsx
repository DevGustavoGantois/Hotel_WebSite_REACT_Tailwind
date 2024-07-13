import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
//import components
import AdultsDropdown from '../components/AdultsDropdown';
import KidsDropdown from '../components/KidsDropdown';
import Checkln from '../components/Checkln';
import CheckOut from '../components/CheckOut';
//import context
import { RoomContext } from '../context/RoomContext';
//import icons
import {  FaWifi, FaCoffee, FaBath, FaParking, FaSwimmingPool, FaHotdog, FaStopwatch,FaCocktail, FaCheck } from 'react-icons/fa';
//import scroll top component
import ScrollToTop from '../components/ScrollToTop';

const RoomDetails = () => {
  const {rooms} = useContext(RoomContext);
  const {id} = useParams();

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  
  const {name, description, facilities, imageLg,  price} = room;

  return (
    <section>
      <ScrollToTop/>
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        <div className='absolute w-full h-full bg-black/70'></div>
        <h1 className='text-6xl text-white z-20 font-primary text-center'>{name} Detalhes</h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className='h2'>{name}</h2>
            <p className='mb-8'>{description}</p>
            <img className='mb-8' src={imageLg} alt="" />
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Facilidades do Quarto</h3>
              <p className='mb-12'>
              Bem-vindo ao Quarto Luxuoso, um oásis de conforto e sofisticação projetado para oferecer a você a melhor experiência de hospedagem. Aqui, cada detalhe foi cuidadosamente pensado para garantir que sua estadia seja memorável e repleta de conveniência.
              </p>
              <div className='grid grid-cols-3 gap-6 mb-12'>
      <div className='flex items-center gap-x-3'>
        <FaWifi className='text-3xl text-accent' />
        <p>Wifi</p>
      </div>
      <div className='flex items-center gap-x-3'>
        <FaBath className='text-3xl text-accent' />
        <p>Banheiro</p>
      </div>
      <div className='flex items-center gap-x-3'>
        <FaParking className='text-3xl text-accent' />
        <p>Parque</p>
      </div>
      <div className='flex items-center gap-x-3'>
        <FaSwimmingPool className='text-3xl text-accent' />
        <p>Piscina de Natação</p>
      </div>
      <div className='flex items-center gap-x-3'>
        <FaHotdog className='text-3xl text-accent' />
        <p>Café da Manhâ</p>
      </div>
      <div className='flex items-center gap-x-3'>
        <FaStopwatch className='text-3xl text-accent' />
        <p>Academia</p>
      </div>
      <div className='flex items-center gap-x-3'>
        <FaCocktail className='text-3xl text-accent' />
        <p>Jantar</p>
      </div>
    </div>
            </div>
          </div>
          <div className="w-full h-full lg:w-[40%]">
           <div className='py-8 px-6 bg-accent/20 mb-12'>
            <div className='flex flex-col space-y-4 mb-4'>
              <h3>Sua Reserva</h3>
              <div className='h-[60px]'>
                <Checkln/>
              </div>
              <div className='h-[60px]'>
                <CheckOut/>
              </div>
              <div className='h-[60px]'>
                <AdultsDropdown/>
              </div>
              <div className='h-[60px]'>
                <KidsDropdown/>
              </div>
            </div>
            <button className='btn btn-lg btn-primary w-full'>Reserve por R${price}</button>
           </div>
           <div>
            <h3 className='h3'>Regras do Hotel</h3>
            <p className='mb-6'>

            </p>
            <ul className='flex flex-col gap-y-4'>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Check-in: 15:00 horas - 21:00 horas
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Check-out: 10:30 da Manhã
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Não é permitido cachorros
              </li>
              <li className='flex items-center gap-x-4'>
                <FaCheck className='text-accent'/>
                Não é Permitido fumar
              </li>
            </ul>
           </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomDetails
