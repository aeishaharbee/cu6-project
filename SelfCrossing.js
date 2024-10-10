// Solution 1
// Time Complexity: O(n)
// Space Complexity: O(1)
function isSelfCrossing(distance) {
  let n = distance.length;

  if (n < 4) return false;

  for (let i = 3; i < n; i++) {
    // fourth
    if (distance[i] >= distance[i - 2] && distance[i - 1] <= distance[i - 3]) {
      return true;
    }

    // fifth
    if (
      i >= 4 &&
      distance[i - 1] === distance[i - 3] &&
      distance[i] + distance[i - 4] >= distance[i - 2]
    ) {
      return true;
    }

    // sixth
    if (
      i >= 5 &&
      distance[i - 2] >= distance[i - 4] &&
      distance[i] + distance[i - 4] >= distance[i - 2] &&
      distance[i - 1] <= distance[i - 3] &&
      distance[i - 1] + distance[i - 5] >= distance[i - 3]
    ) {
      return true;
    }
  }

  return false;
}

console.log(isSelfCrossing([2, 1, 1, 2]));

// SOLUTION 2
// Time Complexity: O(n)
// Space Complexity: O(n)
function isSelfCrossing2(distance) {
  let x = 0,
    y = 0;
  let path = new Map();
  path.set(`0,0`, true);

  const directions = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];
  let dir = 0;

  for (let i = 0; i < distance.length; i++) {
    for (let j = 0; j < distance[i]; j++) {
      x += directions[dir][0];
      y += directions[dir][1];
      if (path.has(`${x},${y}`)) {
        return true;
      }
      path.set(`${x},${y}`, true);
    }
    dir = (dir + 1) % 4;
  }

  return false;
}
console.log(isSelfCrossing2([2, 1, 1, 2]));
