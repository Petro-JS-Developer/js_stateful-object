'use strict';

/**
 * Implement a function accepting 2 arguments `state` and `transforms`. It
 * should change the `state` basing on the given `transforms`
 *
 * `state` is an object. You are supposed to add, change, or delete its
 *  properties instead of creating a new object
 *
 * `transforms` is an array of objects having the following properties:
 * `operation`: either `addProperties`, `removeProperties` or `clear`;
 * `properties`:
 *   - if `operation` is `addProperties`, this property contains an object
 *   with `key: value` pairs to add to the state;
 *   - if `operation` is `removeProperties`, this property contains an array
 *   with the list of property names to remove from the state; (Not existing
 *   properties should be ignored)
 *   - if `operation is `clear` you should remove all the properties from the
 *   state
 *
 * Sample usage:
 *
 * If `state` is {foo: 'bar', bar: 'foo'}, then
 *
 * transformState(state, [
 *   {operation: 'addProperties', properties: {name: 'Jim', hello: 'world'}},
 *   {operation: 'removeProperties', properties: ['bar', 'hello']},
 *   {operation: 'addProperties', properties: {another: 'one'}}
 * ])
 *
 * should modify the `state` object so after the call it becomes
 * {foo: 'bar', name: 'Jim', another: 'one'}.
 *
 * Then after calling
 *
 * transformState(state, [
 *   {operation: 'addProperties', properties: {yet: 'another property'}}
 *   {operation: 'clear'},
 *   {operation: 'addProperties', properties: {foo: 'bar', name: 'Jim'}}
 * ])
 *
 * the `state` variable must contain
 * {foo: 'bar', name: 'Jim'}.
 *
 * @param {Object} state
 * @param {Object[]} transforms
 */

/* Потрібно перебрати всі обєкти з правилами до статичного масиву
статичний масив клонувати так як він сonst
перебрати правила в об'єкті
використати switch для тогого щоб застосувати правило */

function transform(state, transforms) {
  let cloneState = Object.assign({}, state);

  for (let i = 0; i < transforms.length; i++) {
    for (const key in transforms) {
      switch (transforms[key].operation) {
        case 'addProperties':
          cloneState = Object.assign(state, (transforms[key].properties));
          break;
        case 'clear':
          for (const index of Object.keys(state)) {
            delete state[index];
          }
          break;
        case 'removeProperties':
          for (const key1 of transforms[key].properties) {
            delete state[key1];
          }
          cloneState = Object.assign({}, (transforms[key].properties));
          break;
      }
    }

    return cloneState;
  }
}

module.exports = transform;
