#!/usr/bin/node

if (process.argv[2] === undefined) {
    consolr.log('No argument');
} else {
    console.log(process.argv[2]);
}
