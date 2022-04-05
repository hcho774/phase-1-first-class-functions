

//function receivesAFunction(callback) {
//    return callback();
//}

const receivesAFunction = (callback) => callback();

//function returnsANamedFunction() {
//    return function AamedFunction() {};
//}
const returnsANamedFunction = () => function AnamedFunction() {};

//function returnsAnAnonymousFunction() {
//   return function () {};
//}

const returnsAnAnonymousFunction = () => function() {};
