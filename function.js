

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


  // map function
    // 
    const employees = [
      { id: 1, name: "Alice", department: "sales", salary: 40000 },
      { id: 2, name: "Bob", department: "engineering", salary: 50000 },
      { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
      { id: 4, name: "David", department: "sales", salary: 35000 },
      { id: 5, name: "Emily", department: "engineering", salary: 55000 }
    ];
    function increaseSalaries(employees){
    //Implement your function here to modify the salaray.
      
      const result = employees.map((current)=>{
        if (current.department === 'sales'){
            current.salary = (current.salary * 1.1).toFixed(1);
          }else if(current.department === 'engineering'){
            current.salary = (current.salary * 1.15).toFixed(1);
          }else{
            current.salary = (current.salary * 1.05).toFixed(1);
          }
        return current;
      });
      
      return result;
      
      
    }

    const ans = increaseSalaries(employees);
    console.log(ans);

// 


  // end map function


// end of return function from a function

// reduce function

// reduce(redFn,initila value)

// function redFn(accumulator,curretValue, currentindex,arr)

// works like map function but it accumulates the data rather than returning a new array with modified results

// const inputs = [1,2,4,5,8];

// const sum5 = inputs.reduce((total,num)=>{
//   return total + num;
// },0);

// console.log(sum5);


const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." }
];
function mapContactsToCompanies(contacts) {
//Implement your function and return the object
    
    const result11 = contacts.reduce((val,current)=>{
         const tempval = current.company;
        if (current.company in val){
            val[tempval].push(current.name);
        } else{
            console.log(current.company);
            
            val[tempval] = [current.name] ;
        }
        return val;
        
        
    },{});
    
    return result11;
}

  let result123 = mapContactsToCompanies(contacts);
  console.log(result123);

// end reduce



// filter function

const temparr = [1,-3,5,-1,0];

const positive = temparr.filter((currentval)=>{
  return currentval > 0 ;
})

const neg = temparr.filter((num)=>num<0);

console.log(positive);
console.log(neg);

/** The function should work as follows:
- Takes the all songs array and the filter object "filters" as arguments.
- Applies a filter to limit the songs to the given genre only.
- Then, apply a filter to limit the songs to the given duration and returns the filtered results. */

  const songs = [
    { title: "All of Me", 
      artist: "John Legend", 
      genre: "Pop", 
      duration: 248 },
    { title: "Despacito", 
      artist: "Luis Fonsi", 
      genre: "Pop", 
      duration: 279 },
    { title: "Someone Like You", 
      artist: "Adele", 
      genre: "Pop", 
      duration: 285 },
    {
      title: "Thriller",
      artist: "Michael Jackson",
      genre: "Pop",
      duration: 357
    },
    {
      title: "Bohemian Rhapsody",
      artist: "Queen",
      genre: "Rock",
      duration: 354
    },
    {
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      genre: "Rock",
      duration: 480
    },
    {
      title: "Sweet Child O' Mine",
      artist: "Guns N' Roses",
      genre: "Rock",
      duration: 355
    },
    {
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      genre: "Rock",
      duration: 302
    },
    {
      title: "Hotel California",
      artist: "Eagles",
      genre: "Rock",
      duration: 390
    },
    {
      title: "Thrash Unreal",
      artist: "Against Me!",
      genre: "Punk",
      duration: 292
    },
    {
      title: "London Calling",
      artist: "The Clash",
      genre: "Punk",
      duration: 189
    }
  ];
  const filters = { genre: "Rock", duration: 350 };

  function filterSongs(songs,filters){
    //Implement your function here
    const filterSong = songs.filter((currentSong)=>{
        return currentSong.genre === filters.genre && currentSong.duration > filters.duration;
    });

    return filterSong;

    // const finalsong = filtersong.filter((currentsong1)=>{
    //   if(currentsong1.duration)
    // })
  }

  const outputsong = filterSongs(songs,filters);

  console.log(outputsong);


// end filter function  

// find product in stock

  const productList = [
    { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
    {
      id: "p2",
      name: "Oranges",
      category: "Fruits",
      price: 1.99,
      inStock: false
    },
    {
      id: "p3",
      name: "Blueberries",
      category: "Fruits",
      price: 4.99,
      inStock: true
    },
    {
      id: "p4",
      name: "Carrots",
      category: "Vegetables",
      price: 1.0,
      inStock: true
    },
    {
      id: "p5",
      name: "Tomatoes",
      category: "Vegetables",
      price: 1.5,
      inStock: true
    }
  ];
  function searchAndBuyProduct(productList,name){
    //Implement Your function here.
     let prodsale = false;
     const productIndex = productList.findIndex((currentProd)=>currentProd.name === name);

     if ( productIndex != -1 ){
      if ( productList[productIndex]['inStock'] == true){
        productList[productIndex]['inStock'] = false;
        prodsale = true;
      }
     }

      return prodsale;
      
  }

  const output = searchAndBuyProduct(productList,"Tomatoes");
  console.log(output);

// end find product in stock



// find total after applying discount

  const orders = [
    {
      orderNumber: 1,
      items: [
        { name: "Cappuccino", price: 3.5 },
        { name: "Chocolate Croissant", price: 2.5 }
      ]
    },
    {
      orderNumber: 2,
      items: [
        { name: "Latte", price: 4.0 },
        { name: "Blueberry Muffin", price: 2.75 }
      ],
      discountCode: "COFFEELOVER"
    }
  ];

  function totalOrderValue(orders, applyDiscount){
    //Implement your function here
    //The function should return the total price after applying the discount.

      const totalarr = orders.map(applyDiscount);

      console.log(totalarr);

      const answertotal = totalarr.reduce((tempans,currentans)=>{
          tempans += currentans;
          return tempans;
      },0);

      return answertotal;
      
  }

  function applyDiscount(currentObj){
      const temparr13 = currentObj.items;

      const temptotal = temparr13.reduce((acctemp,currenttemp)=>{
          acctemp += currenttemp.price;
          return acctemp;
      },0);

      const discountCode = currentObj.hasOwnProperty('discountCode');
      console.log(discountCode);
      let discountValue = 1;

      if (discountCode){
        if(currentObj.discountCode === 'COFFEELOVER'){
          discountValue = 0.9;
        } else if(currentObj.discountCode === 'TEALOVER'){
            discountValue = 0.8;
        }
      }

      return Number((temptotal * discountValue).toFixed(2)) ;
  }

  const temparary = totalOrderValue(orders, applyDiscount);
  console.log(temparary);

// end find total after applying discount


