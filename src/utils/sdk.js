export const getConditional = (json, fields, info) => {
  if (!info.conditional) return true;
  const jsonField = json.filter((j) => j.name === info.conditional.name)[0];
  const field = fields.filter((f) => f.name[0] === info.conditional.name)[0];
  if (!field || !jsonField) return false;

  const value = () => {
    switch (jsonField.type) {
      case 'date':
        return new Date(field.value);
      default:
        return field.value;
    }
  };
  const isShow = info.conditional.show_if(value());
  return isShow;
};
