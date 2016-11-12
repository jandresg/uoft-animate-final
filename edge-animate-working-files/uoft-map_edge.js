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
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'NO_FELLOWS',
                            type: 'image',
                            rect: ['209px', '22px', '728px', '602px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"NO%20FELLOWS.svg",'0px','0px']
                        },
                        {
                            id: 'CountryAFG',
                            symbolName: 'CountryAFG',
                            type: 'rect',
                            rect: ['606', '345', '27', '27', 'auto', 'auto']
                        },
                        {
                            id: 'CountryALG',
                            symbolName: 'CountryALG',
                            type: 'rect',
                            rect: ['425', '349', '53', '52', 'auto', 'auto']
                        },
                        {
                            id: 'CountryARG',
                            symbolName: 'CountryARG',
                            type: 'rect',
                            rect: ['257', '511', '51', '100', 'auto', 'auto']
                        },
                        {
                            id: 'CountryAUS',
                            symbolName: 'CountryAUS',
                            type: 'rect',
                            rect: ['743px', '482px', '103', '96', 'auto', 'auto']
                        },
                        {
                            id: 'CountryAUST',
                            symbolName: 'CountryAUST',
                            type: 'rect',
                            rect: ['474', '307', '18', '8', 'auto', 'auto']
                        },
                        {
                            id: 'CountryBAN',
                            symbolName: 'CountryBAN',
                            type: 'rect',
                            rect: ['678', '382', '9', '11', 'auto', 'auto']
                        },
                        {
                            id: 'CountryBEL',
                            symbolName: 'CountryBEL',
                            type: 'rect',
                            rect: ['456', '297', '8', '5', 'auto', 'auto']
                        },
                        {
                            id: 'CountryBRA',
                            symbolName: 'CountryBRA',
                            type: 'rect',
                            rect: ['257', '440', '101', '104', 'auto', 'auto']
                        },
                        {
                            id: 'CountryBRU',
                            symbolName: 'CountryBRU',
                            type: 'rect',
                            rect: ['688', '376', '22', '46', 'auto', 'auto']
                        },
                        {
                            id: 'CountryCAM',
                            symbolName: 'CountryCAM',
                            type: 'rect',
                            rect: ['471', '422', '19', '24', 'auto', 'auto']
                        },
                        {
                            id: 'CountryCAN',
                            symbolName: 'CountryCAN',
                            type: 'rect',
                            rect: ['82px', '32', '229', '299', 'auto', 'auto']
                        },
                        {
                            id: 'CountryCHI',
                            symbolName: 'CountryCHI',
                            type: 'rect',
                            rect: ['252', '499', '21', '127', 'auto', 'auto']
                        },
                        {
                            id: 'CountryCOL',
                            symbolName: 'CountryCOL',
                            type: 'rect',
                            rect: ['244', '423', '29', '36', 'auto', 'auto']
                        },
                        {
                            id: 'CountryCOS',
                            symbolName: 'CountryCOS',
                            type: 'rect',
                            rect: ['226', '424', '7', '6', 'auto', 'auto']
                        },
                        {
                            id: 'CountryEGY',
                            symbolName: 'CountryEGY',
                            type: 'rect',
                            rect: ['513', '364', '29', '29', 'auto', 'auto']
                        },
                        {
                            id: 'CountryFIN',
                            symbolName: 'CountryFIN',
                            type: 'rect',
                            rect: ['502', '194', '27', '62', 'auto', 'auto']
                        },
                        {
                            id: 'CountryFRA',
                            symbolName: 'CountryFRA',
                            type: 'rect',
                            rect: ['437', '298', '31', '32', 'auto', 'auto']
                        },
                        {
                            id: 'CountryGER',
                            symbolName: 'CountryGER',
                            type: 'rect',
                            rect: ['464', '281', '22', '30', 'auto', 'auto']
                        },
                        {
                            id: 'CountryGRE',
                            symbolName: 'CountryGRE',
                            type: 'rect',
                            rect: ['502', '333', '15', '21', 'auto', 'auto']
                        },
                        {
                            id: 'CountryHNK',
                            symbolName: 'CountryHNK',
                            type: 'rect',
                            rect: ['743', '392', '5', '4', 'auto', 'auto']
                        },
                        {
                            id: 'CountryHUN',
                            symbolName: 'CountryHUN',
                            type: 'rect',
                            rect: ['491', '309', '16', '9', 'auto', 'auto']
                        },
                        {
                            id: 'CountryIND',
                            symbolName: 'CountryIND',
                            type: 'rect',
                            rect: ['626', '356', '52', '75', 'auto', 'auto']
                        },
                        {
                            id: 'CountryIRE',
                            symbolName: 'CountryIRE',
                            type: 'rect',
                            rect: ['423', '280', '9', '15', 'auto', 'auto']
                        },
                        {
                            id: 'CountryIRAN',
                            symbolName: 'CountryIRAN',
                            type: 'rect',
                            rect: ['563', '341', '48', '44', 'auto', 'auto']
                        },
                        {
                            id: 'CountryIRAQ',
                            symbolName: 'CountryIRAQ',
                            type: 'rect',
                            rect: ['550', '348', '22', '25', 'auto', 'auto']
                        },
                        {
                            id: 'CountrySAU',
                            symbolName: 'CountrySAU',
                            type: 'rect',
                            rect: ['539', '365', '53', '42', 'auto', 'auto']
                        },
                        {
                            id: 'CountrySCO',
                            symbolName: 'CountrySCO',
                            type: 'rect',
                            rect: ['432', '263', '10', '16', 'auto', 'auto']
                        },
                        {
                            id: 'CountryISR',
                            symbolName: 'CountryISR',
                            type: 'rect',
                            rect: ['537px', '360px', '4', '4', 'auto', 'auto']
                        },
                        {
                            id: 'CountryITA',
                            symbolName: 'CountryITA',
                            type: 'rect',
                            rect: ['467', '314', '27', '29', 'auto', 'auto']
                        },
                        {
                            id: 'CountryJAM',
                            symbolName: 'CountryJAM',
                            type: 'rect',
                            rect: ['243', '404', '10', '3', 'auto', 'auto']
                        },
                        {
                            id: 'CountryJAP',
                            symbolName: 'CountryJAP',
                            type: 'rect',
                            rect: ['785', '321', '40', '46', 'auto', 'auto']
                        },
                        {
                            id: 'CountryJOR',
                            symbolName: 'CountryJOR',
                            type: 'rect',
                            rect: ['540px', '362px', '10', '11', 'auto', 'auto']
                        },
                        {
                            id: 'CountryKUW',
                            symbolName: 'CountryKUW',
                            type: 'rect',
                            rect: ['569', '370', '5', '5', 'auto', 'auto']
                        },
                        {
                            id: 'CountryLEB',
                            symbolName: 'CountryLEB',
                            type: 'rect',
                            rect: ['539', '353px', '3', '7', 'auto', 'auto']
                        },
                        {
                            id: 'CountryLIB',
                            symbolName: 'CountryLIB',
                            type: 'rect',
                            rect: ['473', '361', '39', '38', 'auto', 'auto']
                        },
                        {
                            id: 'CountryMAC',
                            symbolName: 'CountryMAC',
                            type: 'rect',
                            rect: ['502', '330', '6', '5', 'auto', 'auto']
                        },
                        {
                            id: 'CountryMLW',
                            symbolName: 'CountryMLW',
                            type: 'rect',
                            rect: ['534', '478', '6', '18', 'auto', 'auto']
                        },
                        {
                            id: 'CountryMAL',
                            symbolName: 'CountryMAL',
                            type: 'rect',
                            rect: ['709', '436', '47', '14', 'auto', 'auto']
                        },
                        {
                            id: 'CountryMEX',
                            symbolName: 'CountryMEX',
                            type: 'rect',
                            rect: ['145', '363', '77', '49', 'auto', 'auto']
                        },
                        {
                            id: 'CountryNEP',
                            symbolName: 'CountryNEP',
                            type: 'rect',
                            rect: ['657', '371', '19', '11', 'auto', 'auto']
                        },
                        {
                            id: 'CountryNET',
                            symbolName: 'CountryNET',
                            type: 'rect',
                            rect: ['458', '288', '7', '9', 'auto', 'auto']
                        },
                        {
                            id: 'CountryNWZ',
                            symbolName: 'CountryNWZ',
                            type: 'rect',
                            rect: ['881', '550', '30', '39', 'auto', 'auto']
                        },
                        {
                            id: 'CountryNIG',
                            symbolName: 'CountryNIG',
                            type: 'rect',
                            rect: ['455', '417', '30', '24', 'auto', 'auto']
                        },
                        {
                            id: 'CountryOMA',
                            symbolName: 'CountryOMA',
                            type: 'rect',
                            rect: ['585', '386', '18', '21', 'auto', 'auto']
                        },
                        {
                            id: 'CountryPAK',
                            symbolName: 'CountryPAK',
                            type: 'rect',
                            rect: ['609', '349', '39', '40', 'auto', 'auto']
                        },
                        {
                            id: 'CountryPHI',
                            symbolName: 'CountryPHI',
                            type: 'rect',
                            rect: ['760', '404', '16', '33', 'auto', 'auto']
                        },
                        {
                            id: 'CountryPOL',
                            symbolName: 'CountryPOL',
                            type: 'rect',
                            rect: ['486', '282', '24', '22', 'auto', 'auto']
                        },
                        {
                            id: 'CountryPOR',
                            symbolName: 'CountryPOR',
                            type: 'rect',
                            rect: ['424', '332', '7', '17', 'auto', 'auto']
                        },
                        {
                            id: 'CountryROM',
                            symbolName: 'CourtneyROM',
                            type: 'rect',
                            rect: ['502', '310', '20', '16', 'auto', 'auto']
                        },
                        {
                            id: 'CountrySAI',
                            symbolName: 'CountrySAI',
                            type: 'rect',
                            rect: ['279', '411', '4', '4', 'auto', 'auto']
                        },
                        {
                            id: 'CountrySER',
                            symbolName: 'CountrySER',
                            type: 'rect',
                            rect: ['498', '318', '9', '12', 'auto', 'auto']
                        },
                        {
                            id: 'CountrySIN',
                            symbolName: 'CountrySIN',
                            type: 'rect',
                            rect: ['718', '446', '3', '3', 'auto', 'auto']
                        },
                        {
                            id: 'CountrySKO',
                            symbolName: 'CountrySKO',
                            type: 'rect',
                            rect: ['777', '345', '7', '12', 'auto', 'auto']
                        },
                        {
                            id: 'CountrySPA',
                            symbolName: 'CountrySPA',
                            type: 'rect',
                            rect: ['425', '327', '31', '24', 'auto', 'auto']
                        },
                        {
                            id: 'CountrySRI',
                            symbolName: 'CountrySRI',
                            type: 'rect',
                            rect: ['656', '429', '4', '8', 'auto', 'auto']
                        },
                        {
                            id: 'CountrySUD',
                            symbolName: 'CountrySUD',
                            type: 'rect',
                            rect: ['506', '394', '41', '35', 'auto', 'auto']
                        },
                        {
                            id: 'CountrySWI',
                            symbolName: 'CountrySWI',
                            type: 'rect',
                            rect: ['464', '311', '10', '6', 'auto', 'auto']
                        },
                        {
                            id: 'CountrySYR',
                            symbolName: 'CountrySYR',
                            type: 'rect',
                            rect: ['542', '348', '14', '14', 'auto', 'auto']
                        },
                        {
                            id: 'CountryTHA',
                            symbolName: 'CountryTHA',
                            type: 'rect',
                            rect: ['702', '400px', '20', '21', 'auto', 'auto']
                        },
                        {
                            id: 'CountryTUR',
                            symbolName: 'CountryTUR',
                            type: 'rect',
                            rect: ['516', '332', '47', '19', 'auto', 'auto']
                        },
                        {
                            id: 'CountryUAE',
                            symbolName: 'CountryUAE',
                            type: 'rect',
                            rect: ['583', '383', '10', '8', 'auto', 'auto']
                        },
                        {
                            id: 'CountryUK',
                            symbolName: 'CountryUK',
                            type: 'rect',
                            rect: ['434', '279', '18', '22', 'auto', 'auto']
                        },
                        {
                            id: 'CountryUSA',
                            symbolName: 'CountryUSA',
                            type: 'rect',
                            rect: ['13px', '184', '260', '200', 'auto', 'auto']
                        },
                        {
                            id: 'CountryYEM',
                            symbolName: 'CountryYEM',
                            type: 'rect',
                            rect: ['559', '403', '26', '16', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['342px', '88px', '590px', '102px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '950px', '650px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 878,
                    autoPlay: true,
                    data: [
                        [
                            "eid1172",
                            "opacity",
                            878,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '0'
                        ]
                    ]
                }
            },
            "CountryAFG": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '0px', '23px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.3025', '1.3025']],
                            id: 'CountryAFGAHNISTAN',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryAFGAHNISTAN.svg', '0px', '0px', '100%', '100%', 'no-repeat']
                        },
                        {
                            type: 'image',
                            id: 'CountryAFG2',
                            rect: ['0px', '0px', '27px', '27px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryAFG.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-58',
                            rect: ['-25px', '-199px', '317px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-58.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '27px', '27px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 751
                    },
                    data: [
                        [
                            "eid1507",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-58}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1506",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-58}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1505",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-58}",
                            '-199px',
                            '-209px'
                        ],
                        [
                            "eid1504",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-58}",
                            '-209px',
                            '-219px'
                        ],
                        [
                            "eid309",
                            "opacity",
                            500,
                            126,
                            "linear",
                            "${CountryAFG2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid310",
                            "opacity",
                            751,
                            124,
                            "linear",
                            "${CountryAFG2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            500,
                            126,
                            "linear",
                            "${CountryAFGAHNISTAN}",
                            '1.1625',
                            '1.3025'
                        ],
                        [
                            "eid35",
                            "scaleY",
                            751,
                            124,
                            "linear",
                            "${CountryAFGAHNISTAN}",
                            '1.3025',
                            '1.1625'
                        ],
                        [
                            "eid27",
                            "scaleX",
                            500,
                            126,
                            "linear",
                            "${CountryAFGAHNISTAN}",
                            '1.1625',
                            '1.3025'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            751,
                            124,
                            "linear",
                            "${CountryAFGAHNISTAN}",
                            '1.3025',
                            '1.1625'
                        ],
                        [
                            "eid1",
                            "opacity",
                            500,
                            126,
                            "linear",
                            "${CountryAFGAHNISTAN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            751,
                            124,
                            "linear",
                            "${CountryAFGAHNISTAN}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryALG": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '53px', '52px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.1', '1.1']],
                            id: 'CountryALGERIA',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryALGERIA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryALG2',
                            rect: ['0px', '0px', '53px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryALG.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-62',
                            rect: ['224px', '-213px', '249px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-62.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 876,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid54",
                            "opacity",
                            500,
                            124,
                            "linear",
                            "${CountryALGERIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid56",
                            "opacity",
                            750,
                            124,
                            "linear",
                            "${CountryALGERIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1521",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-62}",
                            '-203px',
                            '-213px'
                        ],
                        [
                            "eid1520",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-62}",
                            '-213px',
                            '-223px'
                        ],
                        [
                            "eid1523",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-62}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1522",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-62}",
                            '1',
                            '0'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            500,
                            124,
                            "linear",
                            "${CountryALGERIA}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid45",
                            "scaleX",
                            750,
                            126,
                            "linear",
                            "${CountryALGERIA}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            500,
                            124,
                            "linear",
                            "${CountryALGERIA}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid47",
                            "scaleY",
                            750,
                            126,
                            "linear",
                            "${CountryALGERIA}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid312",
                            "opacity",
                            500,
                            124,
                            "linear",
                            "${CountryALG2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid313",
                            "opacity",
                            750,
                            124,
                            "linear",
                            "${CountryALG2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CountryARG": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '51px', '100px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.11', '1.11']],
                            id: 'CountryARGENTINA',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryARGENTINA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryARG2',
                            rect: ['0px', '0px', '51px', '100px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryARG.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-63',
                            rect: ['340px', '-376px', '301px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-63.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '51px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 876,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid76",
                            "scaleY",
                            500,
                            126,
                            "linear",
                            "${CountryARGENTINA}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid82",
                            "scaleY",
                            750,
                            126,
                            "linear",
                            "${CountryARGENTINA}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid74",
                            "opacity",
                            500,
                            126,
                            "linear",
                            "${CountryARGENTINA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "opacity",
                            750,
                            126,
                            "linear",
                            "${CountryARGENTINA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            500,
                            126,
                            "linear",
                            "${CountryARGENTINA}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid80",
                            "scaleX",
                            750,
                            126,
                            "linear",
                            "${CountryARGENTINA}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid315",
                            "opacity",
                            500,
                            124,
                            "linear",
                            "${CountryARG2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid316",
                            "opacity",
                            750,
                            124,
                            "linear",
                            "${CountryARG2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1527",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-63}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1526",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-63}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1525",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-63}",
                            '-365px',
                            '-376px'
                        ],
                        [
                            "eid1524",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-63}",
                            '-376px',
                            '-385px'
                        ]
                    ]
                }
            },
            "CountryAUS": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '103px', '96px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            id: 'CountryAUSTRALIA',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryAUSTRALIA2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryAUS2',
                            rect: ['0px', '-1px', '103px', '96px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryAUS.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-59',
                            rect: ['-156px', '-346px', '311px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-59.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '103px', '96px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 502,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid113",
                            "scaleY",
                            502,
                            123,
                            "linear",
                            "${CountryAUSTRALIA}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid119",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryAUSTRALIA}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1509",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-59}",
                            '-335px',
                            '-346px'
                        ],
                        [
                            "eid1508",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-59}",
                            '-346px',
                            '-355px'
                        ],
                        [
                            "eid1511",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-59}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1510",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-59}",
                            '1',
                            '0'
                        ],
                        [
                            "eid121",
                            "opacity",
                            502,
                            123,
                            "linear",
                            "${CountryAUSTRALIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid123",
                            "opacity",
                            750,
                            123,
                            "linear",
                            "${CountryAUSTRALIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid112",
                            "scaleX",
                            502,
                            123,
                            "linear",
                            "${CountryAUSTRALIA}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid118",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryAUSTRALIA}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid322",
                            "opacity",
                            502,
                            124,
                            "linear",
                            "${CountryAUS2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid323",
                            "opacity",
                            750,
                            124,
                            "linear",
                            "${CountryAUS2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CountryAUST": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '18px', '8px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.2', '1.2']],
                            id: 'CountryAUSTRIA',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryAUSTRIA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryAUST2',
                            rect: ['0', '0px', '18px', '8px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryAUST.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-61',
                            rect: ['159px', '-171px', '265px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-61.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '18px', '8px']
                        }
                    }
                },
                timeline: {
                    duration: 878,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1517",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-61}",
                            '-161px',
                            '-171px'
                        ],
                        [
                            "eid1516",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-61}",
                            '-171px',
                            '-181px'
                        ],
                        [
                            "eid1519",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-61}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1518",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-61}",
                            '1',
                            '0'
                        ],
                        [
                            "eid125",
                            "scaleY",
                            500,
                            128,
                            "linear",
                            "${CountryAUSTRIA}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid133",
                            "scaleY",
                            750,
                            128,
                            "linear",
                            "${CountryAUSTRIA}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid124",
                            "scaleX",
                            500,
                            128,
                            "linear",
                            "${CountryAUSTRIA}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            750,
                            128,
                            "linear",
                            "${CountryAUSTRIA}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid337",
                            "opacity",
                            500,
                            128,
                            "linear",
                            "${CountryAUST2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid338",
                            "opacity",
                            750,
                            128,
                            "linear",
                            "${CountryAUST2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid127",
                            "opacity",
                            500,
                            128,
                            "linear",
                            "${CountryAUSTRIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            750,
                            128,
                            "linear",
                            "${CountryAUSTRIA}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryBAN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '9px', '11px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.25', '1.25']],
                            id: 'CountryBANGLADESH',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryBANGLADESH.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryBAN2',
                            rect: ['0', '0', '9px', '11px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryBAN.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-60',
                            rect: ['-87px', '-246px', '307px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-60.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '9px', '11px']
                        }
                    }
                },
                timeline: {
                    duration: 878,
                    autoPlay: true,
                    labels: {
                        "mouson": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid158",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryBANGLADESH}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryBANGLADESH}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1515",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-60}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1514",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-60}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1513",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-60}",
                            '-235px',
                            '-246px'
                        ],
                        [
                            "eid1512",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-60}",
                            '-246px',
                            '-255px'
                        ],
                        [
                            "eid150",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryBANGLADESH}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid154",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryBANGLADESH}",
                            '1.25',
                            '1'
                        ],
                        [
                            "eid148",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryBANGLADESH}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid155",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryBANGLADESH}",
                            '1.25',
                            '1'
                        ],
                        [
                            "eid341",
                            "opacity",
                            500,
                            128,
                            "linear",
                            "${CountryBAN2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid340",
                            "opacity",
                            750,
                            128,
                            "linear",
                            "${CountryBAN2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CountryBEL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '8px', '5px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.3', '1.3']],
                            id: 'CountryBELGIUM',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryBELGIUM.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryBEL2',
                            rect: ['0', '0', '8px', '5px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryBEL.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-46',
                            rect: ['171px', '-151px', '271px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-46.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '8px', '5px']
                        }
                    }
                },
                timeline: {
                    duration: 878,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1437",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-46}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1438",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-46}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1435",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-46}",
                            '-151px',
                            '-161px'
                        ],
                        [
                            "eid1436",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-46}",
                            '-161px',
                            '-171px'
                        ],
                        [
                            "eid343",
                            "opacity",
                            499,
                            128,
                            "linear",
                            "${CountryBEL2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid344",
                            "opacity",
                            750,
                            128,
                            "linear",
                            "${CountryBEL2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "scaleY",
                            500,
                            127,
                            "linear",
                            "${CountryBELGIUM}",
                            '1',
                            '1.6'
                        ],
                        [
                            "eid174",
                            "scaleY",
                            750,
                            127,
                            "linear",
                            "${CountryBELGIUM}",
                            '1.6',
                            '1'
                        ],
                        [
                            "eid168",
                            "scaleX",
                            500,
                            127,
                            "linear",
                            "${CountryBELGIUM}",
                            '1',
                            '1.7'
                        ],
                        [
                            "eid172",
                            "scaleX",
                            750,
                            127,
                            "linear",
                            "${CountryBELGIUM}",
                            '1.7',
                            '1'
                        ],
                        [
                            "eid166",
                            "opacity",
                            500,
                            127,
                            "linear",
                            "${CountryBELGIUM}",
                            '0',
                            '1'
                        ],
                        [
                            "eid173",
                            "opacity",
                            750,
                            127,
                            "linear",
                            "${CountryBELGIUM}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryBRA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '101px', '104px', 'auto', 'auto'],
                            id: 'CountryBRAZIL',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryBRAZIL.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryBRA2',
                            rect: ['0', '0', '101px', '104px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryBRA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-49',
                            rect: ['394px', '-294px', '247px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-49.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '101px', '104px']
                        }
                    }
                },
                timeline: {
                    duration: 878,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid346",
                            "opacity",
                            500,
                            128,
                            "linear",
                            "${CountryBRA2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid347",
                            "opacity",
                            750,
                            128,
                            "linear",
                            "${CountryBRA2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid175",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryBRAZIL}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid182",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryBRAZIL}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid186",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${CountryBRAZIL}",
                            '0',
                            '0'
                        ],
                        [
                            "eid178",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryBRAZIL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid183",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryBRAZIL}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1449",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-49}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1450",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-49}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1447",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-49}",
                            '-294px',
                            '-304px'
                        ],
                        [
                            "eid1448",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-49}",
                            '-304px',
                            '-314px'
                        ],
                        [
                            "eid176",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryBRAZIL}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid184",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryBRAZIL}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "CountryBRU": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '22px', '46px', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '1.14999']],
                            id: 'CountryBURMA',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryBURMA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryBUR',
                            rect: ['0', '0', '21px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryBUR.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-50',
                            rect: ['-22px', '-230px', '232px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-50.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '22px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 878,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid204",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryBURMA}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid206",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryBURMA}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid205",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryBURMA}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid207",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryBURMA}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1453",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-50}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1454",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-50}",
                            '1',
                            '0'
                        ],
                        [
                            "eid350",
                            "opacity",
                            500,
                            128,
                            "linear",
                            "${CountryBUR}",
                            '1',
                            '0'
                        ],
                        [
                            "eid349",
                            "opacity",
                            750,
                            128,
                            "linear",
                            "${CountryBUR}",
                            '0',
                            '1'
                        ],
                        [
                            "eid193",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryBURMA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryBURMA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1451",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-50}",
                            '-230px',
                            '-240px'
                        ],
                        [
                            "eid1452",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-50}",
                            '-240px',
                            '-250px'
                        ]
                    ]
                }
            },
            "CountryCAM": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '19px', '24px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            id: 'CountryCAMEROON',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryCAMEROON.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryCAM2',
                            rect: ['0', '0', '19px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryCAM.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-57',
                            rect: ['144px', '-296px', '283px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-57.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '19px', '24px']
                        }
                    }
                },
                timeline: {
                    duration: 878,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid213",
                            "scaleX",
                            500,
                            124,
                            "linear",
                            "${CountryCAMEROON}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid218",
                            "scaleX",
                            752,
                            124,
                            "linear",
                            "${CountryCAMEROON}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid214",
                            "scaleY",
                            500,
                            124,
                            "linear",
                            "${CountryCAMEROON}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid220",
                            "scaleY",
                            752,
                            124,
                            "linear",
                            "${CountryCAMEROON}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid212",
                            "opacity",
                            500,
                            124,
                            "linear",
                            "${CountryCAMEROON}",
                            '0',
                            '1'
                        ],
                        [
                            "eid219",
                            "opacity",
                            752,
                            124,
                            "linear",
                            "${CountryCAMEROON}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1503",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-57}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1502",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-57}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1501",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-57}",
                            '-276px',
                            '-286px'
                        ],
                        [
                            "eid1500",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-57}",
                            '-286px',
                            '-296px'
                        ],
                        [
                            "eid353",
                            "opacity",
                            500,
                            128,
                            "linear",
                            "${CountryCAM2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid352",
                            "opacity",
                            750,
                            128,
                            "linear",
                            "${CountryCAM2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CountryCAN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryCANADA',
                            rect: ['0px', '0px', '229px', '299px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.02', '1.02']],
                            fill: ['rgba(0,0,0,0)', 'images/CountryCANADA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryCAN2',
                            rect: ['0px', '0px', '229px', '299px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryCAN.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-56',
                            rect: ['527px', '104px', '289px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-56.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '229px', '299px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1499",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-56}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1498",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-56}",
                            '1',
                            '0'
                        ],
                        [
                            "eid588",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryCANADA}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid589",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryCANADA}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid1497",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-56}",
                            '133px',
                            '104px'
                        ],
                        [
                            "eid1496",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-56}",
                            '104px',
                            '74px'
                        ],
                        [
                            "eid587",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryCANADA}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid590",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryCANADA}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid579",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryCAN2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid581",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryCAN2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid584",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryCANADA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid582",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryCANADA}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryCHI": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryCHILE',
                            rect: ['0px', '0px', '21px', '127px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryCHILE.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryCHI2',
                            rect: ['0px', '0px', '21px', '127px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryCHI.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-55',
                            rect: ['415px', '-276%', '231px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-55.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '21px', '127px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 499,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid370",
                            "opacity",
                            499,
                            125,
                            "linear",
                            "${CountryCHI2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid372",
                            "opacity",
                            749,
                            125,
                            "linear",
                            "${CountryCHI2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid368",
                            "opacity",
                            499,
                            125,
                            "linear",
                            "${CountryCHILE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid369",
                            "opacity",
                            749,
                            125,
                            "linear",
                            "${CountryCHILE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid376",
                            "scaleX",
                            499,
                            126,
                            "linear",
                            "${CountryCHILE}",
                            '1',
                            '1.06'
                        ],
                        [
                            "eid380",
                            "scaleX",
                            749,
                            126,
                            "linear",
                            "${CountryCHILE}",
                            '1.06',
                            '1'
                        ],
                        [
                            "eid377",
                            "scaleY",
                            499,
                            126,
                            "linear",
                            "${CountryCHILE}",
                            '1',
                            '1.06'
                        ],
                        [
                            "eid381",
                            "scaleY",
                            749,
                            126,
                            "linear",
                            "${CountryCHILE}",
                            '1.06',
                            '1'
                        ],
                        [
                            "eid1492",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-55}",
                            '-276%',
                            '-285.83%'
                        ],
                        [
                            "eid1493",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-55}",
                            '-285.83%',
                            '-296%'
                        ],
                        [
                            "eid1494",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-55}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1495",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-55}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryCOL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '-1px', '29px', '36px', 'auto', 'auto'],
                            id: 'CountryCOLOMBIA',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryCOLOMBIA.svg', '0px', '0px']
                        },
                        {
                            rect: ['0', '-1px', '29px', '36px', 'auto', 'auto'],
                            id: 'CountryCOL2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryCOL.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-47',
                            rect: ['365px', '-277px', '289px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-47.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '29px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid393",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryCOLOMBIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid400",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryCOLOMBIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1441",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-47}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1442",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-47}",
                            '1',
                            '0'
                        ],
                        [
                            "eid391",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryCOLOMBIA}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid399",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryCOLOMBIA}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid392",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryCOLOMBIA}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid401",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryCOLOMBIA}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid388",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryCOL2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid398",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryCOL2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1439",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-47}",
                            '-277px',
                            '-287px'
                        ],
                        [
                            "eid1440",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-47}",
                            '-287px',
                            '-297px'
                        ]
                    ]
                }
            },
            "CountryFRA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '31px', '32px', 'auto', 'auto'],
                            id: 'CountryFRANCE',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryFRANCE.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '31px', '32px', 'auto', 'auto'],
                            id: 'CountryFRA2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryFRA2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-53',
                            rect: ['204px', '-152px', '257px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-53.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '31px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid407",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryFRANCE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid416",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryFRANCE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid409",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryFRANCE}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid417",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryFRANCE}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1464",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-53}",
                            '-152px',
                            '-162px'
                        ],
                        [
                            "eid1465",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-53}",
                            '-162px',
                            '-172px'
                        ],
                        [
                            "eid406",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryFRA2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid414",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryFRA2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid408",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryFRANCE}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid415",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryFRANCE}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1466",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-53}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1467",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-53}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryFIN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '27px', '62px', 'auto', 'auto'],
                            id: 'CountryFINLAND',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryFINLAND.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryFIN2',
                            rect: ['0px', '0px', '27px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryFIN2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-52',
                            rect: ['146px', '-48px', '250px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-52.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '27px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid435",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryFINLAND}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid442",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryFINLAND}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1462",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-52}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1463",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-52}",
                            '1',
                            '0'
                        ],
                        [
                            "eid437",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryFINLAND}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid444",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryFINLAND}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1460",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-52}",
                            '-48px',
                            '-58px'
                        ],
                        [
                            "eid1461",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-52}",
                            '-58px',
                            '-68px'
                        ],
                        [
                            "eid436",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryFINLAND}",
                            '0',
                            '1'
                        ],
                        [
                            "eid443",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryFINLAND}",
                            '1',
                            '0'
                        ],
                        [
                            "eid446",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryFIN2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid447",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryFIN2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CountryEGY": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryEGYPT',
                            rect: ['0px', '0px', '29px', '29px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryEGYPT.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryEGY2',
                            rect: ['0px', '0px', '29px', '29px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryEGY2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-51',
                            rect: ['150px', '-218px', '235px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-51.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '29px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid448",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryEGY2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid449",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryEGY2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid457",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryEGYPT}",
                            '0',
                            '1'
                        ],
                        [
                            "eid451",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryEGYPT}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1455",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-51}",
                            '-218px',
                            '-228px'
                        ],
                        [
                            "eid1459",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-51}",
                            '-228px',
                            '-238px'
                        ],
                        [
                            "eid456",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryEGYPT}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid450",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryEGYPT}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1457",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-51}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1458",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-51}",
                            '1',
                            '0'
                        ],
                        [
                            "eid458",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryEGYPT}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid452",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryEGYPT}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryCOS": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryCOSTA_RICA',
                            rect: ['0px', '0px', '7px', '6px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryCOSTA%20RICA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryCOS2',
                            rect: ['0px', '0px', '7px', '6px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryCOS2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-48',
                            rect: ['381px', '-278px', '291px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-48.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '7px', '6px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid474",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryCOSTA_RICA}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid463",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryCOSTA_RICA}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1443",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-48}",
                            '-278px',
                            '-288px'
                        ],
                        [
                            "eid1444",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-48}",
                            '-288px',
                            '-298px'
                        ],
                        [
                            "eid473",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryCOSTA_RICA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid461",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryCOSTA_RICA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid472",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryCOSTA_RICA}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid459",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryCOSTA_RICA}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid462",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryCOS2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid468",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryCOS2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1445",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-48}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1446",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-48}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryGER": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryGER2',
                            rect: ['0px', '0px', '22px', '30px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.05952', '1.05952']],
                            fill: ['rgba(0,0,0,0)', 'images/CountryGER.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryGERMANY',
                            rect: ['0px', '0px', '22px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryGERMANY.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-54',
                            rect: ['171px', '-155px', '263px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-54.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '22px', '30px']
                        }
                    }
                },
                timeline: {
                    duration: 876,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1470",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-54}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1471",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-54}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1468",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-54}",
                            '-135px',
                            '-145px'
                        ],
                        [
                            "eid1469",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-54}",
                            '-145px',
                            '-155px'
                        ],
                        [
                            "eid1480",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryGERMANY}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1481",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryGERMANY}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1486",
                            "scaleY",
                            500,
                            126,
                            "linear",
                            "${CountryGER2}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid1487",
                            "scaleY",
                            750,
                            126,
                            "linear",
                            "${CountryGER2}",
                            '1.1',
                            '1'
                        ],
                        [
                            "eid1484",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryGER2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1485",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryGER2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1482",
                            "scaleX",
                            500,
                            126,
                            "linear",
                            "${CountryGER2}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid1483",
                            "scaleX",
                            750,
                            126,
                            "linear",
                            "${CountryGER2}",
                            '1.1',
                            '1'
                        ]
                    ]
                }
            },
            "CountryGRE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryGRE2',
                            rect: ['0px', '0px', '15px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryGRE.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryGREECE',
                            rect: ['0px', '0px', '15px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryGREECE.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-34',
                            rect: ['139px', '-197px', '257px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-34.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '15px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid485",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryGRE2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid489",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryGRE2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid480",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryGRE2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid481",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryGRE2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1329",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-34}",
                            '-187px',
                            '-197px'
                        ],
                        [
                            "eid1328",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-34}",
                            '-197px',
                            '-207px'
                        ],
                        [
                            "eid1331",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-34}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1330",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-34}",
                            '1',
                            '0'
                        ],
                        [
                            "eid476",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryGREECE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid478",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryGREECE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid484",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryGRE2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid490",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryGRE2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryYEM": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '26px', '16px', 'auto', 'auto'],
                            id: 'CountryYEMEN2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryYEMEN2.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '26px', '16px', 'auto', 'auto'],
                            id: 'CountryYEMEN',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryYEMEN.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-02',
                            opacity: '0',
                            rect: ['auto', '-277px', '245px', '28px', '-313px', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-02.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '26px', '16px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1051",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryYEMEN}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1050",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryYEMEN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1044",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryYEMEN2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1045",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryYEMEN2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1042",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryYEMEN2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid1043",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryYEMEN2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1093",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-02}",
                            '-257px',
                            '-267px'
                        ],
                        [
                            "eid1149",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-02}",
                            '-267px',
                            '-277px'
                        ],
                        [
                            "eid1046",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryYEMEN2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid1047",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryYEMEN2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1095",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1096",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-02}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryUSA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'CountryUSA1',
                            type: 'image',
                            rect: ['37px', '122px', '223px', '78px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryUSA1.svg', '0px', '0px']
                        },
                        {
                            id: 'CountryUSA22',
                            type: 'image',
                            rect: ['0px', '0px', '96px', '98px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryUSA2.svg', '0px', '0px']
                        },
                        {
                            id: 'CountryUNITED_STATES12',
                            type: 'image',
                            rect: ['37px', '122px', '223px', '78px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryUNITED%20STATES1.svg', '0px', '0px']
                        },
                        {
                            id: 'CountryUNITED_STATES22',
                            type: 'image',
                            rect: ['0px', '0px', '97px', '98px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryUNITED%20STATES2.svg', '0px', '0px']
                        },
                        {
                            rect: ['538px', '-58px', '347px', '28px', 'auto', 'auto'],
                            id: 'info-03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/info-03.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '260px', '200px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1154",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1161",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-03}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1558",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryUNITED_STATES12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1559",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryUNITED_STATES12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1542",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryUSA1}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid1543",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryUSA1}",
                            '1.02',
                            '1'
                        ],
                        [
                            "eid1546",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryUSA1}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid1547",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryUSA1}",
                            '1.02',
                            '1'
                        ],
                        [
                            "eid1153",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-03}",
                            '-38px',
                            '-48px'
                        ],
                        [
                            "eid1156",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-03}",
                            '-48px',
                            '-58px'
                        ],
                        [
                            "eid1544",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryUSA1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1545",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryUSA1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1552",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryUSA22}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid1553",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryUSA22}",
                            '1.02',
                            '1'
                        ],
                        [
                            "eid1560",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryUNITED_STATES22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1561",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryUNITED_STATES22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1550",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryUSA22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1551",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryUSA22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1548",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryUSA22}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid1549",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryUSA22}",
                            '1.02',
                            '1'
                        ]
                    ]
                }
            },
            "CountryUK": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '18px', '22px', 'auto', 'auto'],
                            id: 'CountryUK2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryUK.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '18px', '22px', 'auto', 'auto'],
                            id: 'CountryUNITED_KINGDOM',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryUNITED%20KINGDOM.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-04',
                            opacity: '0',
                            rect: ['71px', '-133px', '393px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-04.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '18px', '22px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid992",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryUK2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid993",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryUK2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1166",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1169",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-04}",
                            '1',
                            '0'
                        ],
                        [
                            "eid994",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryUK2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid995",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryUK2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid988",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryUNITED_KINGDOM}",
                            '1',
                            '0'
                        ],
                        [
                            "eid989",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryUNITED_KINGDOM}",
                            '0',
                            '1'
                        ],
                        [
                            "eid990",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryUK2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid991",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryUK2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1165",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-04}",
                            '-133px',
                            '-143px'
                        ],
                        [
                            "eid1170",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-04}",
                            '-143px',
                            '-153px'
                        ]
                    ]
                }
            },
            "CountryUAE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '10px', '8px', 'auto', 'auto'],
                            id: 'CountryUAE2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryUAE.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '10px', '8px', 'auto', 'auto'],
                            id: 'CountryUNITED_ARABE_EMIRATES',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryUNITED%20ARABE%20EMIRATES.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-01',
                            opacity: '0',
                            rect: ['-144px', '-257px', '459px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-01.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '10px', '8px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid982",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryUAE2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid983",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryUAE2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid980",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryUNITED_ARABE_EMIRATES}",
                            '1',
                            '0'
                        ],
                        [
                            "eid981",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryUNITED_ARABE_EMIRATES}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1175",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1181",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-01}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1177",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-01}",
                            '-237px',
                            '-247px'
                        ],
                        [
                            "eid1180",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-01}",
                            '-247px',
                            '-257px'
                        ],
                        [
                            "eid986",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryUAE2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid987",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryUAE2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid984",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryUAE2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid985",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryUAE2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryTUR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryTUR2',
                            rect: ['0', '0px', '47px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryTUR.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryTURKEY',
                            rect: ['0px', '0px', '47px', '19px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryTURKEY.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-15',
                            rect: ['143px', '-196px', '239px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-15.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '47px', '19px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid972",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryTURKEY}",
                            '1',
                            '0'
                        ],
                        [
                            "eid973",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryTURKEY}",
                            '0',
                            '1'
                        ],
                        [
                            "eid978",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryTUR2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid979",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryTUR2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid976",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryTUR2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid977",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryTUR2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1250",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1249",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1248",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-15}",
                            '-186px',
                            '-196px'
                        ],
                        [
                            "eid1247",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-15}",
                            '-196px',
                            '-206px'
                        ],
                        [
                            "eid974",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryTUR2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid975",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryTUR2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryTHA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryTHA2',
                            rect: ['0', '0', '20px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryTHA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryTHAILAND',
                            rect: ['0px', '0px', '20px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryTHAILAND.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-14',
                            rect: ['-85px', '-264px', '281px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-14.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid968",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryTHA2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid969",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryTHA2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid970",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryTHA2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid971",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryTHA2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid964",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryTHAILAND}",
                            '1',
                            '0'
                        ],
                        [
                            "eid965",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryTHAILAND}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1246",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1245",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid966",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryTHA2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid967",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryTHA2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1244",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-14}",
                            '-254px',
                            '-264px'
                        ],
                        [
                            "eid1243",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-14}",
                            '-264px',
                            '-274px'
                        ]
                    ]
                }
            },
            "CountrySYR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountrySYR2',
                            rect: ['0', '0', '14px', '14px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySYR.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountrySYRIA',
                            rect: ['0px', '0px', '14px', '14px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySYRIA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-13',
                            rect: ['124px', '-212px', '232px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-13.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '14px', '14px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid962",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountrySYR2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid963",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountrySYR2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid956",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySYRIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid957",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySYRIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid958",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountrySYR2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid959",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountrySYR2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1242",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1241",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid960",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySYR2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid961",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySYR2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1240",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-13}",
                            '-202px',
                            '-212px'
                        ],
                        [
                            "eid1239",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-13}",
                            '-212px',
                            '-222px'
                        ]
                    ]
                }
            },
            "CountrySWI": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountrySWI2',
                            rect: ['0', '0', '10px', '6px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySWI.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountrySWITZERLAND',
                            rect: ['0px', '0px', '10px', '6px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySWITZERLAND.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-12',
                            rect: ['98px', '-175px', '336px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-12.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '10px', '6px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid954",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountrySWI2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid955",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountrySWI2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1238",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1237",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid952",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySWI2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid953",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySWI2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid950",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountrySWI2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid951",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountrySWI2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1236",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-12}",
                            '-165px',
                            '-175px'
                        ],
                        [
                            "eid1235",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-12}",
                            '-175px',
                            '-185px'
                        ],
                        [
                            "eid948",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySWITZERLAND}",
                            '1',
                            '0'
                        ],
                        [
                            "eid949",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySWITZERLAND}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CountrySUD": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountrySUD2',
                            rect: ['0', '0', '41px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySUD.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountrySUDAN',
                            rect: ['0px', '0px', '41px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySUDAN.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-11',
                            rect: ['150px', '-257px', '242px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-11.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '41px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid935",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySUD2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid936",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySUD2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1234",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1233",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid931",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySUDAN}",
                            '1',
                            '0'
                        ],
                        [
                            "eid932",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySUDAN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1232",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-11}",
                            '-247px',
                            '-257px'
                        ],
                        [
                            "eid1231",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-11}",
                            '-257px',
                            '-267px'
                        ],
                        [
                            "eid933",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountrySUD2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid934",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountrySUD2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid937",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountrySUD2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid938",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountrySUD2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountrySRI": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '4px', '8px', 'auto', 'auto'],
                            id: 'CountrySRI2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountrySRI.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '4px', '8px', 'auto', 'auto'],
                            id: 'CountrySRI_LANKA',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountrySRI%20LANKA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-06',
                            opacity: '0',
                            rect: ['-50px', '-283px', '292px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-06.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '4px', '8px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid919",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySRI2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid920",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySRI2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1196",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-06}",
                            '-283px',
                            '-293px'
                        ],
                        [
                            "eid1201",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-06}",
                            '-293px',
                            '-303px'
                        ],
                        [
                            "eid915",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySRI_LANKA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid916",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySRI_LANKA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid917",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountrySRI2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid918",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountrySRI2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid921",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountrySRI2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid922",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountrySRI2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1195",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1200",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-06}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountrySPA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '31px', '24px', 'auto', 'auto'],
                            id: 'CountrySPA2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountrySPA.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '31px', '24px', 'auto', 'auto'],
                            id: 'CountrySPAIN',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountrySPAIN.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-07',
                            opacity: '0',
                            rect: ['239px', '-181px', '234px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-07.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '31px', '24px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1208",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-07}",
                            '-181px',
                            '-191px'
                        ],
                        [
                            "eid1205",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-07}",
                            '-191px',
                            '-201px'
                        ],
                        [
                            "eid913",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountrySPA2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid914",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountrySPA2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid911",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySPA2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid912",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySPA2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid907",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySPAIN}",
                            '1',
                            '0'
                        ],
                        [
                            "eid908",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySPAIN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid909",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountrySPA2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid910",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountrySPA2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1209",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-07}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1204",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-07}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountrySKO": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountrySOK',
                            rect: ['0', '0', '7px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySOK.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountrySOUTH_KOREA',
                            rect: ['0px', '0px', '7px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySOUTH%20KOREA.svg', '0px', '0px']
                        },
                        {
                            rect: ['-196px', '-199px', '317px', '28px', 'auto', 'auto'],
                            id: 'info-08',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/info-08.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '7px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid901",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountrySOK}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid902",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountrySOK}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid899",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySOUTH_KOREA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid900",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySOUTH_KOREA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid905",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountrySOK}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid906",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountrySOK}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid903",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySOK}",
                            '0',
                            '1'
                        ],
                        [
                            "eid904",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySOK}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1216",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-08}",
                            '-199px',
                            '-209px'
                        ],
                        [
                            "eid1213",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-08}",
                            '-209px',
                            '-219px'
                        ],
                        [
                            "eid1218",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-08}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1212",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-08}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountrySIN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountrySIN2',
                            rect: ['0', '0', '3px', '3px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySIN.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountrySINGAPORE',
                            rect: ['0px', '0px', '3px', '3px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySINGAPORE.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-09',
                            rect: ['-124px', '-310px', '304px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-09.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '3px', '3px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid891",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySIN2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid892",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySIN2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid889",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountrySIN2}",
                            '1',
                            '1.55'
                        ],
                        [
                            "eid890",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountrySIN2}",
                            '1.55',
                            '1'
                        ],
                        [
                            "eid887",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySINGAPORE}",
                            '1',
                            '0'
                        ],
                        [
                            "eid888",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySINGAPORE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1222",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-09}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1221",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-09}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1220",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-09}",
                            '-300px',
                            '-310px'
                        ],
                        [
                            "eid1219",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-09}",
                            '-310px',
                            '-320px'
                        ],
                        [
                            "eid893",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountrySIN2}",
                            '1',
                            '1.55'
                        ],
                        [
                            "eid894",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountrySIN2}",
                            '1.55',
                            '1'
                        ]
                    ]
                }
            },
            "CountrySER": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountrySER2',
                            rect: ['0', '0px', '9px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySER.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountrySERBIA',
                            rect: ['0px', '0px', '9px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySERBIA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-10',
                            rect: ['150px', '-182px', '250px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-10.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '9px', '12px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid885",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountrySER2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid886",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountrySER2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid879",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySERBIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid880",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySERBIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid883",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySER2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid884",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySER2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1224",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-10}",
                            '-172px',
                            '-182px'
                        ],
                        [
                            "eid1223",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-10}",
                            '-182px',
                            '-192px'
                        ],
                        [
                            "eid1226",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1225",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid881",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountrySER2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid882",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountrySER2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountrySAI": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '2px', '2px', 'auto', 'auto'],
                            id: 'CountrySAI2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountrySAI.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '4px', '4px', 'auto', 'auto'],
                            id: 'CountrySAINT_LUCIA',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountrySAINT%20LUCIA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-05',
                            opacity: '0',
                            rect: ['364px', '-265px', '255px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-05.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '4px', '4px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid851",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySAI2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid852",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySAI2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid847",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySAINT_LUCIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid848",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySAINT_LUCIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid853",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountrySAI2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid854",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountrySAI2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1184",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1188",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-05}",
                            '1',
                            '0'
                        ],
                        [
                            "eid849",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountrySAI2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid850",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountrySAI2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1185",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-05}",
                            '-265px',
                            '-275px'
                        ],
                        [
                            "eid1190",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-05}",
                            '-275px',
                            '-285px'
                        ]
                    ]
                }
            },
            "CourtneyROM": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryROM2',
                            rect: ['0', '0', '20px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryROM.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryROMANIA',
                            rect: ['0px', '0px', '20px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryROMANIA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-18',
                            rect: ['123px', '-174px', '273px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-18.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '20px', '16px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1262",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1261",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid841",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryROM2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid842",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryROM2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid839",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryROMANIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid840",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryROMANIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid843",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryROM2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid844",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryROM2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1260",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-18}",
                            '-164px',
                            '-174px'
                        ],
                        [
                            "eid1259",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-18}",
                            '-174px',
                            '-184px'
                        ],
                        [
                            "eid845",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryROM2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid846",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryROM2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryPOR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryPOR2',
                            rect: ['0px', '0', '7px', '17px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryPOR.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryPORTUGAL',
                            rect: ['0px', '0px', '7px', '17px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryPORTUGAL.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-19',
                            rect: ['200px', '-196px', '274px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-19.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '7px', '17px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1264",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-19}",
                            '-186px',
                            '-196px'
                        ],
                        [
                            "eid1263",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-19}",
                            '-196px',
                            '-206px'
                        ],
                        [
                            "eid1024",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryPORTUGAL}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1025",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryPORTUGAL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1026",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryPOR2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid1027",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryPOR2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1028",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryPOR2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1029",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryPOR2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1030",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryPOR2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid1031",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryPOR2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1266",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1265",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-19}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryPOL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryPOL2',
                            rect: ['0', '0', '24px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryPOL.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryPOLAND',
                            rect: ['0px', '0px', '24px', '22px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryPOLAND.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-21',
                            rect: ['170px', '-146px', '242px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-21.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '24px', '22px']
                        }
                    }
                },
                timeline: {
                    duration: 877,
                    autoPlay: true,
                    labels: {
                        "mouseon": 502,
                        "mouseoff": 752
                    },
                    data: [
                        [
                            "eid1272",
                            "top",
                            502,
                            125,
                            "linear",
                            "${info-21}",
                            '-136px',
                            '-146px'
                        ],
                        [
                            "eid1271",
                            "top",
                            752,
                            125,
                            "linear",
                            "${info-21}",
                            '-146px',
                            '-156px'
                        ],
                        [
                            "eid1274",
                            "opacity",
                            502,
                            125,
                            "linear",
                            "${info-21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1273",
                            "opacity",
                            752,
                            125,
                            "linear",
                            "${info-21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid827",
                            "opacity",
                            502,
                            125,
                            "linear",
                            "${CountryPOL2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid828",
                            "opacity",
                            752,
                            125,
                            "linear",
                            "${CountryPOL2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid825",
                            "scaleX",
                            502,
                            125,
                            "linear",
                            "${CountryPOL2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid826",
                            "scaleX",
                            752,
                            125,
                            "linear",
                            "${CountryPOL2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid823",
                            "opacity",
                            502,
                            125,
                            "linear",
                            "${CountryPOLAND}",
                            '1',
                            '0'
                        ],
                        [
                            "eid824",
                            "opacity",
                            752,
                            125,
                            "linear",
                            "${CountryPOLAND}",
                            '0',
                            '1'
                        ],
                        [
                            "eid829",
                            "scaleY",
                            502,
                            125,
                            "linear",
                            "${CountryPOL2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid830",
                            "scaleY",
                            752,
                            125,
                            "linear",
                            "${CountryPOL2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryPHI": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryPHI2',
                            rect: ['0', '0', '16px', '33px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryPHI.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryPHILIPPINES',
                            rect: ['0px', '0px', '16px', '33px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryPHILIPPINES.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-20',
                            rect: ['-183px', '-268px', '321px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-20.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '16px', '33px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid817",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryPHI2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid818",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryPHI2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid815",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryPHILIPPINES}",
                            '1',
                            '0'
                        ],
                        [
                            "eid816",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryPHILIPPINES}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1270",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1269",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid819",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryPHI2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid820",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryPHI2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid821",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryPHI2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid822",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryPHI2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1268",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-20}",
                            '-258px',
                            '-268px'
                        ],
                        [
                            "eid1267",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-20}",
                            '-268px',
                            '-278px'
                        ]
                    ]
                }
            },
            "CountryPAK": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryPAK2',
                            rect: ['0px', '0px', '39px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryPAK.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryPAKISTAN',
                            rect: ['0px', '0px', '39px', '40px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryPAKISTAN.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-22',
                            rect: ['11px', '-213px', '278px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-22.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '39px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid811",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryPAK2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid812",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryPAK2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid807",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryPAKISTAN}",
                            '1',
                            '0'
                        ],
                        [
                            "eid808",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryPAKISTAN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid809",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryPAK2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid810",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryPAK2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid813",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryPAK2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid814",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryPAK2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1278",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1277",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1276",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-22}",
                            '-203px',
                            '-213px'
                        ],
                        [
                            "eid1275",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-22}",
                            '-213px',
                            '-223px'
                        ]
                    ]
                }
            },
            "CountryOMA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryOMA2',
                            rect: ['0', '0px', '18px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryOMA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryOMAN',
                            rect: ['0px', '0px', '18px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryOMAN.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-27',
                            rect: ['84px', '-250px', '229px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-27.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '18px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid777",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryOMA2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid778",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryOMA2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid779",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryOMA2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid780",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryOMA2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1298",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-27}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1297",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-27}",
                            '1',
                            '0'
                        ],
                        [
                            "eid781",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryOMA2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid782",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryOMA2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid775",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryOMAN}",
                            '1',
                            '0'
                        ],
                        [
                            "eid776",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryOMAN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1296",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-27}",
                            '-240px',
                            '-250px'
                        ],
                        [
                            "eid1295",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-27}",
                            '-250px',
                            '-260px'
                        ]
                    ]
                }
            },
            "CountryNIG": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryNIG2',
                            rect: ['0', '0', '30px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryNIG.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryNIGERIA',
                            rect: ['0px', '0px', '30px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryNIGERIA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-64',
                            rect: ['193px', '-281px', '252px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-64.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '30px', '24px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid767",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryNIGERIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid768",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryNIGERIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1531",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-64}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1530",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-64}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1529",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-64}",
                            '-270px',
                            '-281px'
                        ],
                        [
                            "eid1528",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-64}",
                            '-281px',
                            '-290px'
                        ],
                        [
                            "eid771",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryNIG2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid772",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryNIG2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid769",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryNIG2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid770",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryNIG2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid773",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryNIG2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid774",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryNIG2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryNWZ": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryNEW',
                            rect: ['0', '0px', '30px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryNEW.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryNEW_ZELAND',
                            rect: ['0px', '0px', '30px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryNEW%20ZELAND.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-23',
                            rect: ['-302px', '-414px', '319px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-23.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '30px', '39px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid761",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryNEW}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid762",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryNEW}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1282",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1281",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid759",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryNEW_ZELAND}",
                            '1',
                            '0'
                        ],
                        [
                            "eid760",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryNEW_ZELAND}",
                            '0',
                            '1'
                        ],
                        [
                            "eid765",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryNEW}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid766",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryNEW}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1280",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-23}",
                            '-404px',
                            '-414px'
                        ],
                        [
                            "eid1279",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-23}",
                            '-414px',
                            '-424px'
                        ],
                        [
                            "eid763",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryNEW}",
                            '0',
                            '1'
                        ],
                        [
                            "eid764",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryNEW}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryNET": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryNET2',
                            rect: ['0', '0', '7px', '9px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryNET.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryNETHERLANDS',
                            rect: ['0px', '0px', '7px', '9px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryNETHERLANDS.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-24',
                            rect: ['103px', '-152px', '337px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-24.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '7px', '9px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid751",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryNETHERLANDS}",
                            '1',
                            '0'
                        ],
                        [
                            "eid752",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryNETHERLANDS}",
                            '0',
                            '1'
                        ],
                        [
                            "eid757",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryNET2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid758",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryNET2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid755",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryNET2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid756",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryNET2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid753",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryNET2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid754",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryNET2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1286",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1285",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1284",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-24}",
                            '-142px',
                            '-152px'
                        ],
                        [
                            "eid1283",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-24}",
                            '-152px',
                            '-162px'
                        ]
                    ]
                }
            },
            "CountryNEP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryNEP2',
                            rect: ['0', '0', '19px', '11px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryNEP.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryNEPAL',
                            rect: ['0px', '0px', '19px', '11px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryNEPAL.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-25',
                            rect: ['4px', '-235px', '237px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-25.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '19px', '11px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1288",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-25}",
                            '-225px',
                            '-235px'
                        ],
                        [
                            "eid1287",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-25}",
                            '-235px',
                            '-245px'
                        ],
                        [
                            "eid747",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryNEP2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid748",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryNEP2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid743",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryNEPAL}",
                            '1',
                            '0'
                        ],
                        [
                            "eid744",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryNEPAL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid749",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryNEP2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid750",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryNEP2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid745",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryNEP2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid746",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryNEP2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1290",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1289",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-25}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryMEX": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryMEX2',
                            rect: ['0', '0', '77px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryMEX.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryMEXICO',
                            rect: ['0px', '0px', '77px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryMEXICO.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-26',
                            rect: ['513px', '-227px', '240px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-26.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '77px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1294",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1293",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-26}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1292",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-26}",
                            '-217px',
                            '-227px'
                        ],
                        [
                            "eid1291",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-26}",
                            '-227px',
                            '-237px'
                        ],
                        [
                            "eid735",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryMEXICO}",
                            '1',
                            '0'
                        ],
                        [
                            "eid736",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryMEXICO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid737",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryMEX2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid738",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryMEX2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid739",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryMEX2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid740",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryMEX2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid741",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryMEX2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid742",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryMEX2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryMAL": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryMALA',
                            rect: ['0', '0', '47px', '14px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryMALA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryMALAYSIA',
                            rect: ['0px', '0px', '47px', '14px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryMALAYSIA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-28',
                            rect: ['-75px', '-300px', '264px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-28.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '47px', '14px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid731",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryMALA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid732",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryMALA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid727",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryMALAYSIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid728",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryMALAYSIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1300",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-28}",
                            '-290px',
                            '-300px'
                        ],
                        [
                            "eid1299",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-28}",
                            '-300px',
                            '-310px'
                        ],
                        [
                            "eid729",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryMALA}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid730",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryMALA}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid733",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryMALA}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid734",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryMALA}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1302",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1301",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-28}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryMLW": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryMAL2',
                            rect: ['0', '0px', '6px', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryMAL.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryMALAWI',
                            rect: ['0px', '0px', '6px', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryMALAWI.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-29',
                            rect: ['124px', '-342px', '240px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-29.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '6px', '18px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid725",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryMAL2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid726",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryMAL2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid719",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryMALAWI}",
                            '1',
                            '0'
                        ],
                        [
                            "eid720",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryMALAWI}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1304",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-29}",
                            '-332px',
                            '-342px'
                        ],
                        [
                            "eid1303",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-29}",
                            '-342px',
                            '-352px'
                        ],
                        [
                            "eid723",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryMAL2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid724",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryMAL2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1306",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-29}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1305",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-29}",
                            '1',
                            '0'
                        ],
                        [
                            "eid721",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryMAL2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid722",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryMAL2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryMAC": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryMAC2',
                            rect: ['0', '0', '6px', '5px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryMAC.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryMACEDONIA',
                            rect: ['0px', '0px', '6px', '5px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryMACEDONIA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-30',
                            rect: ['104px', '-194px', '292px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-30.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '6px', '5px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid711",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryMACEDONIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid712",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryMACEDONIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid713",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryMAC2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid714",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryMAC2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid715",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryMAC2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid716",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryMAC2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1308",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-30}",
                            '-184px',
                            '-194px'
                        ],
                        [
                            "eid1307",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-30}",
                            '-194px',
                            '-204px'
                        ],
                        [
                            "eid1310",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-30}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1309",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-30}",
                            '1',
                            '0'
                        ],
                        [
                            "eid717",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryMAC2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid718",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryMAC2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryLIB": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryLIB2',
                            rect: ['0px', '0px', '39px', '38px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryLIB.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryLIBYA',
                            rect: ['0px', '0px', '39px', '38px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryLIBYA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-31',
                            rect: ['198px', '-225px', '227px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-31.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '39px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid703",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryLIBYA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid704",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryLIBYA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid709",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryLIB2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid710",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryLIB2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid705",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryLIB2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid706",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryLIB2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid707",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryLIB2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid708",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryLIB2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1312",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-31}",
                            '-215px',
                            '-225px'
                        ],
                        [
                            "eid1311",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-31}",
                            '-225px',
                            '-235px'
                        ],
                        [
                            "eid1314",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-31}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1313",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-31}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryLEB": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryLEB2',
                            rect: ['0px', '0px', '3px', '7px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryLEB.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryLEBANON',
                            rect: ['0px', '0px', '3px', '7px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryLEBANON.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-32',
                            rect: ['86px', '-218px', '273px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-32.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '3px', '7px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1318",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1317",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid691",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryLEB2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid692",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryLEB2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid687",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryLEBANON}",
                            '1',
                            '0'
                        ],
                        [
                            "eid688",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryLEBANON}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1316",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-32}",
                            '-208px',
                            '-218px'
                        ],
                        [
                            "eid1315",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-32}",
                            '-218px',
                            '-228px'
                        ],
                        [
                            "eid689",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryLEB2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid690",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryLEB2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid693",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryLEB2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid694",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryLEB2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryKUW": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryKUW2',
                            rect: ['0', '0', '5px', '5px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryKUW.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryKUWAIT',
                            rect: ['0px', '0px', '5px', '5px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryKUWAIT.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-33',
                            rect: ['79px', '-234px', '250px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-33.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '5px', '5px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1325",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-33}",
                            '-224px',
                            '-234px'
                        ],
                        [
                            "eid1324",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-33}",
                            '-234px',
                            '-244px'
                        ],
                        [
                            "eid685",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryKUW2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid686",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryKUW2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid679",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryKUWAIT}",
                            '1',
                            '0'
                        ],
                        [
                            "eid680",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryKUWAIT}",
                            '0',
                            '1'
                        ],
                        [
                            "eid683",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryKUW2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid684",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryKUW2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid681",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryKUW2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid682",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryKUW2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1327",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1326",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-33}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryJOR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryJOR2',
                            rect: ['0px', '0px', '10px', '11px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryJOR.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryJORDAN',
                            rect: ['0px', '0px', '10px', '11px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryJORDAN.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-42',
                            rect: ['103px', '-236px', '255px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-42.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '10px', '11px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1409",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-42}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1410",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-42}",
                            '1',
                            '0'
                        ],
                        [
                            "eid673",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryJOR2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid674",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryJOR2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid677",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryJOR2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid678",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryJOR2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1411",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-42}",
                            '-216px',
                            '-226px'
                        ],
                        [
                            "eid1408",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-42}",
                            '-226px',
                            '-236px'
                        ],
                        [
                            "eid671",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryJORDAN}",
                            '1',
                            '0'
                        ],
                        [
                            "eid672",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryJORDAN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid675",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryJOR2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid676",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryJOR2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryJAP": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '40px', '46px', 'auto', 'auto'],
                            id: 'CountryJAP2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryJAP.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '40px', '46px', 'auto', 'auto'],
                            id: 'CountryJAPAN',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryJAPAN.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-41',
                            opacity: '0',
                            rect: ['-122px', '-195px', '235px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-41.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '40px', '46px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid665",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryJAP2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid666",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryJAP2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1396",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-41}",
                            '-175px',
                            '-185px'
                        ],
                        [
                            "eid1397",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-41}",
                            '-185px',
                            '-195px'
                        ],
                        [
                            "eid667",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryJAP2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid668",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryJAP2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid669",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryJAP2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid670",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryJAP2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid663",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryJAPAN}",
                            '1',
                            '0'
                        ],
                        [
                            "eid664",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryJAPAN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1539",
                            "opacity",
                            467,
                            0,
                            "linear",
                            "${info-41}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1402",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-41}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1399",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-41}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryJAM": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryJAM2',
                            rect: ['0', '0px', '10px', '3px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryJAM.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryJAMAICA',
                            rect: ['0px', '0px', '10px', '3px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryJAMAICA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-40',
                            rect: ['390px', '-268px', '265px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-40.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '10px', '3px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid657",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryJAM2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid658",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryJAM2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid659",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryJAM2}",
                            '1',
                            '1.4'
                        ],
                        [
                            "eid660",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryJAM2}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid1388",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-40}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1389",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-40}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1390",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-40}",
                            '-258px',
                            '-268px'
                        ],
                        [
                            "eid1393",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-40}",
                            '-268px',
                            '-278px'
                        ],
                        [
                            "eid655",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryJAM2}",
                            '1',
                            '1.4'
                        ],
                        [
                            "eid656",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryJAM2}",
                            '1.4',
                            '1'
                        ],
                        [
                            "eid653",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryJAMAICA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid654",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryJAMAICA}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CountryITA": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryITA2',
                            rect: ['0', '0', '27px', '29px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryITA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryITALY',
                            rect: ['0px', '0px', '27px', '29px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryITALY.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-43',
                            rect: ['210px', '-178px', '221px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-43.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '27px', '29px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1414",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-43}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1415",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-43}",
                            '1',
                            '0'
                        ],
                        [
                            "eid641",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryITA2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid642",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryITA2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1416",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-43}",
                            '-168px',
                            '-178px'
                        ],
                        [
                            "eid1419",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-43}",
                            '-178px',
                            '-188px'
                        ],
                        [
                            "eid637",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryITALY}",
                            '1',
                            '0'
                        ],
                        [
                            "eid638",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryITALY}",
                            '0',
                            '1'
                        ],
                        [
                            "eid643",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryITA2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid644",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryITA2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid639",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryITA2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid640",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryITA2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryISR": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryISR2',
                            rect: ['0px', '0px', '4px', '4px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryISR.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryISRAEL',
                            rect: ['0px', '0px', '4px', '4px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            fill: ['rgba(0,0,0,0)', 'images/CountryISRAEL.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-44',
                            rect: ['101px', '-214px', '260px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-44.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '4px', '4px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1424",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-44}",
                            '-214px',
                            '-224px'
                        ],
                        [
                            "eid1425",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-44}",
                            '-224px',
                            '-234px'
                        ],
                        [
                            "eid625",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryISR2}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid626",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryISR2}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid619",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryISRAEL}",
                            '1',
                            '0'
                        ],
                        [
                            "eid620",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryISRAEL}",
                            '0',
                            '1'
                        ],
                        [
                            "eid621",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryISR2}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid622",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryISR2}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1427",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-44}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1426",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-44}",
                            '1',
                            '0'
                        ],
                        [
                            "eid623",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryISR2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid624",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryISR2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountrySCO": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountrySCO2',
                            rect: ['0', '0', '10px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySCO.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountrySCOTLAND',
                            rect: ['0px', '0px', '10px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySCOTLAND.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-16',
                            rect: ['193px', '-127px', '273px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-16.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '10px', '16px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1254",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1253",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1252",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-16}",
                            '-117px',
                            '-127px'
                        ],
                        [
                            "eid1251",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-16}",
                            '-127px',
                            '-137px'
                        ],
                        [
                            "eid785",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountrySCO2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid786",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountrySCO2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid783",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySCOTLAND}",
                            '1',
                            '0'
                        ],
                        [
                            "eid784",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySCOTLAND}",
                            '0',
                            '1'
                        ],
                        [
                            "eid789",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountrySCO2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid790",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountrySCO2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid787",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySCO2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid788",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySCO2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountrySAU": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountrySAU2',
                            rect: ['0', '0', '53px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySAU.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountrySAUDI_ARABIA',
                            rect: ['0px', '0px', '53px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountrySAUDI%20ARABIA.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-17',
                            rect: ['7px', '-229px', '352px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-17.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '53px', '42px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1036",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySAU2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1037",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySAU2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1256",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-17}",
                            '-219px',
                            '-229px'
                        ],
                        [
                            "eid1255",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-17}",
                            '-229px',
                            '-239px'
                        ],
                        [
                            "eid1032",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountrySAUDI_ARABIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1033",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountrySAUDI_ARABIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1258",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1257",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1038",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountrySAU2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid1039",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountrySAU2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid1034",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountrySAU2}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid1035",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountrySAU2}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            },
            "CountryHNK": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryHON',
                            rect: ['0', '0px', '5px', '4px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryHON.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryHONG_KONG',
                            rect: ['0px', '0px', '5px', '4px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryHONG%20KONG.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-352',
                            rect: ['-134px', '-266px', '289px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-35.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '5px', '4px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid496",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryHON}",
                            '1',
                            '1.6'
                        ],
                        [
                            "eid495",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryHON}",
                            '1.6',
                            '1'
                        ],
                        [
                            "eid1353",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-352}",
                            '-246px',
                            '-256px'
                        ],
                        [
                            "eid1355",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-352}",
                            '-256px',
                            '-266px'
                        ],
                        [
                            "eid494",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryHON}",
                            '1',
                            '1.6'
                        ],
                        [
                            "eid493",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryHON}",
                            '1.6',
                            '1'
                        ],
                        [
                            "eid497",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryHONG_KONG}",
                            '1',
                            '0'
                        ],
                        [
                            "eid498",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryHONG_KONG}",
                            '0',
                            '1'
                        ],
                        [
                            "eid503",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryHON}",
                            '0',
                            '1'
                        ],
                        [
                            "eid504",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryHON}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1349",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-352}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1350",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-352}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryHUN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.3', '1.3']],
                            id: 'CountryHUN2',
                            type: 'image',
                            rect: ['0', '0px', '16px', '9px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryHUN.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '16px', '9px', 'auto', 'auto'],
                            id: 'CountryHUNGARY',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryHUNGARY.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-36',
                            opacity: '0',
                            rect: ['147px', '-183px', '260px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-36.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '16px', '9px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid523",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryHUN2}",
                            '1',
                            '1.3'
                        ],
                        [
                            "eid527",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryHUN2}",
                            '1.3',
                            '1'
                        ],
                        [
                            "eid522",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryHUN2}",
                            '1',
                            '1.3'
                        ],
                        [
                            "eid526",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryHUN2}",
                            '1.3',
                            '1'
                        ],
                        [
                            "eid1537",
                            "opacity",
                            467,
                            0,
                            "linear",
                            "${info-36}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1363",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-36}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1361",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-36}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1357",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-36}",
                            '-163px',
                            '-173px'
                        ],
                        [
                            "eid1359",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-36}",
                            '-173px',
                            '-183px'
                        ],
                        [
                            "eid518",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryHUNGARY}",
                            '1',
                            '0'
                        ],
                        [
                            "eid519",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryHUNGARY}",
                            '0',
                            '1'
                        ],
                        [
                            "eid514",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryHUN2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid516",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryHUN2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryIND": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '52px', '75px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.2', '1.2']],
                            id: 'CountryIND2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryIND.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryINDIA',
                            rect: ['0px', '0px', '52px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryINDIA.svg', '0px', '0px']
                        },
                        {
                            rect: ['30px', '-230px', '242px', '28px', 'auto', 'auto'],
                            id: 'info-39',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/info-39.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '52px', '75px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid539",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryINDIA}",
                            '1',
                            '0'
                        ],
                        [
                            "eid541",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryINDIA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid535",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryIND2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid537",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryIND2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1382",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-39}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1380",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-39}",
                            '1',
                            '0'
                        ],
                        [
                            "eid529",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryIND2}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid532",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryIND2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid528",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryIND2}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid533",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryIND2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid1376",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-39}",
                            '-210px',
                            '-220px'
                        ],
                        [
                            "eid1378",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-39}",
                            '-220px',
                            '-230px'
                        ]
                    ]
                }
            },
            "CountryIRE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryIRE2',
                            rect: ['0px', '0px', '9px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryIRE.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryIRELAND',
                            rect: ['0px', '0px', '9px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryIRELAND.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-45',
                            rect: ['195px', '-154px', '280px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-45.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '9px', '15px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1430",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-45}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1431",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-45}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1434",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-45}",
                            '-134px',
                            '-144px'
                        ],
                        [
                            "eid1432",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-45}",
                            '-144px',
                            '-154px'
                        ],
                        [
                            "eid554",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryIRE2}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid561",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryIRE2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid548",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryIRELAND}",
                            '1',
                            '0'
                        ],
                        [
                            "eid546",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryIRELAND}",
                            '0',
                            '1'
                        ],
                        [
                            "eid555",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryIRE2}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid562",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryIRE2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid544",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryIRE2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid543",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryIRE2}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "CountryIRAN": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '44px', 'auto', 'auto'],
                            id: 'CountryIRN',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryIRN.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '48px', '44px', 'auto', 'auto'],
                            id: 'CountryIRAN',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/CountryIRAN.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-37',
                            rect: ['119px', '-215px', '216px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-37.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid1368",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-37}",
                            '-195px',
                            '-205px'
                        ],
                        [
                            "eid1369",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-37}",
                            '-205px',
                            '-215px'
                        ],
                        [
                            "eid1366",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-37}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1367",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-37}",
                            '1',
                            '0'
                        ],
                        [
                            "eid563",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryIRN}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid567",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryIRN}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid564",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryIRN}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid568",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryIRN}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid575",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryIRN}",
                            '0',
                            '1'
                        ],
                        [
                            "eid578",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryIRN}",
                            '1',
                            '0'
                        ],
                        [
                            "eid576",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryIRAN}",
                            '1',
                            '0'
                        ],
                        [
                            "eid577",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryIRAN}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "CountryIRAQ": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CountryIRQ',
                            rect: ['0px', '0px', '23px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryIRQ.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'CountryIRAQ',
                            rect: ['0px', '0px', '22px', '25px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CountryIRAQ.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'info-38',
                            rect: ['132px', '-222px', '216px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info-38.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '22px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 875,
                    autoPlay: true,
                    labels: {
                        "mouseon": 500,
                        "mouseoff": 750
                    },
                    data: [
                        [
                            "eid595",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryIRQ}",
                            '0',
                            '1'
                        ],
                        [
                            "eid596",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryIRQ}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1374",
                            "top",
                            500,
                            125,
                            "linear",
                            "${info-38}",
                            '-202px',
                            '-212px'
                        ],
                        [
                            "eid1375",
                            "top",
                            750,
                            125,
                            "linear",
                            "${info-38}",
                            '-212px',
                            '-222px'
                        ],
                        [
                            "eid1372",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${info-38}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1373",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${info-38}",
                            '1',
                            '0'
                        ],
                        [
                            "eid593",
                            "scaleX",
                            500,
                            125,
                            "linear",
                            "${CountryIRQ}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid594",
                            "scaleX",
                            750,
                            125,
                            "linear",
                            "${CountryIRQ}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid591",
                            "opacity",
                            500,
                            125,
                            "linear",
                            "${CountryIRAQ}",
                            '1',
                            '0'
                        ],
                        [
                            "eid592",
                            "opacity",
                            750,
                            125,
                            "linear",
                            "${CountryIRAQ}",
                            '0',
                            '1'
                        ],
                        [
                            "eid597",
                            "scaleY",
                            500,
                            125,
                            "linear",
                            "${CountryIRQ}",
                            '1',
                            '1.14999'
                        ],
                        [
                            "eid598",
                            "scaleY",
                            750,
                            125,
                            "linear",
                            "${CountryIRQ}",
                            '1.14999',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("uoft-map_edgeActions.js");
})("EDGE-18796225");
