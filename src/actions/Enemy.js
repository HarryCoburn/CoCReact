import * as EnemyMsg from "./messages/enemyMsg";

export function _load_enemy(enemy) {
  return {
    type: EnemyMsg.LOAD_ENEMY,
    payload: enemy
  };
}

export const _startCombat = { type: EnemyMsg.START_COMBAT };
export const _endCombat = { type: EnemyMsg.END_COMBAT };
export const _changeTurn = { type: EnemyMsg.CHANGE_TURN };

export function _applyDamage(ind, damage) {
  return {
    type: EnemyMsg.APPLY_DAMAGE,
    payload: { enemyNum: ind, damage: damage }
  };
}