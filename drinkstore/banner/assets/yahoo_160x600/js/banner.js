var eff, id, from, to, time, wait;
var w = 160,
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
	var bg_scene = "bg_scene";
	var sc1_chamada1 = "chamada__frase_1";
	var sc1_chamada2 = "chamada__frase_2";
	var sc1_chamada3 = "chamada__frase_3";
	var sc2_info1 = "infos__frase_1";
	var sc2_info2 = "infos__frase_2";
	var sc2_info3 = "infos__frase_3";
	var boom = "boom";
	var saibamais = "saibamais";
	var quintIn = createjs.Ease.quintIn;
	var quintOut = createjs.Ease.quintOut;
	var quintInOut = createjs.Ease.quintInOut;
	var linear = createjs.Ease.Linear;
	getTween(sc1_chamada1, -w, 10, 400, 1300, quintOut);
	getTween(sc1_chamada2, -w, 7, 440, 1440, quintOut, 800, saiCena1);
	getTween(sc1_chamada3, -w, 0, 420, 1420, quintOut, 2000, saiChamadas);

	function saiChamadas() {
		getTween(sc1_chamada1, 10, -w, 320, 1330, quintIn);
		getTween(sc1_chamada2, 7, -w, 420, 1420, quintIn);
		getTween(sc1_chamada3, 0, -w, 320, 1420, quintIn, 3000, chegou);
	}

	function saiCena1() {
		getTween(bg_scene, 0, -205, 7320, 120, quintInOut);
	}

	function chegou() {
		getOpacity(boom, 0, 1, 520, 120, linear, 100, entraInfos);
	}

	function entraInfos() {
		getTween(sc2_info1, -w, 7, 300, 400, quintOut);
		getTween(sc2_info2, -w, 5, 350, 420, quintOut);
		getTween(sc2_info3, -w, 7, 300, 470, quintOut);
		getTween(saibamais, -w, 5, 650, 600, quintOut);
	}
}