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
const UPDATE_EMPLOYEE = gql`
  mutation updateEmployee($id: ID!, $input: EmployeeInput!) {
    updateEmployee(id: $id, input: $input)
  }
`;

export { GET_EMPLOYEES, CREATE_EMPLOYEE, UPDATE_EMPLOYEE };
