import { createRequire } from "module";

const require = createRequire(import.meta.url);
const json = require("./../assets/json/elsalvador.json");

class Location {
    static getDepartments() {
        console.log(json);
    }
}

export default Location;