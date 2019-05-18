function Point(x, y) {

    this.x = x;
    this.y = y;
    var hamada = 3;
    var that = this;
    this.Draw = function (ctx) {
        ///<param name="ctx" type="CanvasRenderingContext2D"/>
        ctx.beginPath()
        ctx.arc(that.x, that.y, 10, 0, 3.14159268 * 2);
        ctx.fill();
        ctx.closePath();
    }

    this.IsMouseOver = function (x, y) {
        var dy = y - that.y;
        var dx = x - that.x;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < 10) {
            return true;
        }
        return false;
    }
}

