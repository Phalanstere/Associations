String.prototype.percent_to_float = function () {
   
   var x = this.length;
   var a = this.slice(0, x-1);   
   return parseFloat(a);
};


String.prototype.px_to_number = function () {
   
   var x = this.length;
   var a = this.slice(0, x-2);   
   return parseInt(a);
};



String.prototype.width = function(font) {
  var f = font || '12px arial',
      o = $('<div>' + this + '</div>')
            .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
            .appendTo($('body')),
      w = o.width();

  o.remove();

  return w;
};



String.prototype.insertAt=function(index, string) { 
  return this.substr(0, index) + string + this.substr(index);
}




// Das funktion nicht mit regular expressions
String.prototype.match_all =function(str) { 

var occurence = []; 
  
var search 		= true;
var ergebnis    = 0;

while(search)
	{
	var x = this.indexOf(str, ergebnis);
	
	if (x != -1)
		{
		console.log(x);
		occurence.push(x);
		}
	else search = false;
	
	ergebnis = x+1;		
	}  


return occurence;  
}





function globalsearch()
{
var a = "und das ist ein Hund, der fast vom Ast gefallen wäre";

var b = a.match_all("Hund");

console.log(b);



var c = a.substr(7).match(/und/);
console.log(c);
	
}




/******************* String prepend ***********/

String.prototype.prepend = function (text) {
   
   text += this;
   return text;
};


Array.prototype.isArray = true;


/*****************  Hier wird festgehalten, ob ein Array ein Elemennt enthält */ 
Array.prototype.contains = function (elem) {

for (var q = 0; q < this.length; q++)
    {
    if (elem == this[q]) 
        {
        return true;
        }
    }

return false;
};



/*********************************** funktioniert nur bei Objekten *************************************************/

function isNumeric(input)
{
    return (input - 0) == input && (''+input).replace(/^\s+|\s+$/g, "").length > 0;
}


Array.prototype.scan_object = function(str)
{
var field = [];	

if (this.length > 0)
	{
	obj = this[this.length -1];
	for (var name in obj)
		{
		console.log(name + " TYP" +   typeof(obj[name]) );	
		
		if (! obj[name].isArray)
			{
		
			if (typeof(obj[name]) == "string")
				{
				field.push(name);	
				}	
			}
		}	
	}
	

var resultat = this.scan_object_fields(field, str);
return resultat;
}


Array.prototype.scan_object_field = function(field, str)
{
var res = [];	

if (this.length > 0 && this[0][field])	
	{
	var k = this.length;
	while (k--)
		{
		if (  isNumeric(this[k][field]) ==  false )   // keine HZahl 	
			{
			if (this[k][field].search(str) != -1) res.push( this[k]  );
			}
		else
			{
			if (this[k][field] == str) res.push( this[k]  );
			}	 	
		}
		
	return res;	
	}
else return res;
}






Array.prototype.scan_object_fields = function(fields, str)
{
var res = [];	


if (this.length > 0)	
	{
	var k = this.length;
	while (k--)
		{
			
		for (var n = 0; n < fields.length; n++ )
			{	
			var f = fields[n];	
						
			if (this[k][f] )
				{
				
				
				if (isNumeric(this[k][f]) ==  false )   // keine HZahl 	
						{
						if (this[k][f].isArray) 
						{
						console.log("array");	
						}
						else
							{
													
							if (this[k][f].search(str) != -1) 
								{
								if (res.contains( this[k]) == false) res.push( this[k]  );
								}
							}
						}
					else
						{
						if (this[k][f] == str) 
							{
							if (res.contains( this[k]) == false) res.push( this[k]  );	
							}
						}					
					
				// 	
				}	
				
				
			}
				
		}
	
	// alert("Länge des Artrays " + res.length)
		
	return res;	
	}
else return res;
}



// Testfunktion für den Scan
function scanme()
{
var list = [];

var o = {};
o.name = "Hans";
o.profession = "Lehrer";

list.push(o);


var p = {};
p.name = "Ole";
p.profession = "Hanswurst";

list.push(p);


var q = {};
q.name = "Hanspeter";
q.profession = "Hansdiener";

list.push(q);



var array = ["name", "profession"];

antwort = list.scan_object_fields(array, "Hans");	
}






/******************* Hier wird ermittelt, ob ein Array multiple Elemente enthält. Wenn ja, wird TRUE returniert ***********/

Array.prototype.contains_multiple = function(list)
{
for (var i = 0; i < list.length; i++)
  {   
  if (this.contains(list[i]) == false) return  false;
  }
   
return true;  
}



/******************* Check, ob ein Objekt mit allen Werten identisch ist ***********/

Array.prototype.find_identical_object = function (obj) {

for (var q = 0; q < this.length; q++)
	{
	var item = this[q];
	
	var ret = true; // wird auf false gesetzt, wenn ein Attribut nicht übereinstimmt
	
	  for(var name in obj) 
	  {  
	  if (! item[name] ) ret = false;
	  else
	  	{ 	
	  	if (obj[name] != item[name]) ret = false;
	  	}	      
	  }	
	
	if (ret == true) return q;
	
		
	}
	
	
};





/*****************  Zufallselement */ 
Array.prototype.random = function () {

var a = parseInt( Math.random() * this.length );
return this[a];
};


/*******************Entfernen eines Elements aus einem Array ***************/
Array.prototype.remove_item = function(index)
	{		
	var list = [];	
	for (var q = 0; q < this.length; q++)
	  {   
	  if (q != index) 
	  list.push(this[q]);
	  }
	  
	 this.length = 0; 
 	 for (var q = 0; q < list.length; q++)
  		{   
  		this.push(list[q]);
 		}
	}



Array.prototype.remove_via_timestamp = function(timestamp)
	{		
	var list = [];	
	for (var q = 0; q < this.length; q++)
	  {   
	  if (! this[q].timestamp)  list.push(this[q]);
	  else
	  	{
	  	if ( this[q].timestamp != timestamp)  list.push(this[q]);	
	  	}
	  }
	  
	 this.length = 0; 
 	 for (var q = 0; q < list.length; q++)
  		{   
  		this.push(list[q]);
 		}
	}



/******************************Entfernt ein Element über die ID******************************/
Array.prototype.kill = function(id)
	{
	var list = [];
	for (var q = 0; q < this.length; q++)
		{
		if(this[q].id != id)
		list.push(this[q]);	
		}
		
		this.length = 0; 
 	 	for (var q = 0; q < list.length; q++)
  		{   
  		this.push(list[q]);
 		}
	}





/******************* Die Funktion gibt für ein Array Random Elemente zurück, Singletons! - das ist wichtig ******************************/ 
Array.prototype.random_elements = function(no)
  {
  if (no > this.length) no = this.length;
  
  var list = [];
  
  while(list.length < no)
    {
    var t = parseInt(Math.random() * this.length);
    if (list.contains(t) == false) list.push(t);
      
    }
    
  var target = [];
  
  for (var i = 0; i < list.length; i++)
    {
    target.push (this[ list[i]] );  
    }
  
  return target;
  }
  
  
/****************************** Die Funktion remixt das Array *************************************************/
Array.prototype.remix = function()
{
var x = this.length;
console.log("Remix-Länge " + x);

var newsort = [];

for (var q = 0; q < x; q++)
	{
	newsort.push(q);	
	}

var res = newsort.random_elements(x);
var target = [];

for (var q = 0; q < res.length; q++)
	{
	var x = res[q];
	target.push( this[x] );  	
	}

return target;	
}  
  
/********************************************* Kopie des Arrays ***************************************************/  
Array.prototype.copy = function()
{
var x = this.length;

var copy = [];

for (var q = 0; q < x; q++)
	{
	copy.push( this[q]);	
	}

return copy;	
}  
    
  
  




function toCoords(center, radius, angle) {
   var radians = (angle/180) * Math.PI;   
   
   var x = parseInt( center[0] + Math.cos(radians) * radius) ;
   var y = parseInt( center[1] + Math.sin(radians) * radius );
   return [x, y];
  }
 




colorString = function(col)
{
var s = "rgba(" + col.r + "," + col.g + "," + col.b + "," + col.a + ")";
return s;	
}



colorRandomOpacity = function(col)
{
var x = Math.random();
col.a = x;
return colorString(col);	
}



randomColor = function(min_lightness, opacity)
{
var range = 255 - min_lightness;
var col = {};
col.r = parseInt(Math.random() * range) + min_lightness;
col.g = parseInt(Math.random() * range)  + min_lightness;
col.b = parseInt(Math.random() * range)  + min_lightness;
col.a = opacity;
return col;
}

color_lightness = function(col, change_percentage)
{
var c = {};

var red = col.r * (1 + change_percentage);
c.r = parseInt ( Math.min(255, red)  );

var green = col.g * (1 + change_percentage);
c.g = parseInt( Math.min(255, green ) );


var blue = col.b * (1 + change_percentage);
c.b = parseInt( Math.min(255, blue )  );

c.a = col.a;
return c;		
}










ColorMix = function(min_lightness, opacity, contrast)
{
var self = this;

this.color1;
this.color2;
this.color3;
this.color4;
	
this.background;	
this.transparent_background;
this.font_background;	
	
	
this.text_gradient;
this.background_gradient;	
	
	
this.complementary = function(col)
	{
	var c = {};
	c.r = 255 - col.r;
	c.g = 255 - col.g;
	c.b = 255 - col.b;	
	c.a  = col.a;
	
	return c;	
	}	


this.info = function()
	{
	var s = "col1 = " + self.color1 + " col2 " + self.color2;
	return s;
	}

	
this.init = function()	
	{
	var o = {};
	
	this.font_foreground = randomColor(min_lightness, opacity);
	var col =  this.font_foreground;
	
	
	var darker = contrast*-1;
	
	var c = {};
	c.r = parseInt ( Math.min(255, col.r * (1+ darker ) ) );
	c.g = parseInt( Math.min(255, col.g * (1+ darker ) ) );
	c.b = parseInt( Math.min(255, col.b * (1+ darker ) ) );
	c.a = col.a;

    this.font_background = c;

	self.color1 = colorString(this.font_foreground);
	self.color2 = colorString(this.font_background);	

	
	
	self.middle_area = self.complementary(this.font_foreground);
	self.middle_area.a = 0.92;
	

	// self.color3 = colorString(this.middle_area);
	// self.color3 = colorString(self.middle_area);

	var ma = color_lightness(self.middle_area, 0.5);
	var max = colorString(ma);
	

	self.color3 = max;
	
	// alert("Col3 " + self.color3);
	// alert("Vordergrund " + self.color1 + " Hintergrund, kompl. " + self.color3);

	



	var color4 = {};
	color4.r  = this.font_foreground.r;
	color4.g = this.font_foreground.g;
	color4.b = this.font_foreground.b;
	color4.a = 0.25;	
	
	
    self.color4 =  colorString(color4);
	
	color4.a = 0.82;
	
	
	self.background = colorString(color4);

	
	color4.a = 0.6;	
	self.transparent_background = colorString(color4); 
	
	
	color4.a = 1;
	var x = color_lightness(color4, -0.75);

	self.font_background = colorString(x);	
	
	
	
	self.backgroundGradient = 'linear-gradient(to bottom, ' + self.transparent_background + ', ' + self.font_background + ')';
	// self.backgroundGradient = 'linear-gradient(to bottom, ' + self.font_background + ', ' + self.transparent_background + ')';
	
	
	/*
	self.background  = color_lightness( self.middle_area, 0.5);
	*/	
	}
	
self.init();	
}





  
  

/************** Hier wird dem Array ein Element hinzugefügt, unter der Bedingung, dass es einzigartig ist ************/

Array.prototype.add_unique_item = function (item) 
{
if (this.contains(item) == false) this.push(item);  
}




/*****************  Hier kann man dem Array ein weiteres Array zuordnen, PROBLEM: Es gibt noch keine Typ-Validierung   */ 

Array.prototype.add_array = function (list) {

for (var i = 0; i < list.length; i++)
    {
    this.push(list[i]);
    }

return false;
};


/*****************  Hier wird ein Array auf mehrere Subarrays verteilt    */ 

Array.prototype.sub_arrays = function (no) {

var list = [];

for (var i = 0; i < no; i++)
	{
	var t = [];
	list.push(t);	
	} 

var ct = 0;

for (var i = 0; i < this.length; i++)
    {
	list[ct].push( this[i]);
	ct ++;
	if (ct == no) ct = 0;
    }

return list;
};

/*****************  Gibt die Elemente zurückm die nicht in der Liste sind, also den Rest    */ 
Array.prototype.excluded_elements = function(list)
{
var excluded = [];	
for ( var i = 0; i < this.length; i++)
    {
	if ( list.contains( this[i]) == false)
		{
		excluded.push( this[i] );
		}
    }

return excluded;
};

Array.prototype.insert_list = function(list, position)
{
var a = [];
var b = [];	
	
if (position <  this.length)
	{
	b = this.splice(position, this.length);
	a = this.splice(0, position);
	}

for ( var i = 0; i < list.length; i++)
	{
	a.push( list[i]);	
	}


a.add_array(b);
	
this.length = 0;

for ( var i = 0; i < a.length; i++)
	{
	this.push( a[i]);	
	}


return a;
}








/****************************************** Positions-Berechnungen ******************************************/
function randomPosition( w, h, factor)
{
if (factor)
	{
	var pos = {};	
	pos.x = (Math.random() * w*factor) - (w*factor/2);
	pos.y = (Math.random() * h*factor) - (h*factor/2);	
	return pos;	
	}	
else
	{	
	var pos = {};	
	pos.x = parseInt(Math.random() * w);
	pos.y = parseInt(Math.random() * h);
	return pos;
	}	
}






Number.prototype.myMet=function()
{
this.myProp=this.valueOf()/2;
}



/*********************************** Hier kann ich Flächenberechnungen machen **************************/
Panel = function(div)
{
var self = this;



this.init = function()
	{
	self.width 	= $(div).width();
	self.height = $(div).height();
	
	self.square = this.width * this.height;		
	}

self.init();
	
}



/************************************* Wo befinde ich mich in einer Sequenz **************************/
/*   
 * Number ist ein Wert zwischen 0 und 1, no_elements steht für die Anzahl der Elemente
 * 
 * 
 * 
 * 
 * 
 */

Number.prototype.sequencePosition = function(no_elements)
{
var shift = 1 / no_elements;

for (var i = 0; i < no_elements; i++)
	{
	var lower = shift*i;
	var upper = shift * (i+1);	
	if (this > lower && this < upper) return i;
		  	
	}

	
}



/************************ nimmt einen Text, gibt eine Anzahl von Zufallssätzen zurück ***********************/
 
function randomSentences(text, no)
{	
var list = text.split(".");
randsend = list;

var begin = list.length - no;
if (begin < 0) begin = 0;

var start = parseInt(Math.random() * begin);
var end   = start + no;
if (end > list.length-1) end = list.length -1;

debug.log("RANDOM_SENTECES Start " + start + " Ende " + end);


var ret = "";

for (var i = start; i < end; i++)
	{
	ret += list[i];	
	ret += ".";
	}


debug.log(ret);

return ret;
	
} 






function ObjectConverter(obj, matrix1, matrix2)
{
var p = {};	
	
for (var i = 0; i < matrix1.length; i++)
	{
	p[matrix2[i]] = obj[matrix1[i]]; 	
	}
	
return p;
}




/********************************** Meine Math - Ergänzungen *******************************************/
 
function MathRandomRange(min, max, type)
{	
var x = Math.random() * (max-min);
x += min;

switch(type)
	{
	case "integer":
	 x = parseInt(x);
	break;	
	}

return x;	
} 
 





function GetMedian(no)
{
var x = Math.floor(no);
return x +1;
}



///////////////////////////////////////////////////////


function fontsizeCalculator(str, width, div)
{
	
}






