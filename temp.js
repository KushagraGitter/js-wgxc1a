// Javascript program to
// count pairs with difference k

/* Returns count of pairs with
difference k in arr[] of size n. */
function countPairsWithDiffK(arr, n, k) {
  let count = 0;
  arr.sort(); // Sort array elements

  let l = 0;
  let r = 0;
  while (r < n) {
    if (arr[r] - arr[l] == k) {
      count++;
      l++;
      r++;
    } else if (arr[r] - arr[l] > k) l++;
    // arr[r] - arr[l] < sum
    else r++;
  }
  return count;
}

// Driver program

let arr = [1, 1, 1, 1, 1];
let n = arr.length;
let k = 0;
document.write(
  'Count of pairs with given diff is ' + countPairsWithDiffK(arr, n, k)
);
