import json
import os
import sys
from playwright.sync_api import sync_playwright

def scrape_identity(name, url):
    print(f"Scraping {name} from {url}...")
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            page.goto(url, wait_until="networkidle", timeout=60000)
            
            # Extract branding details
            identity = page.evaluate("""() => {
                const getStyle = (el, prop) => el ? window.getComputedStyle(el)[prop] : null;
                const primaryBtn = document.querySelector('button[class*="primary"], .btn-primary, button:not([disabled])');
                
                return {
                    colors: {
                        primary: getStyle(primaryBtn, 'backgroundColor'),
                        text: getStyle(document.body, 'color'),
                        background: getStyle(document.body, 'backgroundColor')
                    },
                    fontFamily: getStyle(document.body, 'fontFamily'),
                    title: document.title
                }
            }""")
            
            # Save screenshot for verification
            screenshot_path = f"youssef-dafa-v2/backend/data/clones/{name}_reference.png"
            page.screenshot(path=screenshot_path)
            identity['screenshot'] = screenshot_path
            
            browser.close()
            return identity
    except Exception as e:
        print(f"Error scraping {name}: {e}")
        return None

targets = {
    "fedex": "https://www.fedex.com/en-us/home.html",
    "dhl": "https://www.dhl.com/global-en/home.html",
    "aramex": "https://www.aramex.com/ar/home",
    "alrajhi": "https://www.alrajhibank.com.sa/ar/personal",
    "snb": "https://www.alahli.com/ar-sa/Pages/Home.aspx"
}

results = {}
for name, url in targets.items():
    data = scrape_identity(name, url)
    if data:
        results[name] = data

with open("youssef-dafa-v2/backend/data/clones/branding_manifest.json", "w") as f:
    json.dump(results, f, indent=4)

print("Scraping completed.")
