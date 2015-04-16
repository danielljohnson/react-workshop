// https://github.com/ga-wdi-boston/wdi-angular-kukicha/blob/master/jquery-promises/index.html

function slow() {
    return new Promise(function(resolve, reject) {
        // do something slow
        setTimeout(function() {
            resolve('slow');
        }, 1000);
    });
}

// slow().then(function(val) {
//     console.log(`resolved: ${val}`);
// }, function(val) {
//     console.log(`rejected: ${val}`);
// });

function slower() {
    return new Promise(function(resolve, reject) {
        // do something slow
        setTimeout(function() {
            resolve('slower');
        }, 2000);
    });
}

Promise.all([slow(), slower()])
    .then(function(values) {
        console.log(values);
    });

// Promise.race([slow(), slower()])
//     .then(function(values) {
//         console.log(values);
//     });
