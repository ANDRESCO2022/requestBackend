const express = require("express");

const { userRouter } = require('./routes/userRoutes');
const { repairRouter } = require('./routes/repairRoutes');


const { db } = require("./utils/data");


const app = express();

app.use(express.json());


app.use("/api/v1/users", userRouter);
app.use("/api/v1/repairs", repairRouter);

db.authenticate()
  .then(() => console.log("Database authenticated"))
  .catch((err) => console.log(err));

db.sync() 
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));


const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Express app runnning in: ${PORT}`);
});
