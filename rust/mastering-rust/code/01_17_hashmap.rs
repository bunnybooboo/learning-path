// hashmap.rs
use std::collections::HashMap;

fn main() {
  let mut configuration = HashMap::new();
  configuration.insert("path", "/home/user/".to_string());

  println!("Configuration path is: {:?}", configuration.get("path"));
}
