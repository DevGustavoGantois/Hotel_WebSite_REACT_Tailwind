import React from 'react';
//logo
import LogoWhite from '../assets/img/logo-white.svg';


const Footer = () => {
  return (
    <div className='bg-primary py-12'>
      <div className="container mx-auto text-white flex justify-between">
        <a href="/">
        <img src={LogoWhite} alt="" />
        </a>
        Copyright &copy; 2024. Todos os Direitos Reservados. <a href="https://www.instagram.com/devgustavogantois_/?hl=pt-br" target='_blank'> Desenvolvido por @devgustavogantois_</a>
      </div>
    </div>
  )
}

export default Footer
