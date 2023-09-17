import mockedUsers from "./data/mockedData";
import db from "./db";
import { Resolvers } from "./generated/graphql";

const resolvers: Resolvers = {
  Query: {
    employees: async () => {
      const client = await db.connect();
      try {
        const result = await client.query("SELECT * FROM employees");
        return result.rows;
      } finally {
        client.release();
      }
    },
  },
  Mutation: {
    createEmployee: async (_, { input }) => {
      const { firstName, lastName, title, hiredDate, address, contactNumber } =
        input;
      const client = await db.connect();
      try {
        const query = `
      INSERT INTO employees ("firstName", "lastName", "title", "hiredDate", "address", "contactNumber")
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
        const values = [
          firstName,
          lastName,
          title,
          hiredDate,
          address,
          contactNumber,
        ];

        const result = await client.query(query, values);
        return result.rows[0];
      } finally {
        client.release();
      }
    },
    updateEmployee: async (_, { id, input }) => {
      const { firstName, lastName, title, hiredDate, address, contactNumber } =
        input;
      const client = await db.connect();

      try {
        const updateFields = [];
        const values = [id];

        if (firstName !== undefined) {
          updateFields.push(`"firstName" = $${values.length + 1}`);
          values.push(firstName);
        }

        if (lastName !== undefined) {
          updateFields.push(`"lastName" = $${values.length + 1}`);
          values.push(lastName);
        }
        if (title !== undefined) {
          updateFields.push(`"title" = $${values.length + 1}`);
          values.push(title);
        }
        if (hiredDate !== undefined) {
          updateFields.push(`"hiredDate" = $${values.length + 1}`);
          values.push(hiredDate);
        }
        if (address !== undefined) {
          updateFields.push(`"address" = $${values.length + 1}`);
          values.push(address);
        }
        if (contactNumber !== undefined) {
          updateFields.push(`"contactNumber" = $${values.length + 1}`);
          values.push(contactNumber);
        }

        const query = `
            UPDATE employees
            SET ${updateFields.join(", ")}
            WHERE "id" = $1;
          `;

        const result = await client.query(query, values);

        if (result.rowCount === 1) {
          return "Employee updated successfully";
        } else {
          return "Employee not found";
        }
      } finally {
        client.release();
      }
    },

    deleteEmployee: async (_, { id }) => {
      const client = await db.connect();
      try {
        const result = await client.query(
          `DELETE FROM employees WHERE "id" = $1`,
          [id]
        );

        if (result.rowCount === 1) {
          return "Employee deleted successfully";
        } else {
          return "Employee not found";
        }
      } finally {
        client.release();
      }
    },
  },
};

export default resolvers;
