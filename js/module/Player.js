var Player = function(){
	this.el = {};
};

Player.prototype = {
	cssSelectors: {
		player: '#player',
		play: '.play',
		pause: '.pause',
		timeBar: '.time-bar',
		timeBarValue: '.time-bar-value',
		timeBarButton: '.time-bar-button',
		fullScreen: '.full-screen'
	},
	loadMedia: function(media){
		this.el.player.append('<video width="400" height="280"><source src="'+media+'"></video>');	
	},
	play: function(){
		this.el.player.find('video').get(0).play();	
	},
	pause: function(){
		this.el.player.find('video').get(0).pause();	
	},
	fullScreen: function(){
		if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
			if (this.el.player.get(0).requestFullscreen) {
				this.el.player.get(0).requestFullscreen();
				} else if (this.el.player.get(0).msRequestFullscreen) {
					this.el.player.get(0).msRequestFullscreen();
				} else if (this.el.player.get(0).mozRequestFullScreen) {
					this.el.player.get(0).mozRequestFullScreen();
				} else if (this.el.player.get(0).webkitRequestFullscreen) {
					this.el.player.get(0).webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				}
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
			}
		}
	},
	init: function(media){
		for(key in this.cssSelectors){
			this.el[key] = $(this.cssSelectors[key]);
		}
		this.loadMedia(media);
		this.addEvents();
	},
	addEvents: function(){
		var self = this;
		this.el.play.on('click',function(){
			self.play();
		});
		this.el.pause.on('click',function(){
			self.pause();
		});
		this.el.fullScreen.on('click',function(){
			self.fullScreen();
		});
	}
}