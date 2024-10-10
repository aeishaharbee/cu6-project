// SOLUTION 1
// Time Complexity: O(m*n)
// Space Complexity: O(m*n)
function calculateMinimumHP(dungeon) {
  const row = dungeon.length;
  const col = dungeon[0].length;

  const minHealth = Array.from({ length: row + 1 }, () =>
    Array(col + 1).fill(Infinity)
  );

  minHealth[row][col - 1] = minHealth[row - 1][col] = 1;

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      const minHealthNeeded =
        Math.min(minHealth[i + 1][j], minHealth[i][j + 1]) - dungeon[i][j];
      minHealth[i][j] = Math.max(1, minHealthNeeded);
    }
  }

  return minHealth;
}
console.log(
  calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ])
);

// SOLUTION 2
// Time Complexity: O(m*n)
// Space Complexity: O(n)
function calculateMinimumHP2(dungeon) {
  const row = dungeon.length;
  const col = dungeon[0].length;

  const minHealth = new Array(col + 1).fill(Infinity);
  minHealth[col - 1] = 1; // at least 1 health

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      const minHealthNeeded =
        Math.min(minHealth[j], minHealth[j + 1]) - dungeon[i][j];
      minHealth[j] = Math.max(1, minHealthNeeded);
    }
  }

  return minHealth[0];
}
console.log(
  calculateMinimumHP2([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ])
);
