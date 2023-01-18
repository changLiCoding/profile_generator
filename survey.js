const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)",(name) => {
  rl.question("What's an activity you like doing?",(hobie) => {
    rl.question("What do you listen to while doing that?",(music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)",(meal) => {
        rl.question("Which sport is your absolute favourite?",(sport) => {
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!",(superpower) => {
            console.log(`Thank you for your valuable feedback: ${name}! It seems you like doing ${hobie}. And ${name} like to listen ${music}. ${meal[0].toUpperCase() + meal.slice(1, sport.length)} is you favourite meal. ${sport[0].toUpperCase() + sport.slice(1, sport.length)} sport is your favourite game. You are also very amazing at ${superpower}. `);
            rl.close();

          });
        });
      });
    });
  });


});
//rl.question("What's an activity you like doing?", (answer) => {
//  console.log(`Thank you for your valuable feedback: ${answer}`);

//  rl.close();
//});
//rl.question("What do you listen to while doing that?", (answer) => {
//  console.log(`Thank you for your valuable feedback: ${answer}`);

//  rl.close();
//});
//rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
//  console.log(`Thank you for your valuable feedback: ${answer}`);

//  rl.close();
//});
