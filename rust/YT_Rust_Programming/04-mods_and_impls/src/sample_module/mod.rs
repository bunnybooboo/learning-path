pub struct SampleImpl {
    my_name:String
}

impl SampleImpl{
    pub fn new(name:String) -> SampleImpl{
        SampleImpl{my_name: name}
    }
    pub fn hello_world(&self){
        println!("My name is: {:?}",self.my_name);
    }
}
