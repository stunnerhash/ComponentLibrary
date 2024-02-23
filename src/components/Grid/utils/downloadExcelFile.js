
export const downloadExcelFile = (buffer, fileName) => {
  const data = new Blob([buffer], { type: 'application/octet-stream' });
  const url = window.URL.createObjectURL(data);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};