function shiftCiclically (str) {
    if (typeof str != "string") {
        console.log("Invalid iput. String required");
        return
    };

    let lower = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA01234567890";

    for (let i=0; i<str.length; i++) {
        let char = str.slice(i,i+1);
        let index = lower.indexOf(char) + 1;
        let toChar = (index > 0)?lower.slice(index,index+1):char; // To ensure it will only change numbers and digits
        str = str.slice(0,i) + toChar + str.slice(i+1);
    }

    console.log(str);
};

shiftCiclically("Birthday: 08/06/1988");