import { useEffect, useState } from "react";
import FormHeader from "../../../components/Form/FormHeader";
import FormTitle from "../../../components/Form/FormTitle";
import Input from "../../../components/Form/Input";
import email_icon from "../../../assets/email_icon.png";
import pwd_icon from "../../../assets/pwd_icon.png";
import FormButton from "../../../components/Form/FormButton";
import FormFooter from "../../../components/Form/FormFooter";
import "./userlogin.css";
import { USER_LOGOUT } from "../../../redux/constants/user/authConstants";
import { userAuth } from "../../../redux/actions/user/authActions";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UserLogin = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  //   Get info from state
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   Submit form
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: "Warning!",
        description: "All Fields are Required",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(userAuth(email, password));
    }
  };

  //   error
  if (error) {
    toast({
      title: "Error!",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: USER_LOGOUT });
  }

  //   redirect to dashboard if login successful
  useEffect(() => {
    if (userInfo) {
      navigate("/user/dashboard");
    }
  }, [navigate, userInfo]);
  return (
    <div className="userLogin">
      <FormHeader />

      <div className="userLoginBody">
        {loading ? (
          <Center>
            <CircularProgress color="#FEA500" isIndeterminate />
          </Center>
        ) : (
          <form onSubmit={submitHandler}>
            <FormTitle
              title="Hello There!"
              subTitle="Please enter your correct details"
            />
            <Input
              img={email_icon}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              img={pwd_icon}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="smallDiv">
              <small>
                <Link to="/user/forgot-password">Forgot Password?</Link>
              </small>
            </div>
            <FormButton
              bgColor="#FEA500"
              bxShadow="0px 4px 4px rgba(254, 165, 0, 0.43)"
              content="Login"
            />
            <FormFooter
              footerText="Don't have an account?"
              footerSpanText="Register"
              color="#00A19C"
              page="/user/register"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default UserLogin;
