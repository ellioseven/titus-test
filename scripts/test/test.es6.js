const puppeteer = require('puppeteer');
const fs = require('fs');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
const cookiesTmp = process.env.APP_TMP + '/cookies.json';

module.exports = {
  _getCookies: async function () {
    const data = fs.readFileSync(cookiesTmp, 'utf-8', (err, data) => {
      if (!err) { return data }
    })
    return JSON.parse(data);
  },
  _launch: async function () {
    return await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  },
  test: async function (routeId, routeLocation, hookPostRequest) {
    jest.setTimeout(30000);
    const cookies = await this._getCookies();
    const browser = await this._launch();
    const page = await browser.newPage();
    await page.setViewport({ height: 1080, width: 1920 });
    await page.setCookie(cookies);
    await page.goto(process.env.APP_URL + routeLocation, {
      timeout: 10000,
      waitUntil: 'networkidle2'
    });
    if (hookPostRequest) { await hookPostRequest(page) }
    const screenshot = await page.screenshot({
      fullPage: true
    });
    expect.extend({ toMatchImageSnapshot });
    expect(screenshot).toMatchImageSnapshot({
      customSnapshotsDir: './snapshots',
      customSnapshotIdentifier: routeId,
      failureThreshold: '0.01',
      failureThresholdType: 'percent'
    });
    browser.close();
  }
}
