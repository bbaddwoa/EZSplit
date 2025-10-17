import db from "#db/client";

export async function createMenu(items, prices) {
  const sql = `
  INSERT INTO menu
    (items, prices)
  VALUES
    ($1, $2)
  RETURNING *
  `;
  const {
    rows: [menu],
  } = await db.query(sql, [items, prices]);
  return menu;
}

export async function getMenu() {
  const sql = `
  SELECT *
  FROM menu
  `;
  const { rows: menu } = await db.query(sql);
  return menu;
}

export async function getMenuById(id) {
  const sql = `
    SELECT id, items, prices, image_url
    FROM menu
    WHERE id = $1
    LIMIT 1
  `;
  const {
    rows: [menu],
  } = await db.query(sql, [id]);
  return menu || null;
}
