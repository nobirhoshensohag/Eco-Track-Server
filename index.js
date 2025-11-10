const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("RentWheels Server is running");
});
app.listen(port, () => {
  console.log(`Server is hitting on port ${port}`);
});