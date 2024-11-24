import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaHome, FaBox } from "react-icons/fa";
import "./App.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <FaBars onClick={toggleSidebar} />
      </div>
      <ul>
          <NavLink to="/stock-management" exact="true" activeClassName="active"> 
        <li>
            <FaHome style={{fontSize:"22px",color:"fff", marginRight:"4px"}}/> {isOpen && "  Dashboard"}
        </li>
          </NavLink>
          <NavLink to="/stock-management/manage-stocks" activeClassName="active">
        <li className="sidebar-item">
            <FaBox style={{fontSize:"18px",color:"fff", marginRight:"4px"}} />{isOpen && " Manage Stocks"}
        </li>
          </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;