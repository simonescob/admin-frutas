'use strict';

/**
 * fruits-state service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fruits-state.fruits-state');
