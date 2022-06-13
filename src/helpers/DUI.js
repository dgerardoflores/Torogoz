class DUI {
    static validate(dui) {
        const regex = /(^\d{8})-(\d$)/,
            parts = dui.match(regex);

        if (parts !== null) {
            let digits = parts[1],
                dig_ve = parseInt(parts[2], 10),
                sum = 0;
            for (let i = 0, l = digits.length; i < l; i++) {
                const d = parseInt(digits[i], 10);
                sum += (9 - i) * d;
            }
            return dig_ve === (10 - (sum % 10)) % 10;
        } else {
            return false;
        }
    }
}

export default DUI;