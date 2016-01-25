// 1. getName

console.log("// 1. getName")

var getName = function(object) {
	return object.name
}

console.log(getName({ name: 'Luisa', age: 25 }))

// 2. totalLetters

console.log("// 2. totalLetters")

var totalLetters = function(arrayOfStrings) {

	result = 0

	for (var i = 0; i < arrayOfStrings.length; i++){
		result += arrayOfStrings[i].length
	}

	return result
}

console.log(totalLetters(['javascript', 'is', 'awesome']))
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']))

// 3. keyValue

console.log("// 3. keyValue")

var keyValue = function(key, value) {
	var result = {}
	result[key] = value
	return result

}

console.log(keyValue('city', 'Denver'))

// 4. negativeIndex

console.log("// 4. negativeIndex")

var negativeIndex = function(myArray, negativeValue) {

	return myArray[myArray.length + negativeValue]

}

console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1))

// 5. removeM

console.log("// 5. removeM")

var removeM = function(string) {

	return string.split("").filter(function (l) { return l != "m"}).join("")

}

console.log(removeM("family"))
console.log(removeM("memory"))


// 6. printObject

console.log("// 6. printObject")

var printObject = function(object) {

	for (i in object) {
		console.log( i + " is " + object[i] )
	}

}

printObject({ a: 10, b: 20, c: 30 })
printObject({ firstName: 'pork', lastName: 'chops' })

// 7. vowels

console.log("// 7. vowels")

var vowels = function(string) {
	var result = []
	var letters = string.split("")

	for (var i = 0; i < string.length; i++) {

		if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {

			result.push(string[i])
		}
	}
	return result
}

console.log(vowels('alabama'))
console.log(vowels('What evil odd ducks!'))

// 8. twins

console.log("// 8. twins")

var twins = function(myArray) {

	for (var i = 0; i < myArray.length; i += 2) {

		var currentSlice = myArray.slice(i, i+2) 

		if (currentSlice[0] != currentSlice[1] || currentSlice[0] === undefined) {
			return false
		}
	}
	return true
}

console.log(twins(['a', 'a', 'b', 'b', 'c', 'c']))
console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']))
console.log(twins(['a', 'a', 'b', 'z']))
console.log(twins(['a', 'a', undefined]))

// 9. or

console.log("// 9. or")

var or = function(myArray) {

	for (var i = 0; i < myArray.length; i++) {

		if (myArray[i] === true) {
			return true
		}
	}
	return false
}

console.log(or([false, false, true, false]))
console.log(or([false, false, false]))
console.log(or([]))


// 10. unique

console.log("// 10. unique")

var unique = function(myStringArray) {

	var result = []

	for (var i = 0; i < myStringArray.length; i++)

	if (result.includes(myStringArray[i])) {
		continue
	} else {
		result.push(myStringArray[i])
	}

	return result
}

console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))
console.log(unique(['todd', 'avery', 'maria', 'avery']))


