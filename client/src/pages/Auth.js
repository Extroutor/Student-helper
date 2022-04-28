import React from 'react';

const Auth = () => {
 return (
   <div className="intro">
       <div className="intro intro-text auth-text">
           <div className="intro-main-text auth-main-text">
               Войди в свой аккаунт
           </div>
           <form className="auth-form" action="" method="">
               <input type="text" placeholder="Введите логин"/>
               <input type="password" placeholder="Введите пароль"/>
               <button className="auth-button" type="submit">Войти</button>
               <p className="non-account">
                   У тебя нет аккаунта? - <a className="auth-a" href="register.html">зарегистрируйся!
                   </a>
               </p>
           </form>
       </div>
   </div>

 );
};

export default Auth;