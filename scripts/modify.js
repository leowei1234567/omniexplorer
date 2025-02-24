const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../node_modules/@33cn/chain33-rpc-api/dist/index.js');

// 读取文件内容
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件失败', err);
    return;
  }

  // 替换 'Chain33' 为 'Omnilink'
  const result = data.replace(/Chain33/g, 'Omnilink');

  // 写回文件
  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) {
      console.error('写入文件失败', err);
    } else {
      console.log('文件修改成功: Chain33 -> Omnilink');
    }
  });
});
