import {AbstractControl, ValidatorFn} from '@angular/forms';
import { isEmpty, isNumber } from '../utils';

const isNotNumber = {is_not_a_number: 'is_not_a_number'};

export function NumberValidator(): ValidatorFn {
  return (control: AbstractControl): typeof isNotNumber | null => {
    const {value} = control;

    if (isEmpty(value)) {
      return null;
    }

    return (isNumber(value) ? null : isNotNumber);
  };
}
