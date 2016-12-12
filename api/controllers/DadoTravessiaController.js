/**
 * DadosController
 *
 * @description :: Server-side logic for managing Dados
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	realizarTravessia: function(req, res) {
		var fila = [];
		var parse = JSON.parse(req.param('fila'));

		for (var x in parse) {
			fila.push(parse[x]);
		}
		var filas = [];
		for (var j = 0; j < req.param('iteracoes'); j++) {
			var ferry = {
				carrosMax : req.param('carrosMax'),
				velocidade : req.param('velocidade'),
				travessia : req.param('travessia')
			}

			var tempoTravessia = ((ferry.travessia / ferry.velocidade) * 0.008) * 1000;
			console.log(fila.length);

			enfileira(ferry, fila);
			console.log(filas)
			var filaAux = new Array()
			for (var i = 0; i < fila.length; i++) {
				filaAux.push(fila[i]);
			}
			filas.push(filaAux);

			function enfileira(ferry, fila){
		    while (fila.length < ferry.carrosMax) {
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
		console.log(filas);
		res.json(filas);
	}
};
