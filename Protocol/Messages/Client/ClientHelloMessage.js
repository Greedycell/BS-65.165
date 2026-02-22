const PiranhaMessage = require('../../PiranhaMessage')
const LoginFailedMessage = require('../Server/LoginFailedMessage')

class ClientHelloMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10100
    this.version = 1
  }

  async decode () {}

  async process () {
    await new LoginFailedMessage(this.client, 3, 'You need to kill pepper to access the server!').send()
  }
}

module.exports = ClientHelloMessage