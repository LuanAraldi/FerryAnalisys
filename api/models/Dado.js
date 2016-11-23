/**
 * Dados.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  // attributes: {
  //     id { type: 'integer',
  //          autoIncrement: true,
  //          unique: true,
  //          primaryKey: true,
  //      },
  //
  //      idFerry {model: 'dadoferry'},
  //      pessoas {type: 'integer'},
  //      veiculos {type: 'integer'},
  //      tripulantes {type: 'integer'},
  //
  // },
  attributes: {
      id: {
          type: 'integer',
          autoIncrement: true,
          primaryKey: true
      },

      pessoas: {
        type: 'integer'
      },

      carros: {
          type: 'integer'
      },

      tripulantes: {
          type: 'integer'
      }

  }
};
