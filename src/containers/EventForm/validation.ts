type Validator = (value: string) => string | undefined
type ValidatorComposer = (...validators: Validator[]) => Validator

export const required: Validator = (value) => value ? undefined : 'Обязательное поле'

export const minInputLenght: Validator = (value) => value.length > 3 ? undefined : 'Минимальная длина входных данных 4 символа'

export const reduceValidators: ValidatorComposer = (...validators) =>  (value) => validators.reduce<string | undefined>((error, validator) => error || validator(value), undefined) 

// export const composeValidators: ValidatorComposer = (...validators) =>  (value) => validators.reduce((error, validator) => error || validator(value), undefined) 