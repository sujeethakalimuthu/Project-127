hp_song = "";
sw_song = "";
function preload()
{
    sw_song = loadSound("the-imperial-march.mp3");
    hp_song = loadSound("Harry-Potter-Theme-Song.mp3");
}
function setup()
{
    canvas = createCanvas(400, 300);
    canvas.position(450, 195);
    canvas.show();
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 400, 300);
}  