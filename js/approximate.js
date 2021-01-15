function initialize() {
    var canvas = document.getElementById('approximator-canvas');
    enhance_canvas_dpi(canvas);
    setup_canvas(canvas);
}

function setup_canvas(canvas){
    var context = canvas.getContext('2d');
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.stroke();

    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, canvas.height/2, 0, 2 * Math.PI);
    context.stroke();
}

async function start_approximation(){
    var canvas = document.getElementById('approximator-canvas');
    var context = canvas.getContext('2d');
    while (true) {
        x = Math.random()*canvas.width;
        y = Math.random()*canvas.height;
        context.fillRect(x, y, 1, 1);
        await timeout(100);
    }
}