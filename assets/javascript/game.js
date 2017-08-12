$( document ).ready(function() {
	// declares variables, sets gamestart to initial false, guess to 0, wins & losses to 0, displays instruction string.
	var crystalArray = ["crystal1", "crystal2", "crystal3", "crystal4"];
	var crystArrNum = [];
	var gamestart = false;
	var crystGuess = 0;
	var crystSum = "Press Start";
	var wins = 0;
	var losses = 0;

	// reset crystal values, reset to be guessed value. Push random num 1-12 to array (new crystal values).
	//Create new to be guess sum 19-120. push to html (pushTot: 49).
	// displays total value
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

	// adds crystal value to current total. Only if a value has been determined. if total matches, run reset add to win var.
	// if loss, add to loss value. run reset and initial function (getRand: 14).
	// hides total value on 33 after adding starts.
	function addCryst(val) {
		if (crystSum > 0) {
			crystGuess = crystGuess + val;
			pushTot();
			$("#total").css("display", "none");
			if (crystSum === crystGuess) {
				wins++;
				alert("You are the crystal master!");
				getRand();
			}

			else if (crystSum < crystGuess) {
				losses++;
				alert("Sorry, stick to youyr dayjob!");
				getRand();
			}
		}
	}

	// push to html function (guess, total, wins and losses)
	function pushTot() {
		$("#total").html(crystSum);
		$("#guess").html("Your total: " + crystGuess);
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);
	}

	// pushes initial values to html (pushTot: 49)
	pushTot();

	// reset button, run reset and initial fucnction (getRand: 14). (just like start button but ignores gamestart conditional)
	$("#reset").click(function(){
  	getRand();
  	gamestart = true;
	});

	// start button, run reset and initial fucnction (getRand: 14). Will not run if gamestart is true, will set gamestart to true.
	$("#start").click(function(){
		if(!gamestart) {
			getRand();
		}
		gamestart = true;
	});

	// on click 1st crystal, pulls from rand value of crystal array relevant to clicked crystal and runs add fucnction (addCryst: 29).
	$("#crystal1").click(function(){
		addCryst(crystArrNum[0]);
	});

	// on click 2nd crystal, pulls from rand value of crystal array relevant to clicked crystal and runs add fucnction (addCryst: 29).
	$("#crystal2").click(function(){
		addCryst(crystArrNum[1]);
	});

	// on click 3rd crystal, pulls from rand value of crystal array relevant to clicked crystal and runs add fucnction (addCryst: 29).
	$("#crystal3").click(function(){
		addCryst(crystArrNum[2]);
	});

	// on click 4th crystal, pulls from rand value of crystal array relevant to clicked crystal and runs add fucnction (addCryst: 29).
	$("#crystal4").click(function(){
		addCryst(crystArrNum[3]);
	});

});