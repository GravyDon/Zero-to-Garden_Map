---
tags:
  - notes
month_start: "02"
month_day: "11"
year: "2026"
cssclasses:
---
```dataview
TABLE
 Family AS "Family",
 join([Genus, Species]) AS "Genus Species",
 row["Edible?"] AS "Edible?",
 row["Medicinal?"] AS "Medicine?",
 choice(row["Nitrogen_fixer?"], "🌱 YES", "" ) AS "NF?",
 choice(row["Pest_repellant?"], "👃 YES", "") AS "PR?",
 choice(row["Mulch_creator?"], "🍂 YES" ,"") AS "MC?",
 choice(row["Insect_attractor?"], "🕸️ YES", "") AS "IA?",
 choice(row["Animal_habitation?"], "🐦 YES", "") AS "AH?",
 choice(row["Dynamic Accumulator?"], "🌈 YES", "") AS "DA?"
FROM "Plants"
WHERE file.name != "Plant Research Management"
SORT height DESC, layer DESC
```

