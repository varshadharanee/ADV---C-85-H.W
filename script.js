
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
 
car1_width = 120;
car1_height = 90;
car1_img = "icons8-car-100 (1).png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 90;
car2_img = "icons8-car-100.png";
car2_x = 10;
car2_y = 90;

background_image = "racing stadium.jpg";

function add(){
    background_imageTag = new Image();
    background_imageTag.onload = upload_background;
    background_imageTag.src = background_image;

    car1_imageTag = new Image();
    car1_imageTag.onload = upload_car1;
    car1_imageTag.src = car1_img;

    car2_imageTag = new Image();
    car2_imageTag.onload = upload_car2;
    car2_imageTag.src = car2_img;
}

function upload_background(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}
function upload_car1(){
    ctx.drawImage(car1_imageTag,car1_x,car1_y,car1_width,car1_height);
}
function upload_car2(){
    ctx.drawImage(car2_imageTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.which;
    console.log(keyPressed);
    if(keyPressed==38){
        car1_up();
        console.log(38); 
    }

    if(keyPressed == 40){
        car1_down();
        console.log(40);  
    }

    if(keyPressed == 37){
        car1_left();
        console.log(37); 
    }

    if(keyPressed == 39){
        car1_right();
        console.log(39); 
    }

    if(keyPressed == 87){
        car2_up();
        console.log(87);
    }

    if(keyPressed == 83){
        car2_down();
        console.log(83);
    }

    if(keyPressed == 65){
        car2_left();
        console.log(65);
    }

    if(keyPressed == 68){
        car2_right();
        console.log(68);
    }
}

function car1_up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("when up arrow is pressed, x = " + car1_x + " y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_down(){
    if(car1_y <= 500){
        car1_y = car1_y + 10;
        console.log("when up arrow is pressed, x = " + car1_x + " y = " + car1_y)
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car1_left(){
    if(car1_x >=0){
        car1_x = car1_x - 10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car1_right(){
    if(car1_x <= 700){
        car1_x = car1_x + 10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_up(){
    if(car2_y >= 0){
        car2_y = car2_y - 10;
        console.log("when up arrow is pressed, x = " + car1_x + " y = " + car1_y);
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_down(){
    if(car2_y <= 500){
        car2_y = car2_y + 10;
        console.log("when up arrow is pressed, x = " + car1_x + " y = " + car1_y)
        upload_background();
        upload_car1();
        upload_car2();
    }
}
function car2_left(){
    if(car2_x >=0){
        car2_x = car2_x - 10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}

function car2_right(){
    if(car2_x <= 700){
        car2_x = car2_x + 10;
        upload_background();
        upload_car1();
        upload_car2();
    }
}