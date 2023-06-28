function hashtag (word,nodeElement) {
    word = word.match(/\b\w+\b/)

    let text = nodeElement.innerText;;
    text = text.replaceAll(word,"<a href=\"https://twitter.com/search?q=%23"+word+"\">#"+word+"</a>");
    nodeElement.innerHTML = text;
}

let node = document.getElementById("text");

let button = document.getElementById("btn");
button.addEventListener("click",function () {
    let word = tag.value;
    hashtag (word,node);
    button.disabled = true;
    tag.value = ""
})

let tag = document.getElementById("hashtag")
tag.addEventListener("input",function () {
    if (!tag.value) {
        button.disabled = true;
    }
    else {
        button.disabled = false;
    };
})
