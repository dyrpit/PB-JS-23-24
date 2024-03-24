const objects = [
  {
    x: 1,
    y: 'object one value',
    operation() {
      return 'object one prefix ' + this.x + this.y;
    },
  },
  {
    x: 2,
    y: 'object two value',
    operation() {
      return 'object two prefix ' + this.x + this.y;
    },
  },
  {
    x: 3,
    y: 'object three value',
    operation() {
      return 'object three prefix ' + this.x + this.y;
    },
  },
];

for (let i = 0; i < objects.length; i++) {
  const currentObject = objects[i];
  const nextObject = objects[(i + 1) % objects.length];

  const result = currentObject.operation.call(nextObject);
  console.log(result);
}
