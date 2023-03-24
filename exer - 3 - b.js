function hashtag (word,nodeElement) {
    if ((typeof word != "string") || !nodeElement) {
        console.log("Invalid iput");
        return
    };

    let text = nodeElement.innerHTML;
    text = text;
    text = text.replaceAll(word,"<a href=\"https://twitter.com/search?q=%23"+word+"\">#"+word+"</a>");
    nodeElement.innerHTML = text;
}

let node = document.getElementById("text");

hashtag("rocket",node);