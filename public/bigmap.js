var c = document.getElementById("myCanvas2");
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
spiderImg.src = "https://images.vexels.com/media/users/3/145049/isolated/preview/073526cb66d7dfb492446c99dc294823-monster-face-fish-illustration-by-vexels.png";
let knightImg = new Image();
knightImg.src =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/de5dkfo-361fa49d-4f48-432b-a55d-c9dad5fc5055.png/v1/fill/w_587,h_744,strp/among_us_character__8__by_unitedworldmedia_de5dkfo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03NDQiLCJwYXRoIjoiXC9mXC80YjFjZWVlNS05NDU4LTQ0MzQtODBiYy1mYzVkODNhMmVhODhcL2RlNWRrZm8tMzYxZmE0OWQtNGY0OC00MzJiLWE1NWQtYzlkYWQ1ZmM1MDU1LnBuZyIsIndpZHRoIjoiPD01ODcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GmJU2lIgNokx71OTZC_1-YOoSS93vNu6WQZJskH0ync";
let lavaImg = document.createElement('img')
lavaImg.src = "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NTGU72X2Q4I6THQCDVC4WPP2R4.jpg&w=1440"
let woodImg = new Image()
woodImg.src = 'https://i.pinimg.com/originals/fe/61/ba/fe61ba11b7e110e23b9a94e018e2626a.jpg'
let doorImg = new Image()
doorImg.src = 'https://cdn.imgbin.com/5/11/3/imgbin-window-trapdoor-trapping-fossil-k08d7bShF3a38x5HWeyyYaT9s.jpg'

document.getElementById('addJsButtons').innerHTML += "<button onclick='generate()'>Generate</button>"
document.getElementById('addJsButtons').innerHTML += "<button onclick='sendCode()'>Send code</button>"

function drawMap() {
  ctx.drawImage(lavaImg, 0, 0, 1200, 1200)
}
function drawRect(x, y, color) {
  if (color === "white") {
    ctx.drawImage(woodImg, x, y, 60, 60)
  }
  if (color === 'end') {
    ctx.drawImage(doorImg, x, y, 60, 60)
  }
}
function drawAllRect(input) {
  for (let x of input) {
    drawRect(x[0] * 60, x[1] * 60, "white");
  }
}
function drawImg(x, y, size, img) {
  ctx.drawImage(img, x * 60, y * 60, size, size);
}
function drawAllMap(sizeMap, rightPaths, fooPoints, momPoints) {
  drawMap(sizeMap);
  drawAllRect(rightPaths);
  drawAllRect(fooPoints);
  for (let x of momPoints) {
    ctx.drawImage(queen, x[0] * 60, x[1] * 60, 55, 55)
  }
  for (let x of spiderImgPosition) {
    drawImg(x[0], x[1], 55, spiderImg);
  }
}
function generate() {
  axios.get("http://4c7052e54d9b.ngrok.io/map/generate-big?size=21&hasMom=false").then((res) => {
    c.width = sizeMap.value * 60 + 60
    c.height = sizeMap.value * 60 + 60
    rightPath = res.data.rightPoints
    map = res.data
    fooPoints = res.data.fooPoints
    knightImgPosition = {
      x: res.data.startPoint[0],
      y: res.data.startPoint[1]
    }
    ctx.drawImage(lavaImg, 0, 0, c.width, c.width)
    endPoint = rightPath[rightPath.length - 1]
    spiderImgPosition = res.data.monster
    drawAllMap(sizeMap.value, rightPath, fooPoints, map.momPoints)
    drawImg(knightImgPosition.x, knightImgPosition.y, 55, knightImg);
    console.log(endPoint);
    drawRect(endPoint[0] * 60, endPoint[1] * 60, 'end')
  })
}

axios.get('http://4c7052e54d9b.ngrok.io/map/generate-big?size=21&hasMom=false').then((res) => {
  map = res.data
  console.log(res.data);
  rightPath = res.data.rightPoints
  fooPoints = res.data.fooPoints
  knightImgPosition = {
    x: res.data.startPoint[0],
    y: res.data.startPoint[1]
  }
  endPoint = rightPath[rightPath.length - 1]
  spiderImgPosition = res.data.monster
  drawAllMap(9, rightPath, fooPoints, map.momPoints)
  drawImg(knightImgPosition.x, knightImgPosition.y, 50, knightImg);
  drawRect(endPoint[0] * 60, endPoint[1] * 60, 'end')
})

async function sendCode() {
  let result = null
  let stepUser = convertCodeDataToUserStep(codeData)
  await $.ajax({
    url: "http://4c7052e54d9b.ngrok.io/map/check-big",
    type: "post",
    dataType: "json",
    contentType: 'application/json',
    data: JSON.stringify({
      startPoint: map.startPoint,
      rightPoints: map.rightPoints,
      fooPoints: map.fooPoints,
      size: map.size,
      monster: map.monster,
      userPoints: convertCodeDataToUserStep(codeData),
      momPoints: map.momPoints,
      username: 'user'
    }),
    success: function (res) {
      console.log(res);
      map.startPoint = res.map.startPoint;
      result = res
    }
  });
  console.log(stepUser);
  console.log(result);
  let count = 0;
  let interval = setInterval(() => {
    console.log(stepUser[count]);
    console.log('loop');
    if (checkPosition(map.momPoints, stepUser[count]).isTrue) {
      map.momPoints.splice(checkPosition(map.momPoints, stepUser[count]).index, 1)
    }
    ctx.clearRect(0, 0, 600, 600);
    drawAllMap(map.size, map.rightPoints, map.fooPoints, map.momPoints)
    drawRect(endPoint[0] * 60, endPoint[1] * 60, 'end')
    ctx.drawImage(knightImg, stepUser[count][0] * 60, stepUser[count][1] * 60, 50, 50);
    if ((checkPosition(map.monster, stepUser[count]).isTrue)) {
      alert('you dead')
      clearInterval(interval);
    };
    if (count >= stepUser.length - 1) {
      if (result.status === 'DONE') alert('win')
      clearInterval(interval)
    };
    count++;
  }, 100)
}
function checkPosition(momPoint, stepUser) {
  let isTrue = false
  index = 0
  for (let i = 0; i < momPoint.length; i++) {
    if (stepUser[0] === momPoint[i][0] && stepUser[1] === momPoint[i][1]) {
      isTrue = true
      index = i
      break;
    }
  }
  return {
    isTrue: isTrue,
    index: index
  }
}
var startPoint = [];
var userPoints = [];
var standablePoints = [];
var monster = [];
function convertCodeDataToUserStep(codeData) {
  var userString = document.getElementById("codeInput").value;
  startPoint = map.startPoint;
  userPoints = [startPoint];
  standablePoints = map.rightPoints;
  monsters = map.monster;
  for (i = 0; i < userString.length / 2; i++) {
    userString = userString.replace("console.log", "logToPush");
  }
  eval(userString);
  console.log(userPoints);
  return userPoints;
}
function logToPush(userInp) {
  var lastPoint = userPoints[userPoints.length - 1];
  switch (userInp) {
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
function alertNextMove(nextMove) {
  var lstPnt = userPoints[userPoints.length - 1];
  switch (nextMove) {
    case "up":
      if (!isIncluded(standablePoints, [lstPnt[0], lstPnt[1] - 1])) {
        return "fall-up";
      }
      if (isIncluded(monsters, [lstPnt[0], lstPnt[1] - 1])) {
        return "monster-up";
      }
      return "safe";
    case "down":
      if (!isIncluded(standablePoints, [lstPnt[0], lstPnt[1] + 1])) {
        return "fall-down";
      }
      if (isIncluded(monsters, [lstPnt[0], lstPnt[1] + 1])) {
        return "monster-down";
      }
      return "safe";
    case "right":
      if (!isIncluded(standablePoints, [lstPnt[0] + 1, lstPnt[1]])) {
        return "fall-right";
      }
      if (isIncluded(monsters, [lstPnt[0] + 1, lstPnt[1]])) {
        return "monster-right";
      }
      return "safe";
    case "left":
      if (!isIncluded(standablePoints, [lstPnt[0] - 1, lstPnt[1]])) {
        return "fall-left";
      }
      if (isIncluded(monsters, [lstPnt[0] - 1, lstPnt[1]])) {
        return "monster-left";
      }
      return "safe";
    case "jump-up":
      if (!isIncluded(standablePoints, [lstPnt[0], lstPnt[1] - 2])) {
        return "fall-jump-up";
      }
      if (isIncluded(monsters, [lstPnt[0], lstPnt[1] - 2])) {
        return "monster-jump-up";
      }
      return "safe";
    case "jump-down":
      if (!isIncluded(standablePoints, [lstPnt[0], lstPnt[1] + 2])) {
        return "fall-jump-down";
      }
      if (isIncluded(monsters, [lstPnt[0], lstPnt[1] + 2])) {
        return "monster-jump-down";
      }
      return "safe";
    case "jump-right":
      if (!isIncluded(standablePoints, [lstPnt[0] + 2, lstPnt[1]])) {
        return "fall-jump-right";
      }
      if (isIncluded(monsters, [lstPnt[0] + 2, lstPnt[1]])) {
        return "monster-jump-right";
      }
      return "safe";
    case "jump-left":
      if (!isIncluded(standablePoints, [lstPnt[0] + 2, lstPnt[1]])) {
        return "fall-jump-left";
      }
      if (isIncluded(monsters, [lstPnt[0] - 2, lstPnt[1]])) {
        return "monster-jump-left";
      }
      return "safe";
  }
}
function isIncluded(arr, pnt) {
  for (ngb = 0; ngb < arr.length; ngb++) {
    if (arr[ngb][0] === pnt[0] && arr[ngb][1] === pnt[1]) {
      return true;
    }
  }
  return false;
}
function isGoal() {
  var crt = userPoints[userPoints.length - 1];
  var goal = standablePoints[standablePoints.length - 1];
  if (crt[0] == goal[0] && crt[1] == goal[1]) {
    return true;
  }
  return false;
}