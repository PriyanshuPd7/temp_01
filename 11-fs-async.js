
// we discuss about fs module Async

const {readFile, writeFile} = require('fs')

// readFile('./content/first.txt','utf8',(err,result) => {
//     if(err){
//         console.log(err)
//         return
//     }

//     console.log(result)
// })
/* <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65> */

// this will be the output if we dont include utf8 encoding argument
// --------------------------------------------------------------------------------
readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err)
        return
    }

    const first = result;

    readFile('./content/second.txt','utf8',(err,result) => {
        if(err){
            console.log(err)
            return
        }
    
        const second = result

        writeFile('./content/result-async.txt',`here is the final result : ${first}, ${second}`,{flag : 'a'},(err,result)=>{

            if(err){
                console.log(err)
                return;
            }
            console.log(result)

        })

    })
})
