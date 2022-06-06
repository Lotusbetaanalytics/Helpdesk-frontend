import FormHeader from "../../../components/Form/FormHeader";
import FormTitle from "../../../components/Form/FormTitle";
import Input from "../../../components/Form/Input";
import email_icon from '../../../assets/email_icon.png';
import pwd_icon from '../../../assets/pwd_icon.png';
import FormButton from "../../../components/Form/FormButton";
import FormFooter from "../../../components/Form/FormFooter";
import './userlogin.css';

const UserLogin = () => {
    return(
        <div className="userLogin">
            <FormHeader />

            <div className="userLoginBody">
                <div>
                    <FormTitle title='Hello There!' subTitle='Please enter your correct details'/>
                    <Input img={email_icon} type='email' placeholder='Email Address'/>
                    <Input img={pwd_icon} type='password' placeholder='Password'/>
                    <div className="smallDiv">
                        <small>Forgot Password?</small>
                    </div>
                    <FormButton bgColor='#FEA500' bxShadow='0px 4px 4px rgba(254, 165, 0, 0.43)' content='Login'/>
                    <FormFooter footerText="Don't have an account?" footerSpanText='Register' color='#00A19C' page='/user/register'/>
                </div>
            </div>
        </div>    
    )
}


export default UserLogin;