

// functions

function sum(a,b){
    return a + b;
}

const output1 = sum(5,6);

console.log(output1);

// arrow function

const name1 = () => 'hello shubham';   

/** for arrow function the function keyword is not required and to return function in 
one line no return statement is required but with multi line code for fucntion { return ...} is required .
parameters can be passed in () */

const sum2 = (a,b) => {
    return a + b;
}

console.log(sum2(3,2));


// self invoked functions

/** functions can be self invoked by putting the function expression under (), they have a use case for creating constructors 
 *  (() => { code here })();
*/


    (() =>{
        console.log(`hello my name is Shubham`);
    })();


    function main() {
    let userAuth = (function () {
      let registeredUsers = [];
  
      function registerUser(username, password) {
        if(checkCredentials(username,password)){
          return `The user is already registered`;
        }
        else{
        registeredUsers.push({ username: username, password: password });
        return `The user have been added to the registeredUser array`;
        }
      }
  
      function checkCredentials(username, password) {
        for (let i = 0; i < registeredUsers.length; i++) {
          if (
            registeredUsers[i].username === username &&
            registeredUsers[i].password === password
          ) {
            return true;
          }
        }
        return false;
      }
  
      return {
        registerUser: registerUser
      };
    })();
    console.log(userAuth.registerUser("xyz","123"));
    console.log(userAuth.registerUser("xyz","123"));
    return userAuth;
  }

//   const ouput = main();     uncomment to run the code


// end self invoked functions



// return function from a function



// this is a code to randomly shuffle the given array questions, under the function shuffle
// an anonymous function is returned to shuffle function.

function main() {
    const questions = [
      "Question1",
      "Question2",
      "Question3",
      "Question4",
      "Question5"
    ];
    function shuffle(arr) {
      return function () {
          for (let i = arr.length - 1; i > 0; i--) {
                let index = Math.floor(Math.random() * i);
                let tmp = arr[index];
                arr[index] = arr[i];
                arr[i] = tmp;
		  }
        result = [...arr];
        return result;
      };
    }
    // console.log(questions);
    const func = shuffle(questions);
	const shuffledArray1 = func();
	const shuffledArray2 = func();
    console.log(shuffledArray1);
    console.log(shuffledArray2);
    return shuffle;
  }

  main();


// end of return function from a function

