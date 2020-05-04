let btn=document.getElementById('btn');
let output=document.getElementById('output');
let quote=
[
	'"Engineering is the closest thing to magic that exists in the world." - Elon Musk',
	'"Our industry does not respect tradition - it only respects innovation." - Satya Nadella',
	'"For me, it matters that we drive technology as an equalizing force, as an enabler for everyone around the world." - Sundar Pichai',
	'"Stone Age. Bronze Age. Iron Age. We define entire epics of humanity by the technology they use." - Reed Hastings',
	 '"Desperation sometimes drives innovation." - Dara Khosrowshahi',
	 '"Make every detail perfect and limit the number of details to perfect." - Jack Dorsey',
	'"Growth and comfort do not coexist." - Ginni Rometty',
	'“Don’t compare yourself with anyone in this world… if you do so, you are insulting yourself.”-Bill Gates',
];
btn.addEventListener('click',function()
{
    var randomQuote=quote[Math.floor(Math.random()*quote.length)]
    output.innerHTML=randomQuote;
})