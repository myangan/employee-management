import React, { useState } from "react";
import { EmployeeData } from "./types";
import { createEmployee } from "../api";
import AddEmployeeModal from "./modal";
import { useEmployeeData } from "../EmployeeDataContext";

const AddEmployee: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { employeeData, setEmployeeData } = useEmployeeData();

  const handleAddEmployee = (): void => {
    setIsModalOpen(true);
  };

  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };
  const arr = [...employeeData];

  const handleSaveEmployee = async (
    employeeData: EmployeeData
  ): Promise<void> => {
    try {
      const response = await createEmployee(employeeData);
      arr.push(response);
      setEmployeeData(arr);
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
