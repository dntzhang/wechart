var AstarView = function (canvas) {

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = 25;
    this.start = null;
    this.end = null;
    this.map = [];

    this.beginPosition = [0, 0];
    this.dy = (this.canvas.height - this.beginPosition[1] * 2) / this.size;
    this.dx = (this.canvas.width - this.beginPosition[0] * 2) / this.size;

    this.blocks = [];
    this.init();

    
}

AstarView.prototype = {
    init: function () {
        this.renderBlackground();
        this.createMap();
        this.renderBlocks(150);
    },
    renderRect: function (x, y) {
        this.ctx.fillRect(this.dx * x, + this.dy * y, this.dx, this.dy);

    },
    renderPath: function (path) {
        var self = this;
        setTimeout(function () {
            var point = path.shift();
            self.ctx.fillRect( self.dx * point.x,  self.dy * point.y, self.dx, self.dy);
            if (path.length > 0) self.renderPath(path);
        }, 60);
    },
    removePath: function () {
        this.ctx.fillStyle = "black";
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.renderBlackground();
        for (var i = 0, len = this.blocks.length; i < len; i++) {
            var block = this.blocks[i];
            this.ctx.fillRect(this.dx * block[0],  this.dy * block[1], this.dx, this.dy);

        }
    },
    renderBlocks: function (count) {


        for (var i = 0; i < count; i++) {
            var x = this.getRandomNumber(0, 24);
            var y = this.getRandomNumber(0, 24);
            this.map[y][x] = 1;
            this.blocks.push([x, y]);
            this.ctx.fillRect( this.dx * x,  this.dy * y, this.dx, this.dy);
        }

    },
    createMap: function () {
        for (var i = 0; i < 25; i++) {
            var vtcArr = [];
            for (var j = 0; j < 25; j++) {
                vtcArr.push(0);
            }
            this.map.push(vtcArr)
        }
    },
    getRandomNumber: function (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    },
    renderBlackground: function () {

        var lastX = this.beginPosition[0] + this.dx * this.size, lastY = this.beginPosition[1] + this.dy * this.size;
        this.ctx.beginPath();
        for (var i = 0; i < this.size + 1; i++) {
            this.ctx.moveTo(this.beginPosition[0], this.beginPosition[1]);
            this.ctx.lineTo(lastX, this.beginPosition[1]);
            this.beginPosition[1] += this.dy;
        }

        this.beginPosition = [0, 0];
        for (var i = 0; i < this.size + 1; i++) {
            this.ctx.moveTo(this.beginPosition[0], this.beginPosition[1]);
            this.ctx.lineTo(this.beginPosition[0], lastY);
            this.beginPosition[0] += this.dx;
        }
        this.beginPosition = [0, 0];
        this.ctx.stroke();

    },
    getOffset: function (element) {
        var rect = element.getBoundingClientRect();
        return [rect.left + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), rect.top + Math.max(document.documentElement.scrollTop, document.body.scrollTop)]
    }
}