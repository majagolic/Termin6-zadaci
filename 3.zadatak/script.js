function hello(name, surname, gender) {
    let title;
    if (gender === "Man") {
        title = "Mr.";
    } else {
        title = "Ms.";
    }
    console.log(`Hello, ${title} ${name} ${surname}.`)
}

function sayHello(fullName, gender, helloFunction) {

    let nameAndSurname = fullName.split(" ");

    if (typeof helloFunction === "function") {
        helloFunction(nameAndSurname[0], nameAndSurname[1], gender);
    }

}
sayHello("Maja Golic", "Woman", hello);