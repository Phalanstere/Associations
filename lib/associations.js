
console.log("Hier kommt die Assoziation");


Association = {};


Association.Game = function(str, div) {
	
	var self = this;
	
	this.synsets = [];
	
	this.check_synset = function(synset) {
		
		var found = false;
		
		for (var j = 0; j < self.synsets.length; j++) {
			if (self.synsets[j].id === synset.id)  alert("gefunden ");
			}
		
		if (found === false) {
		self.synsets.push(synset);
		}
		else alert("ist schon da");	
	};
	
	
	this.find_synset = function(id) {
		
		for (var j = 0; j < self.synsets.length; j++) {
			if (self.synsets[j].id === id) return self.synsets[j];
			}		
		
		};
	
	
	this.show_synset = function(id) {
		var synset = self.find_synset(id), s ="";

		MEIN = synset;
		s = '<div class = "field">';

		for (i = 0; i < synset.terms.length; i++) {
			s += ' <div class = "terms">' + synset.terms[i].term + '</div>';
			};
		
		s += '</div">';
		
		$("#panel").append(s);
		};
	
	
	this.paint_synset = function(synset) {
		var s = "";
		};

	this.paint_synsets = function() {
		var s = "";
		
		for (i = 0; i < self.synsets.length; i++) {
			s += ' <div id = ' + self.synsets[i].id + ' class = "synset">' + self.synsets[i].id + '</div>';
			};
		
		// alert(s);
		
		$("#synsets").html(s);
		
		$(".synset").click(function(){
			var id = parseInt( $(this).attr("id"), 10);
			self.show_synset(id);
			
			});
		
		};
	

	this.special_query = function(url) {
		$.ajax({
		  url: url,
		  dataType: "jsonp",
		  success: function (data) {
		    console.log(data.synsets.length)
			NOVA = data;
	
			var i, synset;
	
			for (i = 0; i < data.synsets.length; i++) {
				synset = data.synsets[i];
				self.check_synset(synset);	
				}
	
		    //alert("Länge des Arrays " + self.synsets.length);
		    self.paint_synsets();
		  }
		});
	
	}
	
	
	this.query = function(str)	{
		var s = "https://www.openthesaurus.de/synonyme/search?q=" + str + "&format=application/json";
		self.special_query(s);
	}
	
	
	
	this.init = function init() {
		
		

		};
	
	self.init();	
};




var a = new Association.Game();