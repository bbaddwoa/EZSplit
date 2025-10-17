import {getAllTableNumber, getTableNumberId} from "#db/queries/tableNumber";
import express from "express";
const router = express.Router();

export default router;


router.route("/").get(async (req, res) => {
  try {
    const table_number = await getAllTableNumber();
    res.status(200).json(table_number);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch menu items" });
  }
});


router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const table_number= await getTableNumberId(id);
    res.status(200).json(table_number);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve menu table by ID" });
  }
});
