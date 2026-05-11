"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const main_1 = require("./main");
(0, globals_1.describe)('Testing add code ', () => {
    // Test case 1 
    (0, globals_1.it)('checking 1 + 2 , ', () => {
        (0, globals_1.expect)((0, main_1.sum)(1, 2)).toBe(3);
    });
    // Test case 2 
    (0, globals_1.it)('checking 1 + 2 , ', () => {
        (0, globals_1.expect)((0, main_1.sum)(1, 2)).toBe(3);
    });
});
//# sourceMappingURL=index.test.js.map