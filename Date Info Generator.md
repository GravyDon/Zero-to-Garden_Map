---
tags:
  - "#hasCalEvent"
---


```dataviewjs
var pages = dv.pages("#hasCalEvent");
//dv.span(pages.file);
```
```dataviewjs
var pages = dv.pages("#hasCalEvent");
/*
var buffer = await .ArrayBuffer();
var fileInfo = new DataView(buffer);
for (let i = 0; i < 127; i++){
	dv.span(i + ": " + fileInfo.getUint8(i));
}
*/ //Still working out kinks on modifying datafields to not have duplicate events
//const regex = /(?<=")[a-zA-z ]+(?=")|([a-zA-Z_]+)(?= = )|[1-9]/g
var output = []
for(let page of pages){
	let eventTasks = page.file.lists
	.where(x => x.task == true && x.checked == false);
	let eventTasksCheck = eventTasks.checked;
	eventTasksCheck.mutate(x => x = true);
	
	output.push(eventTasks.text);
}
const fs = require('fs').promises;
var filename = 'iCal.json';
let jsonString = JSON.stringify(output[0][0], null, 2);
fs.writeFile(filename, jsonString);

for(let i = 1; i < output[0].length; i++){
	jsonString = JSON.stringify(output[0][i], null, 2);
	fs.appendFile(filename, jsonString);
}
dv.span('Written ${output[0].length} date events to file!'); //Need to use different form of string formatting; refer to personal vault

//Progress: Currently does write to file with the relevant information. Need to use this file to generate events queue for processing into actual events within the ICal. The events queue is for the purpose of using the paramenters to determine the relative dates dependent upon the priority variable
```

Vibe Code: 
#### Unprocessed Calendar Events
- [x] "I need to meet with X" Priority = 1, Duration_d = 1, Duration_h = 2
- [ ] "I need to do Y" Priority = 3, Duration_d = 2, Duration_h = 10
- [ ] "I need to go to Z" Priority = 0, Duration_d = 1, Duration_h = 5

#### Processed Calendar Events
{Archiving purposes; algorithmically write the events here}

Equation for allocating time to events:

## Progress
- Figured out algorithm for ordering events
- Created parameters for posting events
- Installed and initialized workspace

Still need to actually do the writing part of the code for:
- finding the entries that are relevant to calendar events
- Processing calendar events into txt or json file
- Reading json file to generate the events queue
	- Doing algorithm to balance definite events and indefinite events/tasks
- Integrating calendar event creation into obsidian workflow
- 