import  { useState } from "react";
import Modal from "react-modal";
import "./AddStockModal.css";

const AddStockModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="add-stock-button" onClick={openModal}>
        Add Stock
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Add Stock Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
        appElement={document.getElementById("root")}
      >
        <div className="modal-header">
          <h2>Add Stock</h2>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <h3>Material Details</h3>
          <form className="form-container">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter name" />
              </div>
              <div className="form-group">
                <label>Material Category</label>
                <select>
                  <option>Select</option>
                  <option>lp05 Injection</option>
                  <option>lp10 Glasses</option>
                </select>
              </div>
              <div className="form-group">
                <label>Code</label>
                <select>
                  <option>Select</option>
                  <option>001</option>
                  <option>002</option>

                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiration Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Manufacturer</label>
                <input type="text" placeholder="Enter manufacturer" defaultValue="John" />
              </div>
              <div className="form-group">
                <label>Quantity on Hand</label>
                <input type="number" defaultValue="100" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="submit-button">
                Add Stocks
              </button>
              <button type="button" className="cancel-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddStockModal;
