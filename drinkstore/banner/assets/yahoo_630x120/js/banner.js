var w = 630
	, h = 120;
var quintIn = createjs.Ease.quintIn;
var quintOut = createjs.Ease.quintOut;
var quintInOut = createjs.Ease.quintInOut;
var linear = createjs.Ease.Linear;
var chamada_1 = {
	valores: [-w, 15]
	, tempos: [0, 600, 0, 1000]
	, esperas: [1300, 0, 1330, 10]
	, effect: quintOut
};
var chamada_2 = {
	valores: [-w, 142]
	, tempos: [0, 500, 0, 1000]
	, esperas: [1440, 0, 1420, 1200]
	, effect: quintOut
};
var chamada_3 = {
	valores: [-w, 335]
	, tempos: [0, 420, 0, 1000]
	, esperas: [1420, 2000, 1420, 400]
	, effect: quintOut
};
var sc1_aprecie = {
	valores: [10, 482]
	, tempos: [0, 1220]
	, esperas: [1020, 1020]
	, effect: quintInOut
};
var bg_cena_1 = {
	valores: [1, 0]
	, tempos: [0, 800]
	, esperas: [120, 0]
	, effect: linear
};
var boom_store = {
	valores: [0, 1]
	, tempos: [0, 420]
	, esperas: [0, 0]
	, effect: linear
};
var saiba = {
	valores: [-w, 210]
	, tempos: [0, 780]
	, esperas: [0, 0]
	, effect: quintOut
};

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

function acao(type, id, momento, attr, call) {
	var getId = document.getElementById(id);
	var valores_from, valores_to = attr.valores;
	var tempo_1, tempo_2 = attr.tempos;
	var espera_1, espera_2 = attr.esperas;
	if (momento == 'ida') {
		valores_from = attr.valores[0];
		valores_to = attr.valores[1];
		tempo_1 = attr.tempos[0];
		tempo_2 = attr.tempos[1];
		espera_1 = attr.esperas[0];
		espera_2 = attr.esperas[1];
	}
	else {
		valores_from = attr.valores[1];
		valores_to = attr.valores[0];
		tempo_1 = attr.tempos[2];
		tempo_2 = attr.tempos[3];
		espera_1 = attr.esperas[2];
		espera_2 = attr.esperas[3];
	}
	if (type == 'move_x') {
		createjs.Tween.get(getId, {
			loop: false
		}).to({
			left: valores_from
		}, tempo_1).wait(espera_1).to({
			left: valores_to
		}, tempo_2, attr.effect).wait(espera_2).call(call);
	}
	else if (type == 'opacidade') {
		//OPACITY
		createjs.Tween.get(getId, {
			loop: false
		}).to({
			opacity: valores_from
		}, tempo_1).wait(espera_1).to({
			opacity: valores_to
		}, tempo_2, attr.effect).wait(espera_2).call(call);
	}
};

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
	var move_x;
	var opacidade;
	inicio();
	//	move(id, type, attr, call)
	function inicio() {
		acao('move_x', sc1_chamada1, 'ida', chamada_1);
		acao('move_x', sc1_chamada2, 'ida', chamada_2);
		acao('move_x', sc1_chamada3, 'ida', chamada_3, saiChamadas);
	}

	function saiChamadas() {
		acao('move_x', sc1_chamada1, 'volta', chamada_1);
		acao('move_x', sc1_chamada2, 'volta', chamada_2);
		acao('move_x', sc1_chamada3, 'volta', chamada_3, saiCenaUm);
		acao('move_x', aprecie, 'ida', sc1_aprecie);
	}

	function saiCenaUm() {
		acao('opacidade', bg_scene, 'ida', bg_cena_1, chegou);
	}

	function chegou() {
		acao('opacidade', boom, 'ida', boom_store);
		acao('move_x', saibamais, 'ida', saiba);
	}
}