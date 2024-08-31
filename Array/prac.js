function sumVowelCount(str) {
    let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
    console.log(str); // Yeh line function ke andar hi hona chahiye, function ke bahar nahi
}

// Ab hum function ko call karenge aur string pass karenge jisme vowels count karne hain
   sumVowelCount("chuioes"); // Output: 2
   
   