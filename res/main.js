//var fname = document.getElementById("fname").value;
//var lname = document.getElementById("lname").value;

function validate()
{
	//alert("hello");
	var letters = /^[A-Za-z]+$/;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;

	if((fname == "" || fname == null) || (lname == "" || lname == null))
	{
		alert("Enter all the text fields");
	}

	else
	{
		if(fname.match(letters) && lname.match(letters))
		{
			return true;
		}
		else
		{
			alert("You can enter charactors only.");
			return false;
		}
	}
}