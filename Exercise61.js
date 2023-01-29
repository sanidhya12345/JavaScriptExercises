//Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

const studentmarks=[
    {
        name:"David",
        marks:80
    },
    {
        name:"Vinoth",
        marks:77
    },
    {
        name:"Divya",
        marks:88
    },
    {
        name:"Ishita",
        marks:95
    },
    {
        name:"Thomas",
        marks:68
    }
]

function grade(marks){
    if(marks<60){
        return "F";
    }
    else if(marks<70){
        return "D";
    }
    else if(marks<80){
        return "C";
    }
    else if(marks<90){
        return "B";
    }
    else{
        return "A";
    }
}
for(obj of studentmarks){
    console.log(`${obj.name} obtain ${grade(obj.marks)}`)
}