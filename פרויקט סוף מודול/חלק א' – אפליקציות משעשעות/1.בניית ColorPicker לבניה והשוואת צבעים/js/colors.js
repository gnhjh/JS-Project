export default class Color {
    r;
    g;
    b;
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    get rgb() {
        return Color.rgb(this.r, this.g, this.b);
    }
    get hex() {
        return Color.hex(this.r, this.g, this.b);
    }
    toString() {
        return `${this.rgb} ${this.hex}`;
    }
    static rgb(r, g, b) {
        return `rgb(${r},${g},${b})`;
    }
    static hex = (r, g, b) => {
        const redString = r.toString(16).padStart(2, '0');
        const greenString = g.toString(16).padStart(2, '0');
        const blueString = b.toString(16).padStart(2, '0');
        return `#${redString}${greenString}${blueString}`.toUpperCase();
    };
}
