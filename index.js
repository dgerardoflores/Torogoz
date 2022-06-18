import Torogoz from './src/core/torogoz.js';
import TypeDocuments from './src/interfaces/typeDocuments.js';

let response = Torogoz.validateDocument({
    typeDocument: TypeDocuments.NIT,
    document: '0315-130199-106-0'
});

console.log(response);