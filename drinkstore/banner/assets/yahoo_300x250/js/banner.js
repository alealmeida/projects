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

function init() {
	createjs.CSSPlugin.install(createjs.Tween);
	// cena 01
	var sc1 = document.getElementById("scene__1");
	var sc1_chamada1 = "chamada__frase_1";
	var sc1_chamada2 = "chamada__frase_2";
	var sc1_chamada3 = "chamada__frase_3";
	var sc2_info1 = "infos__frase_1";
	var sc2_info2 = "infos__frase_2";
	var sc2_info3 = "infos__frase_3";
	var boom = document.getElementById('boom');
	boom.style.opacity = 0;
	var quintIn = createjs.Ease.quintIn;
	var quintOut = createjs.Ease.quintOut;
	var linear = createjs.Ease.Linear;
	getTween(sc1_chamada1, -w, 34, 400, 1300, quintOut);
	getTween(sc1_chamada2, -w, 18, 440, 1440, quintOut);
	getTween(sc1_chamada3, -w, 0, 420, 1420, quintOut, 2000, saiChamadas);

	function saiChamadas() {
		getTween(sc1_chamada1, 34, -w, 320, 1330, quintIn);
		getTween(sc1_chamada2, 18, -w, 420, 1420, quintIn);
		getTween(sc1_chamada3, 0, -w, 320, 1420, quintIn, 400, saiCena1);
	}

	function saiCena1() {
		createjs.Tween.get(sc1, {
			loop: false
		}).to({
			opacity: 1
		}, 0).wait(900).to({
			opacity: 0
		}, 400, linear).call(chegou)
	}

	function entraInfos() {
		getTween(sc2_info1, -w, 105, 320, 400);
		getTween(sc2_info2, -w, 102, 350, 420);
		getTween(sc2_info3, -w, 105, 300, 420);
	}

	function chegou() {
		createjs.Tween.get(boom, {
			loop: false
		}).to({
			opacity: 0
		}).wait(800).to({
			opacity: 1
		}, 400, createjs.Ease.Linear).call(entraInfos)
	}
}