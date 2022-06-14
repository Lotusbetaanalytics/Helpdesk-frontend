import { Link } from 'react-router-dom';
import DashboardHead from '../../../components/DashboardHead';
import UserSidebar from '../../../components/UserSideBar';
import DashboardInput from '../../../components/DashboardInput';
import Dropdown from '../../../components/Form/DropDown';
import './issue.css';

const Issue = () => {
    return(
        <div>
            <UserSidebar />
            <DashboardHead title='Create a Ticket' />

            <div className='inputWrapper'>
                <DashboardInput type='text' placeholder='Ticket Name' className='inputContent1'/>
                <Dropdown placeholder='Select Help Desk Team(optional)' color='rgba(0, 0, 0, 0.56)' bgColor='rgba(196, 196, 196, 0.2)' border='0' width='100%' height='75px' className='inputContent4'/>
                <Dropdown placeholder='Select Priority Level' color='rgba(0, 0, 0, 0.56)' bgColor='rgba(196, 196, 196, 0.2)' border='0' width='100%' height='75px' className='inputContent2'/>
                <textarea placeholder='Comment' className='inputContent3'></textarea>
                <DashboardInput type='file' name='Choose file' className='inputContent5'/>

                <Link to='/'><button>Submit</button></Link>
            </div>
            
            
            
        </div>
    )
}


export default Issue; 