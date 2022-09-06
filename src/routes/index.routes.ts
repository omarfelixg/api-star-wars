import { Router } from 'express'
import {ping}  from '../controllers/index.controller'

const router = Router();

router.route('/')
    .get(ping);

router.route('/')
    .get((req, res) => res.json('POSTS'))

export default router;