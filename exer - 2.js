let regex;

////////// A) //////////

regex = /[A-Z][a-z]+\s\d{2},\s\d{2}/;

str = "September 29, 1972";
if (!!str.match(regex)) {
    console.log("A-i) The regular expression " + String(regex) + " matches the date format \"" + str + "\"");
};

str = "February 99, 0001";
if (!!str.match(regex)) {
    console.log("A-ii) The regular expression " + String(regex) + " matches the date format \"" + str + "\"");
};

str = "June 04, 3000";
if (!!str.match(regex)) {
    console.log("A-iii) The regular expression " + String(regex) + " matches the date format \"" + str + "\"");
};

////////// B) //////////

regex = /\d*[a-zA-Z]\d*/;

str = "A52";
if (!!str.match(regex)) {
    console.log("B-i) The regular expression " + String(regex) + " matches the string \"" + str + "\"");
};

str = "d747";
if (!!str.match(regex)) {
    console.log("B-ii) The regular expression " + String(regex) + " matches the string \"" + str + "\"");
};

str = "27X";
if (!!str.match(regex)) {
    console.log("B-iii) The regular expression " + String(regex) + " matches the string \"" + str + "\"");
};

str = "v2";
if (!!str.match(regex)) {
    console.log("B-iv) The regular expression " + String(regex) + " matches the string \"" + str + "\"");
};


////////// C) //////////

regex = /[A-Za-z_0-9\.\-]+\.(txt|java|cpp){1}/;

str = "test.java";
if (!!str.match(regex)) {
    console.log("C-i) The regular expression " + String(regex) + " matches the string \"" + str + "\"");
};

str = "program.cpp";
if (!!str.match(regex)) {
    console.log("C-ii) The regular expression " + String(regex) + " matches the string \"" + str + "\"");
};

str = "newReport.txt";
if (!!str.match(regex)) {
    console.log("C-iii) The regular expression " + String(regex) + " matches the string \"" + str + "\"");
};


////////// D) //////////

regex = /(.{1})(.{1})(.{1})\2\1$/;

str = "acdca";
if (!!str.match(regex)) {
    console.log("D-i) The regular expression " + String(regex) + " matches the string \"" + str + "\"");
};

str = "12321";
if (!!str.match(regex)) {
    console.log("D-ii) The regular expression " + String(regex) + " matches the string \"" + str + "\"");
};

str = "_1a1_";
if (!!str.match(regex)) {
    console.log("D-ii) The regular expression " + String(regex) + " matches the string \"" + str + "\"");
};

////////// E) //////////

regex = /(^[b-yB-Y]+\s)|(\s[b-yB-Y]+\s)|(\s[b-yB-Y]+$)/g;

str = "Bee zapp Crow Eagle Zorro  mouse Ape  you";
if (!!str.match(regex)) {
    console.log("E) The regular expression " + String(regex) + " matches [" + str.match(regex) +"]" );
};

////////// F) //////////

regex = /<([^\/>]+)>.*?<\/\1>/g; // "?" after ".*" makes the quantifier "*" non-greedy

str = "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.";
if (!!str.match(regex)) {
    console.log("F) The regular expression " + String(regex) + " matches [" + str.match(regex) +"]" );
};