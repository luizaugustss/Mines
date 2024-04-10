 export function number_mine(wid, len, matriz, width_board, length_board) {


  var test = [1, 1, 1,
    1, 1, 1,
    1, 1, 1];


  if (wid + 1 >= width_board) {


    test[6] = 0;
    test[7] = 0;
    test[8] = 0;
  }
  if (wid <= 0) {


    test[0] = 0;
    test[1] = 0;
    test[2] = 0;

  }
  if (len + 1 >= length_board) {


    test[2] = 0;
    test[5] = 0;
    test[8] = 0;
  }
  if (len <= 0) {



    test[0] = 0;
    test[3] = 0;
    test[6] = 0;
  }

  var cont = 0;
  for (let index = 0; index < test.length; index++) {

    if (test[index] > 0) {

      switch (index) {
        case 0:

          if (matriz[wid - 1][len - 1] == 1) {
            cont++;
          }
          break;
        case 1:

          if (matriz[wid - 1][len] == 1) {

            cont++;
          }

          break;
        case 2:

          if (matriz[wid - 1][len + 1] == 1) {
            cont++;
          }

          break;
        case 3:

          if (matriz[wid][len - 1] == 1) {
            cont++;
          }

          break;
        case 4:

          if (matriz[wid][len] == 1) {
            cont = cont - 99;
          }

          break;
        case 5:
          if (matriz[wid][len + 1] == 1) {
            cont++;
          }

          break;

        case 6:
          if (matriz[wid + 1][len - 1] == 1) {
            cont++;
          }

          break;
        case 7:
          if (matriz[wid + 1][len] == 1) {
            cont++;
          }

          break;
        case 8:
          if (matriz[wid + 1][len + 1] == 1) {
            cont++;
          }

          break;
        default:
          break;

      }
    }
  }
  console.log("total: " + cont);
  return cont;
}
