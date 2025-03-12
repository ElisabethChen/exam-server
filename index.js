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

app.get("/", (req, res) => {
    res.status(200).send("The server application is running");
})


// Send the stations data
app.get("/api/stations", (req, res) => {
    console.log("stations example: " + stations[0].name);
    res.json({ data: stations })
})

// local database
/// Save the subscription from the client and users email for newsletter
const localDb = {
    subscriptions: [],
    usersEmail: []
}

//HANDELING BACKGROUND SYNC RELATED REQUESTS
// Saving user email used for newsletter
app.post("/api/add-user-email", (req, res) => {
    const userEmail = req.body;
    localDb.usersEmail.push(userEmail);

    console.log(localDb.usersEmail);
    const userEmailString = JSON.stringify(localDb.usersEmail) + '\n';
    res.json({ "status": 200, message: "UserEmail saved successfully. Current usersEmail: " + userEmailString })
})

// Delete users email saved in local database
app.post("/api/clear-users-email", (req, res) => {
    localDb.usersEmail = [];

    const userEmailString = JSON.stringify(localDb.usersEmail) + '\n';
    res.json({ "status": 200, message: "UsersEmail is reset. Current usersEmail: " + userEmailString })

})

// respond users email saved in local database
app.get("/api/users-email", (req, res) => {
    res.json(localDb.usersEmail);
})


// HANDELING PUSH NOTIFICATION RELATED REQUESTS
// save the subcription from the front-end device
app.post('/save-subscription', async (req, res) => {
    try {
        const subscription = req.body?.subscription;
        if (!(subscription && typeof subscription.endpoint === "string")) {
            throw new Error("no existing subscription or it does not has an endpoint");
        }

        // check if the subscription is saved before
        const savedSubs = localDb.subscriptions;
        let isNotSaved = true;
        savedSubs.forEach(savedSub => {
            if (savedSub?.keys?.auth === subscription.keys?.auth) {
                isNotSaved = false;
                return;
            }
        })
        if (isNotSaved) {
            localDb.subscriptions.push(subscription);
        }
        console.log("subscription: ");
        console.log(subscription);
        res.json({ status: "Success", message: "Subscription saved" })
    }
    catch (err) {
        console.error(err);
    }
})

function sendNotification(subscription, res) {
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
}
/// send the push notification
app.get("/send-notif", (req, res) => {
    const subscriptions = localDb.subscriptions;

    if (subscriptions.length === 0) {
        res.json({ message: "Do not have any saved subscriptions" });
    } else if (subscriptions.length >= 1) {
        const notificationPayload = JSON.stringify("This is a test notification");

        const sendNotificationPromises = subscriptions.map(subscription => {
            return webpush.sendNotification(subscription, notificationPayload).catch(error => {
                console.error('Error sending notification, reason: ', error);
            });
        });

        Promise.all(sendNotificationPromises)
            .then(() => res.status(200).json({ message: 'Notifications sent successfully.' }))
            .catch(err => {
                console.error('Error in sending notifications:', err);
                res.sendStatus(500);
            });
    }
})

/// get push subscriptions
app.get("/get-sub", (req, res) => {
    const subscriptions = localDb.subscriptions;

    res.json({ status: "Success", data: subscriptions });
})

// clear all subscriptions
app.post("/clear-sub", (req, res) => {
    localDb.subscriptions = [];
    const subscriptions = localDb.subscriptions;

    res.json({ status: "Success", data: subscriptions });
})

// listen to a port
app.listen(PORT, () => {
    console.log(`Server strated on port ${PORT}`);
})