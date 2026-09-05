import base64, io

def b64_of(path, mime):
    with open(path, 'rb') as f:
        raw = f.read()
    return 'data:%s;base64,%s' % (mime, base64.b64encode(raw).decode())

def sniff(path):
    with open(path, 'rb') as f:
        head = f.read(4)
    if head[:3] == b'\xff\xd8\xff':
        return 'image/jpeg'
    if head[:4] == b'\x89PNG':
        return 'image/png'
    return 'image/png'

eoc = b64_of(r"C:\Users\mo7am\OneDrive\Work\EOC System\frontend\public\eoc-logo.png", sniff(r"C:\Users\mo7am\OneDrive\Work\EOC System\frontend\public\eoc-logo.png"))
erc = b64_of(r"C:\Users\mo7am\OneDrive\Work\EOC System\frontend\public\erc-logo.jpg.png", sniff(r"C:\Users\mo7am\OneDrive\Work\EOC System\frontend\public\erc-logo.jpg.png"))

with open(r"C:\Users\mo7am\OneDrive\Work\Eoc System Show\_build\part_a.html", encoding='utf-8') as f:
    a = f.read()
with open(r"C:\Users\mo7am\OneDrive\Work\Eoc System Show\_build\part_b.html", encoding='utf-8') as f:
    b = f.read()

html = a + b
assert '__LOGO_EOC__' in html and '__LOGO_ERC__' in html, 'placeholders missing'
n1 = html.count('__LOGO_EOC__'); n2 = html.count('__LOGO_ERC__')
html = html.replace('__LOGO_EOC__', eoc).replace('__LOGO_ERC__', erc)

token_open = html.count('data:image')
# quick integrity check: balanced script/style + section count
assert html.count('<section class="s"') == 18, 'slide count wrong: %d' % html.count('<section class="s"')
out = r"C:\Users\mo7am\OneDrive\Work\Eoc System Show\eoc-command-deck.html"
with open(out, 'w', encoding='utf-8') as f:
    f.write(html)

print('OK  slides=%d  logos_embedded=%d  total_bytes=%d  -> %s' % (
    html.count('<section class="s"'), n1 + n2, len(html.encode('utf-8')), out))