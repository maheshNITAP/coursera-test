( function (){
	var hellospeak={};
	var name="Hello";
	hellospeak.speak=function(x){
		console.log(name + ":" +x);
	}
	window.hellospeak=hellospeak;
})();