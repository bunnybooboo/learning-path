// library-example-1/src/lib.rs
#[allow(unused_variables)]
fn sum(a: i8, b: i8) -> i8 {
    return a + b;
}

#[cfg(test)]
mod tests {
    use super::sum;
    #[test]
    fn one_and_one_equals_two() {
        assert_eq!(sum(1, 1), 2);
    }
}
