import { useState } from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Listnotes from "./components/Listnotes";
import Footer from "./components/Footer";
import Editnote from "./components/Editnote";
import "./styles.css";

const App = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [editvalue, setEditvalue] = useState({
    edittitle: "",
    edittext: ""
  });

  const AddNote = (note) => {
    setData((prev) => {
      return [...prev, note];
    });
  };

  const EditNote = (update) => {
    data[id].title = update.title;
    data[id].textarea = update.textarea;
    setEdit(false);
  };
  const onDelete = (id) => {
    setData((prev) =>
      prev.filter((data, index) => {
        return index !== id;
      })
    );
  };
  const onEdit = (id) => {
    setId(id);
    setEdit(true);
    setEditvalue({
      edittitle: data[id].title,
      edittext: data[id].textarea
    });
  };
  return (
    <div className="App">
      <Header />
      <Notes passNote={AddNote} />
      <div className="alllist">
        {data.map((element, index) => {
          return (
            <Listnotes
              title={element.title}
              text={element.textarea}
              key={index}
              id={index}
              deleteItem={onDelete}
              editItem={onEdit}
            />
          );
        })}
      </div>
      {edit ? (
        <Editnote
          title={editvalue.edittitle}
          text={editvalue.edittext}
          passNoteEdit={EditNote}
        />
      ) : null}
      <Footer />
    </div>
  );
};

export default App;
