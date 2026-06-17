---
tags:
  - daily
month_start: "06"
month_day: "15"
year: "2026"
---
### Persistent tasks
```dataviewjs
var persistentTasks = dv.page("Persistent\ task\ list").file.tasks.filter(task => !task.section.toString().includes("Weekly") && task.completed == false)
for(var task of persistentTasks){
	dv.paragraph("- [ ] " + task.text)	
}
```

### Weekly goals!!
```dataviewjs
var persistentTasks = dv.page("Persistent\ task\ list").file.tasks.filter(task => !task.section.toString().includes("tasks"))
for(var task of persistentTasks){
	dv.paragraph("- [ ] " + task.text)	
}
```

---
# Vault statistics

#TODO finish the vault statistics portion of the daily notes or delete
Would be useful to include:
- total tags
- Most used tags (top 10?)
- Recently viewed and edited files (top 10?)
- Files with the most backlinks (top 10?)
This might be too much....

```dataviewjs
dv.span("placehold")
```