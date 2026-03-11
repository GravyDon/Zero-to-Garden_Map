---
tags:
  - ActionNote
year: "2026"
month_start: "03"
month_day: "10"
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
#TODO need to complete this, but you gotta be doing plant research!!!
