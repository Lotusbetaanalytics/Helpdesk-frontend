import DashboardHead from '../../../components/DashboardHead';
import UserSidebar from '../../../components/UserSideBar';
import Dropdown from '../../../components/Form/DropDown';
// import MaterialTable from 'material-table';
import './mytickets.css';

const MyTickets = () => {
    // const data = [
    //     {
    //       name:'Aishat', Age:'20'
    //     },
    //     {
    //       name:'Aishat', Age:'20'
    //     }
    // ]
    
    // const columns = [
    //     {
    //       title:'Name', field:'name' 
    //     },
    //     {
    //       title:'Age', field:'age' 
    //     }
    // ] 

    return(
        <div>
            <UserSidebar />
            <DashboardHead title='My Tickets' />

            <div className='tableWrapper'>
                <Dropdown placeholder='Select Ticket Status' color='rgba(0, 0, 0, 0.56)'  border='1px solid rgba(0, 0, 0, 0.37)' width='230px' height='87px' className='inputContent2'/>

                
            </div>
            
{/*             
            <MaterialTable data={data} columns={columns}/> */}
        </div>
    )
}


export default MyTickets; 