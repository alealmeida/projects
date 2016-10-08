var eff, id, from, to, time, wait;
var w = 630
	, h = 120;

function getTween(id, from, to, time, wait, effect, wait2, call) {
	var get = document.getElementById(id);
	createjs.Tween.get(get, {
		loop: false
	}).to({
		left: from
	}, 0).wait(wait).to({
		left: to
	}, time, effect).wait(wait2).call(call)
}

function getOpacity(id, from, to, time, wait, effect, wait2, call) {
	var get = document.getElementById(id);
	createjs.Tween.get(get, {
		loop: false
	}).to({
		opacity: from
	}, 0).wait(wait).to({
		opacity: to
	}, time, effect).wait(wait2).call(call)
}

function getZoom(id, from, to, time, wait, effect, wait2, call) {
	var get = document.getElementById(id);
	createjs.Tween.get(get, {
		loop: false
	}).to({
		opacity: from
	}, 0).wait(wait).to({
		opacity: to
	}, time, effect).wait(wait2).call(call)
}

function init() {
	createjs.CSSPlugin.install(createjs.Tween);
	// cena 01
	var sc1 = document.getElementById("scene__1");
	var sc1_chamada1 = "chamada__frase_1";
	var sc1_chamada2 = "chamada__frase_2";
	var sc1_chamada3 = "chamada__frase_3";
	var bg_scene = "bg_scene";
	var bg_shadow = "bg_shadow";
	var boom = "boom";
	var aprecie = "aprecie";
	var saibamais = "saibamais";
	var quintIn = createjs.Ease.quintIn;
	var quintOut = createjs.Ease.quintOut;
	var quintInOut = createjs.Ease.quintInOut;
	var linear = createjs.Ease.Linear;
	getTween(sc1_chamada1, -w, 18, 300, 1400, quintOut);
	getTween(sc1_chamada2, -w, 142, 340, 1340, quintOut)
	getTween(sc1_chamada3, -w, 335, 420, 1220, quintOut, 2000, saiChamadas);

	function saiChamadas() {
		getTween(sc1_chamada1, 18, -w, 320, 1330, quintIn);
		getTween(sc1_chamada2, 142, -w, 420, 1420, quintIn, 300, saiCena1);
		getTween(sc1_chamada3, 335, -w, 320, 1420, quintIn, 1200, chegou);
		getTween(aprecie, 10, 482, 1220, 1020, quintInOut);
	}

	function saiCena1() {
		getOpacity(bg_scene, 1, 0, 1000, 120, linear);
		getTween(saibamais, -w, 210, 280, 800, quintOut);
	}

	function chegou() {
		getOpacity(boom, 0, 1, 520, 380, linear);
	}
}