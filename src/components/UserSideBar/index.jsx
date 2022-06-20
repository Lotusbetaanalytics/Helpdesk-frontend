import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { AiTwotoneCreditCard } from 'react-icons/ai';
import { RiTicketLine } from 'react-icons/ri';
import Logo from '../Logo';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from '../../redux/actions/user/authActions';


const UserSideBar = () => {
    const dispatch = useDispatch()

    const userProfile = useSelector((state) => state.userProfile)
    const { user } = userProfile
    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])
    console.log(user)
    return (
        <div className={styles.userSidebar}>
            <header>
                <Link to='/'><Logo logoContent='HelpDesk' /></Link>
            </header>

            <main>
                <ul>
                    <Link to='/user/dashboard'><li><p><MdDashboard className='link' /> <span className='link'>Dashboard</span></p></li></Link>
                    <Link to='/user/create/ticket'><li><p><AiTwotoneCreditCard /> <span>Create Ticket</span></p></li></Link>
                    <Link to='/user/mytickets'><li><p><RiTicketLine /> <span>My Tickets</span></p></li></Link>
                </ul>
            </main>
        </div>
    )
}

export default UserSideBar;