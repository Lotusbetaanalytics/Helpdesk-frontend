import { useState, Suspense, useEffect } from "react";
import DashboardHead from "../../../components/DashboardHead";
import AdminSidebar from "../../../components/AdminSideBar";
import Tabs from "../../../components/Tabs";
import LinkCard from "../../../components/LinkCard";
import "./configuration.css";
import Modal from "../../../components/Modal";
import Input from "../../../components/Form/Input";
import FormButton from "../../../components/Form/FormButton";
import { useDispatch, useSelector } from "react-redux";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import {
  addTeam,
  editTeam,
  fetchTeams,
  removeTeam,
} from "../../../redux/actions/admin/teamActions";
import {
  CREATE_TEAM_RESET,
  DELETE_TEAM_RESET,
  UPDATE_TEAM_RESET,
} from "../../../redux/constants/admin/teamConstants";
import { BiEdit, BiTrash } from "react-icons/bi";
import swal from "sweetalert";

const Configuration = () => {
  // helpers
  const dispatch = useDispatch();
  const toast = useToast();

  // states
  const createTeam = useSelector((state) => state.createTeam);
  const { loading, error, success } = createTeam;
  const updateTeam = useSelector((state) => state.updateTeam);
  const { loading: uLoading, error: uError, success: uSuccess } = updateTeam;
  const deleteTeam = useSelector((state) => state.deleteTeam);
  const { loading: dLoading, error: dError, success: dSuccess } = deleteTeam;
  const getAllTeams = useSelector((state) => state.getAllTeams);
  const { teams = [] } = getAllTeams;

  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [id, setId] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!teamName) {
      toast({
        title: "Warning!",
        description: "Enter Team Name",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(addTeam(teamName));
    }
  };

  const editHandler = (e) => {
    e.preventDefault();
    if (!teamName) {
      toast({
        title: "Warning!",
        description: "Enter Team Name",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(editTeam(teamName, id));
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
    dispatch({ type: CREATE_TEAM_RESET });
  }

  if (success) {
    toast({
      title: "Success",
      description: "Create Team Success",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOpen(false);
    dispatch(fetchTeams());
    setTeamName("");
    dispatch({ type: CREATE_TEAM_RESET });
  }

  if (uError) {
    toast({
      title: "Warning!",
      description: uError,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: UPDATE_TEAM_RESET });
  }

  if (uSuccess) {
    toast({
      title: "Success",
      description: "Team Update Success",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOpen(false);
    setEdit(false);
    dispatch(fetchTeams());
    setTeamName("");
    dispatch({ type: UPDATE_TEAM_RESET });
  }

  if (dError) {
    toast({
      title: "Warning!",
      description: dError,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: DELETE_TEAM_RESET });
  }

  if (dSuccess) {
    toast({
      title: "Success",
      description: "Delete Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch(fetchTeams());
    dispatch({ type: DELETE_TEAM_RESET });
  }

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  const closeHandler = () => {
    setIsOpen(false);
    setEdit(false);
  };
  const openHandler = () => {
    setIsOpen(true);
    setEdit(false);
    setTeamName("");
  };

  const editTeamModal = (name, id) => {
    setTeamName(name);
    setId(id);
    setIsOpen(true);
    setEdit(true);
  };

  const deleteHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this Team",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeTeam(id));
      }
    });
  };

  return (
    <div className="configurationWrapper">
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
          <button onClick={openHandler}>Create Team</button>
          {dLoading ? (
            <Center>
              <CircularProgress isIndeterminate color="#FEA500" />
            </Center>
          ) : (
            <>
              {teams.map((item, i) => (
                <LinkCard
                  borderRadius="15px"
                  linkCardText={item.teamName}
                  page="/"
                  key={i}
                  Edit={BiEdit}
                  Delete={BiTrash}
                  onEdit={() => editTeamModal(item.teamName, item.id)}
                  onDelete={() => deleteHandler(item.id)}
                />
              ))}
            </>
          )}
        </div>

        <Modal
          isVisible={isOpen}
          title={edit ? "Edit Team" : "Create Team"}
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
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                />
                <FormButton
                  bgColor="#FEA500"
                  bxShadow="0px 4px 4px rgba(254, 165, 0, 0.43)"
                  content={edit ? "Edit Team" : "Create Team"}
                />
              </form>
            )
          }
          onClose={closeHandler}
        />
      </Suspense>
    </div>
  );
};

export default Configuration;
