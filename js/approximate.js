var RUNNING = false
function initialize() {
    let canvas = document.getElementById('approximator-canvas');
    enhance_canvas_dpi(canvas);
    setup_canvas(canvas);
}

function setup_canvas(canvas){
    let context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.stroke();

    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, canvas.height/2, 0, 2 * Math.PI);
    context.stroke();
}

async function start_approximation(){
    let canvas = document.getElementById('approximator-canvas');
    setup_canvas(canvas);
    let context = canvas.getContext('2d');
    var total = 0;
    var inside = 0;
    RUNNING = true;
    while (RUNNING) {
        let x = Math.random();
        let y = Math.random();
        let abs_x = Math.abs(x-0.5);
        let abs_y = Math.abs(y-0.5);
        if (abs_x*abs_x + abs_y*abs_y < 0.5*0.5)
            inside+=1;
        total+=1;
        show_result(inside, total);
        context.fillRect(x*canvas.width, y*canvas.height, 2, 2);
        await timeout(100);
    }
}

function stop_approximation() {
    RUNNING = false;
}

function show_result(inside, total) {
    let inside_p = document.getElementById('approximator-inside');
    let total_p = document.getElementById('approximator-total');
    let result = document.getElementById('approximator-result');

    inside_p.innerHTML = "Number of points inside circle: " + inside;
    total_p.innerHTML = "Total number of points: " + total;
    let res = (4*(inside/total)).toFixed(6);
    result.innerHTML = `$$ \\pi \\approx 4*\\frac{${inside}}{${total}} = ${res}$$`;
    MathJax.typeset();
}