import { Router } from 'express';
import { getSimilarVideos } from '../controllers/videoController';
import { redirect as _redirect } from '../controllers/redirect';
import path from 'path';

const router = Router();

router.post("/get-similar", getSimilarVideos);
router.get("/", _redirect);

export default router;