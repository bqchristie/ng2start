class Greeter {

    saySomething(message:string = 'johnny') {
        console.log(message + ' who knows');
    }
}

var greeter = new Greeter();
greeter.saySomething();