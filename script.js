document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('d1').value = currentDate;
});


function cal(){
    
    var currDate = d1.value;
    var BirthDate = d2.value;

    var currYear = parseInt(currDate.slice(0,4), 10);
    var currMonth = parseInt(currDate.slice(5,7), 10);
    var currDay = parseInt(currDate.slice(8,10), 10);

    var birthYear = parseInt(BirthDate.slice(0,4), 10);
    var birthMonth = parseInt(BirthDate.slice(5,7), 10);
    var birthDay = parseInt(BirthDate.slice(8,10), 10);
   
    var ageDay, ageMonth, ageYear;

    if(currDay >= birthDay)
    {
        ageDay = currDay - birthDay;
    }
    else{
        ageDay = currDay + new Date(currYear, currMonth).getDate() - birthDay;
        currMonth--;
    }

    if(currMonth >= birthMonth)
    {
        ageMonth = currMonth - birthMonth;
    }
    else 
    {
        ageMonth = currMonth + 12 - birthMonth;
        currYear--;
    }
    if(currYear >= birthYear)
    {
        ageYear = currYear - birthYear;
        var ans = ageYear + " years " + ageMonth + " months " + ageDay + " days ";
        document.getElementById('pp').innerHTML = "Your age is : " + ans;
    }
    else{
        alert("Please Enter Valid Dates");  
    }


}