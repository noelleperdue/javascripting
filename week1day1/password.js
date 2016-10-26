var replacements = {
  "o": 0,
  "e": 3,
  "a": 4,
  "l": 1
};

function obfuscate(password) {
  var letters = Object.keys(replacements);

  for(var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    var newLetter = new RegExp(letter, "g");
    password = password.replace(newLetter, replacements[letter]);
  }

  console.log(password);
}

// read the password from argv
obfuscate(process.argv[2]);
