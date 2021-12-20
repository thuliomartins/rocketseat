const questions = [
    "What did i learn today?",
    "What upset me?",
    "What could I do to improve?",
    "What made me happy today?",
    "How many people did I help today?"
];

const ask = (index = 0) => {
    process.stdout.write(`\n > ${questions[index]}: `);
}

ask();

const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    console.log(`
        Nice Thulio

        What did i learn today?:
        ${answers[0]}

        What upset me?:
        ${answers[1]}

        What could I do to improve?:
        ${answers[2]}

        What made me happy today?:
        ${answers[3]}

        How many people did I help today?:
        ${answers[4]}
    `);
});