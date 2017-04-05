//alert ('Hello')

var tweetList=[
	"@CNN just doesn't get it, and that's why their ratings are so low- and getting worse. Boring anit-Trump panelists, mostly losers in life!",
	"Will be joining @jimmyfallon on @FallonTonight at 11:35pmE tonight. Enjoy!",
	"hello",
	"I am Trump",
]

var tweet= 0;


function pickTweet(myArray) {
	var myTweet = myArray [Math.floor(Math.random()*myArray.length)];
	return myTweet
};


function Tweet() {

	//var theTweet= document.getElementsByTagName('tweet')[tweet];

	words = pickTweet(tweetList);

	$('div#content').html(words);

	$('.tweet').hide();
	$('.tweet').show (300);
};

$('.button1').click(Tweet);

$('.tweet').hide();



	$(document).ready(function CNNclick(){
		$(".companies").on({
			click:function(){
				$("#p1").hide(200);
				$('.emotions').hide();
				$(".emotions").fadeIn(300);
				$(".tweet").hide();
				$('.neutral').click(neuCNN);
				
				
			},
		});
	});

$(document).ready(function(){
	$(".emotions").on({
		click: function(){
			$("#pe").hide(200);

		},
	});
});



	//$(".button2").on({
	//	mouseenter: function(){
	//		$(this).css("background-color" , "e60000")
	//	},
	//	click: function(){
	//		$(this).css("background-color" , "e60000");
	//	},
	//	blur: function(){
	//		$(this).css("background-color", "#b62f2f");
	//	},
	//	mouseleave: function(){
	//		$(this).css("background-color" , "b62f2f");
	//	},
	//});

	
	



var happyCNN =[
	"I hate CNN",
	"I despise CNN",
	"CNN is the worst",
	"I'm so much better than CNN",
]

function happyCN (){

	newTweet= pickTweet(happyCNN);

	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};

$('.happy').click(happyCN);

//$('.tweet').hide();

//function tweetValue(string, number){
//	this.string= string; 
//	this.number= number;
//}

//tweetValue.prototype.amount = 0.05;

//var fred= new tweetValue("Fred", 1970);
//document.getElementById("demo")= fred.salary;



//	document.getElementById("demo").innerHTML= neutralCNN.ar;

//document.getElementById("#meter").innerHTML= neutralCNN.ar;

function neuCNN () {
	newTweet= document.write(cnnData[0].NEUTRAL);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
	//meter = setInputValue("#meter", 0.05);
	//$('#meter').appendTo($("0.05").parent());
	//$('#meter').val($('#test').val());
};

//$('.neutral').click(neuCNN);



function madCNN () {	
	var newTweet= document.write(nytData[0].MAD);
	$('div#content').html(newTweet);
	$('.tweet').hide();
	$('.tweet').show (300);
};





//$('.mad').click(madCNN);

//function madCNNbutton () {
//	if ($('.button2').click ()) {
//		$('.mad').click(madCNN);

//	},
//};

//function meter{

//	var input= document.getElementById("#meter");

//}
//function setInputValue(input_id, val) {
//    document.getElementById(input_id).setAttribute('value', val);
//}

//var numbers = [
//	"0.05",
//	]
