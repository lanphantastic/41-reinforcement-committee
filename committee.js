project = {
  committee: ["Stella", "Salma", "Kai"],
  title: "Very Important Project",
  dueDate : "December 14, 2019",
  id: "3284",
  steps: [
    {description: "conduct interviews",
     dueDate: "August 1, 2018"
    },
    {description: "code of conduct",
     dueDate: "January 1, 2018"
    },
    {description: "compile results",
     dueDate: "November 10, 2018"
    },
    {description: "version 1",
     dueDate: "January 15, 2019"
    },
    {description: "revisions",
     dueDate: "March 30, 2019"
    },
    {description: "version 2",
     dueDate: "July 12, 2019"
    },
    {description: "final edit",
     dueDate: "October 1, 2019"
    },
    {description: "final version",
     dueDate: "November 20, 2019"
    },
    {description: "Wrap up",
     dueDate: "December 1, 2019"
    }
  ]
}

// Determining how many tasks each person should have
tasksPerPerson = project["steps"].length/project["committee"].length
console.log(tasksPerPerson);

// Access the committee members
projectMembers = project["committee"];

console.log(projectMembers);

var counter = 0;

// assigned each member to three tasks
project["steps"].map(function(step) {
  step["assignedPerson"] = projectMembers[counter];
  counter++;
  if (counter > projectMembers.length) {
    counter = 0;
  };
});

// Show the new project list
console.log(project);
