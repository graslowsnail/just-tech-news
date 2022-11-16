const router = require('express').Router();
const apiRoutes = require('./api');
const homeRotes = require('./home-routes.js');


router.use('/api', apiRoutes);
router.use('/', homeRotes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
