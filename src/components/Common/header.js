import React from 'react'

function Header(){
    return <nav>
                <a href='/'>Home Page</a> | <a href='/course'>Courses</a> | {" "}
                <a href='/about'> About Page</a>
           </nav>
}

export default Header;