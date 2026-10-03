# -*- coding: utf-8 -*-
"""Restructure the EOC Show deck: 22 slides -> 27, grouped by sidebar order, no data-step."""
import io
import os
import re
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))          # _build/_scratch
BUILD = os.path.dirname(HERE)                              # _build
NEW = os.path.join(HERE, "new")

SEC = re.compile(r'(?:<!-- =+ .*? =+ -->\s*)?<section class="s(?: divider)?" id="(s\d+)">.*?\n</section>', re.S)
STEP = re.compile(r'\s+data-step="\d+"')


def read(p):
    with io.open(p, encoding='utf-8') as f:
        return f.read()


def write(p, s):
    with io.open(p, 'w', encoding='utf-8', newline='') as f:
        f.write(s)


# ---------------------------------------------------------------- load
pa = read(os.path.join(BUILD, 'part_a.html'))
pb = read(os.path.join(BUILD, 'part_b.html'))

# split each part into head / sections / tail
sections = {}
order = []
for src in (pa, pb):
    ms = list(SEC.finditer(src))
    for m in ms:
        sid = m.group(1)
        sections[sid] = m.group(0)
        order.append(sid)

assert len(sections) == 22, 'expected 22 source sections, got %d' % len(sections)
assert len(set(order)) == 22

# head = everything in part_a before the first section; tail = everything in part_b after the last section
head = pa[:list(SEC.finditer(pa))[0].start()]
tail = pb[list(SEC.finditer(pb))[-1].end():]
assert tail.lstrip().startswith('</div></main>'), 'part_b tail not where expected'

# ---------------------------------------------------------------- new sections
newg1 = read(os.path.join(NEW, 'new_g1.html')).strip()
neweq = read(os.path.join(NEW, 'new_eq.html')).strip()
newg2 = read(os.path.join(NEW, 'new_g2.html')).strip()
newhome = read(os.path.join(NEW, 'new_home.html')).strip()
newgov = read(os.path.join(NEW, 'new_gov.html')).strip()

# ---------------------------------------------------------------- plan
PLAN = [
    ('s01',     's01', None, 'COVER'),
    ('s02',     's02', '01',  'THE CHALLENGE'),
    ('s03',     's03', '02',  'THE SOLUTION'),
    ('s04',     's04', '03',  'THE ROOM MODULES'),
    ('NEW_G1',  's05', None, 'DIVIDER - AUTOMATIC UNITS'),
    ('s05',     's06', '04',  'POWER BI DASHBOARD'),
    ('s12',     's07', '05',  'AI RADAR'),
    ('s08',     's08', '06',  'WEATHER INTELLIGENCE'),
    ('NEW_EQ',  's09', '07',  'EARTHQUAKE INTELLIGENCE'),
    ('NEW_G2',  's10', None, 'DIVIDER - OPERATIONAL UNITS'),
    ('NEW_HOME', 's11', '08', 'DAILY CENTER INDICATORS'),
    ('s07',     's12', '09',  'WEATHER FORECAST'),
    ('NEW_GOV', 's13', '10',  'GOVERNORATE CONTACTS'),
    ('s09',     's14', '11',  'MISSION LOG'),
    ('s10',     's15', '12',  'MISSION WORKFLOW'),
    ('s11',     's16', '13',  'HUMAN RESOURCES'),
    ('s13',     's17', '14',  'LOCAL + GLOBAL MONITORING'),
    ('s14',     's18', '15',  'MAP'),
    ('s15',     's19', '16',  'INVENTORY'),
    ('s18',     's20', '17',  'SUPERVISORS HANDOVER'),
    ('s19',     's21', '18',  'AUDIT LOG'),
    ('s06',     's22', '19',  'MOBILE FIELD'),
    ('s16',     's23', '20',  'REALTIME ENGINE'),
    ('s17',     's24', '21',  'RBAC'),
    ('s20',     's25', '22',  'ARCHITECTURE'),
    ('s21',     's26', '23',  'FUTURE'),
    ('s22',     's27', None, 'CLOSING'),
]
SPLIT_AFTER = 's10'
INLINE = {
    'NEW_G1': newg1, 'NEW_EQ': neweq, 'NEW_G2': newg2,
    'NEW_HOME': newhome, 'NEW_GOV': newgov,
}
NO = re.compile(r'<span class="s-no">\d+</span>')
ID = re.compile(r'(<section class="s(?: divider)?") id="s\d+"')

assert len(PLAN) == 27

built = []
for src, newid, badge, label in PLAN:
    body = INLINE[src] if src in INLINE else sections[src]
    body = STEP.sub('', body)                       # strip data-step everywhere
    body = body.rstrip()
    assert body.endswith('</section>'), 'section %s not terminated' % src
    body = body[:-len('</section>')].rstrip()         # drop old comment header, keep the tag
    body = ID.sub(lambda m: '%s id="%s"' % (m.group(1), newid), body, count=1)
    if badge is None:
        body = NO.sub('', body)                    # dividers + cover carry no badge
    else:
        if NO.search(body):
            body = NO.sub('<span class="s-no">%s</span>' % badge, body, count=1)
        else:
            body = body.replace('<span class="s-eyebrow"',
                                '<span class="s-no">%s</span><span class="s-eyebrow"' % badge, 1)
    built.append('<!-- ================= %s %s ================= -->\n%s\n</section>'
                 % (newid.upper(), label, body))

deck = '\n\n'.join(built)
cut = deck.index('\n\n<!-- ================= S11 ')
part_a = head.rstrip() + '\n\n' + deck[:cut].rstrip() + '\n'
part_b = '\n' + deck[cut:].lstrip('\n') + '\n' + tail.lstrip('\n')

# ---------------------------------------------------------------- head cleanups
part_a = part_a.replace('<div id="steps" class="hidden"></div>\n', '')
part_a = re.sub(r'\s*<span id="hintEnter2">[^<]*</span>', '', part_a)
part_a = part_a.replace('أو بالأزرار أسفل الشاشة · <span id=&quot;hintEnter2&quot;>أعد التشغيل</span>',
                        'أو بالأزرار أسفل الشاشة')
part_a = part_a.replace('or the arrows below · <span id=&quot;hintEnter2&quot;>Replay</span>',
                        'or the arrows below')
part_a = part_a.replace('رصد بلاغات الف branches ومتابعة الاستجابة',
                        'رصد بلاغات الفروع ومتابعة الاستجابة')

# ---------------------------------------------------------------- script surgery
S = part_b
before = S

S = S.replace("""  /* event delegation for hintEnter2 (innerHTML swap destroys bound listeners) */
  document.addEventListener('click', function(e){
    if(e.target && e.target.id === 'hintEnter2') startAuto();
  });

""", '')

S = S.replace(
    "  var idx = 0, playing = false, timer = null, autoDur = 12000, stepIdx = 0, steps = [];\n"
    "  /* steps[i] = highest data-step on slide i (0 = no fragments) */\n"
    "  steps = slides.map(function(s){\n"
    "    var m = 0;\n"
    "    Array.prototype.forEach.call(s.querySelectorAll('.rv[data-step]'), function(el){\n"
    "      var v = parseInt(el.getAttribute('data-step'), 10);\n"
    "      if(!isNaN(v) && v > m) m = v;\n"
    "    });\n"
    "    return m;\n"
    "  });\n",
    "  var idx = 0, playing = false, timer = null, autoDur = 12000;\n")

start = S.index('  /* ── step fragments ─')
end = S.index('  /* ── navigation ─')
S = S[:start] + S[end:]

S = S.replace(
    "    timer = setTimeout(function(){\n      stepForward(false); if(playing) armTimer();\n    }, autoDur);",
    "    timer = setTimeout(function(){\n      if(idx < total - 1) go(idx + 1, false); else go(0, false);\n      if(playing) armTimer();\n    }, autoDur);")

S = S.replace(
    "    stepIdx = manual ? (steps[idx] || 0) : 0;\n    setStep(stepIdx);\n", '')

S = S.replace(
    "  function next(){ stepForward(true); }\n  function prev(){ stepBack(true); }",
    "  function next(){ if(playing) stopAuto(); if(idx < total - 1) go(idx + 1, true); }\n"
    "  function prev(){ if(playing) stopAuto(); if(idx > 0) go(idx - 1, true); }")

part_b = S
assert part_b != before, 'script surgery made no change'

# ---------------------------------------------------------------- eyebrows (27)
EYE = [
    ('الافتتاح',                    'Opening'),
    ('الوحدات 01 · التحدي',        'Units 01 · The Challenge'),
    ('الوحدات 02 · الحل',          'Units 02 · The Solution'),
    ('الوحدات 03 · داخل الغرفة',   'Units 03 · Inside the Room'),
    ('قسم 01 · الوحدات التلقائية',  'Part 01 · Automatic Units'),
    ('الوحدات 04 · لوحة المؤشرات', 'Units 04 · Command Dashboard'),
    ('الوحدات 05 · الرادار الذكي', 'Units 05 · AI Radar'),
    ('الوحدات 06 · استخبارات الطقس', 'Units 06 · Weather Intelligence'),
    ('الوحدات 07 · استخبارات الزلازل', 'Units 07 · Earthquake Intelligence'),
    ('قسم 02 · الوحدات التشغيلية',  'Part 02 · Operational Units'),
    ('الوحدات 08 · مؤشرات المركز', 'Units 08 · Daily Indicators'),
    ('الوحدات 09 · توقعات الطقس',  'Units 09 · Weather Forecast'),
    ('الوحدات 10 · تواصل الفروع',  'Units 10 · Branch Contacts'),
    ('الوحدات 11 · سجل المهام',    'Units 11 · Mission Log'),
    ('الوحدات 12 · سير العمل',     'Units 12 · Mission Workflow'),
    ('الوحدات 13 · القوة البشرية', 'Units 13 · Human Resources'),
    ('الوحدات 14 · الرصد المحلي والعالمي', 'Units 14 · Local & Global Watch'),
    ('الوحدات 15 · الفروع والخريطة', 'Units 15 · Branches & Map'),
    ('الوحدات 16 · المخزون',       'Units 16 · Inventory'),
    ('الوحدات 17 · تسليم وتسلم',  'Units 17 · Handover'),
    ('الوحدات 18 · سجل النظام',   'Units 18 · Audit Log'),
    ('الوحدات 19 · الاستمرارية',   'Units 19 · Continuity'),
    ('الوحدات 20 · المحرّك اللحظي', 'Units 20 · Realtime Engine'),
    ('الوحدات 21 · الصلاحيات',     'Units 21 · Permissions'),
    ('الوحدات 22 · البنية',        'Units 22 · Architecture'),
    ('الوحدات 23 · المدى المفتوح', 'Units 23 · Open Horizon'),
    ('الخاتمة',                     'Closing'),
]
assert len(EYE) == 27


def ar_list(key):
    return "    ar: [\n" + ",\n".join("      %r" % a.replace('%', '%%') for a, _ in EYE) + "\n    ],\n"


def en_list(key):
    return "    en: [\n" + ",\n".join("      %r" % e for _, e in EYE) + "\n    ]\n"


m = re.search(r'  var eyebrows = \{\n    ar: \[.*?\n    \],\n    en: \[.*?\n    \]\n  \};', part_b, re.S)
assert m, 'eyebrows block not found'
part_b = part_b[:m.start()] + "  var eyebrows = {\n" + ar_list('ar') + en_list('en') + "  };" + part_b[m.end():]

# ---------------------------------------------------------------- write
shutil.copyfile(os.path.join(BUILD, 'part_a.html'), os.path.join(HERE, 'part_a.bak.html'))
shutil.copyfile(os.path.join(BUILD, 'part_b.html'), os.path.join(HERE, 'part_b.bak.html'))
write(os.path.join(BUILD, 'part_a.html'), part_a)
write(os.path.join(BUILD, 'part_b.html'), part_b)

# ---------------------------------------------------------------- verify
full = part_a + part_b
checks = [
    ('slide count 27', full.count('<section class="s') == 27),
    ('every section closed', full.count('<section class="s') == full.count('</section>') == 27),
    ('no data-step', 'data-step' not in full),
    ('no #steps element', 'id="steps"' not in full),
    ('no hintEnter2', 'hintEnter2' not in full),
    ('no stepForward/stepBack/setStep', not re.search(r'stepForward|stepBack|setStep|renderStepDots', full)),
    ('no stray Arabic/English mix', 'الف branches' not in full),
    ('part_a ends on s10', 'id="s10"' in part_a and 'id="s11"' not in part_a),
    ('part_b starts at s11', 'id="s11"' in part_b and 'id="s10"' not in part_b),
    ('unique ids', len(re.findall(r'<section class="s[^"]*" id="(s\d+)"', full)) == 27
     and len(set(re.findall(r'<section class="s[^"]*" id="(s\d+)"', full))) == 27),
    ('every slide has a badge except s01/s05/s10/s27',
     all(('<span class="s-no">%s</span>' % n) in full
         for n in ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
                   '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                   '21', '22', '23'])),
    ('bilingual coverage', all(('data-en=' in t) for t in
                               re.findall(r'<[a-z]+ [^>]*data-ar="[^"]*"[^>]*>', full))),
]
ok = True
for name, res in checks:
    print(('  OK   ' if res else '  FAIL ') + name)
    ok = ok and res

# every section must be balanced
for sid in re.findall(r'<section class="s[^"]*" id="(s\d+)"', full):
    pass
print('\nRESULT:', 'PASS' if ok else 'FAIL')
sys.exit(0 if ok else 1)
