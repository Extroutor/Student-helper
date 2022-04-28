import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
// import {Context} from "../index";
import Main from "../pages/Main";

const AppRouter = () => {
    // const {user} = useContext(Context)
    // console.log(user)

    return (
        <Routes>
            {authRoutes.map(({path, Component}) =>
            <Route path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Main/>}/>
        </Routes>
    );
};

export default AppRouter;