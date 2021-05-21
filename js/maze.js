var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.scale(2, 2);
labirint();
var i = 0;
var x = 154;
var y = 2;
var key = "dol";
var items = [154, 2, 154, 42, 122, 42, 122, 26, 106, 26, 106, 10, 90, 10, 90, 26, 74, 26, 74, 10, 58, 10, 58, 26, 42, 26, 42, 42, 58, 42, 58, 58, 26, 58, 26, 74, 10, 74, 10, 106, 26, 106, 26, 138, 42, 138, 42, 122, 58, 122, 58, 154, 42, 154, 42, 202, 58, 202, 58, 186, 74, 186, 74, 250, 58, 250, 58, 266, 106, 266, 106, 298, 122, 298, 122, 266, 138, 266, 138, 250, 154, 250, 154, 298, 138, 298, 138, 314, 170, 314, 170, 322];

function labirint() {
    ctx.beginPath();

    ctx.moveTo(2, 2); ctx.lineTo(146, 2);
    ctx.moveTo(162, 2); ctx.lineTo(322, 2);
    ctx.moveTo(34, 18); ctx.lineTo(50, 18);
    ctx.moveTo(178, 18); ctx.lineTo(210, 18);
    ctx.moveTo(258, 18); ctx.lineTo(290, 18);
    ctx.moveTo(50, 34); ctx.lineTo(114, 34);
    ctx.moveTo(130, 34); ctx.lineTo(146, 34);
    ctx.moveTo(194, 34); ctx.lineTo(242, 34);
    ctx.moveTo(290, 34); ctx.lineTo(322, 34);
    ctx.moveTo(2, 50); ctx.lineTo(50, 50);
    ctx.moveTo(82, 50); ctx.lineTo(162, 50);
    ctx.moveTo(2, 66); ctx.lineTo(18, 66);
    ctx.moveTo(34, 66); ctx.lineTo(66, 66);
    ctx.moveTo(82, 66); ctx.lineTo(98, 66);
    ctx.moveTo(162, 66); ctx.lineTo(306, 66);
    ctx.moveTo(18, 82); ctx.lineTo(34, 82);
    ctx.moveTo(66, 82); ctx.lineTo(82, 82);
    ctx.moveTo(98, 82); ctx.lineTo(210, 82);
    ctx.moveTo(274, 82); ctx.lineTo(290, 82);
    ctx.moveTo(306, 82); ctx.lineTo(322, 82);
    ctx.moveTo(18, 98); ctx.lineTo(34, 98);
    ctx.moveTo(98, 98); ctx.lineTo(146, 98);
    ctx.moveTo(162, 98); ctx.lineTo(178, 98);
    ctx.moveTo(210, 98); ctx.lineTo(226, 98);
    ctx.moveTo(258, 98); ctx.lineTo(274, 98);
    ctx.moveTo(2, 114); ctx.lineTo(18, 114);
    ctx.moveTo(50, 114); ctx.lineTo(66, 114);
    ctx.moveTo(82, 114); ctx.lineTo(114, 114);
    ctx.moveTo(130, 114); ctx.lineTo(178, 114);
    ctx.moveTo(210, 114); ctx.lineTo(274, 114);
    ctx.moveTo(66, 130); ctx.lineTo(82, 130);
    ctx.moveTo(114, 130); ctx.lineTo(162, 130);
    ctx.moveTo(194, 130); ctx.lineTo(258, 130);
    ctx.moveTo(18, 146); ctx.lineTo(50, 146);
    ctx.moveTo(82, 146); ctx.lineTo(130, 146);
    ctx.moveTo(210, 146); ctx.lineTo(274, 146);
    ctx.moveTo(306, 146); ctx.lineTo(322, 146);
    ctx.moveTo(2, 162); ctx.lineTo(18, 162);
    ctx.moveTo(50, 162); ctx.lineTo(66, 162);
    ctx.moveTo(82, 162); ctx.lineTo(98, 162);
    ctx.moveTo(146, 162); ctx.lineTo(178, 162);
    ctx.moveTo(194, 162); ctx.lineTo(210, 162);
    ctx.moveTo(226, 162); ctx.lineTo(242, 162);
    ctx.moveTo(274, 162); ctx.lineTo(306, 162);
    ctx.moveTo(50, 178); ctx.lineTo(82, 178);
    ctx.moveTo(98, 178); ctx.lineTo(162, 178);
    ctx.moveTo(178, 178); ctx.lineTo(194, 178);
    ctx.moveTo(210, 178); ctx.lineTo(242, 178);
    ctx.moveTo(258, 178); ctx.lineTo(290, 178);
    ctx.moveTo(130, 194); ctx.lineTo(178, 194);
    ctx.moveTo(194, 194); ctx.lineTo(210, 194);
    ctx.moveTo(242, 194); ctx.lineTo(274, 194);
    ctx.moveTo(34, 210); ctx.lineTo(66, 210);
    ctx.moveTo(82, 210); ctx.lineTo(98, 210);
    ctx.moveTo(114, 210); ctx.lineTo(130, 210);
    ctx.moveTo(146, 210); ctx.lineTo(162, 210);
    ctx.moveTo(178, 210); ctx.lineTo(194, 210);
    ctx.moveTo(210, 210); ctx.lineTo(258, 210);
    ctx.moveTo(290, 210); ctx.lineTo(322, 210);
    ctx.moveTo(2, 226); ctx.lineTo(50, 226);
    ctx.moveTo(98, 226); ctx.lineTo(146, 226);
    ctx.moveTo(194, 226); ctx.lineTo(210, 226);
    ctx.moveTo(226, 226); ctx.lineTo(258, 226);
    ctx.moveTo(274, 226); ctx.lineTo(290, 226);
    ctx.moveTo(306, 226); ctx.lineTo(322, 226);
    ctx.moveTo(34, 242); ctx.lineTo(66, 242);
    ctx.moveTo(82, 242); ctx.lineTo(98, 242);
    ctx.moveTo(130, 242); ctx.lineTo(210, 242);
    ctx.moveTo(290, 242); ctx.lineTo(306, 242);
    ctx.moveTo(18, 258); ctx.lineTo(50, 258);
    ctx.moveTo(66, 258); ctx.lineTo(130, 258);
    ctx.moveTo(178, 258); ctx.lineTo(226, 258);
    ctx.moveTo(258, 258); ctx.lineTo(306, 258);
    ctx.moveTo(2, 274); ctx.lineTo(34, 274);
    ctx.moveTo(50, 274); ctx.lineTo(98, 274);
    ctx.moveTo(130, 274); ctx.lineTo(146, 274);
    ctx.moveTo(162, 274); ctx.lineTo(178, 274);
    ctx.moveTo(210, 274); ctx.lineTo(274, 274);
    ctx.moveTo(18, 290); ctx.lineTo(50, 290);
    ctx.moveTo(130, 290); ctx.lineTo(146, 290);
    ctx.moveTo(178, 290); ctx.lineTo(210, 290);
    ctx.moveTo(274, 290); ctx.lineTo(290, 290);
    ctx.moveTo(18, 306); ctx.lineTo(34, 306);
    ctx.moveTo(50, 306); ctx.lineTo(82, 306);
    ctx.moveTo(98, 306); ctx.lineTo(130, 306);
    ctx.moveTo(146, 306); ctx.lineTo(194, 306);
    ctx.moveTo(242, 306); ctx.lineTo(274, 306);
    ctx.moveTo(290, 306); ctx.lineTo(306, 306);
    ctx.moveTo(2, 322); ctx.lineTo(162, 322);
    ctx.moveTo(178, 322); ctx.lineTo(322, 322);
    ctx.moveTo(2, 2); ctx.lineTo(2, 322);
    ctx.moveTo(18, 2); ctx.lineTo(18, 34);
    ctx.moveTo(18, 82); ctx.lineTo(18, 98);
    ctx.moveTo(18, 130); ctx.lineTo(18, 146);
    ctx.moveTo(18, 162); ctx.lineTo(18, 210);
    ctx.moveTo(18, 242); ctx.lineTo(18, 258);
    ctx.moveTo(34, 18); ctx.lineTo(34, 50);
    ctx.moveTo(34, 66); ctx.lineTo(34, 82);
    ctx.moveTo(34, 98); ctx.lineTo(34, 130);
    ctx.moveTo(34, 146); ctx.lineTo(34, 210);
    ctx.moveTo(34, 306); ctx.lineTo(34, 322);
    ctx.moveTo(50, 82); ctx.lineTo(50, 114);
    ctx.moveTo(50, 130); ctx.lineTo(50, 146);
    ctx.moveTo(50, 162); ctx.lineTo(50, 194);
    ctx.moveTo(50, 210); ctx.lineTo(50, 226);
    ctx.moveTo(50, 242); ctx.lineTo(50, 274);
    ctx.moveTo(50, 290); ctx.lineTo(50, 306);
    ctx.moveTo(66, 18); ctx.lineTo(66, 66);
    ctx.moveTo(66, 98); ctx.lineTo(66, 162);
    ctx.moveTo(66, 194); ctx.lineTo(66, 210);
    ctx.moveTo(66, 226); ctx.lineTo(66, 242);
    ctx.moveTo(66, 274); ctx.lineTo(66, 290);
    ctx.moveTo(82, 2); ctx.lineTo(82, 18);
    ctx.moveTo(82, 66); ctx.lineTo(82, 114);
    ctx.moveTo(82, 146); ctx.lineTo(82, 162);
    ctx.moveTo(82, 178); ctx.lineTo(82, 242);
    ctx.moveTo(82, 290); ctx.lineTo(82, 322);
    ctx.moveTo(98, 18); ctx.lineTo(98, 34);
    ctx.moveTo(98, 66); ctx.lineTo(98, 82);
    ctx.moveTo(98, 130); ctx.lineTo(98, 146);
    ctx.moveTo(98, 178); ctx.lineTo(98, 194);
    ctx.moveTo(98, 226); ctx.lineTo(98, 242);
    ctx.moveTo(98, 274); ctx.lineTo(98, 306);
    ctx.moveTo(114, 2); ctx.lineTo(114, 18);
    ctx.moveTo(114, 34); ctx.lineTo(114, 66);
    ctx.moveTo(114, 114); ctx.lineTo(114, 130);
    ctx.moveTo(114, 162); ctx.lineTo(114, 210);
    ctx.moveTo(114, 242); ctx.lineTo(114, 290);
    ctx.moveTo(130, 18); ctx.lineTo(130, 34);
    ctx.moveTo(130, 50); ctx.lineTo(130, 66);
    ctx.moveTo(130, 98); ctx.lineTo(130, 114);
    ctx.moveTo(130, 130); ctx.lineTo(130, 162);
    ctx.moveTo(130, 210); ctx.lineTo(130, 258);
    ctx.moveTo(130, 290); ctx.lineTo(130, 322);
    ctx.moveTo(146, 2); ctx.lineTo(146, 34);
    ctx.moveTo(146, 66); ctx.lineTo(146, 82);
    ctx.moveTo(146, 146); ctx.lineTo(146, 178);
    ctx.moveTo(146, 258); ctx.lineTo(146, 290);
    ctx.moveTo(162, 18); ctx.lineTo(162, 66);
    ctx.moveTo(162, 82); ctx.lineTo(162, 98);
    ctx.moveTo(162, 130); ctx.lineTo(162, 146);
    ctx.moveTo(162, 210); ctx.lineTo(162, 306);
    ctx.moveTo(178, 2); ctx.lineTo(178, 50);
    ctx.moveTo(178, 114); ctx.lineTo(178, 178);
    ctx.moveTo(178, 194); ctx.lineTo(178, 226);
    ctx.moveTo(178, 306); ctx.lineTo(178, 322);
    ctx.moveTo(194, 34); ctx.lineTo(194, 66);
    ctx.moveTo(194, 82); ctx.lineTo(194, 162);
    ctx.moveTo(194, 210); ctx.lineTo(194, 226);
    ctx.moveTo(194, 258); ctx.lineTo(194, 290);
    ctx.moveTo(210, 34); ctx.lineTo(210, 50);
    ctx.moveTo(210, 162); ctx.lineTo(210, 210);
    ctx.moveTo(210, 226); ctx.lineTo(210, 242);
    ctx.moveTo(210, 306); ctx.lineTo(210, 322);
    ctx.moveTo(226, 2); ctx.lineTo(226, 34);
    ctx.moveTo(226, 50); ctx.lineTo(226, 98);
    ctx.moveTo(226, 146); ctx.lineTo(226, 162);
    ctx.moveTo(226, 194); ctx.lineTo(226, 210);
    ctx.moveTo(226, 226); ctx.lineTo(226, 258);
    ctx.moveTo(226, 274); ctx.lineTo(226, 322);
    ctx.moveTo(242, 2); ctx.lineTo(242, 18);
    ctx.moveTo(242, 34); ctx.lineTo(242, 50);
    ctx.moveTo(242, 82); ctx.lineTo(242, 114);
    ctx.moveTo(242, 178); ctx.lineTo(242, 194);
    ctx.moveTo(242, 242); ctx.lineTo(242, 274);
    ctx.moveTo(242, 290); ctx.lineTo(242, 306);
    ctx.moveTo(258, 18); ctx.lineTo(258, 50);
    ctx.moveTo(258, 66); ctx.lineTo(258, 98);
    ctx.moveTo(258, 146); ctx.lineTo(258, 178);
    ctx.moveTo(258, 210); ctx.lineTo(258, 242);
    ctx.moveTo(258, 274); ctx.lineTo(258, 306);
    ctx.moveTo(274, 18); ctx.lineTo(274, 34);
    ctx.moveTo(274, 50); ctx.lineTo(274, 66);
    ctx.moveTo(274, 114); ctx.lineTo(274, 146);
    ctx.moveTo(274, 194); ctx.lineTo(274, 274);
    ctx.moveTo(290, 2); ctx.lineTo(290, 18);
    ctx.moveTo(290, 34); ctx.lineTo(290, 50);
    ctx.moveTo(290, 66); ctx.lineTo(290, 162);
    ctx.moveTo(290, 178); ctx.lineTo(290, 210);
    ctx.moveTo(290, 274); ctx.lineTo(290, 322);
    ctx.moveTo(306, 18); ctx.lineTo(306, 34);
    ctx.moveTo(306, 50); ctx.lineTo(306, 66);
    ctx.moveTo(306, 82); ctx.lineTo(306, 98);
    ctx.moveTo(306, 114); ctx.lineTo(306, 146);
    ctx.moveTo(306, 162); ctx.lineTo(306, 194);
    ctx.moveTo(306, 242); ctx.lineTo(306, 290);
    ctx.moveTo(322, 2); ctx.lineTo(322, 322);

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
}

function draw() {
    ctx.beginPath();
    ctx.fillRect(x, y, 3, 3);
    ctx.closePath();

    switch (key) {
        case "dol":
            if (x == items[i + 2] && y < items[i + 3]) {
                y++;
            } else if (x == items[i + 2] && y == items[i + 3]) {
                spremeniSmer();
                i += 2;
            }
            break;
        case "gor":
            if (x == items[i + 2] && y > items[i + 3]) {
                y--;
            } else if (x == items[i + 2] && y == items[i + 3]) {
                spremeniSmer();
                i += 2;
            }
            break;
        case "levo":
            if (x > items[i + 2] && y == items[i + 3]) {
                x--;
            } else if (x == items[i + 2] && y == items[i + 3]) {
                spremeniSmer();
                i += 2;
            }
            break;
        case "desno":
            if (x < items[i + 2] && y == items[i + 3]) {
                x++;
            } else if (x == items[i + 2] && y == items[i + 3]) {
                spremeniSmer();
                i += 2;
            }
            break;
        default:
            break;
    }
}

function spremeniSmer() {
    if (items[i + 2] > items[i + 4] && items[i + 3] == items[i + 5]) {
        key = "levo";
    }
    if (items[i + 2] < items[i + 4] && items[i + 3] == items[i + 5]) {
        key = "desno";
    }
    if (items[i + 3] < items[i + 5] && items[i + 2] == items[i + 4]) {
        key = "dol";
    }
    if (items[i + 3] > items[i + 5] && items[i + 2] == items[i + 4]) {
        key = "gor";
    }
}

function reset() {
    location.reload();
}

setInterval(draw, 12);