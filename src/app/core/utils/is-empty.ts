export function isEmpty(val: any): boolean {
  return val === null || typeof val === 'undefined' || val.toString().trim() === '';
}
