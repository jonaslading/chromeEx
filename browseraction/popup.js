$(function(){

	var windowDataLoaded = false;
	var postUrl = "http://localhost:3000/magic";
	var postData = 
	    	{
				token: "test", //string
				user_id: 1,
				/*
				domain_id(optional)
				team_id(optional)
				*/
				url : "test", //string
				title : "test", //string
				description: "test" //string
				
				/* thumbnail(URL encoded) (optional) //string */

			};
			
	// gets url and title from current browser tab
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
			postData.url = tabs[0].url;
			postData.title = tabs[0].title;
			console.log("DATA0: "+JSON.stringify(postData));
			$.post( postUrl, postData, function(data) {
				console.log("post success: "+JSON.stringify(data));
				linkData = data;
				$( "#return-URL" ).html(data);
				document.getElementById("copy").onclick = copyToClipboard(data);

				}).fail( function(err){
					alert("couldn't connect to link API");
					console.log("couldn't connect to link API");
	
				});
		});
		
 
	function copyToClipboard(text){
	    var copyDiv = document.createElement('div');
	    copyDiv.contentEditable = true;
	    document.body.appendChild(copyDiv);
	    copyDiv.innerHTML = text;
	    copyDiv.unselectable = "off";
	    copyDiv.focus();
	    document.execCommand('SelectAll');
	    document.execCommand("Copy", false, null);
	    document.body.removeChild(copyDiv);
	}

	//document.getElementById("copy").onclick = copyToClipboard(JSON.stringify(linkData));
/*
	if(windowDataLoaded){
			$.post( postUrl, postData, function(data) {
				console.log("post success: "+JSON.stringify(data));
				linkData = data;
				$( "#return-URL" ).html(data);
				document.getElementById("copy").onclick = copyToClipboard(data);

				}).fail( function(err){
					alert("couldn't connect to link API");
					console.log("couldn't connect to link API");
	
				});
	}

	 	
$("#url-form").submit(function(){
		
		event.preventDefault();
		
		
	    var old_url = $("#form-URL").val();
	    
	    
	    //local server set up to return a new link from the old. returns url as string
	    

			
	    console.log("DATA: "+JSON.stringify(postData));
			
	    console.log("contacting: "+postUrl);
	
	    // send old_url to api as JSON {url: "user-input"} and display new in #return-URL.
	    	
	});
*/
});

