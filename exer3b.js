function hashtag (word,nodeElement) {
    word = word.match(/\b\w+\b/)

    // let text = nodeElement.innerText;
    let text = nodeElement.originalText;
    text = text.replaceAll(word[0],'<a href=\"https://twitter.com/search?q=%23'+word[0]+'\">#'+word[0]+'</a>');
    nodeElement.innerHTML = text;
}

let node = document.getElementById("text");
node.originalText = node.innerText;

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
