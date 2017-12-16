function drawBoard() {
    var cells = ['', '', '', '', '', '', '', '', ''];
    var table = document.getElementById("game");
    // var  = 1;
    var i;
    var x;

    for (var i = 0; i < 3; i++) {
        var row = document.createElement("tr");

        for (var x = 0; x < 3; x++) {
            var col = document.createElement("td");
            //col.innerHTML = cells;
            row.appendChild(col);
        }
        table.appendChild(row);


    }
}

function refresh() {

    location.reload();
}

function Play() {

    var i;
    var = playerone;
    var = playertwo;
    var = turn;
    for ()
}