//var fname = document.getElementById("fname").value;
//var lname = document.getElementById("lname").value;
//var fs = require('fs');


function validate()
{
	//alert("hello");
	var letters = /^[A-Za-z]+$/;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;

	//var readMe = fs.readFileSync('../res/data.txt', 'utf8');
	//alert(readMe);

	if((fname == "" || fname == null) || (lname == "" || lname == null))
	{
		alert("Enter all the text fields. Login Failed.");
	}

	else
	{
		if(fname.match(letters) && lname.match(letters))
		{
			alert("Welcome "+fname+" "+lname+". Login Successful.")
			return true;
		}
		else
		{
			alert("You can enter charactors only. Login Failed.");
			return false;
		}
	}
}
