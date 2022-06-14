import DashboardHead from '../../../components/DashboardHead';
import AdminSidebar from '../../../components/AdminSideBar';
import Card from '../../../components/Card';
import './admindashboard.css';

const AdminDashboard = () => {
    return(
        <div className='admindashboard'>
            <AdminSidebar />
            <DashboardHead title='Dashboard'/>

            <div className='cardWrapper'>
                <Card bgColor='#FEA500' no='20' cardText='Total Tickets Requests'/>
                <Card bgColor='#00A19C' no='15' cardText='Tickets Resolved'/>
                <Card bgColor='#FEA500' no='5' cardText='Tickets Cancelled'/>
                <Card bgColor='#00A19C' no='8' cardText='Pending Tickets'/>
                <Card bgColor='#00A19C' no='8' cardText='Assigned Tickets'/>
            </div>
        </div>
    )
}


export default AdminDashboard; 