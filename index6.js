//switch - statment that examines a value
//         for a match against many case elements
//         More effecient that may "else if" statements

let grade = 70;

switch (true) {
  case grade >= 90:
    console.log("You did great");
    break;
  case grade>= 80:
    console.log("You did good");
    break;
  case grade >= 70:
    console.log("You did Okay");
    break;
  case grade>= 60:
    console.log("You passed barely");
    break;
  case grade > 60:
    console.log("You did great");
    break;
    default:
        console.log(grade,"is not a letter grade");
}
