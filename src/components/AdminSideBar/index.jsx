import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { GrTicket } from 'react-icons/gr';
import { RiTicketLine } from 'react-icons/ri';
import Logo from '../Logo';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { adminLogout, fetchAdminProfile } from '../../redux/actions/admin/authActions';


const AdminSideBar = () => {
    const dispatch = useDispatch()

    const adminProfile = useSelector((state) => state.adminProfile)
    const { admin } = adminProfile

    useEffect(() => {
        dispatch(fetchAdminProfile())
    }, [dispatch])

    console.log(admin)

    const logout = () => {
        dispatch(adminLogout())
    }
    const [toggle, setToggle] = useState(false)
    return (
        <div className={styles.adminSidebar}>
            <header>
                <Logo logoContent='HelpDesk' />
            </header>

            <div className={styles.links}>
                <ul>
                    <li><Link to={`/admin/dashboard`}><MdDashboard />Dashboard</Link></li>
                    <li onClick={() => setToggle(!toggle)}><GrTicket />Configuration</li>
                    {toggle && <div className={styles.inner}>
                        <ul>
                            <li><Link to='/admin/configuration'>Helpdesk Teams</Link></li>
                            <li><Link to='/admin/configuration/ticket/type'>Ticket Type</Link></li>
                            <li><Link to='/admin/configuration/stages'>Stages</Link></li>
                            <li><Link to='/admin/configuration/priority'>Priority</Link></li>
                            <li><Link to='/admin/configuration/sla/policies'>SLA Policies</Link></li>
                        </ul>
                    </div>}
                    <li><Link to={`/admin/tickets`}><RiTicketLine /> Tickets</Link></li>
                    <li><Link to={`/#`} onClick={logout}><RiTicketLine />Logout</Link></li>



                </ul>
            </div>

        </div>
    )
}

export default AdminSideBar;