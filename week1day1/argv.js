var myArgs = require('optimist').argv,
  help = "This would be a great place for real help information.";

if ((myArgs.h)||(myArgs.help)) {
  console.log(help);
  process.exit(0);
}

switch (myArgs[0]) {
  case 'insult':
    console.log(myArgs[1], 'smells quite badly.');
    break;
  case 'compliment':
    console.log(myArgs[1], 'is really cool.');
    break;
  default:
    console.log(help);
}

console.log('myArgs: ', myArgs);