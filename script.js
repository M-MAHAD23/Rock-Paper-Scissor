const option = ["✊", "✋", "✌️"]

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * option.length)
    return option[randomIndex]
}

function computerTurn(param) {
    const computerTurn = getRandomElement()
    const turn = document.querySelector(".turn")
    const computerState = turn.innerHTML
    turn.innerHTML = "<span style='font-size: 116px;'>" + computerTurn + "</span>";

    setTimeout(function() {
        turn.innerHTML = computerState
    }, 800);

    const status = document.querySelector(".status")
    switch(param) {
        case computerTurn:
            status.innerHTML = "Draw, Try Again 😊";
            break;
        case "✊":
            if (computerTurn === "✋") {
                status.innerHTML = "You Loose 😭 Let's try again 😊";
            } else if (computerTurn === "✌️") {
                status.innerHTML = "You Win 😊";
            }
            break;
        case "✋":
            if (computerTurn === "✌️") {
                status.innerHTML = "You Loose 😭 Let's try again 😊";
            } else if (computerTurn === "✊") {
                status.innerHTML = "You Win 😊";
            }
            break;
        case "✌️":
            if (computerTurn === "✊") {
                status.innerHTML = "You Loose 😭 Let's try again 😊";
            } else if (computerTurn === "✋") {
                status.innerHTML = "You Win 😊";
            }
            break;
        default:
            break;
    }    
}