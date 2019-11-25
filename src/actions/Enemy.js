import * as Enemy from "./enemyMsg";
import store from "../store/store";

function _load_enemy(enemy) {
  return {
    type: Enemy.LOAD_ENEMY,
    payload: enemy
  };
}

export const loadEnemy = enemy => store.dispatch(_load_enemy(enemy));
export const applyDamage = (ind = 0, damage) =>
  store.dispatch({
    type: Enemy.APPLY_DAMAGE,
    payload: { enemyNum: ind, damage: damage }
  });

export const reset = () => store.dispatch({ type: Enemy.RESET });
export const changeTurn = () => store.dispatch({ type: Enemy.CHANGE_TURN });
