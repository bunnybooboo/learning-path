# Personal notes from the Packt book 'Rust Essentials'

I've gone for Rust installed via Rustup. It's Rust-lang's version manager. It allows me to have stable and nightly installed and instantly switchable. Added to this is the possibility of using specific versions for specific builds. Great tool for development.

As I'm using Arch Linux the terminal command to install Rustup is `sudo pacman -Sy rustup`. For other version head over to https://github.com/rust-lang-nursery/rustup.rs

Rust uses a similar compilation method to C (clang) where you would `make` >> `install` >> execute. The one for Rust is called rustc, where you write >> compile >> execute.

Rust is not a new language. It's innovative but not reinventing the wheel. It's taking may of the good parts of other languages and upping the game.

## Package and Dependency Manager - Cargo

Rust uses a package and dependency manager called Cargo. This in my brain at least is starting to building something more along the lines of Ruby Gems. I've done a rather brief tutorial on Ruby on Rails so excuse my ignorance if I've technically not got that right. Please feel free to correct me in any of my writings! Cargo is evoked using `cargo new` >> `cargo build` >> `cargo run`. It even has your back by creating a binary file by adding `--bin` to the 'new' process. i.e. you would evoke using `cargo new your_unicorn_project --bin`

## Comments

Commenting works very much like other languages. To comment you use `//` for line comments (the preferred method in Rust). To open block comment `/*` and to close `*/`. For a documentation comment you should use `///`.

## Simple Constants

This appears *after* the section on Global Constants in the book. (TBD) edit so the readability has more info here first.

Simple constants are set using `const`. For example to set a constant 'PI' as a floating point integer you would write `const PI: f32 = 3.142` allowing you to evoke PI in your application when you compile.

## Global Constants

Resources and constants are defined in the header, just like in other languages. Constants are set by the keyword `static`. Naming convention is in all caps and underscores. They should also be indicated using `i32` for integers, or `str` for strings. Rust has a limited lifetime on objects. `static` is the longest possible age you can add to your code. It will remain available throughout the lifetime of the application.

## Error Handling

An example error used in the book `2:22 error: missing lifetime specifier [E0106]` shows the error is on line 2, at position 22 (including spaces!)

## Printing

Note the `!` forces the output to stdout.

`println!("Helo there, you lovely person!");`

## String Interpolation

This happens via print where items are inserted using the placeholder characters '{}' and even as '{0}', '{1}'.

So to use the unumbered version as a first example:
`println!("My cat's name is: {}", Evil);`
and an example of the use of the numbered placeholders:
`println!("My cat's name: {0} and she is: {}.", Evil, lovely);`

Within the {} you could use `{dog}` where `dog="Angel"` so for example `println!("My dog's name is {dog}", dog="Angel")`
or even point to character handling as in hexidecimal `{:x}` or `{:b}` for binary.

More [here](http://doc.rust-lang.org/std/fmt/)

## Value and Primitive Types

All modern computing platforms use 16, 32, 64 bit units, subsequently these are broken down into 8 bit bytes.

**Characters** `"D"`, **integers** `8`, **floats** `87.65309`, **strings** `"Mozillian"`, all appear as you'd expect in any programming language. As of course do denotions of **binary** - base-2 [0b] e.g `0b100101`, **octal** - base-8 [0o] e.g `0o61`, and **hexidecimal** - base-16 [0x] e.g `0x9C`.

Integers are defined as signed or unsigned. Signed is shown with `i`, unsigned with `u`. Integer sizes are size restricted as 8, 16, 32, 64 bit units. These are then shown `u8`, `u16`, `u32`, `u64` and `i8`, and so on.

Integers become even easier to read using underscores, e.g. `3_456_789`.

**32 bit** **floating point** integers are denoted using `f32` and **64 bit** using `f64`. Explaining this difference further: this is down to the level of accuracy, with 64 bit being more accurate than 32 bit. This might also vary depending on the the use of binary vs decimal as an example. 9 decimal digits accuracy in binary32 against 6 decimal digits accuracy in decimal32. And for even greater accuracy seen in 64 bit - 17 digit accuracy in binary64 against 16 digit accuracy in decimal64. Specification of the integer type might only be *required* when the compiler can't interpret which type is used.

**Precedence** of all the different operators and values are the same as in C-like languages. **There are no decrement** (--) **or increment** (++) in rust. An **empty value** of zero size is witten as `()`. The **return value of nothing**, seen with a function or expression, is `(no value)`. Similarly with a function which only prints to the console. `()` means no value whereas `null` is a value.

## The Standard Library

http://doc.rust-lang.org/std/

## Mutable and Immutable Variables

When you set a variable, the default in rust is that it set as immutable. This protects your code from unexpected behaviours, by default. If you are needing a variable to alter through the life of the program, it's wise to set the variable as mutable `mut`.

Variables are set for example `let myVariable = 42;`. If you were to make this variable one which was open to being altered, you would write it as `let mut myVariable = 42;`. In fact this would evoke an error because an integer would ultimately require its type to be set, eg `let mut myVariable: i32 = 42;`.
