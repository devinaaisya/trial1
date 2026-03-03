(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.amatirep = function() {
	this.initialize(img.amatirep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.aplikasi = function() {
	this.initialize(img.aplikasi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,109);


(lib.aritmetika = function() {
	this.initialize(img.aritmetika);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,292,109);


(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,71);


(lib.bahas = function() {
	this.initialize(img.bahas);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,67);


(lib.bahasrep1 = function() {
	this.initialize(img.bahasrep1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bahasrep10 = function() {
	this.initialize(img.bahasrep10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bahasrep11 = function() {
	this.initialize(img.bahasrep11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bahasrep2 = function() {
	this.initialize(img.bahasrep2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bahasrep3 = function() {
	this.initialize(img.bahasrep3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bahasrep4 = function() {
	this.initialize(img.bahasrep4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bahasrep5 = function() {
	this.initialize(img.bahasrep5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bahasrep6 = function() {
	this.initialize(img.bahasrep6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bahasrep7 = function() {
	this.initialize(img.bahasrep7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bahasrep8 = function() {
	this.initialize(img.bahasrep8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.bahasrep9 = function() {
	this.initialize(img.bahasrep9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.blurpop = function() {
	this.initialize(img.blurpop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1947,1084);


(lib.consol = function() {
	this.initialize(img.consol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,67);


(lib.cp = function() {
	this.initialize(img.cp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.cptp = function() {
	this.initialize(img.cptp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,83);


(lib.disrep = function() {
	this.initialize(img.disrep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.evaluasi = function() {
	this.initialize(img.evaluasi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,83);


(lib.faktarep = function() {
	this.initialize(img.faktarep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.faktarep1 = function() {
	this.initialize(img.faktarep1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,154);


(lib.faktarep2 = function() {
	this.initialize(img.faktarep2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,154);


(lib.faktarep3 = function() {
	this.initialize(img.faktarep3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,154);


(lib.halamanmenu = function() {
	this.initialize(img.halamanmenu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.halamanutama = function() {
	this.initialize(img.halamanutama);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.home = function() {
	this.initialize(img.home);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,71);


(lib.jawabanbenar = function() {
	this.initialize(img.jawabanbenar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,90);


(lib.jawabansalah = function() {
	this.initialize(img.jawabansalah);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,90);


(lib.latihan = function() {
	this.initialize(img.latihan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,67);


(lib.latrep1 = function() {
	this.initialize(img.latrep1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.latrep10 = function() {
	this.initialize(img.latrep10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.latrep11 = function() {
	this.initialize(img.latrep11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.latrep2 = function() {
	this.initialize(img.latrep2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.latrep3 = function() {
	this.initialize(img.latrep3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.latrep4 = function() {
	this.initialize(img.latrep4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.latrep5 = function() {
	this.initialize(img.latrep5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.latrep6 = function() {
	this.initialize(img.latrep6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.latrep7 = function() {
	this.initialize(img.latrep7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.latrep8 = function() {
	this.initialize(img.latrep8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.latrep9 = function() {
	this.initialize(img.latrep9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.materi = function() {
	this.initialize(img.materi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,83);


(lib.mengurutkan = function() {
	this.initialize(img.mengurutkan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,109);


(lib.menrep = function() {
	this.initialize(img.menrep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.mulaibelajar = function() {
	this.initialize(img.mulaibelajar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,93);


(lib.next = function() {
	this.initialize(img.next);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,71);


(lib.no1 = function() {
	this.initialize(img.no1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,206);


(lib.no10 = function() {
	this.initialize(img.no10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,206);


(lib.no2 = function() {
	this.initialize(img.no2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,206);


(lib.no3 = function() {
	this.initialize(img.no3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,206);


(lib.no4 = function() {
	this.initialize(img.no4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,206);


(lib.no5 = function() {
	this.initialize(img.no5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,206);


(lib.no6 = function() {
	this.initialize(img.no6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,206);


(lib.no7 = function() {
	this.initialize(img.no7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,206);


(lib.no8 = function() {
	this.initialize(img.no8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,206);


(lib.no9 = function() {
	this.initialize(img.no9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,206);


(lib.petunjuk = function() {
	this.initialize(img.petunjuk);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,88);


(lib.petunjuk1 = function() {
	this.initialize(img.petunjuk1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.petunjuk2 = function() {
	this.initialize(img.petunjuk2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.petunjuk3 = function() {
	this.initialize(img.petunjuk3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.petunjuk4 = function() {
	this.initialize(img.petunjuk4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprep1 = function() {
	this.initialize(img.Poprep1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprep10 = function() {
	this.initialize(img.Poprep10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprep11 = function() {
	this.initialize(img.Poprep11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprep2 = function() {
	this.initialize(img.Poprep2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprep3 = function() {
	this.initialize(img.Poprep3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprep4 = function() {
	this.initialize(img.Poprep4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprep5 = function() {
	this.initialize(img.Poprep5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprep6 = function() {
	this.initialize(img.Poprep6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprep7 = function() {
	this.initialize(img.Poprep7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprep8 = function() {
	this.initialize(img.Poprep8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprep9 = function() {
	this.initialize(img.Poprep9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Poprepvideo = function() {
	this.initialize(img.Poprepvideo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.profil = function() {
	this.initialize(img.profil);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,88);


(lib.profrep = function() {
	this.initialize(img.profrep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.rangrep = function() {
	this.initialize(img.rangrep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.rep1 = function() {
	this.initialize(img.rep1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.rep2 = function() {
	this.initialize(img.rep2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.rep3 = function() {
	this.initialize(img.rep3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.rep4 = function() {
	this.initialize(img.rep4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.rep5 = function() {
	this.initialize(img.rep5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.rep6 = function() {
	this.initialize(img.rep6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.rep7 = function() {
	this.initialize(img.rep7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.rep8 = function() {
	this.initialize(img.rep8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.representasi = function() {
	this.initialize(img.representasi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,306,109);


(lib.sederhana = function() {
	this.initialize(img.sederhana);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,67);


(lib.simakrep = function() {
	this.initialize(img.simakrep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.skorrep = function() {
	this.initialize(img.skorrep);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.submateri = function() {
	this.initialize(img.submateri);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.tombolulang = function() {
	this.initialize(img.tombolulang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,106);


(lib.tp = function() {
	this.initialize(img.tp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.tutup = function() {
	this.initialize(img.tutup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,71);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tutup();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-2,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:4,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,81.9,74.6);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.home();
	this.instance.setTransform(0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.25,scaleY:1.25,x:-2,y:-2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:0,y:0},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:4,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,97.5,88.8);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.next();
	this.instance.setTransform(0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.25,scaleY:1.25,x:-2,y:-2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:0,y:0},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:4,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,97.5,88.8);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.25,scaleY:1.25,x:-2,y:-2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:0,y:0},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:4,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,97.5,88.8);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.no10();
	this.instance.setTransform(0,0,0.6307,0.6308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.69,scaleY:0.6901,x:-5,y:-6},0).wait(1).to({scaleX:0.6307,scaleY:0.6308,x:0,y:0},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:8,y:10},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6,114.6,142.2);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.no9();
	this.instance.setTransform(0,0,0.6307,0.6308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.69,scaleY:0.6901,x:-5,y:-6},0).wait(1).to({scaleX:0.6307,scaleY:0.6308,x:0,y:0},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:8,y:10},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6,114.6,142.2);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.no8();
	this.instance.setTransform(0,0,0.6307,0.6308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.69,scaleY:0.6901,x:-5,y:-6},0).wait(1).to({scaleX:0.6307,scaleY:0.6308,x:0,y:0},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:8,y:10},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6,114.6,142.2);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.no7();
	this.instance.setTransform(0,0,0.6307,0.6308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.69,scaleY:0.6901,x:-5,y:-6},0).wait(1).to({scaleX:0.6307,scaleY:0.6308,x:0,y:0},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:8,y:10},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6,114.6,142.2);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.no6();
	this.instance.setTransform(0,0,0.6307,0.6308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.69,scaleY:0.6901,x:-5,y:-6},0).wait(1).to({scaleX:0.6307,scaleY:0.6308,x:0,y:0},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:8,y:10},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6,114.6,142.2);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.no5();
	this.instance.setTransform(0,0,0.6307,0.6308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.69,scaleY:0.6901,x:-5,y:-6},0).wait(1).to({scaleX:0.6307,scaleY:0.6308,x:0,y:0},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:8,y:10},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6,114.6,142.2);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.no4();
	this.instance.setTransform(0,0,0.6307,0.6308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.69,scaleY:0.6901,x:-5,y:-6},0).wait(1).to({scaleX:0.6307,scaleY:0.6308,x:0,y:0},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:8,y:10},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6,114.6,142.2);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.no3();
	this.instance.setTransform(0,0,0.6307,0.6308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.69,scaleY:0.6901,x:-5,y:-6},0).wait(1).to({scaleX:0.6307,scaleY:0.6308,x:0,y:0},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:8,y:10},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6,114.6,142.2);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.no2();
	this.instance.setTransform(0,0,0.6307,0.6308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.69,scaleY:0.6901,x:-5,y:-6},0).wait(1).to({scaleX:0.6307,scaleY:0.6308,x:0,y:0},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:8,y:10},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6,114.6,142.2);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.no1();
	this.instance.setTransform(0,0,0.6307,0.6307);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.69,scaleY:0.69,x:-5,y:-6},0).wait(1).to({scaleX:0.6307,scaleY:0.6307,x:0,y:0},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:9,y:11},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-6,114.6,142.2);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bahas();
	this.instance.setTransform(0,0,1.168,1.168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.21,scaleY:1.21,x:-4,y:-1},0).wait(1).to({scaleX:1.168,scaleY:1.168,x:0,y:0},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:11,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-1,249.3,81.1);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.latihan();
	this.instance.setTransform(0,0,1.2956,1.2956);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.34,scaleY:1.34,x:-5,y:-2},0).wait(1).to({scaleX:1.2956,scaleY:1.2956,x:0,y:0},0).wait(1).to({scaleX:1.1899,scaleY:1.1899,x:11,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-2,276.1,89.8);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.faktarep3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-8,y:-4},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:17,y:8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-4,348.6,161.7);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.faktarep2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-8,y:-4},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:17,y:8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-4,348.6,161.7);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.faktarep1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-8,y:-4},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:17,y:8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-4,348.6,161.7);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sederhana();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-5,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:10,y:3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-2,216.3,70.4);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.aplikasi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-7,y:-3},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:15,y:5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-3,306.6,114.5);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.aritmetika();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-7,y:-3},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:15,y:5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-3,306.6,114.5);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mengurutkan();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-7,y:-3},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:15,y:5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-3,308.7,114.5);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.representasi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-8,y:-3},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:15,y:5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-3,321.3,114.5);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.evaluasi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-6,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:13,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-2,267.8,87.2);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.materi();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-6,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:13,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-2,267.8,87.2);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cptp();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-6,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:13,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-2,267.8,87.2);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.petunjuk();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-2,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:5,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,101.9,92.4);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.profil();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-2,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:5,y:4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,101.9,92.4);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mulaibelajar();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-7,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:14,y:5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-2,301.4,97.7);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F4668").s().p("AoeGMIAAsXIQ9AAIAAMXg");
	this.shape.setTransform(54.3,39.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.6,79.2);


(lib.Symbol27_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprep11();
	this.instance_1.setTransform(-480,-270,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27_1, new cjs.Rectangle(-480,-270,960,540), null);


(lib.Symbol26_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprep10();
	this.instance_1.setTransform(-480,-270,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26_1, new cjs.Rectangle(-480,-270,960,540), null);


(lib.Symbol25_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprep9();
	this.instance_1.setTransform(-480,-270,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25_1, new cjs.Rectangle(-480,-270,960,540), null);


(lib.Symbol24_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprep8();
	this.instance_1.setTransform(-480,-270,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24_1, new cjs.Rectangle(-480,-270,960,540), null);


(lib.Symbol23_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprep7();
	this.instance_1.setTransform(-480,-270,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23_1, new cjs.Rectangle(-480,-270,960,540), null);


(lib.Symbol22_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprep6();
	this.instance_1.setTransform(-480,-270,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22_1, new cjs.Rectangle(-480,-270,960,540), null);


(lib.Symbol21_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprep5();
	this.instance_1.setTransform(-480,-270,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21_1, new cjs.Rectangle(-480,-270,960,540), null);


(lib.Symbol20_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprep4();
	this.instance_1.setTransform(-480,-270,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20_1, new cjs.Rectangle(-480,-270,960,540), null);


(lib.Symbol19_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprep3();
	this.instance_1.setTransform(-480,-270,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19_1, new cjs.Rectangle(-480,-270,960,540), null);


(lib.Symbol18_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprep2();
	this.instance_1.setTransform(-480,-270,0.75,0.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18_1, new cjs.Rectangle(-480,-270,960,540), null);


(lib.Symbol13_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprepvideo();
	this.instance_1.setTransform(0,0,0.7422,0.7422);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13_1, new cjs.Rectangle(0,0,950,534.4), null);


(lib.Symbol2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.Poprep1();
	this.instance_1.setTransform(0,0,0.7422,0.7421);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2_1, new cjs.Rectangle(0,0,950,534.4), null);


(lib.Symbol1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.blurpop();
	this.instance_1.setTransform(0,0,0.6725,0.6819);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0,0,1309.4,739.2), null);


(lib.feedbacksalah = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jawabansalah();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.feedbacksalah, new cjs.Rectangle(0,0,458,90), null);


(lib.feedbackbenar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.jawabanbenar();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.feedbackbenar, new cjs.Rectangle(0,0,458,90), null);


(lib.tombolulang_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tombolulang();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-3,y:-3},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:3,y:3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,122.9,111.3);


(lib.menrep5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("6\n1", "normal 400 30px 'Archivo Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 42;
	this.text.parent = this;
	this.text.setTransform(25.25,2.5);
	if(!lib.properties.webfonts['Archivo Black']) {
		lib.webFontTxtInst['Archivo Black'] = lib.webFontTxtInst['Archivo Black'] || [];
		lib.webFontTxtInst['Archivo Black'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ah5AAIDzAA");
	this.shape.setTransform(25.25,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ABE1F9").ss(3,1,1).p("AjJmSIGTAAQAyAAAAAyIAALCQAAAygyAAImTAAQgyAAAAgyIAArCQAAgyAyAAg");
	this.shape_1.setTransform(25.175,40.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002A84").s().p("AjJGUQgyAAAAgzIAArCQAAgxAyAAIGTAAQAyAAAAAxIAALCQAAAzgyAAg");
	this.shape_2.setTransform(25.175,40.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menrep5, new cjs.Rectangle(-1.5,-1.5,53.4,83.7), null);


(lib.menrep4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("1\n6", "normal 400 30px 'Archivo Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 42;
	this.text.parent = this;
	this.text.setTransform(25.05,2.3);
	if(!lib.properties.webfonts['Archivo Black']) {
		lib.webFontTxtInst['Archivo Black'] = lib.webFontTxtInst['Archivo Black'] || [];
		lib.webFontTxtInst['Archivo Black'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("Ah5AAIDzAA");
	this.shape.setTransform(25.05,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#ABE1F9").ss(3,1,1).p("AjJmSIGTAAQAyAAAAAyIAALCQAAAygyAAImTAAQgyAAAAgyIAArCQAAgyAyAAg");
	this.shape_1.setTransform(25.175,40.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002A84").s().p("AjJGUQgyAAAAgzIAArCQAAgxAyAAIGTAAQAyAAAAAxIAALCQAAAzgyAAg");
	this.shape_2.setTransform(25.175,40.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menrep4, new cjs.Rectangle(-1.5,-1.5,53.4,83.7), null);


(lib.menrep3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Bagian yang diambil", "normal 400 30px 'Archivo Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 358;
	this.text.parent = this;
	this.text.setTransform(195.9,5.2);
	if(!lib.properties.webfonts['Archivo Black']) {
		lib.webFontTxtInst['Archivo Black'] = lib.webFontTxtInst['Archivo Black'] || [];
		lib.webFontTxtInst['Archivo Black'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABE1F9").ss(3,1,1).p("A90kAMA7pAAAQAyAAAAAyIAAGdQAAAygyAAMg7pAAAQgyAAAAgyIAAmdQAAgyAyAAg");
	this.shape.setTransform(195.925,25.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002A84").s().p("A90EBQgyAAAAgyIAAmdQAAgyAyAAMA7pAAAQAyAAAAAyIAAGdQAAAygyAAg");
	this.shape_1.setTransform(195.925,25.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menrep3, new cjs.Rectangle(-1.5,-1.5,394.9,54.5), null);


(lib.menrep2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Jumlah seluruh bagian", "normal 400 30px 'Archivo Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 383;
	this.text.parent = this;
	this.text.setTransform(193.35,6.2);
	if(!lib.properties.webfonts['Archivo Black']) {
		lib.webFontTxtInst['Archivo Black'] = lib.webFontTxtInst['Archivo Black'] || [];
		lib.webFontTxtInst['Archivo Black'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABE1F9").ss(3,1,1).p("A90kAMA7pAAAQAyAAAAAyIAAGdQAAAygyAAMg7pAAAQgyAAAAgyIAAmdQAAgyAyAAg");
	this.shape.setTransform(195.925,25.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002A84").s().p("A90EBQgyAAAAgyIAAmdQAAgyAyAAMA7pAAAQAyAAAAAyIAAGdQAAAygyAAg");
	this.shape_1.setTransform(195.925,25.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menrep2, new cjs.Rectangle(-1.5,-1.5,394.9,54.5), null);


(lib.menrep1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Sisa Bagian", "normal 400 30px 'Archivo Black'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 358;
	this.text.parent = this;
	this.text.setTransform(195.85,5.85);
	if(!lib.properties.webfonts['Archivo Black']) {
		lib.webFontTxtInst['Archivo Black'] = lib.webFontTxtInst['Archivo Black'] || [];
		lib.webFontTxtInst['Archivo Black'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#ABE1F9").ss(3,1,1).p("A90kAMA7pAAAQAyAAAAAyIAAGdQAAAygyAAMg7pAAAQgyAAAAgyIAAmdQAAgyAyAAg");
	this.shape.setTransform(195.925,25.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002A84").s().p("A90EBQgyAAAAgyIAAmdQAAgyAyAAMA7pAAAQAyAAAAAyIAAGdQAAAygyAAg");
	this.shape_1.setTransform(195.925,25.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.menrep1, new cjs.Rectangle(-1.5,-1.5,394.9,54.5), null);


(lib.kotrep3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AdrD8IguAAQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIAuAAIAMgCQAHgBAFAEQAEADACAEIAAACQACAGgEAFQgDAGgGABQgIACgKAAIgBAAgAbFD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAZND8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAXVD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAVdD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgATlD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgARtD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAP1D8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAN9D8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAMFD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAKND8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAIVD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAGdD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAElD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgACtD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAA1D8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAhCD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAEAEQAEAFAAAGQAAAGgEAEQgEAFgGAAgAi6D8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAkyD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAmqD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAoiD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAqaD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAsSD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAuKD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAwCD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAx6D8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAzyD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA1qD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA3iD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA5aD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA7SD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA9KD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA+MD1QgfgOAAgsIAAgKQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAAKQAAAXAOAIQAGADACAGQACAEgCAFIgBACQgCAGgGACIgFABQgDAAgEgCgAebDPQgFgBgDgDQgFgFAAgGIAAgFIAAg3QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA3IAAAFQAAAGgEAFQgFAEgGAAIgCAAgA+nCAQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgAeTBTQgFgFAAgGIAAg8QAAgGAFgEQAEgEAGAAQAGAAAFAEQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgA+nAIQgEgFAAgFIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAFgFAFQgEAEgGAAQgGAAgFgEgAeTgkQgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgA+nhvQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAIAAAAQAGABAEAEQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgAeTicQgFgFAAgGIAAgTQAAgSgIgJQgEgEAAgGQAAgFACgEIACgCQAFgEAGAAQAGAAAEAEQARAQAAAgIAAATQAAAGgEAFQgFAEgGAAQgGAAgEgEgA+JjZQgFgCgCgEIgBgCQgDgGACgGQADgGAFgCQANgGASAAIA9AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAIg8AAQgMAAgIAEIgGABIgFgBgAcdjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAaljdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAYtjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAW1jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAU9jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgATFjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgARNjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAPVjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgANdjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgALljdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAJtjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAH1jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAF9jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAEFjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgACNjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAAVjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAhijdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAjajdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAlSjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAnKjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgApCjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAq6jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAsyjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAuqjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAwijdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAyajdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA0SjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA2KjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA4CjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA56jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA7yjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAg");
	this.shape.setTransform(194.925,26.4243,1,1.1165);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0)").s().p("AcQDtQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgEgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgRAAIgNgBQACgFgCgEQgCgGgGgDQgOgIAAgXIAAgKQAAgGgFgEQgEgFgGAAIAAgeQAGAAAEgEQAFgFAAgGIAAg8QAAgGgFgEQgEgFgGAAIAAgeQAGAAAEgEQAFgFAAgFIAAg8QAAgGgFgEQgEgFgGAAIAAgeQAGAAAEgEQAFgFAAgGIAAg8QAAgGgFgEQgEgEgGgBQADgQAJgKQACAEAFACQAFACAGgCQAIgEAMAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAdAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIADAAQAPAAAKAEQgCAEAAAFQAAAGAEAEQAIAJAAASIAAATQAAAGAFAFQAEAEAGAAIAAAeQgGAAgEAFQgFAEAAAGIAAA8QAAAGAFAFQAEAEAGAAIAAAeQgGAAgEAEQgFAEAAAGIAAA8QAAAGAFAFQAEAEAGAAIAAAeQgGAAgEAFQgFAEAAAGIAAA3IAAAFQAAAGAFAFQADADAFABQgFAQgNAHQgCgEgEgDQgFgEgHABIgMACIguAAQgGAAgEAEQgFAFAAAGg");
	this.shape_1.setTransform(194.925,26.4243,1,1.1165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kotrep3, new cjs.Rectangle(-1.5,-1.5,392.9,55.9), null);


(lib.kotrep2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AdrD8IguAAQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIAuAAIAMgCQAHgBAFAEQAEADACAEIAAACQACAGgEAFQgDAGgGABQgIACgKAAIgBAAgAbFD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAZND8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAXVD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAVdD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgATlD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgARtD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAP1D8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAN9D8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAMFD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAKND8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAIVD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAGdD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAElD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgACtD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAA1D8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAhCD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAEAEQAEAFAAAGQAAAGgEAEQgEAFgGAAgAi6D8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAkyD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAmqD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAoiD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAqaD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAsSD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAuKD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAwCD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAx6D8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAzyD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA1qD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA3iD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA5aD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA7SD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA9KD8QgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgA+MD1QgfgOAAgsIAAgKQAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAAKQAAAXAOAIQAGADACAGQACAEgCAFIgBACQgCAGgGACIgFABQgDAAgEgCgAebDPQgFgBgDgDQgFgFAAgGIAAgFIAAg3QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA3IAAAFQAAAGgEAFQgFAEgGAAIgCAAgA+nCAQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgAeTBTQgFgFAAgGIAAg8QAAgGAFgEQAEgEAGAAQAGAAAFAEQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgA+nAIQgEgFAAgFIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAFgFAFQgEAEgGAAQgGAAgFgEgAeTgkQgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgA+nhvQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAIAAAAQAGABAEAEQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgAeTicQgFgFAAgGIAAgTQAAgSgIgJQgEgEAAgGQAAgFACgEIACgCQAFgEAGAAQAGAAAEAEQARAQAAAgIAAATQAAAGgEAFQgFAEgGAAQgGAAgEgEgA+JjZQgFgCgCgEIgBgCQgDgGACgGQADgGAFgCQANgGASAAIA9AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAIg8AAQgMAAgIAEIgGABIgFgBgAcdjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAaljdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAYtjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAW1jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAU9jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgATFjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgARNjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAPVjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgANdjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgALljdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAJtjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAH1jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAF9jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAEFjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgACNjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAAVjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAhijdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAjajdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAlSjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAnKjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgApCjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAq6jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAsyjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAuqjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAwijdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgAyajdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA0SjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA2KjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA4CjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA56jdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAgA7yjdQgGAAgFgEQgEgFAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAFQgEAEgGAAg");
	this.shape.setTransform(194.925,26.4243,1,1.1165);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0)").s().p("AcQDtQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgEgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgRAAIgNgBQACgFgCgEQgCgGgGgDQgOgIAAgXIAAgKQAAgGgFgEQgEgFgGAAIAAgeQAGAAAEgEQAFgFAAgGIAAg8QAAgGgFgEQgEgFgGAAIAAgeQAGAAAEgEQAFgFAAgFIAAg8QAAgGgFgEQgEgFgGAAIAAgeQAGAAAEgEQAFgFAAgGIAAg8QAAgGgFgEQgEgEgGgBQADgQAJgKQACAEAFACQAFACAGgCQAIgEAMAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAdAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIADAAQAPAAAKAEQgCAEAAAFQAAAGAEAEQAIAJAAASIAAATQAAAGAFAFQAEAEAGAAIAAAeQgGAAgEAFQgFAEAAAGIAAA8QAAAGAFAFQAEAEAGAAIAAAeQgGAAgEAEQgFAEAAAGIAAA8QAAAGAFAFQAEAEAGAAIAAAeQgGAAgEAFQgFAEAAAGIAAA3IAAAFQAAAGAFAFQADADAFABQgFAQgNAHQgCgEgEgDQgFgEgHABIgMACIguAAQgGAAgEAEQgFAFAAAGg");
	this.shape_1.setTransform(194.925,26.4243,1,1.1165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kotrep2, new cjs.Rectangle(-1.5,-1.5,392.9,55.9), null);


(lib.kotrep1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABVGkQgHAAgEgEQgEgFAAgGQAAgGAEgEQAEgFAHAAIA7AAQAHAAAEAFQAEAEABAGQgBAGgEAFQgEAEgHAAgAgjGkQgGAAgEgEQgEgFAAgGQAAgGAEgEQAEgFAGAAIA8AAQAGAAAEAFQAEAEABAGQgBAGgEAFQgEAEgGAAgAiaGkQgHAAgEgEQgEgFgBgGIAAgBQABgFAEgEQAEgFAHAAIA8AAQAGAAAEAFQAEAEAAAGQAAAGgEAFQgEAEgGAAgADBGOIgDgBQgDgDgBgFQgBgGADgFQAFgJAAgOIAAgcQAAgGAEgEQAEgFAGAAQAHAAAEAFQAEAEABAGIAAAcQgBAYgJAOQgDAGgGABIgEABQgEAAgDgDgAjRGHQgGgCgCgGQgEgMgBgQIAAgnQABgGAEgFQAEgEAGAAQAHAAAEAEQAEAFABAGIAAAnQgBAKADAHQACAGgDAGQgCAFgEACIgCABIgFABIgGgCgADFEWQgEgFAAgGIAAg8QAAgGAEgEQAEgFAGAAQAHAAAEAFQAEAEABAGIAAA8QgBAGgEAFQgEAEgHAAQgGAAgEgEgAjZEKQgEgEgBgGIAAg8QABgGAEgFQAEgEAGAAQAHAAAEAEQAEAFABAGIAAA8QgBAGgEAEQgEAFgHAAQgGAAgEgFgADFCeQgEgFAAgGIAAg8QAAgGAEgEQAEgFAGAAQAHAAAEAFQAEAEABAGIAAA8QgBAGgEAFQgEAEgHAAQgGAAgEgEgAjZCSQgEgEgBgGIAAg8QABgGAEgFQAEgEAGAAQAHAAAEAEQAEAFABAGIAAA8QgBAGgEAEQgEAFgHAAQgGAAgEgFgADFAmQgEgFAAgGIAAg7QAAgGAEgEQAEgFAGAAQAHAAAEAFQAEAEABAGIAAA7QgBAGgEAFQgEAEgHAAQgGAAgEgEgAjZAaQgEgEgBgGIAAg7QABgGAEgFQAEgEAGAAQAHAAAEAEQAEAFABAGIAAA7QgBAGgEAEQgEAFgHAAQgGAAgEgFgADFhRQgEgFAAgGIAAg8QAAgGAEgEQAEgFAGAAQAHAAAEAFQAEAEABAGIAAA8QgBAGgEAFQgEAEgHAAQgGAAgEgEgAjZhdQgEgEgBgGIAAg8QABgGAEgFQAEgEAGAAQAHAAAEAEQAEAFABAGIAAA8QgBAGgEAEQgEAFgHAAQgGAAgEgFgADFjJQgEgFAAgGIAAg8QAAgGAEgEQAEgFAGAAQAHAAAEAFQAEAEABAGIAAA8QgBAGgEAFQgEAEgHAAQgGAAgEgEgAjZjVQgEgEgBgGIAAg8QABgGAEgFQAEgEAGAAQAHAAAEAEQAEAFABAGIAAA8QgBAGgEAEQgEAFgHAAQgGAAgEgFgADFlBQgEgFAAgGIAAgWQgBgRgGgJQgEgFAAgGQABgEADgEIACgCQAFgEAGABQAGABAEAEQAOAQAAAdIAAAWQgBAGgEAFQgEAEgHAAQgGAAgEgEgAjZlNQgEgEgBgGIAAgLQABgoAYgPQAFgDAGABQAHABADAGIABACQACAEgBAFQgBAGgFADQgMAJABAVIAAALQgBAGgEAEQgEAFgHAAQgGAAgEgFgABSmFQgGAAgEgFQgEgEAAgGQAAgGAEgFQAEgEAGAAIA8AAQAHAAAEAEQAEAFABAGQgBAGgEAEQgEAFgHAAgAglmFQgGAAgEgFQgEgEgBgGQABgGAEgFQAEgEAGAAIA8AAQAGAAAEAEQAEAFAAAGQAAAGgEAEQgEAFgGAAgAicmFQgHAAgEgFQgEgEgBgFIAAgBQABgGAEgFQAEgEAHAAIA7AAQAHAAAEAEQAEAFAAAGQAAAGgEAEQgEAFgHAAg");
	this.shape.setTransform(23.131,40.525,1.1168,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,51,51,0)").s().p("ACbGLQgEgFgHAAIg7AAQgHAAgEAFQgEAEAAAGIgeAAQgBgGgEgEQgEgFgGAAIg8AAQgGAAgEAFQgEAEAAAGIgfAAQAAgGgEgEQgEgFgGAAIg8AAQgHAAgEAFQgEAEgBAFQgRgDgJgKQAEgCADgFQACgGgCgGQgDgHABgKIAAgnQgBgGgEgFQgEgEgHAAIAAgeQAHAAAEgFQAEgEABgGIAAg8QgBgGgEgFQgEgEgHAAIAAgeQAHAAAEgFQAEgEABgGIAAg8QgBgGgEgFQgEgEgHAAIAAgeQAHAAAEgFQAEgEABgGIAAg7QgBgGgEgFQgEgEgHAAIAAgeQAHAAAEgFQAEgEABgGIAAg8QgBgGgEgFQgEgEgHAAIAAgeQAHAAAEgFQAEgEABgGIAAg8QgBgGgEgFQgEgEgHAAIAAgeQAHAAAEgFQAEgEABgGIAAgLQgBgVAMgJQAFgDABgGQABgFgCgEIADgBQABAFAEAEQAEAFAHAAIA7AAQAHAAAEgFQAEgEAAgGIAeAAQABAGAEAEQAEAFAGAAIA8AAQAGAAAEgFQAEgEAAgGIAfAAQAAAGAEAEQAEAFAGAAIA8AAQAHAAAEgFQAEgEABgGQAQAAAMAFQgDAEgBAEQAAAGAEAFQAGAJABARIAAAWQAAAGAEAFQAEAEAGAAIAAAeQgGAAgEAFQgEAEAAAGIAAA8QAAAGAEAFQAEAEAGAAIAAAeQgGAAgEAFQgEAEAAAGIAAA8QAAAGAEAFQAEAEAGAAIAAAeQgGAAgEAFQgEAEAAAGIAAA7QAAAGAEAFQAEAEAGAAIAAAeQgGAAgEAFQgEAEAAAGIAAA8QAAAGAEAFQAEAEAGAAIAAAeQgGAAgEAFQgEAEAAAGIAAA8QAAAGAEAFQAEAEAGAAIAAAeQgGAAgEAFQgEAEAAAGIAAAcQAAAOgFAJQgDAFABAGQABAFADADQgLAIgTAAQgBgGgEgEg");
	this.shape_1.setTransform(23.131,40.525,1.1168,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kotrep1, new cjs.Rectangle(-1.5,-1.5,49.3,84.1), null);


(lib.contohsoal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.consol();
	this.instance.setTransform(-103,-33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-108,y:-35},0).wait(1).to({scaleX:1,scaleY:1,x:-103,y:-33.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:-93,y:-30},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-35,216.3,70.4);


// stage content:
(lib.DuRasi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];
	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		
		this.mulai.addEventListener("click", mulaikemenu.bind(this));
		function mulaikemenu(){
			this.gotoAndStop(6);
		}
		
		this.petunjuk.addEventListener("click", petunjukke1.bind(this));
		function petunjukke1(){
			this.gotoAndStop(1);
		}
		
		this.profil.addEventListener("click", profilke5.bind(this));
		function profilke5(){
			this.gotoAndStop(5);
		}
	}
	this.frame_1 = function() {
		this.stop;
		
		this.tombolhome.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.back1.addEventListener("click", back1ke0.bind(this));
		function back1ke0(){
			this.gotoAndStop(0);
		}
		
		this.next1.addEventListener("click", next1ke2.bind(this));
		function next1ke2(){
			this.gotoAndStop(2);
		}
	}
	this.frame_2 = function() {
		this.stop;
		
		this.tombolhome.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next2.addEventListener("click", next2ke3.bind(this));
		function next2ke3(){ 
			this.gotoAndStop(3); 
		}
		
		this.back2.addEventListener("click", back2ke1.bind(this));
		function back2ke1(){ 
			this.gotoAndStop(1); 
		}
	}
	this.frame_3 = function() {
		this.stop;
		
		this.tombolhome.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next3.addEventListener("click", next3ke4.bind(this));
		function next3ke4(){ 
			this.gotoAndStop(4); 
		}
		
		this.back3.addEventListener("click", back3ke2.bind(this));
		function back3ke2(){ 
			this.gotoAndStop(2); 
		}
	}
	this.frame_4 = function() {
		this.stop;
		
		this.tombolhome.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.back4.addEventListener("click", back4ke3.bind(this));
		function back4ke3(){ 
			this.gotoAndStop(3); 
		}
	}
	this.frame_5 = function() {
		this.stop;
		
		this.back5.addEventListener("click", back5ke0.bind(this));
		function back5ke0(){ 
			this.gotoAndStop(0); 
		}
	}
	this.frame_6 = function() {
		this.stop();
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.cptp.addEventListener("click", cptpke7.bind(this));
		function cptpke7(){
			this.gotoAndStop(7);
		}
		
		this.materi.addEventListener("click", materike9.bind(this));
		function materike9(){
			this.gotoAndStop(9);
		}
	}
	this.frame_7 = function() {
		this.stop;
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next7.addEventListener("click", next7ke8.bind(this));
		function next7ke8(){ 
			this.gotoAndStop(8); 
		}
		
		this.back7.addEventListener("click", back7ke6.bind(this));
		function back7ke6(){ 
			this.gotoAndStop(6); 
		}
	}
	this.frame_8 = function() {
		this.stop;
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.back8.addEventListener("click", back8ke7.bind(this));
		function back8ke7(){ 
			this.gotoAndStop(7); 
		}
	}
	this.frame_9 = function() {
		this.stop;
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.back9.addEventListener("click", back9ke6.bind(this));
		function back9ke6(){ 
			this.gotoAndStop(6); 
		}
		
		this.represen.addEventListener("click", represenke10.bind(this));
		function represenke10(){ 
			this.gotoAndStop(10); 
		}
	}
	this.frame_10 = function() {
		this.stop;
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next10.addEventListener("click", next10ke11.bind(this));
		function next10ke11(){ 
			this.gotoAndStop(11); 
		}
		
		this.back10.addEventListener("click", back10ke9.bind(this));
		function back10ke9(){ 
			this.gotoAndStop(9); 
		}
	}
	this.frame_11 = function() {
		this.stop;
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next11.addEventListener("click", next11ke12.bind(this));
		function next11ke12(){ 
			this.gotoAndStop(12); 
		}
		
		this.back11.addEventListener("click", back11ke10.bind(this));
		function back11ke10(){ 
			this.gotoAndStop(10); 
		}
	}
	this.frame_12 = function() {
		this.stop()
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next12.addEventListener("click", next12ke13.bind(this));
		function next12ke13(){ 
			this.gotoAndStop(13); 
		}
		
		this.back12.addEventListener("click", back12ke11.bind(this));
		function back12ke11(){ 
			this.gotoAndStop(11); 
		}
		
		this.popsederhana.visible = false;
		this.tutupsederhana.visible = false;
		this.blurpop.visible = false;
		
		this.sederhana.addEventListener("click", popupsederhana.bind(this));
		function popupsederhana()
		{
			this.popsederhana.visible = true;
			this.tutupsederhana.visible = true;
			this.blurpop.visible = true;
			
			this.home.mouseEnabled = false;
			this.next12.mouseEnabled = false;
			this.back12.mouseEnabled = false;
			this.sederhana.mouseEnabled = false;
		
		}
		
		this.tutupsederhana.addEventListener("click", tutuppopsederhana.bind(this));
		function tutuppopsederhana()
		{
			this.popsederhana.visible = false;
			this.tutupsederhana.visible = false;
			this.blurpop.visible = false;
			
			this.home.mouseEnabled = true;
			this.next12.mouseEnabled = true;
			this.back12.mouseEnabled = true;
			this.sederhana.mouseEnabled = true;
		
		}
	}
	this.frame_13 = function() {
		this.stop;
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next13.addEventListener("click", next13ke14.bind(this));
		function next13ke14(){ 
			this.gotoAndStop(14); 
		}
		
		this.back13.addEventListener("click", back13ke12.bind(this));
		function back13ke12(){ 
			this.gotoAndStop(12); 
		}
	}
	this.frame_14 = function() {
		this.stop;
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next14.addEventListener("click", next14ke15.bind(this));
		function next14ke15(){ 
			this.gotoAndStop(15); 
		}
		
		this.back14.addEventListener("click", back14ke13.bind(this));
		function back14ke13(){ 
			this.gotoAndStop(13); 
		}
	}
	this.frame_15 = function() {
		this.stop;
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next15.addEventListener("click", next15ke16.bind(this));
		function next15ke16(){ 
			this.gotoAndStop(16); 
		}
		
		this.back15.addEventListener("click", back15ke14.bind(this));
		function back15ke14(){ 
			this.gotoAndStop(14); 
		}
	}
	this.frame_16 = function() {
		this.stop();
		
		// Navigasi
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next16.addEventListener("click", next16ke17.bind(this));
		function next16ke17(){ 
			this.gotoAndStop(17); 
		}
		
		this.back16.addEventListener("click", back16ke15.bind(this));
		function back16ke15(){ 
			this.gotoAndStop(15); 
		}
		
		this.conrep11.visible = false;
		this.tutupconrep1.visible = false;
		this.nextconrep11.visible = false;
		this.blurpop.visible = false;
		
		this.conrep12.visible = false;
		this.nextconrep12.visible = false;
		this.backconrep12.visible = false;
		
		this.conrep13.visible = false;
		this.backconrep13.visible = false;
		
		this.cthrep1.addEventListener("click", bukapoprep1.bind(this));
		function bukapoprep1()
		{
			this.conrep11.visible = true;
			this.tutupconrep1.visible = true;
			this.nextconrep11.visible = true;
			this.blurpop.visible = true;
			
			this.home.mouseEnabled = false;
			this.next16.mouseEnabled = false;
			this.back16.mouseEnabled = false;
			this.cthrep1.mouseEnabled = false;
		
		}
		
		this.tutupconrep1.addEventListener("click", tutupcthrep1.bind(this));
		function tutupcthrep1()
		{
			this.conrep11.visible = false;
			this.tutupconrep1.visible = false;
			this.nextconrep11.visible = false;
			this.blurpop.visible = false;
			
			this.home.mouseEnabled = true;
			this.next16.mouseEnabled = true;
			this.back16.mouseEnabled = true;
			this.cthrep1.mouseEnabled = true;
		
		}
		
		//contoh soal kedua
		this.nextconrep11.addEventListener("click", keconsolrep12.bind(this));
		function keconsolrep12()
		{
			this.conrep11.visible = false;
			this.tutupconrep1.visible = false;
			this.nextconrep11.visible = false;
			
			this.conrep12.visible = true;
			this.nextconrep12.visible = true;
			this.backconrep12.visible = true;
		
		}
		
		this.backconrep12.addEventListener("click", keconsolrep11.bind(this));
		function keconsolrep11()
		{
			this.conrep11.visible = true;
			this.tutupconrep1.visible = true;
			this.nextconrep11.visible = true;
			
			this.conrep12.visible = false;
			this.nextconrep12.visible = false;
			this.backconrep12.visible = false;
		
		}
		
		//contoh soal ketiga
		this.nextconrep12.addEventListener("click", keconsolrep13.bind(this));
		function keconsolrep13()
		{
			this.conrep11.visible = false;
			this.tutupconrep1.visible = false;
			this.nextconrep11.visible = false;
			
			this.conrep12.visible = false;
			this.nextconrep12.visible = false;
			this.backconrep12.visible = false;
			
			this.conrep13.visible = true;
			this.backconrep13.visible = true;
		
		}
		
		this.backconrep13.addEventListener("click", keconsolrep12.bind(this));
		function keconsolrep12()
		{
			this.conrep11.visible = false;
			this.tutupconrep1.visible = false;
			this.nextconrep11.visible = false;
			
			this.conrep12.visible = true;
			this.nextconrep12.visible = true;
			this.backconrep12.visible = true;
		
			this.conrep13.visible = false;
			this.backconrep13.visible = false;
		
		}
	}
	this.frame_17 = function() {
		this.stop();
		
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next17.addEventListener("click", next17ke18.bind(this));
		function next17ke18(){ 
			this.gotoAndStop(18); 
		}
		
		this.back17.addEventListener("click", back17ke16.bind(this));
		function back17ke16(){ 
			this.gotoAndStop(16); 
		}
		
		this.conrep21.visible = false;
		this.tutupconrep2.visible = false;
		this.nextconrep21.visible = false;
		this.blurpop.visible = false;
		
		this.conrep22.visible = false;
		this.backconrep22.visible = false;
		
		this.cthrep2.addEventListener("click", bukapoprep2.bind(this));
		function bukapoprep2()
		{
			this.conrep21.visible = true;
			this.tutupconrep2.visible = true;
			this.nextconrep21.visible = true;
			this.blurpop.visible = true;
			
			this.home.mouseEnabled = false;
			this.next17.mouseEnabled = false;
			this.back17.mouseEnabled = false;
			this.cthrep2.mouseEnabled = false;
		
		}
		
		this.tutupconrep2.addEventListener("click", tutupcthrep2.bind(this));
		function tutupcthrep2()
		{
			this.conrep21.visible = false;
			this.tutupconrep2.visible = false;
			this.nextconrep21.visible = false;
			this.blurpop.visible = false;
			
			this.home.mouseEnabled = true;
			this.next17.mouseEnabled = true;
			this.back17.mouseEnabled = true;
			this.cthrep2.mouseEnabled = true;
		}
		
		//contoh soal kedua
		this.nextconrep21.addEventListener("click", keconsolrep22.bind(this));
		function keconsolrep22()
		{
			this.conrep21.visible = false;
			this.tutupconrep2.visible = false;
			this.nextconrep21.visible = false;
			
			this.conrep22.visible = true;
			this.backconrep22.visible = true;
		}
		
		this.backconrep22.addEventListener("click", keconsolrep21.bind(this));
		function keconsolrep21()
		{
			this.conrep21.visible = true;
			this.tutupconrep2.visible = true;
			this.nextconrep21.visible = true;
			
			this.conrep22.visible = false;
			this.backconrep22.visible = false;
		}
	}
	this.frame_18 = function() {
		this.stop();
		
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next18.addEventListener("click", next18ke19.bind(this));
		function next18ke19(){ 
			this.gotoAndStop(19); 
		}
		
		this.back18.addEventListener("click", back18ke17.bind(this));
		function back18ke17(){ 
			this.gotoAndStop(17); 
		}
		
		this.conrep31.visible = false;
		this.tutupconrep3.visible = false;
		this.nextconrep31.visible = false;
		this.blurpop.visible = false;
		
		this.conrep32.visible = false;
		this.backconrep32.visible = false;
		
		this.cthrep3.addEventListener("click", bukapoprep3.bind(this));
		function bukapoprep3()
		{
			this.conrep31.visible = true;
			this.tutupconrep3.visible = true;
			this.nextconrep31.visible = true;
			this.blurpop.visible = true;
			
			this.home.mouseEnabled = false;
			this.next18.mouseEnabled = false;
			this.back18.mouseEnabled = false;
			this.cthrep3.mouseEnabled = false;
		}
		
		this.tutupconrep3.addEventListener("click", tutupcthrep3.bind(this));
		function tutupcthrep3()
		{
			this.conrep31.visible = false;
			this.tutupconrep3.visible = false;
			this.nextconrep31.visible = false;
			this.blurpop.visible = false;
			
			this.home.mouseEnabled = true;
			this.next18.mouseEnabled = true;
			this.back18.mouseEnabled = true;
			this.cthrep3.mouseEnabled = true;
		}
		
		//contoh soal kedua
		this.nextconrep31.addEventListener("click", keconsolrep32.bind(this));
		function keconsolrep32()
		{
			this.conrep31.visible = false;
			this.tutupconrep3.visible = false;
			this.nextconrep31.visible = false;
			
			this.conrep32.visible = true;
			this.backconrep32.visible = true;
		}
		
		this.backconrep32.addEventListener("click", keconsolrep31.bind(this));
		function keconsolrep31()
		{
			this.conrep31.visible = true;
			this.tutupconrep3.visible = true;
			this.nextconrep31.visible = true;
			
			this.conrep32.visible = false;
			this.backconrep32.visible = false;
		}
	}
	this.frame_19 = function() {
		this.stop();
		
		createjs.Touch.enable(stage);
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next19.addEventListener("click", next19ke20.bind(this));
		function next19ke20(){ 
			this.gotoAndStop(20); 
		}
		
		this.back19.addEventListener("click", back19ke18.bind(this));
		function back19ke18(){ 
			this.gotoAndStop(18); 
		}
		
		//DRAG AND DROP
		var self = this;
		
		// 1. Simpan posisi asli semua objek (Hanya dijalankan sekali saat start)
		if (!this.posisiAsli) {
		    this.posisiAsli = [
		        {x: this.menrep1.x, y: this.menrep1.y},
		        {x: this.menrep2.x, y: this.menrep2.y},
		        {x: this.menrep3.x, y: this.menrep3.y},
		        {x: this.menrep4.x, y: this.menrep4.y},
		        {x: this.menrep5.x, y: this.menrep5.y}
		    ];
		}
		
		var obyeks = [this.menrep1, this.menrep2, this.menrep3, this.menrep4, this.menrep5];
		var boxs = [this.kotrep1, this.kotrep2, this.kotrep3];
		
		// Sembunyikan tombol di awal
		this.next19.alpha = 0.3;
		this.next19.mouseEnabled = false;
		this.tombolUlangrep.alpha = 0.3;
		this.tombolUlangrep.mouseEnabled = false;
		
		// 2. Fungsi Drag & Drop
		obyeks.forEach(function(obj) {
		    obj.on("pressmove", function(evt) {
		        evt.currentTarget.x = evt.stageX / stage.scaleX;
		        evt.currentTarget.y = evt.stageY / stage.scaleY;
		    });
		
		    obj.on("pressup", function(evt) {
		        var item = evt.currentTarget;
		        for (var i = 0; i < boxs.length; i++) {
		            if (Math.abs(item.x - boxs[i].x) < 50 && Math.abs(item.y - boxs[i].y) < 50) {
		                item.x = boxs[i].x;
		                item.y = boxs[i].y;
		            }
		        }
		        cekMenang();
		    });
		});
		
		// 3. Fungsi Tombol Ulang (Reset ke Posisi Asli)
		this.tombolUlangrep.on("click", function() {
		    for (var i = 0; i < obyeks.length; i++) {
		        obyeks[i].x = self.posisiAsli[i].x;
		        obyeks[i].y = self.posisiAsli[i].y;
		    }
		    
		    // Matikan lagi tombol-tombolnya
		    self.next19.alpha = 0.3;
		    self.next19.mouseEnabled = false;
		    self.tombolUlangrep.alpha = 0.3;
		    self.tombolUlangrep.mouseEnabled = false;
		});
		
		function cekMenang() {
		    if (self.menrep2.x == self.kotrep3.x && 
		        self.menrep3.x == self.kotrep2.x && 
		        self.menrep4.x == self.kotrep1.x) {
		        
		        self.next19.alpha = 1;
		        self.next19.mouseEnabled = true;
		        self.tombolUlangrep.alpha = 0.3;
		        self.tombolUlangrep.mouseEnabled = false;
		    } else {
		        self.tombolUlangrep.alpha = 1;
		        self.tombolUlangrep.mouseEnabled = true;
		    }
		}
	}
	this.frame_20 = function() {
		this.stop();
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next20.addEventListener("click", next20ke21.bind(this));
		function next20ke21(){ 
			this.gotoAndStop(21); 
		}
		
		this.back20.addEventListener("click", back20ke19.bind(this));
		function back20ke19(){ 
			this.gotoAndStop(19); 
		}
	}
	this.frame_21 = function() {
		this.stop();
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next21.addEventListener("click", next21ke22.bind(this));
		function next21ke22(){ 
			this.gotoAndStop(22); 
		}
		
		this.back21.addEventListener("click", back21ke20.bind(this));
		function back21ke20(){ 
			this.gotoAndStop(20); 
		}
		
		this.fakrep1.visible = false;
		this.tutupfakrep1.visible = false;
		this.fakrep2.visible = false;
		this.tutupfakrep2.visible = false;
		this.fakrep3.visible = false;
		this.tutupfakrep3.visible = false;
		this.blurpop.visible = false;
		
		// fakta 1
		this.faktarep1.addEventListener("click", kefaktarep1.bind(this));
		function kefaktarep1()
		{
			this.fakrep1.visible = true;
			this.tutupfakrep1.visible = true;
			this.blurpop.visible = true;
			
			this.home.mouseEnabled = false;
			this.next21.mouseEnabled = false;
			this.back21.mouseEnabled = false;
			this.faktarep1.mouseEnabled = false;
			this.faktarep2.mouseEnabled = false;
			this.faktarep3.mouseEnabled = false;
		}
		
		this.tutupfakrep1.addEventListener("click", tutupfaktarep1.bind(this));
		function tutupfaktarep1()
		{
			this.fakrep1.visible = false;
			this.tutupfakrep1.visible = false;
			this.blurpop.visible = false;
			
			this.home.mouseEnabled = true;
			this.next21.mouseEnabled = true;
			this.back21.mouseEnabled = true;
			this.faktarep1.mouseEnabled = true;
			this.faktarep2.mouseEnabled = true;
			this.faktarep3.mouseEnabled = true;
		}
		
		// fakta 2
		this.faktarep2.addEventListener("click", kefaktarep2.bind(this));
		function kefaktarep2()
		{
			this.fakrep2.visible = true;
			this.tutupfakrep2.visible = true;
			this.blurpop.visible = true;
			
			this.home.mouseEnabled = false;
			this.next21.mouseEnabled = false;
			this.back21.mouseEnabled = false;
			this.faktarep1.mouseEnabled = false;
			this.faktarep2.mouseEnabled = false;
			this.faktarep3.mouseEnabled = false;
		}
		
		this.tutupfakrep2.addEventListener("click", tutupfaktarep2.bind(this));
		function tutupfaktarep2()
		{
			this.fakrep2.visible = false;
			this.tutupfakrep2.visible = false;
			this.blurpop.visible = false;
			
			this.home.mouseEnabled = true;
			this.next21.mouseEnabled = true;
			this.back21.mouseEnabled = true;
			this.faktarep1.mouseEnabled = true;
			this.faktarep2.mouseEnabled = true;
			this.faktarep3.mouseEnabled = true;
		}
		
		// fakta 3
		this.faktarep3.addEventListener("click", kefaktarep3.bind(this));
		function kefaktarep3()
		{
			this.fakrep3.visible = true;
			this.tutupfakrep3.visible = true;
			this.blurpop.visible = true;
			
			this.home.mouseEnabled = false;
			this.next21.mouseEnabled = false;
			this.back21.mouseEnabled = false;
			this.faktarep1.mouseEnabled = false;
			this.faktarep2.mouseEnabled = false;
			this.faktarep3.mouseEnabled = false;
		}
		
		this.tutupfakrep3.addEventListener("click", tutupfaktarep3.bind(this));
		function tutupfaktarep3()
		{
			this.fakrep3.visible = false;
			this.tutupfakrep3.visible = false;
			this.blurpop.visible = false;
			
			this.home.mouseEnabled = true;
			this.next21.mouseEnabled = true;
			this.back21.mouseEnabled = true;
			this.faktarep1.mouseEnabled = true;
			this.faktarep2.mouseEnabled = true;
			this.faktarep3.mouseEnabled = true;
		}
	}
	this.frame_22 = function() {
		this.stop();
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next22.addEventListener("click", next22ke23.bind(this));
		function next22ke23(){ 
			this.gotoAndStop(23); 
		}
		
		this.back22.addEventListener("click", back22ke21.bind(this));
		function back22ke21(){ 
			this.gotoAndStop(21); 
		}
	}
	this.frame_23 = function() {
		this.stop();
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.next23.addEventListener("click", next23ke24.bind(this));
		function next23ke24(){ 
			this.gotoAndStop(24); 
		}
		
		this.back23.addEventListener("click", back23ke22.bind(this));
		function back23ke22(){ 
			this.gotoAndStop(22); 
		}
	}
	this.frame_24 = function() {
		this.stop();
		
		this.back24.addEventListener("click", back24ke23.bind(this));
		function back24ke23(){ 
			this.gotoAndStop(23); 
		}
		
		this.latrep.addEventListener("click", latrepke25.bind(this));
		function latrepke25(){ 
			this.gotoAndStop(25); 
		}
	}
	this.frame_25 = function() {
		this.stop();
		
		var that = this;
		
		this.skor = 0;
		
		this.feedbackbenar.visible = false;
		this.feedbacksalah.visible = false;
		
		function jawabanBenar() {
		    this.skor += 10;
		
		    this.feedbackbenar.visible = true;
		    this.feedbacksalah.visible = false;
			
			  setTimeout(() => {
		        this.gotoAndStop(26);
		    }, 1000);
		}
		
		function jawabanSalah() {
		    this.feedbacksalah.visible = false;
		    this.feedbacksalah.visible = true;
		
		    setTimeout(() => {
		        this.gotoAndStop(26);
		    }, 1000);
		}
		
		this.opsirep1a.on("click", jawabanSalah.bind(this));
		this.opsirep1b.on("click", jawabanSalah.bind(this));
		this.opsirep1c.on("click", jawabanBenar.bind(this));
		this.opsirep1d.on("click", jawabanSalah.bind(this));
	}
	this.frame_26 = function() {
		this.stop();
		
		
		this.feedbackbenar.visible = false;
		this.feedbacksalah.visible = false;
		
		function jawabanBenar() {
		    this.skor += 10;
		
		    this.feedbackbenar.visible = true;
		    this.feedbacksalah.visible = false;
			
			  setTimeout(() => {
		        this.gotoAndStop(27);
		    }, 1000);
		}
		
		function jawabanSalah() {
		    this.feedbackbenar.visible = false;
		    this.feedbacksalah.visible = true;
		
		    setTimeout(() => {
		        this.gotoAndStop(27);
		    }, 1000);
		}
		
		this.opsirep2a.on("click", jawabanSalah.bind(this));
		this.opsirep2b.on("click", jawabanBenar.bind(this));
		this.opsirep2c.on("click", jawabanSalah.bind(this));
		this.opsirep2d.on("click", jawabanSalah.bind(this));
	}
	this.frame_27 = function() {
		this.stop();
		
		
		this.feedbackbenar.visible = false;
		this.feedbacksalah.visible = false;
		
		function jawabanBenar() {
		    this.skor += 10;
		
		    this.feedbackbenar.visible = true;
		    this.feedbacksalah.visible = false;
			
			  setTimeout(() => {
		        this.gotoAndStop(28);
		    }, 1000);
		}
		
		function jawabanSalah() {
		    this.feedbackbenar.visible = false;
		    this.feedbacksalah.visible = true;
		
		    setTimeout(() => {
		        this.gotoAndStop(28);
		    }, 1000);
		}
		
		this.opsirep3a.on("click", jawabanBenar.bind(this));
		this.opsirep3b.on("click", jawabanSalah.bind(this));
		this.opsirep3c.on("click", jawabanSalah.bind(this));
		this.opsirep3d.on("click", jawabanSalah.bind(this));
	}
	this.frame_28 = function() {
		this.stop();
		
		
		this.feedbackbenar.visible = false;
		this.feedbacksalah.visible = false;
		
		function jawabanBenar() {
		    this.skor += 10;
		
		    this.feedbackbenar.visible = true;
		    this.feedbacksalah.visible = false;
			
			  setTimeout(() => {
		        this.gotoAndStop(29);
		    }, 1000);
		}
		
		function jawabanSalah() {
		    this.feedbackbenar.visible = false;
		    this.feedbacksalah.visible = true;
		
		    setTimeout(() => {
		        this.gotoAndStop(29);
		    }, 1000);
		}
		
		this.opsirep4a.on("click", jawabanSalah.bind(this));
		this.opsirep4b.on("click", jawabanSalah.bind(this));
		this.opsirep4c.on("click", jawabanSalah.bind(this));
		this.opsirep4d.on("click", jawabanBenar.bind(this));
	}
	this.frame_29 = function() {
		this.stop();
		
		
		this.feedbackbenar.visible = false;
		this.feedbacksalah.visible = false;
		
		function jawabanBenar() {
		    this.skor += 10;
		
		    this.feedbackbenar.visible = true;
		    this.feedbacksalah.visible = false;
			
			  setTimeout(() => {
		        this.gotoAndStop(30);
		    }, 1000);
		}
		
		function jawabanSalah() {
		    this.feedbackbenar.visible = false;
		    this.feedbacksalah.visible = true;
		
		    setTimeout(() => {
		        this.gotoAndStop(30);
		    }, 1000);
		}
		
		this.opsirep5a.on("click", jawabanBenar.bind(this));
		this.opsirep5b.on("click", jawabanSalah.bind(this));
		this.opsirep5c.on("click", jawabanSalah.bind(this));
		this.opsirep5d.on("click", jawabanSalah.bind(this));
	}
	this.frame_30 = function() {
		this.stop();
		
		
		this.feedbackbenar.visible = false;
		this.feedbacksalah.visible = false;
		
		function jawabanBenar() {
		    this.skor += 10;
		
		    this.feedbackbenar.visible = true;
		    this.feedbacksalah.visible = false;
			
			  setTimeout(() => {
		        this.gotoAndStop(31);
		    }, 1000);
		}
		
		function jawabanSalah() {
		    this.feedbackbenar.visible = false;
		    this.feedbacksalah.visible = true;
		
		    setTimeout(() => {
		        this.gotoAndStop(31);
		    }, 1000);
		}
		
		this.opsirep6a.on("click", jawabanSalah.bind(this));
		this.opsirep6b.on("click", jawabanBenar.bind(this));
		this.opsirep6c.on("click", jawabanSalah.bind(this));
		this.opsirep6d.on("click", jawabanSalah.bind(this));
	}
	this.frame_31 = function() {
		this.stop();
		
		
		this.feedbackbenar.visible = false;
		this.feedbacksalah.visible = false;
		
		function jawabanBenar() {
		    this.skor += 10;
		
		    this.feedbackbenar.visible = true;
		    this.feedbacksalah.visible = false;
			
			  setTimeout(() => {
		        this.gotoAndStop(32);
		    }, 1000);
		}
		
		function jawabanSalah() {
		    this.feedbackbenar.visible = false;
		    this.feedbacksalah.visible = true;
		
		    setTimeout(() => {
		        this.gotoAndStop(32);
		    }, 1000);
		}
		
		this.opsirep7a.on("click", jawabanSalah.bind(this));
		this.opsirep7b.on("click", jawabanSalah.bind(this));
		this.opsirep7c.on("click", jawabanSalah.bind(this));
		this.opsirep7d.on("click", jawabanBenar.bind(this));
	}
	this.frame_32 = function() {
		this.stop();
		
		
		this.feedbackbenar.visible = false;
		this.feedbacksalah.visible = false;
		
		function jawabanBenar() {
		    this.skor += 10;
		
		    this.feedbackbenar.visible = true;
		    this.feedbacksalah.visible = false;
			
			  setTimeout(() => {
		        this.gotoAndStop(33);
		    }, 1000);
		}
		
		function jawabanSalah() {
		    this.feedbackbenar.visible = false;
		    this.feedbacksalah.visible = true;
		
		    setTimeout(() => {
		        this.gotoAndStop(33);
		    }, 1000);
		}
		
		this.opsirep8a.on("click", jawabanBenar.bind(this));
		this.opsirep8b.on("click", jawabanSalah.bind(this));
		this.opsirep8c.on("click", jawabanSalah.bind(this));
		this.opsirep8d.on("click", jawabanSalah.bind(this));
	}
	this.frame_33 = function() {
		this.stop();
		
		
		this.feedbackbenar.visible = false;
		this.feedbacksalah.visible = false;
		
		function jawabanBenar() {
		    this.skor += 10;
		
		    this.feedbackbenar.visible = true;
		    this.feedbacksalah.visible = false;
			
			  setTimeout(() => {
		        this.gotoAndStop(34);
		    }, 1000);
		}
		
		function jawabanSalah() {
		    this.feedbackbenar.visible = false;
		    this.feedbacksalah.visible = true;
		
		    setTimeout(() => {
		        this.gotoAndStop(34);
		    }, 1000);
		}
		
		this.opsirep9a.on("click", jawabanSalah.bind(this));
		this.opsirep9b.on("click", jawabanBenar.bind(this));
		this.opsirep9c.on("click", jawabanSalah.bind(this));
		this.opsirep9d.on("click", jawabanSalah.bind(this));
	}
	this.frame_34 = function() {
		this.stop();
		
		
		this.feedbackbenar.visible = false;
		this.feedbacksalah.visible = false;
		
		function jawabanBenar() {
		    this.skor += 10;
		
		    this.feedbackbenar.visible = true;
		    this.feedbacksalah.visible = false;
			
			  setTimeout(() => {
		        this.gotoAndStop(35);
		    }, 1000);
		}
		
		function jawabanSalah() {
		    this.feedbackbenar.visible = false;
		    this.feedbacksalah.visible = true;
		
		    setTimeout(() => {
		        this.gotoAndStop(35);
		    }, 1000);
		}
		
		this.opsirep10a.on("click", jawabanSalah.bind(this));
		this.opsirep10b.on("click", jawabanSalah.bind(this));
		this.opsirep10c.on("click", jawabanBenar.bind(this));
		this.opsirep10d.on("click", jawabanSalah.bind(this));
	}
	this.frame_35 = function() {
		this.stop();
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.txtSkor.text = this.skor.toString();
		
		this.bahasrep.addEventListener("click", bahasrepke36.bind(this));
		function bahasrepke36(){
			this.gotoAndStop(36);
		}
	}
	this.frame_36 = function() {
		this.stop();
		
		this.home.addEventListener("click", homeke0.bind(this));
		function homeke0(){
			this.gotoAndStop(0);
		}
		
		this.back36.addEventListener("click", back36ke35.bind(this));
		function back36ke35(){ 
			this.gotoAndStop(35); 
		}
		
		this.rep1.addEventListener("click", bahasrep1ke37.bind(this));
		function bahasrep1ke37() {
			this.gotoAndStop(37);
		}
		
		this.rep2.addEventListener("click", bahasrep2ke38.bind(this));
		function bahasrep2ke38() {
			this.gotoAndStop(38);
		}
		
		this.rep3.addEventListener("click", bahasrep3ke39.bind(this));
		function bahasrep3ke39() {
			this.gotoAndStop(39);
		}
		
		this.rep4.addEventListener("click", bahasrep4ke40.bind(this));
		function bahasrep4ke40() {
			this.gotoAndStop(40);
		}
		
		this.rep5.addEventListener("click", bahasrep5ke41.bind(this));
		function bahasrep5ke41() {
			this.gotoAndStop(41);
		}
		
		this.rep6.addEventListener("click", bahasrep6ke42.bind(this));
		function bahasrep6ke42() {
			this.gotoAndStop(42);
		}
		
		this.rep7.addEventListener("click", bahasrep7ke43.bind(this));
		function bahasrep7ke43() {
			this.gotoAndStop(43);
		}
		
		this.rep8.addEventListener("click", bahasrep8ke44.bind(this));
		function bahasrep8ke44() {
			this.gotoAndStop(44);
		}
		
		this.rep9.addEventListener("click", bahasrep9ke45.bind(this));
		function bahasrep9ke45() {
			this.gotoAndStop(45);
		}
		
		this.rep10.addEventListener("click", bahasrep10ke46.bind(this));
		function bahasrep10ke46() {
			this.gotoAndStop(46);
		}
	}
	this.frame_37 = function() {
		this.stop();
		
		this.back37.addEventListener("click", back37ke36.bind(this));
		function back37ke36(){ 
			this.gotoAndStop(36); 
		}
	}
	this.frame_38 = function() {
		this.stop();
		
		this.back38.addEventListener("click", back38ke36.bind(this));
		function back38ke36(){ 
			this.gotoAndStop(36); 
		}
	}
	this.frame_39 = function() {
		this.stop();
		
		this.back39.addEventListener("click", back39ke36.bind(this));
		function back39ke36(){ 
			this.gotoAndStop(36); 
		}
	}
	this.frame_40 = function() {
		this.stop();
		
		this.back40.addEventListener("click", back40ke36.bind(this));
		function back40ke36(){ 
			this.gotoAndStop(36); 
		}
		
		this.bahasporo.visible = false;
		this.tutupbahasporo.visible = false;
		this.vidporogapitrep.visible = false;
		this.blurpop.visible = false;
		
		this.popbahasporo.addEventListener("click", bahasporogapit.bind(this));
		function bahasporogapit()
		{
			this.bahasporo.visible = true;
			this.tutupbahasporo.visible = true;
			this.vidporogapitrep.visible = true;
			this.vidporogapitrep.x = 640;
			this.vidporogapitrep.y = 400;
			this.blurpop.visible = true;
			
			this.back40.mouseEnabled = false;
			this.popbahasporo.mouseEnabled = false;
		}
		
		this.tutupbahasporo.addEventListener("click", tutupvideorep1.bind(this));
		function tutupvideorep1()
		{
			this.bahasporo.visible = false;
			this.tutupbahasporo.visible = false;
			this.vidporogapitrep.visible = false;
			this.vidporogapitrep.x = -1000;
			this.blurpop.visible = false;
			
			this.back40.mouseEnabled = true;
			this.popbahasporo.mouseEnabled = true;
		}
	}
	this.frame_41 = function() {
		this.stop();
		
		this.back41.addEventListener("click", back41ke36.bind(this));
		function back41ke36(){ 
			this.gotoAndStop(36); 
		}
	}
	this.frame_42 = function() {
		this.stop();
		
		this.back42.addEventListener("click", back42ke36.bind(this));
		function back42ke36(){ 
			this.gotoAndStop(36); 
		}
	}
	this.frame_43 = function() {
		this.stop();
		
		this.back43.addEventListener("click", back43ke36.bind(this));
		function back43ke36(){ 
			this.gotoAndStop(36); 
		}
	}
	this.frame_44 = function() {
		this.stop();
		
		this.back44.addEventListener("click", back44ke36.bind(this));
		function back44ke36(){ 
			this.gotoAndStop(36); 
		}
	}
	this.frame_45 = function() {
		this.stop();
		
		this.back45.addEventListener("click", back45ke36.bind(this));
		function back45ke36(){ 
			this.gotoAndStop(36); 
		}
	}
	this.frame_46 = function() {
		this.stop();
		
		this.back46.addEventListener("click", back46ke36.bind(this));
		function back46ke36(){ 
			this.gotoAndStop(36); 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(1).call(this.frame_32).wait(1).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(1).call(this.frame_39).wait(1).call(this.frame_40).wait(1).call(this.frame_41).wait(1).call(this.frame_42).wait(1).call(this.frame_43).wait(1).call(this.frame_44).wait(1).call(this.frame_45).wait(1).call(this.frame_46).wait(1));

	// pop3
	this.backconrep13 = new lib.Symbol28();
	this.backconrep13.name = "backconrep13";
	this.backconrep13.setTransform(165.85,624.8,0.8424,0.8404,0,0,0,45.4,46.1);
	new cjs.ButtonHelper(this.backconrep13, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.conrep13 = new lib.Symbol20_1();
	this.conrep13.name = "conrep13";
	this.conrep13.setTransform(645,370);

	this.tutupfakrep3 = new lib.Symbol31();
	this.tutupfakrep3.name = "tutupfakrep3";
	this.tutupfakrep3.setTransform(130,84);
	new cjs.ButtonHelper(this.tutupfakrep3, 0, 1, 2, false, new lib.Symbol31(), 3);

	this.fakrep3 = new lib.Symbol27_1();
	this.fakrep3.name = "fakrep3";
	this.fakrep3.setTransform(645,370);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.conrep13},{t:this.backconrep13}]},16).to({state:[]},1).to({state:[{t:this.fakrep3},{t:this.tutupfakrep3}]},4).to({state:[]},1).wait(25));

	// pop2
	this.nextconrep12 = new lib.Symbol29();
	this.nextconrep12.name = "nextconrep12";
	this.nextconrep12.setTransform(1123.7,624.8,0.8424,0.8404,0,0,0,52.6,46.1);
	new cjs.ButtonHelper(this.nextconrep12, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.backconrep12 = new lib.Symbol28();
	this.backconrep12.name = "backconrep12";
	this.backconrep12.setTransform(165.85,624.8,0.8424,0.8404,0,0,0,45.4,46.1);
	new cjs.ButtonHelper(this.backconrep12, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.conrep12 = new lib.Symbol19_1();
	this.conrep12.name = "conrep12";
	this.conrep12.setTransform(645,370);

	this.backconrep22 = new lib.Symbol28();
	this.backconrep22.name = "backconrep22";
	this.backconrep22.setTransform(165.85,624.8,0.8424,0.8404,0,0,0,45.4,46.1);
	new cjs.ButtonHelper(this.backconrep22, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.conrep22 = new lib.Symbol22_1();
	this.conrep22.name = "conrep22";
	this.conrep22.setTransform(645,370);

	this.backconrep32 = new lib.Symbol28();
	this.backconrep32.name = "backconrep32";
	this.backconrep32.setTransform(165.85,624.8,0.8424,0.8404,0,0,0,45.4,46.1);
	new cjs.ButtonHelper(this.backconrep32, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.conrep32 = new lib.Symbol24_1();
	this.conrep32.name = "conrep32";
	this.conrep32.setTransform(645,370);

	this.tutupfakrep2 = new lib.Symbol31();
	this.tutupfakrep2.name = "tutupfakrep2";
	this.tutupfakrep2.setTransform(130,84);
	new cjs.ButtonHelper(this.tutupfakrep2, 0, 1, 2, false, new lib.Symbol31(), 3);

	this.fakrep2 = new lib.Symbol26_1();
	this.fakrep2.name = "fakrep2";
	this.fakrep2.setTransform(645,370);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.conrep12},{t:this.backconrep12},{t:this.nextconrep12}]},16).to({state:[{t:this.conrep22},{t:this.backconrep22}]},1).to({state:[{t:this.conrep32},{t:this.backconrep32}]},1).to({state:[]},1).to({state:[{t:this.fakrep2},{t:this.tutupfakrep2}]},2).to({state:[]},1).wait(25));

	// pop1
	this.tutupsederhana = new lib.Symbol31();
	this.tutupsederhana.name = "tutupsederhana";
	this.tutupsederhana.setTransform(130,84);
	new cjs.ButtonHelper(this.tutupsederhana, 0, 1, 2, false, new lib.Symbol31(), 3);

	this.popsederhana = new lib.Symbol2_1();
	this.popsederhana.name = "popsederhana";
	this.popsederhana.setTransform(640,367.1,1,1,0,0,0,475,267.1);

	this.blurpop = new lib.Symbol1_1();
	this.blurpop.name = "blurpop";
	this.blurpop.setTransform(628.7,362.6,1,1,0,0,0,654.7,369.6);

	this.nextconrep11 = new lib.Symbol29();
	this.nextconrep11.name = "nextconrep11";
	this.nextconrep11.setTransform(1123.7,624.8,0.8424,0.8404,0,0,0,52.6,46.1);
	new cjs.ButtonHelper(this.nextconrep11, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.tutupconrep1 = new lib.Symbol31();
	this.tutupconrep1.name = "tutupconrep1";
	this.tutupconrep1.setTransform(130,84);
	new cjs.ButtonHelper(this.tutupconrep1, 0, 1, 2, false, new lib.Symbol31(), 3);

	this.conrep11 = new lib.Symbol18_1();
	this.conrep11.name = "conrep11";
	this.conrep11.setTransform(645,370);

	this.nextconrep21 = new lib.Symbol29();
	this.nextconrep21.name = "nextconrep21";
	this.nextconrep21.setTransform(1123.7,624.8,0.8424,0.8404,0,0,0,52.6,46.1);
	new cjs.ButtonHelper(this.nextconrep21, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.tutupconrep2 = new lib.Symbol31();
	this.tutupconrep2.name = "tutupconrep2";
	this.tutupconrep2.setTransform(130,84);
	new cjs.ButtonHelper(this.tutupconrep2, 0, 1, 2, false, new lib.Symbol31(), 3);

	this.conrep21 = new lib.Symbol21_1();
	this.conrep21.name = "conrep21";
	this.conrep21.setTransform(645,370);

	this.nextconrep31 = new lib.Symbol29();
	this.nextconrep31.name = "nextconrep31";
	this.nextconrep31.setTransform(1123.7,624.8,0.8424,0.8404,0,0,0,52.6,46.1);
	new cjs.ButtonHelper(this.nextconrep31, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.tutupconrep3 = new lib.Symbol31();
	this.tutupconrep3.name = "tutupconrep3";
	this.tutupconrep3.setTransform(130,84);
	new cjs.ButtonHelper(this.tutupconrep3, 0, 1, 2, false, new lib.Symbol31(), 3);

	this.conrep31 = new lib.Symbol23_1();
	this.conrep31.name = "conrep31";
	this.conrep31.setTransform(645,370);

	this.tombolUlangrep = new lib.tombolulang_1();
	this.tombolUlangrep.name = "tombolUlangrep";
	this.tombolUlangrep.setTransform(661.4,649.15,0.6421,0.6475,0,0,0,58.4,52.6);
	new cjs.ButtonHelper(this.tombolUlangrep, 0, 1, 2, false, new lib.tombolulang_1(), 3);

	this.menrep5 = new lib.menrep5();
	this.menrep5.name = "menrep5";
	this.menrep5.setTransform(835.65,524.1,0.6421,0.6475,0,0,0,25.2,40.4);

	this.menrep4 = new lib.menrep4();
	this.menrep4.name = "menrep4";
	this.menrep4.setTransform(753.2,524.1,0.6421,0.6475,0,0,0,25.2,40.4);

	this.menrep3 = new lib.menrep3();
	this.menrep3.name = "menrep3";
	this.menrep3.setTransform(799.55,576.2,0.6421,0.6475,0,0,0,196,25.7);

	this.menrep2 = new lib.menrep2();
	this.menrep2.name = "menrep2";
	this.menrep2.setTransform(496.1,576.2,0.6421,0.6475,0,0,0,196,25.7);

	this.menrep1 = new lib.menrep1();
	this.menrep1.name = "menrep1";
	this.menrep1.setTransform(496.1,514.6,0.6421,0.6475,0,0,0,196,25.7);

	this.kotrep3 = new lib.kotrep3();
	this.kotrep3.name = "kotrep3";
	this.kotrep3.setTransform(799.9,423.2,0.6421,0.6475,0,0,0,194.9,26.5);

	this.kotrep2 = new lib.kotrep2();
	this.kotrep2.name = "kotrep2";
	this.kotrep2.setTransform(777.1,360.55,0.6421,0.6475,0,0,0,194.9,26.5);

	this.kotrep1 = new lib.kotrep1();
	this.kotrep1.name = "kotrep1";
	this.kotrep1.setTransform(759.6,288.45,0.6421,0.6475,0,0,0,23.2,40.6);

	this.tutupfakrep1 = new lib.Symbol31();
	this.tutupfakrep1.name = "tutupfakrep1";
	this.tutupfakrep1.setTransform(130,84);
	new cjs.ButtonHelper(this.tutupfakrep1, 0, 1, 2, false, new lib.Symbol31(), 3);

	this.fakrep1 = new lib.Symbol25_1();
	this.fakrep1.name = "fakrep1";
	this.fakrep1.setTransform(645,370);

	this.vidporogapitrep = new lib.an_Video({'id': 'vidporogapitrep', 'src':'videos/bahas%20poro%20rep.mp4', 'autoplay':false, 'controls':true, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.vidporogapitrep.name = "vidporogapitrep";
	this.vidporogapitrep.setTransform(636.75,394.9,1.7177,1.2882,0,0,0,200.1,150.1);

	this.tutupbahasporo = new lib.Symbol31();
	this.tutupbahasporo.name = "tutupbahasporo";
	this.tutupbahasporo.setTransform(145.35,81.1);
	new cjs.ButtonHelper(this.tutupbahasporo, 0, 1, 2, false, new lib.Symbol31(), 3);

	this.bahasporo = new lib.Symbol13_1();
	this.bahasporo.name = "bahasporo";
	this.bahasporo.setTransform(640,367.2,1,1,0,0,0,475,267.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.blurpop},{t:this.popsederhana},{t:this.tutupsederhana}]},12).to({state:[]},1).to({state:[{t:this.blurpop},{t:this.conrep11},{t:this.tutupconrep1},{t:this.nextconrep11}]},3).to({state:[{t:this.blurpop},{t:this.conrep21},{t:this.tutupconrep2},{t:this.nextconrep21}]},1).to({state:[{t:this.blurpop},{t:this.conrep31},{t:this.tutupconrep3},{t:this.nextconrep31}]},1).to({state:[{t:this.kotrep1},{t:this.kotrep2},{t:this.kotrep3},{t:this.menrep1},{t:this.menrep2},{t:this.menrep3},{t:this.menrep4},{t:this.menrep5},{t:this.tombolUlangrep}]},1).to({state:[]},1).to({state:[{t:this.blurpop},{t:this.fakrep1},{t:this.tutupfakrep1}]},1).to({state:[]},1).to({state:[{t:this.blurpop},{t:this.bahasporo},{t:this.tutupbahasporo},{t:this.vidporogapitrep}]},18).to({state:[]},1).wait(6));

	// buttoon
	this.petunjuk = new lib.Symbol3();
	this.petunjuk.name = "petunjuk";
	this.petunjuk.setTransform(1166.5,88,1,1,0,0,0,48.5,44);
	new cjs.ButtonHelper(this.petunjuk, 0, 1, 2, false, new lib.Symbol3(), 3);

	this.profil = new lib.Symbol2();
	this.profil.name = "profil";
	this.profil.setTransform(1025.5,88,1,1,0,0,0,48.5,44);
	new cjs.ButtonHelper(this.profil, 0, 1, 2, false, new lib.Symbol2(), 3);

	this.mulai = new lib.Symbol1();
	this.mulai.name = "mulai";
	this.mulai.setTransform(325.5,550.5,1,1,0,0,0,143.5,46.5);
	new cjs.ButtonHelper(this.mulai, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.tombolhome = new lib.Symbol30();
	this.tombolhome.name = "tombolhome";
	this.tombolhome.setTransform(1201.8,68.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.tombolhome, 0, 1, 2, false, new lib.Symbol30(), 3);

	this.next1 = new lib.Symbol29();
	this.next1.name = "next1";
	this.next1.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next1, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back1 = new lib.Symbol28();
	this.back1.name = "back1";
	this.back1.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back1, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.next2 = new lib.Symbol29();
	this.next2.name = "next2";
	this.next2.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next2, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back2 = new lib.Symbol28();
	this.back2.name = "back2";
	this.back2.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back2, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.next3 = new lib.Symbol29();
	this.next3.name = "next3";
	this.next3.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next3, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back3 = new lib.Symbol28();
	this.back3.name = "back3";
	this.back3.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back3, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back4 = new lib.Symbol28();
	this.back4.name = "back4";
	this.back4.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back4, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back5 = new lib.Symbol28();
	this.back5.name = "back5";
	this.back5.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back5, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.home = new lib.Symbol30();
	this.home.name = "home";
	this.home.setTransform(1201.8,68.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.home, 0, 1, 2, false, new lib.Symbol30(), 3);

	this.evaluasi = new lib.Symbol6();
	this.evaluasi.name = "evaluasi";
	this.evaluasi.setTransform(988.5,557.5,1,1,0,0,0,127.5,41.5);
	new cjs.ButtonHelper(this.evaluasi, 0, 1, 2, false, new lib.Symbol6(), 3);

	this.materi = new lib.Symbol5();
	this.materi.name = "materi";
	this.materi.setTransform(642.5,557.5,1,1,0,0,0,127.5,41.5);
	new cjs.ButtonHelper(this.materi, 0, 1, 2, false, new lib.Symbol5(), 3);

	this.cptp = new lib.Symbol4();
	this.cptp.name = "cptp";
	this.cptp.setTransform(293.5,557.5,1,1,0,0,0,127.5,41.5);
	new cjs.ButtonHelper(this.cptp, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.next7 = new lib.Symbol29();
	this.next7.name = "next7";
	this.next7.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next7, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back7 = new lib.Symbol28();
	this.back7.name = "back7";
	this.back7.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back7, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back8 = new lib.Symbol28();
	this.back8.name = "back8";
	this.back8.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back8, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back9 = new lib.Symbol28();
	this.back9.name = "back9";
	this.back9.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back9, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.aplikasi = new lib.Symbol10();
	this.aplikasi.name = "aplikasi";
	this.aplikasi.setTransform(856,511.5,1,1,0,0,0,146,54.5);
	new cjs.ButtonHelper(this.aplikasi, 0, 1, 2, false, new lib.Symbol10(), 3);

	this.aritmetika = new lib.Symbol9();
	this.aritmetika.name = "aritmetika";
	this.aritmetika.setTransform(501,511.5,1,1,0,0,0,146,54.5);
	new cjs.ButtonHelper(this.aritmetika, 0, 1, 2, false, new lib.Symbol9(), 3);

	this.urut = new lib.Symbol8();
	this.urut.name = "urut";
	this.urut.setTransform(794,377.5,1,1,0,0,0,147,54.5);
	new cjs.ButtonHelper(this.urut, 0, 1, 2, false, new lib.Symbol8(), 3);

	this.represen = new lib.Symbol7();
	this.represen.name = "represen";
	this.represen.setTransform(433,377.5,1,1,0,0,0,153,54.5);
	new cjs.ButtonHelper(this.represen, 0, 1, 2, false, new lib.Symbol7(), 3);

	this.vidamatirep = new lib.an_Video({'id': 'vidamatirep', 'src':'videos/mengamati%20rep.mp4', 'autoplay':false, 'controls':true, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.vidamatirep.name = "vidamatirep";
	this.vidamatirep.setTransform(662.85,462.25,1.532,1.149,0,0,0,200.1,150.1);

	this.next10 = new lib.Symbol29();
	this.next10.name = "next10";
	this.next10.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next10, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back10 = new lib.Symbol28();
	this.back10.name = "back10";
	this.back10.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back10, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.next11 = new lib.Symbol29();
	this.next11.name = "next11";
	this.next11.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next11, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back11 = new lib.Symbol28();
	this.back11.name = "back11";
	this.back11.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back11, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.next12 = new lib.Symbol29();
	this.next12.name = "next12";
	this.next12.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next12, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back12 = new lib.Symbol28();
	this.back12.name = "back12";
	this.back12.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back12, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.sederhana = new lib.Symbol11();
	this.sederhana.name = "sederhana";
	this.sederhana.setTransform(644,621.5,1,1,0,0,0,103,33.5);
	new cjs.ButtonHelper(this.sederhana, 0, 1, 2, false, new lib.Symbol11(), 3);

	this.next13 = new lib.Symbol29();
	this.next13.name = "next13";
	this.next13.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next13, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back13 = new lib.Symbol28();
	this.back13.name = "back13";
	this.back13.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back13, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.next14 = new lib.Symbol29();
	this.next14.name = "next14";
	this.next14.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next14, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back14 = new lib.Symbol28();
	this.back14.name = "back14";
	this.back14.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back14, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.next15 = new lib.Symbol29();
	this.next15.name = "next15";
	this.next15.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next15, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back15 = new lib.Symbol28();
	this.back15.name = "back15";
	this.back15.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back15, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.cthrep1 = new lib.contohsoal();
	this.cthrep1.name = "cthrep1";
	this.cthrep1.setTransform(653,633.5);
	new cjs.ButtonHelper(this.cthrep1, 0, 1, 2, false, new lib.contohsoal(), 3);

	this.next16 = new lib.Symbol29();
	this.next16.name = "next16";
	this.next16.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next16, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back16 = new lib.Symbol28();
	this.back16.name = "back16";
	this.back16.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back16, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.cthrep2 = new lib.contohsoal();
	this.cthrep2.name = "cthrep2";
	this.cthrep2.setTransform(653,633.5);
	new cjs.ButtonHelper(this.cthrep2, 0, 1, 2, false, new lib.contohsoal(), 3);

	this.next17 = new lib.Symbol29();
	this.next17.name = "next17";
	this.next17.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next17, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back17 = new lib.Symbol28();
	this.back17.name = "back17";
	this.back17.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back17, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.cthrep3 = new lib.contohsoal();
	this.cthrep3.name = "cthrep3";
	this.cthrep3.setTransform(653,633.5);
	new cjs.ButtonHelper(this.cthrep3, 0, 1, 2, false, new lib.contohsoal(), 3);

	this.next18 = new lib.Symbol29();
	this.next18.name = "next18";
	this.next18.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next18, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back18 = new lib.Symbol28();
	this.back18.name = "back18";
	this.back18.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back18, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.next19 = new lib.Symbol29();
	this.next19.name = "next19";
	this.next19.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next19, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back19 = new lib.Symbol28();
	this.back19.name = "back19";
	this.back19.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back19, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.next20 = new lib.Symbol29();
	this.next20.name = "next20";
	this.next20.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next20, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back20 = new lib.Symbol28();
	this.back20.name = "back20";
	this.back20.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back20, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.next21 = new lib.Symbol29();
	this.next21.name = "next21";
	this.next21.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next21, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back21 = new lib.Symbol28();
	this.back21.name = "back21";
	this.back21.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back21, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.faktarep3 = new lib.Symbol15();
	this.faktarep3.name = "faktarep3";
	this.faktarep3.setTransform(712,567,1,1,0,0,0,166,77);
	new cjs.ButtonHelper(this.faktarep3, 0, 1, 2, false, new lib.Symbol15(), 3);

	this.faktarep2 = new lib.Symbol14();
	this.faktarep2.name = "faktarep2";
	this.faktarep2.setTransform(908,392,1,1,0,0,0,166,77);
	new cjs.ButtonHelper(this.faktarep2, 0, 1, 2, false, new lib.Symbol14(), 3);

	this.faktarep1 = new lib.Symbol13();
	this.faktarep1.name = "faktarep1";
	this.faktarep1.setTransform(494,392,1,1,0,0,0,166,77);
	new cjs.ButtonHelper(this.faktarep1, 0, 1, 2, false, new lib.Symbol13(), 3);

	this.vidsimakrep = new lib.an_Video({'id': 'vidsimakrep', 'src':'videos/modeling%20rep.mp4', 'autoplay':false, 'controls':true, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.vidsimakrep.name = "vidsimakrep";
	this.vidsimakrep.setTransform(650.5,446.35,1.5909,1.1932,0,0,0,200,150.1);

	this.next22 = new lib.Symbol29();
	this.next22.name = "next22";
	this.next22.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next22, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back22 = new lib.Symbol28();
	this.back22.name = "back22";
	this.back22.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back22, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.next23 = new lib.Symbol29();
	this.next23.name = "next23";
	this.next23.setTransform(1201.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.next23, 0, 1, 2, false, new lib.Symbol29(), 3);

	this.back23 = new lib.Symbol28();
	this.back23.name = "back23";
	this.back23.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back23, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back24 = new lib.Symbol28();
	this.back24.name = "back24";
	this.back24.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back24, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.latrep = new lib.Symbol16();
	this.latrep.name = "latrep";
	this.latrep.setTransform(643.4,565.4,1,1,0,0,0,133.4,43.4);
	new cjs.ButtonHelper(this.latrep, 0, 1, 2, false, new lib.Symbol16(), 3);

	this.feedbacksalah = new lib.feedbacksalah();
	this.feedbacksalah.name = "feedbacksalah";
	this.feedbacksalah.setTransform(641,659.2,0.6332,0.6325,0,0,0,230.6,46.2);

	this.feedbackbenar = new lib.feedbackbenar();
	this.feedbackbenar.name = "feedbackbenar";
	this.feedbackbenar.setTransform(641,659.2,0.6332,0.6325,0,0,0,230.6,46.2);

	this.opsirep1d = new lib.Symbol32();
	this.opsirep1d.name = "opsirep1d";
	this.opsirep1d.setTransform(941,532.9,1,1,0,0,0,54.3,39.6);
	this.opsirep1d.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep1d, 0, 1, 1);

	this.opsirep1c = new lib.Symbol32();
	this.opsirep1c.name = "opsirep1c";
	this.opsirep1c.setTransform(744.05,532.9,1,1,0,0,0,54.3,39.6);
	this.opsirep1c.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep1c, 0, 1, 1);

	this.opsirep1b = new lib.Symbol32();
	this.opsirep1b.name = "opsirep1b";
	this.opsirep1b.setTransform(541,532.9,1,1,0,0,0,54.3,39.6);
	this.opsirep1b.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep1b, 0, 1, 1);

	this.opsirep1a = new lib.Symbol32();
	this.opsirep1a.name = "opsirep1a";
	this.opsirep1a.setTransform(339.55,532.9,1,1,0,0,0,54.3,39.6);
	this.opsirep1a.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep1a, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0)").ss(0.1,1,1).p("AoemLIQ9AAIAAMXIw9AAg");
	this.shape.setTransform(339.55,532.9);

	this.opsirep2d = new lib.Symbol32();
	this.opsirep2d.name = "opsirep2d";
	this.opsirep2d.setTransform(956.3,542.05,1,1,0,0,0,54.3,39.6);
	this.opsirep2d.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep2d, 0, 1, 1);

	this.opsirep2c = new lib.Symbol32();
	this.opsirep2c.name = "opsirep2c";
	this.opsirep2c.setTransform(745.4,542.05,1,1,0,0,0,54.3,39.6);
	this.opsirep2c.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep2c, 0, 1, 1);

	this.opsirep2b = new lib.Symbol32();
	this.opsirep2b.name = "opsirep2b";
	this.opsirep2b.setTransform(534.45,542.05,1,1,0,0,0,54.3,39.6);
	this.opsirep2b.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep2b, 0, 1, 1);

	this.opsirep2a = new lib.Symbol32();
	this.opsirep2a.name = "opsirep2a";
	this.opsirep2a.setTransform(323.45,542.05,1,1,0,0,0,54.3,39.6);
	this.opsirep2a.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep2a, 0, 1, 1);

	this.opsirep3d = new lib.Symbol32();
	this.opsirep3d.name = "opsirep3d";
	this.opsirep3d.setTransform(953.95,538.3,1.4705,1,0,0,0,54.4,39.6);
	this.opsirep3d.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep3d, 0, 1, 1);

	this.opsirep3c = new lib.Symbol32();
	this.opsirep3c.name = "opsirep3c";
	this.opsirep3c.setTransform(741.5,538.3,1.3057,1,0,0,0,54.3,39.6);
	this.opsirep3c.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep3c, 0, 1, 1);

	this.opsirep3b = new lib.Symbol32();
	this.opsirep3b.name = "opsirep3b";
	this.opsirep3b.setTransform(530.8,538.3,1.4715,1,0,0,0,54.4,39.6);
	this.opsirep3b.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep3b, 0, 1, 1);

	this.opsirep3a = new lib.Symbol32();
	this.opsirep3a.name = "opsirep3a";
	this.opsirep3a.setTransform(320.35,538.4,1.3536,1,0,0,0,54.4,39.6);
	this.opsirep3a.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep3a, 0, 1, 1);

	this.opsirep4d = new lib.Symbol32();
	this.opsirep4d.name = "opsirep4d";
	this.opsirep4d.setTransform(956.5,512.65,1.3996,1,0,0,0,54.4,39.6);
	this.opsirep4d.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep4d, 0, 1, 1);

	this.opsirep4c = new lib.Symbol32();
	this.opsirep4c.name = "opsirep4c";
	this.opsirep4c.setTransform(742.8,511.35,1.4006,1,0,0,0,54.3,39.6);
	this.opsirep4c.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep4c, 0, 1, 1);

	this.opsirep4b = new lib.Symbol32();
	this.opsirep4b.name = "opsirep4b";
	this.opsirep4b.setTransform(529.45,511.35,1.4705,1,0,0,0,54.4,39.6);
	this.opsirep4b.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep4b, 0, 1, 1);

	this.opsirep4a = new lib.Symbol32();
	this.opsirep4a.name = "opsirep4a";
	this.opsirep4a.setTransform(326.05,511.35,1.4945,1,0,0,0,54.3,39.6);
	this.opsirep4a.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep4a, 0, 1, 1);

	this.opsirep5d = new lib.Symbol32();
	this.opsirep5d.name = "opsirep5d";
	this.opsirep5d.setTransform(886.8,553.05,4.186,0.678,0,0,0,54.6,39.6);
	this.opsirep5d.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep5d, 0, 1, 1);

	this.opsirep5c = new lib.Symbol32();
	this.opsirep5c.name = "opsirep5c";
	this.opsirep5c.setTransform(886.8,459,4.186,0.678,0,0,0,54.6,39.6);
	this.opsirep5c.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep5c, 0, 1, 1);

	this.opsirep5b = new lib.Symbol32();
	this.opsirep5b.name = "opsirep5b";
	this.opsirep5b.setTransform(398.55,553.05,4.186,0.678,0,0,0,54.6,39.6);
	this.opsirep5b.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep5b, 0, 1, 1);

	this.opsirep5a = new lib.Symbol32();
	this.opsirep5a.name = "opsirep5a";
	this.opsirep5a.setTransform(398.55,459,4.186,0.678,0,0,0,54.6,39.6);
	this.opsirep5a.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep5a, 0, 1, 1);

	this.opsirep6d = new lib.Symbol32();
	this.opsirep6d.name = "opsirep6d";
	this.opsirep6d.setTransform(642.15,583.75,5.6278,0.5787,0,0,0,54.6,39.6);
	this.opsirep6d.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep6d, 0, 1, 1);

	this.opsirep6c = new lib.Symbol32();
	this.opsirep6c.name = "opsirep6c";
	this.opsirep6c.setTransform(642.15,523.15,5.6278,0.5787,0,0,0,54.6,39.6);
	this.opsirep6c.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep6c, 0, 1, 1);

	this.opsirep6b = new lib.Symbol32();
	this.opsirep6b.name = "opsirep6b";
	this.opsirep6b.setTransform(642.15,459.8,5.6278,0.5787,0,0,0,54.6,39.6);
	this.opsirep6b.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep6b, 0, 1, 1);

	this.opsirep6a = new lib.Symbol32();
	this.opsirep6a.name = "opsirep6a";
	this.opsirep6a.setTransform(642.15,397.95,5.6278,0.5787,0,0,0,54.6,39.6);
	this.opsirep6a.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep6a, 0, 1, 1);

	this.opsirep7d = new lib.Symbol32();
	this.opsirep7d.name = "opsirep7d";
	this.opsirep7d.setTransform(486.6,584.3,5.2028,0.5787,0,0,0,54.7,39.6);
	this.opsirep7d.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep7d, 0, 1, 1);

	this.opsirep7c = new lib.Symbol32();
	this.opsirep7c.name = "opsirep7c";
	this.opsirep7c.setTransform(486.6,521.2,5.2028,0.5787,0,0,0,54.7,39.6);
	this.opsirep7c.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep7c, 0, 1, 1);

	this.opsirep7b = new lib.Symbol32();
	this.opsirep7b.name = "opsirep7b";
	this.opsirep7b.setTransform(486.6,460.6,5.2028,0.5787,0,0,0,54.7,39.6);
	this.opsirep7b.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep7b, 0, 1, 1);

	this.opsirep7a = new lib.Symbol32();
	this.opsirep7a.name = "opsirep7a";
	this.opsirep7a.setTransform(486.6,398.9,5.2028,0.5787,0,0,0,54.7,39.6);
	this.opsirep7a.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep7a, 0, 1, 1);

	this.opsirep8d = new lib.Symbol32();
	this.opsirep8d.name = "opsirep8d";
	this.opsirep8d.setTransform(511,585.4,4.6846,0.5787,0,0,0,54.7,39.6);
	this.opsirep8d.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep8d, 0, 1, 1);

	this.opsirep8c = new lib.Symbol32();
	this.opsirep8c.name = "opsirep8c";
	this.opsirep8c.setTransform(511,523.9,4.6846,0.5787,0,0,0,54.7,39.6);
	this.opsirep8c.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep8c, 0, 1, 1);

	this.opsirep8b = new lib.Symbol32();
	this.opsirep8b.name = "opsirep8b";
	this.opsirep8b.setTransform(511,463.65,4.6846,0.5787,0,0,0,54.7,39.6);
	this.opsirep8b.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep8b, 0, 1, 1);

	this.opsirep8a = new lib.Symbol32();
	this.opsirep8a.name = "opsirep8a";
	this.opsirep8a.setTransform(511,405.9,4.6846,0.5787,0,0,0,54.7,39.6);
	this.opsirep8a.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep8a, 0, 1, 1);

	this.opsirep9d = new lib.Symbol32();
	this.opsirep9d.name = "opsirep9d";
	this.opsirep9d.setTransform(502.35,594.35,7.0653,0.5787,0,0,0,54.8,39.6);
	this.opsirep9d.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep9d, 0, 1, 1);

	this.opsirep9c = new lib.Symbol32();
	this.opsirep9c.name = "opsirep9c";
	this.opsirep9c.setTransform(502.35,541.8,7.0653,0.5787,0,0,0,54.8,39.6);
	this.opsirep9c.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep9c, 0, 1, 1);

	this.opsirep9b = new lib.Symbol32();
	this.opsirep9b.name = "opsirep9b";
	this.opsirep9b.setTransform(502.35,486.7,7.0653,0.5787,0,0,0,54.8,39.6);
	this.opsirep9b.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep9b, 0, 1, 1);

	this.opsirep9a = new lib.Symbol32();
	this.opsirep9a.name = "opsirep9a";
	this.opsirep9a.setTransform(502.35,431.6,7.0653,0.5787,0,0,0,54.8,39.6);
	this.opsirep9a.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep9a, 0, 1, 1);

	this.opsirep10d = new lib.Symbol32();
	this.opsirep10d.name = "opsirep10d";
	this.opsirep10d.setTransform(404.55,581.5,5.5156,0.5787,0,0,0,54.9,39.6);
	this.opsirep10d.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep10d, 0, 1, 1);

	this.opsirep10c = new lib.Symbol32();
	this.opsirep10c.name = "opsirep10c";
	this.opsirep10c.setTransform(404.55,525.15,5.5156,0.5787,0,0,0,54.9,39.6);
	this.opsirep10c.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep10c, 0, 1, 1);

	this.opsirep10b = new lib.Symbol32();
	this.opsirep10b.name = "opsirep10b";
	this.opsirep10b.setTransform(404.55,467.55,5.5156,0.5787,0,0,0,54.9,39.6);
	this.opsirep10b.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep10b, 0, 1, 1);

	this.opsirep10a = new lib.Symbol32();
	this.opsirep10a.name = "opsirep10a";
	this.opsirep10a.setTransform(404.55,412.45,5.5157,0.5787,0,0,0,54.9,39.6);
	this.opsirep10a.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.opsirep10a, 0, 1, 1);

	this.txtSkor = new cjs.Text("", "normal 400 120px 'Archivo Black'", "#2F4668");
	this.txtSkor.name = "txtSkor";
	this.txtSkor.textAlign = "center";
	this.txtSkor.lineHeight = 149;
	this.txtSkor.lineWidth = 372;
	this.txtSkor.parent = this;
	this.txtSkor.setTransform(640,285.1);
	if(!lib.properties.webfonts['Archivo Black']) {
		lib.webFontTxtInst['Archivo Black'] = lib.webFontTxtInst['Archivo Black'] || [];
		lib.webFontTxtInst['Archivo Black'].push(this.txtSkor);
	}

	this.bahasrep = new lib.Symbol17();
	this.bahasrep.name = "bahasrep";
	this.bahasrep.setTransform(632.3,598.1,1,1,0,0,0,120.3,39.1);
	new cjs.ButtonHelper(this.bahasrep, 0, 1, 2, false, new lib.Symbol17(), 3);

	this.back36 = new lib.Symbol28();
	this.back36.name = "back36";
	this.back36.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back36, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.rep10 = new lib.Symbol27();
	this.rep10.name = "rep10";
	this.rep10.setTransform(959.4,525,1,1,0,0,0,52.4,65);
	new cjs.ButtonHelper(this.rep10, 0, 1, 2, false, new lib.Symbol27(), 3);

	this.rep9 = new lib.Symbol26();
	this.rep9.name = "rep9";
	this.rep9.setTransform(804.4,525,1,1,0,0,0,52.4,65);
	new cjs.ButtonHelper(this.rep9, 0, 1, 2, false, new lib.Symbol26(), 3);

	this.rep8 = new lib.Symbol25();
	this.rep8.name = "rep8";
	this.rep8.setTransform(646.4,525,1,1,0,0,0,52.4,65);
	new cjs.ButtonHelper(this.rep8, 0, 1, 2, false, new lib.Symbol25(), 3);

	this.rep7 = new lib.Symbol24();
	this.rep7.name = "rep7";
	this.rep7.setTransform(487.4,525,1,1,0,0,0,52.4,65);
	new cjs.ButtonHelper(this.rep7, 0, 1, 2, false, new lib.Symbol24(), 3);

	this.rep6 = new lib.Symbol23();
	this.rep6.name = "rep6";
	this.rep6.setTransform(327.4,525,1,1,0,0,0,52.4,65);
	new cjs.ButtonHelper(this.rep6, 0, 1, 2, false, new lib.Symbol23(), 3);

	this.rep5 = new lib.Symbol22();
	this.rep5.name = "rep5";
	this.rep5.setTransform(959.4,395,1,1,0,0,0,52.4,65);
	new cjs.ButtonHelper(this.rep5, 0, 1, 2, false, new lib.Symbol22(), 3);

	this.rep4 = new lib.Symbol21();
	this.rep4.name = "rep4";
	this.rep4.setTransform(804.4,395,1,1,0,0,0,52.4,65);
	new cjs.ButtonHelper(this.rep4, 0, 1, 2, false, new lib.Symbol21(), 3);

	this.rep3 = new lib.Symbol20();
	this.rep3.name = "rep3";
	this.rep3.setTransform(646.4,395,1,1,0,0,0,52.4,65);
	new cjs.ButtonHelper(this.rep3, 0, 1, 2, false, new lib.Symbol20(), 3);

	this.rep2 = new lib.Symbol19();
	this.rep2.name = "rep2";
	this.rep2.setTransform(487.4,395,1,1,0,0,0,52.4,65);
	new cjs.ButtonHelper(this.rep2, 0, 1, 2, false, new lib.Symbol19(), 3);

	this.rep1 = new lib.Symbol18();
	this.rep1.name = "rep1";
	this.rep1.setTransform(327.4,395,1,1,0,0,0,52.4,65);
	new cjs.ButtonHelper(this.rep1, 0, 1, 2, false, new lib.Symbol18(), 3);

	this.back37 = new lib.Symbol28();
	this.back37.name = "back37";
	this.back37.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back37, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back38 = new lib.Symbol28();
	this.back38.name = "back38";
	this.back38.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back38, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back39 = new lib.Symbol28();
	this.back39.name = "back39";
	this.back39.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back39, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.popbahasporo = new lib.Symbol32();
	this.popbahasporo.name = "popbahasporo";
	this.popbahasporo.setTransform(1090.7,567.9,1.4353,0.5076,0,0,0,54.4,39.6);
	this.popbahasporo.compositeOperation = "lighten";
	new cjs.ButtonHelper(this.popbahasporo, 0, 1, 1);

	this.back40 = new lib.Symbol28();
	this.back40.name = "back40";
	this.back40.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back40, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back41 = new lib.Symbol28();
	this.back41.name = "back41";
	this.back41.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back41, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back42 = new lib.Symbol28();
	this.back42.name = "back42";
	this.back42.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back42, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back43 = new lib.Symbol28();
	this.back43.name = "back43";
	this.back43.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back43, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back44 = new lib.Symbol28();
	this.back44.name = "back44";
	this.back44.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back44, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back45 = new lib.Symbol28();
	this.back45.name = "back45";
	this.back45.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back45, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.back46 = new lib.Symbol28();
	this.back46.name = "back46";
	this.back46.setTransform(80.8,650.6,1,1,0,0,0,46.8,42.6);
	new cjs.ButtonHelper(this.back46, 0, 1, 2, false, new lib.Symbol28(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mulai},{t:this.profil},{t:this.petunjuk}]}).to({state:[{t:this.back1},{t:this.next1},{t:this.tombolhome}]},1).to({state:[{t:this.back2},{t:this.next2},{t:this.tombolhome}]},1).to({state:[{t:this.back3},{t:this.next3},{t:this.tombolhome}]},1).to({state:[{t:this.back4},{t:this.tombolhome}]},1).to({state:[{t:this.back5}]},1).to({state:[{t:this.cptp},{t:this.materi},{t:this.evaluasi},{t:this.home}]},1).to({state:[{t:this.back7},{t:this.next7},{t:this.home}]},1).to({state:[{t:this.back8},{t:this.home}]},1).to({state:[{t:this.represen},{t:this.urut},{t:this.aritmetika},{t:this.aplikasi},{t:this.back9},{t:this.home}]},1).to({state:[{t:this.back10},{t:this.next10},{t:this.home},{t:this.vidamatirep}]},1).to({state:[{t:this.back11},{t:this.next11},{t:this.home}]},1).to({state:[{t:this.sederhana},{t:this.back12},{t:this.next12},{t:this.home}]},1).to({state:[{t:this.back13},{t:this.next13},{t:this.home}]},1).to({state:[{t:this.back14},{t:this.next14},{t:this.home}]},1).to({state:[{t:this.back15},{t:this.next15},{t:this.home}]},1).to({state:[{t:this.back16},{t:this.next16},{t:this.home},{t:this.cthrep1}]},1).to({state:[{t:this.back17},{t:this.next17},{t:this.home},{t:this.cthrep2}]},1).to({state:[{t:this.back18},{t:this.next18},{t:this.home},{t:this.cthrep3}]},1).to({state:[{t:this.back19},{t:this.next19},{t:this.home}]},1).to({state:[{t:this.back20},{t:this.next20},{t:this.home}]},1).to({state:[{t:this.faktarep1},{t:this.faktarep2},{t:this.faktarep3},{t:this.back21},{t:this.next21},{t:this.home}]},1).to({state:[{t:this.back22},{t:this.next22},{t:this.home},{t:this.vidsimakrep}]},1).to({state:[{t:this.back23},{t:this.next23},{t:this.home}]},1).to({state:[{t:this.latrep},{t:this.back24}]},1).to({state:[{t:this.shape},{t:this.opsirep1a},{t:this.opsirep1b},{t:this.opsirep1c},{t:this.opsirep1d},{t:this.feedbackbenar},{t:this.feedbacksalah}]},1).to({state:[{t:this.opsirep2a},{t:this.opsirep2b},{t:this.opsirep2c},{t:this.opsirep2d},{t:this.feedbackbenar},{t:this.feedbacksalah}]},1).to({state:[{t:this.opsirep3a},{t:this.opsirep3b},{t:this.opsirep3c},{t:this.opsirep3d},{t:this.feedbackbenar},{t:this.feedbacksalah}]},1).to({state:[{t:this.opsirep4a},{t:this.opsirep4b},{t:this.opsirep4c},{t:this.opsirep4d},{t:this.feedbackbenar},{t:this.feedbacksalah}]},1).to({state:[{t:this.opsirep5a},{t:this.opsirep5b},{t:this.opsirep5c},{t:this.opsirep5d},{t:this.feedbackbenar},{t:this.feedbacksalah}]},1).to({state:[{t:this.opsirep6a},{t:this.opsirep6b},{t:this.opsirep6c},{t:this.opsirep6d},{t:this.feedbackbenar},{t:this.feedbacksalah}]},1).to({state:[{t:this.opsirep7a},{t:this.opsirep7b},{t:this.opsirep7c},{t:this.opsirep7d},{t:this.feedbackbenar},{t:this.feedbacksalah}]},1).to({state:[{t:this.opsirep8a},{t:this.opsirep8b},{t:this.opsirep8c},{t:this.opsirep8d},{t:this.feedbackbenar},{t:this.feedbacksalah}]},1).to({state:[{t:this.opsirep9a},{t:this.opsirep9b},{t:this.opsirep9c},{t:this.opsirep9d},{t:this.feedbackbenar},{t:this.feedbacksalah}]},1).to({state:[{t:this.opsirep10a},{t:this.opsirep10b},{t:this.opsirep10c},{t:this.opsirep10d},{t:this.feedbackbenar},{t:this.feedbacksalah}]},1).to({state:[{t:this.bahasrep},{t:this.home},{t:this.txtSkor}]},1).to({state:[{t:this.rep1},{t:this.rep2},{t:this.rep3},{t:this.rep4},{t:this.rep5},{t:this.rep6},{t:this.rep7},{t:this.rep8},{t:this.rep9},{t:this.rep10},{t:this.back36}]},1).to({state:[{t:this.back37}]},1).to({state:[{t:this.back38}]},1).to({state:[{t:this.back39}]},1).to({state:[{t:this.back40},{t:this.popbahasporo}]},1).to({state:[{t:this.back41}]},1).to({state:[{t:this.back42}]},1).to({state:[{t:this.back43}]},1).to({state:[{t:this.back44}]},1).to({state:[{t:this.back45}]},1).to({state:[{t:this.back46}]},1).wait(1));

	// bg
	this.instance = new lib.halamanutama();

	this.instance_1 = new lib.petunjuk1();

	this.instance_2 = new lib.petunjuk2();

	this.instance_3 = new lib.petunjuk3();

	this.instance_4 = new lib.petunjuk4();

	this.instance_5 = new lib.profrep();

	this.instance_6 = new lib.halamanmenu();

	this.instance_7 = new lib.cp();

	this.instance_8 = new lib.tp();

	this.instance_9 = new lib.submateri();

	this.instance_10 = new lib.amatirep();

	this.instance_11 = new lib.rep1();

	this.instance_12 = new lib.rep2();

	this.instance_13 = new lib.rep3();

	this.instance_14 = new lib.rep4();

	this.instance_15 = new lib.rep5();

	this.instance_16 = new lib.rep6();

	this.instance_17 = new lib.rep7();

	this.instance_18 = new lib.rep8();

	this.instance_19 = new lib.menrep();

	this.instance_20 = new lib.disrep();

	this.instance_21 = new lib.faktarep();

	this.instance_22 = new lib.simakrep();

	this.instance_23 = new lib.rangrep();

	this.instance_24 = new lib.latrep1();

	this.instance_25 = new lib.latrep2();

	this.instance_26 = new lib.latrep3();

	this.instance_27 = new lib.latrep4();

	this.instance_28 = new lib.latrep5();

	this.instance_29 = new lib.latrep6();

	this.instance_30 = new lib.latrep7();

	this.instance_31 = new lib.latrep8();

	this.instance_32 = new lib.latrep9();

	this.instance_33 = new lib.latrep10();

	this.instance_34 = new lib.latrep11();

	this.instance_35 = new lib.skorrep();

	this.instance_36 = new lib.bahasrep1();

	this.instance_37 = new lib.bahasrep2();

	this.instance_38 = new lib.bahasrep3();

	this.instance_39 = new lib.bahasrep4();

	this.instance_40 = new lib.bahasrep5();

	this.instance_41 = new lib.bahasrep6();

	this.instance_42 = new lib.bahasrep7();

	this.instance_43 = new lib.bahasrep8();

	this.instance_44 = new lib.bahasrep9();

	this.instance_45 = new lib.bahasrep10();

	this.instance_46 = new lib.bahasrep11();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).wait(1));

	// stageBackground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Ehljg5zMDLHAAAMAAABznMjLHAAAg");
	this.shape_1.setTransform(640,360);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFF0FF").s().p("EhljA50MAAAhznMDLHAAAMAAABzng");
	this.shape_2.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(47));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(614,353,669.4000000000001,379.20000000000005);
// library properties:
lib.properties = {
	id: '8CB4DCCFC6913644963D1BBCF470F6FF',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#CFF0FF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/amatirep.png", id:"amatirep"},
		{src:"images/aplikasi.png", id:"aplikasi"},
		{src:"images/aritmetika.png", id:"aritmetika"},
		{src:"images/back.png", id:"back"},
		{src:"images/bahas.png", id:"bahas"},
		{src:"images/bahasrep1.png", id:"bahasrep1"},
		{src:"images/bahasrep10.png", id:"bahasrep10"},
		{src:"images/bahasrep11.png", id:"bahasrep11"},
		{src:"images/bahasrep2.png", id:"bahasrep2"},
		{src:"images/bahasrep3.png", id:"bahasrep3"},
		{src:"images/bahasrep4.png", id:"bahasrep4"},
		{src:"images/bahasrep5.png", id:"bahasrep5"},
		{src:"images/bahasrep6.png", id:"bahasrep6"},
		{src:"images/bahasrep7.png", id:"bahasrep7"},
		{src:"images/bahasrep8.png", id:"bahasrep8"},
		{src:"images/bahasrep9.png", id:"bahasrep9"},
		{src:"images/blurpop.png", id:"blurpop"},
		{src:"images/consol.png", id:"consol"},
		{src:"images/cp.png", id:"cp"},
		{src:"images/cptp.png", id:"cptp"},
		{src:"images/disrep.png", id:"disrep"},
		{src:"images/evaluasi.png", id:"evaluasi"},
		{src:"images/faktarep.png", id:"faktarep"},
		{src:"images/faktarep1.png", id:"faktarep1"},
		{src:"images/faktarep2.png", id:"faktarep2"},
		{src:"images/faktarep3.png", id:"faktarep3"},
		{src:"images/halamanmenu.png", id:"halamanmenu"},
		{src:"images/halamanutama.png", id:"halamanutama"},
		{src:"images/home.png", id:"home"},
		{src:"images/jawabanbenar.png", id:"jawabanbenar"},
		{src:"images/jawabansalah.png", id:"jawabansalah"},
		{src:"images/latihan.png", id:"latihan"},
		{src:"images/latrep1.png", id:"latrep1"},
		{src:"images/latrep10.png", id:"latrep10"},
		{src:"images/latrep11.png", id:"latrep11"},
		{src:"images/latrep2.png", id:"latrep2"},
		{src:"images/latrep3.png", id:"latrep3"},
		{src:"images/latrep4.png", id:"latrep4"},
		{src:"images/latrep5.png", id:"latrep5"},
		{src:"images/latrep6.png", id:"latrep6"},
		{src:"images/latrep7.png", id:"latrep7"},
		{src:"images/latrep8.png", id:"latrep8"},
		{src:"images/latrep9.png", id:"latrep9"},
		{src:"images/materi.png", id:"materi"},
		{src:"images/mengurutkan.png", id:"mengurutkan"},
		{src:"images/menrep.png", id:"menrep"},
		{src:"images/mulaibelajar.png", id:"mulaibelajar"},
		{src:"images/next.png", id:"next"},
		{src:"images/no1.png", id:"no1"},
		{src:"images/no10.png", id:"no10"},
		{src:"images/no2.png", id:"no2"},
		{src:"images/no3.png", id:"no3"},
		{src:"images/no4.png", id:"no4"},
		{src:"images/no5.png", id:"no5"},
		{src:"images/no6.png", id:"no6"},
		{src:"images/no7.png", id:"no7"},
		{src:"images/no8.png", id:"no8"},
		{src:"images/no9.png", id:"no9"},
		{src:"images/petunjuk.png", id:"petunjuk"},
		{src:"images/petunjuk1.png", id:"petunjuk1"},
		{src:"images/petunjuk2.png", id:"petunjuk2"},
		{src:"images/petunjuk3.png", id:"petunjuk3"},
		{src:"images/petunjuk4.png", id:"petunjuk4"},
		{src:"images/Poprep1.png", id:"Poprep1"},
		{src:"images/Poprep10.png", id:"Poprep10"},
		{src:"images/Poprep11.png", id:"Poprep11"},
		{src:"images/Poprep2.png", id:"Poprep2"},
		{src:"images/Poprep3.png", id:"Poprep3"},
		{src:"images/Poprep4.png", id:"Poprep4"},
		{src:"images/Poprep5.png", id:"Poprep5"},
		{src:"images/Poprep6.png", id:"Poprep6"},
		{src:"images/Poprep7.png", id:"Poprep7"},
		{src:"images/Poprep8.png", id:"Poprep8"},
		{src:"images/Poprep9.png", id:"Poprep9"},
		{src:"images/Poprepvideo.png", id:"Poprepvideo"},
		{src:"images/profil.png", id:"profil"},
		{src:"images/profrep.png", id:"profrep"},
		{src:"images/rangrep.png", id:"rangrep"},
		{src:"images/rep1.png", id:"rep1"},
		{src:"images/rep2.png", id:"rep2"},
		{src:"images/rep3.png", id:"rep3"},
		{src:"images/rep4.png", id:"rep4"},
		{src:"images/rep5.png", id:"rep5"},
		{src:"images/rep6.png", id:"rep6"},
		{src:"images/rep7.png", id:"rep7"},
		{src:"images/rep8.png", id:"rep8"},
		{src:"images/representasi.png", id:"representasi"},
		{src:"images/sederhana.png", id:"sederhana"},
		{src:"images/simakrep.png", id:"simakrep"},
		{src:"images/skorrep.png", id:"skorrep"},
		{src:"images/submateri.png", id:"submateri"},
		{src:"images/tombolulang.png", id:"tombolulang"},
		{src:"images/tp.png", id:"tp"},
		{src:"images/tutup.png", id:"tutup"},
		{src:"components/lib/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8CB4DCCFC6913644963D1BBCF470F6FF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;