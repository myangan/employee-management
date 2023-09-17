import { Pool } from "pg";

const pool = new Pool({
  user: "dev",
  host: "postgres",
  database: "employee_list",
  password: "dev_password",
  port: 5432,
});

export default pool;
