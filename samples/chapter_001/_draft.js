setTimeout(() => console.log(1));

Promise.resolve().then(() => {
    console.log(2)
    Promise.resolve().then(() => console.log(3))
});

console.log(4);
