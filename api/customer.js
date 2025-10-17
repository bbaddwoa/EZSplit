import { createCustomer } from "#db/queries/customer";
import { getCustomers } from "#db/queries/customer";
import express from "express";
const router = express.Router();
export default router;

router
  .route("/")
  .get(async (req, res) => {
    const customers = await getCustomers();
    res.send(customers);
  })
  .post(async (req, res) => {
    if (!req.body) return res.status(400).send("Request body required");

    const { name } = req.body;
    if (!name) {
      return res.status(400).send("Request body needs: name");
    }

    const customer = await createCustomer(name);
    res.status(201).send(customer);
  });

router.param("id", async (req, res, next, id) => {
  const customer = await getCustomerById(id);
  if (!customer) return res.status(404).send("Customer not found.");

  req.customer = customer;
  next();
});
router.route("/:id").get((req, res) => {
  res.send(req.customer);
});
