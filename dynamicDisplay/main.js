const string = `
  .skin * {box-sizing: border-box; margin: 0; padding: 0;}
  .skin *::after, .skin *::before {box-sizing: border-box;}
  .skin {
    background: #ffe600;
    min-height: 50vh;
    position: relative;
  }
  .eye {
    border: 3px solid black;
    background: #2e2e2e;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    margin-left: -32px;
    top: 70px;
    border-radius: 50%;
  }
  .eye::before{
    content: '';
    display: block;
    border: 2px solid black;
    background: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-left: 5px;
  }
  .eye.left {
    transform: translateX(-100px);
    z-index: 1;
  }
  .eye.left:hover {
    display: none;
  }
  .leftWink::after {
    content: '>';
    width: 80px;
    height: 80px;
    font-size: 80px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-130px);
  }
  .eye.right {
    transform: translateX(100px);
    z-index: 1;

  }
  .eye.right:hover {
    display: none;
  }
  .rightWink::after {
    content: '<';
    width: 80px;
    height: 80px;
    font-size: 80px;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(70px);
  }
  .nose {
    position: absolute;
    left: 50%;
    margin-left: -18px;
    top: 120px;
    border: 18px solid black;
    border-color: black transparent transparent;
    width: 0px;
    height: 0px;
    border-radius: 40% 40% 0 0;
    z-index: 5;
  }
  @keyframes noseMove {
    0% { transform: rotate(0deg); }
    33% { transform: rotate(15deg); }
    66% { transform: rotate(-15deg); }
    100% { transform: rotate(0deg); }
  }
  .nose:hover {
    animation: noseMove 1s infinite linear;
  }
  .face {
    border: 2px solid black;
    background: #ff0000;
    position: absolute;
    top: 185px;
    left: 50%;
    margin-left: -45px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
  .face.left {
    transform: translateX(-180px);
  }
  .face.right {
    transform: translateX(180px);
  }
  .mouth {
    position: absolute;
    top: 160px;
    left: 50%;
    margin-left: -100px;
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
  .mouth .up .left {
    position: absolute;
    border: 3px solid black;
    background: #ffe600;
    top: -6px;
    width: 100px;
    height: 25px;
    /* border-radius: 0 0 0 50%; */
    border-bottom-left-radius: 50px 25px;
    border-color: transparent transparent black black;
    transform: rotate(-20deg);
    z-index: 1;
  }
  .mouth .up .right {
    position: absolute;
    border: 3px solid black;
    background: #ffe600;
    top: -6px;
    left: 100px;
    width: 100px;
    height: 25px;
    border-bottom-right-radius: 50px 25px;
    border-color: transparent black black transparent;
    transform: rotate(20deg);
    z-index: 1;
  }
  .mouth .down {
    border: 2px solid black;
    background: #9b000a;
    width: 140px;
    height: 550px;
    position: absolute;
    top: -370px;
    left: 28px;
    border-radius: 50%;
    overflow: hidden;
  }
  .mouth .down .tongue {
    background: #ff485f;
    width: 150px;
    height: 150px;
    position: absolute;
    top: 400px;
    left: 50%;
    margin-left: -75px;
    border-radius: 50%;
  }
`

let n = 1
let speed = 100

demo.innerText = string.substring(0, n)
demo2.innerHTML = string.substring(0, n)

const pause = () => {
  window.clearInterval(id)
}

const run = () => {
  n += 1
  if (n > string.length) {
    pause()
    return
  }
  demo.innerText = string.substring(0, n)
  demo2.innerHTML = string.substring(0, n)
  demo.scrollTop = demo.scrollHeight
}

const play = () => {
  return setInterval(run, speed)
}

let id = play()

btnPause.onclick = () => {
  pause()
}

btnPlay.onclick = () => {
  id = play()
}

btnSlow.onclick = () => {
  pause()
  speed = 200
  id = play()
}

btnNormal.onclick = () => {
  pause()
  speed = 100
  id = play()
}

btnFast.onclick = () => {
  pause()
  speed = 0
  id = play()
}