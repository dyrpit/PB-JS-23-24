const rectangle = { height: 20, width: 40 };

const rectProxy = new Proxy(rectangle, {
  get(target, key) {
    if (key === 'area') {
      return target.height * target.width;
    }

    if (key === 'perimeter') {
      return 2 * (target.height + target.width);
    }

    return target[key];
  },
  set(target, key, value) {
    if (key === 'area' || key === 'perimeter') {
      return false;
    }

    target[key] = value;
    return true;
  },
});

console.log(rectProxy.area);
console.log(rectProxy.perimeter);

rectProxy.height = 40;
console.log(rectProxy);
console.log(rectProxy.area);
console.log(rectProxy.perimeter);

const user = {
  name: 'piotr',
  password: '',
  _password: '',
};

const userProxy = new Proxy(user, {
  get(target, key) {
    if (key.startsWith('_')) {
      throw new Error('Cannot access private properties');
    }

    return target[key];
  },
  set(target, key, value) {
    if (key === 'password') {
      target._password = value;
      target.password = '*'.repeat(value.length);
      return true;
    }

    if (key.startsWith('_')) {
      return false;
    }

    target[key] = value;
    return true;
  },
});

userProxy.password = 'hasło masło';

console.log(user.password);
console.log(userProxy.password);
