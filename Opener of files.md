#TODO #CORE/secondary/obsidian 

```dataviewjs
let jah = dv.pages("#notDone");
for(let page of jah){
	dv.paragraph("{glu}".replace("{glu}", page.file.link));
}
```
[[03unfinished]]


Would be really interesting to see the possibility of storing entire trees of information in a link that could then open all of those files simultaneously. I think this can be done using customizable obsidian links to then execute some javscript, but I am not good at that shit mang. I need to figure out how to integrate it with the usage of my browser but maybe that's just a bad coding environment :< 

==Dang, wish I could just like see all the code that's going on man. That sounds like such a hard system to configure and manage x)==

Can also use workspaces feature...