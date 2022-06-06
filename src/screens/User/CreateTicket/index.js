import { Link } from 'react-router-dom';
import DashboardHead from '../../../components/DashboardHead';
import LinkCard from '../../../components/LinkCard';
import Sidebar from '../../../components/SideBar';
import './createticket.css';

const CreateTicket = () => {
    return(
        <div>
            <Sidebar sideBarContent1='Dashboard' sideBarContent2='Create Ticket' sideBarContent3='My Tickets'/>
            <DashboardHead title='Dashboard' subTitle='Ticket Types(select ticket type)'/>

            <div className='linkCardWrapper'>
                <Link to='/user/create/ticket/issue'><LinkCard bgColor='#fff' height='80px' border='0' bxShadow='0px 4px 15px #E5E5E5' linkCardText='Question'/></Link>
               <Link to='/user/create/ticket/issue'><LinkCard bgColor='#fff' height='80px' border='0' bxShadow='0px 4px 15px #E5E5E5' linkCardText='Issue'/></Link> 
            </div>
        </div>
    )
}


export default CreateTicket; 