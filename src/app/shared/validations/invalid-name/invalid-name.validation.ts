export default class InvalidNameValidation {
  isInvalid(invalidValue: string, value: string): boolean {
    const invalid = new RegExp(invalidValue, 'i').test(value);
    return invalid;
  }
}
