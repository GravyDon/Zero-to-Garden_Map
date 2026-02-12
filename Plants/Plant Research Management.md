---
tags:
  - ActionNote
year: "2025"
month_start: "10"
month_day: "19"
month_end:
Specific_usage:
---
Engagement Meter
#IDEA Making an engagement meter that will indicate how many times one visits the note, last time the note was edited (shouldn't be abused), and the number of connections that the note has to other things

Good sources: 
- [Lady Bird Johnson Wildflower Center](https://www.wildflower.org/)
- [PFAF](https://pfaf.org)
- [Missouri Botanical Garden](https://www.missouribotanicalgarden.org)

Assumptions on research: 
- All sowing times are framed in zone 7b
##### Processed list of plants


### Unprocessed Plants
```dataviewjs
let testPage = dv.pages('"Plants"');
dv.span("Total plants: {total}".replace("{total}", testPage.length));
//dv.span(testPage[1].file);
for(let i = 0; i < testPage.length-1; i++){
	for(let p of [[testPage[i].file.name],[testPage[i].file.lists.text]]){
	//p.map((x,y) => [x,y])
		dv.span(p[0]) //When the plant lists are sorted, these will all be the same. Indications of unfinished files can be found through here or files that are not with the new paradigm (which can be checked through the usage of the)
	}
}

//var tempArr = quantifier_func(testPage[0].file)
function quantifier_func(plant){
	//Assembling front matter and keying it to the lists in the file
}
```
___

# Integrated Plants

___

