export class Tyre {
    constructor(width, height, rimDiameter) {
        this.width  = width;
        this.height = height; 
        this.rimDiameter = rimDiameter;
    }

    calcHeight() {
        return Math.round(this.width * (this.height / 100));
    }

    calcRimDiameter() {
        return Math.round((this.rimDiameter * 2.54) * 10);
    }

    totalHeight() {
        return Math.round((this.calcHeight() * 2) + this.calcRimDiameter());
    }


}