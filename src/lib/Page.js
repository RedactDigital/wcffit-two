const { Page } = require('../database/models');

class Pages {
  static async getPage(permalink) {
    const page = await Page.findOne({
      where: { permalink },
    });
    return page;
  }
}

module.exports = Pages;
