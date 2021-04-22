function* f() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = f();

//generator().forEach(item=>console.log(item));

for (const number of generator) {
    console.log(number)
}

let b = [...f()];
console.log(b);
