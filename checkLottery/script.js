function generateLottery() {
  array = new Array(6);

  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * 49) + 1;
    while (array.includes(num)) num = Math.floor(Math.random() * 49) + 1;
    array[i] = num;
  }

  document.getElementById("answer").value = 
            " " + array[0] + " - " + array[1] + " - " + array[2] 
            + " - " + array[3] + " - " + array[4] + " - " + array[5];
}
