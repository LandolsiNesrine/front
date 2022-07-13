import { SimpleChanges } from '@angular/core';
import { isEmpty } from './is-empty';

export function isInputChanged(changes: SimpleChanges, key: string): boolean {
  const change = changes[key];

  return !isEmpty(change) && change.previousValue !== change.currentValue;
}

export function isSomeInputsChanged(
  changes: SimpleChanges,
  keys: string[]
): boolean {
  return keys.some((key) => isInputChanged(changes, key));
}
