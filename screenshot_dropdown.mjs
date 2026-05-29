import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 800 });
await page.goto('http://localhost:3001/en', { waitUntil: 'networkidle' });
await page.evaluate(() => window.scrollBy(0, 200));
await page.waitForTimeout(300);

// Hover over Solutions button
await page.hover('button:has-text("Solutions")');
await page.waitForTimeout(300);
// Move into the dropdown panel
await page.mouse.move(200, 115);
await page.waitForTimeout(200);
await page.screenshot({ path: 'C:/Users/ADHU/AppData/Local/Temp/dropdown_open.png', clip: { x: 0, y: 0, width: 500, height: 280 } });

await browser.close();
