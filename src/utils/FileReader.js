const readFileAsync = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      console.log(reader);
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  })
}

export default readFileAsync