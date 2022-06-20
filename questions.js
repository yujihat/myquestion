const bmi = calculateBmi(1.75, 69);

let message = 'わかりません';

if (bmi < 18.5){
	//痩せ
	message = '低体重です';
}else if (bmi >= 25.0){
	//肥満
	message = '太っています';
}else {
	message = '普通です';
}

console.log(message);

function calculateBmi(height,weight){

	//BMI = 体重[kg] / (身長[m] ** 2)
	return weight /(height ** 2);

}

//BMI値が18.5未満か判定する
//25以上奈良肥満
