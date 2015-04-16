// default params
// function fullName(firstName = 'Dan', lastName = 'Johnson') {
//     return `${firstName} ${lastName}`;
// }

// console.log(fullName('Ella'));

// block scoping
// var name = 'Dan';

// {
//     var name = 'Ella';
//     // let name = 'Ella';
//     console.log(name);
// }

// console.log(name);

var funcs = [];

for (var i = 0; i < 5; i++) {
    funcs.push(function() {
        console.log(i);
    });
}

funcs[3]();

// var funcs = [];

// for (var i = 0; i < 5; i++) {
//     (function(i) {
//         funcs.push(function() {
//             console.log(i);
//         });
//     })(i);
// }

// funcs[3]();

// var funcs = [];

// for (let i = 0; i < 5; i++) {
//     funcs.push(function() {
//         console.log(i);
//     });
// }

// funcs[3]();
