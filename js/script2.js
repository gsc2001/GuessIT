class Box {
    constructor(id) {
        this.id = id
        this.dom = document.getElementById(this.id);
        this.dom.style.opacity = "100"
    }
    set_color(color) {
        this.color = color;
        this.dom.style.backgroundColor = "rgb(" + this.color.join(',') + ")"
    }
}
function disappear() {
    this.style.opacity = "0";
}
function initialize() {
    boxes = new Array
    for (var i = 1; i <= 6; i++) {
        let box = new Box('b' + i);
        color = [Math.floor(255 * Math.random()), Math.floor(255 * Math.random()), Math.floor(255 * Math.random())]
        box.set_color(color)
        box.dom.addEventListener('click', disappear);
        boxes.push(box)
    }
    return boxes;
}

function won() {
    swal({
        title: "You won!!",
        icon: "success"
    }).then(re)
}

function loose() {
    swal({
        title: "You lose",
        icon: "error"
    }).then(re)
}
function check(no) {
    count--;
    if (no == correct_box_i + 1)
        won()
    else if (count == 1)
        loose()

}

var count = 6;
var boxes = initialize();
var correct_color = [Math.floor(255 * Math.random()), Math.floor(255 * Math.random()), Math.floor(255 * Math.random())]
var correct_box_i = Math.floor(Math.random() * 6)
var correct_box = boxes[correct_box_i]
color_dom = document.getElementById('correct_color');
color_dom.innerHTML = "RGB(" + correct_color.join(',') + ")";
correct_box.set_color(correct_color)

function re() {
    count = 6;
    boxes = initialize();
    correct_color = [Math.floor(255 * Math.random()), Math.floor(255 * Math.random()), Math.floor(255 * Math.random())]
    correct_box_i = Math.floor(Math.random() * 6)
    correct_box = boxes[correct_box_i]
    color_dom.innerHTML = "rgb(" + correct_color.join(',') + ")";
    correct_box.set_color(correct_color)
}

