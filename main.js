quick_draw_data_set=["Dog","cat","lion","tiger","giraffe","apple","strawberry","Aircraftcarrier"];
random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);
Sketch = quick_draw_data_set[random_no];
document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch To Be Drawn: "+Element_of_array;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
function preload(){
var classifier=ml5.imageClassifier("DoodleNet");

}
function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas);

}
function classifycanvas(){
classifier.classify(canvas,gotResult);

}
function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);



    }
    check_sketch();
    if(drawn_sketch == sketch){
        answer_holder = "set";
        score++;
        document.getElementById("score").innerHTML = "Score: "+score;
    }
}

function check_sketch(){
    timer_counter++;
    document.getElementById("timer").innerHTML = "Timer: "+timer_counter;
    if(timer_counter>500){
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}

function updateCanvas(){
    background("white");
    Random_number = Math.floor((Math.random()*Quick_draw_data_set.length)+1);
    sketch = Quick_draw_data_set[Random_number];
    document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch To Be Drawn: "+sketch;
}


