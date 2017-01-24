// What's being updated every time I submit the form?
// These need to be LET's because we can't update a constant variable
let totalItems = 0;
let sumItems = 0;
let average = 0;
let userEntry = 0;
let i = 0;


//listen to field-1 for user input

const form1 = document.querySelector('.form1');
form1.addEventListener('submit', (e) => {
  e.preventDefault();
  //by accessing these global variables, we can assign them temporary values which will
  //get over-written everytime we call the submit function.
  userEntry = Number(document.querySelector('#field-1').value);

  sumItems = sumItems + userEntry;

  i++;

  average = sumItems/i;

  console.log(userEntry + ", " + sumItems + ", " + i, ", " + average);

  //all numbers (neg, decimal, and whole) should have remainder of 0 when divded by 1;
  function checkEntry() {
    if ( (userEntry % 1) !== 0) {
        alert("Invalid Input. User must type numbers only");
        return false;
    }
  };

  checkEntry();


  const userList = document.querySelector('.view-entries');
  userList.insertAdjacentHTML('afterbegin', "<span>"+userEntry+", " + "</span>");

});

const calc = document.querySelector('.form1');
calc.addEventListener('reset', (e) => {
  e.preventDefault();

  const jsCalc = document.querySelector('.js-calcs');
  jsCalc.innerHTML = "Total Sum= " + sumItems + "<br>" + "# of Entries = " + i + "<br>" + "Average of Entries= " + average;
});
