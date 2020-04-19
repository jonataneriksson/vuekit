module.exports = {
  'Local Testing': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('body')
      .waitForElementVisible('#app')
      .pause(1000)
      .getElementSize('picture', function(result) {
        console.log('result', result);
      })
      .pause(1000)
      .end();
  }
};
