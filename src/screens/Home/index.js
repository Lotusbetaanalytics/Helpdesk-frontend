import Logo from "../../components/Logo"
import Button from "../../components/Button";
import './landingpage.css';

const Home = () => {
    return(
        <div className="landingPage">
            <div className="landingPageHead">
                <Logo />
                <Button btnText='Admin' bgColor='#00A19C' bxShadow='0px 4px 20px #FFFFFF' page='/admin/login' padding='15px 40px' fontSize='18px'/>
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
                            <Button btnText='Register' bgColor='#00A19C' bxShadow='0px 4px 20px rgba(0, 0, 0, 0.56)' page='/user/register' padding='15px 40px' fontSize='18px'/>
                            <Button btnText='Login' bgColor='#FEA500' bxShadow='0px 4px 20px rgba(0, 0, 0, 0.56)' page='/user/login' fontSize='18px' padding='15px 40px'/>
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