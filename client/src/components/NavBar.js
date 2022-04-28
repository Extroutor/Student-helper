import React from 'react';
import Auth from '../pages/Auth'

const NavBar = () => {
 return (
      <div className="header-wrap">
          <h1 className="title">Студент <p className="title-p2">Форум</p>
          </h1>
          <hr/>
          <nav className="header-menu">
              <ul className="header-list">
                  <li className="header-item">
                      <a className="header-link" href="/">Главная</a>
                  </li>

                  <li className="header-item">
                      <a className="header-link" href={Auth}>Мой аккаунт</a>
                  </li>

                  <li className="header-item">
                      <a className="header-link" href="/">FAQ</a>
                  </li>
              </ul>
          </nav>
      </div>
 );
};

export default NavBar;