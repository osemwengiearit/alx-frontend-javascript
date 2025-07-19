/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    private teacher: Teacher;

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

    get getTeacher(): Teacher {
      return this.teacher;
    }
  }
}
