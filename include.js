function includeHTML() 
{
	let elmnt, file, xhttp;
	let arrElmnt = document.getElementsByTagName("*");
	for (let i = 0; i < arrElmnt.length; i++) 
	{
		elmnt = arrElmnt[i];
		file = elmnt.getAttribute("include-html");
		console.log(file);
		if (file) 
		{
			/* Make an HTTP request using the attribute value as the file name: */
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() 
			{
				if (this.readyState == 4) 
				{
					if (this.status == 200) {elmnt.innerHTML = this.responseText;}
					if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
					/* Remove the attribute, and call this function once more: */
					elmnt.removeAttribute("include-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			return;
		}
	}
}