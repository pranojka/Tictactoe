function drawBoard() {
    var cells = ['', '', '', '', '', '', '', '', ''];
    var table = document.getElementById("game");
    var counter = 1;
    var i;
    var x;

    for (var i = 0; i < 3; i++) {
        var row = document.createElement("tr");

        for (var x = 0; x < 3; x++) {
            var td = document.createElement("td");
            //col.innerHTML = cells;
            td.id = counter;

            row.appendChild(td);
        }
        table.appendChild(row);
        // col.indicator=indicator;
        // col.onclick=set;



    }

}

function refresh() {
    var cells = ['', '', '', '', '', '', '', '', ''];

    location.reload();
}

// function Play() {
//     var cells = ['', '', '', '', '', '', '', '', ''];
//     var i;
//     var playerone;
//     var playertwo;
//     var turn;
//     for ()
// }