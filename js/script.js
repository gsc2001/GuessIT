class Box {
    constructor(id) {
        this.id = id;
        this.correct = false;
    }
    assign_color() {
        this.color = [255 * Math.random(), 255 * Math.random(), 255 * Math.random()]
    }
    /**
     * @param {Array} color
     */
    set current_color(color) {
        this.color = color;
    }
    get_DOM() {
        this.DOM_object = document.getElementById(this.id);
        this.DOM_object.style.opacity = "100"
    }
    set_color() {
        this.DOM_object.style.backgroundColor = "rgb(" + this.color.join(',') + ')'
    }
}
boxes = []

function get_boxes() {
    for (let i = 1; i <= 6; i++) {
        let id = 'b' + i;
        let box = new Box(id);
        box.assign_color();
        box.get_DOM();
        box.set_color();
        boxes.push(box);
    }
}
function get_correct_box() {
    let correct_box = boxes[Math.floor(Math.random() * 6)]
    correct_box.current_color = correct_color
    correct_box.correct = true;
    return correct_box
}

function correct_event() {
    this.style.opacity = "100"
    swal({
        title: "You WON!",
        icon: "success"
    })
    start();
}

function assign_events() {
    for (let i = 0; i < 6; i++) {
        boxes[i].DOM_object.addEventListener('click', function (e) {
            this.style.opacity = "0"
        });
        if (boxes[i].correct) {
            boxes[i].DOM_object.addEventListener('click',correct_event);
            boxes[i].DOM_object.removeEventListner('click',correct_event,true)
        }
    }
}

// initializing 
function start() {
    boxes = [];
    correct_color = [255 * Math.random(), 255 * Math.random(), 255 * Math.random()];
    get_boxes()
    correct_box = get_correct_box()
    assign_events()
    console.log(boxes);
}

start()