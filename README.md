# doctordick 
Dr. Dick is a mobile app that empowers gay men and other men who have sex with men to take care of their sexual health by:
* Educating gay men on which tests they need and how often, and where to get those tests (e.g., gay-friendly doctor, STD and HIV testing sites)
* Reminding gay men to get tested, as appropriate
* Connecting gay men to vital health resources and information, including CDC’s STD Treatment Guidelines and preventive measures 

[Learn more](http://angelhack.com/2016/04/20/dr-dick-a-sexual-health-app-to-promote-hiv-awareness-prevention-amongst-gay-men/) about why we started Dr. Dick. Dr. Dick is still under development. Please reach out to Hou Chia (kchia87@gmail.com) if you’d like to make a contribution.

# Team
* Software Engineers: [Sharmila Jesupaul](https://www.linkedin.com/in/sharmilajesupaul?authType=NAME_SEARCH&authToken=fk55&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A265798934%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1462251497635%2Ctas%3Asharmila), [Henry Wong](https://www.linkedin.com/in/henryw4k?authType=NAME_SEARCH&authToken=PF1r&locale=en_US&trk=tyah&trkInfo=clickedVertical%3Amynetwork%2CclickedEntityId%3A49994261%2CauthType%3ANAME_SEARCH%2Cidx%3A1-1-1%2CtarId%3A1462251519466%2Ctas%3Ahenry), [Hou Chia](https://www.linkedin.com/in/houchia)
* Physician Advisor: Dr. Kenneth Katz

# Usage
Take a look at our [demo](https://www.youtube.com/watch?v=3dRKGiNjVKQ).

# Technology Stack
Dr.Dick is built using the following technologies:
* React Native
* Redux

# Development
Before beginning development work, you must first install React Native and other dependencies on your local machine. For installation instructions, please refer to the React Native [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) page.

## Setup Instructions for iOS app
To get Dr. Dick up and running on your local development machine:

1. Install the React Native command line tools:
	```bash
	$ npm install -g react-native-cli
	```

	If you see the error, `EACCES: permission denied`, please run the command: `sudo npm install -g react-native-cli`.


1. Fork the central repo at [https://github.com/doctordick/doctordick](https://github.com/doctordick/doctordick).

1. Clone the forked repo to your local machine.

  ```bash
  $ git clone https://github.com/USERNAME/doctordick.git
  ```

1. Go to the root directory of your local repo. 

	```bash
	$ cd doctordick
	```

1. Run `$ react-native run-ios` OR open ios/doctordick.xcodeproj and hit 'Run' button in Xcode. Dr. Dick should show up in your iOS simulator!


## Contribution Guidelines
Documentation on how to contribute to Dr. Dick is available at: https://github.com/doctordick/doctordick/blob/master/CONTRIBUTING.md

For any bugs or issues, please create new issues at: https://github.com/doctordick/doctordick/issues 
