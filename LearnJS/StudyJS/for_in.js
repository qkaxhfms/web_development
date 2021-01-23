//for_in

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

const example = [1, 2, 3];

for (var i = 0; i < example.length; i++) {
    console.log(i);
}

for (var i in example) {
    console.log(i);
}
