// optional chaining
// 옵셔널 체이닝
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining

{
    const person1 = {
        name: "Ellie",
        job: {
            title: "S/W Engineer",
            manager: {
                name: "Bob",
            },
        },
    };
    const person2 = {
        name: "Bob",
    };

    // 💩💩💩💩💩💩
    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        printManager(person1);
        // printManager(person2);
    }

    // 💩💩💩
    {
        function printManager(person) {
            console.log(
                person.job ? (person.job.manager ? person.job.manager.name : undefined) : undefined
            );
        }
        printManager(person1);
        printManager(person2);
    }

    // 💩
    {
        function printManager(person) {
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1);
        printManager(person2);
    }

    // ✨
    {
        function printManager(person) {
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person2);
    }
}