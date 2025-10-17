import { getMenuById } from "#db/queries/menu";
import { getMenu } from "#db/queries/menu";
import express from "express";
const router = express.Router();
export default router;

router.route("/").get(async (req, res) => {
  try {
    const menu = await getMenu();
    res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch menu items" });
  }
});
router.route("/:id").get(async (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }
  try {
    const menuItem = await getMenuById(id);
    if (!menuItem)
      return res.status(404).json({ error: "Menu item not found" });
    return res.status(200).json(menuItem);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Unable to fetch menu item" });
  }
});
