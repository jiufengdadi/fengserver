'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = '<h1>helloworld</h1>';
    }
  }
  return HomeController;
};
