"use strict";
const small = 1;
const Medium = 2;
const Large = 3;
var Size;
(function (Size) {
    Size[Size["small"] = 0] = "small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map