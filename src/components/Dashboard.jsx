import AddStockModal from "./AddStockModal";
import { MdAddToPhotos  } from "react-icons/md";
import { GrDatabase } from "react-icons/gr";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-heading">Stock Management System</h1>
      <div>
      <div className="sections">
          <div className="sections-wrapper">
            <div className="sections-data">
              <p>Stocks :</p>
              <AddStockModal/>
            </div>
            <div className="sections-icon">
              <MdAddToPhotos style={{color:"2c3e50"}} />
            </div>
          </div>
      </div>
      <div className="sections">
          <div className="sections-wrapper">
            <div className="sections-data">
              <p>Manage :</p>
              <NavLink to="/stockManagement/ManageStocks" activeClassName="active">
                <button>Show Stock</button>
              </NavLink>
            </div>
            <div className="sections-icon">
            < GrDatabase style={{color:"2c3e50"}} />
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
