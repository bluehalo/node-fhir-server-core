const axios = require('axios');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
const puppeteer = require('puppeteer');

// username and password to login to the smart portal.
// {smartCredentials: {username: 'USERNAME', password: 'PASSWORD'}}
const smartCredentials = require('./../secrets').smartCredentials;

describe('FHIR Authentication Server Tests', () => {

	let browser;
	let pem;

	const authenticationJwkEndpoint = 'https://sb-auth.smarthealthit.org/jwk';
	const sandboxPortal = 'https://sandbox.smarthealthit.org/smartdstu2/#/manage-apps';

	// Initialize headless browser.
	beforeAll((done) => {
		puppeteer.launch().then((newBrowser) => {
			browser = newBrowser;
			done();
		});
	});

	// Initialize pem to verify tokens.
	beforeAll((done) => {
		return axios.get(authenticationJwkEndpoint).then(response => {
			// Only one key should be returned.
			const jwk = response.data.keys[0];
			pem = jwkToPem(jwk);
			done();
		});
	});

	// Close headless browser.
	afterAll(() => {
		browser.close();
	});

	test('should login and get a sandman token', () => {
		async function obtainToken() {
			let token = null;

			function parseResponseForToken(response) {
				if (/token$/.test(response.url)) {
					response.buffer().then((buffer) => {
						token = JSON.parse(buffer.toString());
					});
				}
			}

			const usernameSelector = '#username';
			const passwordSelector = '#password';
			const submitSelector = '#submitButton';
			const registerSelector = '#uiView > div > div > div > div.content-column.col-lg-12 > div:nth-child(1) > div';

			const page = await browser.newPage();

			await page.goto(sandboxPortal);

			// Wait for the login prompt to show.
			await page.waitForSelector(usernameSelector);

			// Token request will be fired shortly after logging in.
			page.on('response', parseResponseForToken);

			await page.click(usernameSelector);
			await page.keyboard.type(smartCredentials.username);
			await page.click(passwordSelector);
			await page.keyboard.type(smartCredentials.password);
			await page.click(submitSelector);

			// Only loads after the token has been distributed. Token should be set by now.
			await page.waitForSelector(registerSelector);

			return token;
		}

		return obtainToken().then((token) => {
			expect(token).toHaveProperty('access_token');
			expect(token.token_type).toBe('Bearer');
			expect(token.expires_in).toBeGreaterThan(0);
			expect(typeof token.scope).toBe('string');
			// An error will be thrown if verification fails.
			console.log(token);
			expect(jwt.verify(token.access_token, pem)).toBeDefined();
		});
	});
});