import DashboardHead from "../../../components/DashboardHead";
import AdminSidebar from "../../../components/AdminSideBar";
// import Tabs from "../../../components/Tabs";
import LinkCard from "../../../components/LinkCard";
import "./styles.css";
import { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import {
  addPriority,
  editPriority,
  fetchPrioritys,
  removePriority,
} from "../../../redux/actions/admin/priorityActions";
import {
  CREATE_PRIORITY_RESET,
  DELETE_PRIORITY_RESET,
  UPDATE_PRIORITY_RESET,
} from "../../../redux/constants/admin/priorityConstants";
import { BiEdit, BiTrash } from "react-icons/bi";
import swal from "sweetalert";
import Modal from "../../../components/Modal";
import Input from "../../../components/Form/Input";
import FormButton from "../../../components/Form/FormButton";

const Priority = () => {
  // helpers
  const dispatch = useDispatch();
  const toast = useToast();

  // states
  const createPriority = useSelector((state) => state.createPriority);
  const { loading, error, success } = createPriority;
  const updatePriority = useSelector((state) => state.updatePriority);
  const {
    loading: uLoading,
    error: uError,
    success: uSuccess,
  } = updatePriority;
  const deletePriority = useSelector((state) => state.deletePriority);
  const {
    loading: dLoading,
    error: dError,
    success: dSuccess,
  } = deletePriority;
  const getAllPrioritys = useSelector((state) => state.getAllPrioritys);
  const { prioritys = [] } = getAllPrioritys;

  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [level, setLevel] = useState("");
  const [id, setId] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!level) {
      toast({
        title: "Warning!",
        description: "Enter Level",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(addPriority(level));
    }
  };

  const editHandler = (e) => {
    e.preventDefault();
    if (!level) {
      toast({
        title: "Warning!",
        description: "Enter Level",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(editPriority(level, id));
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
    dispatch({ type: CREATE_PRIORITY_RESET });
  }

  if (success) {
    toast({
      title: "Success",
      description: "Create Level Success",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOpen(false);
    dispatch(fetchPrioritys());
    setLevel("");
    dispatch({ type: CREATE_PRIORITY_RESET });
  }

  if (uError) {
    toast({
      title: "Warning!",
      description: uError,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: UPDATE_PRIORITY_RESET });
  }

  if (uSuccess) {
    toast({
      title: "Success",
      description: "Priority Update Success",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOpen(false);
    setEdit(false);
    dispatch(fetchPrioritys());
    setLevel("");
    dispatch({ type: UPDATE_PRIORITY_RESET });
  }

  if (dError) {
    toast({
      title: "Warning!",
      description: dError,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: DELETE_PRIORITY_RESET });
  }

  if (dSuccess) {
    toast({
      title: "Success",
      description: "Delete Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch(fetchPrioritys());
    dispatch({ type: DELETE_PRIORITY_RESET });
  }

  useEffect(() => {
    dispatch(fetchPrioritys());
  }, [dispatch]);

  const closeHandler = () => {
    setIsOpen(false);
    setEdit(false);
  };
  const openHandler = () => {
    setIsOpen(true);
    setEdit(false);
    setLevel("");
  };

  const editTeamModal = (name, id) => {
    setLevel(name);
    setId(id);
    setIsOpen(true);
    setEdit(true);
  };

  const deleteHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this Level",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removePriority(id));
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
          {/* <Tabs /> */}

          <button onClick={openHandler}>Create Level</button>

          <div className="linkCardDiv"></div>

          {dLoading ? (
            <Center>
              <CircularProgress isIndeterminate color="#FEA500" />
            </Center>
          ) : (
            <>
              {prioritys.map((item, i) => (
                <LinkCard
                  borderRadius="15px"
                  linkCardText={item.level}
                  page="/"
                  key={i}
                  Edit={BiEdit}
                  Delete={BiTrash}
                  onEdit={() => editTeamModal(item.level, item.id)}
                  onDelete={() => deleteHandler(item.id)}
                />
              ))}
            </>
          )}

          <Modal
            isVisible={isOpen}
            title={edit ? "Edit Level" : "Create Level"}
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
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  />
                  <FormButton
                    bgColor="#FEA500"
                    bxShadow="0px 4px 4px rgba(254, 165, 0, 0.43)"
                    content={edit ? "Edit Level" : "Create Level"}
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

export default Priority;
