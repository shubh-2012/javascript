
// creating objects and retrieving values from them. 

const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      city: "New York",
      street: "123 Main St",
      zipCode: "10001"
    }
  };
  const userProfile2 = {
    name: "Marry Jane",
    email: "marry.jane@example.com",
    address: {
      city: "L.A",
      street: "154, washington road",
      block: '0101',
      zipCode: "10011"
    }
  };
  
  function getUserDetail(profile, keys) {
    // Implement your function here
      let varkey = profile;
		for (let key of keys){
			varkey = varkey[key];
        }
      return varkey;
  }
  
  console.log(getUserDetail(userProfile2, ["address", "block"]));

//   creating similiar objects like this is not optimised, better to this with function like constructor function.
// end of creating objects and retrieving values from them. 



// constructor function

  function Movie (title,year){      /* Constructor function name starts with Capital letter*/
    this.title = title;
    this.year = year;

    this.getDetail = function(){
        console.log( `Title : ${this.title} , Year : ${this.year}`);
    };
  }

  const movie123 = new Movie('Hello','1234');
  
  movie123.getDetail();


// end constructor function



// prototype

// add the method to the prototype chain instead of creating copies.
// Ensure that isClassic method is accessible to all instances of Book object.


function Book(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  
      Book.prototype.isClassic = function () {
        this.currentYear = 2023;
        this.age = this.currentYear - this.publicationYear;
        if (this.age >= 50) {
          return "The book is from the classic collection";
        }
        return "The book is not a classic collection book";
      };
  }
  
  
  // Create a few book objects
  const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1990);
  const book2 = new Book("1984", "George Orwell", 1949);
  const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
  
  
  // Consoling output
  console.log(book1.isClassic()); // Output: 63
  console.log(book3.isClassic()); // Output: 98
  


// end prototype





// bind 

/**modify the login method by using the bind method to create a 
 * reusable function named loginFunction that is bound to the systemCredentials object. */


  function User(displayName) {
    this.displayName = displayName;
  }
  
  const systemCredentials = {
    username: "system",
    password: "pass123"
  };
  User.prototype.login = function (username, password) {
      // Implement the code here
      if (this.username === username && this.password === password){
          console.log('Login successful!');
      }else{
          console.log('Login failed!');
      }
    };
    
    // Example usage:
    const user = new User("John Doe");
    // Create the reusable loginFunction here
  
    let loginFunction = user.login.bind(systemCredentials);
    
    loginFunction("system", "pass123"); // Expected output: "Login successful!"
    loginFunction("wrongUsername", "wrongPassword"); // Expected output: "Login failed!"

// end bind