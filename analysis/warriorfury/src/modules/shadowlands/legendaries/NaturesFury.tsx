import SPELLS from 'common/SPELLS';
import COVENANTS from 'game/shadowlands/COVENANTS';
import Analyzer, { Options, SELECTED_PLAYER } from 'parser/core/Analyzer';
import Events, { DamageEvent } from 'parser/core/Events';
import BoringSpellValueText from 'parser/ui/BoringSpellValueText';
import Statistic from 'parser/ui/Statistic';
import STATISTIC_CATEGORY from 'parser/ui/STATISTIC_CATEGORY';

class NaturesFury extends Analyzer {
  _ancientAftershockDamage: number = 0;
  _naturesFuryDamage: number = 0;

  constructor(options: Options) {
    super(options);
    this.active =
      this.selectedCombatant.hasCovenant(COVENANTS.NIGHT_FAE.id) &&
      (this.selectedCombatant.hasLegendary(SPELLS.NATURES_FURY) ||
        this.selectedCombatant.hasLegendary(SPELLS.UNITY));

    this.addEventListener(
      Events.damage.by(SELECTED_PLAYER).spell(SPELLS.ANCIENT_AFTERSHOCK),
      this.onAftershockDamage,
    );
    this.addEventListener(
      Events.damage.by(SELECTED_PLAYER).spell(SPELLS.ANCIENT_AFTERSHOCK_DOT),
      this.onAftershockDamage,
    );

    this.addEventListener(
      Events.damage.by(SELECTED_PLAYER).spell(SPELLS.NATURES_FURY_DAMAGE),
      this.onNaturesFuryDamage,
    );
  }

  onAftershockDamage(event: DamageEvent) {
    this._ancientAftershockDamage += event.amount;
  }

  onNaturesFuryDamage(event: DamageEvent) {
    this._naturesFuryDamage += event.amount;
  }

  statistic() {
    return (
      <Statistic category={STATISTIC_CATEGORY.COVENANTS} size="flexible">
        <BoringSpellValueText spellId={SPELLS.NATURES_FURY_DAMAGE.id}>
          {this.owner.formatItemDamageDone(this._naturesFuryDamage)}
        </BoringSpellValueText>
        <BoringSpellValueText spellId={SPELLS.ANCIENT_AFTERSHOCK.id}>
          {this.owner.formatItemDamageDone(this._ancientAftershockDamage)}
        </BoringSpellValueText>
      </Statistic>
    );
  }
}

export default NaturesFury;
