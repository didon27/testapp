const express = require('express')
const shell = require('shelljs');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const txId = '0x37d8f4b1b371fde9e4b1942588d16a1cbf424b7c66e731ec915aca785ca2efcf';
  const message = {
    aps: {
      alert: {
        title: 'Transaction',
        body: `Transaction ${txId}`,
        txId,
      },
    }
  }
  shell.exec(`echo '${JSON.stringify(message)}' | xcrun simctl push booted org.reactjs.native.example.TestApp -`);
  res.send('')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})