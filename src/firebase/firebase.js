import * as firebase from 'firebase';
// import moment from 'moment';


const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase, googleAuthProvider, database as default };

//   // child_removed
//   database.ref('expenses').on('child_removed', snapshot => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   // child_changed
//   database.ref('expenses').on('child_changed', snapshot => {
//       console.log(snapshot.key, snapshot.val());
//   });

//   // child_added
//   database.ref('expenses').on('child_added', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

//   database.ref('expenses')
//     .on('value', snapshot => {
//         const expenses = [];

//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

//   database.ref('expenses')
//     .once('value')
//     .then(snapshot => {
//         const expenses = [];

//         // console.log(snapshot.val());

//         snapshot.forEach(childSnapshot => {
//             // console.log(childSnapshot.key);
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });



//   database.ref('expenses').push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
//   });

//   database.ref('notes/-LHnZq8ia7-45NUaN3fZ').remove();

//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: 'React native'
//   });

//   const firebaseNotes = {
//     notes: {
//         wotwe2: { // key is an unique id
//             title: '1st note',
//             body: 'This is my note'
//         }, 
//         aewtw23b: {
//             title: '2nd note',
//             body: 'This is my note'
//         }
//     }
//   };

//   const notes = [{
//     id: '12',
//     title: '1st note',
//     body: 'This is my note'
//   }, {
//     id: '761ase',
//     title: '2nd note',
//     body: 'This is my note'
//   }];

//   database.ref('notes').set(firebaseNotes);

//   database.ref().on('value', snapshot => {
//     console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}.`);
//   }, e => {
//     console.log('Error with data fetching', e);
//   });

//   setTimeout(() => {
//     database.ref('job/company').set('Amazon');
//   }, 5000);
  

// const onValueChange = database.ref().on('value', snapshot => { // on() uses callback pattern instead of promise
//     console.log(snapshot.val());
// }, e => {
//     console.log('Error with data fetching', e);
// });   

// setTimeout(() => {
//     database.ref('age').set(19);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

//   database.ref() // once() uses promise pattern
//     .once('value')  // event
//     .then(snapshot => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(e => {
//         console.log('Error fetching data: ', e);
//     });
//  database.ref().set({
//       name: 'Ann Lee',
//       age: 18,
//       stressLevel: 6,
//       job: {
//           title: 'Software developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Seattle',
//           country: 'US'
//       }
//     //   attributes: { 
//     //       height: 161,
//     //       weight: 51
//     //   }
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch(e => {
//     console.log('This failed.', e);
//   });

//   // database.ref().set('This is my data.');

//   database.ref('age').set(27);
//   database.ref('location/city').set('San Francisco');
//   database.ref('attributes').set({ // can create if not exists 
//       height: 175,
//       weight: 55
//   }).then(() => {
//     console.log('Data saved');
//   }).catch(e => {
//     console.log('error: ', e);
//   });
  
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Los Angeles'
// });

// database.ref('isSingle').set(null);

// database.ref().remove()
// .then(() => {
//     console.log('Remove succeeded.');
// })
// .catch(e => {
//     console.log('Remove failed: ', e.message);
// });