import { useState } from 'react';
import DashboardHead from '../../../components/DashboardHead';
import AdminSidebar from '../../../components/AdminSideBar';
import Tabs from '../../../components/Tabs';
import LinkCard from '../../../components/LinkCard'
import './configuration.css';
import Modal from '../../../components/Modal';

const Configuration = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='configurationWrapper'>
      <AdminSidebar />
      <DashboardHead title='Configuration Tab'/>

      <div className='cardWrapper' >
          <Tabs/>
          <button onClick={() => setIsOpen(true)}>Create Team</button>

          <>
            <LinkCard  borderRadius='15px' linkCardText='Business Solutions' page='/'/>
            <LinkCard  borderRadius='15px' linkCardText='Infrastructure' page='/'/>
            <LinkCard  borderRadius='15px' linkCardText='Data and AI' page='/'/>
            <LinkCard  borderRadius='15px' linkCardText='Security' page='/'/>
            <LinkCard  borderRadius='15px' linkCardText='Sales' page='/'/>
          </>
      </div>

      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  )
};

export default Configuration;