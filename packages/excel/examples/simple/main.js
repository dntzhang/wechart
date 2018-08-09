
import cax from 'cax'

import Excel from '../../src/index'

const stage = new cax.Stage(340, 535, '#canvasCtn')

const excel = new Excel([
  [null, 'A', 'B', 'C'],
  [1, 'red border', 'green border including the left border', null],
  [2, ' textBreak auto textBreak auto textBreak auto textBreak auto textBreak auto', 'Toggle textBreak Toggle textBreak Toggle textBreak Toggle textBreak Toggle textBreak Toggle textBreak ', ''],
  [3, 'merge main(show me)', 'merge2', null],
  [4, 'merge3', 'merge4', null],
  [5, null, null, null],
  [6, 'center middle', 'top right', null],
  [7, 'Powered By Wechart & Cax & dntzhang & Tencent', null, null]
], {
  backgroundColor: 'white',
  colWidth: [40, 100, 100, 90],
  rowHeight: [20, 30, 50, 30, 50, 60, 60, 60],
  merge: [
    [1, 3, 2, 2],
    [1, 7, 3, 1]
  ],
  style: null
  // todo 自动标注顶部和左边,这里要自动多加一行和一列
  // autoLabelX: false,
  // autoLabelY: false,
  // todo
  // hideGrid: false
})

excel.x = 5
excel.y = 20

excel.setBorder(1, 1, 'red')
// 后设置覆盖前设置的
excel.setBorder(1, 2, 'green')

excel.style[6][2].textAlign = 'right'
excel.style[6][2].verticalAlign = 'top'

excel.style[7][1].color = 'red'
excel.style[7][1].fontSize = '16'

excel.update()

stage.add(excel)

stage.update()

let tag = true

document.getElementById('tgBtn').addEventListener('click', () => {
  excel.style[2][2].textBreak = tag ? 'default' : 'auto'
  tag = !tag
  excel.update()
  stage.update()
})
