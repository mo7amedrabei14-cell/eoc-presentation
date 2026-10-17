# Current EOC system screenshots used by the presentation

Add **17 screenshots from the current running EOC system** here. The HTML has a separate sequential example slide for each of the 16 current application pages plus one mobile view. Slides advance automatically and wait 18 seconds for each example. They will show a labelled placeholder until the corresponding real screenshot exists; no older illustrative screenshot is presented as live.

Capture at **100% browser zoom**, with Chrome maximized. Save PNG (recommended) or JPG. For desktop pages, use a clear 16:9 crop at 1920×1080 or 1600×900 if practical. The mobile image must be an actual mobile-width interface/phone capture, not a scaled desktop screenshot. Use safe demo records or mask names, phone numbers, beneficiary information, credentials, tokens and sensitive operational data.

| # | Exact file name | Actual application page to capture |
|---:|---|---|
| 01 | `01-powerbi-dashboard.png` | **لوحة المؤشرات الرئيسية** — Power BI dashboard |
| 02 | `02-ai-monitoring.png` | **رصد الذكاء الاصطناعي** — current monitoring results and sources |
| 03 | `03-daily-weather-intelligence.png` | **استخبارات الطقس** / daily weather intelligence |
| 04 | `04-earthquake-intelligence.png` | **استخبارات الزلازل** — separate from the Earthquake Center |
| 05 | `05-operations-overview.png` | **مؤشرات المركز اليومية** — operations overview |
| 06 | `06-weather-forecasts.png` | **توقعات الطقس** |
| 07 | `07-governorate-contacts.png` | **سجل التواصل مع الفروع** |
| 08 | `08-field-missions.png` | **سجل المهام الميدانية** — show status/workflow of a sample mission |
| 09 | `09-human-resources.png` | **سجل القوة البشرية** |
| 10 | `10-local-news.png` | **سجل الأخبار المحلية** |
| 11 | `11-global-disasters.png` | **رصد الكوارث العالمية** |
| 12 | `12-earthquake-center.png` | **مركز رصد الزلازل** |
| 13 | `13-branches-strategic-inventory.png` | **الفروع والمخزون الاستراتيجي** — ideally branch map plus selected stock details |
| 14 | `14-supervisors-handover.png` | **تسليم وتسلم مشرفين** |
| 15 | 15-wireless-handover.png | **تسليم أجهزة لاسلكي** — multi-device handover record, declaration, condition and return report |
| 16 | 16-system-audit-log.png | **سجل النظام** |
| 17 | 17-mobile-interface.png | **عرض النظام على الهاتف** — actual responsive/mobile view |

Keep the filenames exactly as written. The source deck `eoc-command-deck.html` refers to `deploy/assets/live-examples/<filename>`, and the published `deploy/index.html` refers to `assets/live-examples/<filename>`; that is why both HTML copies use the same folder in the repository. Do not add these files to the `eoc-system` repository. Only add them to `eoc-presentation/deploy/assets/live-examples/`.

Pages 10–12 appear consecutively after the existing presentation slide that introduces the monitoring sources together; these are **three different actual pages**, not duplicate screenshots. Other pages each have their own example slide after the nearest slide that explains them. The deck's other conceptual/architecture/closing slides have no extra screenshot examples.
