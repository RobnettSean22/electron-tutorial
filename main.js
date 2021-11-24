const { app, BrowserWindow } = require("electron");

const path = require("path");
const creatWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(_dirname, "preload.js"),
    },
  });
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  creatWindow();
  //macOS apps generally continue running even without any windows open, and activating the app when no windows are available should open a new one.
  app.whenReady().then(() => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
