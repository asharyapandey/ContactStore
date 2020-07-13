const express = require("express");

const PORT = 5000;

const app = express();

// setting view engine to ejs
app.set("view engine", "ejs");

// setting public folder
app.use(express.static("public"));

app.use(express.json({ extended: false }));

app.use("/", require("./Routes/contact"));

app.listen(PORT, () =>
	console.log(`Local Server Started at http://localhost:${PORT}`)
);
