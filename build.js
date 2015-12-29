// Options
var opts = {files: 'CNAME'};
// Require and init
var plainStatic = require('plain-static')(opts);

// Build all the things!
var def = plainStatic();
