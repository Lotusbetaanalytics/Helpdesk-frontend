import DashboardHead from '../../../components/DashboardHead';
import Sidebar from '../../../components/SideBar';
import Card from '../../../components/Card';
import './userdashboard.css';

const UserDashboard = () => {
    return(
        <div className='userdashboard'>
            <Sidebar sideBarContent1='Dashboard' sideBarContent2='Create Ticket' sideBarContent3='My Tickets'/>
            <DashboardHead title='Dashboard' subTitle='My Tickets'/>

            <div className='cardWrapper'>
                <Card bgColor='#00A19C' no='20' cardText='Total Tickets Created'/>
                <Card bgColor='#00A19C' no='15' cardText='Total Tickets Created'/>
                <Card bgColor='#00A19C' no='5' cardText='Total Tickets Created'/>
            </div>
        </div>
    )
}


export default UserDashboard; 