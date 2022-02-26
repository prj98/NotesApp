import "./Listnotes.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlined from "@material-ui/icons/EditOutlined";

const Listnotes = (props) => {
  const deletenote = () => {
    props.deleteItem(props.id);
  };
  const editnote = () => {
    props.editItem(props.id);
  };
  return (
    <div className="list">
      <h2 className="listitle">{props.title}</h2>
      <p className="yournote">{props.text}</p>
      <div className="notebtn">
        <button className="editbtn" onClick={editnote}>
          <EditOutlined color="primary" style={{ fontSize: 30 }} />
        </button>
        <button className="deletebtn" onClick={deletenote}>
          <DeleteOutlineIcon color="secondary" style={{ fontSize: 30 }} />
        </button>
      </div>
    </div>
  );
};

export default Listnotes;
