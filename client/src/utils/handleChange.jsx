export const handleChange = (event, fn, setImage, formData) => {
  const { name, value, files } = event.target;
  if (name === "image") {
    const imageUrl = URL.createObjectURL(files[0]);
    setImage(imageUrl);
    fn({
      ...formData,
      [name]: files[0],
    });
  } else {
    fn({
      ...formData,
      [name]: value,
    });
  }
};
