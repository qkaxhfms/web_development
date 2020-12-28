// Destructuring Assignment
// 구조분해할당
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

{
    // object
    const student = {
        name:'ms',
        level:1
    }

    const name = student.name;
    const level = student.level;
    console.log(name, level)

    {
        const {name, level} = student;
        console.log(name,level);

        const{name:studentName, level:studnetLevel} = student;
        console.log(studentName, studnetLevel);
    }

    // array
  const animals = ["🐶", "😽"];

  // 💩
  {
      const first = animals[0];
      const second = animals[1];
      console.log(first, second);
  }

  // ✨
  {
      const [first, second] = animals;
      console.log(first, second);
  }
}