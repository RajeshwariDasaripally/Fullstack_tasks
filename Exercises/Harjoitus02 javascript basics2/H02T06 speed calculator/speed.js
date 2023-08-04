function tulostaVauhdit(h, min, sec, km){
    vlaskin = new Vauhtilaskin(h, min, sec, km);
    var kmvauhti= vlaskin.kmhpace;
    var minsecperkmsvauhti = vlaskin.minkmPace;
    console.log(kmvauhti);
    console.log(minsecperkmsvauhti);

  var div = document.getElementById("results");
  div.innerHTML = kmvauhti + "km/h<br>" + minsecperkmsvauhti + "/km<br>"
  };

  class Vauhtilaskin {
    constructor(h, min, sec, km) {
      this.h = h;
      this.min = min;
      this.sec = sec;
      this.km = km;    
    }
    get kmhpace() {
      return this.calcKmhPace();
    }
    get minkmPace() {
      return this.calcMinkmPace();
    }

    calcKmhPace() {
      var tunnit = parseInt(this.h)+(parseInt(this.min)*60+parseInt(this.sec))/3600;
      var kmh = this.km/tunnit;
      return kmh.toFixed(2);
    }
    calcMinkmPace() {
      var sekunnit = parseInt(this.h)*60*60+parseInt(this.min)*60+parseInt(this.sec);
      var sekunnitPerKm = sekunnit/this.km;

      var minutes = 0;

      while (sekunnitPerKm >= 60){
        minutes++;
        sekunnitPerKm = sekunnitPerKm - 60;
      }
      sekunnitPerKm = Math.round(sekunnitPerKm);
      sekunnitPerKm = String('0'+ sekunnitPerKm).slice(-2);
      return minutes + ":" + sekunnitPerKm;
    }
  };
  