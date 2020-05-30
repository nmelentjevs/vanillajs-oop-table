import express from 'express';
import makeCallback from '../utils/makeExpressCallback';
import {
  getPeople,
  postPerson,
  patchPerson,
  deletePerson,
} from '../controllers/person';

const router = express.Router({ mergeParams: true });

router.get('/', makeCallback(getPeople));
router.post('/', makeCallback(postPerson));
router.patch('/:id', makeCallback(patchPerson));
router.delete('/:id', makeCallback(deletePerson));

export default router;
