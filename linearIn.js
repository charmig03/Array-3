function linearIn(outer, inner){
    //index for inner array, also acts as a 'count' variable
  let j = 0;

  //looping through the outer array once. looking for matches.
  for (let i = 0; i < outer.length; i++) {
    if (inner[j] == outer[i]) {
      j++;
    }
  }

  return j == inner.length;
}