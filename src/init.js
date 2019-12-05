import axios from 'axios'
import Fingerprint2 from 'fingerprintjs2'

function fingerPrint () {
  return (new Promise((resolve) => {
    fingerPrintJS2.get(components => {
      const fp = fingerPrintJS2.x64hash128(
        components
          .map(function (pair) {
            return pair.value
          })
          .join(),
        31
      )
      resolve(fp)
    })
  }))
}


async function init () {
  await fingerPrint().then((res) => {
    console.log(res)
  })
}

export default init
