import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { GrTicket } from 'react-icons/gr';
import { RiTicketLine } from 'react-icons/ri';
import Logo from '../Logo';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { adminLogout, fetchAdminProfile } from '../../redux/actions/admin/authActions';


const AdminSideBar = () => {
    const dispatch = useDispatch()

    const adminProfile = useSelector((state) => state.adminProfile)
    const { admin } = adminProfile

    useEffect(() => {
        dispatch(fetchAdminProfile())
    }, [dispatch])

    const logout = () => {
        dispatch(adminLogout())
    }
    console.log(admin)
    return (
        <div className={styles.adminSidebar}>
            <header>
                <Logo logoContent='HelpDesk' />
            </header>

            <main>
                <ul>
                    <Link to='/admin/dashboard'><li><p><MdDashboard /> <span>Dashboard</span>
                    </p></li></Link>
                    <Link to='/admin/configuration'><li><p><GrTicket /> <span>Configuration</span></p></li></Link>
                    <Link to='/'><li><p><RiTicketLine /> <span>Tickets</span></p></li></Link>
                    <Link to='/#' onClick={logout}><li><p><RiTicketLine /> <span>Logout</span></p></li></Link>
                </ul>
            </main>
        </div>
    )
}

export default AdminSideBar;