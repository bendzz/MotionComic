(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Buttons.png", id:"Buttons"},
		{src:"images/Shot1p1.jpg", id:"Shot1p1"},
		{src:"images/Shot1p2.jpg", id:"Shot1p2"},
		{src:"images/Shot1p3.jpg", id:"Shot1p3"},
		{src:"images/Shot1p4.jpg", id:"Shot1p4"},
		{src:"images/Shot1p5.jpg", id:"Shot1p5"},
		{src:"images/Shot1p6.jpg", id:"Shot1p6"},
		{src:"images/Shot2p2.jpg", id:"Shot2p2"},
		{src:"images/Shot2p2jpgcopy.jpg", id:"Shot2p2jpgcopy"},
		{src:"images/shot2003PinkGradient.png", id:"shot2003PinkGradient"},
		{src:"images/Shot2.jpg", id:"Shot2"},
		{src:"images/shot3p1.jpg", id:"shot3p1"},
		{src:"images/shot3p2.jpg", id:"shot3p2"},
		{src:"images/shot3p3.jpg", id:"shot3p3"},
		{src:"images/shot3p4.jpg", id:"shot3p4"}
	]
};



// symbols:



(lib.Buttons = function() {
	this.initialize(img.Buttons);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1904,1071);


(lib.Shot1p1 = function() {
	this.initialize(img.Shot1p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot1p2 = function() {
	this.initialize(img.Shot1p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot1p3 = function() {
	this.initialize(img.Shot1p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot1p4 = function() {
	this.initialize(img.Shot1p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot1p5 = function() {
	this.initialize(img.Shot1p5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot1p6 = function() {
	this.initialize(img.Shot1p6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot2p2 = function() {
	this.initialize(img.Shot2p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,926,1005);


(lib.Shot2p2jpgcopy = function() {
	this.initialize(img.Shot2p2jpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,926,1005);


(lib.shot2003PinkGradient = function() {
	this.initialize(img.shot2003PinkGradient);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot2 = function() {
	this.initialize(img.Shot2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,884,697);


(lib.shot3p1 = function() {
	this.initialize(img.shot3p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,637);


(lib.shot3p2 = function() {
	this.initialize(img.shot3p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,784,407);


(lib.shot3p3 = function() {
	this.initialize(img.shot3p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1102,1080);


(lib.shot3p4 = function() {
	this.initialize(img.shot3p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1102,1080);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shot2003PinkGradient();
	this.instance.setTransform(-960,-540);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shot2003PinkGradient();
	this.instance.setTransform(-960,-540);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-960,-540,1920,1080);


(lib.Shot3p1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shot3p1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,720,637);


(lib.Shot3_p4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shot3p4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1102,1080);


(lib.Shot3_p3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shot3p3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1102,1080);


(lib.Shot3_p1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shot3p2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,784,407);


(lib.shot2p2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Shot2p2jpgcopy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,926,1005);


(lib.shot2p1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Shot2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,884,697);


(lib.Shot1p1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Shot1p1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot1_p6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Shot1p6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot1_p5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Shot1p5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot1_p4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Shot1p4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot1_p3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Shot1p3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Shot1_p2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Shot1p2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


// stage content:
(lib.TeaserComic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{p0:0,p1:1,p2:15,p3:88,p4:117,"p5 _video loop":137,p6:157,p6_2:177,p7:197,p8:217,p9:237,p10:257,p11:277});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		//call it on first run
		onResize();
		//this.gotoAndStop(1);
		
		
		var elem = document.body; // For making it go fullscreen
		
		stage.nextLabel = "";
		stage.lastLabel = "";
		
		stage.showHud = true;
		stage.autoPlay = false;
		stage.loopAB = true;
		stage.loopA = 1//parseInt(stage.getChildAt(0).getLabels().length*.5);
		stage.loopB = parseInt(stage.getChildAt(0).getLabels().length-1);
		
		//Create Shape DisplayObject for each HUD element.
		//Canvas has security against using images as click-zones for offline pages.
		controlFullscreen = new createjs.Shape();
		controlNextPanel = new createjs.Shape();
		controlLastPanel = new createjs.Shape();
		controlFirst = new createjs.Shape();
		controlLast = new createjs.Shape();
		controlPlay = new createjs.Shape();
		controlMute = new createjs.Shape();
		controlTips = new createjs.Shape();
		
		//Control bar
		controlBar = new createjs.Shape();
		
		controlBarTracker = new createjs.Shape();
		var controlBarTrackerDragger = new createjs.Container();	//Dragging functionality for the track bar circle thing
		
		controlBarA = new createjs.Shape();
		var controlBarADragger = new createjs.Container();
		
		controlBarB = new createjs.Shape();
		var controlBarBDragger = new createjs.Container();
		
		
		var buttonControls = [];
		buttonControls.push(controlFullscreen, controlNextPanel, controlLastPanel, controlFirst, controlLast, controlPlay, controlMute, controlTips, controlBar, controlBarTrackerDragger, controlBarADragger, controlBarBDragger);
		
		var buttons = [];
		
		TipBox = new createjs.Bitmap("Controls/TIp-Box.png");
		stage.addChild(TipBox);
		TipBox.visible = false;
		
		
		BorderColor = "rgba(255,255,255,0.2)";
		InnerColor = "rgba(100,100,100,0.1)";
		controlsY = 975;
		controlBarX = 55;
		controlBarLength = 1820;
		controlBarTrackerRadius = 25;
		
		drawHud();
		
		
		function drawHud(){
		
			//Draw button controls
			buttonsFirst = new createjs.Bitmap("Controls/First.png");
			buttonsFirst.x = 30; buttonsFirst.y = controlsY;
			controlFirst.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawRect(buttonsFirst.x, buttonsFirst.y, 50, 50)
			
			buttonsPrevious = new createjs.Bitmap("Controls/previous.png");
			buttonsPrevious.x = 90; buttonsPrevious.y = controlsY; 
			controlLastPanel.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawRect(buttonsPrevious.x, buttonsPrevious.y, 50, 50)
			
			buttonsNext = new createjs.Bitmap("Controls/Next.png");
			buttonsNext.x = 140; buttonsNext.y = controlsY; 
			controlNextPanel.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawRect(buttonsNext.x, buttonsNext.y, 50, 50)
			
			buttonsLast = new createjs.Bitmap("Controls/Last.png");
			buttonsLast.x = 200; buttonsLast.y = controlsY; 
			controlLast.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawRect(buttonsLast.x, buttonsFirst.y, 50, 50)
			
			buttonsPlay = new createjs.Bitmap("Controls/Play.png");
			buttonsPlay.x = 280; buttonsPlay.y = controlsY; 
			controlPlay.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawRect(buttonsPlay.x, buttonsPlay.y, 100, 50)
			
			buttonsMute = new createjs.Bitmap("Controls/Mute.png");
			buttonsMute.x = 390; buttonsMute.y = controlsY; 
			controlMute.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawRect(buttonsMute.x, buttonsMute.y, 50, 50)
			
			buttonsTips = new createjs.Bitmap("Controls/Tips.png");
			buttonsTips.x = 1690; buttonsTips.y = controlsY; 
			controlTips.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawRect(buttonsTips.x, buttonsTips.y, 100, 50)
			
			buttonsFullScreen = new createjs.Bitmap("Controls/FullScreen.png");
			buttonsFullScreen.x = 1800; buttonsFullScreen.y = controlsY; 
			controlFullscreen.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawRect(buttonsFullScreen.x, buttonsFullScreen.y, 100, 50)
			
			//Control bar
			controlBar.graphics.beginFill(InnerColor).drawRect(controlBarX, controlsY + 62.5, controlBarLength, controlBarTrackerRadius);
			controlBarTracker.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawCircle(0, 0, controlBarTrackerRadius);
			
			//controlBarA.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawRect(-controlBarTrackerRadius, -controlBarTrackerRadius, controlBarTrackerRadius*2, controlBarTrackerRadius*2);	//Squares
			//controlBarB.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawRect(-controlBarTrackerRadius, -controlBarTrackerRadius, controlBarTrackerRadius*2, controlBarTrackerRadius*2);
			controlBarA.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawCircle(0, 0, controlBarTrackerRadius-2);
			controlBarB.graphics.beginStroke(BorderColor).beginFill(InnerColor).drawCircle(0, 0, controlBarTrackerRadius-2);
			
			
			if (stage.showHud){
		
				buttonsS = new createjs.Bitmap("Controls/S.png");
				buttonsS.x = -11; buttonsS.y = -16;
				buttonsE = new createjs.Bitmap("Controls/E.png");
				buttonsE.x = -11; buttonsE.y = -16;
				buttonsTracker = new createjs.Bitmap("Controls/Tracker.png");
				buttonsTracker.x = buttonsTracker.y = -18;
				
				buttons.push(buttonsFirst, buttonsPrevious, buttonsNext, buttonsLast, buttonsPlay, buttonsMute, buttonsTips, buttonsFullScreen, buttonsS, buttonsE, buttonsTracker);
		
				for (i=0;i<buttons.length;i++){
					if (i < buttons.length-3)
						stage.addChild(buttons[i]);	//Don't add the control bar images to the stage
					buttons[i].visible = false;
				}
				
				controlBarADragger.x = controlBarX + (controlBarLength*(stage.loopA/stage.getChildAt(0).getLabels().length));
				controlBarADragger.y = controlsY + 50 + controlBarTrackerRadius;
				controlBarADragger.addChild(controlBarA, buttonsS);
				
				controlBarBDragger.x = controlBarX + (controlBarLength*(stage.loopB/stage.getChildAt(0).getLabels().length));
				controlBarBDragger.y = controlsY + 50 + controlBarTrackerRadius;
				controlBarBDragger.addChild(controlBarB, buttonsE);
		
				controlBarTrackerDragger.x = controlBarX;
				controlBarTrackerDragger.y = controlsY + 50 + controlBarTrackerRadius;
				controlBarTrackerDragger.addChild(controlBarTracker, buttonsTracker);
				
				
				for (i=0;i<buttonControls.length;i++){
					stage.addChild(buttonControls[i]);
				}
				
				//Update stage will render next frame
				//stage.update();
			}
		}
		
		
		//Control bar tracker dot thing
		controlBarTrackerDragger.on("pressmove",function(evt) {
			controlBarTrackerDrag(evt);
		});
		
		function controlBarTrackerDrag(evt){
			x = evt.stageX/stage.scaleX;
			y = controlsY + 75;
			if (x < controlBarX)
				x = controlBarX;
			if (x > controlBarX + controlBarLength)
				x = controlBarX + controlBarLength;
			
			labels = stage.getChildAt(0).getLabels();
			percent = ((x + controlBarTrackerRadius*2)-controlBarX) / controlBarLength;
			labelNum = parseInt((labels.length-2)*percent) + 1;
			
			/*
			if (labelNum == 0)
				labelNum = 1;
			if (labelNum >= labels.length)
				labelNum = labels.length - 1;
			*/
		
			if (stage.getChildAt(0).getCurrentLabel() != labels[labelNum].label){
				stage.getChildAt(0).gotoAndPlay(labels[labelNum].label);
				evt.currentTarget.x = controlBarX + controlBarLength*((labelNum-1)/(labels.length-2));
				evt.currentTarget.y = y;
			}
		}
		
		//Control bar A-B loop: the A piece
		controlBarADragger.on("pressmove",function(evt) {
			x = evt.stageX/stage.scaleX;
			y = controlsY + 75;
			if (x < controlBarX)
				x = controlBarX;
			if (x > controlBarX + controlBarLength)
				x = controlBarX + controlBarLength;
			
			labels = stage.getChildAt(0).getLabels();
			percent = ((x + controlBarTrackerRadius*2)-controlBarX) / controlBarLength;
			labelNum = parseInt((labels.length-2)*percent) + 1;
			
			if (stage.loopA != labels[labelNum].label){
				stage.loopA = labelNum;
				//stage.getChildAt(0).gotoAndPlay(labels[stage.loopA].label);
				//console.log("A = " + stage.loopA);
				evt.currentTarget.x = controlBarX + controlBarLength*((stage.loopA-1)/(labels.length-2));
				evt.currentTarget.y = y;
			}
			
			buttonsS.visible = true;
			buttonsE.visible = true;
			buttonsTracker.visible = true;
		});
		
		//Control bar A-B loop: the B piece
		controlBarBDragger.on("pressmove",function(evt) {
			x = evt.stageX/stage.scaleX;
			y = controlsY + 75;
			if (x < controlBarX)
				x = controlBarX;
			if (x > controlBarX + controlBarLength)
				x = controlBarX + controlBarLength;
			
			labels = stage.getChildAt(0).getLabels();
			percent = ((x + controlBarTrackerRadius*2)-controlBarX) / controlBarLength;
			labelNum = parseInt((labels.length-2)*percent) + 1;
			
			if (stage.loopB != labels[labelNum].label){
				stage.loopB = labelNum;
				//stage.getChildAt(0).gotoAndPlay(labels[stage.loopB].label);
				//console.log("B = " + stage.loopB);
				evt.currentTarget.x = controlBarX + controlBarLength*((stage.loopB -1)/(labels.length-2));
				evt.currentTarget.y = y;
			}
			
			buttonsS.visible = true;
			buttonsE.visible = true;
			buttonsTracker.visible = true;
		});
		
		controlBarADragger.on("pressup",function(evt) { hideButtons(); });
		controlBarBDragger.on("pressup",function(evt) { hideButtons(); });
		
		oldFrame = 0;
		stage.NAV_update = function(event){
			
			//Keep A from going in front of B
			if (stage.loopAB) {	
				if (stage.loopB < stage.loopA){
					temp = stage.loopA;
					stage.loopA = stage.loopB;
					stage.loopB = temp;
				}
				labels = stage.getChildAt(0).getLabels();
				controlBarADragger.x = controlBarX + controlBarLength*((stage.loopA-1)/(labels.length-2));
				controlBarBDragger.x = controlBarX + controlBarLength*((stage.loopB-1)/(labels.length-2));
			}
		
			//Autoplay
			if (stage.autoPlay) {
				labels = stage.getChildAt(0).getLabels();
				if (stage.getChildAt(0).currentFrame <= oldFrame){
					videoPlaying = false;
					for (i = 0; i < stage.trackedVids.numberOfVideos; i++){
						if (stage.trackedVids.bitmaps[i].visible && !stage.trackedVids.videos[i].loop){
							if (!stage.trackedVids.videos[i].ended)
								videoPlaying = true;
						}
					}	
					if (!videoPlaying){
						//if (!stage.loopAB) {	
							if (stage.getLabelNumber() < labels.length-1){		
								controlNextPanelClicked();
							} else {
								controlFirstClicked();
							}
					}
				}
			}
		
			//keep comic position between A and B
			if (stage.loopAB) {
				if (stage.getLabelNumber() > stage.loopB || stage.getLabelNumber() < stage.loopA){
					stage.getChildAt(0).gotoAndPlay(labels[stage.loopA].label);
				}
			}
			
			//Update tracking bar
			labelNum = stage.getLabelNumber(stage.getChildAt(0));
			controlBarTrackerDragger.x = controlBarX + controlBarLength*((labelNum-1)/(labels.length-2));
			
			oldFrame = stage.getChildAt(0).currentFrame;
			
			if (stage.autoPlay){
				buttonsPlay.alpha = 1;
			} else {
				buttonsPlay.alpha = .5;
			}
			if (createjs.Sound.getMute()){
				buttonsMute.alpha = 1;
			} else {
				buttonsMute.alpha = .5;
			}
		}
		
		
		/* BUTTON SYMBOL SHOW + HIDE */
		for (i=0;i<buttonControls.length;i++){
			buttonControls[i].addEventListener("mouseover", showButtons);
			buttonControls[i].addEventListener("mouseout", hideButtons);
		}
		
		function showButtons(event){
			for (i=0;i<buttons.length;i++){
				buttons[i].visible = true;
			}
		}
		function hideButtons(event){
			for (i=0;i<buttons.length;i++){
				buttons[i].visible = false;
			}
			TipBox.visible = false;
		}
		
		/* KEYBOARD CONTROLS */
		keyPressed = false;
		document.addEventListener('keydown', keyboardInput.bind(this));
		function keyboardInput(event){
			if (!keyPressed){
				if(event.keyCode == 37) {
					//console.log ( 'left key' );
					controlLastPanelClicked.call(this);
				}
				else if(event.keyCode == 39) {
					controlNextPanelClicked.call(this);
					//console.log ( 'right key' );
				}
				else if(event.keyCode == 38) {
					controlFullscreenClicked.call(this);
					//console.log ( 'up key' );
				}
				else if(event.keyCode == 40) {
					onResize();
					controlToggleAutoPlay();
					//console.log ( 'down key' );
				}
				else if(event.keyCode == 32) {
					onResize();
					controlToggleAutoPlay();
					//console.log ( 'spacebar key' );
				}
				keyPressed = true;
			}
		}
		
		document.addEventListener('keyup', function(event) {
			//console.log ( 'reset key' );
			keyPressed = false;
		});
		
		
		/* CLICK CONTROLS */
		controlFullscreen.addEventListener("click", controlFullscreenClicked);
		function controlFullscreenClicked(event){
			requestFullScreen(elem);
		}
		
		waitingOnLoop = false;
		controlNextPanel.addEventListener("click", controlNextPanelClicked.bind(this));
		//controlNextPanel.addEventListener("click", controlNextPanelClicked(event).bind(this));
		function controlNextPanelClicked(event){
			//if (waitingOnLoop)
			//	this.gotoAndPlay(stage.nextLabel);
			setNavButtons(stage.getChildAt(0));
			//this.play();
			/*If there's a looping video, delay it until the loop is done/restarts*/
			waitingOnLoop = false;
			for (i = 0; i < stage.trackedVids.numberOfVideos; i++){
				if (stage.trackedVids.bitmaps[i].visible && stage.trackedVids.videos[i].loop){
					//console.log("loop = " + stage.trackedVids.videos[i].loop);
					//console.log("current time = " + stage.trackedVids.videos[i].currentTime);
					if (stage.trackedVids.nextPanelOnLoop[i] == false){
						console.log("Waiting for looped video to end to play next panel...");
						waitingOnLoop = true;
						stage.trackedVids.nextPanelOnLoop[i] = true;
					} else {
						stage.getChildAt(0).gotoAndPlay(stage.nextLabel);
					}
				}
			}	
			if (!waitingOnLoop)
				stage.getChildAt(0).gotoAndPlay(stage.nextLabel);
		}
		
		
		//Next panel
		controlLastPanel.addEventListener("click", controlLastPanelClicked.bind(this));
		function controlLastPanelClicked(event){
			//console.log ( 'last panel' );
			setNavButtons(this);
			this.gotoAndPlay(stage.lastLabel);
			if (stage.autoPlay) {
				//Run it twice so it actually works!
				setNavButtons(this);
				this.gotoAndPlay(stage.lastLabel);
			}
		}
		
		//First panel
		controlFirst.addEventListener("click", controlFirstClicked);
		function controlFirstClicked(event){
			labels = stage.getChildAt(0).getLabels();
			stage.getChildAt(0).gotoAndPlay(labels[1].label);
		}
		
		//Last panel
		controlLast.addEventListener("click", controlLastClicked.bind(this));
		function controlLastClicked(event){
			if (!stage.loopAB) {
				labels = this.getLabels();
				this.gotoAndPlay(labels[labels.length-1].label);
			} else {
				stage.getChildAt(0).gotoAndPlay(labels[stage.loopB].label);
			}
		}
		
		//Auto play
		controlPlay.addEventListener("click", controlToggleAutoPlay);
		function controlToggleAutoPlay(event){
			if (!stage.autoPlay) {
				stage.autoPlay = true;
			} else if (stage.autoPlay){
				stage.autoPlay = false;
			}
		}
		
		//Scroll comic position via control bar
		controlBar.on("pressmove",function(evt) {
			controlBarTrackerDrag(evt);
			//This code prevents the controlBar from jumping off screen when you click it
			controlBar.x = 0;
			controlBar.y = 0;
		});
		
		//Mute
		controlMute.addEventListener("click", controlMuteClicked.bind(this));
		function controlMuteClicked(event){
			if (!createjs.Sound.getMute()){
				createjs.Sound.setMute(true);
			} else {
				createjs.Sound.setMute(false);
			}
		}
		
		//Tips
		controlTips.addEventListener("click", controlTipsClicked.bind(this));
		function controlTipsClicked(event){
			TipBox.visible = true;
		}
		
		
		
		
		
		
		//finds the last and next frame-labels
		function setNavButtons(ref){
		//this.setNavButtons = function(ref){
			labelNumber = stage.getLabelNumber(ref);
			try {
				if (labelNumber-1 > 0) {
					stage.lastLabel = labels[labelNumber-1].label;
				}
			}
			catch(err){}
			try {
				stage.nextLabel = labels[labelNumber+1].label;
			}
			catch(err){}
			//console.log ( 'last and next labels' );
			//console.log ( stage.lastLabel );
			//console.log ( stage.nextLabel );
			console.log ('current label: ' + labelNumber);
			//for (i=0; i<labels.length; i++){
			//	console.log ( 'label ' + i + ': ' + labels[i].label );
			//}
		}
		
		
		stage.getLabelNumber = function(ref){
			ref = stage.getChildAt(0);
			labels = ref.getLabels();
			currentLabel = ref.getCurrentLabel();
			for (i=0; i<labels.length; i++){
				if (labels[i].label == currentLabel)
					return i;
			}
			return -1;
		}
		
		//When browser window changes size...
		window.onresize = function()
		{
		     onResize();
		}
		
		function onResize()
		{
			//OPTION 1:
			//Scales proportionately
			// browser viewport size
			var w = window.innerWidth; //- 10;
			var h = window.innerHeight; //- 10;
			// stage dimensions
		//	var ow = 1280; // your stage width
		//	var oh = 720; // your stage height
			var ow = lib.properties.width; // your stage width
			var oh = lib.properties.height; // your stage height
			
			console.log("Stage width = " + lib.properties.width);
			
			// keep aspect ratio
			var scale = Math.min(w / ow, h / oh);
			var newHeight = ow * scale;
			var newWidth = oh * scale;
			//
			stage.scaleX = scale;
			stage.scaleY = scale;
			// adjust canvas size
			stage.canvas.width = newHeight;
			stage.canvas.height = newWidth;
			
			stage.x = 0;
			stage.y = 0;
			//stage.scaleX = 1;
			//stage.scaleY = 1;
			
			//set width and height variables again
			//var page_canvas = document.getElementsByTagName("canvas")[0];
			//stageWidth = page_canvas.width;
			//stageHeight = page_canvas.height;
			//
			// update the stage
			stage.update()
		}
		
		function requestFullScreen(element) {
		    // Supports most browsers and their versions.
		    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;
		
		    if (requestMethod) { // Native full screen.
		        requestMethod.call(element);
		    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
		        var wscript = new ActiveXObject("WScript.Shell");
		        if (wscript !== null) {
		            wscript.SendKeys("{F11}");
		        }
		    }
		}
		
		
		canvas.addEventListener("mousewheel", MouseWheelHandler, false);
		canvas.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
		
		var zoom;
		
		function MouseWheelHandler(e) {
			//console.log("Zoom = " + zoom);
			if(Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)))>0)
				zoom=1.1;
			else
				zoom=1/1.1;
		
			stageWidth = lib.properties.width*stage.scaleX;
			stageHeight = lib.properties.height*stage.scaleY;
			
			mousexPosition = (stage.mouseX-stage.x)/stageWidth;
			mouseyPosition = (stage.mouseY-stage.y)/stageHeight;
		
			/*Prevent zooming out too far*/
			var w = window.innerWidth;
			var h = window.innerHeight;
			var ow = lib.properties.width; // your stage width
			var oh = lib.properties.height; // your stage height
			
			// keep aspect ratio
			var scaleCanvas = Math.min(w / ow, h / oh);
		
			/*Zoom in or out*/
			stage.scaleX=stage.scaleY*=zoom;
			if (stage.scaleX < scaleCanvas)
				stage.scaleX=stage.scaleY=scaleCanvas;
			//console.log("scale = " + stage.scaleX);
			
			/*Reposition stage*/
			stageWidth = lib.properties.width*stage.scaleX;
			stageHeight = lib.properties.height*stage.scaleY;
		
			stage.x = -(mousexPosition*stageWidth - stage.mouseX);
			stage.y = -(mouseyPosition*stageHeight - stage.mouseY);
			
			canvasWidth = lib.properties.width*scaleCanvas;
			canvasHeight = lib.properties.height*scaleCanvas;
		
			/*Keep within bounds*/
			if (stage.x < canvasWidth-stageWidth)
				stage.x = canvasWidth-stageWidth;
			if (stage.y < canvasHeight-stageHeight)
				stage.y = canvasHeight-stageHeight;
			if (stage.x > 0)
				stage.x = 0;
			if (stage.y > 0)
				stage.y = 0;
		
			
			stage.update();
			
		}
		/*
		VIDEO INSTRUCTIONS
		To position and size a video (according to a flash image you place):
		-In flash, spawn an image, resize it, THEN convert it to symbol
		-In properties, set the Instance Name to something
		-Copy the create_tracked function below to the bottom of this code module
		
		-Set "this.videoRef" to "this.[the Instance Name]", and the strings to the video locations/names.
		-The true/false after the video names indicates looping
		-[CROSS-ORIGIN ERROR] The next true/false indicates if there's a grayscale alpha-mask below the color video
		
		
		PROTIP: To match the video to the other elements, use a video frame as your image
		Note: If you resize the reference symbol, you need to 'Convert to symbol' AGAIN to update the size
		Note: Tween movements are one frame late. Start your tweens 1 frame early. Only position tweens.
		Note: The videos are always on top, in the order spawned.
		
		
		*/
		
		//stage.VID_Create_Tracked_Video(this.videoRef, "video/01.webm","video/01.ogv","video/01.mp4", true, false);
		
		
		
		// HTML5 video backend functions
		// All are attached to "stage" only so they're accessible in other frame scripts
		
		
		stage.trackedVideos = function(){
			//Holds all the HTML5 videos created by the artist/coder
		
			//this.test = 1;
			this.videoTransformRefs = [];
			this.videos = [];
			this.bitmaps = [];
			this.active = [];
			this.nextPanelOnLoop = [];
			this.lastCurrentTime = [];
			
			this.vidWidth = [];
			this.vidHeight = [];
			
			this.delayedUpdater = null;
			this.numberOfVideos = 0;
			//this.alphaProcessor = [];
			
		};
		
		stage.trackedVids = new stage.trackedVideos();	//The ACTUAL singleton for all videos.
		
		
		stage.VID_Create_Tracked_Video_Simple = function(videoTransformR, filePath, looping){
			//New function assumings you have webm and mp4 copies of the video at 'filePath'
			
			i = stage.trackedVids.numberOfVideos;
			stage.trackedVids.active[i] = true;
			stage.trackedVids.nextPanelOnLoop[i] = false;
			stage.trackedVids.lastCurrentTime[i] = 0;
			
			stage.trackedVids.videoTransformRefs[i] = stage.VID_Maybe_Set_Defaults(videoTransformR, 200, 200, 400, 200);
			
			//stage.trackedVids.videos[i] = stage.VID_Load_and_Play(webm,ovg,mp4, looping);
			stage.trackedVids.videos[i] = stage.VID_Load_and_Play(filePath + ".webm",filePath + ".ovg",filePath + ".mp4", looping);
			//stage.trackedVids.videos[i] = stage.VID_Load_and_Play_Simple(filePath, looping);
			
			stage.trackedVids.bitmaps[i] = stage.VID_add_bitmap(stage.trackedVids.videos[i], stage.trackedVids.videoTransformRefs[i], false, i);
		
			stage.trackedVids.vidWidth[i] = 0;
			stage.trackedVids.vidHeight[i] = 0;
			
			stage.VID_resize(stage.trackedVids.bitmaps[i], stage.trackedVids.videos[i], stage.trackedVids.videoTransformRefs[i].getBounds().width, stage.trackedVids.videoTransformRefs[i].getBounds().height, i);
		
			videoTransformR.visible = false;	//Hide the reference object
			//stage.update();
			
			stage.trackedVids.numberOfVideos += 1;
			
		};
		
		
		
		stage.VID_Create_Tracked_Video = function(videoTransformR, webm,ovg,mp4, looping, useAlpha){
			//Old function takes different filenames for different formats
			
			i = stage.trackedVids.numberOfVideos;
			stage.trackedVids.active[i] = true;
			
			//console.log('Opening resizing. Width = ' + videoTransformR.getBounds().width);
			
			stage.trackedVids.videoTransformRefs[i] = stage.VID_Maybe_Set_Defaults(videoTransformR, 200, 200, 400, 200);
			
			stage.trackedVids.videos[i] = stage.VID_Load_and_Play(webm,ovg,mp4, looping);
		
			//if (useAlpha)
			//	stage.trackedVids.backVideos[i] = stage.VID_Setup_Alpha(webm,ovg,mp4, looping);
			
			stage.trackedVids.bitmaps[i] = stage.VID_add_bitmap(stage.trackedVids.videos[i], stage.trackedVids.videoTransformRefs[i], useAlpha, i);
		
			stage.trackedVids.vidWidth[i] = 0;
			stage.trackedVids.vidHeight[i] = 0;
			
			stage.VID_resize(stage.trackedVids.bitmaps[i], stage.trackedVids.videos[i], stage.trackedVids.videoTransformRefs[i].getBounds().width, stage.trackedVids.videoTransformRefs[i].getBounds().height, i);
		
			videoTransformR.visible = false;	//Hide the reference object
			//stage.update();
			
			stage.trackedVids.numberOfVideos += 1;
			
		};
		
		//Gives default values for a video if no Flash symbol was set
		stage.VID_Maybe_Set_Defaults = function(videoTransformR, xP, yP, widthP, heightP) {
			try {
				test = videoTransformR.x;	//Create error if symbol not set.
				//console.log('x = ' + videoTransformR.x )
				//console.log('y = ' + videoTransformR.y )
				//console.log('w = ' + videoTransformR.getBounds().width )
				//console.log('h = ' + videoTransformR.getBounds().height )
				console.log('Using a flash symbol for video dimensions');
			}
			catch(err){
				var videoTransformR = {
					x : xP,
					y : yP,
					getBounds : function() {
						var boundsObject = {
							width : widthP,
							height : heightP
						}
						return boundsObject;
					}
				};
				console.log('Couldnt get dimensions from a flash symbol. Using hardcoded defaults.');
			}
			return videoTransformR;
		};
		
		stage.VID_Load_and_Play = function(webm,ogv,mp4, looping) {
		
			var video = document.createElement('video');
		
			if(video.canPlayType('video/webm')) {
				console.log('webm');
				video.setAttribute("src", webm);
			//Not supporting ogg right now
			//} else if(myVideo.canPlayType('video/ogg')) {
			//	video.setAttribute("src", mp4);
			} else {//if(video.canPlayType('video/mp4')) {
				console.log('mp4');
				video.setAttribute("src", mp4);
			}
			video.load();
			video.play();
			if (looping)
				video.loop = true;
		
			//Neat function for causing a function to reocur; drawings flicker though
			//var i=window.setInterval(function() {ctx.drawImage(video,5,5,260,125)},20);
			return video;
		};
		
		
		stage.VID_add_bitmap = function(video, videoTransformRef, useAlpha, i){
		
			if (!useAlpha)
			{
				var bitmap = new createjs.Bitmap(video);
			} else {
				var backVideo = document.createElement('canvas');	//Invisible canvas for processing
				var bitmap = new createjs.Bitmap(backVideo);
				
				//setTimeout(function(){ draw(v,c,bc,w,h); }, 0);
				setTimeout(function(){ stage.VID_process_Alpha(i, backVideo); }, 0);
				
			}
			
			stage.addChild(bitmap);
		
			bitmap.x = videoTransformRef.x - (videoTransformRef.getBounds().width/2);
			bitmap.y = videoTransformRef.y - (videoTransformRef.getBounds().height/2);
		
			stage.update();
		
			return bitmap;
		};
		
		stage.VID_process_Alpha = function(i, backVideo){
			
			bc = backVideo.getContext('2d');
			vid = stage.trackedVids;
			
			if (backVideo.width == vid.vidWidth && backVideo.width > 0){
				console.log("working");
			//if(!vid.active[i]) return false;
				//console.log("domain = " + document.domain);
				//document.domain = "";
				//console.log("working2");
				// First, draw it into the backing canvas
				bc.drawImage(vid.videos[i],0,0,vid.vidWidth,vid.vidHeight);
				// Grab the pixel data from the backing canvas
				var idata = bc.getImageData(0,0,vid.vidWidth,vid.vidHeight);
				var data = idata.data;
				// Loop through the pixels, turning them grayscale
				for(var i = 0; i < data.length; i+=4) {
					/*
					var r = data[i];
					var g = data[i+1];
					var b = data[i+2];
					var brightness = (3*r+4*g+b)>>>3;
					data[i] = brightness;
					data[i+1] = brightness;
					data[i+2] = brightness;
					*/
					data[i] = 255;
					data[i+1] = 0;
				}
				idata.data = data;
				// Draw the pixels onto the visible canvas
				//c.putImageData(idata,0,0);
				bc.putImageData(idata,0,0);
				//bc.putImageData(0,0,0);
				
			} else {
				if (vid.vidWidth > 0){
					backVideo.width = vid.vidWidth;
					backVideo.height = vid.vidHeight;
				}
			}
			
			//Start over
			if(vid.active[i]){
				setTimeout(function(){ stage.VID_process_Alpha(i, backVideo); }, 0);
			}
		};
		
		stage.VID_transform = function(x, y, width, height, i){
			
			stage.trackedVids.bitmaps[i].x = x - (width / 2);
			stage.trackedVids.bitmaps[i].y = y - (height / 2);
			stage.VID_resize(stage.trackedVids.bitmaps[i], stage.trackedVids.videos[i], width, height, i);
		
		};
		
		stage.VID_resize = function(bitmap, video, width, height, i){
				
			if (!stage.trackedVids.vidWidth[i] || !stage.trackedVids.vidHeight[i]){
				//metadata lot loaded yet, wait until it is to resize
				video.addEventListener( "loadedmetadata", function (e) {
					stage.trackedVids.vidWidth[i] = this.videoWidth;
					stage.trackedVids.vidHeight[i] = this.videoHeight;
					stage.VID_resize_Bitmap(bitmap, width, height, i);
				}, false );
			} else {
				stage.VID_resize_Bitmap(bitmap, width, height, i);
			}
		};
		
		
		stage.VID_resize_Bitmap = function(bitmap, width, height, i){
			bitmap.scaleX = width / stage.trackedVids.vidWidth[i]; 
			bitmap.scaleY = height / stage.trackedVids.vidHeight[i];
			//console.log('scalex = ' + bitmap.scaleX + '. video width = ' + stage.trackedVids.videos[i].videoWidth);
			//console.log('target scale = ' + (width / stage.trackedVids.vidWidth[i]) + '. target width = ' + width);
		};
		
		
		
		//Keep track of all created videos
		createjs.Ticker.addEventListener("tick", handleChange);
		function handleChange(event) {
			stage.VID_update(event);
			stage.NAV_update(event);
		};
		
		stage.VID_update = function(event){
			for (i = 0; i < stage.trackedVids.numberOfVideos; i++){
				if (stage.trackedVids.active[i] == true){
					//console.log( createjs.Ticker._interval );
					if (stage.trackedVids.nextPanelOnLoop[i]){
						//The Next button was pressed, but there's a video looping. Wait until it resets to continue
						if (stage.trackedVids.videos[i].currentTime < stage.trackedVids.lastCurrentTime[i]){
							stage.getChildAt(0).gotoAndPlay(stage.nextLabel);
							//console.log("going to label " + stage.nextLabel);
							stage.trackedVids.lastCurrentTime[i] = 0;
							stage.trackedVids.nextPanelOnLoop[i] = false;
						}
						stage.trackedVids.lastCurrentTime[i] = stage.trackedVids.videos[i].currentTime;
					}
					if (!stage.trackedVids.videoTransformRefs[i]._off){
						if (stage.trackedVids.bitmaps[i].visible == false){
							
							//TODO: Changing the video index should put it on the same z-layer as the tracking ref image
							//Instead, it currently places it above the tween images, but below videos/bitmaps spawned before it!
							/*	//Debug info
							console.log("playing video. Index = " + stage.getChildIndex(stage.trackedVids.bitmaps[i]));
							//console.log("Tracking asset index = " + stage.getChildIndex(stage.trackedVids.videoTransformRefs[i]));
							console.log("Stage # = " + stage.getNumChildren());
							console.log("Stage children = " + stage.children);
							//console.log("number of stage children5 = " + stage.children.length);
							
							
							console.log("Movieclip # = " + stage.getChildAt(0).children.length);
							console.log("Movieclip children = " + stage.getChildAt(0).children);
		
							console.log("1 - " + stage.trackedVids.videoTransformRefs[i].parent);
							console.log("2 - " + stage.trackedVids.videoTransformRefs[i].parent.parent);
							//console.log("3 - " + stage.trackedVids.videoTransformRefs[i].parent.parent.parent);
							//console.log("4 - " + stage.trackedVids.videoTransformRefs[i].parent.parent.parent.parent);
							console.log("index - " + stage.trackedVids.videoTransformRefs[i].parent.getChildIndex(stage.trackedVids.videoTransformRefs[i]));
		
							
							
							console.log("bitmap parent 1: " + stage.trackedVids.bitmaps[i].parent);
							console.log("bitmap parent 2: " + stage.trackedVids.bitmaps[i].parent.parent);
							
							console.log("ADDING bitmap to movieclip");
							//add bitmap to current movieclip in stage
							//stage.getChildAt(0).addChildAt(stage.trackedVids.bitmaps[i], index);
							
							console.log("bitmap index - " + stage.trackedVids.bitmaps[i].parent.getChildIndex(stage.trackedVids.bitmaps[i]));
							*/
							
							//Half functional code. It doesn't place videos on the correct index, BUT, it does place them below the comic controls
							index = stage.trackedVids.videoTransformRefs[i].parent.getChildIndex(stage.trackedVids.videoTransformRefs[i]);
							stage.trackedVids.videoTransformRefs[i].parent.addChildAt(stage.trackedVids.bitmaps[i], index);
		
												
							stage.trackedVids.bitmaps[i].visible = true;
							stage.trackedVids.videos[i].play();
						}
					}
					if (stage.trackedVids.videoTransformRefs[i]._off){
						//Tracking symbol hidden, [attempt to] delete video
						//stage.trackedVids.active[i] = false;
						
						//At when the canvas loads, and in IE throws them every frame.
						try {
							stage.trackedVids.bitmaps[i].visible = false;
							stage.trackedVids.videos[i].pause();
							stage.trackedVids.videos[i].currentTime = 0;
						} catch(err) {}
						
						//TODO: Doesn't delete videos  >=(
						//delete(stage.trackedVids.videos[i]);
						//delete(stage.trackedVids.bitmaps[i]);
						//stage.trackedVids.videos[i].remove()
						/*
						//$(container_selector).children().filter("video").each(function(){
						stage.trackedVids.videos[i].children().filter("video").each(function(){
							this.pause(); // can't hurt
							delete(this); // @sparkey reports that this did the trick!
							$(this).remove(); // not sure if this works after null assignment
						});
						stage.trackedVids.videos[i].empty();
						*/
					} else {
					//Handle position tweens
					stage.VID_transform(stage.trackedVids.videoTransformRefs[i].x, stage.trackedVids.videoTransformRefs[i].y, stage.trackedVids.videoTransformRefs[i].getBounds().width, stage.trackedVids.videoTransformRefs[i].getBounds().height, i);
					}
				}
			}
		}
		
		
		
		/*
		//stage.VID_Create_Tracked_Video(this.Figure_Ref, "video/Shot1 figure.webm","video/Shot1 figure.mp4","video/Shot1 figure.mp4", false, false);
		//stage.VID_Create_Tracked_Video(this.Reflection_Ref, "video/Shot1 reflection.webm","video/Shot1 reflection.webm","video/Shot1 reflection.webm", false, false);
		
		stage.VID_Create_Tracked_Video(this.Shot2_p1, "video/shot2 p1.webm","video/Shot2 p1.webm","video/Shot2 p1.webm", false, false);
		stage.VID_Create_Tracked_Video(this.Shot2_p2, "video/shot2 p2.webm","video/Shot2 p2.webm","video/Shot2 p2.webm", false, false);
		
		stage.VID_Create_Tracked_Video(this.Shot3_p1, "video/Shot3 p1.webm","video/Shot3 p1.webm","video/Shot3 p1.webm", false, false);
		stage.VID_Create_Tracked_Video(this.Shot3_p2, "video/Shot3 p2.webm","video/Shot3 p2.webm","video/Shot3 p2.webm", false, false);
		stage.VID_Create_Tracked_Video(this.Shot3_p3, "video/Shot3 p3.webm","video/Shot3 p3.webm","video/Shot3 p3.webm", true, false);
		stage.VID_Create_Tracked_Video(this.Shot3_p4, "video/Shot3 p4.webm","video/Shot3 p4.webm","video/Shot3 p4.webm", false, false);
		*/
		
		//stage.VID_Create_Tracked_Video_Simple(this.Figure_Ref, "video/Shot1 figure", false);
		//stage.VID_Create_Tracked_Video_Simple(this.Reflection_Ref, "video/Shot1 reflection", false);
		
		
		//Note I replaced the first 5 tweened panels with videos. 5 videos is less than half the size of ~50 tweened PNG images
		stage.VID_Create_Tracked_Video_Simple(this.Shot1_p2, "video/Shot1 p2", false);
		stage.VID_Create_Tracked_Video_Simple(this.Shot1_p3, "video/Shot1 p3", false);
		stage.VID_Create_Tracked_Video_Simple(this.Shot1_p4, "video/Shot1 p4", false);
		stage.VID_Create_Tracked_Video_Simple(this.Shot1_p5, "video/Shot1 p5", true);
		stage.VID_Create_Tracked_Video_Simple(this.Shot1_p6, "video/Shot1 p6", false);
		
		stage.VID_Create_Tracked_Video_Simple(this.Shot2_p1, "video/shot2 p1", false);
		stage.VID_Create_Tracked_Video_Simple(this.Shot2_p2, "video/shot2 p2", false);
		
		
		stage.VID_Create_Tracked_Video_Simple(this.Shot3_p3, "video/Shot3 p3", true);
		stage.VID_Create_Tracked_Video_Simple(this.Shot3_p4, "video/Shot3 p4", false);
		stage.VID_Create_Tracked_Video_Simple(this.Shot3_p2, "video/Shot3 p2", false);
		stage.VID_Create_Tracked_Video_Simple(this.Shot3_p1, "video/Shot3 p1", false);
		//In the same vein as the video, this code creates Sounds that play when a Frame Label is hit, and pause otherwise
		
		stage.SoundsClass = function(){
			this.sound = [];
			this.label = [];
			this.playing = [];
			this.onLabel = [];
			
			this.numberOfSounds = 0;
			
		};
		
		stage.Sounds = new stage.SoundsClass();	//Singleton for all the Sounds
		
		
		stage.Create_Sound = function(audio, frameLabel){
		
			console.log("sound created: " + audio);
			
			i = stage.Sounds.numberOfSounds;
			
		
			stage.Sounds.sound[i] = createjs.Sound.createInstance(audio);
			
			stage.Sounds.playing[i] = false;
			stage.Sounds.label[i] = frameLabel;
		
			
			stage.Sounds.numberOfSounds += 1;
			
		};
		
		//Keep track of all created videos
		createjs.Ticker.addEventListener("tick", handleSounds.bind(this));
		function handleSounds(event) {
			
			
			//console.log('frame label = ' + this.getCurrentLabel() );
			
			for (i = 0; i < stage.Sounds.numberOfSounds; i++){
				stage.Sounds.onLabel[i] = false;
			}
			
			for (i = 0; i < stage.Sounds.numberOfSounds; i++){
				//console.log(
				if (stage.Sounds.label[i] == this.getCurrentLabel()){
					//console.log("Sound for label " + stage.Sounds.label[i] + " is playing!");
					if (stage.Sounds.playing[i] != true){
						console.log("Sound for label " + stage.Sounds.label[i] + " JUST STARTED!");
						stage.Sounds.sound[i].currentTime = 0;
						stage.Sounds.sound[i].play();
						stage.Sounds.playing[i] = true;
					}
					stage.Sounds.onLabel[i] = true;
				}
			}
			
			for (i = 0; i < stage.Sounds.numberOfSounds; i++){
				//console.log(
				if (stage.Sounds.onLabel[i] == false && stage.Sounds.playing[i] == true){
					console.log("Sound for label " + stage.Sounds.label[i] + " ENDED NOW!");
					stage.Sounds.sound[i].pause();
					stage.Sounds.playing[i] = false;
				}
			}
		};
		
		stage.Create_Sound("Audio/86677__epanody__epanody-heavy-sighing.mp3","p10");
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_87 = function() {
		this.stop();
	}
	this.frame_156 = function() {
		this.stop();
		
		
		//This will make a tweened section loop. Videos loop by themselves
		/*
		labelNumber = stage.getLabelNumber(this);
		gotoLabel = labels[labelNumber].label;
		//console.log(gotoLabel);
		
		this.gotoAndPlay(gotoLabel);
		*/
	}
	this.frame_196 = function() {
		this.stop();
	}
	this.frame_216 = function() {
		this.stop();
	}
	this.frame_236 = function() {
		this.stop();
	}
	this.frame_256 = function() {
		this.stop();
	}
	this.frame_276 = function() {
		this.stop();
	}
	this.frame_296 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(73).call(this.frame_87).wait(69).call(this.frame_156).wait(40).call(this.frame_196).wait(20).call(this.frame_216).wait(20).call(this.frame_236).wait(20).call(this.frame_256).wait(20).call(this.frame_276).wait(20).call(this.frame_296).wait(1));

	// p4
	this.Shot3_p4 = new lib.Shot3_p4();
	this.Shot3_p4.setTransform(1369,540,1,1,0,0,0,551,540);
	this.Shot3_p4._off = true;
	new cjs.ButtonHelper(this.Shot3_p4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot3_p4).wait(277).to({_off:false},0).wait(20));

	// p3
	this.Shot3_p3 = new lib.Shot3_p3();
	this.Shot3_p3.setTransform(1369,540,1,1,0,0,0,551,540);
	this.Shot3_p3._off = true;
	new cjs.ButtonHelper(this.Shot3_p3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot3_p3).wait(258).to({_off:false},0).to({_off:true},21).wait(18));

	// p3 loop fix
	this.Shot3_p3_1 = new lib.Shot3_p3();
	this.Shot3_p3_1.setTransform(1369,540,1,1,0,0,0,551,540);
	this.Shot3_p3_1._off = true;
	new cjs.ButtonHelper(this.Shot3_p3_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot3_p3_1).wait(257).to({_off:false},0).wait(40));

	// p2
	this.Shot3_p2 = new lib.Shot3_p1();
	this.Shot3_p2.setTransform(408.8,865.4,1,1,0,0,0,392,203.5);
	this.Shot3_p2._off = true;
	new cjs.ButtonHelper(this.Shot3_p2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot3_p2).wait(237).to({_off:false},0).wait(60));

	// p1
	this.Shot3_p1 = new lib.Shot3p1();
	this.Shot3_p1.setTransform(376.8,332.2,1,1,0,0,0,360,318.5);
	this.Shot3_p1._off = true;
	new cjs.ButtonHelper(this.Shot3_p1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot3_p1).wait(217).to({_off:false},0).wait(80));

	// p2
	this.Shot2_p2 = new lib.shot2p2();
	this.Shot2_p2.setTransform(1423.4,540.2,1,1,0,0,0,463,502.5);
	this.Shot2_p2._off = true;
	new cjs.ButtonHelper(this.Shot2_p2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot2_p2).wait(197).to({_off:false},0).to({_off:true},20).wait(80));

	// p1
	this.Shot2_p1 = new lib.shot2p1();
	this.Shot2_p1.setTransform(477.1,386.2,1,1,0,0,0,442,348.5);
	this.Shot2_p1._off = true;
	new cjs.ButtonHelper(this.Shot2_p1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot2_p1).wait(177).to({_off:false},0).to({_off:true},40).wait(80));

	// Pink
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(960,1259.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(960,1073.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(177).to({_off:false},0).to({_off:true,y:1073.4},20).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(177).to({_off:false},20).to({y:540},19).to({_off:true},1).wait(80));

	// p6
	this.Shot1_p6 = new lib.Shot1_p6();
	this.Shot1_p6.setTransform(960,540,1,1,0,0,0,960,540);
	this.Shot1_p6._off = true;
	new cjs.ButtonHelper(this.Shot1_p6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot1_p6).wait(157).to({_off:false},0).to({_off:true},20).wait(120));

	// p5
	this.Shot1_p5 = new lib.Shot1_p5();
	this.Shot1_p5.setTransform(960,540,1,1,0,0,0,960,540);
	this.Shot1_p5._off = true;
	new cjs.ButtonHelper(this.Shot1_p5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot1_p5).wait(137).to({_off:false},0).to({_off:true},20).wait(140));

	// p4
	this.Shot1_p4 = new lib.Shot1_p4();
	this.Shot1_p4.setTransform(960,540,1,1,0,0,0,960,540);
	this.Shot1_p4._off = true;
	new cjs.ButtonHelper(this.Shot1_p4, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot1_p4).wait(117).to({_off:false},0).to({_off:true},20).wait(160));

	// p5 loop fix
	this.Shot1_p5_1 = new lib.Shot1_p5();
	this.Shot1_p5_1.setTransform(960,540.1,1.004,1.004,0,0,0,960.1,540.2);
	this.Shot1_p5_1._off = true;
	new cjs.ButtonHelper(this.Shot1_p5_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot1_p5_1).wait(136).to({_off:false},0).to({_off:true},21).wait(140));

	// p3
	this.Shot1_p3 = new lib.Shot1_p3();
	this.Shot1_p3.setTransform(960,540,1,1,0,0,0,960,540);
	this.Shot1_p3._off = true;
	new cjs.ButtonHelper(this.Shot1_p3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot1_p3).wait(88).to({_off:false},0).to({_off:true},29).wait(180));

	// p2
	this.Shot1_p2 = new lib.Shot1_p2();
	this.Shot1_p2.setTransform(960,540,1,1,0,0,0,960,540);
	this.Shot1_p2._off = true;
	new cjs.ButtonHelper(this.Shot1_p2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Shot1_p2).wait(15).to({_off:false},0).to({_off:true},73).wait(209));

	// p1
	this.instance_2 = new lib.Shot1p1_1();
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},16).wait(280));

	// p0
	this.instance_3 = new lib.Shot1p1_1();
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},10).wait(287));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;