const promise = new Promise((resolve, reject) => { // this promise-creation process often exists in library
    setTimeout(() => {
        resolve({  // only allows single argument
            name: 'Ann Lee',
            age: 19
        });
        // reject('Something went wrong!'); // only allows single argument
    }, 3000);
});

console.log('before');

// as library users, we often get existing promises from library function calls and use them directly (then() and/or catch(): register callbacks / attach handlers)
promise.then(data => { // data got from resolve()
    console.log(data);
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve('This is my another promise');
        }, 3000);
    });
}).then(str => {
    console.log('Does this run?', str);
}).catch(error => { // data got from reject()
    console.log('error: ', error);
});

console.log('after');