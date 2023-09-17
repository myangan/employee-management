import React, { useState } from "react";
import { Employee } from "./types";
import UpdateEmployeeModal from "./updateModal";
import { updateEmployee } from "../api";
import { useEmployeeData } from "../EmployeeDataContext";

type EmployeeTableProps = {
  data: Employee[];
};
const EmployeeTable: React.FC<EmployeeTableProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClick = (i: any): void => {
    setIndex(i);
    setIsModalOpen(true);
  };
  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };
  const { employeeData, setEmployeeData } = useEmployeeData();

  const handleUpdateEmployee = async (
    updatedEmployeeData: Employee
  ): Promise<void> => {
    try {
      const updateEmployeeDetails = {
        firstName: updatedEmployeeData.firstName,
        lastName: updatedEmployeeData.lastName,
        title: updatedEmployeeData.title,
        hiredDate: updatedEmployeeData.hiredDate,
        address: updatedEmployeeData.address,
        contactNumber: updatedEmployeeData.contactNumber,
      };
      await updateEmployee(updatedEmployeeData.id, updateEmployeeDetails);
      const empData = employeeData.filter(
        (e) => e.id !== updatedEmployeeData.id
      );
      empData.push(updatedEmployeeData);

      setEmployeeData(empData);
    } catch (error) {
      alert(`Error updating employee: ${error}`);
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
          <tr key={i} onClick={() => handleClick(i)}>
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
          </tr>
        ))}
      </tbody>
      {isModalOpen && (
        <UpdateEmployeeModal
          isOpen={isModalOpen}
          onRequestClose={handleModalClose}
          onUpdate={handleUpdateEmployee}
          data={data[index]}
        />
      )}
    </table>
  );
};

export default EmployeeTable;
