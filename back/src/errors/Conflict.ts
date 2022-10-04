export {};

class Conflict extends Error {
  statusCode: number;

  constructor(message: string = 'HTTP 409 Conflict') {
    super(message);
    this.statusCode = 409;
  }
}

module.exports = Conflict;
