import DashboardHead from "../../../components/DashboardHead";
import AdminSidebar from "../../../components/AdminSideBar";
import Tabs from "../../../components/Tabs";
import LinkCard from "../../../components/LinkCard";
import "./tickettype.css";
import { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import {
  addTicket,
  editTicket,
  fetchTickets,
  removeTicket,
} from "../../../redux/actions/admin/ticketActions";
import {
  CREATE_TICKET_RESET,
  DELETE_TICKET_RESET,
  UPDATE_TICKET_RESET,
} from "../../../redux/constants/admin/ticketConstants";
import { BiEdit, BiTrash } from "react-icons/bi";
import swal from "sweetalert";
import Modal from "../../../components/Modal";
import Input from "../../../components/Form/Input";
import FormButton from "../../../components/Form/FormButton";

const TicketType = () => {
  // helpers
  const dispatch = useDispatch();
  const toast = useToast();

  // states
  const createTicket = useSelector((state) => state.createTicket);
  const { loading, error, success } = createTicket;
  const updateTicket = useSelector((state) => state.updateTicket);
  const { loading: uLoading, error: uError, success: uSuccess } = updateTicket;
  const deleteTicket = useSelector((state) => state.deleteTicket);
  const { loading: dLoading, error: dError, success: dSuccess } = deleteTicket;
  const getAllTickets = useSelector((state) => state.getAllTickets);
  const { tickets = [] } = getAllTickets;

  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [ticketTypeName, setTicketTypeName] = useState("");
  const [id, setId] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!ticketTypeName) {
      toast({
        title: "Warning!",
        description: "Enter Ticket Name",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(addTicket(ticketTypeName));
    }
  };

  const editHandler = (e) => {
    e.preventDefault();
    if (!ticketTypeName) {
      toast({
        title: "Warning!",
        description: "Enter Ticket Name",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(editTicket(ticketTypeName, id));
    }
  };

  if (error) {
    toast({
      title: "Warning!",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: CREATE_TICKET_RESET });
  }

  if (success) {
    toast({
      title: "Success",
      description: "Create Ticket Success",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOpen(false);
    dispatch(fetchTickets());
    setTicketTypeName("");
    dispatch({ type: CREATE_TICKET_RESET });
  }

  if (uError) {
    toast({
      title: "Warning!",
      description: uError,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: UPDATE_TICKET_RESET });
  }

  if (uSuccess) {
    toast({
      title: "Success",
      description: "Ticket Update Success",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOpen(false);
    setEdit(false);
    dispatch(fetchTickets());
    setTicketTypeName("");
    dispatch({ type: UPDATE_TICKET_RESET });
  }

  if (dError) {
    toast({
      title: "Warning!",
      description: dError,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: DELETE_TICKET_RESET });
  }

  if (dSuccess) {
    toast({
      title: "Success",
      description: "Delete Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch(fetchTickets());
    dispatch({ type: DELETE_TICKET_RESET });
  }

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  const closeHandler = () => {
    setIsOpen(false);
    setEdit(false);
  };
  const openHandler = () => {
    setIsOpen(true);
    setEdit(false);
    setTicketTypeName("");
  };

  const editTeamModal = (name, id) => {
    setTicketTypeName(name);
    setId(id);
    setIsOpen(true);
    setEdit(true);
  };

  const deleteHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this Ticket",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeTicket(id));
      }
    });
  };
  return (
    <div>
      <AdminSidebar />
      <DashboardHead title="Configuration Tab" />
      <Suspense
        fallback={
          <Center>
            <CircularProgress isIndeterminate color="#FEA500" />
          </Center>
        }
      >
        <div className="cardWrapper">
          <Tabs />

          <button onClick={openHandler}>Create Ticket Type</button>

          <div className="linkCardDiv"></div>

          {dLoading ? (
            <Center>
              <CircularProgress isIndeterminate color="#FEA500" />
            </Center>
          ) : (
            <>
              {tickets.map((item, i) => (
                <LinkCard
                  borderRadius="15px"
                  linkCardText={item.ticketTypeName}
                  page="/"
                  key={i}
                  Edit={BiEdit}
                  Delete={BiTrash}
                  onEdit={() => editTeamModal(item.ticketTypeName, item.id)}
                  onDelete={() => deleteHandler(item.id)}
                />
              ))}
            </>
          )}

          <Modal
            isVisible={isOpen}
            title={edit ? "Edit Ticket" : "Create Ticket"}
            size="lg"
            content={
              uLoading || loading ? (
                <Center>
                  <CircularProgress isIndeterminate color="#FEA500" />
                </Center>
              ) : (
                <form onSubmit={edit ? editHandler : submitHandler}>
                  <Input
                    img=""
                    type="text"
                    placeholder="Name"
                    value={ticketTypeName}
                    onChange={(e) => setTicketTypeName(e.target.value)}
                  />
                  <FormButton
                    bgColor="#FEA500"
                    bxShadow="0px 4px 4px rgba(254, 165, 0, 0.43)"
                    content={edit ? "Edit Ticket" : "Create Ticket"}
                  />
                </form>
              )
            }
            onClose={closeHandler}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default TicketType;
