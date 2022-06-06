import Logo from "../../components/Logo"
import Button from "../../components/Button";
import './landingpage.css';

const Home = () => {
    return(
        <div className="landingPage">
            <div className="landingPageHead">
                <Logo />
                <Button btnText='Admin' bgColor='#00A19C' bxShadow='0px 4px 20px #FFFFFF' page='/admin/login'/>
            </div>
    
            <div className="landingPageBody">
                <section className="landingBodyLeft">
                    <div>
                        <p>Welcome to the
                            <hr/>
                        </p> 
                        <h1>HELPDESK</h1> 
                        <h1>PORTAL</h1>
                        <div className="landingBodyButton">
                            <Button btnText='Register' bgColor='#00A19C' bxShadow='0px 4px 20px rgba(0, 0, 0, 0.56)' page='/user/register'/>
                            <Button btnText='Login' bgColor='#FEA500' bxShadow='0px 4px 20px rgba(0, 0, 0, 0.56)' page='/user/login'/>
                        </div>   
                    </div>
                </section>

                <section className="landingBodyRight">
                </section>
            </div>
        </div>
    )
} 

export default Home;