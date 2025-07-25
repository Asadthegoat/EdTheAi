import requests
from bs4 import BeautifulSoup
import json

def scrape_website(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    # Extract text from all paragraphs
    content = ' '.join([p.text for p in soup.find_all('p')])
    return content

# Example usage:
website_data = scrape_website("https://www.fasteddies.ca/about/")
print (website_data)
print(json.dumps(website_data, indent=2))