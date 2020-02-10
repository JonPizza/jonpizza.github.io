const textStyle = new PIXI.TextStyle({
    fontFamily: 'Arial', 
    fontSize: 34, 
    fill: 0xffffff, 
    align: 'center'
});

// Create our application instance
var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x0f6090
});

document.body.appendChild(app.view);

let ttext = new PIXI.Text('Stream Ciphers Animated', textStyle);
let btext = new PIXI.Text('~JonPizza', textStyle);

btext.position.x = window.innerWidth - 34 * 5;
btext.position.y = window.innerHeight - 44;

ttext.position.x = 10;
ttext.position.y = 10;

app.stage.addChild(ttext); 
app.stage.addChild(btext);
