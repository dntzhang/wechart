
import cax from 'cax'

import Excel from '../../src/index'

const stage = new cax.Stage(740, 520, 'body')

//todo rows 里面的 text 去掉

const excel = new Excel([
  ['top left', 'top middle', 'top right'],
  [null, null, null],
  ['sdfdsf', 2, 'sdfds'],
  [null, null, null],
  [null, 'sdfsf', null],
  [null, null, null],
  [null, null, null],
  ['bottom left', 'bottom middle', 'bottom right']
], {
    colWidth: [200, 200, 200],
    rowHeight: [20, 30, 30, 30, 50, 60, 60, 60],
    merge: [
      [0, 3, 2, 1],
      [1, 5, 1, 2]
    ],
    rows: [
      [{
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1,
          type:null,
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "red",
        fontFamily: "Verdana",
        fontSize: 10,
        text: "textAlign left verticalAlign middle textBreak auto ",
        textAlign: "left",
        verticalAlign: "middle",
        textBreak: 'auto'
      }, {
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "green",
        fontFamily: "Verdana",
        fontSize: 20,
        text: null,
        textAlign: "right",
        verticalAlign: "top",
        textBreak: 'auto'
      }, {
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "green",
        fontFamily: "Verdana",
        fontSize: 10,
        text: "textAlign right verticalAlign top textBreak auto",
        textAlign: "right",
        verticalAlign: "top",
        textBreak: 'auto'
      }],
      [{
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "blue",
        fontFamily: "Verdana",
        fontSize: 10,
        text: null,
        textAlign: "center",
        verticalAlign: "bottom",
        textBreak: 'hidden'
      }, {
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "black",
        fontFamily: "Verdana",
        fontSize: 10,
        text: "textAlign center verticalAlign middle textBreak default",
        textAlign: "center",
        verticalAlign: "middle",
        textBreak: 'hidden'
      }, {
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "green",
        fontFamily: "Verdana",
        fontSize: 10,
        text: "textAlign left verticalAlign bottom textBreak auto",
        textAlign: "left",
        verticalAlign: "bottom",
        textBreak: 'auto'
      }],
      [{
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "blue",
        fontFamily: "Verdana",
        fontSize: 10,
        text: null,
        textAlign: "center",
        verticalAlign: "bottom",
        textBreak: 'hidden'
      }, {
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "black",
        fontFamily: "Verdana",
        fontSize: 20,
        text: "sdfsdfsdfsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssasfdsfsdfdsaaaadsfds",
        textAlign: "center",
        verticalAlign: "middle",
        textBreak: 'default'
      }, {
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "green",
        fontFamily: "Verdana",
        fontSize: 10,
        text: null,
        textAlign: "center",
        verticalAlign: "bottom",
        textBreak: 'auto'
      }],
      [{
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "blue",
        fontFamily: "Verdana",
        fontSize: 10,
        text: 'textAlign center',
        textAlign: "center",
        verticalAlign: "bottom",
        textBreak: 'hidden'
      }, {
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "black",
        fontFamily: "Verdana",
        fontSize: 15,
        text: "textAlign center",
        textAlign: "center",
        verticalAlign: "middle",
        textBreak: 'default'
      }, {
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "black",
        fontFamily: "Verdana",
        fontSize: 10,
        text: 'textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto',
        textAlign: "right",
        verticalAlign: "bottom",
        textBreak: 'auto'
      }],
      [{
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "blue",
        fontFamily: "Verdana",
        fontSize: 10,
        text: 'textAlign left',
        textAlign: "left",
        verticalAlign: "bottom",
        textBreak: 'hidden'
      }, {
        backgroundColor: "#fff",
        borderLeft: {
          color: 'red',
          level: 1
        },
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "black",
        fontFamily: "Verdana",
        fontSize: 15,
        text: "textAlign center",
        textAlign: "center",
        verticalAlign: "middle",
        textBreak: 'default'
      }, {
        backgroundColor: "#fff",
        borderLeft: null,
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "black",
        fontFamily: "Verdana",
        fontSize: 10,
        text: 'textAlign right',
        textAlign: "right",
        verticalAlign: "bottom",
        textBreak: 'auto'
      }],
      [{
        backgroundColor: "#fff",
        borderLeft: null,
        borderRight: null,
        borderTop: null,
        borderBottom: null,
        color: "blue",
        fontFamily: "Verdana",
        fontSize: 10,
        text: 'textAlign left',
        textAlign: "left",
        verticalAlign: "bottom",
        textBreak: 'hidden'
      }, {
        backgroundColor: "#fff",
        color: "black",
        fontFamily: "Verdana",
        fontSize: 15,
        text: "textAlign center",
        textAlign: "center",
        verticalAlign: "middle",
        textBreak: 'default'
      }, {
        backgroundColor: "#fff",
        color: "black",
        fontFamily: "Verdana",
        fontSize: 10,
        text: 'textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto',
        textAlign: "right",
        verticalAlign: "bottom",
        textBreak: 'auto'
      }],
      [{
        backgroundColor: "#fff",
        color: "blue",
        fontFamily: "Verdana",
        fontSize: 10,
        text: 'textAlign left',
        textAlign: "left",
        verticalAlign: "bottom",
        textBreak: 'hidden'
      }, {
        backgroundColor: "#fff",
        color: "black",
        fontFamily: "Verdana",
        fontSize: 15,
        text: "textAlign center",
        textAlign: "center",
        verticalAlign: "middle",
        textBreak: 'default'
      }, {
        backgroundColor: "#fff",
        color: "black",
        fontFamily: "Verdana",
        fontSize: 10,
        text: 'textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto',
        textAlign: "right",
        verticalAlign: "bottom",
        textBreak: 'auto'
      }],
      [{
        backgroundColor: "#fff",
        color: "blue",
        fontFamily: "Verdana",
        fontSize: 10,
        text: 'textAlign left',
        textAlign: "left",
        verticalAlign: "bottom",
        textBreak: 'hidden'
      }, {
        backgroundColor: "#fff",
        color: "black",
        fontFamily: "Verdana",
        fontSize: 15,
        text: "textAlign center",
        textAlign: "center",
        verticalAlign: "middle",
        textBreak: 'default'
      }, {
        backgroundColor: "#fff",
        color: "black",
        fontFamily: "Verdana",
        fontSize: 10,
        text: 'textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto textAlign right verticalAlign bottom textBreak auto',
        textAlign: "right",
        verticalAlign: "bottom",
        textBreak: 'auto'
      }]
    ]
  })

  excel.x = 30
  excel.y = 30
//excel.hideRows([1,2])

//excel.hideCols([1])

stage.add(excel)
stage.update()
