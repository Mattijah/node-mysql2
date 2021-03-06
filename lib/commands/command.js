var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Command() {
  EventEmitter.call(this);
  this.next = null;
}
util.inherits(Command, EventEmitter);

Command.prototype.execute = function(packet, connection) {
  // TODO: hack
  if (!this.next) {
    this.next = this.start;
  }

  if (packet && packet.isError()) {
    var err = packet.asError();
    if (this.onResult)
      this.onResult(err);
    else
      this.emit('error', err);
    return true;
  }

  // TODO: don't return anything from execute, it's ugly and error-prone. Listen for 'end' event in connection
  this.next = this.next(packet, connection);
  if (this.next) {
    return false;
  } else {
    this.emit('end');
    return true;
  }
};

module.exports = Command;
