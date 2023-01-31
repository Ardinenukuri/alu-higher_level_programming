#!/usr/bin/node

const side = parseInt(process.argv[2], 10);

if (isNaN(side)) {
    console.log('Missing size');
} else {
    for (let i = 1; i <= side; i++) {
	console.log('X'.repeat(side));
    }
}
