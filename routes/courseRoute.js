const express = require('express');
const courseController = require('../controllers/courseController');
const roleMiddlewears = require('../Middlewares/roleMiddlewears');
const authMiddlewares = require('../Middlewares/authMidlewares');
const router = express.Router();

router
  .route('/')
  .post(
    authMiddlewares,
    roleMiddlewears(['trainer', 'admin']),
    courseController.createCourse
  );
router.route('/').get(courseController.getAllCourse);
router.route('/:slug').get(courseController.getCourse);
router.route('/:slug').delete(courseController.deleteCourse);
router.route('/:slug').put(courseController.updateCourse);
router.route('/enroll').post(courseController.EnrollCourse);
router.route('/release').post(courseController.releaseCourse);

module.exports = router;
