---
tags:
  - "#CORE/secondary/obsidian"
---


\#editor this file is for the sake of making sure that tags are being used properly. If a file is missing a tag, this document will point out which file that is. DO NOT keep this open in the background of your vault as it will likely lag your session. ONLY USE THIS FILE WHEN YOU ARE RUNNING ORGANIZATIONAL DIAGNOSTICS!! If you need to pause output, simply update the refresh rate of the file.

# Diagnosing tagList comprehensiveness and uniqueness...

```dataviewjs
var tagList = dv.page("~Tag\ List").file.tags //temp  
//tagList = tagList.map(x =\> \[x, 1\]) //tags in tagList file + distinguishing bool  
let Alltags_raw = dv.pages('').file.tags //temp  
var Alltags = [...new Set(Alltags_raw)] //used in joined array   
var joined = [] //1D array of Alltags and tagList for determining comprehensiveness  
var tagCounts = {} //Dictionary used for counting the number of tags in the vault for uniqueness determination  
  
for(let ele of Alltags_raw){  
    tagCounts[ele] = (tagCounts[ele] || 0) + 1  
}  
  
//initializing joined array  
tagList.map(x => joined.push(x))  
Alltags.map(x => joined.push(x))  
joined = joined.sort()  
//determing comprehensiveness  

let index = 0  
let compTest = []   
let uniquenessTestTemp = []
while(index < joined.length-1){  
let test = joined[index] == joined[index+1]
if(test){  
	uniquenessTestTemp.push(joined[index])
    index = index + 2  
    continue  
}  
else{  
	compTest.push(joined[index]) 
    index = index + 1  
    continue  
}  
}  


//Uniqueness test
let uniquenessTest = []
for(let ele of uniquenessTestTemp){
	if(tagCounts[ele] == 1){
		uniquenessTest.push(ele)
	}
}

//OUTPUT

dv.paragraph("Tags that are not in the master tag list #TODO fix these tags or add exclusions!!")
dv.span(compTest)  //WORKS!!!

dv.paragraph("Tags that are unimplemented, but in the master tag list #TODO use these tags at some point or get rid of them!!")
dv.span(uniquenessTest) // YESSSSS OH MY GOD THIS TOOK ME LONGER THAN YOU WOULD IMAGINE!
```





