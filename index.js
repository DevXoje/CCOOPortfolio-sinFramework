const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
app.use(express.static("public"));
app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
