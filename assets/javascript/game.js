$( document ).ready(function() {

	var crystalArray = ["crystal1", "crystal2", "crystal3", "crystal4"];
	var crystArrNum = [];
	var gamestart = false;
	var crystGuess = 0;
	var crystSum = "Press Start";
	var wins = 0;
	var losses = 0;

	function getRand(){
		crystArrNum = [];
		crystGuess = 0;
		for (i = 0; i < crystalArray.length; i++) {
		var rand = Math.floor(Math.random() * 12) + 1;
		crystArrNum.push(rand);
		crystSum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		}
		$("#total").css("display", "inline");
		pushTot();
	}

	function addCryst(val) {
		if (crystSum > 0) {
			crystGuess = crystGuess + val;
			pushGuess();
			$("#total").css("display", "none");
			if (crystSum === crystGuess) {
				wins = wins + 1;
				alert("You are the crystal master!");
				pushTot();
				getRand();
			}

			else if (crystSum < crystGuess) {
				losses = losses + 1;
				alert("Sorry, stick to youyr dayjob!");
				pushTot()
				getRand();
			}
		}
	}

	function pushTot() {
		$("#total").html(crystSum);
		$("#guess").html("Your total: " + crystGuess);
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);
	}

	function pushGuess() {
		$("#guess").html("Your total: " + crystGuess);
	}

	pushTot();

	$("#reset").click(function(){
  	getRand();
  	gamestart = true;
  	pushTot();
	});

	$("#start").click(function(){
		if(!gamestart) {
			getRand();
		}
		gamestart = true;
	});

	$("#crystal1").click(function(){
		addCryst(crystArrNum[0]);
	});

	$("#crystal2").click(function(){
		addCryst(crystArrNum[1]);
	});

	$("#crystal3").click(function(){
		addCryst(crystArrNum[2]);
	});

	$("#crystal4").click(function(){
		addCryst(crystArrNum[3]);
	});

});