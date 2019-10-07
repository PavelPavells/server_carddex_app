const express = require("express");
const bodyParser = require("body-parser");
const bolid = require("./routes/api/bolid");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    try {
        res.status(200).sendFile(__dirname + '/client/index.html');
    } catch (error) {
        throw new Error(error)
    }
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send('Something broke!')
})
app.use("/api", bolid);
const port = 8099 || process.env.PORT;
app.listen(port, () => console.log(`Server up and running on port: ${port}`));