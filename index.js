const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  res.send(upperCaseName);
});

app.get('/fullname', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + ' ' + lastName;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let date = month + ', ' + year;
  res.send(date);
});

// app.get('/greet', (req, res) => {
//   let name = req.query.name;
//   let greetingMessage = 'Namaste, ' + name + '!';
//   res.send(greetingMessage);
// });

app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ', ' + city + ', ' + state;
  res.send(address);
});

app.get('/email', (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let email = username + '@' + domain;
  res.send(email);
});

app.get('/total-distance', (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);
  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString());
});

app.get('/total-time', (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);
  let totalTime = time1 + time2 + time3;
  res.send(totalTime.toString());
});

app.get('/average-speed', (req, res) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);
  let averageSpeed = totalDistance / totalTime;
  res.send(averageSpeed.toString());
});

app.get('/eta', (req, res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);
  let eta = distance / speed;
  res.send(eta.toString());
});

app.get('/total-calories', (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);
  let totalCalories = (duration1 + duration2) * caloriesPerMinute;
  res.send(totalCalories.toString());
});

app.get('/interest-earned', (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);
  let interestEarned = (principal * rate * time) / 100;
  res.send(interestEarned.toString());
});

app.get('/check-number', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number >= 0) {
    result = 'positive';
  } else {
    result = 'negative';
  }
  res.send('Number is ' + result);
});

app.get('/check-even-odd', (req, res) => {
  let number = parseInt(req.query.number);
  let result = number % 2 === 0 ? 'even' : 'odd';
  res.send('Number is ' + result);
});

app.get('/check-login', (req, res) => {
  let isLoggedIn = req.query.isLoggedIn === 'true';
  let result;
  if (isLoggedIn) {
    result = 'User is logged in';
  } else {
    result = 'User is not logged in';
  }
  res.send(result);
});

app.get('/check-discount', (req, res) => {
  let age = parseFloat(req.query.age);
  let result;
  if (age > 65) {
    result = 'User is eligible for discount';
  } else {
    result = 'User is not eligible for discount';
  }
  res.send(result);
});

app.get('/check-number-type', (req, res) => {
  let number = parseFloat(req.query.number);
  let result;
  if (number > 0) {
    result = 'positive';
  } else if (number < 0) {
    result = 'negative';
  } else {
    result = 'zero';
  }
  res.send('Number is ' + result);
});

app.get('/check-temperature', (req, res) => {
  let temperature = parseFloat(req.query.temperature);
  let result;
  if (temperature < 15) {
    result = 'cold';
  } else if (temperature < 25) {
    result = 'warm';
  } else {
    result = 'hot';
  }
  res.send('Temperature is ' + result);
});

app.get('/check-activity-level', (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result;
  if (steps < 5000) {
    result = 'low';
  } else if (steps < 10000) {
    result = 'moderate';
  } else {
    result = 'high';
  }
  res.send('Activity level is ' + result);
});

app.get('/check-engagement', (req, res) => {
  let likes = parseFloat(req.query.likes);
  let result;
  if (likes < 100) {
    result = 'low';
  } else if (likes < 500) {
    result = 'medium';
  } else {
    result = 'high';
  }
  res.send('Activity level is ' + result);
});

function getWelcomeMessage() {
  return 'Welcome to our service!';
}

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  let greeting = 'Hello, ' + username + '!';
  return greeting;
}

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function getPasswordStrength(password) {
  if (password.length > 15) {
    return 'Password is strong.';
  } else {
    return 'Password is weak.';
  }
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(getPasswordStrength(password));
});

function getSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2));
});

function getSubscriptionStatus(username, isSubscribed) {
  if (isSubscribed === 'true') {
    return username + ' is subscribed';
  } else {
    return username + ' is not subscribed';
  }
}

app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(getSubscriptionStatus(username, isSubscribed));
});

function discountedPrice(price, discount) {
  return (price - (price * discount) / 100).toString();
}

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(discountedPrice(price, discount));
});

function getPersonalizedGreeting(age, gender, name) {
  return 'Hello, ' + name + ' You are a ' + age + ' year old ' + gender;
}

app.get('/personalized-greeting', (req, res) => {
  let age = req.query.age;
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

function finalPrice(price, discount, tax) {
  let discountedPrice = price - (price * discount) / 100;
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(finalPrice(price, discount, tax));
});

function totalExerciseTime(running, cycling, swimming) {
  return (running + cycling + swimming).toString();
}

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(totalExerciseTime(running, cycling, swimming));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
