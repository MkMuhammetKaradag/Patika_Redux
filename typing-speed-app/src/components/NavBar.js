import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/typingSpeed/typingSpeedSlice";

const NavBar = () => {
  const [value, setValıe] = useState("Turkish");
  const dispatch = useDispatch();
  return (
    <div style={{ marginTop: 50 }}>
      <select
        value={value}
        onChange={(e) => {
          dispatch(setLanguage(e.target.value));
          setValıe(e.target.value);
        }}
      >
        <option value="Turkish">Turkish</option>
        <option value="English">English</option>
      </select>
    </div>
  );
};

export default NavBar;
