const express = require('express');
const auth = require('../middlewares/auth');

const router = express.Router();
const upload = require('../middlewares/multer.js');
const catchUnknownError = require('../utils/catchUnknownError.js');
const ImageHelper = require('../helpers/ImageHelper');

const MainService = require('../services/ClaimImageService');
const _MainController = require('../controllers/ClaimImageController');

const MainController = new _MainController([MainService], [ImageHelper]);

const prefix = '/claim_images';

router.get(
	`${prefix}`,
	auth.protect,
	catchUnknownError(MainController.readAll.bind(MainController)),
);

router.get(
	`${prefix}/:id`,
	auth.protect,
	catchUnknownError(MainController.readOne.bind(MainController)),
);

router.patch(
	`${prefix}/:id`,
	express.json(),
	auth.protect,
	catchUnknownError(MainController.update.bind(MainController)),
);

router.post(
	`${prefix}`,
	express.json(),
	upload.single('file'),
	catchUnknownError(MainController.create.bind(MainController)),
);

router.delete(
	`${prefix}/:id`,
	auth.protect,
	auth.restrictedTo(['super_admin', 'admin']),
	catchUnknownError(MainController.delete.bind(MainController)),
);

module.exports = router;
