import React, { useState } from "react";
import { EmployeeData } from "./types";
import { createEmployee } from "../api";
import AddEmployeeModal from "./modal";

type AddEmployeeProps = {
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};
const AddEmployee: React.FC<AddEmployeeProps> = ({ setIsUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEmployee = (): void => {
    setIsModalOpen(true);
  };

  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };

  const handleSaveEmployee = async (
    employeeData: EmployeeData
  ): Promise<void> => {
    try {
      await createEmployee(employeeData);
      setIsUpdate(true);
    } catch (error) {
      // Handle API error (e.g., display error message)
      alert(`Error creating employee: ${error}`);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddEmployee}
      >
        Add more employee
      </button>
      <AddEmployeeModal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        onSave={handleSaveEmployee}
      />
    </>
  );
};

export default AddEmployee;
