<%*
/*
# MetaEdit
Made by Christian B. B. Houmann
Discord: Chhrriissyy#6548
Twitter: [https://twitter.com/chrisbbh](https://twitter.com/chrisbbh)
Feel free to @ me if you have any questions.

Link to Gist: [Quick edit for YAML properties and Dataview inline fields · GitHub](https://gist.github.com/chhoumann/2a90b203a4faaa35971a83f9e7f29d99)
Use that to check for updates. :)

Also from dev: [NoteTweet: Post tweets directly from Obsidian.](https://github.com/chhoumann/notetweet_obsidian)

## Prerequisites
You will need [Templater: A template plugin for obsidian](https://github.com/SilentVoid13/Templater) for this to work.

## Features
- Update Yaml properties and Dataview fields
- Add new Yaml properties or Dataview fields
- Ignored properties that do not show up in the suggester
- Auto Props that have customizable, pre-defined values selectable through a suggester
- Multi-Value Mode that allows you to detect and vectorize/create arrays from your values

## Instructions
0. _Note the user settings below. You can customize the behavior of this template. _
1. Run the template script (run the template)
2. Choose whether you want to...
    1. Add new Yaml property
        1. Prompt: Insert a name
        2. Prompt: Insert a value
        3. Property is automatically appended to the top of your Yaml properties. If there are none, a Yaml header will be made.
    2. Add new Dataview field
        1. Prompt: Insert a name
        2. Prompt: Insert a value
        3. Select a line to insert the property _above_.
    3. Update an existing property/field (a list will show)
        1. Prompt: Change the existing value

## Changelog
- 2021-05-05 Fixed bug where you would be prompted to edit a variable even when you selected another option.
- 2021-05-04 Fixed bug that stopped the user from editing properties. Fixed bug with empty properties in MultiValue Mode.
- 2021-05-02 Bugfix: if there are YAML delimiters but no properties it still adds delimiters
- 2021-05-01 Part 3 - Added Progress Props. Automatically update task count, completed count, and incomplete count. Fixed bug where props and fields with intersecting names would be replaced by one of them. Fixed bug for YAML properties in MultiValue Mode where they 1. wouldn't vectorize and 2. wouldn't get updated.
- 2021-05-01 Part 2 - Smoother UX when adding and editing properties. When creating a new property with an autoprop name, you'll be prompted to select the autoprop value. When editing in multivalue, options have been reordered for convenience.
- 2021-05-01 User settings: Ignored properties, Auto Props, Multi-Value Mode. 
- 2021-04-29 Initial release. Bugfix. Add features to add new fields & properties.

*/

/*
## ==USER SETTINGS== */
// ==Ignored Properties==
// Insert properties you wish to ignore in this array. They should be encapsulated by quotes and separated by commas. This setting is case sensitive. Example:
// const ignoredProperties = ["Week", "Year"]
const ignoredProperties = ["Week", "Year"];

// ==Automation==
// Have a defined set of values for specific properties? Here you can set them. You'll be prompted to set the value to one of those when you try to edit a property with that name. This uses the JavaScript object format. Please enter property names as strings, and assign a string array to them. Properties should be separated by commas. Example:
const autoProps = {
    "Status":  ["To do", "In Progress", "Completed"],
}

// ==Progress Props==
// Working with tasks? Let's automate it.
// Currently, there is support for auto-filling some properties when you click select Update.
// Supported: Total task count, complete task count, and incomplete task count
// Enter the property names you want to update in the arrays below. If you want the amount of total tasks to be put in property "Total", put an entry for "Total" in the array.
const progressProps = {
    "totalTasks": ["Total"],
    "completedTasks": ["Complete"],
    "incompleteTasks": ["Incomplete"]
}

// ==Multi-Value Mode==
// This changes how you edit values. You will be prompted to either update the existing value or add a new value, which would change the property to an array/vector. This is on by default.
// Options: 0 = off. 1 = on. 2 = on for certain properties.
// If you choose 2, please enter which properties multi-value mode should be enabled for. This should be done as an array of strings, where the strings are the property names. Just like 'Ignored Properties'.
const mvMode = 1;
const mvProps = [""];

// ==============

function parseYaml() {
    const {position, ...rest} = tp.frontmatter;
    return rest;
}

function parseInlineFields() {
    let content = tp.file.content;
    return content.split("\n").reduce((obj, str) => {
        let parts = str.split("::");
        if (parts[0] && parts[1]) {
            obj[parts[0]] = parts[1].trim();
        }
        else if (str.includes("::")) {
            obj[str.replace("::",'')] = "";
        }
        return obj;
    },  {});
}

async function createNewProperty() {
    let propName = await tp.system.prompt("Enter a property name");
    if (!propName) return null;

    let propValue;
    if (autoProps[propName])
        propValue = await handleAutoProps(propName);
    else 
        propValue = await tp.system.prompt("Enter a property value");
    
    if (!propValue) return null;
    
    return {propName, propValue};
}

async function addYamlProp() {
    let file = this.app.workspace.getActiveFile();
    let content = tp.file.content;
    let isYamlEmpty = Object.keys(tp.frontmatter).length === 0 && !content.match(/^-{3}\s*\n*\r*-{3}/);
    
    let newProp = await createNewProperty();
    if (!newProp) return;
    
    let {propName, propValue} = newProp;
    
    try {
        if (mvMode == 1 || (mvMode == 2 && mvProps.includes(propName)))
            propValue = `[${propValue}]`;    
    } catch {}
    
    let newFileContent = content.split("\n");
    if (isYamlEmpty) {
        newFileContent.unshift("---");
        newFileContent.unshift(`${propName}: ${propValue}`);
        newFileContent.unshift("---");
    }
    else {
        newFileContent.splice(1, 0, `${propName}: ${propValue}`);
    }
    
    newFileContent = newFileContent.join("\n");
    await app.vault.modify(file, newFileContent);
}

async function addDataviewField() {
    let newProp = await createNewProperty();
    if (!newProp) return;
    
    const {propName, propValue} = newProp;
    
    let content = tp.file.content;
    let lines = content.split("\n").reduce((obj, line, idx) => {
        obj[idx] = !!line ? line : "";
        return obj; 
    }, {});
    
   let appendAfter = await tp.system.suggester(line => lines[line], Object.keys(lines));
   if (!appendAfter) return;
   
   let newFileContent = content.split("\n");
   newFileContent.splice(appendAfter, 0, `${propName}:: ${propValue}`);
   newFileContent = newFileContent.join("\n");
   
   let file = this.app.workspace.getActiveFile();
   await app.vault.modify(file, newFileContent);
}

async function editMetaElement(meta, choice) {
    try {
        if (mvMode > 0)
            await multiValueMode(meta, choice);
        else
            await standardMode(meta, choice);
    }
    catch {
        await standardMode(meta, choice);
        console.log("MetaEdit: Error with Multi-Value Mode. Check settings.")
    }
}

async function handleAutoProps(choice) {
    try {
        if (!autoProps[choice]) return false;
        
        const newValue = await tp.system.suggester(autoProps[choice], autoProps[choice]);
        
        if (!!newValue) return newValue;
    }
    catch{
        console.log("MetaEdit: Autoprops failed");
    }
    
    return null;
}

async function standardMode(meta, choice) {
    let newValue;
    
    if (!!autoProps[choice])
        newValue = await handleAutoProps(choice);
    else
        newValue = await tp.system.prompt("Enter a new value", meta[choice]);

    if (newValue) {
        await updateFile(choice, newValue);
    }
}

async function multiValueMode(meta, choice) {
    const choiceIsYaml = !!parseYaml()[choice];
    let newValue;
    
    try {
        if (mvMode == 2 && !mvProps.includes(choice)) {
            await standardMode(meta, choice);
            return false;
        }
        let options, selected, tempValue, splitValues;
        const metaString = meta[choice].toString();
        
        if (metaString !== null)
            metaString = metaString.toString();
        else
            metaString = "";
        
        if (choiceIsYaml) {
            splitValues = metaString.split().filter(c => !c.includes("[]")).join().split(",");
        } else {
            splitValues = metaString.split(",").map(prop => prop.trim());
        }
        
        if (splitValues.length == 0 || (splitValues.length == 1 && splitValues[0] == "")) {
            options = ["Add new value"];
            selected = await tp.system.suggester(options, ["cmd:addfirst"]);
        }
        else if (splitValues.length == 1) {
            options = [splitValues[0], "Add to end", "Add to beginning"];
            selected = await tp.system.suggester(options, [splitValues[0], "cmd:end", "cmd:beg"]);
        } else {
            options = ["Add to end", ...splitValues, "Add to beginning"];
            selected = await tp.system.suggester(options, ["cmd:end", ...splitValues, "cmd:beg"]);
        }
        
        if (!selected) return;
        let selectedIndex;

        if (autoProps[choice]) {
            tempValue = await handleAutoProps(choice);
        } else if (selected.includes("cmd")) {
            tempValue = await tp.system.prompt("Enter a new value");
        } else {
            selectedIndex = splitValues.findIndex(el => el == selected);
            tempValue = await tp.system.prompt(`Change ${selected} to`, selected);
        }
        
        if (!tempValue) return;
        switch(selected) {
            case "cmd:addfirst":
                newValue = `${tempValue}`;
                break;
            case "cmd:beg":
                newValue = `${[tempValue, ...splitValues].join(", ")}`;
                break;
            case "cmd:end":
                newValue = `${[...splitValues, tempValue].join(", ")}`;
                break;
            default: 
                if (selectedIndex)
                    splitValues[selectedIndex] = tempValue;
                else
                    splitValues = [tempValue];
                newValue = `${splitValues.join(", ")}`;
                break;
        }
        
        if (choiceIsYaml)
            newValue = `[${newValue}]`;
    }
    catch(e) {
        console.log("MetaEdit: Error with Multi-Value Mode. Check settings.");
        return false;
    }
    
    if (!!newValue) {
        await updateFile(choice, newValue);
        return true;
    }
    
    return false;
}

async function updateFile(choice, newValue) {
    const file = this.app.workspace.getActiveFile();
    const choiceIsYaml = !!parseYaml()[choice];
    let content = await this.app.vault.cachedRead(file);
    
    let newFileContent = content.split("\n").map(line => {
        const regexp = new RegExp(`^\s*${choice}:`);
        if (line.match(regexp)) {
            if (choiceIsYaml)
                line = `${choice}: ${newValue}`;
            else 
                line = `${choice}:: ${newValue}`;
        }

        return line;
    }).join("\n");

    await app.vault.modify(file, newFileContent);
}

async function updateMultipleInFile(props) {
    const file = this.app.workspace.getActiveFile();
    let content = await this.app.vault.cachedRead(file);
    
    let newFileContent = content.split("\n").map(line => {
        Object.keys(props).forEach(prop => {
            const regexp = new RegExp(`^\s*${prop}:`);
            if (line.match(regexp)) {
            if (!!parseYaml()[prop])
                line = `${prop}: ${props[prop]}`;
            else 
                line = `${prop}:: ${props[prop]}`;
            }
        })

        return line;
    }).join("\n");

    await app.vault.modify(file, newFileContent);
}

async function startMetaEdit() {
    let yaml = parseYaml();
    let inlineFields = parseInlineFields();
    let meta = {...yaml, ...inlineFields};
    
    meta = handleIgnoreProperties(meta);
    
    let choices = ["Update Progress Properties", "New YAML property", "New Dataview field", ...Object.keys(meta)];
    let choice = await tp.system.suggester(choices.map(x => x.trim()), choices);
    
    if (choice == "New YAML property") {
        await addYamlProp();
        return;
    }
    if (choice == "New Dataview field") {
        await addDataviewField();
        return;
    }
    if (choice == "Update Progress Properties") {
        await handleProgressProps(meta);
        return;
    }
    if (choice) {
        await editMetaElement(meta, choice);
        return;
    }
}

function handleIgnoreProperties(allProperties) {
    try {
        ignoredProperties.forEach(prop => {
            if (allProperties[prop])
                delete allProperties[prop];
        });
    }
    catch {
        console.log("MetaEdit: IgnoreProperties setting not found / is invalid.")
    }
    
    return allProperties;
}

async function handleProgressProps(meta) {
    if (!progressProps) return;
    const file = this.app.workspace.getActiveFile();
    const listItems = app.metadataCache.getFileCache(file).listItems;
    
    if (!listItems || listItems.length == 0) return;
    const tasks = listItems.filter(i => i.task);
    
    const totalTaskCount = tasks.length;
    if (!totalTaskCount) return;
    
    const completedTaskCount = tasks.filter(i => i.task != " ").length;
    const incompleteTaskCount = totalTaskCount - completedTaskCount;

    const props = {
        ...await progressPropHelper("totalTasks", meta, totalTaskCount),
        ...await progressPropHelper("completedTasks", meta, completedTaskCount),
        ...await progressPropHelper("incompleteTasks", meta, incompleteTaskCount)
    }
    
    await updateMultipleInFile(props);
}

const validStringArray = array => array && (array.length >= 1 && array[0] != "");

await startMetaEdit();
%>