var Player = function(){
	this.el;
	this.source;
};


Player.prototype.ui = function(el,source){
	this.el.append('<video id="v_'+this.el.attr('id')+'" width="400" height="280"><source src="'+option.source+'"></video>');
}

Player.prototype.play = function() {
	$('#v_'+this.el.attr('id')).get(0).play();
};

Player.prototype.pause = function() {
	$('#v_'+this.el.attr('id')).get(0).pause();
};

Player.prototype.init = function(option){
	this.el = $('#'+option.el);
	this.source = option.source;
	this.ui(this.el, this.source);
}