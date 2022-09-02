player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

	/*

    charAt1 = word.charAt(1);
	console.log(charAt1);

	
	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);
	

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3); 

    remove_charAt1 = word.replace(charAt1, "_");
	console.log(remove_charAt1);
    
	remove_charAt2 = remove_charAt1.replace(word, "_");
	console.log("new:"+remove_charAt2);
	
    remove_charAt3 = remove_charAt1.replace(charAt3, "_");
	console.log(remove_charAt3); 

    random = word.length - 3;
	charAt4 = word.charAt(random);
	console.log(charAt4);

	remove_charAt4 = word.replace(charAt4,"_");
	console.log(remove_charAt4);

*/

char1 = word.charAt(1);
console.log("character1 : " + char1);
word1 = word.replace(char1,"_");
console.log("word1 : " + word1);


char4 = word1.charAt(4);
console.log("character4 : " + char4);
word2 = word1.replace(char4,"_");
console.log("word2 : " + word2);


char6 = word1.charAt(6);
console.log("character6 : " + char6);
word3 = word2.replace(char6,"_");
console.log("word3 : " + word3);




    
	question_word = "<h4 id='word_display'> Q. "+word3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";

}


question_turn = "player1";
answer_turn = "player2";


function check()
{
	get_answer = document.getElementById("input_check_box").value;
	answer = get_answer.toLowerCase();
	console.log("answer in lower case - " + answer);
	if(answer == word)	
	{
		document.getElementById("status").innerHTML = "Correct..!"
		
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	else
	{
		document.getElementById("status").innerHTML = "Please try again..";
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}
