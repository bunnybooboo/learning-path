Packt Publishing release a daily free book over at https://www.packtpub.com/packt/offers/free-learning

This one on Angular and Phonegap actually manages to chuck in a bit of MongoDB and Tornado integration too.

I had a quite a bit of trouble so have not managed to finish it. This is my workflow:

1. my locally installed node.js clashed so I removed it and installed via nvm
2. install npm
3. npm install cordova@latest
4. npm install phonegap latest
5. install Android SDK, add to $PATH - had trouble with this again due to local version installed by Debian repo so downloaded direct from Android SDK website.
6. Cordova would not emulate on Linux without HAXM acceleration. Had to install Genymotion after many suggested it in various forums. To use Cordova via Genymotion I had to run an emulation in Genymotion and from the project folder `cordova run android`
7. ran into an internal ethical issue through using Genymotion so tried emulation via android-x86 on KVM. Was able to get shared folders setup so I could transfer to the emulation. Yet to work out how to connect adb etc. Time being short I went back to what was at least working.

Sent a few errata to the publisher but recommend taking code from the online version.
