// array
const pilotos = ["Senna", "Porst", "Schumacher", "Hamilton"];

console.log(pilotos[0]); // Senna
console.log(pilotos[3]); // Hamilton

console.log(pilotos.length); // array size

for (let piloto of pilotos) {
    console.log(piloto);
}

pilotos.push("Alonso"); // adding an element

const senna = pilotos.find( (piloto) => { // find an element
    piloto === "Senna";
})
console.log(senna);

pilotos.splice(1, 1); // delete element


// matrix
const students = [["Joseph", 23, "MG"], ["Briana", 22, "SP"], ["Louis", 24, "PR"]];
console.log(students[0][0])

// stack
class Stack {

    constructor() {
        this.data = [];
        this.top = -1;
    }

    push(value) {
        this.top++;
        this.data[this.top] = value;
    }

    pop() {
        if (this.top < 0) return undefined;
        const poppedTop = this.data[this.top];
        delete this.data[this.top];
        this.top--;
        return poppedTop;
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined;
    }

}

const stack = new Stack();

stack.push("learning");
stack.push("data");

stack.peek();

stack.pop();


// Queue
class Queue {

    constructor() {
        this.data = [];
    }

    enqueue(item) {
        this.data.push(item);
    }

    dequeue() {
        const item = this.data.shift();
    }

}

const queue = new Queue();

queue.enqueue("Joshua");
queue.enqueue("Michael");
queue.dequeue();
