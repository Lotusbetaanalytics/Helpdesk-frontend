import DashboardHead from "../../../components/DashboardHead";
import AdminSidebar from "../../../components/AdminSideBar";
// import Tabs from "../../../components/Tabs";
import LinkCard from "../../../components/LinkCard";
import "./stages.css";
import { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import {
  addStage,
  editStage,
  fetchStages,
  removeStage,
} from "../../../redux/actions/admin/stageActions";
import {
  CREATE_STAGE_RESET,
  DELETE_STAGE_RESET,
  UPDATE_STAGE_RESET,
} from "../../../redux/constants/admin/stageConstants";
import { BiEdit, BiTrash } from "react-icons/bi";
import swal from "sweetalert";
import Modal from "../../../components/Modal";
import Input from "../../../components/Form/Input";
import FormButton from "../../../components/Form/FormButton";

const Roles = () => {
  // helpers
  const dispatch = useDispatch();
  const toast = useToast();

  // states
  const createAdmin = useSelector((state) => state.createAdmin);
  const { loading, error, success } = createAdmin;
  const updateRoles = useSelector((state) => state.updateRoles);
  const { loading: uLoading, error: uError, success: uSuccess } = updateRoles;
  const getRoles = useSelector((state) => state.getRoles);
  const { roles = [] } = getRoles;

  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [stageLevelName, setStageLevelName] = useState("");
  const [id, setId] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!stageLevelName) {
      toast({
        title: "Warning!",
        description: "Enter Stage Name",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(addStage(stageLevelName));
    }
  };

  const editHandler = (e) => {
    e.preventDefault();
    if (!stageLevelName) {
      toast({
        title: "Warning!",
        description: "Enter Stage Name",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(editStage(stageLevelName, id));
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
    dispatch({ type: CREATE_STAGE_RESET });
  }

  if (success) {
    toast({
      title: "Success",
      description: "Create Stage Success",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOpen(false);
    dispatch(fetchStages());
    setStageLevelName("");
    dispatch({ type: CREATE_STAGE_RESET });
  }

  if (uError) {
    toast({
      title: "Warning!",
      description: uError,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: UPDATE_STAGE_RESET });
  }

  if (uSuccess) {
    toast({
      title: "Success",
      description: "Stage Update Success",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOpen(false);
    setEdit(false);
    dispatch(fetchStages());
    setStageLevelName("");
    dispatch({ type: UPDATE_STAGE_RESET });
  }

  useEffect(() => {
    dispatch(fetchStages());
  }, [dispatch]);

  const closeHandler = () => {
    setIsOpen(false);
    setEdit(false);
  };
  const openHandler = () => {
    setIsOpen(true);
    setEdit(false);
    setStageLevelName("");
  };

  const editTeamModal = (name, id) => {
    setStageLevelName(name);
    setId(id);
    setIsOpen(true);
    setEdit(true);
  };

  const deleteHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this Stage",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeStage(id));
      }
    });
  };
  return (
    <div>
      <AdminSidebar />
      <DashboardHead title="Configuration Tab" />

      <div className="cardWrapper">
        {/* <Tabs /> */}
        <button onClick={openHandler}>Create Stage Type</button>

        {roles.map((item, i) => (
          <LinkCard
            borderRadius="15px"
            linkCardText={item.stageLevelName}
            page="/"
            key={i}
            Edit={BiEdit}
            Delete={BiTrash}
            onEdit={() => editTeamModal(item.stageLevelName, item.id)}
            onDelete={() => deleteHandler(item.id)}
          />
        ))}

        <Modal
          isVisible={isOpen}
          title={edit ? "Edit Stage" : "Create Stage"}
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
                  value={stageLevelName}
                  onChange={(e) => setStageLevelName(e.target.value)}
                />
                <FormButton
                  bgColor="#FEA500"
                  bxShadow="0px 4px 4px rgba(254, 165, 0, 0.43)"
                  content={edit ? "Edit Stage" : "Create Stage"}
                />
              </form>
            )
          }
          onClose={closeHandler}
        />
      </div>
    </div>
  );
};

export default Roles;
