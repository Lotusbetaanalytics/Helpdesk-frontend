import styles from './styles.module.css';

const DashboardHead = ({ title, subTitle, subTitleInner}) => {

    return(
        <div className={styles.dashboardhead}>
            <header>
                <p>{title}</p>
            </header>

            <div>
                <p>{subTitle}<span>{subTitleInner}</span></p>
            </div>
        </div>
    )
}

export default DashboardHead;