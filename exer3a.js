function shiftCiclically (str) {
    if (typeof str != "string") return undefined;

    let options = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA01234567890";

    str = str.replace(/[a-zA-Z0-9]/g,function (char){
        let index = options.indexOf(char);
        return options[index + 1];
    });

    return str;
}

shiftCiclically("Birthday: 08/06/1988");
