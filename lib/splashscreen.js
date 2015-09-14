'use strict';

var events = [
	{
		type: 'greensock',
		div: 'titling',
		time: 800,
		duration: 0,
		scale: 10,
		rotation: 270,
		opacity: 0,

	},
	
	{
		type: 'greensock',
		div: 'titling',
		time: 800,
		duration: 1000,
		left: 50,
		scale: 1,
		rotation: 720,
		skewX: 30,
		opacity: 1
	},	
	
	
];

var config = {
	div: 'splashScreen',
	loop: true,
	events: events,
	interval: 1000,
};

module.exports = new window.Liquid.Events.Animator( config );



