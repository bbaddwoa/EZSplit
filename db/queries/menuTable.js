import db from "#db/client";
import bcrypt from "bcrypt";

export async function createMenuTable(menuId, tableId) {
  const sql = `
  INSERT INTO menu_table
    (menu_id, table_id)
  VALUES
    ($1, $2)
  RETURNING *
  `;
  const {
    rows: [menuTable],
  } = await db.query(sql, [menuId, tableId]);
  return menuTable;
}

export async function getAllMenuTables() {
  const sql = `
  SELECT * 
  FROM menu_table
  `;
  const { rows: menuTable } = await db.query(sql);
  return menuTable;
}
export async function getMenuTableById(id) {
  const sql = `
  SELECT * 
  FROM menu_table 
  WHERE id = $1
  `;
  const { rows: menuTable } = await db.query(sql, [id]);
  return menuTable;
}
