var eff, id, from, to, time, wait;
var w = 425,
	h = 600;

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
	var sc2_info1 = "infos__frase_1";
	var sc2_info2 = "infos__frase_2";
	var sc2_info3 = "infos__frase_3";
	var bg_shadow = "bg_shadow";
	var boom = "boom";
	var saibamais = "saibamais";
	var quintIn = createjs.Ease.quintIn;
	var quintOut = createjs.Ease.quintOut;
	var quintInOut = createjs.Ease.quintInOut;
	var linear = createjs.Ease.Linear;
	getTween(sc1_chamada1, -w, 48, 400, 1300, quintOut);
	getTween(sc1_chamada2, -w, 12, 440, 1440, quintOut);
	getTween(sc1_chamada3, -w, 70, 420, 1420, quintOut, 2000, saiChamadas);
	getOpacity(bg_shadow, 0, .55, 820, 1320, linear);

	function saiChamadas() {
		getTween(sc1_chamada1, 48, -w, 320, 1330, quintIn);
		getTween(sc1_chamada2, 12, -w, 420, 1420, quintIn);
		getTween(sc1_chamada3, 70, -w, 320, 1420, quintIn, 1800, chegou);
		getOpacity(bg_shadow, .55, 0, 520, 1520, linear, 200, saiCena1);
	}

	function saiCena1() {
		getOpacity(bg_scene, 1, 0, 1000, 120, linear);
	}

	function chegou() {
		getOpacity(boom, 0, 1, 520, 420, linear, 100, entraInfos);
	}

	function entraInfos() {
		getTween(sc2_info1, -w, 5, 420, 400, quintOut);
		getTween(sc2_info2, -w, 2, 450, 420, quintOut);
		getTween(sc2_info3, -w, 5, 400, 420, quintOut);
		getTween(saibamais, -w, 160, 450, 500, quintOut);
	}
}