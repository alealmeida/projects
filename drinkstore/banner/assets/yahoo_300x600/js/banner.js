var eff, id, from, to, time, wait;
var w = 300,
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
	var bg_scene = "bg_scene";
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
	var quintInOut = createjs.Ease.quintInOut;
	var linear = createjs.Ease.Linear;
	getTween(sc1_chamada1, -w, 30, 400, 1300, quintOut);
	getTween(sc1_chamada2, -w, 27, 440, 1440, quintOut, 800, saiCena1);
	getTween(sc1_chamada3, -w, 25, 620, 1420, quintOut, 2000, saiChamadas);
	getOpacity(bg_shadow, 0, .55, 820, 1320, linear);

	function saiChamadas() {
		getTween(sc1_chamada1, 30, -w, 320, 1330, quintIn);
		getTween(sc1_chamada2, 27, -w, 420, 1420, quintIn);
		getTween(sc1_chamada3, 25, -w, 320, 1420, quintIn);
		getOpacity(bg_shadow, .55, 0, 520, 1520, linear);
	}

	function saiCena1() {
		getTween(bg_scene, 0, -236, 7320, 120, quintInOut, 400, chegou);
	}

	function entraInfos() {
		getTween(sc2_info1, -w, 52, 370, 400, quintOut);
		getTween(sc2_info2, -w, 53, 550, 320, quintOut);
		getTween(sc2_info3, -w, 52, 400, 570, quintOut);
		getTween(saibamais, -w, 20, 650, 600, quintOut);
	}

	function chegou() {
		getOpacity(boom, 0, 1, 520, 420, linear, 500, entraInfos);
	}
}