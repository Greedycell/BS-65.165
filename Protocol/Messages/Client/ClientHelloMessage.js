const PiranhaMessage = require('../../PiranhaMessage')
const LoginFailedMessage = require('../Server/LoginFailedMessage')
const LoginOkMessage = require('../Server/LoginOkMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')
const PopupMessage = require('../Server/PopupMessage')
const BattleLogMessage = require('../Server/BattleLogMessage')

class ClientHelloMessage extends PiranhaMessage {
  constructor (bytes, client) {
    super(bytes)
    this.client = client
    this.id = 10100
    this.version = 1
  }

  async decode () {}

  async process () {
    setTimeout(() => {
      new LoginOkMessage(this.client).send()
      new OwnHomeDataMessage(this.client).send()
      //new PopupMessage(this.client).send()
      new BattleLogMessage(this.client).send()
    }, 2000)
    //await new LoginFailedMessage(this.client, 3, 'You need to kill pepper to access the server!').send()
  }
}

module.exports = ClientHelloMessage
