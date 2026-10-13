# Current EOC system screenshots for the presentation

Put the seven **real screenshots captured from the current running EOC system** in this directory. The example slides are sequenced already and display a screenshot automatically when its file exists. Do not use invented values or screenshots from an old presentation.

Capture recommendations: open the current system at **100% browser zoom**, maximize the browser, and save the actual interface as PNG (16:9 preferred; 1920×1080 or 1600×900). Avoid the browser tabs/address bar where possible. Use test/demo records, or blur names, phone numbers, beneficiary data, tokens, secrets, and other sensitive operational information.

| File name | Capture from the current system |
|---|---|
| `01-operations-overview.png` | **مؤشرات المركز اليومية** (Operations Overview), the main operations dashboard. |
| `02-ai-social-monitoring.png` | **رصد الذكاء الاصطناعي**, with the current social-monitoring results/section visible if available. |
| `03-earthquake-monitoring.png` | **مركز رصد الزلازل**, with current filters and results visible. |
| `04-field-missions-workflow.png` | **سجل المهام الميدانية**, with one sample mission and its current status/workflow visible. |
| `05-branches-strategic-inventory.png` | **الفروع والمخزون الاستراتيجي**, ideally a selected map branch with its stock detail in the same capture. |
| `06-system-audit-log.png` | **سجل النظام**, with recent entries visible and personal/sensitive details masked. |
| `07-mobile-operations.png` | A current phone-width view of Operations Overview or Field Missions, not a shrunk desktop screenshot. |

The root `eoc-command-deck.html` uses image paths beginning `deploy/assets/live-examples/`; deployed `deploy/index.html` uses `assets/live-examples/`. Both resolve to the same files in this directory; add each screenshot once. If an image is missing, a clearly labelled capture slot stays visible instead of presenting an old/illustrative screen as if it were live.
