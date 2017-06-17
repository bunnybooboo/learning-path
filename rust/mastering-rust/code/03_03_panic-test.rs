// panic-test.rs
#[test]
#[should_panic]
fn test_panic() {
    panic!("Succeded in failing");
}
