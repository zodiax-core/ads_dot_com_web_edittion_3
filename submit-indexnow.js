import fs from 'fs';
import path from 'path';

const SITEMAP_PATH = path.resolve('./public/sitemap.xml');
const HOST = 'adsdotcom.net';
const KEY = 'c4054ce55e734fd7a89b9c4aa914f974';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function submitToIndexNow() {
  try {
    const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
    // Extract all <loc> tags
    const urlMatches = sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g);
    const urlList = Array.from(urlMatches).map(match => match[1]);

    if (urlList.length === 0) {
      console.log('No URLs found in sitemap.');
      return;
    }

    console.log(`Found ${urlList.length} URLs to submit to IndexNow...`);

    const payload = {
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urlList
    };

    // Submitting to IndexNow API (which routes to Bing, Yandex, etc.)
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok || response.status === 202) {
      console.log('Successfully submitted URLs to IndexNow! Search engines will prioritize crawling these links shortly.');
    } else {
      console.error(`Failed to submit: ${response.status} ${response.statusText}`);
      const text = await response.text();
      console.error(text);
    }
  } catch (error) {
    console.error('Error submitting to IndexNow:', error);
  }
}

submitToIndexNow();
