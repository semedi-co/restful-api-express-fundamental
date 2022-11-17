const data = require("../databases");

module.exports = {
    addMahasiswa: (req, res) => {
        // retrieve data from body
        const { nama, nim, prodi } = req.body;

        // add data to database
        data.push({ nama, nim, prodi });

        // send response
        return res.status(201).json({
            success: true,
            message: "data mahasiswa berhasil ditambahkan"
        });
    },
    getAllMahasiswa: (req, res) => {
        return res.json({
            success: true,
            message: "data mahasiswa berhasil didapatkan",
            data
        })
    },
    editMahasiswa: (req, res) => {
        // retrieve data from params
        // :nim (params) - ?nama="didik" (query)
        const { id } = req.params;

        // check nim
        const isExist = data.map(data => data.nim).indexOf(+id);
        if (isExist == -1) {
            return res.status(404).json({
                success: false,
                message: "data nim tidak ditemukan"
            });
        }

        // retrieve data from body
        const { nama, nim, prodi } = req.body;

        // edit data
        data.splice(isExist, 1, { nama, nim, prodi });

        // send response
        return res.json({
            success: true,
            message: "data mahasiswa berhasil diedit"
        });
    },
    deleteMahasiswa: (req, res) => {
        // retrieve data from params
        // :nim (params) - ?nama="didik" (query)
        const { id } = req.params;

        // check nim
        const isExist = data.map(data => data.nim).indexOf(+id);
        if (isExist == -1) {
            return res.status(404).json({
                success: false,
                message: "data nim tidak ditemukan"
            });
        }

        // delete data
        data.splice(isExist, 1);

        // send response
        return res.json({
            success: true,
            message: "data mahasiswa berhasil dihapus"
        });
    }
}