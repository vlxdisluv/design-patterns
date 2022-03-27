interface AreaCalculable {
  areaOf(): number;
}

export class Rectangle implements AreaCalculable {
  constructor(readonly width: number, readonly height: number) {}

  areaOf(): number {
    return this.width * this.height;
  }
}

export class Circle implements AreaCalculable {
  constructor(readonly radius: number) {}

  areaOf(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class AreaCalculator {
  constructor(readonly shapes: AreaCalculable[]) {}

  totalAreaOf(): number {
    return this.shapes.reduce((total: number, shape: AreaCalculable) => {
      return (total += shape.areaOf());
    }, 0);
  }
}
