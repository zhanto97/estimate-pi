function enhance_canvas_dpi(canvas) {
    var dpi = window.devicePixelRatio;
    var style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    var style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);
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

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}