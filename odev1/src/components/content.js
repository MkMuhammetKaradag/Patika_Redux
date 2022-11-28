import React from "react";
import RadioButtonsGrup from "./RadioButtonsGrup";
import Circle from "@uiw/react-color-circle";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  selectColorFilteredTodos,
  setSearchText,
  setSearchType,
  setSelectColor,
} from "../redux/notes/notesSlice";
import NoteList from "./NoteList";
const Content = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = React.useState("");
  const [search, setSearch] = React.useState("");

  const [hex, setHex] = React.useState("#f44e3b");

  const addNotes = () => {
    dispatch(addItem({ description, bgColor: hex }));
  };
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div
      style={{
        height: "100vh",
        background: "#EAEAEA",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: hex,
          width: "40%",
        }}
      >
        <h1>Notes App</h1>

        <input
          value={search}
          style={{
            width: "40%",
            height: 35,
            borderRadius: 15,
            marginBottom: 20,
            outline: "none",
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(setSearchType(true));
              dispatch(setSearchText(search));
              setSearch("");
              console.log("enter");
            }
          }}
          placeholder="search"
          onChange={handleChange}
        ></input>

        <div
          style={{
            width: "90%",
            height: "50%",
            position: "relative",
          }}
        >
          <textarea
            placeholder="Enter your note here... "
            className="textArea"
            onChange={(e) => setDescription(e.target.value)}
            style={{
              width: "100%",
              height: "100%",
              overflow: "visible",
              resize: "none",
              outline: "none",
              paddingLeft: 20,
              paddingTop: 10,
              boxShadow: "1px 2px 9px gray",
            }}
          ></textarea>
          <div
            style={{
              display: "flex",
              position: "absolute",
              bottom: 0,
              left: 6,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Circle
              style={{
                paddingTop: 10,
              }}
              colors={["#F44E3B", "#FE9200", "#FCDC00", "#DBDF00"]}
              color={hex}
              onChange={(color) => {
                setHex(color.hex);
                // setSearchText("color");
                dispatch(setSearchType(false));
                dispatch(setSelectColor(color.hex));
              }}
            />
            <button
              className="addButton"
              style={{
                background: "#68d391",
                borderRadius: 30,
                paddingLeft: 30,
                cursor: "pointer",
                color: "white",
                border: 0,
                paddingRight: 30,
              }}
              onClick={addNotes}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "50%",
          height: "50%",
          overflow: "auto",
        }}
      >
        <NoteList searchType={true}></NoteList>
      </div>
    </div>
  );
};

export default Content;
