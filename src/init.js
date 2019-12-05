import axios from 'axios'
import fingerprint from 'fingerprintjs2'

function fingerPrint () {
  return (new Promise((resolve) => {
    fingerprint.get(components => {
      const fp = fingerprint.x64hash128(
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
