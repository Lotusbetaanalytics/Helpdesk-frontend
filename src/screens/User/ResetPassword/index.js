import FormHeader from "../../../components/Form/FormHeader";
import FormTitle from "../../../components/Form/FormTitle";
import Input from "../../../components/Form/Input";
import email_icon from "../../../assets/email_icon.png";
import pwd_icon from "../../../assets/pwd_icon.png";
import "./styles.css";
import FormButton from "../../../components/Form/FormButton";
import FormFooter from "../../../components/Form/FormFooter";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { resetMyPassword } from "../../../redux/actions/user/authActions";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import { RESET_PASSWORD_RESET } from "../../../redux/constants/user/authConstants";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  // Helpers
  const { token } = useParams();
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  //   Get info from state
  const resetPassword = useSelector((state) => state.resetPassword);
  const { loading, error, success } = resetPassword;

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
      dispatch(resetMyPassword(token, email, password, confirmPassword));
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
    dispatch({ type: RESET_PASSWORD_RESET });
  }

  //   redirect to login if successful
  if (success) {
    toast({
      title: "Success!",
      description: "Password Reset Successful",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: RESET_PASSWORD_RESET });
    navigate("/user/login");
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
                title="Reset Password"
                subTitle="Please enter New Password"
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
                placeholder="New Password"
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
                content="Reset Password"
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

export default ResetPassword;
