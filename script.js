/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Passwords must not be any previous password. 

Expected Result:
PasswordValidationResult=  [false, false, true, false, false]
*/
const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"];
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"];
let previousPasswords = [
  "fhD8!yrjj",
  "ttkTu.wer3",
  "dvyyeyy!5",
  "qwbfj76%",
  "tytT3729.",
  "384#HsHf",
  "Jai33",
];

function validatePasswords(arr) {
  var passw = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{5,}$/;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(passw)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  for (let j = 0; j < arr.length; j++) {
    for (let a = 0; a < previousPasswords.length; a++) {
      if (arr[j] === previousPasswords[a]) {
        result.splice(j, 1, "invalid password");
      }
    }
  }
  return result;
}

console.log(validatePasswords(passwords1));
console.log(validatePasswords(passwords2));

/* ======= TESTS - DO NOT MODIFY THIS PART===== */
function test(test_name, actual, expected) {
  let status;
  for (i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      status = "PASSED";
    } else {
      status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
    }
  }
  console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
);

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, true]
);
/* ======= TESTS - DO NOT MODIFY THIS PART===== */
