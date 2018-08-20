import express from 'express';
const router = express.Router();
import UserService from '../services/user'

router.post('/', async (req, resp) => {
  return await UserService.createUser(req, resp);
});

module.exports = router;
