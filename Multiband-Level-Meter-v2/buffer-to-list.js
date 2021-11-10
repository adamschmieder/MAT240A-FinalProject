outlets = 38;
var buffer = new Buffer("METER");
function bang() {
  var list = new Array(buffer.framecount());
  for (var i = 0; i < buffer.framecount(); i++) {
    list[i] = buffer.peek(0, i);
  }
  outlet(0, list);
  //outlet(1, list[0], list[1]);
  //outlet(2, list[2], list[3]);
  //outlet(3, list[4], list[5], list[6]);
  //outlet(4, list[7], list[8], list[9], list[10]);
  //outlet(5, list[11], list[12], list[13], list[14], list[15]);
  //outlet(6, list[16], list[17], list[18], list[19], list[20]);
  //outlet(7, list[21], list[22], list[23], list[24], list[25], list[26]);
  //outlet(8, list[27], list[28], list[29], list[30], list[31]);
  //outlet(9, list[32], list[33], list[34]);
  //outlet(10, list[35], list[36]);
  outlet(1, list[0]);
  outlet(2, list[1]);
  outlet(3, list[2]);
  outlet(4, list[3]);
  outlet(5, list[4]);
  outlet(6, list[5]);
  outlet(7, list[6]);
  outlet(8, list[7]);
  outlet(9, list[8]);
  outlet(10, list[9]);
  outlet(11, list[10]);
  outlet(12, list[11]);
  outlet(13, list[12]);
  outlet(14, list[13]);
  outlet(15, list[14]);
  outlet(16, list[15]);
  outlet(17, list[16]);
  outlet(18, list[17]);
  outlet(19, list[18]);
  outlet(20, list[19]);
  outlet(21, list[20]);
  outlet(22, list[21]);
  outlet(23, list[22]);
  outlet(24, list[23]);
  outlet(25, list[24]);
  outlet(26, list[25]);
  outlet(27, list[26]);
  outlet(28, list[27]);
  outlet(29, list[28]);
  outlet(30, list[29]);
  outlet(31, list[30]);
  outlet(32, list[31]);
  outlet(33, list[32]);
  outlet(34, list[33]);
  outlet(35, list[34]);
  outlet(36, list[35]);
  outlet(37, list[36]);
  //  send list[12] via OSC to Allolib
  //  we have list already in here
  //  range is from 0-124 for FFt
  //  range is from 0-1 of the list
  //  for onset detection, you need history

}