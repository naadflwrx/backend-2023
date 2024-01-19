// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
    
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, result) => {
        resolve(result.insertId);
      });
    });

    const students = this.find(id);
    return students;
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data,id], (err, result) => {
        resolve(result);
      });
    });

    const student = await this.find(id);
    return student;
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, result) => {
        const [student] = result;
        resolve(student);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, result) => {
        resolve(result);
      });
    });
  }
}

// export class Student
module.exports = Student;