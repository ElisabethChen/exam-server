require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const webpush = require("web-push");
const stations = require("./stationData");
const PORT = 8020;

const publicKey = process.env.PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;

webpush.setVapidDetails(
    "mailto:echen@kth.se",
    publicKey,
    privateKey
)

app.use(cors());
app.use(express.json());

// Send the stations data
app.get("/api/stations", (req, res) => {
    console.log("stations example: " + stations[0].name);
    res.json({ data: stations })
})

// Handeling the push notifications

/// Save the subscription from the client
const tempDb = { subscription: null }

app.post('/save-subscription', async (req, res) => {
    try {
        const subscription = req.body?.subscription;
        if (!(subscription && typeof subscription.endpoint === "string")) {
            throw new Error("no existing subscription or it does not has an endpoint");
        }
        tempDb.subscription = subscription;
        res.json({ status: "Success", message: "Subscription saved" })
    }
    catch (err) {
        console.error(err);
    }
})

/// send the push notification
app.get("/send-notif", (req, res) => {
    const subscription = tempDb.subscription;
    webpush
        .sendNotification(subscription, "Test Notification Message")
        .then(() => {
            console.log("send the push notification");
            res.json({ status: "Success", message: "Success sent a push notification" });
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });

})

// listen to a port
app.listen(PORT, () => {
    console.log(`Server strated on port ${PORT}`);
})