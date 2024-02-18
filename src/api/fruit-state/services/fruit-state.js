'use strict';

/**
 * fruit-state service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fruit-state.fruit-state');
