import React from 'react';
import mainImage from '../assets/img/main2.jpg'

const Main = () => {
 return (
      <div className="intro">
          <img className="intro-photo" src={mainImage}/>
          <div className="intro-text">
              <div className="intro-main-text">
                  Выбери свой университет
              </div>
              <div className="intro-discription-text">
                  Выбери свой университет из списка и авторизируйся, <br/>чтобы просматривать материалы
              </div>
              <form name="">
                  <select name="universe" className="select" id="selection">
                      <option value="hide">Выбери университет</option>
                      <option value="Itmo">ИТМО</option>
                      <option value="Spbgu">СПБГУ</option>
                      <option value="Spbpu">СПБПУ</option>
                      <option value="2013">СБПГЭУ</option>
                      <option value="2014">СПБГУП</option>
                  </select>
              </form>
              <a href="auth.html">
                  <div className="arrow-1" id="arrow">
                  </div>
              </a>
          </div>
        </div>
 );
};

export default Main;