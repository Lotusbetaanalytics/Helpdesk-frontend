import DashboardHead from "../../../components/DashboardHead";
import AdminSidebar from "../../../components/AdminSideBar";
// import attach_a_file from "../../../assets/attach_a_file.png";
import "./pendingtickets.css";

const PendingTickets = () => {
  return (
    <div>
      <AdminSidebar />
      <DashboardHead title="Pending Tickets" />
      <div className="wrapper">
        <div>
          <p>Ticket Name</p>
          <p>Complaint</p>
        </div>

        <div>
          <p>Helpdesk Team</p>
          <p>Infrastructure</p>
        </div>

        <div>
          <p>Comment</p>
          <p>Software Error</p>
        </div>

        <div>
          <p>Priority Level</p>
          <p>Urgent</p>
        </div>

        <div>
          <p>Attach a File</p>
          {/* <img src={attach_a_file} alt='File attached image'/> */}
        </div>

        <div>
          <p>Ticket Type</p>
          <p>Issue</p>
        </div>
      </div>
    </div>
  );
};

export default PendingTickets;
