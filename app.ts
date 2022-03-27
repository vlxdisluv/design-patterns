import { AreaCalculator, Circle, Rectangle } from "./open-close-principle";

const circle1 = new Circle(50);
const rectangle1 = new Rectangle(50, 100);

const areaCalculator = new AreaCalculator([circle1, rectangle1]);

console.log("result", areaCalculator.totalAreaOf());
