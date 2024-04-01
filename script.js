function convertToRoman(num) {
            const romanSymbols = [
                ['M', 1000],
                ['CM', 900],
                ['D', 500],
                ['CD', 400],
                ['C', 100],
                ['XC', 90],
                ['L', 50],
                ['XL', 40],
                ['X', 10],
                ['IX', 9],
                ['V', 5],
                ['IV', 4],
                ['I', 1]
            ];

  //your code here
	let result = '';

            for (let i = 0; i < romanSymbols.length; i++) {
                while (num >= romanSymbols[i][1]) {
                    result += romanSymbols[i][0];
                    num -= romanSymbols[i][1];
                }
            }

            return result;
        }

        function displayRomanNumeral() {
            const inputNum = document.getElementById("inputNum").value;
            const result = convertToRoman(inputNum);
            document.getElementById("result").innerHTML = "Roman Numeral: " + result;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
