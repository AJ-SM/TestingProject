import express from "express"
export const  app = express()


app.use(express.json())
app.post('/',(req,res)=>{
    const a = req.body.a 
    const b = req.body.b 

    res.send({"sum": a+b })

})
export function sum(a:number,b:number){
    return a+b
}
// console.log("Hello world ")