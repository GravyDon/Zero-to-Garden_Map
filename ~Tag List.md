---
tags:
  - CORE/secondary
---
#### Primary tags
	tags which represent primary properties of notes about their creation, activities asociated, and sub-notes tags that have extra properties that are not bound to a specific note.
	
#CORE : documents that are central to understanding usage of the vault
	#CORE/secondary : ... but of secondary importance (collection of tags, generated link directory, etc.)
	#CORE/secondary/obsidian : files that are created for obsidian organizational purposes
#IDEA : sub-note tag; an idea that organically arises; marked for later review
#TODO: sub-note tag; something TO DO! Make sure that these are seen to in a timely manner ...
#notes: notes on something. To be reviewed and processed at a later date or used.
	#notes/book : notes on a book.
#bookRecs: books to check out
#bookRefs : references to a book; inline references

#editor : *Hai! It's me! I'm talking to you or at least trying to explain what's happening in the repository as it keeps being built out. These are just roadbumps that need some more work on.* 

#editorNote : Note that is made to explain larger dynamics of the vault and its usage

#daily : daily notes; current use case is for keeping track of weekly and overall progress and  making persistent TODO lists.

##### Action note tags:
#ActionNote: Notes that relate to concrete actions. Includes planning, materials, and notes on execution.
#notDone: this action has not be taken or completed; effectively an untested plan.
#done: an action that has been taken and completed to a satisfactory extent. Indicates a note that has commentary and insight on how to perform the action from a retrospective.
#### Secondary Tags
	These tags are topic specific yet can be found in any particular note type

#irrigration : information on irrigation techniques, equipment, considerations, and contraptions
	Techniques: 
	#irrigration/Drip 
	#irrigration/Sprinkler
	#irrigration/Furrows
	#Irrigation/Swale

---
## Plant specific tags

#### Plant note
	Plant notes describe a plant with a list of relevant properties and any experiences or advice collected on how they grow, growing season conditions and maintainence, ecological applications, synergies, and preparation for human usage (if applicable)

#Plant: Plant note
#init_complete: The note is complete enough for usage in synchronizing plantings for Spring of 2026

##### Generated tags
	Generated via a dataview table entry for later usage in programmatcally create plant guild associations
	
___

#### Environmental Requirements
1. #sun :  sun requirements, such as ...
	#sun/partial_shade : 3 - 4 hours of sun a day
	#sun/full_shade : 1 - 2 hours of sun a day
	#sun/full_sun : 6 or more hours of sun per day 
	#sun/darkness
	
2. #soil : soil requirements, such as...
... Type: 
	#soil/Aquic : wet soil; less dissolved oxygen (marshes, swamps, bogs, lakebeds, and ephemeral ponds) **Significant portions of US owned aquic soils are around coasts and large bodies of water**
	#soil/Udic : found in high-humidity biomes. Plant diversity and interactions with microorganisms in the soil create a large sub-surface soil structure with high soil and above ground biodiversity with high biomass. **Tennessee has Udic soils!! Most commonly found in the Eastern United States**
	#soil/Ustic : located in semi-arid grasslands, where seasonal rains cause bursts of plant growth. In areas such as these, the available moisture for growth is limited to a small window of time in the growing season. **Midwestern United States has most Ustic soil in the greater US**
	#soil/Xeric : soil is dry in winter and summer for a large portion of the growing season (>=45 days). Typical of Mediterranean-type climates where winters are dry and cool and summer are dry and warm **(SoCal is an example)**
	#soil/Aridic : soil with granular texture resulting from a lack of biomass to support soil fixing by plants. Due to extreme temperatures and lack of rainfall (deserts) **American Southwest**
... Texture:
![](https://i.redd.it/ddx342nbiqc61.jpg)
	Ratio is formatted as sand : clay : silt
	#soil/loam (Loam section: 
	#soil/chalky
	#soil/sandy
	#soil/highClay
... Moisture:
	#soil/flood_conditions
	#soil/moistSoil : water every day
	#soil/semi_drySoil: water every other day OR throughout the week
	#soil/drySoil : water occasionally
	#soil/drought_conditions
3. #climate 
#hardy_1, #hardy_2, #hardy_3, #hardy_4 : Winter Hardiness levels
- level 1 = can withstand temperatures down to 50 F (10 C)
- level 2 = can withstand temperatures down to 32 F (0 C)
- level 3 = can withstand temperatues down to 23 F (-5 C)
- level 4 = can withstand temperatures down to 5 F (-15C)
---
#### Plant diseases and dangers
#plantDisease | #plantDiseasePrevention | #plantDiseaseCure: A mold, bacteria, viral, or other affliction to a plant + the cure and prevention efforts.
	#Blight | #plantDiseasePrevention/Blight | #plantDiseaseCure/Blight 

---
#### Plant allies and enemies
#allies : species which assist in plant life cycle or protect against predation and diseases
	#allies/insects/hoverflies: Mimics of stinging wasps but don't actually sting. Some species predate aphids and other pests as larvae while others feed on decaying matter and serve as detrivores.  

___
#### Plant parts
#roots : characterization of root properties
	#roots/edible 
	#roots/tap: has a tap root 
	#roots/fibrous: fibrous roots radiating down and out from root crown
	#roots/bulb: formation of bulb with dense, small roots
	#roots/tuberous: formation of tubers
	#roots/DeepFibrous: fibrous roots that are unusually deep in the soil
	#roots/rhizomatous: formation of rhizome which is shallow but propagates over topsoil quickly
	#roots/stoloniferous: similar to rhizome but lies on top of the surface; majority of root body is for the purpose of propagation rather than nutrient absorption
	#roots/shallow : roots are relatively shallow existing only in the topsoil or barely in the subsoil.
	
---
#### Plant uses

#plantrole: characterization based on root properties
	#plantrole/nitrogenFixer: Stabalizes soil nitrogen reserves
	#plantrole/nursery: acts in symbiotic or altruistic cooperation to another plant (needs to be explicitly linked to the note that pertains to it )
	#plantrole/pestAntagonist: Antagonizes the presence pests either through physical means or by the attraction of a predator species
	#plantrole/pollinatorAttractor: Attracts good pollinators for producing fruits
	#plantrole/DroughtResistant: Resistant to droughts
	#plantrole/DynamicAccumulator: Green Manure and mineral supplementation purposes
	#plantrole/soilMending: restores the soil from ecological destruction (too much nitrogen/other mineral salts; pioneer plants for poor soil quality)
	#plantrole/MulchAccumlator: Mulch creation for the season (provides long term nutrient stability throughout the season)
	#plantrole/biocharFeedstock: potential as biochar feedstock; based on biomass potential and usage in current biochar operations.
	#plantrole/Food: Duh
	#plantrole/medicine: Can be split into categories based on effect
		 #plantrole/medicine/Alterative:  Producing a healthful change in the body without perception [^1] (long term; nutritive?)
		 #plantrole/medicine/adaptogen : 
		 #plantrole/medicine/Anodyne: Relieves pain [^1]
		 #plantrole/medicine/Anthelmintic: a medicine that expels worms [^1]
		 #plantrole/medicine/Antibiotic : assists the body in warding off bacterial infections
		 #plantrole/medicine/Aromatic: a stimulant; spicy [^1]
		 #plantrole/medicine/Astringent: Causes contraction and arrests discharge [^1]
		 #plantrole/medicine/Antibilious: Acts on the bile, relieving biliousness (?) [^1]
		 #plantrole/medicine/Antiemetic : Stops vomiting[^1]
		 #plantrole/medicine/Antihalitosis: relieves bad breath
		 #plantrole/medicine/Antileptic : Relieves fits[^1]
		 #plantrole/medicine/Antiperiodic : Prevents the recycling of diseases pushing the patient towards convalescence [^1]
		 #plantrole/medicine/Anthilic : Prevents the formation of kidney stones[^1]
		 #plantrole/medicine/Anti-inflammatory: Reduces inflammation.
		 #plantrole/medicine/Antirheumatic : Relieves or cures rheumatism[^1]
		 #plantrole/medicine/Antiscorbutic : Cures or prevents scurvy[^1]
		 #plantrole/medicine/Antiseptic : A medicine that aims to stop putrification[^1]
		 #plantrole/medicine/Antispasmodic : Relieves or prevents spasms[^1]
		 #plantrole/medicine/Antisyphilitic : Having affect or curing venereal diseases[^1]
		  #plantrole/medicine/Aperient : A soft laxative that helps with maintaining nominal function of the digestive system
		  #plantrole/medicine/Aphrodisiac : Makes you horny
		 #plantrole/medicine/Carminative : Makes you fart good :) 
		 #plantrole/medicine/Cephalic : Remedies used in diseases of the head [(usually congenital)](https://www.hopkinsmedicine.org/health/conditions-and-diseases/cephalic-disorders)[^1]
		 #plantrole/medicine/Cholagogue : Increases the flow of bile[^1]
		 #plantrole/medicine/Demulcent : Soothing relieves inflammation[^1]
		 #plantrole/medicine/Deobstruent : Removes obstruction (general); can describe all interfaces like pores, arteries, digestive tract, and respiratory tract  [^1]
		 #plantrole/medicine/Depurative : Purifies the blood[^1]
		 #plantrole/medicine/Detergent : Cleansing to boils, ulcers, and wounds[^1]
		 #plantrole/medicine/Diaphoretic : Induces sweating[^1]
		 #plantrole/medicine/Discutient : Dissolves and heals tumors (!?), morbid matter, or coagulated blood, and inflammatory effusions[^1]
		 #plantrole/medicine/Diuretic : Increase the secretion and flow of urine[^1]
		 #plantrole/medicine/Emetic : Induces vomiting[^1]
		 #plantrole/medicine/Emmenagogue : Promotes menstruation[^1]
		 #plantrole/medicine/Emollient : Softens and soothes inflamed parts[^1]
		 #plantrole/medicine/Exanthematous : Remedy for skin eruptions and disease; Softening effect on areas applied[^1]
		 #plantrole/medicine/Expectorant : Facilitates expectoration[^1]
		 #plantrole/medicine/Febrifuge : Abates and reduces fevers[^1]
		 #plantrole/medicine/Galactagogue : Promotes milk production 
		 #plantrole/medicine/Hepatic : A remedy for the diseases and deficiencies of the liver[^1]
		 #plantrole/medicine/Herpatic : A remedy for skins diseases of all types[^1]
		 #plantrole/medicine/Laxative : Promotes bowel action[^1]
		 #plantrole/medicine/Lithontryptic : Dissolves kidney stones in the urinary organs[^1]
		 #plantrole/medicine/Maturating : Ripens or brings boils to a head[^1]
		 #plantrole/medicine/Mucilage: Promotes mucosal production typically to restore mucosal membranes[^1] OR contains mucilaginous compounds which directly reconstitute mucous reserves. The latter property can also provide relief from irritation.
		 #plantrole/medicine/Mucilaginous: Thins mucous for excretion[^1]
		 #plantrole/medicine/Nervine : Arrests nervous irritation/over-stimulation[^1]
		 #plantrole/medicine/Opthalmicum : A remedy for diseases of the eye[^1]
		 #plantrole/medicine/Parturient : Induces child labor[^1]
		 #plantrole/medicine/Pectoral : A remedy for chest infections[^1]
		 #plantrole/medicine/Phytoestrogen : Simulates the effects of estrogen in the body to a limited degree; does not bind to all receptors not with the same pharmacodynamics.
		 #plantrole/medicine/Refrigerant : Cooling effect[^1]
		 #plantrole/medicine/Resolvent : Dissolves boils and tumors[^1]
		 #plantrole/medicine/Rubifacient : Increase circulation and produces red skin[^1]
		 #plantrole/medicine/Sedative : A nerve tonic; promotes sleep[^1]
		 #plantrole/medicine/Sialogogue : Increases the secretion of saliva[^1]
		 #plantrole/medicine/Stomachic : Strengthens the stomach. Relieves indigestion[^1]
		 #plantrole/medicine/Styptic : Stops bleeding[^1]
		 #plantrole/medicine/Tonic : A remedy which is invigorating and strengthening to one or more organs[^1]
		 #plantrole/medicine/Vermifuge : Expels worms/parasites from the affected organ(s)[^1]
	#plantrole/earlyBloomer & #plantrole/lateBloomer: Dynamic bloom timing is key to making a consistently fed population of insects and people (so our diets change with the season as a consequence)
	#plantrole/crafting
		#plantrole/crafting/alcohol : plant is useful in the fermentation process to create alcohols
	#plantrole/rareMaterials

[^1]: Taken (partially or entierly) from Indian Herbalogy Pgs xxxvii - xxxviii
---
#### Plant Classifications

#family [^3]
	#family/lamiaceae : mint family; characterized by aromatic properties, square stems, and opposite leaves.
	#family/brassicas : cabbage family; 
	#family/Aristolochiaceae : Birthwort family
	#family/Asteraceae : Daisy family
	#family/Apiaceae : Umbelliferae family (containing parsley, carrot, and celery) ; This family is particularly fragrant allowing for many of the plants in this family to act as pest repellants
	#family/Solanacea : Nightshade family
	
#genus [^2]
	 #genus/allium : onion, garlic, leeks... Practically every member of this genus is aromatic and edible
	 #genus/phyllostachys: bamboo
	 #genus/symphytum : 
	 
#species[^2]
	#proliferum : increasing by the production of side shoots (from Latin for Gardeners)
	
#technique : these are entries that describe plant techniques that can be used to augment the life cycle of a plant, cultivate plants more effectively, harness nutrients from biomass, and/or any techniques interceding in the growing season from waste processing, waste management, germination, soil amending/testing, irrigation, plant utilization, plant cultivation, plant harvesting, and winter preparations. Due to the broadness of the tag, no specific examples are provided in this file.
	#composting 
	
[^2]: Coming from the Latin for Gardeners Book
[^3]: Partially Latin for Gardeners and partially wikipedia**

---
### Plant phenomenology
#Photoperiodism : The tendency for certain plants to changer their behavior depending on the length of a continuous period of light, which draws natural comparison to the length of the day changing with the seasons
#Phototropism : Movement of plants dependent upon the direction of a light source to maximize the incident lux of light onto the plant

---
## Project tags

#budgeting : a spot of financial planning.

#fuel: Pay dirt
	#hydrogenPeroxide
	#methane
	#acetylene 
	#compostPiles [[compostPiles]]
#fertilizer: dirt pay


---
### Action notes
	Action notes are outlines or documentation of ongoing initiatives related to the gardening project

	

