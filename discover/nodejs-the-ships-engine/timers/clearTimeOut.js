const timeOut = 3000; // 3 seconds

const finished = () => console.log("done!");

let timer = setTimeout(finished, timeOut);

clearTimeout(timer);