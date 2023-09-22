
var name = '';
var bgImg = '';
var snapImg = '';
var scriptImg = '';
var script = '';

var bg = '';
var script = '';
var message = '';

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var cSnap = document.getElementById("snapCanvas");
var ctxSnap = cSnap.getContext("2d");

// Adding Username To The Cards
$("#Username").on("change", function () {
    name = '';
    name = $(this).val();
    ctx.font = "bold 40px IBMPlex";
    ctx.fillStyle = "#014862";

    ctxSnap.font = "bold 40px IBMPlex";
    ctxSnap.fillStyle = "#014862";

    var textName = name;

    var pos1 = getCenterposition(textName, ctx);
    var pos1Snap = getCenterposition(textName, ctxSnap);
    ctx.fillText(textName, pos1, 950);
    ctxSnap.fillText(textName, pos1Snap, 1600);
});

// Adding orgName To The Cards
$("#orgName").on("change", function () {
    name = '';
    name = $(this).val();
    ctx.font = "bold 35px IBMPlex";
    ctx.fillStyle = "#00B0AE";

    ctxSnap.font = "bold 35px IBMPlex";
    ctxSnap.fillStyle = "#00B0AE";

    var textName = name;

    var pos1 = getCenterposition(textName, ctx);
    var pos1Snap = getCenterposition(textName, ctxSnap);
    ctx.fillText(textName, pos1, 1000);
    ctxSnap.fillText(textName, pos1Snap, 1650);
});


$("input[type=radio]").on("click", function () {
    var type = $(this).attr('name');

    //debugger;
    ctx.clearRect(0, 0, ctx.width, ctx.height);
    ctx.restore();

    if (document.querySelector('input[name="background"]:checked') != null)
        bg = document.querySelector('input[name="background"]:checked').value;

    if (document.querySelector('input[name="script"]:checked') != null)
        script = document.querySelector('input[name="script"]:checked').value;

    if (document.querySelector('input[name="message"]:checked') != null)
        message = document.querySelector('input[name="message"]:checked').value;

    if (bg != '') {
        //   bg =  $(this).val();
        if (bg == 'bg-13') { bgImg = "assets/images/cards/portrait/1626270061.jpg"; snapImg = "assets/images/cards/square/1626270063.jpg"; }
        if (bg == 'bg-15') { bgImg = "assets/images/cards/portrait/1626270233.jpg"; snapImg = "assets/images/cards/square/1626270235.jpg"; }
        if (bg == 'bg-16') { bgImg = "assets/images/cards/portrait/1626270264.jpg"; snapImg = "assets/images/cards/square/1626270266.jpg"; }
        if (bg == 'bg-17') { bgImg = "assets/images/cards/portrait/1626270300.jpg"; snapImg = "assets/images/cards/square/1626270302.jpg"; }
        if (bg == 'bg-18') { bgImg = "assets/images/cards/portrait/1626270441.jpg"; snapImg = "assets/images/cards/square/1626270443.jpg"; }
        if (bg == 'bg-19') { bgImg = "assets/images/cards/portrait/1626270495.jpg"; snapImg = "assets/images/cards/square/1626270497.jpg"; }
        if (bg == 'bg-20') { bgImg = "assets/images/cards/portrait/1626270577.jpg"; snapImg = "assets/images/cards/square/1626270579.jpg"; }
        if (bg == 'bg-21') { bgImg = "assets/images/cards/portrait/1626270648.jpg"; snapImg = "assets/images/cards/square/1626270650.jpg"; }
        if (bg == 'bg-22') { bgImg = "assets/images/cards/portrait/1626271229.jpg"; snapImg = "assets/images/cards/square/1626271231.jpg"; }
        if (bg == 'bg-23') { bgImg = "assets/images/cards/portrait/1626271382.jpg"; snapImg = "assets/images/cards/square/1626271384.jpg"; }
        if (bg == 'bg-24') { bgImg = "assets/images/cards/portrait/1626271481.jpg"; snapImg = "assets/images/cards/square/1626271483.jpg"; }
        if (bg == 'bg-25') { bgImg = "assets/images/cards/portrait/1626271539.jpg"; snapImg = "assets/images/cards/square/1626271541.jpg"; }


        // Draw background =================================================================================
        c.width = 1080;
        c.height = 1080;
        var background = new Image();
        background.src = bgImg;
        background.onload = function () {
            ctx.drawImage(background, 0, 0);
            // drawmessage(message, ctx);
            drawname(ctx);
            drawScript(scriptImg, ctx, message, ctxSnap)
        }
        // draw snap
        cSnap.width = 1080;
        cSnap.height = 1920;
        var backgroundSnap = new Image();
        backgroundSnap.src = snapImg;
        backgroundSnap.onload = function () {
            ctxSnap.drawImage(backgroundSnap, 0, 0);
            // drawmessageSnap(message, ctxSnap);
            drawnameSnap(ctxSnap);
            drawScript(scriptImg, ctx, message, ctxSnap)
        }
        // ====================================================================================================
    }

    if (script != '') {
        var scriptImg = '';

        if (script == 'script-14') { scriptImg = "assets/images/scripts2/1.png"; }
        if (script == 'script-13') { scriptImg = "assets/images/scripts2/2.png"; }
        if (script == 'script-16') { scriptImg = "assets/images/scripts2/3.png"; }
        if (script == 'script-17') { scriptImg = "assets/images/scripts2/4.png"; }
        if (script == 'script-18') { scriptImg = "assets/images/scripts2/5.png"; }
        if (script == 'script-19') { scriptImg = "assets/images/scripts2/6.png"; }
        


        const img = new Image()
        img.src = scriptImg
        img.onload = () => {
            ctx.drawImage(img, 235, 700);
            // drawmessage(message, ctx);
            drawname(ctx);
        }
        // draw snap
        const imgSnap = new Image()
        imgSnap.src = scriptImg
        imgSnap.onload = () => {
            ctxSnap.drawImage(imgSnap, 235, 1320);
            // drawmessageSnap(message, ctxSnap);
            drawnameSnap(ctxSnap);
        }

    }

});

/// Draw Script
function drawScript(scriptImg, ctx, message, ctxSnap) {
    const img = new Image()
    img.src = scriptImg;
    img.onload = () => {
        // ctx.drawImage(img, 20, 50);
        drawmessage(message, ctx);
        drawname(ctx);
    }
    // draw snap
    const imgSnap = new Image()
    imgSnap.src = scriptImg
    imgSnap.onload = () => {
        // ctxSnap.drawImage(imgSnap, 20, 300);
        drawmessage(message, ctxSnap);
        drawnameSnap(ctxSnap);
    }

}

function drawname(ctx) {
    var name = '';
    name = $("#Username").val();
    if (name != '') {
        ctx.font = "bold 40px IBMPlex";
        ctx.fillStyle = "#014862";
        var textName = name;
        var pos1 = getCenterposition(textName, ctx);
        ctx.fillText(textName, pos1, 950);

    }
}

function drawnameSnap(ctxSnap) {
    var name = '';
    name = $("#Username").val();
    if (name != '') {
        ctxSnap.font = "bold 40px IBMPlex";
        ctxSnap.fillStyle = "#014862";
        var textName = name;
        var pos1 = getCenterposition(textName, ctxSnap);
        ctxSnap.fillText(textName, pos1, 1750);


    }
}

// Draw Message Code
function drawmessage() {
    var selectedRadio = document.querySelector('input[name="message"]:checked');
    if (selectedRadio) {
        var selectedValue = selectedRadio.parentNode.querySelector('h4').textContent;
        console.log(selectedValue + '1');
        var messageImg = '';
        const img = new Image();
        const imgSnap = new Image();
        messageImg = selectedValue;
        ctx.font = "bold 45px  IBMPlex";
        ctx.fillStyle = "#EE3E23";
        ctxSnap.font = "bold 45px  IBMPlex";
        ctxSnap.fillStyle = "#EE3E23";

        var pos1 = getCenterposition(messageImg, ctx);
        var pos2 = getCenterposition(messageImg, ctxSnap);
        // var pos2 = getCenterposition(messageImg2, ctx);
        ctx.fillText(messageImg, pos1, 670);
        ctxSnap.fillText(messageImg, pos2, 1250);
        img.src = messageImg;
        img.onload = () => {
            ctx.drawImage(img, 180, 0)
        }
        img.onload = () => {
            ctxSnap.drawImage(imgSnap, 180, 0)
        }

    } else {
        console.log(selectedValue + '2');
    }
}

// Add "change" event listener to the radio inputs
var radioInputs = document.querySelectorAll('input[name="message"]');
radioInputs.forEach(function (radio) {
    radio.addEventListener('change', function () {
        console.log('checked');
        setTimeout(drawmessage, 50);
        ;
    });
});

function getCenterposition(str, ctx) {
    var width = ctx.measureText(str).width;
    var centerpos = (1080 - width) / 2;
    return centerpos + width;

}


$('#canvasbtn').click(function () {
    this.href = $('#myCanvas')[0].toDataURL();
    this.download = 'National Day 93.png';
});

$('#canvasbtn2').click(function () {
    this.href = $('#snapCanvas')[0].toDataURL();
    this.download = 'National Day 93.png';
});
