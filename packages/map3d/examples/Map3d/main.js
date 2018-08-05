/**
 *
 * @Date: 2018/8/4
 * @author: twist
 *
 */

import axios from "axios";
import Map3D from "../../src/index";
import createTip from "../../common/createTip";

axios
  .get("../../common/china.json")
  .then(res => {
    let geoData = res.data;
    const self = this;

    let opt = {
      name: "map1",
      el: document.querySelector("#canvas"),
      geoData,
      // debugger: true,
      area: {
        data: [],
        color: 0x052659,
        lineColor: 0x1481ba
      },
      mark: {
        data: [],
        color: 0xffffff
      },
      line: {
        data: []
      },
      dataRange: {
        data: [
          { name: "高", min: 90, color: 0x0066e4 },
          { name: "高", min: 80, max: 90, color: 0x207be6 },
          { name: "中", min: 60, max: 80, color: 0x329de8 },
          { name: "低", max: 60, min: 30, color: 0x66b6fd }
        ]
      }
    };

    //添加区域数据
    geoData.features.forEach(i => {
      //线数据
      opt.area.data.push({
        name: i.properties.name,
        value: Math.random() * 100,
        color: 0x3399ff
        //loadEffect:true,
      });
    });

    let map = new Map3D(opt);
    map.setCameraPosition({ x: -2, y: -26, z: 30 }, 1000, 300);

    map.addEventListener("mouseout", function(event) {
      createTip.target = null;
      createTip.ClearDiv();
    });
    map.addEventListener("mouseover", function(event) {
      // 添加 div
      createTip.target = this;
      createTip.longer = new Date().getTime();
      createTip.exist = false;
      //获取坐标
      createTip.winEvent = {
        x: event.clientX,
        y: event.clientY - 20
      };
      createTip.boxHeight = 50;
      createTip.boxWidth = 80;

      //hide
      createTip.ClearDiv();
      //show
      createTip.hoverTimerFn(createTooltipTableData(event.target));
    });

    map.addEventListener("resize", function(event) {
      console.log("map resize...");
    });

    function createTooltipTableData(info) {
      let ary = [];
      ary.push("<div id='tip-hill-div'>");
      ary.push("<h1>" + info.name + "</h1>");
      ary.push("</div>");
      return ary.join("");
    }
    // map.addCameraPosition({x:-30,y:15,z:15},1000)
    //map.setPosition({x:-13,y:0,z:35})
  })
  .catch(error => {
    console.log("加载地图资源出错", error);
  });
