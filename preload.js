window.addEventListener("DOMContentLoaded", () => {
  const replaceText = (slector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };
  for (const dependency of ["chrom", "node", "electron"]) {
    replaceText(`${dependency}-version`, process.versions[dependency]);
  }
});
