const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHtml = require("./src/teamGenerator"); // this is for source


// The Questions prompts to the user

const teamArray = [];

const addManager = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the managers name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the managers Id number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the managers email address?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is the managers Office number?",
        },
      ])
      // after Qestions are asked, push response to team array
      .then((managerResponse) => {
        const { name, id, email, officeNumber } = managerResponse;
        const manager = new Manager(name, id, email, officeNumber);
        teamArray.push(manager);
        console.log(manager);
      })
  );
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's role, Engineer or Intern?",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's Identification number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "What is the employee's Github address?",
      },
      {
        type: "input",
        name: "school",
        message: "What school did the Intern come from?",
      },
      {
        type: "confirm",
        name: "addEmployeee",
        message: "Would you like to add another employee?",
      }

    ])

    .then((employeePromtResponse) => {
      var { role, name, id, email, github, school, confirmAddEmployee } =
        employeePromtResponse;

      let employee;

      if (role === "Engineer") {
        employee === new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

const writeToFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
    console.log(data),
    err ? console.log(err) : console.log("Html with the Team Data succesfully created!")
    });
}

addManager()

  .then(addEmployee)
  .then((teamArray) => {
    return generateHtml(teamArray);
  })

  .then((pageHTML) => {
    return writeToFile(pageHTML);
  })

  .catch((err) => {
    console.log(err);
  });
