// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    if (students) {
      const data = {
        message: "Menampilkkan semua students",
        data: students,
      };

      return res.status(200).json(data);
    }

    const data = {
      message: "Data students konsong",
    };

    return res.status(404).json(data);
  }

  async store(req, res) {
    const { nama, nim, email, jurusan } =req.body;

    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua data harus dikirim",
      };

      return res.status(422).send(data);
    }

    // handle NIM harus angka (integer)
    if (!Number.isInteger(nim)) {
      const data = {
        message: "NIM harus berupa angka",
      };

      return res.status(422).send(data);
    }

     // Handle format email harus benar
    if (!/\S+@\S+\.\S+/.test(email)) {
      const data = {
        message: "Format email tidak valid",
      };

      return res.status(422).send(data);
    }

    const students = await Student.create(req.body);

    const data = {
      message: "Menambahkan data student",
      data: students,
    };

    return res.status(200).json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const student = await Student.update(id, req.body);
      const data = {
        message: `Mengedit data students`,
        data: student,
      };

      return res.status(200).json(data);
    } else {
      const data = {
        message: `Data tidak ditemukan`,
      };

      return res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const student = await Student.delete(id);
      const data = {
        message: `Menghapus data student`,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Id tidak ditemukan`,
      };

      res.status(404).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `menampilkan data dengan id ${id}`,
        data: student,
      };

      res.status(200).send(data);
    } else {
      const data = {
        message: `data dengan id ${id} tidak ditemukan`,
      };

      res.status(400).send(data);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;