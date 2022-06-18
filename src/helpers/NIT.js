class NIT {
    static validate(nit) {
        const regex = /((^\d{4})-(\d{6})-(\d{3})-(\d$))|(^\d{14}$)/;

        if (!regex.test(nit)) return false;

        const [municipality, birthdate, correlative, verifier] = nit.includes('-')
            ? nit.split('-')
            : splitNIT(nit);

        if (!NIT.isMunicipalityCode(municipality) || !NIT.isDate(birthdate)) {
            return false;
        }

        const digits = municipality + birthdate + correlative;
        const sum = correlative.startsWith('0')
            ? NIT.calculateNitVerificationOldFormat(digits)
            : NIT.calculateNitVerification(digits);

        return Number(verifier) === sum;
    }

    static isMunicipalityCode(code) {
        return code.length === 4 && (NIT.isForeignCode(code) || NIT.isNationalCode(code));
    }

    static isForeignCode(code) {
        return code.startsWith('9');
    }

    static isNationalCode(code) {
        if (!code.startsWith('0') && !code.startsWith('1')) return false;

        const department = code.substring(0, 2);
        const municipality = code.substring(2);

        return municipalitiesLookup[department] >= Number(municipality);
    }

    static isDate(str) {
        const digitsNITYear = str.substring(4);
        const digitsActualYear = new Date().getFullYear().toString().substr(-2) + 1;

        const year = digitsNITYear >= digitsActualYear ? ('19' + digitsNITYear) : ('20' + digitsNITYear);
        const month = str.substring(2, 4);
        const day = str.substring(0, 2);

        const date = new Date(year + '/' + month + '/' + day);

        return date && Number(date.getMonth()) + 1 === Number(month);
    }

    static calculateNitVerificationOldFormat(digits) {
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum += Number(digits[i]) * (digits.length + 1 - i);
        }
        sum %= 11;
        return sum;
    }

    static calculateNitVerification(digits) {
        let sum = 0;
        for (let i = 0; i < digits.length; i++) {
            sum +=
                Number(digits[i]) * (3 + 6 * Math.floor(Math.abs((i + 5) / 6)) - (i + 1));
        }
        sum %= 11;
        return sum > 1 ? 11 - sum : 0;
    }
};

const municipalitiesLookup = {
    '01': 12,
    '02': 13,
    '03': 16,
    '04': 33,
    '05': 22,
    '06': 19,
    '07': 16,
    '08': 22,
    '09': 9,
    '10': 13,
    '11': 23,
    '12': 20,
    '13': 26,
    '14': 18,
};

export default NIT;