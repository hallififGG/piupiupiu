// Класс бонуса (подарок)
class PowerUp {
    constructor(relX, relY, type) {
        this.relX = relX; this.relY = relY; this.type = type;
        this.wRel = 0.0225; this.hRel = 0.03;
    }
    getAbs(canvasWidth, canvasHeight) {
        return {
            x: this.relX * canvasWidth, y: this.relY * canvasHeight,
            w: this.wRel * canvasWidth, h: this.hRel * canvasHeight
        };
    }
}