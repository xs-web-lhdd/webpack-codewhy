import '../css/index.css'
import '../css/component.less'

import BGIMG from '../img/baidu-background-mine.png'

function component() {
  const element = document.createElement('div')
  element.innerHTML = ['Hello', 'webpack'].join(' ')
  element.className = 'content'

  // 创建一个 img 的标签
  const imgEl = new Image()
  imgEl.src = BGIMG
  imgEl.style.width = '300px'
  imgEl.style.height = '200px'
  element.appendChild(imgEl)

  // 创建一个 div 用来设置背景图片
  const bgDiv = document.createElement('div')
  bgDiv.className = 'bg-image'
  bgDiv.style.width = '300px'
  bgDiv.style.height = '200px'
  element.appendChild(bgDiv)

  return element
}


document.body.appendChild(component())
