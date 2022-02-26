import "./Notes.css";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

const Notes = (props) => {
  const [exprend, setExprend] = useState(false);
  const btn = {
    backgroundColor: "lightgreen",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0px 20px"
  };

  const [note, setNote] = useState({
    title: "",
    textarea: ""
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (note.title === "" || note.textarea === "") {
      alert("All field are Mandatory...!");
    } else {
      props.passNote(note);
      setNote({
        title: "",
        textarea: ""
      });
      setExprend(false);
    }
  };
  const visible = () => {
    setExprend(true);
  };
  const close = () => {
    setNote({
      title: "",
      textarea: ""
    });
    setExprend(false);
  };
  return (
    <>
      <div className="main">
        <form className="form">
          <input
            type="text"
            placeholder="Title"
            autoComplete="off"
            className="inputtitle"
            name="title"
            value={note.title}
            onChange={inputEvent}
            onClick={visible}
          />
          {exprend ? (
            <textarea
              placeholder="Write a notes..."
              className="textarea"
              name="textarea"
              value={note.textarea}
              onChange={inputEvent}
            ></textarea>
          ) : null}
          {exprend ? (
            <div className="btn">
              <Button
                variant="contained"
                style={btn}
                type="submit"
                onClick={submit}
              >
                <AddIcon fontSize="large" />
                Add
              </Button>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                onClick={close}
              >
                <CloseIcon fontSize="large" />
                <b style={{ fontSize: "20px" }}>Close</b>
              </Button>
            </div>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default Notes;
