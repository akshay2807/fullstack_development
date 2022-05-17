// function hex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`
// }


// //Factory function
// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`
//     }
//     color.hex = function () {
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(35, 255, 150);
// firstColor.rgb();//firstColor.hex();
// firstColor.hex();//"rgb(35, 255, 150)"

// const black = makeColor(0, 0, 0);
// black.rgb(); //"rgb(0, 0, 0)"
// black.hex(); //"0000s00"

//Constructor functions
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     console.log(this);
// }
//new Color(255, 41, 50)

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`
// };

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = funtion(){
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`
// }


// const color1 = new Color(40, 255, 60);
// const color2 = new Color(0, 0, 0);

//Javascript Functions
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
        // console.log('Inside Constructor')
        // console.log(r, g, b);
    }
    innerRGB() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
        //255,255,255
    }
    rgb() {
        // const { r, g, b } = this;
        // return `rgb(${r}, ${g}, ${b})`;
        return `rgb (${this.innerRGB()})`;
    }
    rgba(a = 1.0) {
        return `rgb(${this.innerRGB()}, ${a})`
    }
    hex() {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%,${l}%)`;
    }
    fullySaturated() {
        const { h, l } = this;
        return `hsl(${h},100%,${l}%)`;
    }
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue},${s}%,${l}%)`;
    }
    calcHSL() {
        let { r, g, b } = this;
        //make r, g, & b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        //finding greatest & smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta == 0) h = 0;
        else if (cmax == r)
            //red is max
            h = ((g - b) / delta % 6);
        //green is max
        else if (cmax == g)
            //green is max
            h = (b - r) / delta + 2;
        else
            //Blue is max
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);
        //Make negative hues positive behind 360
        if (h < 0) h += 360;
        //calculate lightness
        l = (cmax + cmin) / 2;

        //Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        //multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
    // greet() {
    //     return `Hello form ${this.name}!`;
    // }//were grouping everthing inside a class 
}
const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 67, 89, 'white');


