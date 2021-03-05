window.onload = () => {
  console.log('hello world')
}

function show(eleId) {
  let ele = document.getElementById(eleId)
  ele.style.display = ''
}

function hide(eleId) {
  let ele = document.getElementById(eleId)
  setTimeout(() => {
    ele.style.display = 'none'
  }, 2000)
}
