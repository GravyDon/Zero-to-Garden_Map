---
tags:
  - ActionNote
  - "#fuel"
year: "2026"
month_start: "06"
month_day: "02"
month_end:
Specific_usage:
UsageNum:
LastDateMod:
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
https://courses.ems.psu.edu/egee439/node/684 - outline of the process

#### Precursors/prerequisites
Chemical precursors: vegetable oil, methanol or ethanol, lye
Equipment: reactor tank with mixing component, piping, drying tanks (to separate unreacted alcohols from the biodiesel and water byproduct), 
```tabs
--- 1. making lye
[[Electrolysis and production of lye]]
--- 2. making methanol
can be done using syngas (wood gas) and hydrogen mixing (need to research more about this)
--- 3. making ethanol
Can be done using normal distilling processes for creating alcohol from plant matter.
--- 4. drying alcohol
Needs to be done either by physical separation through phase changes and distilling or through chemical treatments
--- 5. making vegetable oil
Can be done through seed oil processing (need to make that paper shredder into a seed oil crushing machine)
```

Getting the equipment is going to be tricky since it is both bulky and expensive. Electrical components will be required for the mixing apparatus within the reactor.

The shape of the reactor should be conical to allow for the separation of fluids based on specific gravity specifically that of the biodiesel and the glycerol.

The morphology of the separator is unclear. membranes might be involved or some other process to evaporate off alcohols and water from the solution.

