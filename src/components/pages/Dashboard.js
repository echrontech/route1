import {useNavigate} from 'react-router-dom'
const Dashboard = () => {
    let navi = useNavigate()
    let data = {
        'msg' : 'Logout Successfully'
    }
    return (
        <>
            <h1>Dashborad Page</h1>
            <button onClick={()=>{navi('/logout', {state:data})}}>Logout</button>
        </>
    )
}
export default Dashboard