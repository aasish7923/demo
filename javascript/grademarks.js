function  getmarks(score)
        {
          if (score>100 || score<0) return "invalid marks";
          else if(score >= 90) return "A+";
          else if(score >= 80) return "A";
          else if(score >= 70) return "B+";
          else if(score >= 60) return "B";
          else if(score >= 50) return "C+";
          else if(score >= 40) return "C";
          else if(score >= 33) return "FAIL: better luck next time";
        }

 let score = 67;
let a= getmarks(score);
console.log(a + " is your grade");
// alert(a);