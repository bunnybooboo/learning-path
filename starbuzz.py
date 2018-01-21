import urllib.request
page = urllib.request.urlopen("https://www.bbc.co.uk")
text = page.read().decode("utf8")
print(text[200:210])
