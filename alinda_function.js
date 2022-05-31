                           
//This is a grading System for the University of Berlin that uses four dynamic functions. The example below displays results for two students.

function student(name, age, degree) {
    console.log(name)
    console.log(age)
    console.log(degree)
    return name;
}
    student("Lucia Scloveciahn",21," Bachelor in Artificial Intelligence")    
    
    
    function algorithmsAssessment(score) {
        const testScore = score;
        console.log(testScore);
        let overAll = 200;
        let average = (score / 100) * overAll;
        let finalMark = overAll - average;
        console.log(finalMark);
        return finalMark;
    }
    algorithmsAssessment(66)
    

    function calculusAssessment(score) {
        const testScore = score;
        console.log(testScore);
        let overAll = 300;
        let average = (score / 100) * overAll;
        let finalMark = overAll - average;
        console.log(finalMark);
        return finalMark;
    }
     calculusAssessment(95)
    
    function gradingSystem() {
        console.log( student('Eduardo Sanchez ', 22, 'Bachelor of Forensic Science') + 'has excelled highly in the progressive tests ' );
        console.log('His score in the algorithms test is : ', algorithmsAssessment(54), '%s');
        console.log('His score in the calculus test is : ', calculusAssessment(73),'%' );
    }
    gradingSystem ()