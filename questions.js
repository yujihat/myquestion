const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

//正しい答え
const correctAnswers = {
	question1:'D',
	question2:'A',
	question3:'D',
	question4:'C',
};

function checkClickedAnswer(event){
	//クリックされた答えの要素(liタグ)
	const clickedAnswerElement = event.currentTarget;
	//console.log(clickedAnswerElement.closest('ol.answers').dataset.id);
//選択した答え(A,B,C,D)
const selectedAnswer = clickedAnswerElement.dataset.answer;

const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;

//正しい答え(A,B,C,D)
const correctAnswer = correctAnswers[questionId];
//メッセージをれる変数を用意
let message;
//カラーコードを入れる変数を用意
let answerColorCode;

if(selectedAnswer == correctAnswer){
//正しい答えだったとき
message = '正解です！おめでとう';
answerColorCode = '';
}else{
//間違いだったとき
message = '残念、不正解^^;';
answerColorCode = '#f05959';
}


	alert(message);
	//色を変更(間違っていた時だけ色が変わる)
	document.querySelector('span#correct-answer').style.color = answerColorCode;
	//答え全体を表示
	document.querySelector('div#section-correct-answer').style.display ='block';
}

