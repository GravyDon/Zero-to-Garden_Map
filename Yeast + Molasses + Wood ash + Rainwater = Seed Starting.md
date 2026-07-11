---
tags:
  - ActionNote
  - "#fertilizer"
  - "#done"
year: "2026"
month_start: "03"
month_day: "05"
month_end:
Specific_usage:
UsageNum: 1
LastDateMod: 2026-03-05T17:12:25.084-06:00
---
# ENGAGEMENT METER!!!!

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

---

# Premise
![](https://www.youtube.com/watch?v=gUZ_JgWdzww)
 The amish had a secret about activating the microbiome within seed starting soil without causing any effects to the seedlings. This was done using a domesticated fungus.... YEAST! 
 
 A mix of wood ash, purified water (with no chlorine gas), Molasses, Yeast, all inside of a bucket with aeration, can provide a healthy amount of nutrients to the soil. The fungus breaks down the molasses, thus providing carbon stores, providing a microbiome that can break down root waste[^1], and the wood ash serves as a source of nitrogenous material and trace minerals. 

# Materials 

| Material name          | Quantity per bucket | Link | Alternative method of obtaining                                                  |
| ---------------------- | ------------------- | ---- | -------------------------------------------------------------------------------- |
| Molasses (unsulphered) |                     |      |                                                                                  |
| Yeast                  |                     |      |                                                                                  |
| Purified water         |                     |      | Need to let the chlorine gas evaporate out of the container                      |
| Wood Ash               |                     |      | Need to let the wood burn up; maybe try to avoid softwoods. Hardwoods work best. |
| Bucket                 |                     |      | duh; harbor freight has cheapest                                                 |
| Towel                  |                     |      | duh                                                                              |
| Aquairum pump          | [^1]->2             |      |                                                                                  |
Can also add an acidic material 
# Usage
	It can be used to flood irrigate the soil for creating fertility in the soil without antagonizing the plant seed. 

[^1]: I'd like to look more into this. It is essential that the waste at the site of the roots is processed back into a form that can be used for the environment. this can achieve a nutrient flow in the soil that can break down toxic chemicals thus allowing for a higher rate of metabolism in the plants simply due to the fact that ideal conditions for chemical reactions (without toxic byproduct buildup) is self-sustaining.

[2]: Circulate fungi and nutrients

---
# Update 06/26/2026
It is also possible to order EM-1 microbes, which includes Yeast, in the CFU counts. Inclusion of ash in apparently optional from experience.

Additionally, submerging in a water bath with an aquarium heater can rapidly accelerate the proliferation of microbes.