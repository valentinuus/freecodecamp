let myObj = [
	{
		gift: "pony",
		pet: "kitten",
		bed: "sleigh",
	},
	{
		city: "Seattle",
	},
	{
		pet: "kitten",
		bed: "sleigh"
	}
]

function checkObj(myObj, checkProp) {
	// Only change code below this line

	let answer = "blank ansver";

	if (myObj.hasOwnProperty(checkProp)) {
		answer = myObj[checkProp];
	} else {
		answer = "Not Found";
	}

	return answer;
	// Only change code above this line
}


/*
Иногда полезно проверить, существует ли свойство данного объекта или нет. Мы можем использовать .hasOwnProperty(propname)метод объектов, чтобы определить, имеет ли этот объект заданное имя свойства. .hasOwnProperty()возвращает trueили falseесли свойство найдено или нет.

const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");

Первый hasOwnProperty возвращается true, а второй возвращается false.
*/