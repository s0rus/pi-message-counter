import express from 'express';

import type MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

router.get<Record<string, never>, MessageResponse>('/', (_req, res) => {
  res.json({
    message: '🔥',
  });
});

export default router;
