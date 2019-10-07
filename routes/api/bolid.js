const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post("/bolid", (req, res, next) => {
    typeof req.body.command == "undefined" || req.body.command == null
        ? res.status(400).json({"command": "isRequired", "success": false})
            : req.body.device == "undefined" || req.body.device == null
        ? res.status(400).json({"device": "isRequired", "success": false})
            : req.body.person == "undefined" || req.body.person == null
        ? res.status(400).json({"person": "isRequired", "success": false})
            : req.body.command == "undefined" || req.body.command == null || req.body.device == "undefined" || req.body.device == null
        ? res.status(400).json({"command": "isRequired", "success": false, "device": "isRequired", "success": false})
            : req.body.command == "undefined" || req.body.command == null || req.body.person == "undefined" || req.body.person == null
        ? res.status(400).json({"command": "isRequired", "success": false, "person": "isRequired", "success": false})
            : req.body.device == "undefined" || req.body.device == null || req.body.command == "undefined" || req.body.command == null
        ? res.status(400).json({"device": "isRequired", "success": false, "command": "isRequired", "success": false})
            : req.body.device == "undefined" || req.body.device == null || req.body.person == "undefined" || req.body.person == null
        ? res.status(400).json({"device": "isRequired", "success": false, "person": "isRequired", "success": false})
            : req.body.person == "undefined" || req.body.person == null || req.body.command == "undefined" || req.body.command == null
        ? res.status(400).json({"person": "isRequired", "success": false, "command": "isRequired", "success": false})
            : req.body.person == "undefined" || req.body.person == null || req.body.device == "undefined" || req.body.device == null
        ? res.status(400).json({"person": "isRequired", "success": false, "device": "isRequired", "success": false})
            : res.status(200).send({
                "success": true,
                "command": req.body.command,
                "device": req.body.device,
                "person": req.body.person
            });
    console.log(req.body);
    next();
 });
 module.exports = router;