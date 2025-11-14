```dataviewjs
var PlantPages = dv.pages('"Plants"');
let TagCache = [];
for(let i = 0; i < PlantPages.length; i++){
	dv.header(3, PlantPages[i].file.link);
	TagCache = quickSortStrings(PlantPages[i].file.etags);
	let outputMessage = checkPropertyGaps(PlantPages[i], TagCache);
	dv.paragraph(TagCache.slice(1));
	dv.paragraph(outputMessage);
}

function checkPropertyGaps(plant, tags){
	let output = [];
	let properties = [[plant.genus, "Genus: {genus}".replace("{genus}", plant.genus)], [plant.edible, "Edible"], [plant.medicinal, "Has medicinal uses"], [plant.insect_attractor, "Attracts insects"], [plant.pest_repellant, "Repels/guards against pests"], [plant.nitrogen_fixer, "Fixes nitrogen in soil"], [plant.animal_habitation, "Key habitat for native species"], [plant.mulch_creator, "Creates mulch"], [plant.layer, "Plant layer: {layer}".replace("{layer}", plant.layer)]];
	for(let prop of properties){
		if(!prop[0]){
			continue;
		}
		else{
			output.push(prop[1] + " | ");
		}
	}
	return output.join();
}
//helper functions
function quickSortStrings(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Choose the middle element as pivot
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    
    // Arrays to hold elements less than, equal to, and greater than pivot
    const left = [];
    const equal = [];
    const right = [];
    
    // Partition the array
    for (let i = 0; i < arr.length; i++) {
        // Compare strings case-insensitively for natural alphabetical order
        const comparison = arr[i].localeCompare(pivot, undefined, { sensitivity: 'base' });
        
        if (comparison < 0) {
            left.push(arr[i]);
        } else if (comparison > 0) {
            right.push(arr[i]);
        } else {
            equal.push(arr[i]);
        }
    }
    
    // Recursively sort left and right partitions, then combine
    return [...quickSortStrings(left), ...equal, ...quickSortStrings(right)];
}

function partition(arr, left, right) {
    // Choose middle element as pivot
    const pivotIndex = Math.floor((left + right) / 2);
    const pivotValue = arr[pivotIndex];
    
    // Move pivot to end temporarily
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    
    let storeIndex = left;
    
    for (let i = left; i < right; i++) {
        if (arr[i].localeCompare(pivotValue, undefined, { sensitivity: 'base' }) <= 0) {
            [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
            storeIndex++;
        }
    }
    
    // Move pivot to its final position
    [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
    
    return storeIndex;
}

// Binary Search - Requires sorted array, O(log n) complexity
function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const comparison = sortedArr[mid].localeCompare(target, undefined, { sensitivity: 'base' });
        
        if (comparison === 0) {
            return mid; // Found
        } else if (comparison < 0) {
            left = mid + 1; // Search right half
        } else {
            right = mid - 1; // Search left half
        }
    }
    
    return -1; // Not found
}
```

Still need to work on: Amniosa, Luffa, Strawberry, Raspberry, Oregano, Licorice, Fig, Cayenne, 

Want to add: Tomato, Spinach, Lettuce, "Ground Cherries", and more plants from integrated forestry, Common Yarrow, Leadplant, White Wild Indigo, Black Currant, Chicory, Rugosa rose, Anise Hyssop, Daffodil, Black eyed susan, Purple Cone Flower