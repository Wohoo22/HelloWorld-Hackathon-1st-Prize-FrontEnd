import React, { useState, useRef, useEffect } from "react";
import Logo from "../img/logo.png";
import { Link, useParams } from "react-router-dom";
import AvatarIcon from "../img/profile.svg";
import ClassNames from "classnames";
import LogoLight from "../img/logolight.png"

const NavBar = () => {
  const {levelid}= useParams()

  //func below helps delete dropdown content when click outside dropdown this code is onstackoverflow and I not really dont understand it
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowDropDown(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [showDropDown, setShowDropDown] = useState(false);
  let dropdownclassname = showDropDown
    ? ClassNames("dropdown-content show")
    : "dropdown-content";
  return (
    <div className="Nav-bar" style={{background:levelid===undefined?"white":"linear-gradient(to right, #150640 0%, #230a6a 60%, #3a11b2 100%)"} }>
      <div className="logo">
      <Link to="/" style={{ textDecoration: "none", height: "100%" }}>
        <img src={levelid===undefined? Logo: LogoLight} alt="Logo" height="70px" width="auto"></img>
      </Link>
      
      </div>{" "}
     
    
      <div className="None"></div>
      
    </div>
  );
};

export default NavBar;
