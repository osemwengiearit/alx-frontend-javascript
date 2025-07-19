// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Accra",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Kumasi",
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Render a table with firstName and location
const table: HTMLTableElement = document.createElement("table");
table.border = "1";

// Table header
const headerRow: HTMLTableRowElement = table.insertRow();
const nameHeader = headerRow.insertCell();
nameHeader.textContent = "First Name";
const locationHeader = headerRow.insertCell();
locationHeader.textContent = "Location";

// Append each student row
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const nameCell = row.insertCell();
  const locationCell = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append table to the body
document.body.appendChild(table);

// Define the Teachers interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  contract: any;
}

// Create Teacher
const teacher1: Teacher = {
  firstName: "Adam",
  lastName: "Salim",
  fullTimeEmployee: true,
  yearsOfExperience: 40,
  location: "Accra",
  contract: false,
};

const teacher2: Teacher = {
  firstName: "Maame",
  lastName: "Yaa",
  fullTimeEmployee: true,
  yearsOfExperience: 30,
  location: "Kumasi",
  contract: false,
};

const teacher3: Teacher = {
  firstName: "Robert",
  lastName: "Boateng",
  fullTimeEmployee: true,
  yearsOfExperience: 45,
  location: "Accra",
  contract: false,
};

// Array of teacher
const teachersList: Teacher[] = [teacher1, teacher2, teacher3];

// Define the Directors interface
interface Director {
  firstName: string;
  lastName: string;
  numberOfReports: number;
  location: string;
  fullTimeEmployee: boolean;
}

// Create Directors
const director1: Director = {
  firstName: "Kofi",
  lastName: "Amoah",
  fullTimeEmployee: true,
  numberOfReports: 17,
  location: "Accra",
};

// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function using the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Interface describing the shape of the Student class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the constructor of the class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Implementing the class using both interfaces
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
// Implementing the Director Interface
class DirectorClass implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Working on director tasks";
  }
}
// Create Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
// Implementing the Teacher Interface
class TeacherClass implements TeacherInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Working on teacher tasks";
  }
}
// Function to create a new employee
function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}
