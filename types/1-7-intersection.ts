{
  /* 
    Intersection : &
  */
  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    employeeId: number;
    work: () => string;
  };
  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: "Yeonje",
    score: 100,
    employeeId: 5,
    work() {
      return "im working!";
    },
  });
}
