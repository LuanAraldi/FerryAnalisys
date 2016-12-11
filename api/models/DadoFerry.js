/**
 * DadosFerry.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome: {
      type: 'string'
    },

    tripulantesMax: {
        type: 'integer'
    },

    pessoasMax: {
        type: 'integer'
    },

    carrosMax: {
        type: 'integer'
    },

    velocidade: {
      type: 'float'
    },

    travessia: {
      type: 'float'
    },

    dadosTravessia: {
      collection: "DadoTravessia",
      via: "idFerry"
    }
  }

};
