const express = require('express');
const router = express.Router();
const cors = require('cors')
const {test, registerUser, loginUser} = require('../controllers/authController');

router.use(
    cors({
        credentials:true,
        origin: 'https://user-auth-mern-frontend.vercel.app'
    })
)


router.get('/', test);
// router.get('/dashboard', userDashboard)
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router;
