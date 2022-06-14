import DashboardHead from '../../../components/DashboardHead';
import AdminSidebar from '../../../components/AdminSideBar';
import Button from '../../../components/Button';
import Tabs from '../../../components/Tabs';
import LinkCard from '../../../components/LinkCard'
import './tickettype.css';

const TicketType = () => {
  return (
    <div>
        <AdminSidebar />
        <DashboardHead title='Configuration Tab'/>

        <div className='cardWrapper' >
            <Tabs />
            <Button fontSize='14px' bgColor='#00A19C' bxShadow='0px 4px 4px rgba(0, 161, 156, 0.37)' btnText='Create Ticket Type' page='/' padding='22px 39px'/>

            <div className='linkCardDiv'></div>
          
            <LinkCard  borderRadius='15px' linkCardText='Question' page='/'/>
            <LinkCard  borderRadius='15px' linkCardText='Issue' page='/'/>
        </div>
    </div>
  )
};

export default TicketType;