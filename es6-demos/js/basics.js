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

// var funcs = [];

// for (var i = 0; i < 5; i++) {
//     funcs.push(function() {
//         console.log(i);
//     });
// }

// funcs[3]();

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

// var createFamilyFactory = function(lastName) {
//    var familyName = lastName;

//    return function(firstName) {
//        var familyMember = {
//            'name' : firstName + ' ' + lastName
//        };

//        return familyMember;
//    };
// };

// var addThomasMember = createFamilyFactory('Thomas');
// var me = addThomasMember('David');
// console.log(me.name);

// var addJohnsonMember = createFamilyFactory('Johnson');
// var you = addJohnsonMember('Dan');
// console.log(you.name);
