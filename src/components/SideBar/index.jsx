import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { GrTicket } from 'react-icons/gr';
import { RiTicketLine } from 'react-icons/ri';
import Logo from '../Logo';
import styles from './styles.module.css';


const SideBar = ({sideBarContent1, sideBarContent2, sideBarContent3}) => {

    return(
        <div className={styles.sidebar}>
                <header>
                    <Logo logoContent='HelpDesk'/>
                </header>

                <main>
                    <ul>
                        <Link to='/'><li><p><MdDashboard/> <span>{sideBarContent1}</span>
                        </p></li></Link>
                        <Link to='/'><li><p><GrTicket/> <span>{sideBarContent2}</span></p></li></Link>
                        <Link to='/'><li><p><RiTicketLine/> <span>{sideBarContent3}</span></p></li></Link>
                    </ul>
                </main>
        </div>
    )
}

export default SideBar;