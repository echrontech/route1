import {NavLink} from 'react-router-dom'
const Nav = () => {
    return (
        <>
            <ul>
                <li><NavLink to="/" style={({isActive})=>{return {backgroundColor: isActive? 'yellow' : ''}}}>Home</NavLink></li>
                <li><NavLink to="/about" style={({isActive})=>{return {backgroundColor: isActive? 'yellow' : ''}}}>About</NavLink></li>
                <li><NavLink to="/contact" style={({isActive})=>{return {backgroundColor: isActive? 'yellow' : ''}}}>Contact</NavLink></li>
                <li><NavLink to="/post/saleem/5" style={({isActive})=>{return {backgroundColor: isActive? 'yellow' : ''}}}>Post</NavLink></li>
            </ul>
        </>
    )
}
export default Nav