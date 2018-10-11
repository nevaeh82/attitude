var stage,queue;
var bitmap1;
var bitmap2;
var bitmap3;
var bitmap4;

var rot1, rot2;
var forward1, forward2;

function init() 
{
    rot1 = 0;
    rot2 = 0;
    forward1 = false;
    forward2 = false;
    stage = new createjs.Stage("attitudeCanvas");
    createjs.Ticker.setFPS(12);  //set some FPS
    createjs.Ticker.on("tick", tick);
    // createjs.Ticker.addEventListener("tick", stage); //set autiomatic refresh, so we don't need to use stage.update() frequently

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

    bitmap1 = new createjs.Bitmap(img1);
    // bitmap1.addEventListener("gear", handleClick);
    bitmap1.x = 150;
    bitmap1.y = 150;
    bitmap1.regX = img1.width/2;
    bitmap1.regY = img1.height/2;
 
    stage.addChild(bitmap1); //first image is visible now
    bitmap2 = new createjs.Bitmap(img2);
    bitmap2.x = 150;
    bitmap2.y = 150;
    bitmap2.regX = img2.width/2;
    bitmap2.regY = img2.height/2;
    stage.addChild(bitmap2);
    bitmap3 = new createjs.Bitmap(img3);
    bitmap3.x = 150;
    bitmap3.y = 150;
    bitmap3.regX = img3.width/2;
    bitmap3.regY = img3.height/2;
    stage.addChild(bitmap3);
    bitmap4 = new createjs.Bitmap(img4);
    bitmap4.x = 150;
    bitmap4.y = 150;
    bitmap4.regX = img4.width/2;
    bitmap4.regY = img4.height/2;
    stage.addChild(bitmap4);

        // bitmap2.rotation = 45;
    // bitmap3.rotation = 45;
    // bitmap4.rotation = 45;

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

 function tick(event) {
    // console.log(event.target + " Was Clicked");
    // console.log(forward1);
    // console.log(rot1);
    if(forward1) {
        if(rot1 < 45) {
            bitmap4.rotation += 2;
            rot1 += 2;
        } else {
            forward1 = !forward1;
        }

    } else {
        if(rot1 > -45) {
            bitmap4.rotation -= 2;
            rot1 -= 2;
        } else {
            forward1 = !forward1;
        }
    }

    if(forward2) {
        if(rot2 < 10) {
            bitmap2.y += 1;
            rot2 += 1;
        } else {
            forward2 = !forward2;
        }

    } else {
        if(rot2 > -10) {
            bitmap2.y -= 1;
            rot2 -= 1;
        } else {
            forward2 = !forward2;
        }
    }
    
    
    // bitmap3.rotation += 4;
    // bitmap4.rotation += 2;
    stage.update(event);
 }