import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <div>
            <div>Menu</div>
            <NavLink style={style} to={'/'} >Profole</NavLink>
            <NavLink style={style} to={'/login'} >Login</NavLink>
            <NavLink style={style} to={'/registration'} >Registration</NavLink>
            <NavLink style={style} to={'/passwordRecovery'} >Password recovery</NavLink>
            <NavLink style={style} to={'/enteringANewPassword'} >Entering a new password</NavLink>
            <NavLink style={style} to={'/test'} >Test</NavLink>
        </div>
    )
}


const style = {
    margin: "10px"
}