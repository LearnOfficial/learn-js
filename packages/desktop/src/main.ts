import { app, BrowserWindow } from 'electron';

async function main() {
  const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    });
    win.loadURL('https://github.com/LearnOfficial/learn');
  };

  await app.whenReady();
  createWindow();
}

main();
