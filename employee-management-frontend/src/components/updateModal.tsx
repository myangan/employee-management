import React, { useState } from "react";
import Modal from "react-modal";
import { Employee, EmployeeData } from "./types";
import "../styles/style.css";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "2rem",
  },
};

Modal.setAppElement("#root"); // Set the root element for screen reader accessibility

type updateEmployeeModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  onUpdate: (data: Employee) => void;
  data: Employee;
};

const UpdateEmployeeModal: React.FC<updateEmployeeModalProps> = ({
  isOpen,
  onRequestClose,
  onUpdate,
  data,
}) => {
  const [employeeData, setEmployeeData] = useState(data);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    if (
      employeeData.firstName &&
      employeeData.lastName &&
      employeeData.title &&
      employeeData.hiredDate &&
      employeeData.address &&
      employeeData.contactNumber
    ) {
      onUpdate(employeeData);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={modalStyles}>
      <h2>Employee Details</h2>
      <form>
        <div className="modal-input-container">
          <label className="modal-label">First Name:</label>
          <input
            className="modal-input-field"
            type="text"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-input-container">
          <label className="modal-label">Last Name:</label>
          <input
            className="modal-input-field"
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-input-container">
          <label className="modal-label">Title:</label>
          <input
            className="modal-input-field"
            type="text"
            name="title"
            value={employeeData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-input-container">
          <label className="modal-label">Hired Date:</label>
          <input
            className="modal-input-field"
            type="text"
            name="hiredDate"
            value={employeeData.hiredDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-input-container">
          <label className="modal-label">Address:</label>
          <input
            className="modal-input-field"
            type="text"
            name="address"
            value={employeeData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="modal-input-container">
          <label className="modal-label">Contact Number:</label>
          <input
            className="modal-input-field"
            type="text"
            name="contactNumber"
            value={employeeData.contactNumber}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={handleUpdate}
          >
            Update
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onRequestClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default UpdateEmployeeModal;
