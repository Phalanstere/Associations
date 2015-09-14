	var menu = require("./lib/menu.js");
	var util = require("util");	

	var gui = global.window.nwDispatcher.requireNwGui();
    var win = gui.Window.get();
    
    var menubar = new gui.Menu({ type: 'menubar' });

    var fileMenu = new gui.Menu();
    
    fileMenu.append(new gui.MenuItem({
        label: 'New',
        click: function() {

        }
    }));
    
    
    fileMenu.append(new gui.MenuItem({
        label: 'Open',
        click: function() {

        }
    }));
    fileMenu.append(new gui.MenuItem({
        label: 'Save',
        click: function() {

        }
    }));
    fileMenu.append(new gui.MenuItem({
        label: 'Exit',
        click: function() {
            gui.App.quit();
        }
    }));

    menubar.append(new gui.MenuItem({ label: 'File', submenu: fileMenu}));
    
    // command Menu 
    
    var commandMenu = new gui.Menu();
    
    commandMenu.append(new gui.MenuItem({
        label: 'Animation',
        click: function() {
			GlobalAnimation.start_animation();
        }
    }));


    commandMenu.append(new gui.MenuItem({
        label: 'DatabaseView',
        click: function() {
        	GlobalAnimation.databaseView();
        }
    }));
    

    menubar.append(new gui.MenuItem({ label: 'Command', submenu: commandMenu}));    
    
    win.menu = menubar;
    
    $(document).ready(function() {
		var animator = new require( './lib/splashscreen.js' );    
		
		$("#splashScreen").click(function(){
			$(this).hide();
		});
			
    });


