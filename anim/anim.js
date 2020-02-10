const topTextStyle = new PIXI.TextStyle({
    fontFamily: 'Arial', 
    fontSize: 34, 
    fill: 0xffffff, 
    align: 'center'
});

function getWindowWidth() {
    let renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, this.options);
    return renderer.width;
}

function getWindowWidth() {
    let renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, this.options);
    return renderer.height;
}

// Create our application instance
var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x0f6090
});

document.body.appendChild(app.view);

let text = new PIXI.Text('Stream Ciphers Animated', topTextStyle);

text.position.x = 10;
text.position.y = 10;

app.stage.addChild(text); 
