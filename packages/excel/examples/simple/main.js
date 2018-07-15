
import cax from 'cax'

import Excel from '../../src/index'

const stage = new cax.Stage(740, 520, 'body')

//todo rows 里面的 text 去掉

const excel = new Excel([
  [null, 'A', 'B'],
  [1, null, null],
  [2, 2, 'sdfds'],
  [3, null, null],
  [4, 'sdfsf', null],
  [5, null, null],
  [6, null, null],
  [7, 'center middle', 'bottom right']
], {
    colWidth: [40, 200, 200],
    rowHeight: [20, 30, 30, 30, 50, 60, 60, 60],
    merge: [
      [0, 3, 2, 1],
      [1, 5, 1, 2]
    ],
    style: null
  })

excel.x = 30
excel.y = 30
//excel.hideRows([1,2])
//excel.hideCols([1])

stage.add(excel)
stage.update()
