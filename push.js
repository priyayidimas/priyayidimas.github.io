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
   "endpoint": "https://fcm.googleapis.com/fcm/send/ea3Es9TzVqs:APA91bG7e4ISx7pf-2h0LJM-t1wEUbQFnWKfXZAtouGG03JiHhIGe0dG6gqoXdh07d8YtJMPdgu_wy2LjKlT89-95cmvvVoRyfJLp39YwFXrgXBn7GyNSm4NALnIMK844UBR3saLh2RL",
   "keys": {
       "p256dh": "BHZDlRiPvOawX84MhDfhTssK80D5reVX4UC06W7eZqLXrLZteGgD7q1g7zz7OfQSGONsY3hw6YLSdHzyOY/o0bk=",
       "auth": "r+Wg80F0jmj5/xAK1+87Hg=="
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
).catch(err => {
   console.error(err);
});