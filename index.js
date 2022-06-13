import Torogoz from './src/core/torogoz.js';

let response = Torogoz.validateDocument({
    typeDocument: 'NIT',
    document: '0315-130199-106-0'
});

console.log(response);