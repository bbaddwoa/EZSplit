import express from "express";
const app = express();
export default app;

import usersRouter from "#api/users";
import customerRouter from "#api/customer";
import menuRouter from "#api/menu";
import menuTableRouter from "#api/menuTable";
import tableNumberRouter from "#api/tableNumber";
import getUserFromToken from "#middleware/getUserFromToken";
import handlePostgresErrors from "#middleware/handlePostgresErrors";
import cors from "cors";
import morgan from "morgan";
import customerRouter from "#api/customer";
import menuRouter from "#api/menu";
import menuTableRouter from "#api/menuTable";
import tableNumberRouter from "#api/tableNumber";

app.use(cors({ origin: process.env.CORS_ORIGIN ?? /localhost/ }));

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/menuTables", menuTableRouter);

// app.use(getUserFromToken);

app.get("/", (req, res) => res.send("Hello, World!"));
app.use("/menu", menuRouter);
app.use("/customer", customerRouter);
app.use("/menuTable", menuTableRouter);
app.use("/tableNumber", tableNumberRouter);

app.use("/users", usersRouter);
app.use("/customers", customerRouter);
app.use("/menu", menuRouter);
app.use("/menu-table", menuTableRouter);
app.use("/table-number", tableNumberRouter);

app.use("/tableNumber",tableNumberRouter );

app.use("/users", usersRouter);
app.use("/customer", customerRouter);
app.use("/menu", menuRouter);
app.use("/menuTable", menuTableRouter);
app.use("/tableNumber", tableNumberRouter);


app.use(handlePostgresErrors);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});
