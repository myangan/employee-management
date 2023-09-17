import React, { useState } from "react";
import { Employee, EmployeeData } from "./types";
import UpdateEmployeeModal from "./updateModal";
import { updateEmployee } from "../api";

type EmployeeTableProps = {
  data: Employee[];
};
const EmployeeTable: React.FC<EmployeeTableProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = (): void => {
    setIsModalOpen(true);
  };
  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };

  const handleUpdateEmployee = async (
    employeeData: EmployeeData
  ): Promise<void> => {
    try {
      await updateEmployee(employeeData);
    } catch (error) {
      // Handle API error (e.g., display error message)
      alert(`Error creating employee: ${error}`);
    }
    setIsModalOpen(false);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            EmployeeID
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            First name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Last name
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Hired date
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Address
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            contact number
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((employee, i) => (
          <tr key={i} onClick={handleClick}>
            <td className="px-6 py-4 whitespace-nowrap">{employee.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {employee.firstName}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{employee.lastName}</td>
            <td className="px-6 py-4 whitespace-nowrap">{employee.title}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {employee.hiredDate}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{employee.address}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              {employee.contactNumber}
            </td>
            <UpdateEmployeeModal
              isOpen={isModalOpen}
              onRequestClose={handleModalClose}
              onUpdate={handleUpdateEmployee}
              data={employee}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
