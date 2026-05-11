import {describe,expect,it} from "@jest/globals";
import { sum } from "./main";

describe('Testing add code ', ()=>{
// Test case 1 
    it('checking 1 + 2 , ',()=>{
        expect(sum(1,2)).toBe(3)
    })

    // Test case 2 
it('checking 1 + 2 , ',()=>{
        expect(sum(1,2)).toBe(3)
    })
})