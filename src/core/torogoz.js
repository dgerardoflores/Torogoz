import TypeDocuments from './../interfaces/typeDocuments.js';
import DUI from './../helpers/DUI.js';
import NIT from './../helpers/NIT.js';

class Torogoz {
    static validateDocument(data) {
        if (data === undefined) {
            throw new Error('You have not sent a type of document or a document');
        }

        if (data.typeDocument === undefined) {
            throw new Error('You must send a type of document');
        }

        if (data.document === undefined) {
            throw new Error('You must send a document number without hyphens');
        }

        const keys = Object.keys(TypeDocuments);

        if (!keys.includes(data.typeDocument)) {
            throw new Error('A valid document type was not sent');
        }

        if (data.typeDocument === TypeDocuments.DUI) {
            return DUI.validate(data.document);
        }

        if (data.typeDocument === TypeDocuments.NIT) {
            return NIT.validate(data.document);
        }
    };
}

export default Torogoz;