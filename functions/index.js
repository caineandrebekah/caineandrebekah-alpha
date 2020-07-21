const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

var docRef = db.collection('users').doc('alovelace');

exports.addUser = functions.https.onRequest((request, response) => {

    db.collection('users').get()
    // eslint-disable-next-line promise/always-return
    .then((snapshot) => {
        snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        response.send(doc.id, '=>', doc.data());
        });
    })
    .catch((err) => {
        console.log('Error getting documents', err);
        response.send('Error getting documents', err);
    });

    // var setUser = docRef.set({
    //     first: 'Ada',
    //     last: 'Lovelace',
    //     born: 1816
    // });
});


