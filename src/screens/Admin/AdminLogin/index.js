import { useEffect } from "react";
import FormHeader from "../../../components/Form/FormHeader";
import FormTitle from "../../../components/Form/FormTitle";
import MicrosoftLogin from "react-microsoft-login";
import "./adminlogin.css";
import { useNavigate } from "react-router-dom";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN_LOGOUT } from "../../../redux/constants/admin/authConstants";
import { adminAuth } from "../../../redux/actions/admin/authActions";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  //   Microsoft SSO
  const authHandler = (err, data, msal) => {
    if (err) {
      toast({
        title: "Error",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      sessionStorage.clear();
    }
    if (data) {
      const accessToken = data.accessToken;
      dispatch(adminAuth(accessToken));
      sessionStorage.clear();
    }
  };

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo, error, loading } = adminLogin;

  // if token exist redirect to dashboard
  useEffect(() => {
    if (adminInfo) {
      navigate("/admin/dashboard");
    }
  }, [navigate, adminInfo]);

  // if error login
  if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: ADMIN_LOGOUT });
  }
  return (
    <div className="adminLogin">
      <FormHeader />

      <div className="adminLoginBody">
        <div>
          <FormTitle
            title="Hello There!"
            subTitle="Please Click on the button to sign in"
          />
          {loading ? (
            <Center>
              <CircularProgress isIndeterminate color="#087E8C" />
            </Center>
          ) : (
            <MicrosoftLogin
              clientId="ee241df3-3ed6-424f-95cb-2b58de8f5e07"
              authCallback={authHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
