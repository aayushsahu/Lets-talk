const puppeteer = require('puppeteer');

const owner = 'aayushsahu'; // Replace with the repository owner's username or organization name
const repo = 'aayushsahu.github.io'; // Replace with the repository name
const outputFile = 'contributor_graph.png'; // Output file name

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://github.com/${owner}/${repo}/graphs/contributors`);

    // Wait for the contributor graph to load
    await page.waitForSelector('.selection')
    

    // Capture screenshot of the contributor graph  
    //await page.screenshot({ path: outputFile });

    console.log(`Contributor graph saved as ${outputFile}`);

    await browser.close();
})();
