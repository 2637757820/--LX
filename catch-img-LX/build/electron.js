const { ipcMain, app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

// 窗口
let win;

// 获取打开的文件路径
const getOpenLocation = (argv = process.argv, cwd = process.cwd()) => {
  // ipcMain.on('getLocation', (event, arg) => {
  //   event.sender.send({ argv,cwd })
  // })
  ipcMain.on('getLocation', (event,arg) => {
    console.log('aaaaaaaaaaaaaaaaa')
    console.log(arg)
    event.sender.send('getLocation-apply', { argv,cwd })
  })
}

// 创建窗口
const createWindow = () => {

  getOpenLocation()

  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // 加载react应用
  win.loadURL(`file://${__dirname}/react/index.html`);
  // 添加window关闭触发事件
  win.on('closed', () => {
    win = null;
  });
};

// 初始化后调用creatWindow
app.on('ready', createWindow);
// 当全部窗口关闭时退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll();
});
app.on('activate', () => {
  if (win === null) createWindow();
});

ipcMain.on('close', e => win.close());
// globalShortcut.register('a',()=>{console.log('wdinowwwww')
// })
