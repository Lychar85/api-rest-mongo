import React from 'react';

const Navigation = () =>{
        return (
            <div className="navigation">
                <a href="/"  activeClassName="nav-active">
                Accueil
                </a>
                
                <a href="/destination"  activeClassName="nav-active">
                Destination
                </a>

                <a href="/technologie"  activeClassName="nav-active">
                Notre technologie
                </a>
                
            </div>
        );
};



export default Navigation;