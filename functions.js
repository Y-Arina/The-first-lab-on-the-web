
function SendingData()
{	if(document.getElementById('random').checked)
	{
		var url="http://numbersapi.com/";
		url+="random";
		if(document.getElementById('math').checked) { url+="/math";}
		if(document.getElementById('trivia').checked) { url+="/trivia";}
		if(document.getElementById('date').checked) { url+="/date";}
		if(document.getElementById('year').checked) { url+="/year";}

		url+="?json";
		console.log(url);
		var request=new XMLHttpRequest();
		request.open('Get',url);
		request.responseType ='json';
		request.send();

		request.onload = function()
		{
			console.log(request.response);
			var result=request.response;
			document.getElementById('result').innerHTML=result.text;
		}
	}
	if(document.getElementById('input').checked)
	{
		var url="http://numbersapi.com/";
		if(document.getElementById('math').checked) 
		{ 
			url+=document.getElementById('input_month').value;
			url+="/math";
		}
		if(document.getElementById('trivia').checked) 
		{ 
			url+=document.getElementById('input_month').value;
			url+="/trivia";
		}
		if(document.getElementById('date').checked)
		{ 
			if(document.getElementById('date1').checked)
			{
				url+=document.getElementById('input_month').value+'/'+document.getElementById('input_day').value;
			}
			if(document.getElementById('date2').checked)
			{
				url+=document.getElementById('input_month').value;
			}
			url+="/date";
		}
		if(document.getElementById('year').checked) 
		{ 
			url+=document.getElementById('input_month').value;
			url+="/year";
		}

		url+="?json";
		console.log(url);
		var request=new XMLHttpRequest();
		request.open('Get',url);
		request.responseType ='json';
		request.send();

		request.onload = function()
		{
			console.log(request.response);
			var result=request.response;
			document.getElementById('result').innerHTML=result.text;
		}
	}
}

