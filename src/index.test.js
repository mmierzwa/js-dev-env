import {
    expect
} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        const { window } = new JSDOM(index);

        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal('Hello w0rld!');

        done();
        window.close();
    });
    /*
    it('should have h1 that says Users', (done) => {
      const index = fs.readFileSync('./src/index.html', "utf-8");
      jsdom.env(index, function(err, window) {
        const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal("Users");
        done();
        window.close();
      });
    });
    */
});
