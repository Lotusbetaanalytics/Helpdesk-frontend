import FormHeader from "../../../components/Form/FormHeader";
import FormTitle from "../../../components/Form/FormTitle";
import Input from "../../../components/Form/Input";
import name_icon from "../../../assets/name_icon.png";
import email_icon from "../../../assets/email_icon.png";
import pwd_icon from "../../../assets/pwd_icon.png";
import "./userregister.css";
import FormButton from "../../../components/Form/FormButton";
import FormFooter from "../../../components/Form/FormFooter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { registration } from "../../../redux/actions/user/authActions";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import { USER_REGISTER_RESET } from "../../../redux/constants/user/authConstants";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  // Helpers
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  //   Get info from state
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, success } = userRegister;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   Submit form
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Warning!",
        description: "Password does not match",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(registration(fullName, email, password, confirmPassword));
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
    dispatch({ type: USER_REGISTER_RESET });
  }

  //   redirect to login if successful
  if (success) {
    toast({
      title: "Success!",
      description: "User Registration Successful",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: USER_REGISTER_RESET });
    navigate(`/user/verification/${email}`);
  }

  return (
    <div className="userRegister">
      <FormHeader />

      <div className="userRegisterBody">
        <div>
          {loading ? (
            <Center>
              <CircularProgress isIndeterminate color="#00A19C" />
            </Center>
          ) : (
            <form onSubmit={submitHandler}>
              <FormTitle
                title="Register"
                subTitle="Please enter your correct details"
              />
              <Input
                img={name_icon}
                type="name"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
              <Input
                img={pwd_icon}
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <FormButton
                bgColor="#00A19C"
                bxShadow="0px 4px 4px rgba(0, 161, 156, 0.37)"
                content="Register"
              />
            </form>
          )}
          <FormFooter
            footerText="Already have an account?"
            footerSpanText="Login"
            color="#9A198C"
            page="/user/login"
          />
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
