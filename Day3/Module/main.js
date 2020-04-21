import MAX_VALUE, {MIN_VALUE, ProjectName as pName} from "./Modules/module1.js";
import * as values from "./Modules/module2.js";

console.log("module1 default  export value: " + MAX_VALUE);
console.log("module1 normal  export value: " + MIN_VALUE);
console.log("module1 normal value: " + pName);
console.log(` Person Name: ${values.name} and Location: ${values.location} `);