var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
let sizeMap = document.getElementById("inputSizeMap")
let codeData = document.getElementById('codeInput')
let endPoint = ''
let rightPath = [];
let fooPoints = [];
let knightImgPosition = {};
let map = {}
let queen = new Image()
queen.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/de5g6u1-de580faf-a210-480e-a49c-0f297b178fd1.png/v1/fill/w_587,h_744,strp/among_us_character__9__by_unitedworldmedia_de5g6u1-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NDQiLCJwYXRoIjoiXC9mXC80YjFjZWVlNS05NDU4LTQ0MzQtODBiYy1mYzVkODNhMmVhODhcL2RlNWc2dTEtZGU1ODBmYWYtYTIxMC00ODBlLWE0OWMtMGYyOTdiMTc4ZmQxLnBuZyIsIndpZHRoIjoiPD01ODcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Cs-DhypaQAiJoDEjYcoRr3_3CmUibtGbOF7IgAJ_1HY'
let spiderImg = new Image();
spiderImg.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/855806ca-eddc-4f3a-8516-223d5cdbaac1/de5xn1r-1653a984-0534-4e66-a92f-abec6263c076.png/v1/fill/w_802,h_996,strp/kadi_in_among_us_by_kadiandsonic_de5xn1r-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMTk1IiwicGF0aCI6IlwvZlwvODU1ODA2Y2EtZWRkYy00ZjNhLTg1MTYtMjIzZDVjZGJhYWMxXC9kZTV4bjFyLTE2NTNhOTg0LTA1MzQtNGU2Ni1hOTJmLWFiZWM2MjYzYzA3Ni5wbmciLCJ3aWR0aCI6Ijw9OTYzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Z0GBCPCioicoKKWZor7K63UG9V3Y62m999rU1Inz22U";
let knightImg = new Image();
knightImg.src =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/de5dkfo-361fa49d-4f48-432b-a55d-c9dad5fc5055.png/v1/fill/w_587,h_744,strp/among_us_character__8__by_unitedworldmedia_de5dkfo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NDQiLCJwYXRoIjoiXC9mXC80YjFjZWVlNS05NDU4LTQ0MzQtODBiYy1mYzVkODNhMmVhODhcL2RlNWRrZm8tMzYxZmE0OWQtNGY0OC00MzJiLWE1NWQtYzlkYWQ1ZmM1MDU1LnBuZyIsIndpZHRoIjoiPD01ODcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GmJU2lIgNokx71OTZC_1-YOoSS93vNu6WQZJskH0ync";
let lavaImg = document.createElement('img')
lavaImg.src = "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NTGU72X2Q4I6THQCDVC4WPP2R4.jpg&w=1440"
let woodImg = new Image()
woodImg.src = 'https://i.pinimg.com/originals/fe/61/ba/fe61ba11b7e110e23b9a94e018e2626a.jpg'
let doorImg = new Image()
doorImg.src = 'https://i.ibb.co/qFWZgVH/Pics-Art-10-18-11-25-08.jpg'
let ngrok = "cd8e4af83b69";

document.getElementById('addJsButtons').innerHTML += "<button onclick='sendCode()' type=`button` class='btn btn-primary'>Run code</button>"
document.getElementById('addJsButtons').innerHTML += "<button onclick='location.reload()' type=`button` class='btn btn-success'>New map</button>"

function drawMap() {
  ctx.drawImage(lavaImg,0,0,600,600)
}
function drawRect(x, y, color) {
  if (color === "white") {
    ctx.drawImage(woodImg,x,y,60,60)
  }
  if(color === 'end'){
    ctx.drawImage(doorImg,x,y,60,60)
  }
}
function drawAllRect(input) {
  for (let x of input) {
    drawRect(x[0] * 60, x[1] * 60, "white");
  }
}
function drawImg(x, y, size, img) {
  ctx.drawImage(img, x*60 , y*60 , size, size);
}
function drawAllMap(sizeMap,rightPaths,fooPoints,momPoints){
  drawMap(sizeMap);
  drawAllRect(rightPaths);
  drawAllRect(fooPoints);
  for(let x of momPoints){
    ctx.drawImage(queen,x[0]*60,x[1]*60,55,55)
  }
  for (let x of spiderImgPosition) {
    drawImg(x[0], x[1], 55, spiderImg);
  }
}
function generate() {
  axios.get("https://"+ ngrok + ".ngrok.io/map/generate?size=9").then((res) => {
    c.width = sizeMap.value * 60 + 60
    c.height = sizeMap.value * 60 + 60
    rightPath = res.data.rightPoints
    map = res.data
    fooPoints = res.data.fooPoints
    knightImgPosition = {
      x: res.data.startPoint[0],
      y: res.data.startPoint[1]
    }
    ctx.drawImage(lavaImg,0,0,c.width,c.width)
    endPoint = rightPath[rightPath.length - 1]
    spiderImgPosition = res.data.monster
    drawAllMap(sizeMap.value,rightPath,fooPoints,map.momPoints)
    drawImg(knightImgPosition.x, knightImgPosition.y, 55, knightImg);
    console.log("endPoint" + endPoint);
    drawRect(endPoint[0] * 60, endPoint[1] * 60, 'end')
  })
}

axios.get('https://'+ ngrok + '.ngrok.io/map/generate?size=9').then((res) => {
    map = res.data
    console.log(res.data);
    rightPath = res.data.rightPoints
    fooPoints = res.data.fooPoints
    knightImgPosition = {
        x:res.data.startPoint[0],
        y:res.data.startPoint[1]
    }
    endPoint = rightPath[rightPath.length-1]
    console.log("endPoint: "  + endPoint);
    spiderImgPosition = res.data.monster
    drawAllMap(9,rightPath,fooPoints,map.momPoints)
    drawImg(knightImgPosition.x, knightImgPosition.y, 50, knightImg);
    drawRect(endPoint[0]*60,endPoint[1]*60,'end')
})

async function sendCode(){
  let result = null
  let stepUser = convertCodeDataToUserStep(codeData)
   await $.ajax({
        url : "https://"+ ngrok + ".ngrok.io/map/check",
        type : "post",
        dataType:"json",
        contentType:'application/json',
        data : JSON.stringify({
            startPoint:map.startPoint,
            rightPoints:map.rightPoints,
            fooPoints:map.fooPoints,
            size:map.size,
            monster:map.monster,
            userPoints: convertCodeDataToUserStep(codeData),
            momPoints:map.momPoints,
            username:'user'
        }),
        success : function (res){
          console.log(res);
            map.startPoint = res.map.startPoint;
            result = res
        }
    });
    console.log(stepUser);
    console.log(result);
    let count= 0;
    let interval = setInterval(() => {
      console.log(stepUser[count]);
      console.log('loop');
        if(checkPosition(map.momPoints,stepUser[count]).isTrue){
          map.momPoints.splice(checkPosition(map.momPoints,stepUser[count]).index,1)
        }
        ctx.clearRect(0,0,600,600);
        drawAllMap(map.size,map.rightPoints,map.fooPoints,map.momPoints)
        drawRect(endPoint[0] * 60, endPoint[1] * 60, 'end')
        ctx.drawImage(knightImg, stepUser[count][0] * 60, stepUser[count][1] * 60, 50, 50);
        if(count >= result.dieAtStep-1){
          alert(result.dieReason);
          clearInterval(interval);
        }
        if(count >= stepUser.length-1) {
          if(result.status === 'DONE') alert('win')
          clearInterval(interval)
        };
        count++;
    }, 200)   
}
function checkPosition(momPoint,stepUser){
  let isTrue = false
  index = 0
  for(let i=0;i<momPoint.length;i++){
    if(stepUser[0]===momPoint[i][0] && stepUser[1] === momPoint[i][1]){
      isTrue =  true
      index=i
      break;
    }
  }
  return {
    isTrue: isTrue,
    index: index
  }
}
function convertCodeDataToUserStep(codeData) {
  var userString = codeData.value;
  var userInput = [];
  var startPoint = map.startPoint;
  var userPoints = [startPoint];
  for (i = 0; i < userString.length / 2; i++) {
    userString = userString.replace("console.log", "userInput.push");
  }
  eval(userString);
  for (i = 0; i < userInput.length; i++) {
    var lastPoint = userPoints[i];
    switch (userInput[i]) {
        case "up":
            userPoints.push([lastPoint[0], lastPoint[1] - 1]);
            break;
        case "down":
            userPoints.push([lastPoint[0], lastPoint[1] + 1]);
            break;
        case "right":
            userPoints.push([lastPoint[0] + 1, lastPoint[1]]);
            break;
        case "left":
            userPoints.push([lastPoint[0] - 1, lastPoint[1]]);
            break;
        case "jump-up":
            userPoints.push([lastPoint[0], lastPoint[1] - 2]);
            break;
        case "jump-down":
            userPoints.push([lastPoint[0], lastPoint[1] + 2]);
            break;
        case "jump-right":
            userPoints.push([lastPoint[0] + 2, lastPoint[1]]);
            break;
        case "jump-left":
            userPoints.push([lastPoint[0] - 2, lastPoint[1]]);
            break;
    }
}
  return userPoints;
}

