import { gql } from "graphql-tag";

const GET_EMPLOYEES = gql`
  query GetEmployees {
    employees {
      id
      firstName
      lastName
      title
      hiredDate
      address
      contactNumber
    }
  }
`;
const CREATE_EMPLOYEE = gql`
  mutation createEmployee($input: EmployeeInput!) {
    createEmployee(input: $input) {
      firstName
      lastName
      title
      hiredDate
      address
      contactNumber
    }
  }
`;
const UPDATE_EMPLOYEE = gql`
  mutation updateEmployee($input: EmployeeInput!) {
    updateEmployee(input: $input) {
      firstName
      lastName
      title
      hiredDate
      address
      contactNumber
    }
  }
`;

export { GET_EMPLOYEES, CREATE_EMPLOYEE, UPDATE_EMPLOYEE };
