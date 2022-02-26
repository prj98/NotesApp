import { useState } from "react";
import "./Editnote.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const Editnote = (props) => {
  const [update, setUpdate] = useState({
    title: props.title,
    textarea: props.text
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setUpdate((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (update.title === "" || update.textarea === "") {
      alert("All field are Mandatory...!");
    } else {
      props.passNoteEdit(update);
    }
  };
  return (
    <>
      <div className="mainedit">
        <form className="formedit">
          <input
            type="text"
            autoComplete="off"
            className="inputtitleedit"
            name="title"
            value={update.title}
            onChange={inputEvent}
          />
          <textarea
            className="textareaedit"
            name="textarea"
            value={update.textarea}
            onChange={inputEvent}
          ></textarea>
          <div className="btn">
            <Button variant="contained" type="submit" onClick={submit}>
              <AddIcon fontSize="large" />
              Add
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Editnote;
