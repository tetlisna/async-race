(() => {
    let start: number,
        stopId: number,
        progress: number;

    let toggle: boolean = false;

    const carSelected = document.getElementById('element') as HTMLElement
    ;
    carSelected.setAttribute("style",
        "background: blue; position: absolute; width: 50px; height: 50px; top: 50px;");

    function step(timestamp: number) {
        if (!start || progress > 400) start = timestamp;
        progress = (timestamp - start) / 10 + 50;
        carSelected.style.top = progress + 'px';
        stopId = window.requestAnimationFrame(step);
    }

    function toggleAnimation() {
        if (!toggle) {
            toggle = true;
            window.requestAnimationFrame(step);
        } else {
            toggle = false;
            cancelAnimationFrame(stopId);
        }
    }


})()
