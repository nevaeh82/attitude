var stage,queue;
function init() 
{
    stage = new createjs.Stage("attitudeCanvas");
    createjs.Ticker.setFPS(12);  //set some FPS
    createjs.Ticker.addEventListener("tick", stage); //set autiomatic refresh, so we don't need to use stage.update() frequently

    queue = new createjs.LoadQueue(true);
    queue.on("complete", loaded);
    queue.loadManifest(
    [
        {
            id: "one",
            src: "https://res.cloudinary.com/naturometer/image/upload/v1539096443/X/attitude/attitude_backplate.png"
        },
        {
            id: "two",
            src: "https://res.cloudinary.com/naturometer/image/upload/v1539096443/X/attitude/attitude_disc.png"
        },
        {
            id: "three",
            src: "https://res.cloudinary.com/naturometer/image/upload/v1539096443/X/attitude/attitude_gear.png"
        },
        {
            id: "four",
            src: "https://res.cloudinary.com/naturometer/image/upload/v1539096443/X/attitude/attitude_planeshape.png"
        }
    ]);
}

function loaded()
{
    var img1 = queue.getResult("one");
    var img2 = queue.getResult("two");
    var img3 = queue.getResult("three");
    var img4 = queue.getResult("four");

    var bitmap1 = new createjs.Bitmap(img1);
    stage.addChild(bitmap1); //first image is visible now
    var bitmap2 = new createjs.Bitmap(img2);
    stage.addChild(bitmap2);
    var bitmap3 = new createjs.Bitmap(img3);
    stage.addChild(bitmap3);
    var bitmap4 = new createjs.Bitmap(img4);
    stage.addChild(bitmap4);

    //let's wait for a second and then call the function
    //img2 is reference to the second image
    // setTimeout(function(){changeImage(someBitmap,img2)},1000);
    // setTimeout(function(){changeImage(someBitmap,img3)},1000);
    // setTimeout(function(){changeImage(someBitmap,img4)},1000);
}

function changeImage(bitmap,img)
{
    bitmap.image=img; //so image is changed
}