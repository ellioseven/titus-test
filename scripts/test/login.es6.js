const puppeteer = require('puppeteer');
const fs = require('fs');
const cookiesTmp = process.env.APP_TMP + '/cookies.json';

async function launch() {
  return await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
}

async function login() {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto(process.env.APP_URL + '/user/login', {
    timeout: 30000,
    waitUntil: 'networkidle2',
  });
  await page.click('#edit-name');
  await page.keyboard.type(process.env.APP_USER);
  await page.click('#edit-pass');
  await page.keyboard.type(process.env.APP_PASS);
  await page.click('#edit-submit');
  await page.waitForNavigation();
  const cookies = await page.cookies();
  await writeCookies(cookies[0]);
  process.exit();
}

async function writeCookies(cookies) {
  return await fs.writeFileSync(cookiesTmp, JSON.stringify(cookies), (err, text) => {
    if (err) {
      return console.log(err);
    } else {
      return resolve(cookiesTmp);
    }
  });
}

login();
