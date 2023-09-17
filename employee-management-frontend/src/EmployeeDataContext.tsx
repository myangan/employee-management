import React, { createContext, useContext, useState, ReactNode } from "react";
import { Employee } from "./components/types";

interface EmployeeDataContextType {
  employeeData: Employee[];
  setEmployeeData: React.Dispatch<React.SetStateAction<Employee[]>>;
}

const EmployeeDataContext = createContext<EmployeeDataContextType | undefined>(
  undefined
);

export const EmployeeDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);

  return (
    <EmployeeDataContext.Provider value={{ employeeData, setEmployeeData }}>
      {children}
    </EmployeeDataContext.Provider>
  );
};

export const useEmployeeData = (): EmployeeDataContextType => {
  const context = useContext(EmployeeDataContext);
  if (!context) {
    throw new Error(
      "useEmployeeData must be used within an EmployeeDataProvider"
    );
  }
  return context;
};
