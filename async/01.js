console.log("uno");
setTimeout(() => {
  console.log("ESTO ESTA EN EL TIMEOUT");
}, 2000);
console.log("dos");
console.log("tres");

let data;

function getData() {
  setTimeout(() => {
    data = { name: "Pepe", age: 50 };
    console.log(data);
}, 5000);
}

console.log(data);
getData()

