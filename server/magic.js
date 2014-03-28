exports.changeUrl = function(req, res) {

	var params = req.body;
	console.log('received: ' + JSON.stringify(params));


/*
//---- will return 
{
"status": 201,
"user": { "id": 3,
"first_name": "Morten",
"last_name": "Rugaard",
"email": "mr@linkfire.com",
"image": "/uploads/users/Avatar_527ce2a4d2e9d.jpeg"
}, "link": {
"id": 85,
"user_id": 3,
"code": "QnCyZ",
"url": "http://lnk.to/QnCyZ",
"original_url": "http://linkfire.com",
"title": "Linkfire API 1.0",
"description": "This link was created from the Linkfire API 1.0.", "image": {
3
"default": "/uploads/links/default_5295cc39b2266_logo_big.png", "facebook": "/uploads/links/facebook_5295cc39b2266_logo_big.png", "twitter": "/uploads/links/twitter_5295cc39b2266_logo_big.png", "google": "/uploads/links/google_5295cc39b2266_logo_big.png", "linkedin": "/uploads/links/linkedin_5295cc39b2266_logo_big.png"
},
"created": "2013­11­27 11:40:57" }
}
*/
    var old_url = req.body.url;
    console.log('Changing url: ' + old_url);
    res.send(old_url+'/is-now-linkfired');
                 
}