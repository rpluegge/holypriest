import SPELLS from 'common/SPELLS';
import { Enchant } from 'common/SPELLS/Spell';
import { SpellLink } from 'interface';
import { Options } from 'parser/core/Analyzer';
import SUGGESTION_IMPORTANCE from 'parser/core/ISSUE_IMPORTANCE';

import { RuneForgeChecker } from '@wowanalyzer/deathknight';

class UnholyRuneForgeChecker extends RuneForgeChecker {
  constructor(options: Options) {
    super(options);

    // Hysteria & FC need no suggestions for blood
    this.runeForges = [
      {
        forge: SPELLS.RUNE_OF_THE_STONESKIN_GARGOYLE as Enchant,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            <SpellLink id={SPELLS.RUNE_OF_THE_STONESKIN_GARGOYLE.id} /> is a survivability runeforge
            at the cost of damage and healing. Use{' '}
            <SpellLink id={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER.id} /> instead
          </>
        ),
      },
      {
        forge: SPELLS.RUNE_OF_RAZORICE as Enchant,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            Don't use <SpellLink id={SPELLS.RUNE_OF_RAZORICE.id} /> as Unholy Death Knight, use{' '}
            <SpellLink id={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER.id} /> instead.
          </>
        ),
      },
      {
        forge: SPELLS.RUNE_OF_SANGUINATION as Enchant,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            Don't use <SpellLink id={SPELLS.RUNE_OF_SANGUINATION.id} /> as Unholy Death Knight, use{' '}
            <SpellLink id={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER.id} /> instead.
          </>
        ),
      },
      {
        forge: SPELLS.RUNE_OF_APOCALYPSE as Enchant,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            Don't use <SpellLink id={SPELLS.RUNE_OF_APOCALYPSE.id} /> as Unholy Death Knight, use{' '}
            <SpellLink id={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER.id} /> instead.
          </>
        ),
      },
      {
        forge: SPELLS.RUNE_OF_UNENDING_THIRST as Enchant,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            Don't use <SpellLink id={SPELLS.RUNE_OF_UNENDING_THIRST.id} /> as Unholy Death Knight,
            use <SpellLink id={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER.id} /> instead.
          </>
        ),
      },
      {
        forge: SPELLS.RUNE_OF_SPELLWARDING as Enchant,
        importance: SUGGESTION_IMPORTANCE.MAJOR,
        suggestion: (
          <>
            Don't use <SpellLink id={SPELLS.RUNE_OF_SPELLWARDING.id} /> as Unholy Death Knight, use{' '}
            <SpellLink id={SPELLS.RUNE_OF_THE_FALLEN_CRUSADER.id} /> instead.
          </>
        ),
      },
    ];
  }
}

export default UnholyRuneForgeChecker;
