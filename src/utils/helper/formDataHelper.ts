export function consoleFormData(formData:FormData){
    for (const [key, value] of formData.entries()) {
  console.log(key, value);
}
}