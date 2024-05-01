const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];

//  start of :  add event listener to all seats to toggle colour when selected/unselected.
// get the total count of selected seats
  const vacantSeat = document.getElementsByClassName('seat');

  for (let i = 0; i<vacantSeat.length; i++){
    vacantSeat[i].addEventListener('click',(event)=>{
      const arraySeatClass = vacantSeat[i].classList.contains('occupied');
      if(arraySeatClass == false){
        vacantSeat[i].classList.toggle('selected');
        const seatSelectedTemp = document.getElementsByClassName('selected');
        const seatCount = seatSelectedTemp.length;
        const seatCountShow = document.getElementById('numberOfSeat');
        seatCountShow.innerHTML = seatCount - 1;
        let movieSelected = document.getElementById('movieName').innerHTML;
        const chosenMovie1 = moviesList.find(movie=>movie.movieName == movieSelected);
        document.getElementById('totalPrice').innerHTML = `$ ${chosenMovie1.price * (seatCount-1)}`;
      }
        });
  }

  //   end of : add event listener to all seats to toggle colour when selected/unselected.

//   start of : add movies from available list to select your movie dropdown
// display ticket price for the same

    const movieDropdown = document.getElementById('selectMovie');

    moviesList.forEach((current)=>{
        
        let option = document.createElement('option');

        option.text = current.movieName;

        movieDropdown.add(option);
    });

    
    
    movieDropdown.addEventListener('change',(eve)=>{
        let selectedMovie = movieDropdown.options[movieDropdown.selectedIndex].text;
        document.getElementById('movieName').innerHTML = selectedMovie;
        const chosenMovie = moviesList.find(movie=>movie.movieName == selectedMovie);
        document.getElementById('moviePrice').innerHTML = `$ ${chosenMovie.price}`;
        const seatSelectedTemp = document.getElementsByClassName('selected');
        const seatCount = seatSelectedTemp.length;
        document.getElementById('totalPrice').innerHTML = `$ ${chosenMovie.price * (seatCount-1)}`;
    });

//   end of : add movies from available list to select your movie dropdown

// get total price

    

// end of : get total price