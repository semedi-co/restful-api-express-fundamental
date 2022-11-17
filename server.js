const express = require("express");

// initilize app
const app = express();

// call middleware from express
// untuk mengambil data dari body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// call all routes
app.use(require("./routes/mahasiswa.route"));

// running server
app.listen(3000, () => console.log("server running on port 3000"));