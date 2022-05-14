const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {PythonShell}  = require('python-shell');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', (req,res,next) => {
    const { position } = req.body;
    PythonShell.run(position+'prediction.py',null,(err,result) => {
        res.send(result);
    })

})
module.exports = router;
