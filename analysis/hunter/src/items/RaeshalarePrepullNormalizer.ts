import SPELLS from 'common/SPELLS';
import { AnyEvent, EventType } from 'parser/core/Events';
import EventsNormalizer from 'parser/core/EventsNormalizer';

const debug = true;

class RaeshalarePrepullNormalizer extends EventsNormalizer {
  /**
   * Wailing Arrow can begin casting before combat AND has travel time.
   * This means we don't see the begincast event, and might not even see the cast success event - but we will see the damage event.
   * This means our regular PrepullNormalizer won't fix it properly, and thus this normalizer will fabricate begincast events for any cast success events of Aimed Shot that don't have a preceding begincast event.
   */

  normalize(events: AnyEvent[]) {
    const fixedEvents: any[] = [];
    let lastBeginCastTimestamp: number | null = null;
    let lastCastSuccessTimestamp: number | null = null;
    events.forEach((event) => {
      if (
        (event.type === EventType.BeginCast ||
          event.type === EventType.Cast ||
          event.type === EventType.Damage) &&
        (event.ability.guid === SPELLS.WAILING_ARROW_CAST.id ||
          event.ability.guid === SPELLS.WAILING_ARROW_DAMAGE.id)
      ) {
        if (event.type === EventType.BeginCast) {
          lastBeginCastTimestamp = event.timestamp;
        }
        if (event.type === EventType.Cast) {
          lastCastSuccessTimestamp = event.timestamp;
        }
        if (event.type === EventType.Cast) {
          if (!lastBeginCastTimestamp) {
            debug &&
              console.log(
                'Wailing Arrow cast success without a Begin Cast registered',
                (event.timestamp - this.owner.fight.start_time) / 1000,
                'seconds into combat',
              );
            const fabricatedEvent = {
              ...event,
              ability: {
                name: event.ability.name,
                type: event.ability.type,
                abilityIcon: event.ability.abilityIcon,
                guid: SPELLS.WAILING_ARROW_CAST.id,
              },
              timestamp: event.timestamp - 1500,
              type: EventType.BeginCast,
              __fabricated: true,
            };
            fixedEvents.push(fabricatedEvent);
            debug && console.log('Real', event);
            debug && console.log('Fabricated', fabricatedEvent);
          }
        }
        if (event.type === EventType.Damage) {
          if (!lastCastSuccessTimestamp || !lastBeginCastTimestamp) {
            debug &&
              console.log(
                'Wailing Arrow Damage event without a Cast success registered',
                (event.timestamp - this.owner.fight.start_time) / 1000,
                'seconds into combat',
              );
            const fabricatedBeginCastEvent = {
              ...event,
              ability: {
                name: event.ability.name,
                type: event.ability.type,
                abilityIcon: event.ability.abilityIcon,
                guid: SPELLS.WAILING_ARROW_CAST.id,
              },
              timestamp: this.owner.fight.start_time - 1500,
              type: EventType.BeginCast,
              __fabricated: true,
            };
            const fabricatedCastEvent = {
              ...event,
              ability: {
                name: event.ability.name,
                type: event.ability.type,
                abilityIcon: event.ability.abilityIcon,
                guid: SPELLS.WAILING_ARROW_CAST.id,
              },
              timestamp: this.owner.fight.start_time,
              type: EventType.Cast,
              __fabricated: true,
            };
            fixedEvents.push(fabricatedBeginCastEvent);
            fixedEvents.push(fabricatedCastEvent);
            debug && console.log('Real', event);
            debug && console.log('Fabricated BeginCast', fabricatedBeginCastEvent);
            debug && console.log('Fabricated Cast', fabricatedCastEvent);
          }
        }
      }
      fixedEvents.push(event);
    });
    return fixedEvents;
  }
}

export default RaeshalarePrepullNormalizer;
