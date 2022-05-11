const readline = require('readline');


const answers = {};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hello there! What is you name? ', (answer) => {
  console.log(`Hey ${answer}, nice to meet you!`);
  answers.name = answer;

  rl.question('So what do you like to do in your spare time? ', (answer) => {
    console.log(`${answer} is a nice passtime.`);
    answers.favouritePasstime = answer;

    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Hm...never heard of ${answer}, is it good? I should check it out.`);
      answers.favouriteMusic = answer;

      rl.question('Which cuisine is your favourite? ', (answer) => {
        console.log(`Ahh... ${answer}. I personally love them all.`);
        answers.favouriteCuisine = answer;

        rl.question('Which dish you like most of all? ', (answer) => {
          console.log(`I love ${answer}. Would eat it all day.`);
          answers.favouriteDish = answer;

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`${answer} sounds like an awesome hobby.`);
            answers.favouriteSport = answer;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Wow, ${answer} sound like an awesome thing to do.`);
              answers.superpower = answer;

              rl.close();
              console.log(answers);
            });
          });
        });
      });
    });
  });
});
