outlets = 21;
autowatch = 1;
var buffer = new Buffer("METER");


var list_lbassm_prev = new Array();
var list_bassm_prev = new Array();
var list_lmidm_prev = new Array();
var list_midm_prev = new Array();
var list_umidm_prev = new Array();
var list_hmidm_prev = new Array();
var list_uhmidm_prev = new Array();
var list_highm_prev = new Array();
var list_uhighm_prev = new Array();

var lbassm_bang = false;
var bassm_bang = false;
var lmidm_bang = false;
var midm_bang = false;
var umidm_bang = false;
var hmidm_bang = false;
var uhmidm_bang = false;
var highm_bang = false;
var uhighm_bang = false;

var ls = 3;
var las = ls - 1;


function bang() {
  var list = new Array(buffer.framecount());

  for (var i = 0; i < buffer.framecount(); i++) {
    list[i] = buffer.peek(0, i);
  }


  lbassm = (list[2] + list[3] + list[4])/3.0;
  bassm = (list[5] + list[6] + list[7])/3.0;
  lmidm = (list[8] + list[9] + list[10] + list[11])/4.0;
  midm = (list[12] + list[13] + list[14])/3.0;
  umidm = (list[15] + list[16] + list[17] + list[18] + list[19]+ list[20])/6.0;
  hmidm = (list[21] + list[22] + list[23] + list[24] + list[25] + list[26])/6.0;
  uhmidm = (list[27] + list[28] + list[29])/3.0;
  highm = (list[30] + list[31] + list[32] + list[33])/4.0;
  uhighm = (list[34] + list[35] + list[36])/3.0;


  // Onset Detection

// Bass Mean
  if((bassm - list_bassm_prev[las]) > 0.075) {
	//post(bassm_value);
	bassm_bang = true;
	outlet(10, 'bang');
  }
  else {
	bassm_bang = false;
  }
   	if(list_bassm_prev.length < ls) {
		list_bassm_prev.unshift(bassm);
   	}
	else{
		list_bassm_prev.unshift(bassm);
		list_bassm_prev.pop();
	}
	//post(list_bassm_prev[0]);
    //post(list_bassm_prev[2]);

// Low Mids Mean
  if((lmidm - list_lmidm_prev[las]) > 0.08) {
	outlet(11, 'bang');
	lmidm_bang = true;
  }
  else {
	lmidm_bang = false;
  }
    if(list_lmidm_prev.length < ls) {
		list_lmidm_prev.unshift(lmidm);
	}
	else {
		list_lmidm_prev.unshift(lmidm);
		list_lmidm_prev.pop();
	}

// Mids Mean
  if((midm - list_midm_prev[las]) > 0.05) {
	outlet(12, 'bang');
	midm_bang = true;
  }
  else {
	midm_bang = false;
  }
    if(list_midm_prev.length < ls) {
		list_midm_prev.unshift(midm);
	}
	else {
		list_midm_prev.unshift(midm);
		list_midm_prev.pop();
	}

// Ultra Mids Mean
  if((umidm - list_umidm_prev[las]) > 0.08) {
	umidm_bang = true;
	outlet(13, 'bang');
  }
  else {
	umidm_bang = false;
  }
    if(list_umidm_prev.length < ls) {
		list_umidm_prev.unshift(umidm);
	}
	else {
		list_umidm_prev.unshift(umidm);
		list_umidm_prev.pop();
	}

// High-Mids Mean
  if((hmidm - list_hmidm_prev[las]) > 0.08) {
	outlet(14, 'bang');
	hmidm_bang = true;
  }
  else {
	hmidm_bang = false;
  }
    if(list_hmidm_prev.length < ls) {
		list_hmidm_prev.unshift(hmidm);
	}
	else {
		list_hmidm_prev.unshift(hmidm);
		list_hmidm_prev.pop();
	}

// Ultra High-Mids Mean
  if((uhmidm - list_uhmidm_prev[las]) > 0.07) {
	outlet(15, 'bang');
	uhmidm_bang = true;
  }
  else {
	uhmidm_bang = false;
  }
    if(list_uhmidm_prev.length < ls) {
		list_uhmidm_prev.unshift(uhmidm);
	}
	else {
		list_uhmidm_prev.unshift(uhmidm);
		list_uhmidm_prev.pop();
	}

// Highs Mean
  if((highm - list_highm_prev[las]) > 0.09) {
	outlet(16, 'bang');
	highm_bang = true;
  }
  else {
	highm_bang = false;
  }
    if(list_highm_prev.length < ls) {
		list_highm_prev.unshift(highm);
	}
	else {
		list_highm_prev.unshift(highm);
		list_highm_prev.pop();
	}


// Ultra Highs Mean
  if((uhighm - list_uhighm_prev[las]) > 0.09) {
	outlet(17, 'bang');
	uhighm_bang = true;
  }
  else {
	uhighm_bang = false;
  }
    if(list_uhighm_prev.length < ls) {
		list_uhighm_prev.unshift(uhighm);
	}
	else {
		list_uhighm_prev.unshift(uhighm);
		list_uhighm_prev.pop();
	}
	
// Low Bass Mean
  if((lbassm - list_lbassm_prev[las]) > 0.06) {
	lbassm_bang = true;
	outlet(18, 'bang');
  }
  else {
    lbassm_bang = false;
  }
    if(list_lbassm_prev.length < ls) {
		list_lbassm_prev.unshift(lbassm);
	}
	else {
		list_lbassm_prev.unshift(lbassm);
		list_lbassm_prev.pop();
	}

  if(highm_bang == true && uhmidm_bang == true && hmidm_bang == true && umidm_bang == true && midm_bang == true) {
	outlet(19, 'bang');
	}
  if(highm_bang == true && uhmidm_bang == true && hmidm_bang == true) {
	outlet(20, 'bang');
	}
										
  outlet(0, list);
  outlet(1, lbassm);						// 	mean low bass
  outlet(2, bassm);							// 	mean bass
  outlet(3, lmidm);							// 	mean low mids
  outlet(4, midm);							// 	mean mid 
  outlet(5, umidm);							// 	mean upper mids
  outlet(6, hmidm);							// 	mean high-mids
  outlet(7, uhmidm);						// 	mean upper high-mids
  outlet(8, highm);							// 	mean highs
  outlet(9, uhighm);						// 	mean upper highs



  //  send list[12] via OSC to Allolib
  //  we have list already in here
  //  range is from 0-124 for FFt
  //  range is from 0-1 of the list
  //  for onset detection, you need history

}