var request = require('request');
var util 	= require('util');

console.log("Hier kommt die Assoziation");


Association = {};


Association.Game = function() {
	
	var self = this;
	
	
	this.special_query = function(url)
	{
	console.log(url);
		
	request(url, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    var fbResponse = JSON.parse(body);
		    console.log("Got a response. Laenge der Synsets: ", fbResponse.synsets.length);
		    
		    console.log( util.inspect(fbResponse.synsets[0].terms) );
		    
		    
		  } else {
		    console.log("Got an error: ", error, ", status code: ", response.statusCode);
		  }
		});
	
	}
	
	
	
	this.init = function init() {
		
		var s = "https://www.openthesaurus.de/synonyme/search?q=Verlangen&format=application/json";
		
		self.special_query(s);

		};
	
	self.init();	
};




var a = new Association.Game();
