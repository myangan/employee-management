import client from "./apollo";
import {
  CREATE_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
} from "./employeeQueries.graphql";

export const fetchEmployees = async () => {
  try {
    const { data } = await client.query({
      query: GET_EMPLOYEES,
    });

    return data.employees;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

export const createEmployee = async (input: any) => {
  try {
    const { data } = await client.mutate({
      mutation: CREATE_EMPLOYEE,
      variables: { input },
    });

    return data.createEmployee;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};

export const updateEmployee = async (input: any) => {
  try {
    const { data } = await client.mutate({
      mutation: UPDATE_EMPLOYEE,
      variables: { input },
    });

    return data.updateEmployee;
  } catch (error) {
    console.error("Error creating employee:", error);
    throw error;
  }
};
