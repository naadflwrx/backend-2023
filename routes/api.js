const StudentController = require('../controllers/StudentController.js');
const express = require('express');

const router = express.Router();

// mendefinisikan route
router.get('/', (req, res) => {
    res.send('Hai Express!');
});

// Routing student
router.get('/students', StudentController.index);
router.post('/students', StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);
router.get('/students/:id', StudentController.show);

// export router
module.exports = router;