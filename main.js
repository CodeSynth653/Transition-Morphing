function theme() {
var th1 = document.getElementById("button1").innerHTML;
var colrcl = document.getElementById("colrctrl").innerHTML;
var als = document.getElementById("alch").innerHTML;
if(th1 == "Theme : Light") {
let ap = false;
let myanim0 = gsap.to("#button1", {
duration : 0.5,
scale : 0.9,
delay : 0,
yoyo : true,
repeat : 1,
ease : "none",
paused : true,
});
let myanim1 = gsap.to(".d1", {
duration : 2,
backgroundColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title1", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
color : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#title2", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
color : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#tr, #mr", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#title3, #title4", {
duration : 2,
color : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 2,
borderColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button1", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
color : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#button2, #button3", {
duration : 2,
backgroundColor : "black",
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim0.pause();
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
}
else {
myanim0.play();
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
gsap.to("#vb", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(colrcl == "vg") {
gsap.to("#vg", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(colrcl == "vr") {
gsap.to("#vr", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(colrcl == "vy") {
gsap.to("#vy", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(colrcl == "vo") {
gsap.to("#vo", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(colrcl == "vp") {
gsap.to("#vp", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
if(als == "" || als == "win") {
gsap.to("#al1", {
    duration : 1,
    backgroundColor : "black",
    color : "rgb(177,196,218)",
    borderColor : "rgb(177,196,218)",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
gsap.to("#al2, #al3, #al4, #al5", {
    duration : 1,
    backgroundColor : "rgb(177,196,218)",
    color : "black",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(als == "nat") {
gsap.to("#al2", {
    duration : 1,
    backgroundColor : "black",
    color : "rgb(177,196,218)",
    borderColor : "rgb(177,196,218)",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
gsap.to("#al1, #al3, #al4, #al5", {
    duration : 1,
    backgroundColor : "rgb(177,196,218)",
    color : "black",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(als == "aut") {
gsap.to("#al3", {
    duration : 1,
    backgroundColor : "black",
    color : "rgb(177,196,218)",
    borderColor : "rgb(177,196,218)",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
gsap.to("#al2, #al1, #al4, #al5", {
    duration : 1,
    backgroundColor : "rgb(177,196,218)",
    color : "black",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(als == "met") {
gsap.to("#al4", {
    duration : 1,
    backgroundColor : "black",
    color : "rgb(177,196,218)",
    borderColor : "rgb(177,196,218)",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
gsap.to("#al2, #al3, #al1, #al5", {
    duration : 1,
    backgroundColor : "rgb(177,196,218)",
    color : "black",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(als == "spc") {
gsap.to("#al5", {
    duration : 1,
    backgroundColor : "black",
    color : "rgb(177,196,218)",
    borderColor : "rgb(177,196,218)",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
gsap.to("#al2, #al3, #al4, #al1", {
    duration : 1,
    backgroundColor : "rgb(177,196,218)",
    color : "black",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
}
document.getElementById("button1").innerHTML = "Theme : Dark";
ap =! ap;
}
else if(th1 == "Theme : Dark") {
let ap = false;
let myanim0 = gsap.to("#button1", {
duration : 0.5,
scale : 0.9,
delay : 0,
yoyo : true,
repeat : 1,
ease : "none",
paused : true,
});
let myanim1 = gsap.to(".d1", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title1", {
duration : 2,
backgroundColor : "black",
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#title2", {
duration : 2,
backgroundColor : "black",
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#tr, #mr", {
duration : 2,
backgroundColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#title3, #title4", {
duration : 2,
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 2,
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button1", {
duration : 2,
backgroundColor : "black",
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#button2 ,#button3", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
color : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim0.pause();
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
}
else {
myanim0.play();
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
gsap.to("#vb", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(colrcl == "vg") {
gsap.to("#vg", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(colrcl == "vr") {
gsap.to("#vr", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(colrcl == "vy") {
gsap.to("#vy", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(colrcl == "vo") {
gsap.to("#vo", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(colrcl == "vp") {
gsap.to("#vp", {
    duration : 1,
    scaleY : 1,
    rotate : 180,
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
if(als == "" || als == "win") {
gsap.to("#al1", {
    duration : 1,
    backgroundColor : "rgb(177,196,218)",
    color : "black",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
gsap.to("#al2, #al3, #al4, #al5", {
    duration : 1,
    backgroundColor : "black",
    color : "rgb(177,196,218)",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(als == "nat") {
gsap.to("#al2", {
    duration : 1,
    backgroundColor : "rgb(177,196,218)",
    color : "black",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
gsap.to("#al1, #al3, #al4, #al5", {
    duration : 1,
    backgroundColor : "black",
    color : "rgb(177,196,218)",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(als == "aut") {
gsap.to("#al3", {
    duration : 1,
    backgroundColor : "rgb(177,196,218)",
    color : "black",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
gsap.to("#al2, #al1, #al4, #al5", {
    duration : 1,
    backgroundColor : "black",
    color : "rgb(177,196,218)",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(als == "met") {
gsap.to("#al4", {
    duration : 1,
    backgroundColor : "rgb(177,196,218)",
    color : "black",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
gsap.to("#al2, #al3, #al1, #al5", {
    duration : 1,
    backgroundColor : "black",
    color : "rgb(177,196,218)",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
else if(als == "spc") {
gsap.to("#al5", {
    duration : 1,
    backgroundColor : "rgb(177,196,218)",
    color : "black",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
gsap.to("#al2, #al3, #al4, #al1", {
    duration : 1,
    backgroundColor : "black",
    color : "rgb(177,196,218)",
    borderColor : "black",
    delay : 0,
    yoyo : true,
    repeat : 0,
    ease : "none",
});
}
}
document.getElementById("button1").innerHTML = "Theme : Light";
ap =! ap;
}
document.getElementById("colrctrl").innerHTML = "";
}
function cs() {
var bts = document.getElementById("button2").innerHTML;
if(bts == "Enable") {
var ap = false;
let myanim0 = gsap.to("#button2", {
duration : 0.3,
scale : 0.9,
delay : 0,
yoyo : true,
repeat : 1,
ease : "none",
paused : true,
});
let myanim1 = gsap.to("#scheme", {
duration : 1,
opacity : 1,
xPercent : 110,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim2 = gsap.to("#vb", {
duration : 1,
opacity : 1,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim3 = gsap.to("#vg", {
duration : 1,
opacity : 1,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim4 = gsap.to("#vr", {
duration : 1,
opacity : 1,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim5 = gsap.to("#vy", {
duration : 1,
opacity : 1,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim6 = gsap.to("#vo", {
duration : 1,
opacity : 1,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim7 = gsap.to("#vp", {
duration : 1,
opacity : 1,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
if(ap) {
myanim0.pause();
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
}
else {
myanim0.play();
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
}
document.getElementById("button2").innerHTML = "Disable";
ap =! ap;
}
else if(bts == "Disable") {
var ap = false;
let myanim0 = gsap.to("#button2", {
duration : 0.3,
scale : 0.9,
delay : 0,
yoyo : true,
repeat : 1,
ease : "none",
paused : true,
});
let myanim1 = gsap.to("#scheme", {
duration : 1,
opacity : 0,
xPercent : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim2 = gsap.to("#vb", {
duration : 1,
opacity : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim3 = gsap.to("#vg", {
duration : 1,
opacity : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim4 = gsap.to("#vr", {
duration : 1,
opacity : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim5 = gsap.to("#vy", {
duration : 1,
opacity : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim6 = gsap.to("#vo", {
duration : 1,
opacity : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim7 = gsap.to("#vp", {
duration : 1,
opacity : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
if(ap) {
myanim0.pause();
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
}
else {
myanim0.play();
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
}
document.getElementById("button2").innerHTML = "Enable";
ap =! ap;
}
}
function colr1() {
var th = document.getElementById("button1").innerHTML;
var colrcl = document.getElementById("colrctrl").innerHTML;
var als = document.getElementById("alch").innerHTML;
if(th == "Theme : Light") {
var ap = false;
let myanim1 = gsap.to(".d1", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title1", {
duration : 2,
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#title2", {
duration : 2,
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#button1", {
duration : 2,
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#title3", {
duration : 2,
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#title4", {
duration : 2,
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button2", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#button3", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vb", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vg") {
    gsap.to("#vg", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vr") {
    gsap.to("#vr", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vy") {
    gsap.to("#vy", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vo") {
    gsap.to("#vo", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vp") {
    gsap.to("#vp", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "rgb(177,196,218)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(177,196,218)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "rgb(177,196,218)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(177,196,218)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "rgb(177,196,218)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(177,196,218)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "rgb(177,196,218)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(177,196,218)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "rgb(177,196,218)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(177,196,218)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
else if(th == "Theme : Dark") {
var ap = false;
let myanim1 = gsap.to("#title1", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title2", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#button1", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#tr", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#mr", {
duration : 2,
backgroundColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#button2", {
duration : 2,
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button3", {
duration : 2,
color : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 2,
borderColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vb", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vg") {
    gsap.to("#vg", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vr") {
    gsap.to("#vr", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vy") {
    gsap.to("#vy", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vo") {
    gsap.to("#vo", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vp") {
    gsap.to("#vp", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(177,196,218)",
        borderColor : "rgb(177,196,218)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(177,196,218)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(177,196,218)",
        borderColor : "rgb(177,196,218)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(177,196,218)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(177,196,218)",
        borderColor : "rgb(177,196,218)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(177,196,218)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(177,196,218)",
        borderColor : "rgb(177,196,218)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "rgb(177,196,218)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(177,196,218)",
        borderColor : "rgb(177,196,218)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "rgb(177,196,218)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
document.getElementById("colrctrl").innerHTML = "vb";
}
function colr2() {
var th = document.getElementById("button1").innerHTML;
var colrcl = document.getElementById("colrctrl").innerHTML;
var als = document.getElementById("alch").innerHTML;
if(th == "Theme : Light") {
var ap = false;
let myanim1 = gsap.to(".d1", {
duration : 2,
backgroundColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title1", {
duration : 2,
color : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#title2", {
duration : 2,
color : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#button1", {
duration : 2,
color : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#title3", {
duration : 2,
color : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#title4", {
duration : 2,
color : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button2", {
duration : 2,
backgroundColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#button3", {
duration : 2,
backgroundColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vg", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
    gsap.to("#vb", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vr") {
    gsap.to("#vr", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vy") {
    gsap.to("#vy", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vo") {
    gsap.to("#vo", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vp") {
    gsap.to("#vp", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "rgb(155,255,181)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(155,255,181)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "rgb(155,255,181)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(155,255,181)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "rgb(155,255,181)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(155,255,181)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "rgb(155,255,181)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(155,255,181)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "rgb(155,255,181)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(155,255,181)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
else if(th == "Theme : Dark") {
var ap = false;
let myanim1 = gsap.to("#title1", {
duration : 2,
backgroundColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title2", {
duration : 2,
backgroundColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#button1", {
duration : 2,
backgroundColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#tr", {
duration : 2,
backgroundColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#mr", {
duration : 2,
backgroundColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#button2", {
duration : 2,
color : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button3", {
duration : 2,
color : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 2,
borderColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vg", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
    gsap.to("#vb", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vr") {
    gsap.to("#vr", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vy") {
    gsap.to("#vy", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vo") {
    gsap.to("#vo", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vp") {
    gsap.to("#vp", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(155,255,181)",
        borderColor : "rgb(155,255,181)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(155,255,181)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(155,255,181)",
        borderColor : "rgb(155,255,181)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(155,255,181)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(155,255,181)",
        borderColor : "rgb(155,255,181)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(155,255,181)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(155,255,181)",
        borderColor : "rgb(155,255,181)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "rgb(155,255,181)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(155,255,181)",
        borderColor : "rgb(155,255,181)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "rgb(155,255,181)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
document.getElementById("colrctrl").innerHTML = "vg";
}
function colr3() {
var th = document.getElementById("button1").innerHTML;
var colrcl = document.getElementById("colrctrl").innerHTML;
var als = document.getElementById("alch").innerHTML;
if(th == "Theme : Light") {
var ap = false;
let myanim1 = gsap.to(".d1", {
duration : 2,
backgroundColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title1", {
duration : 2,
color : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#title2", {
duration : 2,
color : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#button1", {
duration : 2,
color : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#title3", {
duration : 2,
color : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#title4", {
duration : 2,
color : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button2", {
duration : 2,
backgroundColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#button3", {
duration : 2,
backgroundColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vr", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
    gsap.to("#vb", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vg") {
    gsap.to("#vg", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vy") {
    gsap.to("#vy", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vo") {
    gsap.to("#vo", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vp") {
    gsap.to("#vp", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "rgb(255,157,157)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,157,157)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "rgb(255,157,157)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,157,157)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "rgb(255,157,157)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,157,157)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "rgb(255,157,157)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,157,157)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "rgb(255,157,157)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,157,157)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
else if(th == "Theme : Dark") {
var ap = false;
let myanim1 = gsap.to("#title1", {
duration : 2,
backgroundColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title2", {
duration : 2,
backgroundColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#button1", {
duration : 2,
backgroundColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#tr", {
duration : 2,
backgroundColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#mr", {
duration : 2,
backgroundColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#button2", {
duration : 2,
color : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button3", {
duration : 2,
color : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 2,
borderColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vr", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
    gsap.to("#vb", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vg") {
    gsap.to("#vg", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vy") {
    gsap.to("#vy", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vo") {
    gsap.to("#vo", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vp") {
    gsap.to("#vp", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,157,157)",
        borderColor : "rgb(255,157,157)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,157,157)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,157,157)",
        borderColor : "rgb(255,157,157)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,157,157)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,157,157)",
        borderColor : "rgb(255,157,157)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,157,157)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,157,157)",
        borderColor : "rgb(255,157,157)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,157,157)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,157,157)",
        borderColor : "rgb(255,157,157)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "rgb(255,157,157)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
document.getElementById("colrctrl").innerHTML = "vr";
}
function colr4() {
var th = document.getElementById("button1").innerHTML;
var colrcl = document.getElementById("colrctrl").innerHTML;
var als = document.getElementById("alch").innerHTML;
if(th == "Theme : Light") {
var ap = false;
let myanim1 = gsap.to(".d1", {
duration : 2,
backgroundColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title1", {
duration : 2,
color : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#title2", {
duration : 2,
color : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#button1", {
duration : 2,
color : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#title3", {
duration : 2,
color : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#title4", {
duration : 2,
color : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button2", {
duration : 2,
backgroundColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#button3", {
duration : 2,
backgroundColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vy", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
    gsap.to("#vb", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vg") {
    gsap.to("#vg", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vr") {
    gsap.to("#vr", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vo") {
    gsap.to("#vo", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vp") {
    gsap.to("#vp", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "rgb(255,255,159)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,255,159)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "rgb(255,255,159)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,255,159)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "rgb(255,255,159)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,255,159)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "rgb(255,255,159)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,255,159)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "rgb(255,255,159)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,255,159)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
else if(th == "Theme : Dark") {
var ap = false;
let myanim1 = gsap.to("#title1", {
duration : 2,
backgroundColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title2", {
duration : 2,
backgroundColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#button1", {
duration : 2,
backgroundColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#tr", {
duration : 2,
backgroundColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#mr", {
duration : 2,
backgroundColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#button2", {
duration : 2,
color : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button3", {
duration : 2,
color : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 2,
borderColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vy", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
    gsap.to("#vb", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vg") {
    gsap.to("#vg", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vr") {
    gsap.to("#vr", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vo") {
    gsap.to("#vo", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vp") {
    gsap.to("#vp", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,255,159)",
        borderColor : "rgb(255,255,159)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,255,159)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,255,159)",
        borderColor : "rgb(255,255,159)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,255,159)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,255,159)",
        borderColor : "rgb(255,255,159)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,255,159)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,255,159)",
        borderColor : "rgb(255,255,159)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,255,159)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,255,159)",
        borderColor : "rgb(255,255,159)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "rgb(255,255,159)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
document.getElementById("colrctrl").innerHTML = "vy";
}
function colr5() {
var th = document.getElementById("button1").innerHTML;
var colrcl = document.getElementById("colrctrl").innerHTML;
var als = document.getElementById("alch").innerHTML;
if(th == "Theme : Light") {
var ap = false;
let myanim1 = gsap.to(".d1", {
duration : 2,
backgroundColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title1", {
duration : 2,
color : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#title2", {
duration : 2,
color : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#button1", {
duration : 2,
color : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#title3", {
duration : 2,
color : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#title4", {
duration : 2,
color : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button2", {
duration : 2,
backgroundColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#button3", {
duration : 2,
backgroundColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vo", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
    gsap.to("#vb", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vg") {
    gsap.to("#vg", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vr") {
    gsap.to("#vr", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vy") {
    gsap.to("#vy", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vp") {
    gsap.to("#vp", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "rgb(255,182,108)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,182,108)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "rgb(255,182,108)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,182,108)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "rgb(255,182,108)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,182,108)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "rgb(255,182,108)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,182,108)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "rgb(255,182,108)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,182,108)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
else if(th == "Theme : Dark") {
var ap = false;
let myanim1 = gsap.to("#title1", {
duration : 2,
backgroundColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title2", {
duration : 2,
backgroundColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#button1", {
duration : 2,
backgroundColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#tr", {
duration : 2,
backgroundColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#mr", {
duration : 2,
backgroundColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#button2", {
duration : 2,
color : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button3", {
duration : 2,
color : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 2,
borderColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vo", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
    gsap.to("#vb", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vg") {
    gsap.to("#vg", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vr") {
    gsap.to("#vr", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vy") {
    gsap.to("#vy", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vp") {
    gsap.to("#vp", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,182,108)",
        borderColor : "rgb(255,182,108)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,182,108)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,182,108)",
        borderColor : "rgb(255,182,108)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,182,108)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,182,108)",
        borderColor : "rgb(255,182,108)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,182,108)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,182,108)",
        borderColor : "rgb(255,182,108)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "rgb(255,182,108)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(255,182,108)",
        borderColor : "rgb(255,182,108)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "rgb(255,182,108)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
document.getElementById("colrctrl").innerHTML = "vo";
}
function colr6() {
var th = document.getElementById("button1").innerHTML;
var colrcl = document.getElementById("colrctrl").innerHTML;
var als = document.getElementById("alch").innerHTML;
if(th == "Theme : Light") {
var ap = false;
let myanim1 = gsap.to(".d1", {
duration : 2,
backgroundColor : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title1", {
duration : 2,
color : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#title2", {
duration : 2,
color : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#button1", {
duration : 2,
color : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#title3", {
duration : 2,
color : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#title4", {
duration : 2,
color : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button2", {
duration : 2,
backgroundColor : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#button3", {
duration : 2,
backgroundColor : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vp", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
    gsap.to("#vb", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vg") {
    gsap.to("#vg", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vr") {
    gsap.to("#vr", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vy") {
    gsap.to("#vy", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vo") {
    gsap.to("#vo", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "rgb(200,145,255)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(200,145,255)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "rgb(200,145,255)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(200,145,255)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "rgb(200,145,255)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(200,145,255)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "rgb(200,145,255)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(200,145,255)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "rgb(200,145,255)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(200,145,255)",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
else if(th == "Theme : Dark") {
var ap = false;
let myanim1 = gsap.to("#title1", {
duration : 2,
backgroundColor : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#title2", {
duration : 2,
backgroundColor : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#button1", {
duration : 2,
backgroundColor : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#tr", {
duration : 2,
backgroundColor : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#mr", {
duration : 2,
backgroundColor : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#button2", {
duration : 2,
color : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#button3", {
duration : 2,
color : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 2,
borderColor : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#vp", {
duration : 1,
scaleY : 1.5,
rotate : 90,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
myanim6.play();
myanim7.play();
myanim8.play();
myanim9.play();
if(colrcl == "") {}
else if(colrcl == "vb") {
    gsap.to("#vb", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vg") {
    gsap.to("#vg", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vr") {
    gsap.to("#vr", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vy") {
    gsap.to("#vy", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(colrcl == "vo") {
    gsap.to("#vo", {
        duration : 1,
        scaleY : 1,
        rotate : 180,
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
if(als == "" || als == "win") {
    gsap.to("#al1", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(200,145,255)",
        borderColor : "rgb(200,145,255)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(200,145,255)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "nat") {
    gsap.to("#al2", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(200,145,255)",
        borderColor : "rgb(200,145,255)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al1, #al3, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(200,145,255)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "aut") {
    gsap.to("#al3", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(200,145,255)",
        borderColor : "rgb(200,145,255)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al1, #al4, #al5", {
        duration : 1,
        backgroundColor : "rgb(200,145,255)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "met") {
    gsap.to("#al4", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(200,145,255)",
        borderColor : "rgb(200,145,255)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al1, #al5", {
        duration : 1,
        backgroundColor : "rgb(200,145,255)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
else if(als == "spc") {
    gsap.to("#al5", {
        duration : 1,
        backgroundColor : "black",
        color : "rgb(200,145,255)",
        borderColor : "rgb(200,145,255)",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
    gsap.to("#al2, #al3, #al4, #al1", {
        duration : 1,
        backgroundColor : "rgb(200,145,255)",
        color : "black",
        borderColor : "black",
        delay : 0,
        yoyo : true,
        repeat : 0,
        ease : "none",
    });
}
}
ap =! ap;
}
document.getElementById("colrctrl").innerHTML = "vp";
}
function alt() {
var altb = document.getElementById("altc").innerHTML;
if(altb == "show") {
ap = false;
let myanim1 = gsap.to("#al1", {
duration : 0.5,
opacity : 1,
yPercent : -131,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#al2", {
duration : 0.5,
opacity : 1,
yPercent : -131,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#al3", {
duration : 0.5,
opacity : 1,
yPercent : -131,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#al4", {
duration : 0.5,
opacity : 1,
yPercent : -131,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#al5", {
duration : 0.5,
opacity : 1,
yPercent : -131,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
}
document.getElementById("altc").innerHTML = "hide";
ap =! ap;
}
if(altb == "hide") {
ap = false;
let myanim1 = gsap.to("#al1", {
duration : 0.5,
opacity : 0,
yPercent : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#al2", {
duration : 0.5,
opacity : 0,
yPercent : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#al3", {
duration : 0.5,
opacity : 0,
yPercent : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#al4", {
duration : 0.5,
opacity : 0,
yPercent : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#al5", {
duration : 0.5,
opacity : 0,
yPercent : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
}
else {
myanim1.play();
myanim2.play();
myanim3.play();
myanim4.play();
myanim5.play();
}
document.getElementById("altc").innerHTML = "show";
ap =! ap;
}
}
function win() {
var th = document.getElementById("button1").innerHTML;
var als = document.getElementById("alch").innerHTML;
var csh = document.getElementById("colrctrl").innerHTML;
if(th == "Theme : Light") {
var ap = false;
let myanim0 = gsap.to("#al1", {
duration : 0.3,
scale : 0.9,
delay : 0,
yoyo : true,
repeat : 1,
ease : "none",
paused : true,
});
let myanim1 = gsap.to("#al1", {
duration : 1,
backgroundColor : "rgb(177,196,218)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#al1", {
duration : 1,
backgroundColor : "rgb(155,255,181)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#al1", {
duration : 1,
backgroundColor : "rgb(255,157,157)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#al1", {
duration : 1,
backgroundColor : "rgb(255,255,159)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#al1", {
duration : 1,
backgroundColor : "rgb(255,182,108)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#al1", {
duration : 1,
backgroundColor : "rgb(200,145,255)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 1,
opacity : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#d1", {
duration : 1,
backgroundImage : "url('./img/img1.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#d2", {
duration : 1,
backgroundImage : "url('./img/img2.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim10 = gsap.to("#d3", {
duration : 1,
backgroundImage : "url('./img/img3.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim11 = gsap.to("#d4", {
duration : 1,
backgroundImage : "url('./img/img4.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim0.pause();
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
myanim10.pause();
myanim11.pause();
}
else {
myanim0.play();
myanim7.play();
myanim8.play();
myanim9.play();
myanim10.play();
myanim11.play();
if(csh == "" || csh == "vb") {
    myanim1.play();
}
else if(csh == "vg") {
    myanim2.play();
}
else if(csh == "vr") {
    myanim3.play();
}
else if(csh == "vy") {
    myanim4.play();
}
else if(csh == "vo") {
    myanim5.play();
}
else if(csh == "vp") {
    myanim6.play();
}
if(als == "" || als == "win") {}
else if(als == "nat") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "aut") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "met") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "spc") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
}
ap =! ap;
}
else if(th == "Theme : Dark") {
var ap = false;
let myanim0 = gsap.to("#al1", {
duration : 0.3,
scale : 0.9,
delay : 0,
yoyo : true,
repeat : 1,
ease : "none",
paused : true,
});
let myanim1 = gsap.to("#al1", {
duration : 1,
backgroundColor : "black",
color : "rgb(177,196,218)",
borderColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#al1", {
duration : 1,
backgroundColor : "black",
color : "rgb(155,255,181)",
borderColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#al1", {
duration : 1,
backgroundColor : "black",
color : "rgb(255,157,157)",
borderColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#al1", {
duration : 1,
backgroundColor : "black",
color : "rgb(255,255,159)",
borderColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#al1", {
duration : 1,
backgroundColor : "black",
color : "rgb(255,182,108)",
borderColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#al1", {
duration : 1,
backgroundColor : "black",
color : "rgb(200,145,255)",
borderColor : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 1,
opacity : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#d1", {
duration : 1,
backgroundImage : "url('./img/img1.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim9 = gsap.to("#d2", {
duration : 1,
backgroundImage : "url('./img/img2.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim10 = gsap.to("#d3", {
duration : 1,
backgroundImage : "url('./img/img3.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim11 = gsap.to("#d4", {
duration : 1,
backgroundImage : "url('./img/img4.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
if(ap) {
myanim0.pause();
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
myanim10.pause();
myanim11.pause();
}
else {
myanim0.play();
myanim7.play();
myanim8.play();
myanim9.play();
myanim10.play();
myanim11.play();
if(csh == "" || csh == "vb") {
    myanim1.play();
}
else if(csh == "vg") {
    myanim2.play();
}
else if(csh == "vr") {
    myanim3.play();
}
else if(csh == "vy") {
    myanim4.play();
}
else if(csh == "vo") {
    myanim5.play();
}
else if(csh == "vp") {
    myanim6.play();
}
if(als == "" || als == "win") {}
else if(als == "nat") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "rgb(177,196,218)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "rgb(155,255,181)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "rgb(255,157,157)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "rgb(255,255,159)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "rgb(255,182,108)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "rgb(200,145,255)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "aut") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(177,196,218)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(155,255,181)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(255,157,157)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(255,255,159)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(255,182,108)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(200,145,255)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "met") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(177,196,218)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(155,255,181)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(255,157,157)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(255,255,159)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(255,182,108)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(200,145,255)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "spc") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(177,196,218)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(155,255,181)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(255,157,157)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(255,255,159)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(255,182,108)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(200,145,255)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
}
ap =! ap;
}
document.getElementById("alch").innerHTML = "win";
}
function nat() {
var th = document.getElementById("button1").innerHTML;
var als = document.getElementById("alch").innerHTML;
var csh = document.getElementById("colrctrl").innerHTML;
if(th == "Theme : Light") {
var ap = false;
let myanim0 = gsap.to("#al2", {
duration : 0.3,
scale : 0.9,
delay : 0,
yoyo : true,
repeat : 1,
ease : "none",
paused : true,
});
let myanim1 = gsap.to("#al2", {
duration : 1,
backgroundColor : "rgb(177,196,218)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#al2", {
duration : 1,
backgroundColor : "rgb(155,255,181)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#al2", {
duration : 1,
backgroundColor : "rgb(255,157,157)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#al2", {
duration : 1,
backgroundColor : "rgb(255,255,159)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#al2", {
duration : 1,
backgroundColor : "rgb(255,182,108)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#al2", {
duration : 1,
backgroundColor : "rgb(200,145,255)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 1,
opacity : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#d1", {
duration : 1,
backgroundImage : "url('./img/n1.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim9 = gsap.to("#d2", {
duration : 1,
backgroundImage : "url('./img/n2.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim10 = gsap.to("#d3", {
duration : 1,
backgroundImage : "url('./img/n3.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim11 = gsap.to("#d4", {
duration : 1,
backgroundImage : "url('./img/n4.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
if(ap) {
myanim0.pause();
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
myanim10.pause();
myanim11.pause();
}
else {
myanim0.play();
myanim7.play();
myanim8.play();
myanim9.play();
myanim10.play();
myanim11.play();
if(csh == "" || csh == "vb") {
    myanim1.play();
}
else if(csh == "vg") {
    myanim2.play();
}
else if(csh == "vr") {
    myanim3.play();
}
else if(csh == "vy") {
    myanim4.play();
}
else if(csh == "vo") {
    myanim5.play();
}
else if(csh == "vp") {
    myanim6.play();
}
if(als == "" || als == "win") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "aut") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "met") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "spc") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
}
ap =! ap;
}
else if(th == "Theme : Dark") {
var ap = false;
let myanim0 = gsap.to("#al2", {
duration : 0.3,
scale : 0.9,
delay : 0,
yoyo : true,
repeat : 1,
ease : "none",
paused : true,
});
let myanim1 = gsap.to("#al2", {
duration : 1,
backgroundColor : "black",
color : "rgb(177,196,218)",
borderColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#al2", {
duration : 1,
backgroundColor : "black",
color : "rgb(155,255,181)",
borderColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#al2", {
duration : 1,
backgroundColor : "black",
color : "rgb(255,157,157)",
borderColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#al2", {
duration : 1,
backgroundColor : "black",
color : "rgb(255,255,159)",
borderColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#al2", {
duration : 1,
backgroundColor : "black",
color : "rgb(255,182,108)",
borderColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#al2", {
duration : 1,
backgroundColor : "black",
color : "rgb(200,145,255)",
borderColor : "rgb(200,145,255)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 1,
opacity : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#d1", {
duration : 1,
backgroundImage : "url('./img/n1.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim9 = gsap.to("#d2", {
duration : 1,
backgroundImage : "url('./img/n2.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim10 = gsap.to("#d3", {
duration : 1,
backgroundImage : "url('./img/n3.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim11 = gsap.to("#d4", {
duration : 1,
backgroundImage : "url('./img/n4.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
if(ap) {
myanim0.pause();
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
myanim10.pause();
myanim11.pause();
}
else {
myanim0.play();
myanim7.play();
myanim8.play();
myanim9.play();
myanim10.play();
myanim11.play();
if(csh == "" || csh == "vb") {
    myanim1.play();
}
else if(csh == "vg") {
    myanim2.play();
}
else if(csh == "vr") {
    myanim3.play();
}
else if(csh == "vy") {
    myanim4.play();
}
else if(csh == "vo") {
    myanim5.play();
}
else if(csh == "vp") {
    myanim6.play();
}
if(als == "" || als == "win") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "rgb(177,196,218)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "rgb(155,255,181)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "rgb(255,157,157)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "rgb(255,255,159)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "rgb(255,182,108)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "rgb(200,145,255)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "aut") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(177,196,218)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(155,255,181)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(255,157,157)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(255,255,159)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(255,182,108)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al3", {
            duration : 1,
            backgroundColor : "rgb(200,145,255)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "met") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(177,196,218)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(155,255,181)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(255,157,157)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(255,255,159)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(255,182,108)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(200,145,255)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "spc") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(177,196,218)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(155,255,181)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(255,157,157)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(255,255,159)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(255,182,108)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(200,145,255)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
}
ap =! ap;
}
document.getElementById("alch").innerHTML = "nat";
}
function aut() {
var th = document.getElementById("button1").innerHTML;
var als = document.getElementById("alch").innerHTML;
var csh = document.getElementById("colrctrl").innerHTML;
if(th == "Theme : Light") {
var ap = false;
let myanim0 = gsap.to("#al3", {
duration : 0.3,
scale : 0.9,
delay : 0,
yoyo : true,
repeat : 1,
ease : "none",
paused : true,
});
let myanim1 = gsap.to("#al3", {
duration : 1,
backgroundColor : "rgb(177,196,218)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#al3", {
duration : 1,
backgroundColor : "rgb(155,255,181)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#al3", {
duration : 1,
backgroundColor : "rgb(255,157,157)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#al3", {
duration : 1,
backgroundColor : "rgb(255,255,159)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#al3", {
duration : 1,
backgroundColor : "rgb(255,182,108)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim6 = gsap.to("#al3", {
duration : 1,
backgroundColor : "rgb(200,145,255)",
color : "black",
borderColor : "black",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim7 = gsap.to("#d1, #d2, #d3, #d4", {
duration : 1,
opacity : 0,
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim8 = gsap.to("#d1", {
duration : 1,
backgroundImage : "url('./img/a1.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim9 = gsap.to("#d2", {
duration : 1,
backgroundImage : "url('./img/a2.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim10 = gsap.to("#d3", {
duration : 1,
backgroundImage : "url('./img/a3.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
let myanim11 = gsap.to("#d4", {
duration : 1,
backgroundImage : "url('./img/a4.jpeg')",
opacity : 1,
delay : 1,
yoyo : true,
repeat : 0,
ease : "power2.inOut",
paused : true,
});
if(ap) {
myanim0.pause();
myanim1.pause();
myanim2.pause();
myanim3.pause();
myanim4.pause();
myanim5.pause();
myanim6.pause();
myanim7.pause();
myanim8.pause();
myanim9.pause();
myanim10.pause();
myanim11.pause();
}
else {
myanim0.play();
myanim7.play();
myanim8.play();
myanim9.play();
myanim10.play();
myanim11.play();
if(csh == "" || csh == "vb") {
    myanim1.play();
}
else if(csh == "vg") {
    myanim2.play();
}
else if(csh == "vr") {
    myanim3.play();
}
else if(csh == "vy") {
    myanim4.play();
}
else if(csh == "vo") {
    myanim5.play();
}
else if(csh == "vp") {
    myanim6.play();
}
if(als == "" || als == "win") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al1", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "nat") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al2", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "met") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
else if(als == "spc") {
    if(csh == "" || csh == "vb") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vg") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vr") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vy") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vo") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
    else if(csh == "vp") {
        gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
        });
    }
}
}
ap =! ap;
}
else if(th == "Theme : Dark") {
var ap = false;
let myanim0 = gsap.to("#al3", {
duration : 0.3,
scale : 0.9,
delay : 0,
yoyo : true,
repeat : 1,
ease : "none",
paused : true,
});
let myanim1 = gsap.to("#al3", {
duration : 1,
backgroundColor : "black",
color : "rgb(177,196,218)",
borderColor : "rgb(177,196,218)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim2 = gsap.to("#al3", {
duration : 1,
backgroundColor : "black",
color : "rgb(155,255,181)",
borderColor : "rgb(155,255,181)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim3 = gsap.to("#al3", {
duration : 1,
backgroundColor : "black",
color : "rgb(255,157,157)",
borderColor : "rgb(255,157,157)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim4 = gsap.to("#al3", {
duration : 1,
backgroundColor : "black",
color : "rgb(255,255,159)",
borderColor : "rgb(255,255,159)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
let myanim5 = gsap.to("#al3", {
duration : 1,
backgroundColor : "black",
color : "rgb(255,182,108)",
borderColor : "rgb(255,182,108)",
delay : 0,
yoyo : true,
repeat : 0,
ease : "none",
paused : true,
});
        let myanim6 = gsap.to("#al3", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "rgb(200,145,255)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim7 = gsap.to("#d1, #d2, #d3, #d4", {
            duration : 1,
            opacity : 0,
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim8 = gsap.to("#d1", {
            duration : 1,
            backgroundImage : "url('./img/a1.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim9 = gsap.to("#d2", {
            duration : 1,
            backgroundImage : "url('./img/a2.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim10 = gsap.to("#d3", {
            duration : 1,
            backgroundImage : "url('./img/a3.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim11 = gsap.to("#d4", {
            duration : 1,
            backgroundImage : "url('./img/a4.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        if(ap) {
            myanim0.pause();
            myanim1.pause();
            myanim2.pause();
            myanim3.pause();
            myanim4.pause();
            myanim5.pause();
            myanim6.pause();
            myanim7.pause();
            myanim8.pause();
            myanim9.pause();
            myanim10.pause();
            myanim11.pause();
        }
        else {
            myanim0.play();
            myanim7.play();
            myanim8.play();
            myanim9.play();
            myanim10.play();
            myanim11.play();
            if(csh == "" || csh == "vb") {
                myanim1.play();
            }
            else if(csh == "vg") {
                myanim2.play();
            }
            else if(csh == "vr") {
                myanim3.play();
            }
            else if(csh == "vy") {
                myanim4.play();
            }
            else if(csh == "vo") {
                myanim5.play();
            }
            else if(csh == "vp") {
                myanim6.play();
            }
            if(als == "" || als == "win") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "nat") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "met") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "spc") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
        }
        ap =! ap;
    }
    document.getElementById("alch").innerHTML = "aut";
}
function met() {
    var th = document.getElementById("button1").innerHTML;
    var als = document.getElementById("alch").innerHTML;
    var csh = document.getElementById("colrctrl").innerHTML;
    if(th == "Theme : Light") {
        var ap = false;
        let myanim0 = gsap.to("#al4", {
            duration : 0.3,
            scale : 0.9,
            delay : 0,
            yoyo : true,
            repeat : 1,
            ease : "none",
            paused : true,
        });
        let myanim1 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(177,196,218)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim2 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(155,255,181)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim3 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(255,157,157)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim4 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(255,255,159)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim5 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(255,182,108)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim6 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "rgb(200,145,255)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim7 = gsap.to("#d1, #d2, #d3, #d4", {
            duration : 1,
            opacity : 0,
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim8 = gsap.to("#d1", {
            duration : 1,
            backgroundImage : "url('./img/m1.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim9 = gsap.to("#d2", {
            duration : 1,
            backgroundImage : "url('./img/m2.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim10 = gsap.to("#d3", {
            duration : 1,
            backgroundImage : "url('./img/m3.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim11 = gsap.to("#d4", {
            duration : 1,
            backgroundImage : "url('./img/m4.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        if(ap) {
            myanim0.pause();
            myanim1.pause();
            myanim2.pause();
            myanim3.pause();
            myanim4.pause();
            myanim5.pause();
            myanim6.pause();
            myanim7.pause();
            myanim8.pause();
            myanim9.pause();
            myanim10.pause();
            myanim11.pause();
        }
        else {
            myanim0.play();
            myanim7.play();
            myanim8.play();
            myanim9.play();
            myanim10.play();
            myanim11.play();
            if(csh == "" || csh == "vb") {
                myanim1.play();
            }
            else if(csh == "vg") {
                myanim2.play();
            }
            else if(csh == "vr") {
                myanim3.play();
            }
            else if(csh == "vy") {
                myanim4.play();
            }
            else if(csh == "vo") {
                myanim5.play();
            }
            else if(csh == "vp") {
                myanim6.play();
            }
            if(als == "" || als == "win") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(177,196,218)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(155,255,181)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,157,157)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,255,159)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,182,108)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(200,145,255)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "aut") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(177,196,218)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(155,255,181)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,157,157)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,255,159)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,182,108)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(200,145,255)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "nat") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(177,196,218)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(155,255,181)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,157,157)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,255,159)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,182,108)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(200,145,255)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "spc") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(177,196,218)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(155,255,181)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,157,157)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,255,159)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,182,108)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(200,145,255)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
        }
        ap =! ap;
    }
    else if(th == "Theme : Dark") {
        var ap = false;
        let myanim0 = gsap.to("#al4", {
            duration : 0.3,
            scale : 0.9,
            delay : 0,
            yoyo : true,
            repeat : 1,
            ease : "none",
            paused : true,
        });
        let myanim1 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "rgb(177,196,218)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim2 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "rgb(155,255,181)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim3 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "rgb(255,157,157)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim4 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "rgb(255,255,159)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim5 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "rgb(255,182,108)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim6 = gsap.to("#al4", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "rgb(200,145,255)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim7 = gsap.to("#d1, #d2, #d3, #d4", {
            duration : 1,
            opacity : 0,
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim8 = gsap.to("#d1", {
            duration : 1,
            backgroundImage : "url('./img/m1.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim9 = gsap.to("#d2", {
            duration : 1,
            backgroundImage : "url('./img/m2.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim10 = gsap.to("#d3", {
            duration : 1,
            backgroundImage : "url('./img/m3.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim11 = gsap.to("#d4", {
            duration : 1,
            backgroundImage : "url('./img/m4.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        if(ap) {
            myanim0.pause();
            myanim1.pause();
            myanim2.pause();
            myanim3.pause();
            myanim4.pause();
            myanim5.pause();
            myanim6.pause();
            myanim7.pause();
            myanim8.pause();
            myanim9.pause();
            myanim10.pause();
            myanim11.pause();
        }
        else {
            myanim0.play();
            myanim7.play();
            myanim8.play();
            myanim9.play();
            myanim10.play();
            myanim11.play();
            if(csh == "" || csh == "vb") {
                myanim1.play();
            }
            else if(csh == "vg") {
                myanim2.play();
            }
            else if(csh == "vr") {
                myanim3.play();
            }
            else if(csh == "vy") {
                myanim4.play();
            }
            else if(csh == "vo") {
                myanim5.play();
            }
            else if(csh == "vp") {
                myanim6.play();
            }
            if(als == "" || als == "win") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "aut") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "nat") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "spc") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al5", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
        }
        ap =! ap;
    }
    document.getElementById("alch").innerHTML = "met";
}
function spc() {
    var th = document.getElementById("button1").innerHTML;
    var als = document.getElementById("alch").innerHTML;
    var csh = document.getElementById("colrctrl").innerHTML;
    if(th == "Theme : Light") {
        var ap = false;
        let myanim0 = gsap.to("#al5", {
            duration : 0.3,
            scale : 0.9,
            delay : 0,
            yoyo : true,
            repeat : 1,
            ease : "none",
            paused : true,
        });
        let myanim1 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(177,196,218)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim2 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(155,255,181)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim3 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(255,157,157)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim4 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(255,255,159)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim5 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(255,182,108)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim6 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "rgb(200,145,255)",
            color : "black",
            borderColor : "black",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim7 = gsap.to("#d1, #d2, #d3, #d4", {
            duration : 1,
            opacity : 0,
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim8 = gsap.to("#d1", {
            duration : 1,
            backgroundImage : "url('./img/s1.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim9 = gsap.to("#d2", {
            duration : 1,
            backgroundImage : "url('./img/s2.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim10 = gsap.to("#d3", {
            duration : 1,
            backgroundImage : "url('./img/s3.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim11 = gsap.to("#d4", {
            duration : 1,
            backgroundImage : "url('./img/s4.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        if(ap) {
            myanim0.pause();
            myanim1.pause();
            myanim2.pause();
            myanim3.pause();
            myanim4.pause();
            myanim5.pause();
            myanim6.pause();
            myanim7.pause();
            myanim8.pause();
            myanim9.pause();
            myanim10.pause();
            myanim11.pause();
        }
        else {
            myanim0.play();
            myanim7.play();
            myanim8.play();
            myanim9.play();
            myanim10.play();
            myanim11.play();
            if(csh == "" || csh == "vb") {
                myanim1.play();
            }
            else if(csh == "vg") {
                myanim2.play();
            }
            else if(csh == "vr") {
                myanim3.play();
            }
            else if(csh == "vy") {
                myanim4.play();
            }
            else if(csh == "vo") {
                myanim5.play();
            }
            else if(csh == "vp") {
                myanim6.play();
            }
            if(als == "" || als == "win") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(177,196,218)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(155,255,181)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,157,157)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,255,159)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,182,108)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(200,145,255)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "aut") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(177,196,218)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(155,255,181)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,157,157)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,255,159)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,182,108)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(200,145,255)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "met") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(177,196,218)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(155,255,181)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,157,157)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,255,159)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,182,108)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(200,145,255)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "nat") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(177,196,218)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(155,255,181)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,157,157)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,255,159)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(255,182,108)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "black",
                        color : "rgb(200,145,255)",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
        }
        ap =! ap;
    }
    else if(th == "Theme : Dark") {
        var ap = false;
        let myanim0 = gsap.to("#al5", {
            duration : 0.3,
            scale : 0.9,
            delay : 0,
            yoyo : true,
            repeat : 1,
            ease : "none",
            paused : true,
        });
        let myanim1 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(177,196,218)",
            borderColor : "rgb(177,196,218)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim2 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(155,255,181)",
            borderColor : "rgb(155,255,181)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim3 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,157,157)",
            borderColor : "rgb(255,157,157)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim4 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,255,159)",
            borderColor : "rgb(255,255,159)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim5 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(255,182,108)",
            borderColor : "rgb(255,182,108)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim6 = gsap.to("#al5", {
            duration : 1,
            backgroundColor : "black",
            color : "rgb(200,145,255)",
            borderColor : "rgb(200,145,255)",
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim7 = gsap.to("#d1, #d2, #d3, #d4", {
            duration : 1,
            opacity : 0,
            delay : 0,
            yoyo : true,
            repeat : 0,
            ease : "none",
            paused : true,
        });
        let myanim8 = gsap.to("#d1", {
            duration : 1,
            backgroundImage : "url('./img/s1.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim9 = gsap.to("#d2", {
            duration : 1,
            backgroundImage : "url('./img/s2.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim10 = gsap.to("#d3", {
            duration : 1,
            backgroundImage : "url('./img/s3.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        let myanim11 = gsap.to("#d4", {
            duration : 1,
            backgroundImage : "url('./img/s4.jpeg')",
            opacity : 1,
            delay : 1,
            yoyo : true,
            repeat : 0,
            ease : "power2.inOut",
            paused : true,
        });
        if(ap) {
            myanim0.pause();
            myanim1.pause();
            myanim2.pause();
            myanim3.pause();
            myanim4.pause();
            myanim5.pause();
            myanim6.pause();
            myanim7.pause();
            myanim8.pause();
            myanim9.pause();
            myanim10.pause();
            myanim11.pause();
        }
        else {
            myanim0.play();
            myanim7.play();
            myanim8.play();
            myanim9.play();
            myanim10.play();
            myanim11.play();
            if(csh == "" || csh == "vb") {
                myanim1.play();
            }
            else if(csh == "vg") {
                myanim2.play();
            }
            else if(csh == "vr") {
                myanim3.play();
            }
            else if(csh == "vy") {
                myanim4.play();
            }
            else if(csh == "vo") {
                myanim5.play();
            }
            else if(csh == "vp") {
                myanim6.play();
            }
            if(als == "" || als == "win") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al1", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "aut") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al3", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "met") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al4", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
            else if(als == "nat") {
                if(csh == "" || csh == "vb") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(177,196,218)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vg") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(155,255,181)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vr") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(255,157,157)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vy") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(255,255,159)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vo") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(255,182,108)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
                else if(csh == "vp") {
                    gsap.to("#al2", {
                        duration : 1,
                        backgroundColor : "rgb(200,145,255)",
                        color : "black",
                        borderColor : "black",
                        delay : 0,
                        yoyo : true,
                        repeat : 0,
                        ease : "none",
                    });
                }
            }
        }
        ap =! ap;
    }
    document.getElementById("alch").innerHTML = "spc";
}
function mrf() {
    var als = document.getElementById("alch").innerHTML;
    var th = document.getElementById("button1").innerHTML;
    var colrcl = document.getElementById("colrctrl").innerHTML;
    var slc = document.getElementById("sls").innerHTML;
    if(slc == "start") {
        document.getElementById("sls").innerHTML = "stop";
        if(als == "" || als == "win") {
            var ap = true;
            let tl = gsap.timeline({yoyo : false,ease : "none", overwrite : true,});
            let my1anim1 = gsap.fromTo("#ball", {
                opacity : 1,
                scale : 0,
                zIndex : 1,
                delay : 0.1,
            }, {
                duration : 8,
                scaleX : 40,
                scaleY : 40,
                skewX : 50,
                backgroundColor : "white",
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim2 = gsap.to("#button3", {
                duration : 1,
                scale : 0,
                delay : 0,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim3 = gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {
                duration : 0.1,
                opacity : 0,
                delay : 8.1,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim4 = gsap.to("#button1,#button2,#button3", {
                duration : 0.1,
                scale : 0,
                delay : 8.1,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim5 = gsap.to("#ball2", {
                duration : 0.1,
                scale : 50,
                zIndex : 2,
                delay : 0,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim6 = gsap.to("#al1, #al2, #al3, #al4, #al5", {
                duration : 0.1,
                opacity : 0,
                delay : 8.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim7 = gsap.to(".d1", {
                duration : 0.1,
                backgroundImage : "url('./img/img1.jpeg')",
                delay : 8.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim8 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 8.2,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim9 = gsap.to("#ball", {
                duration : 2,
                opacity : 1,
                delay : 13,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim10 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/img2.jpeg')",
                delay : 15.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim11 = gsap.to("#ball", {
                duration : 8,
                scale : 0,
                skewX : -50,
                rotate : 90,
                backgroundColor : "black",
                delay : 15.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim12 = gsap.to("#ball", {
                duration : 8,
                scale : 40,
                skewX : 50,
                rotate : -90,
                backgroundColor : "white",
                delay : 28,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim13 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/img3.jpeg')",
                delay : 36.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim14 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 36.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim15 = gsap.to("#ball", {
                duration : 2,
                opacity : 1,
                delay : 43,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim16 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/img4.jpeg')",
                delay : 45.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim17 = gsap.to("#ball", {
                duration : 8,
                scale : 0,
                skewX : -50,
                rotate : 90,
                backgroundColor : "black",
                delay : 45.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim18 = gsap.to("#ball", {
                duration : 8,
                scale : 40,
                skewX : 50,
                rotate : -90,
                backgroundColor : "white",
                delay : 57.8,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim19 = gsap.to("#button3", {
                duration : 0.1,
                scale : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim20 = gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {
                duration : 0.1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim21 = gsap.to("#button1,#button2,#button3", {
                duration : 0.1,
                scale : 1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim22 = gsap.to("#ball2", {
                duration : 0.1,
                scale : 1,
                zIndex : -1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim23 = gsap.to("#al1, #al2, #al3, #al4, #al5", {
                duration : 0.1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim24 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "black",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim25_1 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(177,196,218)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim25_2 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(155,255,181)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim25_3 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,157,157)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim25_4 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,255,159)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim25_5 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,182,108)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim25_6 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(200,145,255)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim26 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 66.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my1anim27 = gsap.set("#ball", {
                scale : 1,
                skewX : 0,
                rotate : 90,
                zIndex : -1,
                backgroundColor : "black",
                delay : 68.2,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            if(ap) {
                var p1 = 1;
                var r1 = 0;
                tl.add(my1anim1).add(my1anim2).add(my1anim3).add(my1anim4).add(my1anim5)
                    .add(my1anim6).add(my1anim7).add(my1anim8).add(my1anim9).add(my1anim10)
                    .add(my1anim11).add(my1anim12).add(my1anim13).add(my1anim14).add(my1anim15)
                    .add(my1anim16).add(my1anim17).add(my1anim18).add(my1anim19).add(my1anim20)
                    .add(my1anim21).add(my1anim22).add(my1anim23).add(my1anim24).add(my1anim25_1)
                    .add(my1anim25_2).add(my1anim25_3).add(my1anim25_4).add(my1anim25_4).add(my1anim25_5)
                    .add(my1anim25_6).add(my1anim26).add(my1anim27);
                document.addEventListener("keydown",handleKeyDown);
                function handleKeyDown(event) {
                    if(event.key === "p") {
                        if(p1 == 1) {
                            event.preventDefault();
                            console.log("Slide Show is Paused");
                            tl.pause();
                            p1 = p1-1;
                            r1 = r1+1;
                        }
                    }
                    if(event.key === "r") {
                        console.log("Slide Show is Resumed");
                        if(r1 == 1) {
                            tl.resume();
                            if(th == "Theme : Light") {
                                if(colrcl == "" || colrcl == "vb") {
                                    my1anim25_1.resume();
                                }
                                else if(colrcl == "vg") {
                                    my1anim25_2.resume();
                                }
                                else if(colrcl == "vr") {
                                    my1anim25_3.resume();
                                }
                                else if(colrcl == "vy") {
                                    my1anim25_4.resume();
                                }
                                else if(colrcl == "vo") {
                                    my1anim25_5.resume();
                                }
                                else if(colrcl == "vp") {
                                    my1anim25_6.resume();
                                }	
                            }
                            else if(th == "Theme : Dark") {
                                my1anim24.resume();
                            }
                            my1anim26.resume();my1anim27.resume();
                            r1 = r1-1;
                            p1 = p1+1;
                        }
                    }
                    if(event.key === "q") {
                        event.preventDefault();
                        console.log("Escaped from Slide Show");
                        gsap.to("#ball3", {duration : 0.5,opacity : 1,scale : 50,zIndex : 3,yoyo : false,ease : "none",});
                        gsap.to("#button3", {duration : 0.1,scale : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {duration : 0.1,opacity : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#button1,#button2,#button3", {duration : 0.1,scale : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#ball2", {duration : 0.1,scale : 1,zIndex : -1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#al1, #al2, #al3, #al4, #al5", {duration : 0.1,opacity : 1,delay : 0.6,yoyo : false,ease : "none",});
                        if(th == "Theme : Light") {
                            if(colrcl == "" || colrcl == "vb") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(177,196,218)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vg") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(155,255,181)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vr") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,157,157)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vy") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,255,159)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vo") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,182,108)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vp") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(200,145,255)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }	
                        }
                        else if(th == "Theme : Dark") {
                            gsap.to(".d1", {duration : 0.1,backgroundColor : "black",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                        }
                        gsap.to("#ball", {duration : 0.1,opacity : 0,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.set("#ball", {scale : 1,skewX : 0,rotate : 90,zIndex : -1,backgroundColor : "black",delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#ball3", {duration : 0.5,opacity : 0,scale : 1,zIndex : -1,delay : 0.8,yoyo : false,ease : "none",});
                        tl.pause();
                    }
                }
                my1anim5.play();my1anim1.play();my1anim2.play();my1anim3.play();my1anim4.play();
                my1anim6.play();my1anim7.play();my1anim8.play();my1anim9.play();my1anim10.play();
                my1anim11.play();my1anim12.play();my1anim13.play();my1anim14.play();my1anim15.play();
                my1anim16.play();my1anim17.play();my1anim18.play();my1anim19.play();my1anim20.play();
                my1anim21.play();my1anim22.play();my1anim23.play();
                if(th == "Theme : Light") {
                    if(colrcl == "" || colrcl == "vb") {
                        my1anim25_1.play();
                    }
                    else if(colrcl == "vg") {
                        my1anim25_2.play();
                    }
                    else if(colrcl == "vr") {
                        my1anim25_3.play();
                    }
                    else if(colrcl == "vy") {
                        my1anim25_4.play();
                    }
                    else if(colrcl == "vo") {
                        my1anim25_5.play();
                    }
                    else if(colrcl == "vp") {
                        my1anim25_6.play();
                    }	
                }
                else if(th == "Theme : Dark") {
                    my1anim24.play();
                }
                my1anim26.play();my1anim27.play();
            }
            document.getElementById("sls").innerHTML = "start";
        }
        else if(als == "nat") {
            var ap = true;
            let tl1 = gsap.timeline({yoyo : false,ease : "none",overwrite : true,});
            let my2anim1 = gsap.fromTo("#ball", {
                opacity : 1,
                scale : 0,
                zIndex : 1,
                delay : 0.1,
            }, {
                duration : 8,
                scaleX : 40,
                scaleY : 40,
                skewX : 50,
                backgroundColor : "white",
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim2 = gsap.to("#button3", {
                duration : 1,
                scale : 0,
                delay : 0,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim3 = gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {
                duration : 0.1,
                opacity : 0,
                delay : 8.1,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim4 = gsap.to("#button1,#button2,#button3", {
                duration : 0.1,
                scale : 0,
                delay : 8.1,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim5 = gsap.to("#ball2", {
                duration : 0.1,
                scale : 50,
                zIndex : 2,
                delay : 0,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim6 = gsap.to("#al1, #al2, #al3, #al4, #al5", {
                duration : 0.1,
                opacity : 0,
                delay : 8.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim7 = gsap.to(".d1", {
                duration : 0.1,
                backgroundImage : "url('./img/n1.jpeg')",
                delay : 8.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim8 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 8.2,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim9 = gsap.to("#ball", {
                duration : 2,
                opacity : 1,
                delay : 13,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim10 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/n2.jpeg')",
                delay : 15.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim11 = gsap.to("#ball", {
                duration : 8,
                scale : 0,
                skewX : -50,
                rotate : 90,
                backgroundColor : "black",
                delay : 15.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim12 = gsap.to("#ball", {
                duration : 8,
                scale : 40,
                skewX : 50,
                rotate : -90,
                backgroundColor : "white",
                delay : 28,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim13 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/n3.jpeg')",
                delay : 36.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim14 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 36.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim15 = gsap.to("#ball", {
                duration : 2,
                opacity : 1,
                delay : 43,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim16 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/n4.jpeg')",
                delay : 45.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim17 = gsap.to("#ball", {
                duration : 8,
                scale : 0,
                skewX : -50,
                rotate : 90,
                backgroundColor : "black",
                delay : 45.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim18 = gsap.to("#ball", {
                duration : 8,
                scale : 40,
                skewX : 50,
                rotate : -90,
                backgroundColor : "white",
                delay : 57.8,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim19 = gsap.to("#button3", {
                duration : 0.1,
                scale : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim20 = gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {
                duration : 0.1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim21 = gsap.to("#button1,#button2,#button3", {
                duration : 0.1,
                scale : 1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim22 = gsap.to("#ball2", {
                duration : 0.1,
                scale : 1,
                zIndex : -1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim23 = gsap.to("#al1, #al2, #al3, #al4, #al5", {
                duration : 0.1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim24 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "black",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim25_1 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(177,196,218)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim25_2 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(155,255,181)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim25_3 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,157,157)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim25_4 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,255,159)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim25_5 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,182,108)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim25_6 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(200,145,255)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim26 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 66.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my2anim27 = gsap.set("#ball", {
                scale : 1,
                skewX : 0,
                rotate : 90,
                zIndex : -1,
                backgroundColor : "black",
                delay : 68.2,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            if(ap) {
                var p2 = 1;
                var r2 = 0;
                tl1.add(my2anim1).add(my2anim2).add(my2anim3).add(my2anim4).add(my2anim5)
                    .add(my2anim6).add(my2anim7).add(my2anim8).add(my2anim9).add(my2anim10)
                    .add(my2anim11).add(my2anim12).add(my2anim13).add(my2anim14).add(my2anim15)
                    .add(my2anim16).add(my2anim17).add(my2anim18).add(my2anim19).add(my2anim20)
                    .add(my2anim21).add(my2anim22).add(my2anim23).add(my2anim24).add(my2anim25_1)
                    .add(my2anim25_2).add(my2anim25_3).add(my2anim25_4).add(my2anim25_4).add(my2anim25_5)
                    .add(my2anim25_6).add(my2anim26).add(my2anim27);
                document.addEventListener("keydown",handleKeyDown);
                function handleKeyDown(event) {
                    if(event.key === "p") {
                        if(p2 == 1) {
                            event.preventDefault();
                            console.log("Slide Show is Paused");
                            tl1.pause();
                            p2 = p2-1;
                            r2 = r2+1;
                        }
                    }
                    if(event.key === "r") {
                        console.log("Slide Show is Resumed");
                        if(r2 == 1) {
                            tl1.resume();
                            if(th == "Theme : Light") {
                                if(colrcl == "" || colrcl == "vb") {
                                    my2anim25_1.resume();
                                }
                                else if(colrcl == "vg") {
                                    my2anim25_2.resume();
                                }
                                else if(colrcl == "vr") {
                                    my2anim25_3.resume();
                                }
                                else if(colrcl == "vy") {
                                    my2anim25_4.resume();
                                }
                                else if(colrcl == "vo") {
                                    my2anim25_5.resume();
                                }
                                else if(colrcl == "vp") {
                                    my2anim25_6.resume();
                                }	
                            }
                            else if(th == "Theme : Dark") {
                                my2anim24.resume();
                            }
                            my2anim26.resume();my2anim27.resume();
                            r2 = r2-1;
                            p2 = p2+1;
                        }
                    }
                    if(event.key === "q") {
                        event.preventDefault();
                        console.log("Escaped from Slide Show");
                        gsap.to("#ball3", {duration : 0.5,opacity : 1,scale : 50,zIndex : 3,yoyo : false,ease : "none",});
                        gsap.to("#button3", {duration : 0.1,scale : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {duration : 0.1,opacity : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#button1,#button2,#button3", {duration : 0.1,scale : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#ball2", {duration : 0.1,scale : 1,zIndex : -1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#al1, #al2, #al3, #al4, #al5", {duration : 0.1,opacity : 1,delay : 0.6,yoyo : false,ease : "none",});
                        if(th == "Theme : Light") {
                            if(colrcl == "" || colrcl == "vb") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(177,196,218)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vg") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(155,255,181)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vr") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,157,157)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vy") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,255,159)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vo") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,182,108)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vp") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(200,145,255)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }	
                        }
                        else if(th == "Theme : Dark") {
                            gsap.to(".d1", {duration : 0.1,backgroundColor : "black",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                        }
                        gsap.to("#ball", {duration : 0.1,opacity : 0,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.set("#ball", {scale : 1,skewX : 0,rotate : 90,zIndex : -1,backgroundColor : "black",delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#ball3", {duration : 0.5,opacity : 0,scale : 1,zIndex : -1,delay : 0.8,yoyo : false,ease : "none",});
                        tl1.pause();
                    }
                }
                my2anim5.play();my2anim1.play();my2anim2.play();my2anim3.play();my2anim4.play();
                my2anim6.play();my2anim7.play();my2anim8.play();my2anim9.play();my2anim10.play();
                my2anim11.play();my2anim12.play();my2anim13.play();my2anim14.play();my2anim15.play();
                my2anim16.play();my2anim17.play();my2anim18.play();my2anim19.play();my2anim20.play();
                my2anim21.play();my2anim22.play();my2anim23.play();
                if(th == "Theme : Light") {
                    if(colrcl == "" || colrcl == "vb") {
                        my2anim25_1.play();
                    }
                    else if(colrcl == "vg") {
                        my2anim25_2.play();
                    }
                    else if(colrcl == "vr") {
                        my2anim25_3.play();
                    }
                    else if(colrcl == "vy") {
                        my2anim25_4.play();
                    }
                    else if(colrcl == "vo") {
                        my2anim25_5.play();
                    }
                    else if(colrcl == "vp") {
                        my2anim25_6.play();
                    }	
                }
                else if(th == "Theme : Dark") {
                    my2anim24.play();
                }
                my2anim26.play();my2anim27.play();
            }
            document.getElementById("sls").innerHTML = "start";
        }
        else if(als == "aut") {
            var ap = true;
            let tl2 = gsap.timeline({yoyo : false,ease : "none",overwrite : true,});
            let my3anim1 = gsap.fromTo("#ball", {
                opacity : 1,
                scale : 0,
                zIndex : 1,
                delay : 0.1,
            }, {
                duration : 8,
                scaleX : 40,
                scaleY : 40,
                skewX : 50,
                backgroundColor : "white",
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim2 = gsap.to("#button3", {
                duration : 1,
                scale : 0,
                delay : 0,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim3 = gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {
                duration : 0.1,
                opacity : 0,
                delay : 8.1,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim4 = gsap.to("#button1,#button2,#button3", {
                duration : 0.1,
                scale : 0,
                delay : 8.1,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim5 = gsap.to("#ball2", {
                duration : 0.1,
                scale : 50,
                zIndex : 2,
                delay : 0,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim6 = gsap.to("#al1, #al2, #al3, #al4, #al5", {
                duration : 0.1,
                opacity : 0,
                delay : 8.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim7 = gsap.to(".d1", {
                duration : 0.1,
                backgroundImage : "url('./img/a1.jpeg')",
                delay : 8.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim8 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 8.2,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim9 = gsap.to("#ball", {
                duration : 2,
                opacity : 1,
                delay : 13,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim10 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/a2.jpeg')",
                delay : 15.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim11 = gsap.to("#ball", {
                duration : 8,
                scale : 0,
                skewX : -50,
                rotate : 90,
                backgroundColor : "black",
                delay : 15.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim12 = gsap.to("#ball", {
                duration : 8,
                scale : 40,
                skewX : 50,
                rotate : -90,
                backgroundColor : "white",
                delay : 28,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim13 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/a3.jpeg')",
                delay : 36.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim14 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 36.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim15 = gsap.to("#ball", {
                duration : 2,
                opacity : 1,
                delay : 43,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim16 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/a4.jpeg')",
                delay : 45.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim17 = gsap.to("#ball", {
                duration : 8,
                scale : 0,
                skewX : -50,
                rotate : 90,
                backgroundColor : "black",
                delay : 45.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim18 = gsap.to("#ball", {
                duration : 8,
                scale : 40,
                skewX : 50,
                rotate : -90,
                backgroundColor : "white",
                delay : 57.8,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim19 = gsap.to("#button3", {
                duration : 0.1,
                scale : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim20 = gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {
                duration : 0.1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim21 = gsap.to("#button1,#button2,#button3", {
                duration : 0.1,
                scale : 1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim22 = gsap.to("#ball2", {
                duration : 0.1,
                scale : 1,
                zIndex : -1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim23 = gsap.to("#al1, #al2, #al3, #al4, #al5", {
                duration : 0.1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim24 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "black",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim25_1 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(177,196,218)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim25_2 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(155,255,181)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim25_3 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,157,157)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim25_4 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,255,159)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim25_5 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,182,108)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim25_6 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(200,145,255)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim26 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 66.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my3anim27 = gsap.set("#ball", {
                scale : 1,
                skewX : 0,
                rotate : 90,
                zIndex : -1,
                backgroundColor : "black",
                delay : 68.2,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            if(ap) {
                var p3 = 1;
                var r3 = 0;
                tl2.add(my3anim1).add(my3anim2).add(my3anim3).add(my3anim4).add(my3anim5)
                    .add(my3anim6).add(my3anim7).add(my3anim8).add(my3anim9).add(my3anim10)
                    .add(my3anim11).add(my3anim12).add(my3anim13).add(my3anim14).add(my3anim15)
                    .add(my3anim16).add(my3anim17).add(my3anim18).add(my3anim19).add(my3anim20)
                    .add(my3anim21).add(my3anim22).add(my3anim23).add(my3anim24).add(my3anim25_1)
                    .add(my3anim25_2).add(my3anim25_3).add(my3anim25_4).add(my3anim25_4).add(my3anim25_5)
                    .add(my3anim25_6).add(my3anim26).add(my3anim27);
                document.addEventListener("keydown",handleKeyDown);
                function handleKeyDown(event) {
                    if(event.key === "p") {
                        if(p3 == 1) {
                            event.preventDefault();
                            console.log("Slide Show is Paused");
                            tl2.pause();
                            p3 = p3-1;
                            r3 = r3+1;
                        }
                    }
                    if(event.key === "r") {
                        console.log("Slide Show is Resumed");
                        if(r3 == 1) {
                            tl2.resume();
                            if(th == "Theme : Light") {
                                if(colrcl == "" || colrcl == "vb") {
                                    my3anim25_1.resume();
                                }
                                else if(colrcl == "vg") {
                                    my3anim25_2.resume();
                                }
                                else if(colrcl == "vr") {
                                    my3anim25_3.resume();
                                }
                                else if(colrcl == "vy") {
                                    my3anim25_4.resume();
                                }
                                else if(colrcl == "vo") {
                                    my3anim25_5.resume();
                                }
                                else if(colrcl == "vp") {
                                    my3anim25_6.resume();
                                }	
                            }
                            else if(th == "Theme : Dark") {
                                my3anim24.resume();
                            }
                            my3anim26.resume();my3anim27.resume();
                            r3 = r3-1;
                            p3 = p3+1;
                        }
                    }
                    if(event.key === "q") {
                        event.preventDefault();
                        console.log("Escaped from Slide Show");
                        gsap.to("#ball3", {duration : 0.5,opacity : 1,scale : 50,zIndex : 3,yoyo : false,ease : "none",});
                        gsap.to("#button3", {duration : 0.1,scale : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {duration : 0.1,opacity : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#button1,#button2,#button3", {duration : 0.1,scale : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#ball2", {duration : 0.1,scale : 1,zIndex : -1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#al1, #al2, #al3, #al4, #al5", {duration : 0.1,opacity : 1,delay : 0.6,yoyo : false,ease : "none",});
                        if(th == "Theme : Light") {
                            if(colrcl == "" || colrcl == "vb") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(177,196,218)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vg") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(155,255,181)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vr") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,157,157)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vy") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,255,159)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vo") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,182,108)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vp") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(200,145,255)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }	
                        }
                        else if(th == "Theme : Dark") {
                            gsap.to(".d1", {duration : 0.1,backgroundColor : "black",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                        }
                        gsap.to("#ball", {duration : 0.1,opacity : 0,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.set("#ball", {scale : 1,skewX : 0,rotate : 90,zIndex : -1,backgroundColor : "black",delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#ball3", {duration : 0.5,opacity : 0,scale : 1,zIndex : -1,delay : 0.8,yoyo : false,ease : "none",});
                        tl2.pause();
                    }
                }
                my3anim5.play();my3anim1.play();my3anim2.play();my3anim3.play();my3anim4.play();
                my3anim6.play();my3anim7.play();my3anim8.play();my3anim9.play();my3anim10.play();
                my3anim11.play();my3anim12.play();my3anim13.play();my3anim14.play();my3anim15.play();
                my3anim16.play();my3anim17.play();my3anim18.play();my3anim19.play();my3anim20.play();
                my3anim21.play();my3anim22.play();my3anim23.play();
                if(th == "Theme : Light") {
                    if(colrcl == "" || colrcl == "vb") {
                        my3anim25_1.play();
                    }
                    else if(colrcl == "vg") {
                        my3anim25_2.play();
                    }
                    else if(colrcl == "vr") {
                        my3anim25_3.play();
                    }
                    else if(colrcl == "vy") {
                        my3anim25_4.play();
                    }
                    else if(colrcl == "vo") {
                        my3anim25_5.play();
                    }
                    else if(colrcl == "vp") {
                        my3anim25_6.play();
                    }	
                }
                else if(th == "Theme : Dark") {
                    my3anim24.play();
                }
                my3anim26.play();my3anim27.play();
            }
            document.getElementById("sls").innerHTML = "start";
        }
        else if(als == "met") {
            var ap = true;
            let tl3 = gsap.timeline({yoyo : false,ease : "none",overwrite : true,});
            let my4anim1 = gsap.fromTo("#ball", {
                opacity : 1,
                scale : 0,
                zIndex : 1,
                delay : 0.1,
            }, {
                duration : 8,
                scaleX : 40,
                scaleY : 40,
                skewX : 50,
                backgroundColor : "white",
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim2 = gsap.to("#button3", {
                duration : 1,
                scale : 0,
                delay : 0,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim3 = gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {
                duration : 0.1,
                opacity : 0,
                delay : 8.1,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim4 = gsap.to("#button1,#button2,#button3", {
                duration : 0.1,
                scale : 0,
                delay : 8.1,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim5 = gsap.to("#ball2", {
                duration : 0.1,
                scale : 50,
                zIndex : 2,
                delay : 0,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim6 = gsap.to("#al1, #al2, #al3, #al4, #al5", {
                duration : 0.1,
                opacity : 0,
                delay : 8.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim7 = gsap.to(".d1", {
                duration : 0.1,
                backgroundImage : "url('./img/m1.jpeg')",
                delay : 8.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim8 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 8.2,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim9 = gsap.to("#ball", {
                duration : 2,
                opacity : 1,
                delay : 13,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim10 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/m2.jpeg')",
                delay : 15.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim11 = gsap.to("#ball", {
                duration : 8,
                scale : 0,
                skewX : -50,
                rotate : 90,
                backgroundColor : "black",
                delay : 15.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim12 = gsap.to("#ball", {
                duration : 8,
                scale : 40,
                skewX : 50,
                rotate : -90,
                backgroundColor : "white",
                delay : 28,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim13 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/m3.jpeg')",
                delay : 36.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim14 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 36.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim15 = gsap.to("#ball", {
                duration : 2,
                opacity : 1,
                delay : 43,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim16 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/m4.jpeg')",
                delay : 45.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim17 = gsap.to("#ball", {
                duration : 8,
                scale : 0,
                skewX : -50,
                rotate : 90,
                backgroundColor : "black",
                delay : 45.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim18 = gsap.to("#ball", {
                duration : 8,
                scale : 40,
                skewX : 50,
                rotate : -90,
                backgroundColor : "white",
                delay : 57.8,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim19 = gsap.to("#button3", {
                duration : 0.1,
                scale : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim20 = gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {
                duration : 0.1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim21 = gsap.to("#button1,#button2,#button3", {
                duration : 0.1,
                scale : 1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim22 = gsap.to("#ball2", {
                duration : 0.1,
                scale : 1,
                zIndex : -1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim23 = gsap.to("#al1, #al2, #al3, #al4, #al5", {
                duration : 0.1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim24 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "black",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim25_1 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(177,196,218)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim25_2 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(155,255,181)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim25_3 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,157,157)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim25_4 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,255,159)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim25_5 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,182,108)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim25_6 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(200,145,255)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim26 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 66.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my4anim27 = gsap.set("#ball", {
                scale : 1,
                skewX : 0,
                rotate : 90,
                zIndex : -1,
                backgroundColor : "black",
                delay : 68.2,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            if(ap) {
                var p4 = 1;
                var r4 = 0;
                tl3.add(my4anim1).add(my4anim2).add(my4anim3).add(my4anim4).add(my4anim5)
                    .add(my4anim6).add(my4anim7).add(my4anim8).add(my4anim9).add(my4anim10)
                    .add(my4anim11).add(my4anim12).add(my4anim13).add(my4anim14).add(my4anim15)
                    .add(my4anim16).add(my4anim17).add(my4anim18).add(my4anim19).add(my4anim20)
                    .add(my4anim21).add(my4anim22).add(my4anim23).add(my4anim24).add(my4anim25_1)
                    .add(my4anim25_2).add(my4anim25_3).add(my4anim25_4).add(my4anim25_4).add(my4anim25_5)
                    .add(my4anim25_6).add(my4anim26).add(my4anim27);
                document.addEventListener("keydown",handleKeyDown);
                function handleKeyDown(event) {
                    if(event.key === "p") {
                        if(p4 == 1) {
                            event.preventDefault();
                            console.log("Slide Show is Paused");
                            tl3.pause();
                            p4 = p4-1;
                            r4 = r4+1;
                        }
                    }
                    if(event.key === "r") {
                        console.log("Slide Show is Resumed");
                        if(r4 == 1) {
                            tl3.resume();
                            if(th == "Theme : Light") {
                                if(colrcl == "" || colrcl == "vb") {
                                    my4anim25_1.resume();
                                }
                                else if(colrcl == "vg") {
                                    my4anim25_2.resume();
                                }
                                else if(colrcl == "vr") {
                                    my4anim25_3.resume();
                                }
                                else if(colrcl == "vy") {
                                    my4anim25_4.resume();
                                }
                                else if(colrcl == "vo") {
                                    my4anim25_5.resume();
                                }
                                else if(colrcl == "vp") {
                                    my4anim25_6.resume();
                                }	
                            }
                            else if(th == "Theme : Dark") {
                                my4anim24.resume();
                            }
                            my4anim26.resume();my4anim27.resume();
                            r4 = r4-1;
                            p4 = p4+1;
                        }
                    }
                    if(event.key === "q") {
                        event.preventDefault();
                        console.log("Escaped from Slide Show");
                        gsap.to("#ball3", {duration : 0.5,opacity : 1,scale : 50,zIndex : 3,yoyo : false,ease : "none",});
                        gsap.to("#button3", {duration : 0.1,scale : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {duration : 0.1,opacity : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#button1,#button2,#button3", {duration : 0.1,scale : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#ball2", {duration : 0.1,scale : 1,zIndex : -1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#al1, #al2, #al3, #al4, #al5", {duration : 0.1,opacity : 1,delay : 0.6,yoyo : false,ease : "none",});
                        if(th == "Theme : Light") {
                            if(colrcl == "" || colrcl == "vb") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(177,196,218)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vg") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(155,255,181)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vr") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,157,157)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vy") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,255,159)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vo") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,182,108)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vp") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(200,145,255)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }	
                        }
                        else if(th == "Theme : Dark") {
                            gsap.to(".d1", {duration : 0.1,backgroundColor : "black",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                        }
                        gsap.to("#ball", {duration : 0.1,opacity : 0,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.set("#ball", {scale : 1,skewX : 0,rotate : 90,zIndex : -1,backgroundColor : "black",delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#ball3", {duration : 0.5,opacity : 0,scale : 1,zIndex : -1,delay : 0.8,yoyo : false,ease : "none",});
                        tl3.pause();
                    }
                }
                my4anim5.play();my4anim1.play();my4anim2.play();my4anim3.play();my4anim4.play();
                my4anim6.play();my4anim7.play();my4anim8.play();my4anim9.play();my4anim10.play();
                my4anim11.play();my4anim12.play();my4anim13.play();my4anim14.play();my4anim15.play();
                my4anim16.play();my4anim17.play();my4anim18.play();my4anim19.play();my4anim20.play();
                my4anim21.play();my4anim22.play();my4anim23.play();
                if(th == "Theme : Light") {
                    if(colrcl == "" || colrcl == "vb") {
                        my4anim25_1.play();
                    }
                    else if(colrcl == "vg") {
                        my4anim25_2.play();
                    }
                    else if(colrcl == "vr") {
                        my4anim25_3.play();
                    }
                    else if(colrcl == "vy") {
                        my4anim25_4.play();
                    }
                    else if(colrcl == "vo") {
                        my4anim25_5.play();
                    }
                    else if(colrcl == "vp") {
                        my4anim25_6.play();
                    }	
                }
                else if(th == "Theme : Dark") {
                    my4anim24.play();
                }
                my4anim26.play();my4anim27.play();
            }
            document.getElementById("sls").innerHTML = "start";
        }
        else if(als == "spc") {
            var ap = true;
            let tl4 = gsap.timeline({yoyo : false,ease : "none",overwrite : true,});
            let my5anim1 = gsap.fromTo("#ball", {
                opacity : 1,
                scale : 0,
                zIndex : 1,
                delay : 0.1,
            }, {
                duration : 8,
                scaleX : 40,
                scaleY : 40,
                skewX : 50,
                backgroundColor : "white",
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim2 = gsap.to("#button3", {
                duration : 1,
                scale : 0,
                delay : 0,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim3 = gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {
                duration : 0.1,
                opacity : 0,
                delay : 8.1,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim4 = gsap.to("#button1,#button2,#button3", {
                duration : 0.1,
                scale : 0,
                delay : 8.1,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim5 = gsap.to("#ball2", {
                duration : 0.1,
                scale : 50,
                zIndex : 2,
                delay : 0,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim6 = gsap.to("#al1, #al2, #al3, #al4, #al5", {
                duration : 0.1,
                opacity : 0,
                delay : 8.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim7 = gsap.to(".d1", {
                duration : 0.1,
                backgroundImage : "url('./img/s1.jpeg')",
                delay : 8.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim8 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 8.2,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim9 = gsap.to("#ball", {
                duration : 2,
                opacity : 1,
                delay : 13,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim10 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/s2.jpeg')",
                delay : 15.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim11 = gsap.to("#ball", {
                duration : 8,
                scale : 0,
                skewX : -50,
                rotate : 90,
                backgroundColor : "black",
                delay : 15.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim12 = gsap.to("#ball", {
                duration : 8,
                scale : 40,
                skewX : 50,
                rotate : -90,
                backgroundColor : "white",
                delay : 28,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim13 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/s3.jpeg')",
                delay : 36.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim14 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 36.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim15 = gsap.to("#ball", {
                duration : 2,
                opacity : 1,
                delay : 43,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim16 = gsap.to(".d1", {
                duration : 0.5,
                backgroundImage : "url('./img/s4.jpeg')",
                delay : 45.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim17 = gsap.to("#ball", {
                duration : 8,
                scale : 0,
                skewX : -50,
                rotate : 90,
                backgroundColor : "black",
                delay : 45.7,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim18 = gsap.to("#ball", {
                duration : 8,
                scale : 40,
                skewX : 50,
                rotate : -90,
                backgroundColor : "white",
                delay : 57.8,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim19 = gsap.to("#button3", {
                duration : 0.1,
                scale : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim20 = gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {
                duration : 0.1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim21 = gsap.to("#button1,#button2,#button3", {
                duration : 0.1,
                scale : 1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim22 = gsap.to("#ball2", {
                duration : 0.1,
                scale : 1,
                zIndex : -1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim23 = gsap.to("#al1, #al2, #al3, #al4, #al5", {
                duration : 0.1,
                opacity : 1,
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim24 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "black",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim25_1 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(177,196,218)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim25_2 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(155,255,181)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim25_3 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,157,157)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim25_4 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,255,159)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim25_5 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(255,182,108)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim25_6 = gsap.to(".d1", {
                duration : 0.1,
                backgroundColor : "rgb(200,145,255)",
                backgroundImage : "none",
                delay : 65.9,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim26 = gsap.to("#ball", {
                duration : 2,
                opacity : 0,
                delay : 66.1,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            let my5anim27 = gsap.set("#ball", {
                scale : 1,
                skewX : 0,
                rotate : 90,
                zIndex : -1,
                backgroundColor : "black",
                delay : 68.2,
                overwrite : true,
                yoyo : false,
                ease : "none",
                paused : true,
            });
            if(ap) {
                var p5 = 1;
                var r5 = 0;
                tl4.add(my5anim1).add(my5anim2).add(my5anim3).add(my5anim4).add(my5anim5)
                    .add(my5anim6).add(my5anim7).add(my5anim8).add(my5anim9).add(my5anim10)
                    .add(my5anim11).add(my5anim12).add(my5anim13).add(my5anim14).add(my5anim15)
                    .add(my5anim16).add(my5anim17).add(my5anim18).add(my5anim19).add(my5anim20)
                    .add(my5anim21).add(my5anim22).add(my5anim23).add(my5anim24).add(my5anim25_1)
                    .add(my5anim25_2).add(my5anim25_3).add(my5anim25_4).add(my5anim25_4).add(my5anim25_5)
                    .add(my5anim25_6).add(my5anim26).add(my5anim27);
                document.addEventListener("keydown",handleKeyDown);
                function handleKeyDown(event) {
                    if(event.key === "p") {
                        if(p5 == 1) {
                            event.preventDefault();
                            console.log("Slide Show is Paused");
                            tl4.pause();
                            p5 = p5-1;
                            r5 = r5+1;
                        }
                    }
                    if(event.key === "r") {
                        console.log("Slide Show is Resumed");
                        if(r5 == 1) {
                            tl4.resume();
                            if(th == "Theme : Light") {
                                if(colrcl == "" || colrcl == "vb") {
                                    my5anim25_1.resume();
                                }
                                else if(colrcl == "vg") {
                                    my5anim25_2.resume();
                                }
                                else if(colrcl == "vr") {
                                    my5anim25_3.resume();
                                }
                                else if(colrcl == "vy") {
                                    my5anim25_4.resume();
                                }
                                else if(colrcl == "vo") {
                                    my5anim25_5.resume();
                                }
                                else if(colrcl == "vp") {
                                    my5anim25_6.resume();
                                }	
                            }
                            else if(th == "Theme : Dark") {
                                my5anim24.resume();
                            }
                            my5anim26.resume();my5anim27.resume();
                            r5 = r5-1;
                            p5 = p5+1;
                        }
                    }
                    if(event.key === "q") {
                        event.preventDefault();
                        console.log("Escaped from Slide Show");
                        gsap.to("#ball3", {duration : 0.5,opacity : 1,scale : 50,zIndex : 3,yoyo : false,ease : "none",});
                        gsap.to("#button3", {duration : 0.1,scale : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#title1, #button1, #title2, .main, #tr, #title3, #button2, #mr, #title4, #button3, #scheme", {duration : 0.1,opacity : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#button1,#button2,#button3", {duration : 0.1,scale : 1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#ball2", {duration : 0.1,scale : 1,zIndex : -1,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#al1, #al2, #al3, #al4, #al5", {duration : 0.1,opacity : 1,delay : 0.6,yoyo : false,ease : "none",});
                        if(th == "Theme : Light") {
                            if(colrcl == "" || colrcl == "vb") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(177,196,218)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vg") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(155,255,181)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vr") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,157,157)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vy") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,255,159)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vo") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(255,182,108)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }
                            else if(colrcl == "vp") {
                                gsap.to(".d1", {duration : 0.1,backgroundColor : "rgb(200,145,255)",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                            }	
                        }
                        else if(th == "Theme : Dark") {
                            gsap.to(".d1", {duration : 0.1,backgroundColor : "black",backgroundImage : "none",delay : 0.6,yoyo : false,ease : "none",});
                        }
                        gsap.to("#ball", {duration : 0.1,opacity : 0,delay : 0.6,yoyo : false,ease : "none",});
                        gsap.set("#ball", {scale : 1,skewX : 0,rotate : 90,zIndex : -1,backgroundColor : "black",delay : 0.6,yoyo : false,ease : "none",});
                        gsap.to("#ball3", {duration : 0.5,opacity : 0,scale : 1,zIndex : -1,delay : 0.8,yoyo : false,ease : "none",});
                        tl4.pause();
                    }
                }
                my5anim5.play();my5anim1.play();my5anim2.play();my5anim3.play();my5anim4.play();
                my5anim6.play();my5anim7.play();my5anim8.play();my5anim9.play();my5anim10.play();
                my5anim11.play();my5anim12.play();my5anim13.play();my5anim14.play();my5anim15.play();
                my5anim16.play();my5anim17.play();my5anim18.play();my5anim19.play();my5anim20.play();
                my5anim21.play();my5anim22.play();my5anim23.play();
                if(th == "Theme : Light") {
                    if(colrcl == "" || colrcl == "vb") {
                        my5anim25_1.play();
                    }
                    else if(colrcl == "vg") {
                        my5anim25_2.play();
                    }
                    else if(colrcl == "vr") {
                        my5anim25_3.play();
                    }
                    else if(colrcl == "vy") {
                        my5anim25_4.play();
                    }
                    else if(colrcl == "vo") {
                        my5anim25_5.play();
                    }
                    else if(colrcl == "vp") {
                        my5anim25_6.play();
                    }	
                }
                else if(th == "Theme : Dark") {
                    my5anim24.play();
                }
                my5anim26.play();my5anim27.play();
            }
            document.getElementById("sls").innerHTML = "start";
        }
    }
}