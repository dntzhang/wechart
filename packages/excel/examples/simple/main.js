
import cax from 'cax'

import Excel from '../../src/index'

const stage = new cax.Stage(740, 520, 'body')


//todo 搞个漂亮的样式实现一下

const excel = new Excel([
  [null, 'A', 'B','C'],
  [1, null, null, null],
  [2, '123AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA123AAAAAAA', '123AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', ''],
  [3, 'merge1', 'merge2', null],
  [4, 'merge3', 'merge3', null],
  [5, null, null, null],
  [6, null, null, null],
  [7, 'center middle', 'bottom right', null]
], {
    colWidth: [40, 200, 200,130],
    rowHeight: [20, 30, 100, 30, 50, 60, 60, 60],
    merge: [
      [1, 3, 2, 2]
    ],
    style: null,
    //todo 自动标注顶部和左边,这里要自动多加一行和一列
    autoLabelX: false,
    autoLabelY: false,
    //todo
    hideGrid: false
  })

excel.x = 20
excel.y = 20

excel.setBorder(1,2,'green')
excel.setBorder(1,1,'red')

excel.update()
//excel.hideRows([1,2])
//excel.hideCols([1])

stage.add(excel)

stage.update()
