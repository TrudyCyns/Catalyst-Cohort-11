// ASSIGNMENT 1;
// Write 3 dynamic functions link each other

// define function student with 2 parameters, returns name upon invocation.
function student(name, studyClass){
    return name;
    }
// defines a function marks nd returns average of the termly marks when invoked
function marks(term1, term2, term3){
      aveMarks = (term1 + term2 + term3)/3;
      return aveMarks;
    }
// defines a function remarks and returns teacher's comments when invoked
function remarks(){
      let avgPerformance = marks();
      let studentName = student();
      let comments;
      if(avgPerformance < 50){
        comments = student("Okello") + ", yout performance is very poor!!";
        
      }
      else if (50 > avgPerformance < 70){
        comments = student("Okello") + ", yout performance is average!!";
      }
      else{
        comments = student("Okello") + ", yout performance is very good!!";
      }
    
      return comments;
    }
    console.log(marks(67,86,60));
    console.log(remarks());