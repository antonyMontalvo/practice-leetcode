/*
 * Complete the 'largestArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY samples as parameter.
 */
function largestArea(samples) {
  let i, j;
  let solution = [];

  for (var y = 0; y < samples.length; y++) {
    solution[y] = [];
    for (var x = 0; x < samples.length; x++) {
      solution[y][x] = 0;
    }
  }
  let maxOfSol, maxi, maxj;

  for (i = 0; i < samples.length; i++) solution[i][0] = samples[i][0];

  for (j = 0; j < samples.length; j++) solution[0][j] = samples[0][j];

  for (i = 1; i < samples.length; i++) {
    for (j = 1; j < samples.length; j++) {
      if (samples[i][j] == 1)
      solution[i][j] =
          Math.min(solution[i][j - 1], Math.min(solution[i - 1][j], solution[i - 1][j - 1])) + 1;
      else solution[i][j] = 0;
    }
  }

  maxOfSol = solution[0][0];
  maxi = 0;
  maxj = 0;
  for (i = 0; i < samples.length; i++) {
    for (j = 0; j < samples.length; j++) {
      if (maxOfSol < solution[i][j]) {
        maxOfSol = solution[i][j];
        maxi = i;
        maxj = j;
      }
    }
  }

  let total = 0;
  for (i = maxi; i > maxi - maxOfSol; i--) {
    for (j = maxj; j > maxj - maxOfSol; j--) {
      total += samples[i][j];
    }
  }

  return Math.sqrt(total);
}

function main() {
  console.log(
    largestArea([
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ])
  );
}

main();
