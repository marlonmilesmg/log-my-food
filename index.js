#! /usr/bin/env node
/*jshint esversion: 8 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('What would you like to today? ', async (item) =>{
    const {data} = await axios.get('http://localhost:3001/food');
    const it = data[Symbol.iterator]();
    let position = it.next();
    while(!position.done) {
        const food = position.value.name;
        if (food === item) {
            console.log('${item has ${position.value.calories} calories');
        }
        position = it.next();
    }
    console.log(item);
    readline.close();
});