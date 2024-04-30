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
        vacantSeat[i].classList.toggle('selected');
        const seatSelectedTemp = document.getElementsByClassName('selected');
        const seatCount = seatSelectedTemp.length;
        const seatCountShow = document.getElementById('numberOfSeat');
        seatCountShow.innerHTML = seatCount - 1;
    });
  }

  //   end of : add event listener to all seats to toggle colour when selected/unselected.