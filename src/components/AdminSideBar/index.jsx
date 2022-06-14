import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { GrTicket } from 'react-icons/gr';
import { RiTicketLine } from 'react-icons/ri';
import Logo from '../Logo';
import styles from './styles.module.css';


const AdminSideBar = () => {

    return(
        <div className={styles.adminSidebar}>
            <header>
                <Logo logoContent='HelpDesk'/>
            </header>

            <main>
                <ul>
                    <Link to='/'><li><p><MdDashboard/> <span>Dashboard</span>
                    </p></li></Link>
                    <Link to='/'><li><p><GrTicket/> <span>Configuration</span></p></li></Link>
                    <Link to='/'><li><p><RiTicketLine/> <span>Tickets</span></p></li></Link>
                </ul>
            </main>
        </div>
    )
}

export default AdminSideBar;