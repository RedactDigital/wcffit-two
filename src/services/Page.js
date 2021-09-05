const { getPage } = require('../lib/Page');
const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_API_URL });
const Logger = require('../../src/middleware/Logger');
const log = new Logger();

const appTitle = 'West County Fitness in Girard, PA';

class Page {
  static async landing(req, res) {
    const { content } = await getPage('/index');
    return res.render('index', { title: appTitle, name: null, content });
  }

  static async uri(req, res) {
    const { content, name } = await getPage(req.url);
    return res.render('index', { title: `${name} | ${appTitle}`, name, content });
  }

  static async contact(req, res) {
    const { content, name } = await getPage('/contact');
    return res.render('index', { title: `${name} | ${appTitle}`, name, content });
  }

  static async sendEmail(req, res) {
    const { content, name } = await getPage('/contact');
    const { email, subject, message } = req.body;
    const msg = `${email} has sent you an email. <br> ${message}`;
    const data = {
      to: `patrick.rizzardi@gmail.com`,
      from: `West County Fitness <${process.env.EMAIL}>`,
      subject,
      html: msg,
    };
    try {
      const email = await mailgun.messages().send(data);
      log.info(`"${data.subject}" email sent successfully to "${data.to}"`);
    } catch (e) {
      log.error(e);
    }
    return res.render('index', { title: `${name} | ${appTitle}`, name, content, sent: true });
  }
}

module.exports = Page;
