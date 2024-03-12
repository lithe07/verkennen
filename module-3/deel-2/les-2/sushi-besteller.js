var rounds = 6;
var itemsPerRound = 10;
var totalOrders = 0;
var totalRounds = 0;

function placeOrder() {
    if (rounds > 0) {
        var orderList = document.getElementById("orders");
        var order = [];

        for (var i = 1; i <= itemsPerRound; i++) {
            var selectedItem = prompt("Kies een sushi-item (tussen 6 en 60 items in totaal):");

            // Validatie van invoer
            if (validateAmount(selectedItem)) {
                order.push(selectedItem);
            } else {
                document.getElementById("messageContainer").innerText = "Ongeldige invoer. Voer een getal tussen 6 en 60 in.";
                return;
            }
        }

        orderList.innerHTML += "<li>Ronde " + (totalRounds + 1) + ": " + order.join(", ") + "</li>";
        totalOrders += itemsPerRound;

        document.getElementById("roundTotal").innerText = itemsPerRound;
        document.getElementById("totalOrders").innerText = totalOrders;
        document.getElementById("rounds").innerText = --rounds;
        document.getElementById("messageContainer").innerText = "";

        if (rounds === 0) {
            alert("Alle rondes zijn voltooid. Bedankt voor je bestellingen! Totaal bestellingen: " + totalOrders);
            document.getElementById("placeOrderBtn").disabled = true;
        }

        if (totalOrders >= 60) {
            alert("Je hebt het maximale aantal van 60 items bereikt. Bedankt voor je bestellingen!");
            document.getElementById("placeOrderBtn").disabled = true;
        }
    }
}

function validateAmount(input) {
    var allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "Delete", "ArrowLeft", "ArrowRight"];
    
    if (!allowedKeys.includes(input) || (input.length === 2 && input[0] === "0") || parseInt(input) < 6 || parseInt(input) > 60) {
        return false;
    }

    return true;
}
