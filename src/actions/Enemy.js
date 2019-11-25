import * as Enemy from "./enemyMsg";
import store from "../store/store";

function _load_enemy(enemy) {
  return {
    type: Enemy.LOAD_ENEMY,
    payload: enemy
  };
}

export const loadEnemy = enemy => store.dispatch(_load_enemy(enemy));
export const applyDamage = damage =>
  store.dispatch({
    type: Enemy.APPLY_DAMAGE,
    payload: { enemyNum: 0, damage: damage }
  });
