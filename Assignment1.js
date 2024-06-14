let marks = prompt("Enter your marks");
if (marks <100 && marks >= 90) {
    alert(`Your Marks are ${marks} Your Grade is A+`)
}

else if(marks <90 && marks >= 80) {
    alert(`Your Marks are ${marks} Your Grade is A`)
}

else if(marks <80 && marks >= 70) {
    alert(`Your Marks are ${marks} Your Grade is B`)
}

else if(marks <70 && marks >= 60) {
    alert(`Your Marks are ${marks} Your Grade is C`)
}

else if(marks <60 && marks >= 50) {
    alert(`Your Marks are ${marks} Your Grade is D`)
}

else if(marks <50 && marks >= 0) {
    alert(`Mubarak ho You Failed The Exam`)
}

else {
    alert("INVAILD MARKS")
}