import {useLocation} from 'react-router-dom'
const Login = () => {
    let location = useLocation()
    console.log(location.state.st)
    return(
        <>
            <h1>Login Page</h1>
        </>
    )
}
export default Login