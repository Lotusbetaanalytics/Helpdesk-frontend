import DashboardHead from '../../../components/DashboardHead';
import LinkCard from '../../../components/LinkCard';
import UserSidebar from '../../../components/UserSideBar';
import './createticket.css';

const CreateTicket = () => {
    return(
        <div>
            <UserSidebar />
            <DashboardHead title='Dashboard' subTitle='Ticket Types(select ticket type)'/>

            <div className='linkCardWrapper'>
                <LinkCard page='/user/create/ticket/issue' linkCardText='Question'/>
                <LinkCard page='/user/create/ticket/issue' linkCardText='Issue'/>
            </div>
        </div>
    )
}


export default CreateTicket; 