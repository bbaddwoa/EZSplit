import db from "#db/client";

export async function createTable(table_num) {
  const sql = `
  INSERT INTO table_number
    (number)
  VALUES
    ($1)
  RETURNING *
  `;
  const {
    rows: [table],
  } = await db.query(sql, [table_num]);
  return table;
}

export async function getTableNumber() {
  const sql = `
  SELECT *
  FROM table_number
  `;
  const { rows: table_number } = await db.query(sql);
  return table_number;
}

export async function getTableNumberById(id) {
  const sql = `
    SELECT id, table_num
    FROM table_number
    WHERE id = $1
    LIMIT 1
  `;
  const {
    rows: [table_number],
  } = await db.query(sql, [id]);
  return table_number || null;

}
