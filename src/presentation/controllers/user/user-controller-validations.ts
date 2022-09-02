import { Validation } from "../../protocols/validation";
import { EmailValidatorAdapter } from "../../validation/adapters/email-validator-adapter";
import { UuidValidatorAdapter } from "../../validation/adapters/uuid-validator-adapter";
import { EmailValidation } from "../../validation/email-validation";
import { RequiredFieldValidation } from "../../validation/required-field-validation";
import { UuidValidation } from "../../validation/uuid-validation";
import { ValidationComposite } from "../../validation/validation-composite";

export const createUserValidations = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ['id', 'email', 'password']) validations.push(new RequiredFieldValidation(field));
  validations.push(new UuidValidation('id', new UuidValidatorAdapter()));
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
  return new ValidationComposite(validations);
}

export const updateUserValidations = (fields: string[]): ValidationComposite => {
  const validations: Validation[] = [];
  if(fields.includes('email')) validations.push(new EmailValidation('email', new EmailValidatorAdapter()));
  return new ValidationComposite(validations);
}