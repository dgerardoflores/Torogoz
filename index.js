import Torogoz from './src/core/torogoz.js';
import TypeDocuments from './src/interfaces/typeDocuments.js';

const deparments = Torogoz.getDepartments();

console.log(deparments);

export {
    Torogoz,
    TypeDocuments
};