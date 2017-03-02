const data = {
  "projects": [
    {
      "show": true,
      "type": "hardware",
      "status": "Complete",
      "title": "Luci Flight Controller",
      "info": "Luci is an advanced flight controller designed to give drone developers a platform on which to easily create rich IoT-enabled applications. Luci is powered by a powerful Cortex-M4F ARM processor (flashed with a custom build of the PX4 flight stack) as well as an Intel Edison co-processor that hosts the user's application and provides Wi-Fi connectivity.<br /><br />Designed in DipTrace and manfuactured through turnkey services from <a href=\"http://www.tempoautomation.com/\">Tempo Automation</a>.",
      "client": "Dronesmith Technologies",
      "clientLink": "http://dronesmith.io",
      "date": "April 2015",
      "categories": [
        "UAV development"
      ],
      "images": [
        "luci_opt.png",
        "luci_back_opt.png"
      ],
      "previewImage": "luci_opt.png"
    },
    {
      "show": true,
      "type": "hardware",
      "status": "Complete",
      "title": "Luci µDev Expansion Board",
      "info": "The µDev expansion board is a daughterboard that gives developers access to the expansion connector underneath the Luci flight controller. Additionally provides extra serial ports for the Intel Edison co-processor and a slot for an optional Skywire LTE modem.<br /><br />Designed in KiCad and manfuactured through turnkey services from <a href=\"https://macrofab.com/\">MacroFab</a>.",
      "client": "Dronesmith Technologies",
      "clientLink": "http://dronesmith.io",
      "date": "November 2016",
      "categories": [
        "UAV development"
      ],
      "images": [
        "udev_opt.png",
        "udev_back_opt.png"
      ],
      "previewImage": "udev_opt.png"
    },
    {
      "show": true,
      "type": "hardware",
      "status": "Complete",
      "title": "Qua.R.K. Motor Controller Board",
      "info": "A quad <abbr title=\"Electronic Speed Controller\" class=\"initialism\">ESC</abbr> motor controller board designed to power four brushless DC motors at up to 20A each. Designed to be used in the Dronesmith Technologies Qua.R.K research platform.",
      "client": "Dronesmith Technologies",
      "clientLink": "http://dronesmith.io",
      "date": "January 2015",
      "categories": [
        "UAV development"
      ],
      "images": [
        "quadesc_v22.png"
      ],
      "previewImage": "quadesc_v22.png"
    },
    {
      "show": true,
      "type": "hardware",
      "status": "Complete",
      "title": "Luci Grove Expansion Board",
      "info": "An expansion board for the Luci flight controller that gives developers easy options for Grove sensor connectivity and prototypable access to the high density expansion header. Designed in KiCad, manufactured by Accutrace.",
      "client": "Dronesmith Technologies",
      "clientLink": "http://dronesmith.io",
      "date": "January 2015",
      "categories": [
        "UAV development"
      ],
      "images": [
        "luci_grove_dev.png",
        "luci_grove_dev_back.png"
      ],
      "previewImage": "luci_grove_dev.png"
    },
    {
      "show": true,
      "type": "hardware",
      "status": "WIP",
      "title": "Power Glove Controlled Drone",
      "info": "An overhaul of the iconic Power Glove to allow it to control robots, drones or anything your heart desires. It's so... good.<br /><br />Powered by PJRC's Teensy development board and an Espressif ESP8266 Wi-Fi module, the project features custom boards designed to replace the original electronics, making the glove wireless and fully customizable.<br /><br />Build logs, photos and more can be found on the <a href=\"https://hackaday.io/project/8455-power-glove-universal-hid\">project page on Hackaday.io</a>",
      "client": "Personal project",
      "clientLink": "",
      "date": "May 2016",
      "categories": [
        "Retrofitting"
      ],
      "images": [
        "pg_makerfaire.jpg",
        "pg_boards2.jpg",
        "pg_open.jpg"
      ],
      "previewImage": "pg_makerfaire.jpg"
    },
    {
      "show": true,
      "type": "hardware",
      "status": "WIP",
      "title": "IoT Alarm Clock",
      "info": "Born of a desire to push myself to wake up and get on my feet faster in the morning, I created the Remote Snooze Alarm Clock. The system consists of 4 parts:<br /><br /><ul class=\"text-left\"><li>A Wi-Fi snooze button placed in a remote location away from the bed</li><li>A Python-based alarm server that runs on nearly any computer with a speaker</li><li>An interface to set the alarm and view its status</li><li>An MQTT broker that manages messages between the button, server and interface</li></ul>The MQTT protocol was chosen out of a desire to learn a new technology and for its status as an efficient IoT communication system, a fact that would come in handy with the idea of crating more devices for my home.<br /><br /><a href=\"https://github.com/nullhan/NHA_AlarmClock_Server\">Alarm server</a> and <a href=\"https://github.com/nullhan/NHA_AlarmClock_Snoozer\">snooze button</a> repos hosted on Github.",
      "client": "Personal project",
      "clientLink": "",
      "date": "2016",
      "categories": [
        "IoT",
        "Home"
      ],
      "images": [
        "iotalarmclock_ss.jpg"
      ],
      "previewImage": "iotalarmclock_ss.jpg"
    },
    {
      "show": true,
      "type": "software",
      "status": "WIP",
      "title": "Happy Hour Locator",
      "info": "A bit of a misnomer, the Happy Hour Locator is a webapp powered by AngularJS, NodeJS and Express that uses the user's location to find nearby bars and <em><strong>desirably</strong></em> determine which currently have happy hour specials.<br /><br />Data is pulled from Yelp using their Fusion API, but unfortunately Yelp does not currently provide data regarding happy hour times. As such the app is unable to determine if found business actually happy hour at the time of search.<br /><br /><a href=\"http://happyhour.nolandoesdev.com/\">Try the app hosted on Heroku!</a>",
      "client": "Personal project",
      "clientLink": "",
      "date": "February 2017",
      "categories": [
        "Web development"
      ],
      "images": [
        "happyhour_ss1.png",
        "happyhour_ss2.png"
      ],
      "previewImage": "happyhour.png"
    },
    {
      "show": true,
      "type": "software",
      "status": "WIP",
      "title": "NeoPixelEffects Arduino Library",
      "info": "NeoPixelEffects is a library created to extend the FastLED library by Daniel Garcia with various visual effects, such as fades, sparkles, static, waves, Larson scanners and more. A given set of LEDs can even be divded into subsections with their own individual effects.<br /><br />Used on the Skyworks Aerial Systems Qua.R.K. quadcopter during the <a href=\"http://dronesmith.io/portfolio/dxa/\">Drones X Art exhibit</a> at Life Is Beautiful 2015.<br /><br /><a href=\"https://github.com/nullhan/NeoPixelEffects\">Repo hosted on Github</a>",
      "client": "Personal project",
      "clientLink": "",
      "date": "2015",
      "categories": [
        "Arduino"
      ],
      "images": ["quark_lib.jpg"],
      "previewImage": "quark_lib.jpg"
    },
    {
      "show": false,
      "type": "software",
      "status": "WIP",
      "title": "Half Past Brew Webapp",
      "info": "A MEAN-stack based webapp designed to find breweries and taprooms near the user and suggest a beer from each. Data provided by <a href=\"http://brewerydb.com\">BreweryDB.com</a>",
      "client": "Personal project",
      "clientLink": "",
      "date": "January 2017",
      "categories": [
        "Web development"
      ],
      "images": [],
      "previewImage": "halfpastbrew.png"
    }
  ]
};
