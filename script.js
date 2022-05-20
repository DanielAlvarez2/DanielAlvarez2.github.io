let r1rotateFlag = 0;
function r1rotateToggle(){
    if (r1rotateFlag == 0){
        document.getElementById('r1').style.transform = 'rotate(90deg)';
        r1rotateFlag = 90;        
    }else{
        document.getElementById('r1').style.transform = 'rotate(0deg)';
        r1rotateFlag = 0;        
    }
}
document.getElementById('r1').addEventListener('click', r1rotateToggle);

let r2rotateFlag = 0;
function r2rotateToggle(){
    if (r2rotateFlag == 0){
        document.getElementById('r2').style.transform = 'rotate(90deg)';
        r2rotateFlag = 90;        
    }else{
        document.getElementById('r2').style.transform = 'rotate(0deg)';
        r2rotateFlag = 0;        
    }
}
document.getElementById('r2').addEventListener('click', r2rotateToggle);

let r3rotateFlag = 0;
function r3rotateToggle(){
    if (r3rotateFlag == 0){
        document.getElementById('r3').style.transform = 'rotate(90deg)';
        r3rotateFlag = 90;        
    }else{
        document.getElementById('r3').style.transform = 'rotate(0deg)';
        r3rotateFlag = 0;        
    }
}
document.getElementById('r3').addEventListener('click', r3rotateToggle);

let r4rotateFlag = 0;
function r4rotateToggle(){
    if (r4rotateFlag == 0){
        document.getElementById('r4').style.transform = 'rotate(90deg)';
        r4rotateFlag = 90;        
    }else{
        document.getElementById('r4').style.transform = 'rotate(0deg)';
        r4rotateFlag = 0;        
    }
}
document.getElementById('r4').addEventListener('click', r4rotateToggle);

let r5rotateFlag = 0;
function r5rotateToggle(){
    if (r5rotateFlag == 0){
        document.getElementById('r5').style.transform = 'rotate(90deg)';
        r5rotateFlag = 90;        
    }else{
        document.getElementById('r5').style.transform = 'rotate(0deg)';
        r5rotateFlag = 0;        
    }
}
document.getElementById('r5').addEventListener('click', r5rotateToggle);

let r6rotateFlag = 0;
function r6rotateToggle(){
    if (r6rotateFlag == 0){
        document.getElementById('r6').style.transform = 'rotate(90deg)';
        r6rotateFlag = 90;        
    }else{
        document.getElementById('r6').style.transform = 'rotate(0deg)';
        r6rotateFlag = 0;        
    }
}
document.getElementById('r6').addEventListener('click', r6rotateToggle);

let plastic1rotateFlag = 0;
function plastic1rotateToggle(){
    if (plastic1rotateFlag == 0){
        document.getElementById('plastic1').style.transform = 'rotate(90deg)';
        plastic1rotateFlag = 90;        
    }else{
        document.getElementById('plastic1').style.transform = 'rotate(0deg)';
        plastic1rotateFlag = 0;        
    }
}
document.getElementById('plastic1').addEventListener('click', plastic1rotateToggle);

let plastic2rotateFlag = 0;
function plastic2rotateToggle(){
    if (plastic2rotateFlag == 0){
        document.getElementById('plastic2').style.transform = 'rotate(90deg)';
        plastic2rotateFlag = 90;        
    }else{
        document.getElementById('plastic2').style.transform = 'rotate(0deg)';
        plastic2rotateFlag = 0;        
    }
}
document.getElementById('plastic2').addEventListener('click', plastic2rotateToggle);

let deuce1rotateFlag = 0;
function deuce1rotateToggle(){
    if (deuce1rotateFlag == 0){
        document.getElementById('deuce1').style.transform = 'rotate(90deg)';
        deuce1rotateFlag = 90;        
    }else{
        document.getElementById('deuce1').style.transform = 'rotate(0deg)';
        deuce1rotateFlag = 0;        
    }
}
document.getElementById('deuce1').addEventListener('click', deuce1rotateToggle);

let deuce2rotateFlag = 0;
function deuce2rotateToggle(){
    if (deuce2rotateFlag == 0){
        document.getElementById('deuce2').style.transform = 'rotate(90deg)';
        deuce2rotateFlag = 90;        
    }else{
        document.getElementById('deuce2').style.transform = 'rotate(0deg)';
        deuce2rotateFlag = 0;        
    }
}
document.getElementById('deuce2').addEventListener('click', deuce2rotateToggle);

let deuce3rotateFlag = 0;
function deuce3rotateToggle(){
    if (deuce3rotateFlag == 0){
        document.getElementById('deuce3').style.transform = 'rotate(90deg)';
        deuce3rotateFlag = 90;        
    }else{
        document.getElementById('deuce3').style.transform = 'rotate(0deg)';
        deuce3rotateFlag = 0;        
    }
}
document.getElementById('deuce3').addEventListener('click', deuce3rotateToggle);

let deuce4rotateFlag = 0;
function deuce4rotateToggle(){
    if (deuce4rotateFlag == 0){
        document.getElementById('deuce4').style.transform = 'rotate(90deg)';
        deuce4rotateFlag = 90;        
    }else{
        document.getElementById('deuce4').style.transform = 'rotate(0deg)';
        deuce4rotateFlag = 0;        
    }
}
document.getElementById('deuce4').addEventListener('click', deuce4rotateToggle);

let deuce5rotateFlag = 0;
function deuce5rotateToggle(){
    if (deuce5rotateFlag == 0){
        document.getElementById('deuce5').style.transform = 'rotate(90deg)';
        deuce5rotateFlag = 90;        
    }else{
        document.getElementById('deuce5').style.transform = 'rotate(0deg)';
        deuce5rotateFlag = 0;        
    }
}
document.getElementById('deuce5').addEventListener('click', deuce5rotateToggle);

let serviceRotateFlag = 0;
function serviceRotateToggle(){
    if (serviceRotateFlag == 0){
        document.getElementById('service').style.transform = 'rotate(90deg)';
        serviceRotateFlag = 90;        
    }else{
        document.getElementById('service').style.transform = 'rotate(0deg)';
        serviceRotateFlag = 0;        
    }
}
document.getElementById('service').addEventListener('click', serviceRotateToggle);






















const r1 = document.getElementById('r1');
function r1Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(r1);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    r1.style.left = `${left + movementX}px`;
    r1.style.top = `${top + movementY}px`;
}
r1.addEventListener('mousedown', ()=>{
    r1.addEventListener('mousemove', r1Drag);
});
r1.addEventListener('mouseup', ()=>{
    r1.removeEventListener('mousemove', r1Drag);
});

const r2 = document.getElementById('r2');
function r2Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(r2);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    r2.style.left = `${left + movementX}px`;
    r2.style.top = `${top + movementY}px`;
}
r2.addEventListener('mousedown', ()=>{
    r2.addEventListener('mousemove', r2Drag);
});
r2.addEventListener('mouseup', ()=>{
    r2.removeEventListener('mousemove', r2Drag);
});

const r3 = document.getElementById('r3');
function r3Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(r3);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    r3.style.left = `${left + movementX}px`;
    r3.style.top = `${top + movementY}px`;
}
r3.addEventListener('mousedown', ()=>{
    r3.addEventListener('mousemove', r3Drag);
});
r3.addEventListener('mouseup', ()=>{
    r3.removeEventListener('mousemove', r3Drag);
});

const r4 = document.getElementById('r4');
function r4Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(r4);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    r4.style.left = `${left + movementX}px`;
    r4.style.top = `${top + movementY}px`;
}
r4.addEventListener('mousedown', ()=>{
    r4.addEventListener('mousemove', r4Drag);
});
r4.addEventListener('mouseup', ()=>{
    r4.removeEventListener('mousemove', r4Drag);
});

const r5 = document.getElementById('r5');
function r5Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(r5);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    r5.style.left = `${left + movementX}px`;
    r5.style.top = `${top + movementY}px`;
}
r5.addEventListener('mousedown', ()=>{
    r5.addEventListener('mousemove', r5Drag);
});
r5.addEventListener('mouseup', ()=>{
    r5.removeEventListener('mousemove', r5Drag);
});

const r6 = document.getElementById('r6');
function r6Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(r6);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    r6.style.left = `${left + movementX}px`;
    r6.style.top = `${top + movementY}px`;
}
r6.addEventListener('mousedown', ()=>{
    r6.addEventListener('mousemove', r6Drag);
});
r6.addEventListener('mouseup', ()=>{
    r6.removeEventListener('mousemove', r6Drag);
});

const plastic1 = document.getElementById('plastic1');
function plastic1Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(plastic1);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    plastic1.style.left = `${left + movementX}px`;
    plastic1.style.top = `${top + movementY}px`;
}
plastic1.addEventListener('mousedown', ()=>{
    plastic1.addEventListener('mousemove', plastic1Drag);
});
plastic1.addEventListener('mouseup', ()=>{
    plastic1.removeEventListener('mousemove', plastic1Drag);
});

const plastic2 = document.getElementById('plastic2');
function plastic2Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(plastic2);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    plastic2.style.left = `${left + movementX}px`;
    plastic2.style.top = `${top + movementY}px`;
}
plastic2.addEventListener('mousedown', ()=>{
    plastic2.addEventListener('mousemove', plastic2Drag);
});
plastic2.addEventListener('mouseup', ()=>{
    plastic2.removeEventListener('mousemove', plastic2Drag);
});

const s1 = document.getElementById('s1');
function s1Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(s1);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    s1.style.left = `${left + movementX}px`;
    s1.style.top = `${top + movementY}px`;
}
s1.addEventListener('mousedown', ()=>{
    s1.addEventListener('mousemove', s1Drag);
});
s1.addEventListener('mouseup', ()=>{
    s1.removeEventListener('mousemove', s1Drag);
});

const s2 = document.getElementById('s2');
function s2Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(s2);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    s2.style.left = `${left + movementX}px`;
    s2.style.top = `${top + movementY}px`;
}
s2.addEventListener('mousedown', ()=>{
    s2.addEventListener('mousemove', s2Drag);
});
s2.addEventListener('mouseup', ()=>{
    s2.removeEventListener('mousemove', s2Drag);
});

const s3 = document.getElementById('s3');
function s3Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(s3);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    s3.style.left = `${left + movementX}px`;
    s3.style.top = `${top + movementY}px`;
}
s3.addEventListener('mousedown', ()=>{
    s3.addEventListener('mousemove', s3Drag);
});
s3.addEventListener('mouseup', ()=>{
    s3.removeEventListener('mousemove', s3Drag);
});

const deuce1 = document.getElementById('deuce1');
function deuce1Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(deuce1);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    deuce1.style.left = `${left + movementX}px`;
    deuce1.style.top = `${top + movementY}px`;
}
deuce1.addEventListener('mousedown', ()=>{
    deuce1.addEventListener('mousemove', deuce1Drag);
});
deuce1.addEventListener('mouseup', ()=>{
    deuce1.removeEventListener('mousemove', deuce1Drag);
});

const deuce2 = document.getElementById('deuce2');
function deuce2Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(deuce2);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    deuce2.style.left = `${left + movementX}px`;
    deuce2.style.top = `${top + movementY}px`;
}
deuce2.addEventListener('mousedown', ()=>{
    deuce2.addEventListener('mousemove', deuce2Drag);
});
deuce2.addEventListener('mouseup', ()=>{
    deuce2.removeEventListener('mousemove', deuce2Drag);
});

const deuce3 = document.getElementById('deuce3');
function deuce3Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(deuce3);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    deuce3.style.left = `${left + movementX}px`;
    deuce3.style.top = `${top + movementY}px`;
}
deuce3.addEventListener('mousedown', ()=>{
    deuce3.addEventListener('mousemove', deuce3Drag);
});
deuce3.addEventListener('mouseup', ()=>{
    deuce3.removeEventListener('mousemove', deuce3Drag);
});

const deuce4 = document.getElementById('deuce4');
function deuce4Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(deuce4);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    deuce4.style.left = `${left + movementX}px`;
    deuce4.style.top = `${top + movementY}px`;
}
deuce4.addEventListener('mousedown', ()=>{
    deuce4.addEventListener('mousemove', deuce4Drag);
});
deuce4.addEventListener('mouseup', ()=>{
    deuce4.removeEventListener('mousemove', deuce4Drag);
});

const deuce5 = document.getElementById('deuce5');
function deuce5Drag({movementX, movementY}){
    let getStyle = window.getComputedStyle(deuce5);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    deuce5.style.left = `${left + movementX}px`;
    deuce5.style.top = `${top + movementY}px`;
}
deuce5.addEventListener('mousedown', ()=>{
    deuce5.addEventListener('mousemove', deuce5Drag);
});
deuce5.addEventListener('mouseup', ()=>{
    deuce5.removeEventListener('mousemove', deuce5Drag);
});

const service = document.getElementById('service');
function serviceDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(service);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    service.style.left = `${left + movementX}px`;
    service.style.top = `${top + movementY}px`;
}
service.addEventListener('mousedown', ()=>{
    service.addEventListener('mousemove', serviceDrag);
});
service.addEventListener('mouseup', ()=>{
    service.removeEventListener('mousemove', serviceDrag);
});

