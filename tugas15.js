function segitiga (ab,bc){
   var x = Math.pow(ab, 2);
    var y = Math.pow(bc, 2);
    var z = x+y;
    var ac = Math.sqrt(z)
    console.log("Nilai AB : ", ab)
    console.log("Nilai BC : ", bc)
    console.log("Panjang sisi AC pada segitiga siku-siku tersebut adalah : ", ac)
}

var nilai = segitiga(8, 6)