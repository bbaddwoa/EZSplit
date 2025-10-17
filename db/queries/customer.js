import db from "#db/client";

export async function createCustomer(name, email, phone_number) {
  const sql = `
  INSERT INTO customer
    (name, email, phone_number)
  VALUES
    ($1, $2, $3)
  RETURNING *
  `;
  const {
    rows: [customer],
  } = await db.query(sql, [name, email, phone_number]);
  return customer;
}

export async function getCustomers() {
  const sql = `
  SELECT *
  FROM customer
  `;
  const { rows: customer } = await db.query(sql);
  return customer;
}

export async function getCustomerById(id) {
  const sql = `
  SELECT * 
  FROM customer 
  WHERE id = $1
  `;
  const { rows: customer } = await db.query(sql, [id]);
  return customer;
}
