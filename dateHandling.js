//global variables
var monthDoubleNumber = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

var dateDoubleNumber = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "!4", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

var dayFullName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var monthFullName = ["January", "February", "March", "April", "May", "June", "July", "August", 					 "September", "October", "November", "December"];

var d = new Date();

var d2 = new Date("3/4/1998");






// mm/dd/yyyy
function formatUSDate(inDate)
{
var month = monthDoubleNumber[inDate.getMonth()];

var date = dateDoubleNumber[inDate.getDate()];

var year = inDate.getFullYear();

var result = month + "/" + date + "/" + year;

return alert(result);
}

formatUSDate(d);

formatUSDate(d2);






//day month date, yyyy
function formatFullDate(inDate)
{
	var day = dayFullName[inDate.getDay()];
	var month = monthFullName[inDate.getMonth()];
	var date = inDate.getDate();
	var year = inDate.getFullYear();
	
	var result = day + " " + month + " " + date + ", " + year;
	
	return alert(result);
}

formatFullDate(d);

formatFullDate(d2);
