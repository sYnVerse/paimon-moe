export const itemList = {
  unknown: { id: 'unknown', name: 'unknown' },
  none: { id: 'none', name: 'none' },
  mystic_enhancement_ore: { id: 'mystic_enhancement_ore', name: 'Mystic Enhancement Ore' },
  fine_enhancement_ore: { id: 'fine_enhancement_ore', name: 'Fine Enhancement Ore' },
  enhancement_ore: { id: 'enhancement_ore', name: 'Enhancement Ore' },
  any_weapon_1: { id: 'any_weapon_1', name: '1 Star Weapon' },
  any_weapon_2: { id: 'any_weapon_2', name: '2 Star Weapon' },
  any_weapon_3: { id: 'any_weapon_3', name: '3 Star Weapon' },
  mora: { id: 'mora', name: 'Mora' },
  heros_wit: { id: 'heros_wit', name: "Hero's Wit" },
  adventurers_experience: { id: 'adventurers_experience', name: "Adventurer's Experience" },
  wanderes_advice: { id: 'wanderes_advice', name: "Wanderer's Advice" },
  crown_of_insight: { id: 'crown_of_insight', name: 'Crown of Insight' },

  fetters_of_the_dandelion_gladiator: {
    id: 'fetters_of_the_dandelion_gladiator',
    name: 'Fetters of the Dandelion Gladiator',
    day: ['wednesday', 'saturday'],
    rarity: 1,
  },
  chaos_device: { id: 'chaos_device', name: 'Chaos Device' },
  divining_scroll: { id: 'divining_scroll', name: 'Divining Scroll' },
  chains_of_the_dandelion_gladiator: {
    id: 'chains_of_the_dandelion_gladiator',
    name: 'Chains of the Dandelion Gladiator',
    day: ['wednesday', 'saturday'],
    rarity: 2,
    parent: 'fetters_of_the_dandelion_gladiator',
  },
  chaos_circuit: { id: 'chaos_circuit', name: 'Chaos Circuit' },
  sealed_scroll: { id: 'sealed_scroll', name: 'Sealed Scroll' },
  shackles_of_the_dandelion_gladiator: {
    id: 'shackles_of_the_dandelion_gladiator',
    name: 'Shackles of the Dandelion Gladiator',
    day: ['wednesday', 'saturday'],
    rarity: 3,
    parent: 'fetters_of_the_dandelion_gladiator',
  },
  chaos_core: { id: 'chaos_core', name: 'Chaos Core' },
  forbidden_curse_scroll: {
    id: 'forbidden_curse_scroll',
    name: 'Forbidden Curse Scroll',
  },
  dream_of_the_dandelion_gladiator: {
    id: 'dream_of_the_dandelion_gladiator',
    name: 'Dream of the Dandelion Gladiator',
    day: ['wednesday', 'saturday'],
    rarity: 4,
    parent: 'fetters_of_the_dandelion_gladiator',
  },
  tile_of_decarabians_tower: {
    id: 'tile_of_decarabians_tower',
    name: "Tile of Decarabian's Tower",
    day: ['monday', 'thursday'],
    rarity: 1,
  },
  heavy_horn: { id: 'heavy_horn', name: 'Heavy Horn' },
  firm_arrowhead: { id: 'firm_arrowhead', name: 'Firm Arrowhead' },
  debris_of_decarabians_city: {
    id: 'debris_of_decarabians_city',
    name: "Debris of Decarabian's City",
    day: ['monday', 'thursday'],
    rarity: 2,
    parent: 'tile_of_decarabians_tower',
  },
  black_bronze_horn: {
    id: 'black_bronze_horn',
    name: 'Black Bronze Horn',
  },
  sharp_arrowhead: { id: 'sharp_arrowhead', name: 'Sharp Arrowhead' },
  fragment_of_decarabians_epic: {
    id: 'fragment_of_decarabians_epic',
    name: "Fragment of Decarabian's Epic",
    day: ['monday', 'thursday'],
    rarity: 3,
    parent: 'tile_of_decarabians_tower',
  },
  black_crystal_horn: {
    id: 'black_crystal_horn',
    name: 'Black Crystal Horn',
  },
  weathered_arrowhead: {
    id: 'weathered_arrowhead',
    name: 'Weathered Arrowhead',
  },
  scattered_piece_of_decarabians_dream: {
    id: 'scattered_piece_of_decarabians_dream',
    name: "Scattered Piece of Decarabian's Dream",
    day: ['monday', 'thursday'],
    rarity: 4,
    parent: 'tile_of_decarabians_tower',
  },
  slime_condensate: { id: 'slime_condensate', name: 'Slime Condensate' },
  slime_secretions: { id: 'slime_secretions', name: 'Slime Secretions' },
  slime_concentrate: {
    id: 'slime_concentrate',
    name: 'Slime Concentrate',
  },
  boreal_wolfs_milk_tooth: {
    id: 'boreal_wolfs_milk_tooth',
    name: "Boreal Wolf's Milk Tooth",
    day: ['tuesday', 'friday'],
    rarity: 1,
  },
  dead_ley_line_branch: {
    id: 'dead_ley_line_branch',
    name: 'Dead Ley Line Branch',
  },
  boreal_wolfs_cracked_tooth: {
    id: 'boreal_wolfs_cracked_tooth',
    name: "Boreal Wolf's Cracked Tooth",
    day: ['tuesday', 'friday'],
    rarity: 2,
    parent: 'boreal_wolfs_milk_tooth',
  },
  dead_ley_line_leaves: {
    id: 'dead_ley_line_leaves',
    name: 'Dead Ley Line Leaves',
  },
  boreal_wolfs_broken_fang: {
    id: 'boreal_wolfs_broken_fang',
    name: "Boreal Wolf's Broken Fang",
    day: ['tuesday', 'friday'],
    rarity: 3,
    parent: 'boreal_wolfs_milk_tooth',
  },
  ley_line_sprouts: { id: 'ley_line_sprouts', name: 'Ley Line Sprouts' },
  boreal_wolfs_nostalgia: {
    id: 'boreal_wolfs_nostalgia',
    name: "Boreal Wolf's Nostalgia",
    day: ['tuesday', 'friday'],
    rarity: 4,
    parent: 'boreal_wolfs_milk_tooth',
  },
  grain_of_aerosiderite: {
    id: 'grain_of_aerosiderite',
    name: 'Grain of Aerosiderite',
    day: ['wednesday', 'saturday'],
    rarity: 1,
  },
  fragile_bone_shard: {
    id: 'fragile_bone_shard',
    name: 'Fragile Bone Shard',
  },
  damaged_mask: { id: 'damaged_mask', name: 'Damaged Mask' },
  piece_of_aerosiderite: {
    id: 'piece_of_aerosiderite',
    name: 'Piece of Aerosiderite',
    day: ['wednesday', 'saturday'],
    rarity: 2,
    parent: 'grain_of_aerosiderite',
  },
  sturdy_bone_shard: {
    id: 'sturdy_bone_shard',
    name: 'Sturdy Bone Shard',
  },
  stained_mask: { id: 'stained_mask', name: 'Stained Mask' },
  bit_of_aerosiderite: {
    id: 'bit_of_aerosiderite',
    name: 'Bit of Aerosiderite',
    day: ['wednesday', 'saturday'],
    rarity: 3,
    parent: 'grain_of_aerosiderite',
  },
  fossilized_bone_shard: {
    id: 'fossilized_bone_shard',
    name: 'Fossilized Bone Shard',
  },
  ominous_mask: { id: 'ominous_mask', name: 'Ominous Mask' },
  chunk_of_aerosiderite: {
    id: 'chunk_of_aerosiderite',
    name: 'Chunk of Aerosiderite',
    day: ['wednesday', 'saturday'],
    rarity: 4,
    parent: 'grain_of_aerosiderite',
  },
  mist_veiled_lead_elixir: {
    id: 'mist_veiled_lead_elixir',
    name: 'Mist Veiled Lead Elixir',
    day: ['tuesday', 'friday'],
    rarity: 1,
  },
  mist_grass_pollen: {
    id: 'mist_grass_pollen',
    name: 'Mist Grass Pollen',
  },
  treasure_hoarder_insignia: {
    id: 'treasure_hoarder_insignia',
    name: 'Treasure Hoarder Insignia',
  },
  mist_veiled_mercury_elixir: {
    id: 'mist_veiled_mercury_elixir',
    name: 'Mist Veiled Mercury Elixir',
    day: ['tuesday', 'friday'],
    rarity: 2,
    parent: 'mist_veiled_lead_elixir',
  },
  mist_grass: { id: 'mist_grass', name: 'Mist Grass' },
  silver_raven_insignia: {
    id: 'silver_raven_insignia',
    name: 'Silver Raven Insignia',
  },
  mist_veiled_gold_elixir: {
    id: 'mist_veiled_gold_elixir',
    name: 'Mist Veiled Gold Elixir',
    day: ['tuesday', 'friday'],
    rarity: 3,
    parent: 'mist_veiled_lead_elixir',
  },
  mist_grass_wick: { id: 'mist_grass_wick', name: 'Mist Grass Wick' },
  golden_raven_insignia: {
    id: 'golden_raven_insignia',
    name: 'Golden Raven Insignia',
  },
  mist_veiled_primo_elixir: {
    id: 'mist_veiled_primo_elixir',
    name: 'Mist Veiled Primo Elixir',
    day: ['tuesday', 'friday'],
    rarity: 4,
    parent: 'mist_veiled_lead_elixir',
  },
  luminous_sands_from_guyun: {
    id: 'luminous_sands_from_guyun',
    name: 'Luminous Sands from Guyun',
    day: ['monday', 'thursday'],
    rarity: 1,
  },
  hunters_sacrificial_knife: {
    id: 'hunters_sacrificial_knife',
    name: "Hunter's Sacrificial Knife",
  },
  recruits_insignia: {
    id: 'recruits_insignia',
    name: "Recruit's Insignia",
  },
  lustrous_stone_from_guyun: {
    id: 'lustrous_stone_from_guyun',
    name: 'Lustrous Stone from Guyun',
    day: ['monday', 'thursday'],
    rarity: 2,
    parent: 'luminous_sands_from_guyun',
  },
  agents_sacrificial_knife: {
    id: 'agents_sacrificial_knife',
    name: "Agent's Sacrificial Knife",
  },
  sergeants_insignia: {
    id: 'sergeants_insignia',
    name: "Sergeant's Insignia",
  },
  relic_from_guyun: {
    id: 'relic_from_guyun',
    name: 'Relic from Guyun',
    day: ['monday', 'thursday'],
    rarity: 3,
    parent: 'luminous_sands_from_guyun',
  },
  inspectors_sacrificial_knife: {
    id: 'inspectors_sacrificial_knife',
    name: "Inspector's Sacrificial Knife",
  },
  lieutenants_insignia: {
    id: 'lieutenants_insignia',
    name: "Lieutenant's Insignia",
  },
  divine_body_from_guyun: {
    id: 'divine_body_from_guyun',
    name: 'Divine Body from Guyun',
    day: ['monday', 'thursday'],
    rarity: 4,
    parent: 'luminous_sands_from_guyun',
  },
  whopperflower_nectar: {
    id: 'whopperflower_nectar',
    name: 'Whopperflower Nectar',
  },
  shimmering_nectar: {
    id: 'shimmering_nectar',
    name: 'Shimmering Nectar',
  },
  energy_nectar: { id: 'energy_nectar', name: 'Energy Nectar' },
  prithiva_topaz_sliver: {
    id: 'prithiva_topaz_sliver',
    name: 'Prithiva Topaz Sliver',
    rarity: 1,
  },
  cecilia: { id: 'cecilia', name: 'Cecilia' },
  prithiva_topaz_fragment: {
    id: 'prithiva_topaz_fragment',
    name: 'Prithiva Topaz Fragment',
    rarity: 2,
    parent: 'prithiva_topaz_sliver',
  },
  basalt_pillar: {
    id: 'basalt_pillar',
    name: 'Basalt Pillar',
    rarity: 5,
    parent: 'prithiva_topaz_sliver',
  },
  prithiva_topaz_chunk: {
    id: 'prithiva_topaz_chunk',
    name: 'Prithiva Topaz Chunk',
    rarity: 3,
    parent: 'prithiva_topaz_sliver',
  },
  prithiva_topaz_gemstone: {
    id: 'prithiva_topaz_gemstone',
    name: 'Prithiva Topaz Gemstone',
    rarity: 4,
    parent: 'prithiva_topaz_sliver',
  },
  teachings_of_ballad: {
    id: 'teachings_of_ballad',
    name: 'Teachings of Ballad',
    day: ['wednesday', 'saturday'],
    rarity: 2,
  },
  guide_to_ballad: {
    id: 'guide_to_ballad',
    name: 'Guide to Ballad',
    day: ['wednesday', 'saturday'],
    rarity: 3,
    parent: 'teachings_of_ballad',
  },
  philosophies_of_ballad: {
    id: 'philosophies_of_ballad',
    name: 'Philosophies of Ballad',
    day: ['wednesday', 'saturday'],
    rarity: 4,
    parent: 'teachings_of_ballad',
  },
  tusk_of_monoceros_caeli: {
    id: 'tusk_of_monoceros_caeli',
    name: 'Tusk of Monoceros Caeli',
  },
  agnidus_agate_sliver: {
    id: 'agnidus_agate_sliver',
    name: 'Agnidus Agate Sliver',
    rarity: 1,
  },
  small_lamp_grass: { id: 'small_lamp_grass', name: 'Small Lamp Grass' },
  agnidus_agate_fragment: {
    id: 'agnidus_agate_fragment',
    name: 'Agnidus Agate Fragment',
    rarity: 2,
    parent: 'agnidus_agate_sliver',
  },
  everflame_seed: {
    id: 'everflame_seed',
    name: 'Everflame Seed',
    rarity: 5,
    parent: 'agnidus_agate_sliver',
  },
  agnidus_agate_chunk: {
    id: 'agnidus_agate_chunk',
    name: 'Agnidus Agate Chunk',
    rarity: 3,
    parent: 'agnidus_agate_sliver',
  },
  agnidus_agate_gemstone: {
    id: 'agnidus_agate_gemstone',
    name: 'Agnidus Agate Gemstone',
    rarity: 4,
    parent: 'agnidus_agate_sliver',
  },
  teachings_of_freedom: {
    id: 'teachings_of_freedom',
    name: 'Teachings of Freedom',
    day: ['monday', 'thursday'],
    rarity: 2,
  },
  guide_to_freedom: {
    id: 'guide_to_freedom',
    name: 'Guide to Freedom',
    day: ['monday', 'thursday'],
    rarity: 3,
    parent: 'teachings_of_freedom',
  },
  philosophies_of_freedom: {
    id: 'philosophies_of_freedom',
    name: 'Philosophies of Freedom',
    day: ['monday', 'thursday'],
    rarity: 4,
    parent: 'teachings_of_freedom',
  },
  dvalins_sigh: { id: 'dvalins_sigh', name: "Dvalin's Sigh" },
  varunada_lazurite_sliver: {
    id: 'varunada_lazurite_sliver',
    name: 'Varunada Lazurite Sliver',
    rarity: 1,
  },
  philanemo_mushroom: {
    id: 'philanemo_mushroom',
    name: 'Philanemo Mushroom',
  },
  varunada_lazurite_fragment: {
    id: 'varunada_lazurite_fragment',
    name: 'Varunada Lazurite Fragment',
    rarity: 2,
    parent: 'varunada_lazurite_sliver',
  },
  cleansing_heart: {
    id: 'cleansing_heart',
    name: 'Cleansing Heart',
    rarity: 5,
    parent: 'varunada_lazurite_sliver',
  },
  varunada_lazurite_chunk: {
    id: 'varunada_lazurite_chunk',
    name: 'Varunada Lazurite Chunk',
    rarity: 3,
    parent: 'varunada_lazurite_sliver',
  },
  varunada_lazurite_gemstone: {
    id: 'varunada_lazurite_gemstone',
    name: 'Varunada Lazurite Gemstone',
    rarity: 4,
    parent: 'varunada_lazurite_sliver',
  },
  ring_of_boreas: { id: 'ring_of_boreas', name: 'Ring of Boreas' },
  vajrada_amethyst_sliver: {
    id: 'vajrada_amethyst_sliver',
    name: 'Vajrada Amethyst Sliver',
    rarity: 1,
  },
  noctilucous_jade: { id: 'noctilucous_jade', name: 'Noctilucous Jade' },
  vajrada_amethyst_fragment: {
    id: 'vajrada_amethyst_fragment',
    name: 'Vajrada Amethyst Fragment',
    rarity: 2,
    parent: 'vajrada_amethyst_sliver',
  },
  lightning_prism: {
    id: 'lightning_prism',
    name: 'Lightning Prism',
    rarity: 5,
    parent: 'vajrada_amethyst_sliver',
  },
  vajrada_amethyst_chunk: {
    id: 'vajrada_amethyst_chunk',
    name: 'Vajrada Amethyst Chunk',
    rarity: 3,
    parent: 'vajrada_amethyst_sliver',
  },
  vajrada_amethyst_gemstone: {
    id: 'vajrada_amethyst_gemstone',
    name: 'Vajrada Amethyst Gemstone',
    rarity: 4,
    parent: 'vajrada_amethyst_sliver',
  },
  teachings_of_gold: {
    id: 'teachings_of_gold',
    name: 'Teachings of Gold',
    day: ['wednesday', 'saturday'],
    rarity: 2,
  },
  guide_to_gold: {
    id: 'guide_to_gold',
    name: 'Guide to Gold',
    day: ['wednesday', 'saturday'],
    rarity: 3,
    parent: 'teachings_of_gold',
  },
  philosophies_of_gold: {
    id: 'philosophies_of_gold',
    name: 'Philosophies of Gold',
    day: ['wednesday', 'saturday'],
    rarity: 4,
    parent: 'teachings_of_gold',
  },
  windwheel_aster: { id: 'windwheel_aster', name: 'Windwheel Aster' },
  teachings_of_resistance: {
    id: 'teachings_of_resistance',
    name: 'Teachings of Resistance',
    day: ['tuesday', 'friday'],
    rarity: 2,
  },
  guide_to_resistance: {
    id: 'guide_to_resistance',
    name: 'Guide to Resistance',
    day: ['tuesday', 'friday'],
    rarity: 3,
    parent: 'teachings_of_resistance',
  },
  philosophies_of_resistance: {
    id: 'philosophies_of_resistance',
    name: 'Philosophies of Resistance',
    day: ['tuesday', 'friday'],
    rarity: 4,
    parent: 'teachings_of_resistance',
  },
  dvalins_plume: { id: 'dvalins_plume', name: "Dvalin's Plume" },
  shivada_jade_sliver: {
    id: 'shivada_jade_sliver',
    name: 'Shivada Jade Sliver',
    rarity: 1,
  },
  cor_lapis: { id: 'cor_lapis', name: 'Cor Lapis' },
  shivada_jade_fragment: {
    id: 'shivada_jade_fragment',
    name: 'Shivada Jade Fragment',
    rarity: 2,
    parent: 'shivada_jade_sliver',
  },
  hoarfrost_core: {
    id: 'hoarfrost_core',
    name: 'Hoarfrost Core',
    rarity: 5,
    parent: 'shivada_jade_sliver',
  },
  shivada_jade_chunk: {
    id: 'shivada_jade_chunk',
    name: 'Shivada Jade Chunk',
    rarity: 3,
    parent: 'shivada_jade_sliver',
  },
  shivada_jade_gemstone: {
    id: 'shivada_jade_gemstone',
    name: 'Shivada Jade Gemstone',
    rarity: 4,
    parent: 'shivada_jade_sliver',
  },
  teachings_of_diligence: {
    id: 'teachings_of_diligence',
    name: 'Teachings of Diligence',
    day: ['tuesday', 'friday'],
    rarity: 2,
  },
  guide_to_diligence: {
    id: 'guide_to_diligence',
    name: 'Guide to Diligence',
    day: ['tuesday', 'friday'],
    rarity: 3,
    parent: 'teachings_of_diligence',
  },
  philosophies_of_diligence: {
    id: 'philosophies_of_diligence',
    name: 'Philosophies of Diligence',
    day: ['tuesday', 'friday'],
    rarity: 4,
    parent: 'teachings_of_diligence',
  },
  calla_lily: { id: 'calla_lily', name: 'Calla Lily' },
  shard_of_a_foul_legacy: {
    id: 'shard_of_a_foul_legacy',
    name: 'Shard of a Foul Legacy',
  },
  spirit_locket_of_boreas: {
    id: 'spirit_locket_of_boreas',
    name: 'Spirit Locket of Boreas',
  },
  vayuda_turquoise_sliver: {
    id: 'vayuda_turquoise_sliver',
    name: 'Vayuda Turquoise Sliver',
    rarity: 1,
  },
  dandelion_seed: { id: 'dandelion_seed', name: 'Dandelion Seed' },
  vayuda_turquoise_fragment: {
    id: 'vayuda_turquoise_fragment',
    name: 'Vayuda Turquoise Fragment',
    rarity: 2,
    parent: 'vayuda_turquoise_sliver',
  },
  hurricane_seed: {
    id: 'hurricane_seed',
    name: 'Hurricane Seed',
    rarity: 5,
    parent: 'vayuda_turquoise_sliver',
  },
  vayuda_turquoise_chunk: {
    id: 'vayuda_turquoise_chunk',
    name: 'Vayuda Turquoise Chunk',
    rarity: 3,
    parent: 'vayuda_turquoise_sliver',
  },
  vayuda_turquoise_gemstone: {
    id: 'vayuda_turquoise_gemstone',
    name: 'Vayuda Turquoise Gemstone',
    rarity: 4,
    parent: 'vayuda_turquoise_sliver',
  },
  teachings_of_prosperity: {
    id: 'teachings_of_prosperity',
    name: 'Teachings of Prosperity',
    day: ['monday', 'thursday'],
    rarity: 2,
  },
  guide_to_prosperity: {
    id: 'guide_to_prosperity',
    name: 'Guide to Prosperity',
    day: ['monday', 'thursday'],
    rarity: 3,
    parent: 'teachings_of_prosperity',
  },
  philosophies_of_prosperity: {
    id: 'philosophies_of_prosperity',
    name: 'Philosophies of Prosperity',
    day: ['monday', 'thursday'],
    rarity: 4,
    parent: 'teachings_of_prosperity',
  },
  valberry: { id: 'valberry', name: 'Valberry' },
  dvalins_claw: { id: 'dvalins_claw', name: "Dvalin's Claw" },
  glaze_lily: { id: 'glaze_lily', name: 'Glaze Lily' },
  violetgrass: { id: 'violetgrass', name: 'Violetgrass' },
  tail_of_boreas: { id: 'tail_of_boreas', name: 'Tail of Boreas' },
  wolfhook: { id: 'wolfhook', name: 'Wolfhook' },
  starconch: { id: 'starconch', name: 'Starconch' },
  brilliant_diamond_sliver: {
    id: 'brilliant_diamond_sliver',
    name: 'Brilliant Diamond Sliver',
    rarity: 1,
  },
  brilliant_diamond_fragment: {
    id: 'brilliant_diamond_fragment',
    name: 'Brilliant Diamond Fragment',
    rarity: 2,
    parent: 'brilliant_diamond_sliver',
  },
  brilliant_diamond_chunk: {
    id: 'brilliant_diamond_chunk',
    name: 'Brilliant Diamond Chunk',
    rarity: 3,
    parent: 'brilliant_diamond_sliver',
  },
  brilliant_diamond_gemstone: {
    id: 'brilliant_diamond_gemstone',
    name: 'Brilliant Diamond Gemstone',
    rarity: 4,
    parent: 'brilliant_diamond_sliver',
  },
  jueyun_chili: { id: 'jueyun_chili', name: 'Jueyun Chili' },
  silk_flower: { id: 'silk_flower', name: 'Silk Flower' },
  qingxin: { id: 'qingxin', name: 'Qingxin' },
  shadow_of_the_warrior: { id: 'shadow_of_the_warrior', name: 'Shadow of the Warrior' },
  juvenile_jade: { id: 'juvenile_jade', name: 'Juvenile Jade', rarity: 5 },
  bloodjade_branch: { id: 'bloodjade_branch', name: 'Bloodjade Branch', rarity: 5 }
};
