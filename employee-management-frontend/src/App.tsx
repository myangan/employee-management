import React, { useEffect, useState } from "react";
import "./App.css";
import EmployeeTable from "./components/EmployeeTable";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import AddEmployee from "./components/AddEmployee";
import { useEmployeeData } from "./EmployeeDataContext";
import { fetchEmployees } from "./api";

function App() {
  const { employeeData, setEmployeeData } = useEmployeeData();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const empData = await fetchEmployees();
        setEmployeeData(empData);
      } catch (error) {
        return <div>Something went wrong.</div>;
      }
    };
    fetchData();
  }, [setEmployeeData]);

  return (
    <ApolloProvider client={client}>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Company Employee Table</h1>
        <EmployeeTable data={employeeData} />
        <AddEmployee />
      </div>
    </ApolloProvider>
  );
}

export default App;
