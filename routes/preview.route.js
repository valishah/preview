import express from 'express';
const router = express.Router();
import previewService from '../services/service'

router.get('/', async (req, resp) => {
  console.log(req.query.link);
  let previewMeta = await previewService.fetch(req.query.link);
  resp.send(previewMeta);
});

module.exports = router;
