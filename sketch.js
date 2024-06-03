function setup() {
    createCanvas(600, 600);
     background("teal");
  }
  
  function draw() {
    
  
    stroke("orange");
    fill("khaki");
  
    //console.log(mouseIsPressed)
    if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20);
      
    }
  }
  