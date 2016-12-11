/**
 * Dados.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      pessoas: {
        type: 'integer'
      },

      veiculos: {
        type: 'integer'
      },

      tempoSaida: {
        type: 'float'
      },

      tempoChegada: {
        type: 'float'  
      },

      idFerry: {
        model: "DadoFerry"
      }
  }
};
