function disemvowel(str) {
    let result = "";
    const letters = ['A' , 'a', 'E' , 'e' , 'I' , 'i' , 'O', 'o', 'U', 'u'];
    for ( let i = 0; i < str.length; i++) {
        if (!letters.includes(str.at(i))) {
            result += str.at(i);
        }
    }
    console.log(result);
    return result;
}
disemvowel("blabla");