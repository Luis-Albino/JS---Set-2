var regex;

///// case a) /////
regex = /.abc/;
str = "aabc";
if (!!str.match(regex)) {
    console.log("a) The string \"" + str + "\" matches the regular expression " + String(regex));
};

///// case b) /////
regex = /a+b?!!1{4}/;
str = "ab!!1111";
if (!!str.match(regex)) {
    console.log("b) The string \"" + str + "\" matches the regular expression " + String(regex));
};

///// case c) /////
regex = /.{3}a\.b/;
str = "xyza.b";
if (!!str.match(regex)) {
    console.log("c) The string \"" + str + "\" matches the regular expression " + String(regex));
};

///// case d) /////
regex = /\w/;
str = "hello";
if (!!str.match(regex)) {
    console.log("d) The string \"" + str + "\" matches the regular expression " + String(regex));
};

///// case e) /////
regex = /\s/;
str = "hellow world";
if (!!str.match(regex)) {
    console.log("e) The string \"" + str + "\" matches the regular expression " + String(regex));
};

///// case f) /////
regex = /\d/;
str = "I am 34 years old";
if (!!str.match(regex)) {
    console.log("f) The string \"" + str + "\" matches the regular expression " + String(regex));
};

///// case g) /////
regex = /./;
str = "random string";
if (!!str.match(regex)) {
    console.log("g) The string \"" + str + "\" matches the regular expression " + String(regex));
};

///// case h) /////
regex = /[abc]/;
str = "a or b or c alone";
if (!!str.match(regex)) {
    console.log("h) The string \"" + str + "\" matches the regular expression " + String(regex));
};

///// case i) /////
regex = /(abc)/;
str = "abc";
if (!!str.match(regex)) {
    console.log("i) The string \"" + str + "\" matches the regular expression " + String(regex));
};

///// case j) /////
regex = /[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/;
str = "lfernandez@intekglobal.com";
if (!!str.match(regex)) {
    console.log("j) The string \"" + str + "\" matches the regular expression " + String(regex));
};

///// case k) /////
regex = /\([0oOn]{1}(_|\s)[0oOn]{1}\)/;
str = "(n o)";
if (!!str.match(regex)) {
    console.log("k) The string \"" + str + "\" matches the regular expression " + String(regex));
};