'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

//router.get('/', auth.hasRole('admin'), controller.index);
router.get('/', auth.isAuthenticated(), controller.index);
router.get("/notme",auth.isAuthenticated(),controller.notme);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/upload', auth.isAuthenticated(), controller.uploadFiles);
router.post('/', controller.create);

module.exports = router;
