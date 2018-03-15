let ctx, thetas = [], TAU = 2 * Math.PI, MAX_R = 600;
let mw, mh;
const colors = ["#00204a22", "#00579222", "#00bbf022", "#fdb44b22"];
function setup () {
    let r, canvas = document.getElementById ('canvas_md');
    let w = canvas.width;
    let h = canvas.height;
    mw = parseInt (w / 2);
    mh = parseInt (h / 2);
    // canvas.width = w;
    // canvas.height = h;
    //document.body.appendChild (canvas);
    ctx = canvas.getContext ('2d');
    for (r = 1; r < MAX_R; r++) thetas[r] = Math.random () * TAU;
    requestAnimationFrame (draw);
}
function draw () {
    let r, p, x, y;
    /*let canvas = document.getElementById ('canvas_md');
    let w = canvas.width;
    let h = canvas.height;
    mw = parseInt (w / 2);
    mh = parseInt (h / 2);*/
    for (r = 1; r < MAX_R; r++) {
        p = 2 * Math.random () * Math.PI / r;
        thetas[r] += (Math.random () > 0.5) ? p : -p;
        x = r * Math.cos (thetas[r]);
        y = r * Math.sin (thetas[r]);

        ctx.fillStyle = colors[(r) % colors.length];
        ctx.beginPath ();
        ctx.arc (mw + x, mw + y, 2, 0, TAU, true);
        ctx.arc (mh - x, mh + y, 2, 0, TAU, true);
        ctx.fill ();
    }
    requestAnimationFrame (draw);
}
