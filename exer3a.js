function shiftCiclically (str) {
    try {
        if (typeof str != "string") throw "Invalid iput. String required"
    }
    catch (err) {
        return
    }

    let options = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA01234567890";

    for (let i=0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char.match(/[a-zA-Z0-9]/)){
            let index = options.indexOf(char);
            let newChar = options[index + 1];
            str = str.slice(0,i) + newChar + str.slice(i+1);
        }
    }
    console.log(str);
}

shiftCiclically("Birthday: 08/06/1988");
