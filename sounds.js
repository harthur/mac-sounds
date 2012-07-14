var exec = require('child_process').exec;

module.exports = function(name, cb) {
  var name = name.toLowerCase();
  name = name[0].toUpperCase() + name.slice(1);

  var file = "/System/Library/Sounds/" + name + ".aiff";

  exec("afplay " + file, cb);
}
