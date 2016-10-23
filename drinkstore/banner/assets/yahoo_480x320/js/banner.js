var eff, id, from, to, time, wait;
var w = 480,
	h = 320;

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
	var bg_scene = "bg_scene";
	var sc1_chamada1 = "chamada__frase_1";
	var sc1_chamada2 = "chamada__frase_2";
	var sc1_chamada3 = "chamada__frase_3";
	var sc2_info1 = "infos__frase_1";
	var sc2_info2 = "infos__frase_2";
	var sc2_info3 = "infos__frase_3";
	var bg_shadow = "bg_shadow";
	var boom = "boom";
	var saibamais = "saibamais";
	var quintIn = createjs.Ease.quintIn;
	var quintOut = createjs.Ease.quintOut;
	var linear = createjs.Ease.Linear;
	getTween(sc1_chamada1, -w, 80, 400, 1300, quintOut);
	getTween(sc1_chamada2, -w, 40, 440, 1440, quintOut);
	getTween(sc1_chamada3, -w, 100, 420, 1420, quintOut, 2000, saiChamadas);
	getOpacity(bg_shadow, 0, .55, 820, 1320, linear);

	function saiChamadas() {
		getTween(sc1_chamada1, 80, -w, 320, 1330, quintIn);
		getTween(sc1_chamada2, 40, -w, 420, 1420, quintIn, 1200, chegou)
		getTween(sc1_chamada3, 100, -w, 320, 1420, quintIn, 400, saiCena1);
		getOpacity(bg_shadow, .55, 0, 520, 1420, linear);
	}

	function saiCena1() {
		getOpacity(bg_scene, 1, 0, 520, 120, linear);
	}

	function chegou() {
		getOpacity(boom, 0, 1, 540, 170, linear, 100, entraInfos);
	}

	function entraInfos() {
		getTween(sc2_info1, -w, 225, 320, 400);
		getTween(sc2_info2, -w, 222, 350, 420);
		getTween(sc2_info3, -w, 225, 300, 420);
		getTween(saibamais, -w, 180, 650, 600, quintOut);
	}
}