mod sample_module;
use sample_module::SampleImpl;

fn main() {
    let my_object = SampleImpl::new("David".to_string());
    my_object.hello_world();
}
