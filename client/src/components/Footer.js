import React from 'react';
import tg from '../assets/img/telegram.svg'
import inst from '../assets/img/inst1.svg'
import vk from '../assets/img/vk.svg'

const Footer = () => {
 return (
  <div>
       <div className="socials">
           <img src={tg} alt="LinkedIn"/>
           <img src={inst} alt="Instagram"/>
           <img src={vk} alt="Behance"/>
       </div>
       <p className="little__text">Подписывайтесь на нас в Телеграм, Инстаграм, VK</p>
  </div>
 );
};

export default Footer;