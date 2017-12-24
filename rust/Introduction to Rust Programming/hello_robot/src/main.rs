struct Robot {
}

impl Robot {
    fn greet(&self){
        println!("Hello, Developer!");
    }
}

fn main() {
    println!("Hello, Robot!");
    let mut bot = Robot {};
        bot.greet();
}
