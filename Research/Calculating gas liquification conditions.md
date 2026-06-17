---
tags:
  - ActionNote
year: "2026"
month_start: "06"
month_day: "11"
month_end:
Specific_usage: Liquify methane for usage as a portable fuel source
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


$$
PV=nRT
$$
Ideal gas law (won't work for accurately predicting the regime where gas transitions into a liquid via pressure and temperature induced liquification)

$$
P=\frac{RT}{v-b} - \frac{a}{v^2}
$$
v = V/N or molar volume (n = N) and a & b are experimentally determined for each substance


### Objective
Create a program to determine two things: 

1. A pressure and molar concentration that will work for a given temperature. The pressure at liquification will be calculated to ascertain the optimal temperature and molar number to reach
2. dP for dn and dT to maintain isobaric conditions and potential for failure

| Substance | a (bar L^2/mol^2) | b (L/mol) | heat of liquification (kJ/mol) |
| --------- | ----------------- | --------- | ------------------------------ |
| Methane   | 2.300             | 0.04301   | -8.19                          |
| Hydrogen  | 0.2453            | 0.02651   |                                |
### Pondering on the physics of the cooling process.
One thing which puzzles me is what happens when a liquid is formed at a temperature that is outside of the transition temperature at nominal pressure? Does the heat of liquification change OR is the liquid spontaneously cooled to the temperature at which it is subject to a phase transition at nominal pressure? If the latter is true, cooling will happen spontaneously and cause a chain reaction in condensation, but this will produce a lot of heat in the system in accordance with the lost kinetic energy of the methane molecules, which could be re-transferred to other liquid molecules causing re-vaporization (strange outcome). the former makes more sense as the heat of liquifaction will decrease with increasing pressure ??


### Physical system specifications
The final volume of liquid should be able to fill a propane tank from one of the listed options: 
![](https://i.gyazo.com/3fd28b02fa91c1b57d719b38143d3327.png)

