( function (){

	var name=["mahesh", "john", "karan", "jim", "jack","juli", "ravi", "rajesh","jayesh"];
for(var i=0;i<name.length;i++)
{
	var firstLetter=name[i].charAt(0).toLowerCase();
	if(firstLetter === 'j')
	{
		goodbyspeak.speak(name[i]);
	}
	else
	{
		hellospeak.speak(name[i]);
	}
}
})();