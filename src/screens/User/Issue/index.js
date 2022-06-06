import DashboardHead from '../../../components/DashboardHead';
import Sidebar from '../../../components/SideBar';
import DashboardInput from '../../../components/DashboardInput';
import Dropdown from '../../../components/Form/DropDown';
import Button from '../../../components/Button';
import './issue.css';

const Issue = () => {
    return(
        <div>
            <Sidebar sideBarContent1='Dashboard' sideBarContent2='Create Ticket' sideBarContent3='My Tickets'/>
            <DashboardHead title='Create a Ticket' />

            <div className='inputWrapper'>
                <DashboardInput type='text' placeholder='Ticket Name' className='inputContent1'/>
                <Dropdown placeholder='Select Help Desk Team(optional)' className='inputContent4'/>
                <Dropdown placeholder='Select Priority Level' className='inputContent2'/>
                <textarea placeholder='Comment' className='inputContent3'></textarea>
                <DashboardInput type='file' name='Choose file' className='inputContent5'/>

               
                <Button bgColor='#00A19C' bxShadow='0px 4px 4px rgba(0, 161, 156, 0.37)' btnText='Submit' page='/'/>
            </div>
            
            
            
        </div>
    )
}


export default Issue; 