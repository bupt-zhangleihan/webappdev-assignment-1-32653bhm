<!DOCTYPE html>
<html>
<head>
    <title>键盘事件小游戏</title>
</head>
<body>
    <h1>键盘事件小游戏</h1>
    <p>击键开始游戏，输入单词：“buptbhm”</p>
    <p id="word"></p>
    <p id="result"></p>

    <script src="宝浩铭第四次作业.js"></script>
</body>
</html>

const wordToType = "buptbhm";
let currentWord = "";
let currentIndex = 0;

document.getElementById("word").textContent = currentWord;

function handleKeyPress(event) {
    const keyPressed = event.key.toUpperCase();
    const currentCharacter = wordToType[currentIndex].toUpperCase();

    if (keyPressed === currentCharacter) {
        currentWord += keyPressed;
        currentIndex++;

        if (currentIndex === wordToType.length) {
            document.getElementById("result").textContent = "游戏结束，你胜利了！";
            document.removeEventListener("keydown", handleKeyPress);
        } else {
            document.getElementById("word").textContent = currentWord;
        }
    } else {
        document.getElementById("result").textContent = "错了，请重新输入。";
    }
}

document.addEventListener("keydown", handleKeyPress);
