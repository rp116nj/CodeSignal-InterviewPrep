// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
function rotateImage(a) {
  for (let i = 0; i < a.length / 2; i++) {
    for (let j = i; j < a.length - 1 - i; j++) {
      let temp = a[i][j];
      a[i][j] = a[a.length - 1 - j][i];
      a[a.length - 1 - j][i] = a[a.length - 1 - i][a.length - 1 - j];
      a[a.length - 1 - i][a.length - 1 - j] = a[j][a.length - 1 - i];
      a[j][a.length - 1 - i] = temp;
    }
  }
  return a;
}
