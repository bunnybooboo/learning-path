**Personal notes from the Packt book 'Rust Essentials'**
===================================================

## Starting with Rust

I've gone for Rust installed via Rustup. It's Rust-lang's version manager. It allows me to have stable and nightly installed and instantly switchable. Added to this is the possibility of using specific versions for specific builds. Great tool for development.

As I'm using [Arch Linux](https://www.archlinux.org/) the terminal command to install Rustup is `sudo pacman -Sy rustup`. For other versions head [HERE](https://github.com/rust-lang-nursery/rustup.rs)

Rust uses a similar compilation method to C ([Clang](https://en.wikipedia.org/wiki/Clang)) where you would `make` >> `install` >> execute. The one for Rust is called rustc, where you write >> compile >> execute.

Rust is not a new language. It's innovative but not reinventing the wheel. It's taking may of the good parts of other languages and upping the game.

### Package and Dependency Manager - Cargo

Rust uses a package and dependency manager called [Cargo](http://doc.crates.io/). This in my brain at least is starting to building something more along the lines of [Ruby Gems](https://rubygems.org/) and [NPM](https://www.npmjs.com/). I've done a rather brief tutorial on [Ruby on Rails](http://rubyonrails.org/) so excuse my ignorance if I've technically got that incorrect. Please feel free to correct me in any of my writings! Cargo is evoked using `cargo new` >> `cargo build` >> `cargo run`. It even has your back by creating a binary file by adding `--bin` to the 'new' process. i.e. you would evoke using `cargo new your_unicorn_project --bin`

## Using Variables and Types

### Comments

Commenting works very much like other languages. To comment you use `//` for line comments (the preferred method in Rust). To open block comment `/*` and to close `*/`. For a documentation comment you should use `///`.

### Simple Constants

This appears *after* the section on Global Constants in the book. (TBD) edit so the readability has more info here first.

Simple constants are set using `const`. For example to set a constant 'PI' as a floating point integer you would write `const PI: f32 = 3.142` allowing you to evoke PI in your application when you compile.

### Global Constants

Resources and constants are defined in the header, just like in other languages. Constants are set by the keyword `static`. Naming convention is in all caps and underscores. They should also be indicated using `i32` for integers, or `str` for strings. Rust has a limited lifetime on objects. `static` is the longest possible age you can add to your code. It will remain available throughout the lifetime of the application.

### Error Handling

An example error used in the book `2:22 error: missing lifetime specifier [E0106]` shows the error is on line 2, at position 22 (including spaces!)

### Printing

Note the `!` forces the output to stdout.

`println!("Hello there, you lovely person.");`

To print the characters from a string use the method `.char()`. Their example is essentially `for c in thisString.chard() {print!("{} - ", c)}`.

### String Interpolation

This happens via print where items are inserted using the placeholder characters '{}' and even as '{0}', '{1}'.

So to use the unumbered version as a first example:
`println!("My cat's name is: {}", Evil);`
and an example of the use of the numbered placeholders:
`println!("My cat's name: {0} and she is: {}.", Evil, lovely);`

Within the {} you could use `{dog}` where `dog="Angel"` so for example `println!("My dog's name is {dog}", dog="Angel")`
or even point to character handling as in hexidecimal `{:x}` or `{:b}` for binary.

More [here](http://doc.rust-lang.org/std/fmt/)

### Value and Primitive Types

All modern computing platforms use 16, 32, 64 bit units, subsequently these are broken down into 8 bit bytes.

**Characters** `"D"`, **integers** `8`, **floats** `87.65309`, **strings** `"Mozillian"`, all appear as you'd expect in any programming language. As of course do denotions of **binary** - base-2 [0b] e.g `0b100101`, **octal** - base-8 [0o] e.g `0o61`, and **hexidecimal** - base-16 [0x] e.g `0x9C`.

Integers are defined as signed or unsigned. Signed is shown with `i`, unsigned with `u`. Integer sizes are size restricted as 8, 16, 32, 64 bit units. These are then shown `u8`, `u16`, `u32`, `u64` and `i8`, and so on.

Integers become even easier to read using underscores, e.g. `3_456_789`.

**32 bit** **floating point** integers are denoted using `f32` and **64 bit** using `f64`. Explaining this difference further: this is down to the level of accuracy, with 64 bit being more accurate than 32 bit. This might also vary depending on the the use of binary vs decimal as an example. 9 decimal digits accuracy in binary32 against 6 decimal digits accuracy in decimal32. And for even greater accuracy seen in 64 bit - 17 digit accuracy in binary64 against 16 digit accuracy in decimal64. Specification of the integer type might only be *required* when the compiler can't interpret which type is used.

**Precedence** of all the different operators and values are the same as in C-like languages. **There are no decrement** (--) **or increment** (++) in rust. An **empty value** of zero size is witten as `()`. The **return value of nothing**, seen with a function or expression, is `(no value)`. Similarly with a function which only prints to the console. `()` means no value whereas `null` is a value.

All variables use [snake_case](https://en.wikipedia.org/wiki/Snake_case) convention when creating names.

### The Standard Library

http://doc.rust-lang.org/std/

### Mutable and Immutable Variables

When you set a variable, the default in rust is that it set as immutable. This protects your code from unexpected behaviours, by default. If you are needing a variable to alter through the life of the program, it's wise to set the variable as mutable `mut`.

Variables are set for example `let myVariable = 42;`. If you were to make this variable one which was open to being altered, you would write it as `let mut myVariable = 42;`. In fact this would evoke an error because an integer would ultimately require its type to be set, eg `let mut myVariable: i32 = 42;`.

This can not be done to global constants, though. To do so would be considered dangerous. Rust is trying to protect everyone this way.

### Scope of a Variable and Shadowing

Blocks of code are achieved with `{}`. Code within an inner block is only known to that block, and so on. [Shadowing](http://rustbyexample.com/variable_bindings/scope.html) is where a variable is replaced in a code block via `let`.

### Type Checking and Conversions

When you compile your code in Rust, types are checked throughout. If there is a mismatch an error will be thrown at compile time. This provides safety that the code will run as expected at runtime, error handling happening when you compile.

Rust is statically typed which means variables stay as they are throughout the lifetime of the program. As previously mentioned variables can be changed using `mut` but also by calling `let` on the variable once again.

Concatenating 2 strings together will not happen by default as you have to enforce `.to_string()` or through the use of `format!`. Adding to integers of different type can also not happen unless you cast a conversion using `as`: e.g. `my_variable = chickens as i32;`

If you were to convert a floating point to an integer you would lose all the data after the decimal point. This would be the same for a signed value (e.g a negative number) would flip to a positive, if you were to convert it to an unsigned one.

### Aliasing

You could assign a name to a type using `type MyType = u8;` then calling the user created variable name 'MyType' again using `let` in a function. If you were to define this variable outside of its type range, in this case outside of the range 0-255 then you'd be hit with an error and compile time `warning: literal out of range for its type.`

## Expressions

Rust is an [expression-oriented language](https://en.wikipedia.org/wiki/Expression-oriented_programming_language). Its code is mostly written using a series of expressions, collectively known as a statement. Binding a variable is a statement. Calling the variable is an expression. Expressions on their own have little value without a statement.

Blocks of code are expressions too. However the expression is suppressed (assigning `()`) if you end the block with a semicolon, and assigning the full expression its previous value if not ending with a semicolon.

It's the standard in Rust to enforce when a statement ends though so most code lines end in a semicolon.

### Stack/Heap

They give an example explanation from stackoverflow. Here's [the direct link](http://stackoverflow.com/a/80113) to the answer.

I think of this via a lesson I saw on a computer science MOOC (CS50?), where the stack was represented by a stack of toy hoop rings on a post, and the heap represented by the are where calculation took place. That helped me visualise better.

You can print the precise location of a stack using `{:p}`.

You could say that the stack is very much affected by the use of variables. Well more that the stack can not be altered. Only by calling a mutable variable as a mutable variable `&mut` can you reuse a mutable variable under a newly created variable name. Attempting to do this with a default variable would throw an error. You must expressly call it as mutable in the variable binding and in its calling.

## Using Function and Control Structures

### Branching on a Condition

Branching takes place using the somewhat standard `if`, `else`, and `if-else`. The condition after an if should be a boolean. Code blocks are needed once again using `{}`.

As it's an expression it can be printed or bound to a variable, of course using `let`.

Like in other languages, You can escape a branch using `return;`. All branches within a block must return a value of the same type.

Take care again with code blocks to NOT use a semicolon at the last line else you will return `()`.

### Looping

Looping achieved through the use of `while`. This can also be expressed using syntactic sugar of `loop`. Looping through a range is again similar to other languages in `for n in 0..12 {**}`.

The rather standard use of a loop, iterating over a range until it's exhausted, is achieved with 
```
let mut x = 10;
for n in 0..x {x -= 1; print!(x);}
```

### Functions

Every program builds using functions. The default function we tend to use is `fn main() {**}`. They are named like variables using [snake_case](https://en.wikipedia.org/wiki/Snake_case). Functions only return one value, which can be a tuple.

Documenting functions is done using `///`, writing in Markdown, and then running `rustdoc` against the file. This creates a new `doc` directory with a subdir `exdoc` with an index.html file which can be used to further build out your project website. If using cargo, you would need to use `cargo doc`. 

To publish a function in the documentation it must be prefixed with `pub`.

### Attributes

[Attributes](https://doc.rust-lang.org/book/attributes.html) written as `#[...]` are metadata placed before a section code which they describe. They can disable warnings, turn on compiler features, mark unit tests and benchmarks. They can be used to turn certain features on when using a particular operating system. e.g `#[cfg(target_os = "linux")]`

### Testing

If you use the attribute `#[test]` the code will run only when a test is invoked. If it's compiled as normal then the test will not even be included in the resulting code.

A test will always pass unless you also add the `assert_eq!([actual], [expected]);` macro, which forces a panic unless the result is exact as the enclosed assertion.

In cargo you can create an executable project which is known as a 'crate'. This is done with `mylib`, i.e. `cargo new mylib`. This will add `src` directory with a `lib.rs` file which holds a test template. You can edit this file then run your tests in parallel using `cargo test`.

## Structuring Data and Matching Patterns

### Strings

All strings are sequences of UTF-8 bytes of Unicode. These could contain null byes though not null terminated. [Null termination](https://en.wikipedia.org/wiki/Null-terminated_string) in C is required to safely end a string. Rust does away with this need but still retains safety.

There are 2 types of strings: literal or string slices denoted by `&str` which is immutable/fixed size; `&'static` for statically allocated [both via `std::str`] more [HERE](https://doc.rust-lang.org/std/primitive.str.html); or `String` a mutable/dynamic string [via `std::string`] more [HERE](https://doc.rust-lang.org/std/string/index.html).

You can turn a string slice into a String running  [this](https://doc.rust-lang.org/std/primitive.str.html#method.to_string) `.to_string` method, and a String into a string slice by adding `&` before the String name.

Their advice when inspecting strings is to use something along the lines of `if &thisString == thatString {println!("It's the same string")}`. This way conserves resources, where using `to_string()` uses the heap stack. It's simply a view of the original String and the go to method for manipulating strings.

To append a string with a character use `push`, to append a string with a string use `push_str`. e.g. `thisString.push_string("My dog is always hungry.");`

Splitting a string is done using the method `.split()`, where the contents of `()` are the character where the split will occur.

If you need to edit the beginning of a string you can use the method `.replace([orginal], [replacement])`. This will allocate a new version of the string in memory.

### Array, Vector, and Slices

Arrays are created using `[...]` with each entry separated by a comma. e.g. `letfruits = ["apple", "banana", "durian", "mango", "orange", "rambutan"];`. This example has declared an immutable array, if you wish to make it mutable you add the `mut` prefix. You can further define an array initialisation using its type and the number of items in the array, e.g. `let mut faveFruits: [&str, 2] = ["apple", "oranges"];`

Arrays observe similar behaviour to most other languages. e.g. `println!(fruits[0])` would print `apple`. You'd use `-1` to select the last in the array, and so on.

To observe the length of a string use the method `.len()`. An alternative for selecting the last in the array is `fruits.iter().last().unwrap();`.

You could create a pointer reference to the original array and iterate over this. e.g ```let food = &fruits;
println!("Have you tried a {}?", food[2]);```
prints `Have you tried a durian?`

### Tuples

### Structs

### Enum

### Getting Input from the Console

### Matching Patterns


