/**
 * Created by cooper on 2023/7/27.
 */

// <ul id="ul" style="height: 100px">
//   <li>1</li>
//   <li>2</li>
//   ...
// </ul>

const ulDom = document.getElementById('ul')

const ulHeight = 100
const itemHeight = 20
const data = []

const offset = Math.ceil(ulHeight / itemHeight)

for (let i = 0; i < 1000; i++) {
  data.push(i)
}

function calculate() {
  const startIndex = Math.ceil(ulDom.scrollTop / itemHeight)
  const endIndex = offset + startIndex
  const ulChildren = Array.from(ulDom.getElementsByTagName('li'))
  let curUlHtml = ''

  for (let i = startIndex; i < endIndex; i++) {
    const isExist = ulChildren.find(item => item.innerText === data[i])
    if (!isExist) {
      curUlHtml += `<li>${data[i]}</li>`
    }
  }

  ulDom.innerHTML = curUlHtml
}

ulDom.addEventListener('scroll', calculate)
