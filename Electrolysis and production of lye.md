---
tags:
  - ActionNote
  - "#fuel"
  - "#notDone"
year: "2026"
month_start: "06"
month_day: "02"
month_end:
Specific_usage:
UsageNum: 1
LastDateMod: 2026-06-06T18:26:29.495-05:00
---
# ENGAGEMENT METER!!!

``` dataviewjs
const {update} = this.app.plugins.plugins["metaedit"].api
const {createButton} = app.plugins.plugins["buttons"]
let page = dv.current();
dv.span(page.file.mtime)
// 1. Define your data (wrapping current page in an array so we can map it)
const pages = [dv.current()];

// 2. Map the data into table rows
const rows = pages.map(t => {
    // Define the update logic for THIS specific row/file
    const triggerMultiUpdate = async (num, mtime) => {
        // Increment the number by 1 and update the date
        await update("UsageNum", num + 1, t.file.path);
        await update("LastDateMod", mtime, t.file.path);
    };

    return [
        t.UsageNum || 0, 
        t.LastDateMod || "Never", 
        createButton({
            app, 
            el: this.container,
            args: { name: "Update Tracker" },
            clickOverride: {
                // Pass the current values into the update function
                click: () => triggerMultiUpdate(t.UsageNum || 0, t.file.mtime),
                params: []
            }
        })
    ];
});

// 3. Render the table
dv.table(['Usage Num', 'Last Modified', 'Action'], rows);
```

https://chem.libretexts.org/Courses/Mount_Royal_University/Chem_1202/Unit_6:_Electrochemistry/6.8:_Industrial_Electrolysis_Processes - outline of process

``` tabs
--- 1. Materials
1. Electrolysis chamber (must be able to withstand high Ph and be gas sealed with gas ports; a partition must be included which is illustrated in figure 1)
2. Electrolysis probes (might be possible to throw some together with some whisks and steel wool or copper wool)
3. Battery and discharge system
4. Cation Exchange Filter and filter partition
5. A LOT OF SALT OR SOME OTHER SODIUM DONOR (needs a lot of consideration on how to source this)
6. Evaporation chamber
---2. Proposed Methodology
The idea behind membrane assisted electrolysis is that positive ions are allowed to propagate across a membrane while negative ions are not. When salt disassociates into sodium and chlorine ions in solution, it is then possible to take the positive ions and migrate them over to a biased hydroxide end. This will produce lye

The outputs are then processed. For chlorine, I`m going to have to figure out a safe gas storage container. Compressing the chlorine is also an option since it is a halogen and not going to combust in the presence of oxygen. However, this depends on the use case for the chlorine in other chemical reactions.

The lye will be piped out to an evaporation chamber (or kiln) to be dehydrated into lye powder. 

The electrolytic process itself, and its parameters, have not been determined yet. 
```

[[Desalination using electrophoresis]] - creation of brine 