class StudentController {
    index(req, res) {
    const data = {
        message: "Menampikan seluruh data students",
        data: students,
        };
    
        res.send(data);
    }
    
    store(req, res) {
    const { nama } = req.body;
    students.push({ nama });
        const data = {
        message: `Menambahkan data students : ${nama}`,
        data: students,
        };
    
        res.send(data);
    }
    
    update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;
        
        // Validasi data id
        if (!id || isNaN(id) || id < 0 || id >= students.length) {
            return res.status(400).send({ message: "Data id tidak valid" });
        }
        
        // Validasi data nama
        if (!nama) {
            return res.status(400).send({ message: "Data nama tidak boleh kosong" });
        }
        
        students[id] = nama;
        const data = {
            message: `Mengedit data students dengan id : ${id}, nama : ${nama}`,
            data: students,
        };
    
    res.send(data);
    }
    
    destroy(req, res) {
        const { id } = req.params;
    
        // Validasi data id
        if (!id || isNaN(id) || id < 0 || id >= students.length) {
          return res.status(400).send({ message: "Data id tidak valid" });
        }
    
        students.splice(id, 1);
        
        const data = {
          message: `Menghapus data students dengan id : ${id} yang bernama : ${nama}`,
          data: students,
        };
    
        res.send(data);
    }
}

const studentController = new StudentController();
module.exports = studentController;