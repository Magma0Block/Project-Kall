const mekanism_ores_regular = [
    'mekanism:tin_ore',
    'mekanism:osmium_ore',
    'mekanism:uranium_ore',
    'mekanism:fluorite_ore',
    'mekanism:lead_ore'
]
const mekanism_ores_deepslate = [
    'mekanism:deepslate_tin_ore',
    'mekanism:deepslate_osmium_ore',
    'mekanism:deepslate_uranium_ore',
    'mekanism:deepslate_fluorite_ore',
    'mekanism:deepslate_lead_ore'
]

for (const item of mekanism_ores_regular) {
    AStages.addRestrictionForOre("kall/ore/meka", "meka", item, "minecraft:stone")
}
for (const item of mekanism_ores_deepslate) {
    AStages.addRestrictionForOre("kall/ore/meka", "meka", item, "minecraft:deepslate")
}

AStages.addRestrictionForOre("kall/ore/oritech", "ori", 'oritech:nickel_ore', "minecraft:stone")
AStages.addRestrictionForOre("kall/ore/oritech", "ori", 'oritech:deepslate_nickel_ore', "minecraft:deepslate")
AStages.addRestrictionForOre("kall/ore/oritech", "ori", 'oritech:endstone_platinum_ore', "minecraft:endstone")
AStages.addRestrictionForOre("kall/ore/oritech", "ori", 'oritech:deepslate_platinum_ore', "minecraft:deepslate")
AStages.addRestrictionForOre("kall/ore/oritech", "ori", 'oritech:deepslate_uranium_ore', "minecraft:deepslate")
AStages.addRestrictionForOre("kall/ore/oritech", "ori", 'oritech:uranium_crystal', "minecraft:deepslate")
