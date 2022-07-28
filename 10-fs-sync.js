
// we discuss about fs module

const {readFileSync, writeFileSync} = require('fs')

const path = require('path')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)

writeFileSync('./content/result-sync.txt', `here is the final result : ${first}, ${second}`,{flag : 'a'})
// writeFileSync will create a txt file named rsult-sync and put the message in it or if it already exsist then it will overwrite it.
// flag : a helps us to append in the file otherwise it will be overwritten
const result = readFileSync('./content/result-sync.txt','utf8')
console.log(result)