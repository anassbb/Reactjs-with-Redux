import React from 'react'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import Header from './Common/header'
import CoursesPage from './CoursesPage'

function App(){
    function getPage(){
    const route = window.location.pathname;
    if (route === "/course") return <CoursesPage />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
}
    return <div className='container-fluid'>
            <Header/>
            {getPage()}
           </div>

}

export default App;