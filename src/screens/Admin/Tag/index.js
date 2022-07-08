import DashboardHead from "../../../components/DashboardHead";
import AdminSidebar from "../../../components/AdminSideBar";
import Tabs from "../../../components/Tabs";
import LinkCard from "../../../components/LinkCard";
import "./styles.css";
import { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast, CircularProgress, Center } from "@chakra-ui/react";
import {
  addTag,
  editTag,
  fetchTag,
  removeTag,
} from "../../../redux/actions/admin/tagActions";
import {
  CREATE_TAG_RESET,
  DELETE_TAG_RESET,
  UPDATE_TAG_RESET,
} from "../../../redux/constants/admin/tagConstants";
import { BiEdit, BiTrash } from "react-icons/bi";
import swal from "sweetalert";
import Modal from "../../../components/Modal";
import Input from "../../../components/Form/Input";
import FormButton from "../../../components/Form/FormButton";

const Tag = () => {
  // helpers
  const dispatch = useDispatch();
  const toast = useToast();

  // states
  const createTag = useSelector((state) => state.createTag);
  const { loading, error, success } = createTag;
  const updateTag = useSelector((state) => state.updateTag);
  const { loading: uLoading, error: uError, success: uSuccess } = updateTag;
  const deleteTag = useSelector((state) => state.deleteTag);
  const { loading: dLoading, error: dError, success: dSuccess } = deleteTag;
  const getTags = useSelector((state) => state.getTags);
  const { tags = [] } = getTags;

  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [tagName, setTagName] = useState("");
  const [id, setId] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!tagName) {
      toast({
        title: "Warning!",
        description: "Enter Tag Name",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(addTag(tagName));
    }
  };

  const editHandler = (e) => {
    e.preventDefault();
    if (!tagName) {
      toast({
        title: "Warning!",
        description: "Enter Tag Name",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      dispatch(editTag(tagName, id));
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
    dispatch({ type: CREATE_TAG_RESET });
  }

  if (success) {
    toast({
      title: "Success",
      description: "Create Tag Success",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOpen(false);
    dispatch(fetchTag());
    setTagName("");
    dispatch({ type: CREATE_TAG_RESET });
  }

  if (uError) {
    toast({
      title: "Warning!",
      description: uError,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: UPDATE_TAG_RESET });
  }

  if (uSuccess) {
    toast({
      title: "Success",
      description: "Update Success",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    setIsOpen(false);
    setEdit(false);
    dispatch(fetchTag());
    setTagName("");
    dispatch({ type: UPDATE_TAG_RESET });
  }

  if (dError) {
    toast({
      title: "Warning!",
      description: dError,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: DELETE_TAG_RESET });
  }

  if (dSuccess) {
    toast({
      title: "Success",
      description: "Delete Successfully",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    dispatch(fetchTag());
    dispatch({ type: DELETE_TAG_RESET });
  }

  useEffect(() => {
    dispatch(fetchTag());
  }, [dispatch]);

  const closeHandler = () => {
    setIsOpen(false);
    setEdit(false);
  };
  const openHandler = () => {
    setIsOpen(true);
    setEdit(false);
    setTagName("");
  };

  const editTeamModal = (name, id) => {
    setTagName(name);
    setId(id);
    setIsOpen(true);
    setEdit(true);
  };

  const deleteHandler = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this Tag",
      icon: "warning",
      dangerMode: true,
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(removeTag(id));
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

          <button onClick={openHandler}>Create Tag</button>

          <div className="linkCardDiv"></div>

          {dLoading ? (
            <Center>
              <CircularProgress isIndeterminate color="#FEA500" />
            </Center>
          ) : (
            <>
              {tags.map((item, i) => (
                <LinkCard
                  borderRadius="15px"
                  linkCardText={item.tagName}
                  page="/"
                  key={i}
                  Edit={BiEdit}
                  Delete={BiTrash}
                  onEdit={() => editTeamModal(item.tagName, item.id)}
                  onDelete={() => deleteHandler(item.id)}
                />
              ))}
            </>
          )}

          <Modal
            isVisible={isOpen}
            title={edit ? "Edit Tag" : "Create Tag"}
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
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                  />
                  <FormButton
                    bgColor="#FEA500"
                    bxShadow="0px 4px 4px rgba(254, 165, 0, 0.43)"
                    content={edit ? "Edit Tag" : "Create Tag"}
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

export default Tag;
