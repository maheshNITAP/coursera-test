( function (){
	var goodbyspeak={};
	var name="goodbye";
	goodbyspeak.speak=function(x){
		console.log(name + ":" +x);
	}
	window.goodbyspeak=goodbyspeak;
})();