import DashboardHead from '../../../components/DashboardHead';
import AdminSidebar from '../../../components/AdminSideBar';
import Tabs from '../../../components/Tabs';
import LinkCard from '../../../components/LinkCard'
import './stages.css';

const Stages = () => {
  return (
    <div>
        <AdminSidebar />
        <DashboardHead title='Configuration Tab'/>

        <div className='cardWrapper' >
            <Tabs />
            <p>Ticket Type</p>
            
            <div className='linkCardDiv'></div>
          
            <LinkCard  borderRadius='15px' linkCardText='Question' page='/admin/configuration/stages/type'/>
            <LinkCard  borderRadius='15px' linkCardText='Issue' page='/admin/configuration/stages/type'/>
        </div>
    </div>
  )
};

export default Stages;