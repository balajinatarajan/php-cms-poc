//module array
var m = [{id:1,split:25,visits:0,tobeshare:0},{id:2,split:25,visits:0,tobeshare:0},{id:3,split:25,visits:0,tobeshare:0},{id:4,split:25,visits:0,tobeshare:0}];

//for total number of hits
for (i=0;i<100;i++){
	total = 0;
  // get total visits so far
  for(j=0;j<m.length;j++){
  	total += m[j].visits;
  }
  
  // calculate tobeshare for each module - no. of impressions or hits of each module should match tobeshare
  for(k=0;k<m.length;k++){
  	m[k].tobeshare = (total * m[k].split)/100;
  }

//this is where we decide which module to show based on the split share
	for(l=0;l<m.length;l++){
  	// if you come across any module that has less visit than it is supposed to be based on its share, then show it and break (we can only show one at a time)
  	if(m[l].visits < m[l].tobeshare){
    	m[l].visits += 1;
      break;
    }
    //if there is a tie and we have reached end of array, show the last module - we have to show something and also break the tie
    else {
    	if(l == m.length -1){
	    	m[m.length-1].visits += 1;
  	   }
    }
  }
}

//document.getElementById("result").innerHTML = JSON.stringify(m);
console.log(JSON.stringify(m));



