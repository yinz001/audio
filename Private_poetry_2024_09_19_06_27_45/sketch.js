let song; // variable to store the mp3 file
let amplitude; // variable to store amplitude analyzer
let N = 20;

function preload() {
  // Load your mp3 file
  song = loadSound('audio.mp3');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);

  // Create a new Amplitude analyzer
  amplitude = new p5.Amplitude();
  // Play the loaded song (optional: loop)
  song.play();
}

function draw() {
  
  // Get the amplitude level from the audio file
  let level = amplitude.getLevel();
  
  // now you have assigned the amplitude value to a new variable
  
  // so you can use this to modulate the properties of your pattern
  let M = level*N;
  
  /* draw your pattern */
  
  //check your micLevel 
  console.log(level);
}
