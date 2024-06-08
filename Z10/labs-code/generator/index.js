function* trafficLights() {
  let state = yield 'Initializing traffic light';

  while (true) {
    switch (state) {
      case 'yellow':
        console.log('Yellow light!');
        yield state;
        state = 'red';
        break;
      case 'red':
        console.log('Red light!');
        yield state;
        state = 'green';
        break;
      case 'green':
        console.log('Green light!');
        yield state;
        state = 'yellow';
        break;
    }
  }
}

const lights = trafficLights();

console.log(lights.next().value); // Initializing traffic light

lights.next('yellow'); // Yellow light!
lights.next(); // Red light!
lights.next(); // Gren light!

// lights.next(); // Yellow light!
// lights.next(); // Red light!
// lights.next(); // Gren light!

// lights.next(); // Yellow light!
// lights.next(); // Red light!
// lights.next(); // Gren light!
