const submit = () => {
// retrieve elements
var dateElement = document.getElementById("date")
const genderElement = document.getElementById("gender")


// retrieving input values

var date = dateElement.value; 
const gender = genderElement.value;

// day of the week function
// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
// date = cc-yy-mm-dd
// Retrieve the date values from the date of birth for us to run the day of the week function
// convert date values to number

    const submit = [date,gender]

    var CC = Number(date.slice(0,2));

    var YY = Number (date.slice(2,4));

    var MM = Number (date.slice(5,7));

    var DD = Number (date.slice(8,10));

//     const dates = [CC, YY, MM, DD]

// console.log(date)
// 


    var dayOfTheWeek = Math.floor((((CC/4)-2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD)%7);
    
    
//    days of the week

    const daysOfTheWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ];
 
    //   male Akan names
      const maleNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
      ];

// female Akan names
      const femaleNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
      ];


      // date of birth validation

      if (date == '') {
        alert('please enter a valid date of birth')
    }
  
if (gender == 'null'){
          alert('please select your gender')

  }
 
  if (YY % 4 == 0 ){
    alert('This is a leap year, details might not be correct')
  }
    //   male name get function

   

    var index;
    
        if (dayOfTheWeek == 0){
                    index = 6;
              }
               else {
               index = dayOfTheWeek - 1;
              }
      // 
      //  leapYear;        
              
      //  if (YY % 4 == 0 & dayOfTheWeek == 0 ){
      //         index = 6;
      //   }
      //   else {
      //     index = dayOfTheWeek - 2;
      //   }

        if (gender == "male" & date != '') {
              document.getElementById("results").textContent = ('You were born on a ' + daysOfTheWeek[index] + ',' + 'Your Akan name is ' + maleNames[index] +'!!!')
              
                } 


          else if (gender == "female" & date != ''){
          document.getElementById("results").textContent = ('You were born on a ' + daysOfTheWeek[index] + ',' + 'Your Akan name is ' + femaleNames[index] + '!!!')
    
        }

         else{

              alert ('you entered incorrect data kindly try again')
         }  
                

         
            



        //  let btnClear = document.querySelector('button');
        //  let inputs = document.querySelectorAll('input');
        //  btnClear.addEventListener('click', () =>{
        //   inputs.forEach(input  => input.value = '');
        //  }); 

        console.log(submit)


  }
            




