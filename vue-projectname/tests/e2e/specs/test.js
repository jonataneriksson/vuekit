// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'picture element height': browser => {
    browser
      .init()
      .waitForElementVisible('body')
      .waitForElementVisible('#app')
      .pause(1000)
      .getElementSize('picture', function(result) {
        console.log('result', result);
      })
      .end();
  },
  'click first link of top navigation': browser => {
    browser
      .init()
      .waitForElementVisible('body')
      .waitForElementVisible('#app')
      .waitForElementVisible('header')
      .click('header nav.listed a:nth-of-type(1)')
      .end();
  },
  'hover over a link': browser => {
    /* browser
      .init()
      .waitForElementVisible("body")
      .waitForElementVisible("#app")
      .moveToElement("article a:nth-of-type(1)").expect.element("article a").to.have.css("border-bottom-color:nth-of-type(1)").which.equals("transparent")
    */
  }
};
