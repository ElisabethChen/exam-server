const express = require("express");
const app = express();
const cors = require("cors");
const stations = require("./stationData");
const PORT = 8020;

app.use(cors());

app.get("/api/stations", (req, res)=> {
    console.log("stations example: " + stations[0].name);
    res.json({data: stations})
})

app.listen(PORT, ()=> {
    console.log(`Server strated on port ${PORT}`);
})