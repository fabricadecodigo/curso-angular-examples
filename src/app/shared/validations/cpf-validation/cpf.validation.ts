export default class CpfValidation {

  public isCpfInvalid(value: string): boolean {
    if (!value || value.length !== 11) {
      return false;
    }

    if (this.isKnownInvalid(value)) {
      return true;
    }

    if (this.isFirstDigitInvalid(value)) {
      return true;
    }

    if (this.isSecondDigitInvalid(value)) {
      return true;
    }

    return false;
  }

  private isKnownInvalid(value: string): boolean {
    const values = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ];

    const invalid = values.includes(value);
    return invalid;
  }

  private isFirstDigitInvalid(value: string): boolean {
    // 007.282.690-82
    const verificationDigit = Number(value.substring(9, 10));
    const digits = value.substring(0, 9).split('');

    const validator = 10;

    // multiplica os 9 primeiros digitos pela sequencia decrescente de 10
    return this.isDigitInvalid(digits, verificationDigit, validator);
  }

  private isSecondDigitInvalid(value: string): boolean {
    // 007.282.690-82
    const verificationDigit = Number(value.substring(10, 11));
    const digits = value.substring(0, 10).split('');
    const validator = 11;

    // multiplica os 10 primeiros digitos pela sequencia decrescente de 11
    return this.isDigitInvalid(digits, verificationDigit, validator);
  }

  private isDigitInvalid(
    digits: string[],
    verificationDigit: number,
    validator: number
  ): boolean {
    let sum = 0;

    for (const digit of digits) {
      sum += Number(digit) * validator;
      validator--;
    }

    const rest = (sum * 10) % 11;
    const isDifferent = verificationDigit !== rest;
    return isDifferent;
  }
}
