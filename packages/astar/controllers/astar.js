var AstarController = function (view) {
    this.view = view;
    this.model = new AstarModel(view.map);
    this.state = 0;
}

AstarController.prototype = {
    input: function (x, y) {
        this.view.ctx.fillStyle = "red";

        switch (this.state) {
            case 0:
                if (this.view.map[y][x]) return;
                this.setStart(x, y);
                this.state++;
                break;
            case 1:
                if (this.view.map[y][x]) return;
                if (this.setEnd(x, y)) {
                    this.state++;
                }
                break;
            case 2:
                this.reset();
                this.state = 0;
                break;
        }
    },
    setStart: function (x, y) {
        this.view.start = { x: x, y: y };
        this.view.renderRect(x, y);
    },
    setEnd: function (x, y) {
        this.view.end = { x: x, y: y };
        this.model.isFourDir = document.querySelector("#dirCbx").checked
        var path = this.model.getPath(this.view.start, this.view.end);
        if (path) {
            this.view.renderPath(path);
            return true;
        } else {
            alert("不可到达");
        }
    },
    reset: function () {
        this.view.removePath();
    }
}
