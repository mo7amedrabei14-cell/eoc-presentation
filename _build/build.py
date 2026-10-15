import base64
import os
import shutil

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)                       # Eoc System Show
# Logos are read (never modified) from the reference EOC system checkout.
REF_PUBLIC = r"C:\Users\mo7am\OneDrive\Work\EOC System\frontend\public"


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


eoc_path = os.path.join(REF_PUBLIC, "eoc-logo.png")
erc_path = os.path.join(REF_PUBLIC, "erc-logo.jpg.png")
eoc = b64_of(eoc_path, sniff(eoc_path))
erc = b64_of(erc_path, sniff(erc_path))

with open(os.path.join(HERE, "part_a.html"), encoding='utf-8') as f:
    a = f.read()
with open(os.path.join(HERE, "part_b.html"), encoding='utf-8') as f:
    b = f.read()

html = a + b
assert '__LOGO_EOC__' in html and '__LOGO_ERC__' in html, 'placeholders missing'
n1 = html.count('__LOGO_EOC__'); n2 = html.count('__LOGO_ERC__')
assert '__FAVICON__' in html, 'favicon placeholder missing'
html = html.replace('__LOGO_EOC__', eoc).replace('__LOGO_ERC__', erc).replace('__FAVICON__', eoc)

# quick integrity check: balanced script/style + section count
# note: two section dividers use class="s divider", so match without the closing quote
n_sections = html.count('<section class="s')
assert n_sections == 27, 'slide count wrong: %d' % n_sections
assert html.count('<section class="s divider"') == 2, 'expected 2 section dividers'

out = os.path.join(ROOT, "eoc-command-deck.html")
with open(out, 'w', encoding='utf-8') as f:
    f.write(html)

# Vercel serves the `deploy` directory (vercel.json → outputDirectory) — keep it identical to source.
deploy_out = os.path.join(ROOT, "deploy", "index.html")
shutil.copyfile(out, deploy_out)

print('OK  slides=%d  logos_embedded=%d  total_bytes=%d  -> %s + %s' % (
    n_sections, n1 + n2, len(html.encode('utf-8')), out, deploy_out))
