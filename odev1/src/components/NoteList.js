import React from "react";
import { useSelector } from "react-redux";
import {
  selectColorFilteredTodos,
  selectFilteredNotes,
} from "../redux/notes/notesSlice";
const NoteList = () => {
  const coloritems = useSelector(selectFilteredNotes);
  return (
    <div className="wrapper">
      {coloritems &&
        coloritems.map((item) => (
          <div
            style={{
              border: "1px solid",
              padding: 20,
              marginLeft: 10,
              background: item.bgColor,
              color: "white",
            }}
            key={item.id}
          >
            {item.description}
          </div>
        ))}
    </div>
  );
};

export default NoteList;
