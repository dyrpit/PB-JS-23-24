function validateDTO(dtoSchema, paymentDTO) {
  const keys = Object.keys(dtoSchema);

  keys.forEach((key) => {
    const validator = getValidators(dtoSchema[key]);
    if (!validator(paymentDTO[key])) {
      throw new Error(`Invalid value for key ${key}`);
    }
  });
}

function getValidators(type) {
  const validators = {
    number: (value) => typeof value === 'number',
    string: (value) => typeof value === 'string',
  };

  return validators[type];
}

export { validateDTO };
