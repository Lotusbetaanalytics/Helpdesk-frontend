import DashboardHead from "../../../components/DashboardHead";
import AdminSidebar from "../../../components/AdminSideBar";
import Button from "../../../components/Button";
// import Tabs from '../../../components/Tabs';
import "./slapolicies.css";

const SlaPolicies = () => {
  return (
    <div>
      <AdminSidebar />
      <DashboardHead title="Configuration Tab" />

      <div className="cardWrapper">
        {/* <Tabs /> */}

        <Button
          fontSize="14px"
          bgColor="#00A19C"
          bxShadow="0px 4px 4px rgba(0, 161, 156, 0.37)"
          btnText="Create Ticket Type"
          page="/"
          height="100%"
          padding="22px 16px"
        />
        <Button
          width="88px"
          height="19px"
          fontSize="14px"
          bgColor="#FEA500"
          bxShadow="0px 4px 4px #FEA500"
          btnText="Edit"
          page="/"
          padding="22px 63px"
        />
        <Button
          fontSize="14px"
          bgColor="#00A19C"
          bxShadow="0px 4px 4px rgba(0, 161, 156, 0.37)"
          btnText="View in SLA"
          page="/"
          padding="22px 39px"
        />
      </div>
    </div>
  );
};

export default SlaPolicies;
