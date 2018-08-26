const Enum = require('enum');

const mediaType = new Enum(['image', 'audio', 'video','page'], { ignoreCase: true });

modules.exports = mediaType;
