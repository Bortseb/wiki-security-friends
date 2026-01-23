// **index.js**
// Simple file so that if you require this directory
// in node it instead requires the server-side application.

require("coffeescript");
require("coffeescript/register");

module.exports = require("./server/friends");
