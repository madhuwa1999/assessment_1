//var fname = document.getElementById("fname").value;
//var lname = document.getElementById("lname").value;
//var fs = require('fs');

function validate()
{
	//alert("hello");
	var letters = /^[A-Za-z]+$/;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var vname = document.getElementById("vname").value;

	//var readMe = fs.readFileSync('../res/data.txt', 'utf8');
	//alert(readMe);

	if((fname == "" || fname == null) || (lname == "" || lname == null) || (vname == "" || vname == null))
	{
		alert("Enter all the text fields. Survey Failed.");
	}

	else
	{
		if(fname.match(letters) && lname.match(letters) && vname.match(letters))
		{
			alert("Welcome "+fname+" "+lname+". Survey Successful.");
			window.open("../codes/index.html");
			return true;
		}
		else
		{
			alert("You can enter charactors only. Survey Failed.");
			return false;
		}
	}
}
