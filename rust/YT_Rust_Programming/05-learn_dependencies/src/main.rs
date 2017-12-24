extern crate irc;

use std::default::Default;
use irc::client::prelude::*;

fn main() {
    let cfg = Config {
        nickname: Some(format!("irc-rs")),
        server: Some(format!("irc.example.com")),
        channels: Some(vec![format!("#test")]),
        .. Default::default()
    };
    let server = IrcServer::from_config(cfg).unwrap();
    server.identify().unwrap();
    server.for_each_incoming(|message| {
        // Do message processing.
    }).unwrap()
}

