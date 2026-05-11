import {describe,expect,it} from "@jest/globals";
import { sum } from "./main";

describe('sum mod', ()=>{
    it('checking 1 + 2 , ',()=>{
        expect(sum(1,2)).toBe(3)
    })
})