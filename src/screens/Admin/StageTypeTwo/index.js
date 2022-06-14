import DashboardHead from '../../../components/DashboardHead';
import AdminSidebar from '../../../components/AdminSideBar';
import Button from '../../../components/Button';
import Tabs from '../../../components/Tabs';
import './stagetypetwo.css';

const StageTypeTwo = () => {
  return (
    <>
        <AdminSidebar />
        <DashboardHead title='Configuration Tab'/>

        <div className='mainWrapper' >
            <Tabs />

            <div className='btnWrapper'>
              <Button fontSize='14px' bgColor='#00A19C' bxShadow='0px 4px 4px rgba(0, 161, 156, 0.37)' btnText='Create Stage' page='/'  height='100%' padding='20px 38px'/>
              <Button width='88px' height='19px' fontSize='14px' bgColor='#FEA500' bxShadow='0px 4px 4px #FEA500' btnText='Exclude Stage' page='/' padding='20px 38px'/>
            </div>

            <div className='checkboxesWrapper'>
              <section>
                <p>Stage Name</p>

                <div>
                  <input type='checkbox' name='new' id='new'/>
                  <label for='new'>New</label>
                </div>

                <div>
                  <input type='checkbox' name='inprogress' id='inprogress'/>
                  <label for='inprogress'>In Progress</label>
                </div>

                <div>
                  <input type='checkbox' name='solved' id='solved'/>
                  <label for='solved'>Solved</label>
                </div>

                <div>
                  <input type='checkbox' name='done' id='done'/>
                  <label for='done'>Done</label>
                </div>  

                <div>
                  <input type='checkbox' name='cancelled' id='cancelled'/>
                  <label for='cancelled'>Cancelled</label>
                </div>
              </section>
            </div>
        </div>

    </>
  )
};

export default StageTypeTwo;