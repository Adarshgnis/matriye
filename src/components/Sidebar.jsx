import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { BsSpeedometer } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { MdCode } from "react-icons/md";
import { BsFillPostcardFill } from "react-icons/bs";
import { MdLaptopChromebook } from "react-icons/md";
import { MdShop2 } from "react-icons/md";
import { MdArtTrack } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";
import { MdWifiProtectedSetup } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const Sidebars = () => {

  return (
    <div style={{ height: "100%", width: "260px" }} className="sidebar-container">
      <div className="top">
        <div className="logo">
          <img src="/assets/Matriye-logo.png" alt="" />
        </div>
        <div className="close-btn">
          <MdOutlineClose />
        </div>
      </div>
      <div className="sidebar d-flex flex-column ">
        <Link
          className="links"
        >
          <span>
            <BsSpeedometer />
          </span>{" "}
          Dashboard
        </Link>
        <Link className="links">
          <span>
            <FaUsers />
          </span>{" "}
          User Management
        </Link>
        <Link className="links">
          <span>
            <MdManageAccounts />
          </span>{" "}
          Master Settings
        </Link>
        <Link
          to="/website"
          className="links">
          <span>
            <MdCode />
          </span>{" "}
          Website
        </Link>
        <Link className="links">
          <span>
            <BsFillPostcardFill />
          </span>{" "}
          Applicant Job Post
        </Link>
        <Link className="links">
          <span>
            <MdLaptopChromebook />
          </span>{" "}
          LMS Management
        </Link>
        <Link className="links">
          <span>
            <MdShop2 />
          </span>{" "}
          Product Management
        </Link>
        <Link className="links">
          <span>
            <MdArtTrack />
          </span>{" "}
          Blog Management
        </Link>
        <Link className="links">
          <span>
            <MdCurrencyRupee />
          </span>{" "}
          Sales Request
        </Link>
        <Link className="links">
          <span>
            <MdWifiProtectedSetup />
          </span>{" "}
          CRM
        </Link>
        <Link className="links">
          <span>
            <FaFileAlt />
          </span>{" "}
          Report Management
        </Link>
      </div>
    </div>
  );
};

export default Sidebars;
