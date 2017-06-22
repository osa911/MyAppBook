import LIVR from 'livr';

LIVR.Validator.defaultAutoTrim(true);

const newBookSchema = {
  name: ['required', 'string'],
  author: ['required', 'string'],
  desc: ['string']
};

export const newBookValidator = new LIVR.Validator(newBookSchema);
