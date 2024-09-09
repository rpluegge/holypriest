import SPELLS from 'common/SPELLS';
import TALENTS from 'common/TALENTS/priest';
import { TALENTS_PRIEST } from 'common/TALENTS';

/**
 *  -------------------------TALENTS------------------------------
 */

// TOP ROW

// afterlife - need to update in tww
export const SPIRIT_OF_REDEMPTION_DURATION = 15000;
// burning vehemence
export const BV_DAMAGE_INCREASE_PER_RANK = [0, 0.3, 0.6];
// guardian angel
export const GS_BASE_COOLDOWN_TIME = 60 * 3 * 1000;
export const GS_MODIFIED_COOLDOWN_TIME = (60 + 10) * 1000; // one minute plus 10 seconds to account for the duration of the buff.
// renewed faith
export const RENEWED_FAITH_MULTIPLIER = 1.06;
// sanctified prayers
export const SANCTIFIED_PRAYERS_MULTIPLIER = 1.15;

// MIDDLE ROW

// enlightenment
export const ENLIGHT_MAX_MANA = 250000;
export const ENLIGHT_BASE_MANA_REGEN = 0.04;
// everlasting light
export const MAX_EVERLASTING_LIGHT_BUFF = 0.15;
// healing chorus
export const HEALING_CHORUS_BONUS_PER_STACK = 0.05;
export const HEALING_CHORUS_MAX_STACKS = 20;
// prayerful litany
export const PRAYERFUL_LITANY_MULTIPLIER = 1;

// BOTTOM ROW

// answered prayers
export const AP_HEALS_PER_TRIGGER_BY_RANK = [0, 100, 50];
// desperate times
export const DESP_TIMES_HEALING_MULTIPLIER_PER_RANK = 0.1;
// divine word
export const DAMAGE_INCREASE_FROM_CHASTISE = 0.2;
export const CHASTISE_REFUNDED_COOLDOWN = 15;
export const HEALING_INCREASE_FROM_SERENITY = 0.3;
export const MANA_REDUCTION_FROM_SERENITY = 0.2;
export const DW_ACTIVATOR_SPELL_INCREASE = 0.3;
// lightweaver
export const LW_HEALING_BONUS = 0.25;
export const LW_OVERHEAL_THRESHOLD = 0.75;
export const LW_CAST_TIME_DECREASE = 1 - 0.3;
// pontifex
export const PONTIFEX_HEALING_INCREASE = 0.06;
// prismatic echoes
export const PRISMATIC_ECHOES_PER_RANK = 0.06;
// resonant words
export const HEALING_MULTIPLIER_BY_RANK: number[] = [0, 0.2, 0.4];
export const HOLY_WORD_LIST = [
  TALENTS.HOLY_WORD_CHASTISE_TALENT,
  TALENTS.HOLY_WORD_SALVATION_TALENT,
  TALENTS.HOLY_WORD_SANCTIFY_TALENT,
  TALENTS.HOLY_WORD_SERENITY_TALENT,
];
export const RESONANT_WORD_WHITELIST = [
  SPELLS.FLASH_HEAL,
  SPELLS.GREATER_HEAL,
  TALENTS.PRAYER_OF_HEALING_TALENT,
  TALENTS.CIRCLE_OF_HEALING_TALENT,
];

// ORACLE VALUES

export const FATEBENDER_SCALER = 1.4;
export const SOLACE_DR = 0.15;
export const PIETY_OVERHEAL_MISDIRECT = 0.7;
export const PIETY_AMP = 0.15;
export const INSIGHT_CDR = 7;
export const PREVENTIVE_MEASURES_DMG_AMP = 0.25;
export const PREVENTIVE_MEASURES_HEAL_AMP = 0.4;
export const PROPHETS_WILL_AMP = 0.3;
export const PREEMPTIVE_CARE_RENEW_DUR = 6_000;

export const INSIGHT_CDR_ABILITIES = [
  TALENTS_PRIEST.ANGELIC_FEATHER_TALENT.id,
  TALENTS_PRIEST.MASS_DISPEL_TALENT.id,
  SPELLS.PSYCHIC_SCREAM.id,
  SPELLS.DESPERATE_PRAYER.id,
  SPELLS.MIND_SOOTHE.id,
  SPELLS.FADE.id,
  TALENTS_PRIEST.POWER_INFUSION_TALENT.id,
  TALENTS_PRIEST.HALO_SHARED_TALENT.id,
  TALENTS_PRIEST.SHADOWFIEND_TALENT.id,
  SPELLS.POWER_WORD_SHIELD.id,
  TALENTS_PRIEST.PRAYER_OF_MENDING_TALENT.id,
  TALENTS_PRIEST.APOTHEOSIS_TALENT.id,
  TALENTS_PRIEST.HOLY_WORD_CHASTISE_TALENT.id,
  SPELLS.HOLY_FIRE.id,
  TALENTS_PRIEST.HOLY_WORD_SANCTIFY_TALENT.id,
  TALENTS_PRIEST.HOLY_WORD_SERENITY_TALENT.id,
  TALENTS_PRIEST.HOLY_WORD_SALVATION_TALENT.id,
  TALENTS_PRIEST.SYMBOL_OF_HOPE_TALENT.id,
  SPELLS.PURIFY.id,
  TALENTS_PRIEST.DIVINE_HYMN_TALENT.id,
  TALENTS_PRIEST.LIGHTWELL_TALENT.id,
  TALENTS_PRIEST.DIVINE_WORD_TALENT.id,
  TALENTS_PRIEST.SHADOW_WORD_DEATH_TALENT.id,
  TALENTS_PRIEST.CIRCLE_OF_HEALING_TALENT.id,
];

export const PROPHETS_WILL_SPELLS_HOLY = [
  SPELLS.FLASH_HEAL,
  TALENTS_PRIEST.HOLY_WORD_SERENITY_TALENT,
  SPELLS.GREATER_HEAL,
];

export const HOLY_DMG_ABILITIES_AFFECTED_BY_PM = [
  SPELLS.HOLY_FIRE,
  SPELLS.HOLY_NOVA_HEAL,
  SPELLS.BURNING_VEHEMENCE_DAMAGE,
  TALENTS_PRIEST.HOLY_NOVA_TALENT,
  SPELLS.SMITE,
];

// ARCHON VALUES

export const EMPOWERED_SURGES_AMP = 0.3;
export const ENERGY_COMPRESSION_AMP = 0.3;
export const APOTH_MULTIPIER = 4;
export const ENERGY_CYCLE_CDR = 4;
export const LIGHT_OF_THE_NAARU_REDUCTION_PER_RANK = 0.1;
export const TWW_TIER1_2PC_CDR = 0.1;
export const PERFECTED_FORM_AMP = 0.1;
export const RESONANT_ENERGY_AMP_PER_STACK = 0.02;

/**
 * MASSIVE TO DO - REWRITE THE HOLY WORD CDR MODULE TO BE EASIER TO MAINTAIN AND
 *                 PUT CONSTANTS HERE
 */

/**
 *  ------------------CORE/SPELL MODIFIERS AND LISTS------------------------
 */

// renew attributor
export const BASE_RENEW_DURATION = 15;
// not sure what the max is, df s3 tier could extend it to like 2min
export const MAX_RENEW_DURATION = 50;

// circle of healing
export const COH_OVERHEAL_THRESHOLD = 0.75;
export const COH_MAX_TARGETS_HIT = 5;

// guardian spirit
export const GUARDIAN_SPIRIT_HEALING_INCREASE = 0.6;

// divine hymn
export const BASE_DIVINE_HYMN_HEALING_INCREASE_PER_STACK = 0.04;
export const GALES_OF_SONG_HEALING_INCREASE_PER_POINT = 0.02;

// prayer of healing
export const POH_MAX_TARGETS_HIT = 5;

export const HOLY_ABILITIES_AFFECTED_BY_HEALING_INCREASES_ID = [
  SPELLS.FLASH_HEAL.id,
  TALENTS.RENEW_TALENT.id,
  TALENTS.PRAYER_OF_HEALING_TALENT.id,
  TALENTS.HOLY_WORD_SERENITY_TALENT.id,
  TALENTS.HOLY_WORD_SANCTIFY_TALENT.id,
  TALENTS.CIRCLE_OF_HEALING_TALENT.id,
  TALENTS.HOLY_WORD_SALVATION_TALENT.id,
  SPELLS.GREATER_HEAL.id,
  TALENTS.POWER_WORD_LIFE_TALENT.id,
  SPELLS.BINDING_HEALS_TALENT_HEAL.id,
  SPELLS.PRAYER_OF_MENDING_HEAL.id,
  SPELLS.DIVINE_HYMN_HEAL.id,
  SPELLS.DIVINE_STAR_HEAL.id,
  SPELLS.HALO_HEAL.id,
  SPELLS.DIVINE_IMAGE_BLESSED_LIGHT_HEAL.id,
  SPELLS.DIVINE_IMAGE_DAZZLING_LIGHT_HEAL.id,
  SPELLS.DIVINE_IMAGE_HEALING_LIGHT_HEAL.id,
  SPELLS.DIVINE_IMAGE_TRANQUIL_LIGHT_HEAL.id,
  TALENTS.COSMIC_RIPPLE_TALENT.id,
  SPELLS.HOLY_NOVA_HEAL.id,
  SPELLS.CRYSTALLINE_REFLECTION_TALENT_HEAL.id,
  SPELLS.LIGHTWELL_TALENT_HEAL.id,
  SPELLS.DIVINE_WORD_SANCTIFY_TALENT_HEAL.id,
  TALENTS.ESSENCE_DEVOURER_TALENT.id,
  SPELLS.EMPOWERED_RENEW_TALENT_HEAL.id,
  //REMOVE WHEN PROPER EOL ATTRIB IS WRITTEN
  SPELLS.ECHO_OF_LIGHT_HEAL.id,
];

//Other classes use non ID calls
export const HOLY_ABILITIES_AFFECTED_BY_HEALING_INCREASES = [
  SPELLS.FLASH_HEAL,
  TALENTS.RENEW_TALENT,
  TALENTS.PRAYER_OF_HEALING_TALENT,
  TALENTS.HOLY_WORD_SERENITY_TALENT,
  TALENTS.HOLY_WORD_SANCTIFY_TALENT,
  TALENTS.CIRCLE_OF_HEALING_TALENT,
  TALENTS.HOLY_WORD_SALVATION_TALENT,
  SPELLS.GREATER_HEAL,
  TALENTS.POWER_WORD_LIFE_TALENT,
  SPELLS.BINDING_HEALS_TALENT_HEAL,
  SPELLS.PRAYER_OF_MENDING_HEAL,
  SPELLS.DIVINE_HYMN_HEAL,
  SPELLS.DIVINE_STAR_HEAL,
  SPELLS.HALO_HEAL,
  SPELLS.DIVINE_IMAGE_BLESSED_LIGHT_HEAL,
  SPELLS.DIVINE_IMAGE_DAZZLING_LIGHT_HEAL,
  SPELLS.DIVINE_IMAGE_HEALING_LIGHT_HEAL,
  SPELLS.DIVINE_IMAGE_TRANQUIL_LIGHT_HEAL,
  TALENTS.COSMIC_RIPPLE_TALENT,
  SPELLS.HOLY_NOVA_HEAL,
  SPELLS.CRYSTALLINE_REFLECTION_TALENT_HEAL,
  SPELLS.LIGHTWELL_TALENT_HEAL,
  SPELLS.DIVINE_WORD_SANCTIFY_TALENT_HEAL,
  TALENTS.ESSENCE_DEVOURER_TALENT,
  SPELLS.EMPOWERED_RENEW_TALENT_HEAL,
  //REMOVE WHEN PROPER EOL ATTRIB IS WRITTEN
  SPELLS.ECHO_OF_LIGHT_HEAL,
];

// legacy list for some modules
export const ABILITIES_THAT_TRIGGER_MASTERY = [
  SPELLS.DIVINE_HYMN_HEAL.id,
  SPELLS.GREATER_HEAL.id,
  SPELLS.FLASH_HEAL.id,
  SPELLS.PRAYER_OF_MENDING_HEAL.id,
  TALENTS.PRAYER_OF_HEALING_TALENT.id,
  TALENTS.HOLY_WORD_SERENITY_TALENT.id,
  TALENTS.HOLY_WORD_SANCTIFY_TALENT.id,
  TALENTS.HOLY_WORD_SALVATION_TALENT.id,
  SPELLS.DESPERATE_PRAYER.id,
  SPELLS.COSMIC_RIPPLE_HEAL.id,
  SPELLS.BINDING_HEALS_TALENT_HEAL.id,
  TALENTS.CIRCLE_OF_HEALING_TALENT.id,
  SPELLS.HALO_HEAL.id,
  SPELLS.DIVINE_STAR_HEAL.id,
  SPELLS.TRAIL_OF_LIGHT_TALENT_HEAL.id,
  SPELLS.HOLY_NOVA_HEAL.id,
  SPELLS.GUARDIAN_SPIRIT_HEAL.id,
  TALENTS.POWER_WORD_LIFE_TALENT.id,
  SPELLS.CRYSTALLINE_REFLECTION_TALENT_HEAL.id,
  SPELLS.EMPOWERED_RENEW_TALENT_HEAL.id,
];

//List is all holy spells from: https://www.wowhead.com/spell=372761/divine-favor-chastise
export const ABILITIES_THAT_WORK_WITH_DIVINE_FAVOR_CHASTISE = [
  SPELLS.SMITE.id,
  SPELLS.SHADOW_WORD_PAIN.id,
  TALENTS.SHADOW_WORD_DEATH_TALENT.id,
  TALENTS.HOLY_WORD_CHASTISE_TALENT.id,
  TALENTS.HOLY_NOVA_TALENT.id,
  SPELLS.HOLY_FIRE.id,
];

export const ABILITIES_AFFECTED_BY_APOTHEOSIS_TALENT = [
  TALENTS.HOLY_WORD_SERENITY_TALENT.id,
  TALENTS.HOLY_WORD_SANCTIFY_TALENT.id,
  TALENTS.HOLY_WORD_CHASTISE_TALENT.id,
];

export const ABILITIES_THAT_DONT_TRIGGER_MASTERY = [
  TALENTS.RENEW_TALENT.id,
  SPELLS.PREMONITION_OF_PIETY.id,
  SPELLS.DIVINE_IMAGE_BLESSED_LIGHT_HEAL.id,
  SPELLS.DIVINE_IMAGE_DAZZLING_LIGHT_HEAL.id,
  SPELLS.DIVINE_IMAGE_HEALING_LIGHT_HEAL.id,
  SPELLS.DIVINE_IMAGE_TRANQUIL_LIGHT_HEAL.id,
  TALENTS.ESSENCE_DEVOURER_TALENT.id,
  SPELLS.LEECH.id,
  SPELLS.ECHO_OF_LIGHT_HEAL.id,
];

export const EFFECTS_INCREASED_BY_BENEVOLENCE_HOLY = [
  SPELLS.FLASH_HEAL.id,
  TALENTS.RENEW_TALENT.id,
  TALENTS.PRAYER_OF_HEALING_TALENT.id,
  TALENTS.HOLY_WORD_SERENITY_TALENT.id,
  TALENTS.HOLY_WORD_SANCTIFY_TALENT.id,
  TALENTS.CIRCLE_OF_HEALING_TALENT.id,
  TALENTS.HOLY_WORD_SALVATION_TALENT.id,
  SPELLS.GREATER_HEAL.id,
  TALENTS.POWER_WORD_LIFE_TALENT.id,
  SPELLS.BINDING_HEALS_TALENT_HEAL.id,
  SPELLS.PRAYER_OF_MENDING_HEAL.id,
  SPELLS.DIVINE_HYMN_HEAL.id,
  SPELLS.DIVINE_STAR_HEAL.id,
  SPELLS.HALO_HEAL.id,
  SPELLS.DIVINE_IMAGE_BLESSED_LIGHT_HEAL.id,
  SPELLS.DIVINE_IMAGE_DAZZLING_LIGHT_HEAL.id,
  SPELLS.DIVINE_IMAGE_HEALING_LIGHT_HEAL.id,
  SPELLS.DIVINE_IMAGE_TRANQUIL_LIGHT_HEAL.id,
  TALENTS.COSMIC_RIPPLE_TALENT.id,
  SPELLS.HOLY_NOVA_HEAL.id,
  SPELLS.CRYSTALLINE_REFLECTION_TALENT_HEAL.id,
  SPELLS.LIGHTWELL_TALENT_HEAL.id,
  SPELLS.DIVINE_WORD_SANCTIFY_TALENT_HEAL.id,
  TALENTS.ESSENCE_DEVOURER_TALENT.id,
  SPELLS.EMPOWERED_RENEW_TALENT_HEAL.id,
  //REMOVE WHEN PROPER EOL ATTRIB IS WRITTEN
  SPELLS.ECHO_OF_LIGHT_HEAL.id,
];
