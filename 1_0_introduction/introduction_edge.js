/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'book_stock_image_by_xxdigipxx',
                            type: 'image',
                            rect: ['-10px', '0', '810px', '590px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"book_stock_image_by_xxdigipxx.png",'0px','0px','810px','590px', 'no-repeat']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['50px', '35px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin:0px\">περιεχόμενα</p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"],
                            textStyle: ["", "", "20px", "", ""]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['439px', '49px', '286px', '415px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: justify; text-indent: 0px; line-height: 20px;\"><span style=\"font-size: 11px;\"></span></p><p style=\"margin: 0px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: justify; text-indent: 0px; line-height: 20px;\">Οι περισσότερες προσομοιώσεις / οπτικοποιήσεις είναι διαδραστικές οπότε υπάρχουν κουμπιά που επηρεάζουν το παρατηρήσιμο φαίνομενο της κάθε σελίδας. </p><p style=\"margin: 0px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: justify; text-indent: 0px; line-height: 20px;\">​Σε πολλές από τις σελίδες επιχειρείται η παρουσίαση του εκάστοτε φαινομένου με πολλούς τρόπους: φωτογραφίες, σκίτσα, κινούμενη εικόνα.</p><p></p><p style=\"margin: 0px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: justify; text-indent: 0px; line-height: 20px;\"><span style=\"font-size: 11px;\">Για να πλοηγηθείτε στην εφαρμογή μπορείτε να διαλέξετε κάποιο από τις επιλογές των περιεχομένων αριστερά, ή να δείτε με τη σειρά όλες τις σελίδες της εφαρμογής.</span></p><p style=\"margin: 0px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: justify; text-indent: 0px; line-height: 20px;\"><span style=\"font-size: 11px;\"></span>Σε κάθε σελίδα θα υπάρχει το κουμπί \"Περιεχόμενα\" που θα σας επιστρέφει πάντα στην παρούσα σελιδα, καθώς και η δυνατότητα να πλοηγηθείτε στην επόμενη και την προηγούμενη σελίδα. Με βάση τα ακόλουθα εικονίδια:</p><p style=\"margin: 0px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: justify; text-indent: 0px; line-height: 20px;\">​</p><p style=\"margin: 0px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: justify; text-indent: 0px; line-height: 20px;\">​</p><p style=\"margin: 0px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: justify; text-indent: 0px; line-height: 20px;\"><span style=\"font-size: 11px;\"></span></p><p style=\"margin: 0px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: justify; text-indent: 0px; line-height: 20px;\"><span style=\"font-size: 11px;\"></span></p><p style=\"margin: 0px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 300; font-style: normal; text-decoration: none; font-size: 11px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: justify; text-indent: 0px; line-height: 20px;\"><span style=\"font-size: 11px;\">​</span></p><p style=\"margin: 0px; text-align: justify;\"><span style=\"font-size: 11px;\"></span></p><p style=\"margin: 0px; text-align: justify;\"><span style=\"font-size: 11px; font-family: Georgia, 'Times New Roman', Times, serif; font-weight: 300;\"></span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "20px", "", "none"]
                        },
                        {
                            id: 'right_newCopy',
                            type: 'image',
                            rect: ['629px', '422px', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"right_new.png",'0px','0px']
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['511px', '34px', '95px', '24px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'link1',
                            type: 'text',
                            rect: ['54px', '75px', '162px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Εισαγωγή - Big bang</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link2',
                            type: 'text',
                            rect: ['54px', '100px', '162px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">Κουαρκ - Quarks</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link3',
                            type: 'text',
                            rect: ['54px', '125px', '162px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Βαρυόνια - Baryons</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link4',
                            type: 'text',
                            rect: ['54px', '150px', '162px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Πυρήνας</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link5',
                            type: 'text',
                            rect: ['54px', '175px', '162px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Ατομικά πρότυπα</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link6',
                            type: 'text',
                            rect: ['54px', '200px', '162px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">Άτομο Σιδήρου</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link7',
                            type: 'text',
                            rect: ['54px', '225px', '162px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Δομή της ύλης (Στερεό)</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link8',
                            type: 'text',
                            rect: ['55px', '250px', '162px', '24px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">Δομή της ύλης (Υγρό)</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link9',
                            type: 'text',
                            rect: ['55px', '275px', '162px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px; \">Δομή της ύλης (Αέριο)</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link10',
                            type: 'text',
                            rect: ['54px', '400px', '162px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Ηλ. Αγωγιμότητα</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link11',
                            type: 'text',
                            rect: ['54px', '325px', '162px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Πίεση (μικροσκοπικά)</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link12',
                            type: 'text',
                            rect: ['54px', '350px', '162px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Άνεμος και εξάτμιση</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link14',
                            type: 'text',
                            rect: ['54px', '375px', '162px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Μετάδοση ήχου</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link15',
                            type: 'text',
                            rect: ['54px', '450px', '197px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Σχηματισμός μορίων</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link16',
                            type: 'text',
                            rect: ['54px', '425px', '197px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Ιονισμός - Παραγωγή φωτός</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link17',
                            type: 'text',
                            rect: ['54px', '475px', '162px', '31px', 'auto', 'auto'], 
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Ανάμιξη υγρών</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link18',
                            type: 'text',
                            rect: ['54px', '500px', '162px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​_________________</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link19',
                            type: 'text',
                            rect: ['53px', '525px', '226px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​Πηγές, Σχετικά με το λογισμικό</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'link18Copy',
                            type: 'text',
			    rect: ['55px', '300px', '162px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">Νερό - Πάγος</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "600", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99','0.99']]
                        },
                        {
                            id: 'introduction_new',
                            type: 'image',
                            rect: ['560px', '422px', '40px', '40px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"introduction_new.png",'0px','0px']
                        },
                        {
                            id: 'left_new',
                            type: 'image',
                            rect: ['483px', '423px', '40px', '40px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"left_new.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(50,50,50,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(50,50,50,1.00)',
                            'rgba(50,50,50,1.00)'
                        ],
                        [
                            "eid6",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '800px',
                            '800px'
                        ],
                        [
                            "eid5",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '600px',
                            '600px'
                        ]
                    ]
                }
            },
            "link1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '135px', '24px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("introduction_edgeActions.js");
})("EDGE-212609867");
