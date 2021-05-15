const prompt = require('prompt-sync')({ sigint: true });

function getUserInput() {
    const virusComposition = prompt('Please enter virus composition: ');
    const nOOfPeople = prompt('Please number of people: ');
    if (Number(nOOfPeople)) {
        if (nOOfPeople <= 1 || nOOfPeople >= 10) {
            console.log("Please enter number of people between 1 and 10");
            process.exit();
        }
        let c = 0;
        const personArray = [];
        while (c != nOOfPeople) {
            let person = prompt(`Please enter person - ${c}: `);
            if(person.toString().length > virusComposition.length) {
                console.log("Please enter valid blood composition");
                process.exit();
            }
            personArray.push(person);
            c++;
        }
        for (let a of personArray) {
            let j = 0;
            for (let i = 0; i < virusComposition.length && j < a.length; i++) {
                if (a[j] == virusComposition[i]) {
                    j++;
                }
            }
            if (j == a.length) {
                console.log("POSITIVE");
            } else {
                console.log("NEGATIVE");
            }
        }
        process.exit();
    } else {
        console.log("Please enter valid number of people");
        process.exit();
    }
}

getUserInput();
