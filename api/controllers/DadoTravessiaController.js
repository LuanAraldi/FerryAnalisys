/**
 * DadosController
 *
 * @description :: Server-side logic for managing Dados
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	realizarTravessia: function(req, res) {

		var ferry = {
			carrosMax : req.param('carrosMax'),
			velocidade : req.param('velocidade'),
			travessia : req.param('travessia')
		}

		var tempoTravessia = ((ferry.travessia / ferry.velocidade) * 0.008) * 1000;

	  var fila = new Array();
		var parse = JSON.parse(req.param('fila'));
		var iteracoes = [];

		for (var x in parse) {
			fila.push(parse[x]);
		}
		console.log(fila);

		for (var i = 0; i < req.param('iteracoes'); i++) {
			enfileira(ferry, fila);
		}

		res.json(fila);

		function enfileira(ferry, fila){
	    while (fila.length < ferry.carrosMax) {
	      //console.log(new Date().getTime());
	      fila.push(new Date().getTime());
	      sleep(Math.floor((Math.random() * 180) + 5));
	    }
	    sleepfila(tempoTravessia, fila, ferry);
	  }

	  function sleep(delay) {
	    var start = new Date().getTime();
	    while (new Date().getTime() < start + delay);
	  }

	  function sleepfila(delay, fila, ferry) {
	    for (var i = 0; i < ferry.carrosMax; i++) {
	      fila.shift();
	    }
			var start = new Date().getTime();
	    while (new Date().getTime() < start + delay){
	      fila.push(new Date().getTime());
	      sleep(Math.floor((Math.random() * 180) + 5));
	    }
	  }
	}
};
