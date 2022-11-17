const routes = require("express").Router();

// controller
const controller = require("../controllers/mahasiswa");

// GET routes
routes.get("/mahasiswa", controller.getAllMahasiswa);

// POST routes
routes.post("/mahasiswa", controller.addMahasiswa);

// PUT routes
routes.put("/mahasiswa/:id", controller.editMahasiswa);

// DELETE routes
routes.delete("/mahasiswa/:id", controller.deleteMahasiswa);

module.exports = routes;