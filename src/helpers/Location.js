import { createRequire } from "module";

const require = createRequire(import.meta.url);
const json = require("./../assets/json/elsalvador.json");

class Location {
    static getDepartments() {
        let departments = new Array();

        json.forEach(department => {
            const d = new Department(department.id, department.name, department.departmentalCapital, department.ISO, department.expansion);

            departments.push(d);
        });

        return departments;
    }
}

class Department {
    constructor(id, name, departmentalCapital, ISO, expansion) {
        this.id = id;
        this.name = name;
        this.departmentalCapital = departmentalCapital;
        this.ISO = ISO;
        this.expansion = expansion;
    }
}

export default Location;