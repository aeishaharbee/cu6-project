// SOLUTOIN 1
// Time Complexity: O(n)
// Space Complexity: O(k)
function maxSlidingWindow(nums, k) {
  let deque = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (deque.length && deque[0] < i - k + 1) {
      deque.shift();
    }

    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop();
    }

    deque.push(i);

    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5], 3));

// SOLUTION 2
// Time Complexity: O(n*k)
// Space Complexity: O(n)
function maxSlidingWindow2(nums, k) {
  let result = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let maxInWindow = nums[i];

    for (let j = 1; j < k; j++) {
      maxInWindow = Math.max(maxInWindow, nums[i + j]);
    }

    result.push(maxInWindow);
  }

  return result;
}
console.log(maxSlidingWindow2([1, 3, -1, -3, 5, 3, 6, 7], 3));
