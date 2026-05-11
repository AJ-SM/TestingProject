import {app} from './main'
import request from "supertest"
import { describe,it,expect } from '@jest/globals'


describe("Testing the POST /sum", ()=>{
    it("testing the sum function " ,async()=>{
        const res = await request(app).post('/sum').send({
        a:1,b:2
    })
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe(3);
    });
    
})

app.listen(3000,()=>{
    console.log("Running at 3000")
})