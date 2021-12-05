const express = require('express');
const connect = require("./configs/db")
const app = express();
app.use(express.json());




const PORT = process.env.PORT || 3001


app.use((req, res) => {
    return res.status(404).send("No Route Found. Server still running...")
});

const start = async () => {

    await connect();

    app.listen(PORT, () => {

        console.log("Listening on port ", PORT);
    })
}
module.exports = start;