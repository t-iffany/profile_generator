// Create survey app which asks the user a bunch of questions. It will then generate a profile description that incorporates the responses.
// readline module in node reads standardinput one line at a time at returns standardoutput one line at a time

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Place all questions into an array, so readline can read one line at a time.
let questions = [
  `What's your name? Nicknames are also acceptable :)  `,
  `What's an activity you like doing?  `,
  `What do you listen to while doing that?  `,
  `Which meal is your favourite (eg: dinner, brunch, etc.)  `,
  `What's your favourite thing to eat for that meal?  `,
  `Which sport is your absolute favourite?  `,
  `What is your superpower? In a few words, tell us what you are amazing at!  `
];

// .question(query, callback) function
// prints the question/query, then waits for the user to submit input/answer, then passes answer into callback fcn
// questions are nested so the next question can run after the previous question receives an answer
// .close() function exits/closes the InterfaceConstructor after all the questions are asked and answers received

rl.question(questions[0], (name) => {
  rl.question(questions[1], (activity) => {
    rl.question(questions[2], (music) => {
      rl.question(questions[3], (meal) => {
        rl.question(questions[4], (food) => {
          rl.question(questions[5], (sport) => {
            rl.question(questions[6], (superpower) => {
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});