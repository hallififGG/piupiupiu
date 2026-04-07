// Класс игрока (платформа)
class Player {
    constructor(relWidth = 0.125, relY = 0.92) {
        this.relWidth = relWidth;
        this.heightRel = 0.03;
        this.relX = 0.5 - this.relWidth / 2;
        this.relY = relY;
        this.speedRel = 0.015;
        this.maxRelWidth = 0.28;
        this.minRelWidth = 0.075;
    }
    updateWidth(newRelWidth) {
        this.relWidth = Math.min(this.maxRelWidth, Math.max(this.minRelWidth, newRelWidth));
        this.relX = Math.min(1 - this.relWidth, Math.max(0, this.relX));
    }
    move(dxRel) {
        this.relX = Math.min(1 - this.relWidth, Math.max(0, this.relX + dxRel));
    }
    getAbs(canvasWidth, canvasHeight) {
        return {
            x: this.relX * canvasWidth,
            y: this.relY * canvasHeight,
            w: this.relWidth * canvasWidth,
            h: this.heightRel * canvasHeight
        };
    }
}