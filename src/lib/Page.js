const { Page } = require('../database/models');

class Pages {
  static async getPage(permalink) {
    try {
      const page = await Page.findOne({
        where: { permalink },
      });

      return page;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

module.exports = Pages;
