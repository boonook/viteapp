export default function loadScript(src) {
  return new Promise(function (resolve:any, reject:any) {
    const tag = document.getElementsByTagName('script')
    for (let i of tag) {
      if (i.src === src) {
        resolve()
        return
      }
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = src
    script.onerror = reject
    document.body.appendChild(script)
    script.onload = () => {
      resolve()
    }
  })
}
