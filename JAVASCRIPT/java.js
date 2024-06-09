// Array of abjects
let tasks = [
    {
        taskName: "Complete Project Report",
        image: "https://cdn.pixabay.com/photo/2016/11/19/21/01/analysis-1841158_640.jpg",
        description: "finalize and submit the project report.",
        deadline: "15.06.2024",
        importance: 0,
        location: "1st District Vienna",
    },
    {
        taskName: "2nd Exam CodeFactory",
        image: "https://cdn.pixabay.com/photo/2017/08/07/23/32/office-2609180_640.jpg",
        description: "get a FullMark in the Exam.",
        deadline: "09.06.2024",
        importance: 0,
        location: "5th District Vienna",
    }, {
        taskName: "Work",
        image: "https://cdn.pixabay.com/photo/2015/01/09/11/11/startup-594126_640.jpg",
        description: "go to VCBC.",
        deadline: "05.07.2024",
        importance: 0,
        location: "3rd District Vienna",
    }, {
        taskName: "Amigo",
        image: "https://cdn.pixabay.com/photo/2020/06/07/19/49/dog-5271833_640.jpg",
        description: "take Amigo for 20 mins walk.",
        deadline: "09.08.2024",
        importance: 0,
        location: "4th District Vienna",
    }, {
        taskName: "Meeting Friends",
        image: "https://cdn.pixabay.com/photo/2017/12/13/11/57/birthday-3016615_640.jpg",
        description: "meet with my friend Arian.",
        deadline: "14.06.2024",
        importance: 0,
        location: "9th District Vienna",
    }, {
        taskName: "Grocery Shopping",
        image: "https://cdn.pixabay.com/photo/2016/04/21/11/32/groceries-1343141_640.jpg",
        description: "go to Spar.",
        deadline: "18.06.2024",
        importance: 0,
        location: "7th District Vienna",
    }, {
        taskName: "Doctor Appointment",
        image: "https://cdn.pixabay.com/photo/2017/09/06/20/36/doctor-2722941_640.jpg",
        description: "visit the doctor for a checkup.",
        deadline: "14.06.2024",
        importance: 0,
        location: "22nd District Vienna",
    }, {
        taskName: "Exercise Routine",
        image: "https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932066_640.jpg",
        description: "go out for a run.",
        deadline: "27.06.2024",
        importance: 0,
        location: "11th District Vienna",
    }, {
        taskName: "Plan Vacation",
        image: "https://cdn.pixabay.com/photo/2011/09/28/23/19/koala-9960_640.jpg",
        description: "plan sleeping for the next vaccation.",
        deadline: "16.06.2024",
        importance: 0,
        location: "22nd District Vienna",
    },
]
// sortTasks is a function that helps me with sorting the cards later on based on how important they are + using For Of to be able to access the values of the array
function sortTasks() {
    const overview = document.getElementById("overview");
    overview.innerHTML = "";
    for (val of tasks) {  //Ajusting (if-statement) the background of Priority level using a for of loop.
        let backgroundClass = "text-bg-success";
        if (val.importance > 1 && val.importance <= 3) {
            backgroundClass = "text-bg-warning"
        }
        else if (val.importance > 3) {
            backgroundClass = "text-bg-danger"
        }
        // Adding a bootstrap card to the HTML container 

        overview.innerHTML += `
    <div>
        <div class="card my-5 cardS">
          <img src="${val.image}" class="card-img-top" height="300" alt="...">
          <div class="card-body">
        <h5 class="card-title">${val.taskName}</h5>
        <p class="card-text">I have to ${val.description}</p>
          </div>
          <ul class="list-group list-group-flush">
        <li class="list-group-item background ${backgroundClass}">Priority Level: <span class="addImportance">${val.importance}</span></li>
        <li class="list-group-item">Deadline: ${val.deadline}</li>
        <li class="list-group-item">Location: ${val.location}</li>
          </ul>
          <div class="card-body">
        <button type="button" class="btn btn-outline-success w-100 addBtn fa-regular fa-thumbs-up">   Promote</button>
          </div>
        </div>
    </div>
    `
    }
    sortPromotedTasks();
}
// through a forEach loop approach inside of a function get the Promote button to work smoothly with a change in the background color for the whole line cuz styling the number only didn't look good.
function sortPromotedTasks() {
    let btns = document.querySelectorAll(".addBtn");
    btns.forEach((element, i) => {
        element.addEventListener("click", function () {
            if (tasks[i].importance < 5) {
                tasks[i].importance++;
                document.querySelectorAll(".addImportance")[i].innerHTML = tasks[i].importance;
                let importanceElement = document.getElementsByClassName("background")[i];
                importanceElement.classList.remove("text-bg-success", "text-bg-warning", "text-bg-danger");
                if (tasks[i].importance <= 1) {
                    importanceElement.classList.add("text-bg-success");
                }
                else if (tasks[i].importance <= 3) {
                    importanceElement.classList.add("text-bg-warning");
                }
                else {
                    importanceElement.classList.add("text-bg-danger");
                }
            }

        })

    });
}
// Sorttasks and sortPromotedTasks are two functions that i had to add to my code just to be able to recall them for my buttons to work smoothly.
//sorting them ascending order sothat the less important are in the beginning of the page and the most important are down in the page (it would make more sence if it's the oppisit) but i can just switch task1 with task2 in the sort function.
document.getElementById("sorted").addEventListener("click", function () {
    tasks.sort((task1, task2) => task1.importance - task2.importance);
    sortTasks();
});
sortTasks();




//                                           CODE HAS ENDED!!!!!
// i had to update this code for me to be able to keep the changes in background color after sorting the elements. inspite of the fact that it's not wrong to keep this but i just wanted to make look better! :)
// if (tasks[i].importance <= 1) {
//     document.getElementsByClassName("background")[i].classList.add("text-bg-success");
//     document.getElementsByClassName("background")[i].classList.remove("text-bg-danger", "text-bg-warning");
// }
// else if (tasks[i].importance <= 3) {
//     document.getElementsByClassName("background")[i].classList.add("text-bg-warning");
//     document.getElementsByClassName("background")[i].classList.remove("text-bg-danger", "text-bg-success");
// }
// else {
//     document.getElementsByClassName("background")[i].classList.add("text-bg-danger");
//     document.getElementsByClassName("background")[i].classList.remove("text-bg-warning", "text-bg-success");
// }