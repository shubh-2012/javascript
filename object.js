
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

  
// end of creating objects and retrieving values from them. 