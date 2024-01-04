export const handleChange = (event, fn, formData) => {
  const { name, value } = event.target;
  fn({
    ...formData,
    [name]: value,
  });
};
