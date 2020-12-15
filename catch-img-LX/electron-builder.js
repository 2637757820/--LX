module.exports = {
  productName: 'CatchImg',
  appId: 'com.hansomezao.catchimg',
  directories: {
    app: './',
    output: 'dist'
  },
  publish: [
    {
      provider: 'github',
      owner: 'zao',
      repo: 'zao-catch-img'
    }
  ],
  win: {
    icon: 'build/icons/icon.ico',
    target: [
      'nsis',
      // 'zip'
    ]
  },
  nsis: {
    include:'build/installer.nsh',
    shortcutName: 'CatchImg',
    oneClick: false,
    perMachine:true,
    allowToChangeInstallationDirectory: true
  }
};