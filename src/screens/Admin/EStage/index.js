import DashboardHead from "../../../components/DashboardHead";
import AdminSidebar from "../../../components/AdminSideBar";
// import Tabs from "../../../components/Tabs";
import LinkCard from "../../../components/LinkCard";
import "./styles.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import {
  addEStage,
  editEStage,
  fetchEStages,
  removeEStage,
} from "../../../redux/actions/admin/eStageActions";
import {
  CREATE_ESTAGE_RESET,
  DELETE_ESTAGE_RESET,
  UPDATE_ESTAGE_RESET,
} from "../../../redux/constants/admin/eStageConstants";
import { BiEdit, BiTrash } from "react-icons/bi";
import swal from "sweetalert";
import Modal from "../../../components/Modal";
import Input from "../../../components/Form/Input";
import FormButton from "../../../components/Form/FormButton";

const EStages = () => {
  // helpers
  const dispatch = useDispatch();
  const toast = useToast();

  // states
  const createEStage = useSelector((state) => state.createEStage);
  const { loading, error, success } = createEStage;
  const updateEStage = useSelector((state) => state.updateEStage);
  const { loading: uLoading, error: uError, success: uSuccess } = updateEStage;
  const deleteEStage = useSelector((state) => state.deleteEStage);
  const { loading: dLoading, error: dError, success: dSuccess } = deleteEStage;
  const getAllEStages = useSelector((state) => state.getAllEStages);
  const { stages = [] } = getAllEStages;

  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [excludeStageLevel, setExcludeStageLevel] = useState("");
  const [id, setId] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!excludeStageLevel) {
      toast({
        title: "Warning!",
        description: "Enter Stage Name",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(addEStage(excludeStageLevel));
    }
  };

  const editHandler = (e) => {
    e.preventDefault();
    if (!excludeStageLevel) {
      toast({
        title: "Warning!",
        description: "Enter Stage Name",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(editEStage(excludeStageLevel, id));
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
    dispatch({ type: CREATE_ESTAGE_RESET });
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
    dispatch(fetchEStages());
    setExcludeStageLevel("");
    dispatch({ type: CREATE_ESTAGE_RESET });
  }

  if (uError) {
    toast({
      title: "Warning!",
      description: uError,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: UPDATE_ESTAGE_RESET });
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
    dispatch(fetchEStages());
    setExcludeStageLevel("");
    dispatch({ type: UPDATE_ESTAGE_RESET });
  }

  if (dError) {
    toast({
      title: "Warning!",
      description: dError,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: DELETE_ESTAGE_RESET });
  }

  if (dSuccess) {
    toast({
      title: "Success",
      description: "Delete Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch(fetchEStages());
    dispatch({ type: DELETE_ESTAGE_RESET });
  }

  useEffect(() => {
    dispatch(fetchEStages());
  }, [dispatch]);

  const closeHandler = () => {
    setIsOpen(false);
    setEdit(false);
  };
  const openHandler = () => {
    setIsOpen(true);
    setEdit(false);
    setExcludeStageLevel("");
  };

  const editTeamModal = (name, id) => {
    setExcludeStageLevel(name);
    setId(id);
    setIsOpen(true);
    setEdit(true);
  };

  const deleteHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeEStage(id));
      }
    });
  };
  return (
    <div>
      <AdminSidebar />
      <DashboardHead title="Configuration Tab" />

      <div className="cardWrapper">
        {/* <Tabs /> */}
        <button onClick={openHandler}>Create Exclude Stage Type</button>

        {dLoading ? (
          <Center>
            <CircularProgress isIndeterminate color="#FEA500" />
          </Center>
        ) : (
          <>
            {stages.map((item, i) => (
              <LinkCard
                borderRadius="15px"
                linkCardText={item.excludeStageLevel}
                page="/"
                key={i}
                Edit={BiEdit}
                Delete={BiTrash}
                onEdit={() => editTeamModal(item.excludeStageLevel, item.id)}
                onDelete={() => deleteHandler(item.id)}
              />
            ))}
          </>
        )}

        <Modal
          isVisible={isOpen}
          title={edit ? "Edit Exclude Stage" : "Create Exclude Stage"}
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
                  value={excludeStageLevel}
                  onChange={(e) => setExcludeStageLevel(e.target.value)}
                />
                <FormButton
                  bgColor="#FEA500"
                  bxShadow="0px 4px 4px rgba(254, 165, 0, 0.43)"
                  content={edit ? "Edit Exclude Stage" : "Create Exclude Stage"}
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

export default EStages;
