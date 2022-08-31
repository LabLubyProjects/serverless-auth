export class DuplicatedEmailError extends Error {
  constructor() {
    super('Email já cadastrado')
  }
}