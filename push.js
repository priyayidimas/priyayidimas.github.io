var webPush = require('web-push');
     
const vapidKeys = {
   "publicKey": "BLvphUKMvEuW-D8fjoV21P1q0_gNbER-cVU5x5gYKZxbkByeu0tWgwOIMrxXegUigogogRVyZp3c6MBBIXhc7Mc",
   "privateKey": "G2SGbZnOoqyPRvxhW4HHUz3wXR8n6207oPmXj8TG-NI"
};
 
 
webPush.setVapidDetails(
   'mailto:priyayidimas@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/dv-DSvV2_nE:APA91bFwVBjCocxitmOogMKGxjqnVSLKjQHtDGJ_Ix9kKyBXq-90sj3WBoWzq-zT2-06OjTACaNxp5IH9zqMuwQ_AVE5qViO-4EFJeonC-NOeeYkXA_J8qvKmjEnYEDtsnC3hf_uM6mQ",
   "keys": {
       "p256dh": "BP+yp1VHqvW6AqzeO7FixbpOts+49yVW7PaisBzUaffw4WQVI4E6PZrV/dXs6LUE5nJ0Eus6tA7J3P9FyoFnq1I=",
       "auth": "2MbDFqOUA6md4vckQoA8AQ=="
   }
};
var payload = 'Congrats! Push Notification Received!';
 
var options = {
   gcmAPIKey: '618186156839',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);