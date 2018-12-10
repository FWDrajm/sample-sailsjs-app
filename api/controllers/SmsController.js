/**
 * SmsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  sendMessage: (req, res) => {
    let request = JSON.parse(JSON.stringify(req.body));
    let response = SMSService.sendMessage(request.message);
    res.ok(response);
  }

};
