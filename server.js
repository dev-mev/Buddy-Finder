const express = require("express");
const htmlRoutes = require("./app/routing/htmlRoutes.js");
const apiRoutes = require("./app/routing/apiRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
