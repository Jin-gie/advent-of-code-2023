
async function readInputByLines(fileURL) {
  try {
    const response = await fetch(fileURL);
    const text = await response.text();
    
    return text.split("\r\n");
  } catch (error) {
    console.error(error);
    return null;
  }
}