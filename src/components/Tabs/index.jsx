import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Tabs = () => {
    const [state, setState] = useState('active');

    return(
        <div className={styles.tabs}>
           <table borderSpacing='50px' cellspacing="0">
                <tr>
                    <td><Link to='/admin/configuration'>Helpdesk Teams</Link></td>
                    <td><Link to='/admin/configuration/ticket/type'>Ticket Type</Link></td>
                    <td><Link to='/admin/configuration/stages'>Stages</Link></td>
                    <td><Link to='/admin/configuration/sla/policies'>SLA Policies</Link></td>
                </tr>
            </table> 
        </div>
    )
}

export default Tabs;