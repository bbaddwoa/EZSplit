import { getTableNumber } from "#db/queries/tableNumber";
import { getTableNumberById } from "#db/queries/tableNumber";
import express from "express";
const router = express.Router();
export default router;

router.route("/").get(async (req, res) => {
  try {
    const table_number = await getTableNumber();
    res.status(200).json(table_number);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch table" });
  }
});

router.param("id", async (req, res, next, id) => {
  const table_number = await getTableNumberById(id);
  if (!table_number) return res.status(404).send("Table Number not found.");

  req.table_number = table_number;
  next();
});
router.route("/:id").get((req, res) => {
  res.send(req.table_number);
});
