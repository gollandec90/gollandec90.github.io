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
                scaleToFit: "height",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'history',
                            type: 'group',
                            rect: ['0px', '-846px', '520', '1026px', 'auto', 'auto'],
                            clip: 'rect(0px 520px 500.333251953125px 0px)',
                            c: [
                            {
                                id: 'PLAYPAUSE',
                                type: 'rect',
                                rect: ['0px', '0px', '520px', '500px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: '_2001_expand_text',
                                type: 'image',
                                rect: ['250px', '57px', '122px', '27px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"2001_expand_text.svg",'0px','0px']
                            },
                            {
                                id: '_2001_expand_line',
                                type: 'image',
                                rect: ['139px', '9px', '1px', '124px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"2001_expand_line.svg",'0px','0px'],
                                transform: [[],['90'],[],['1','0']]
                            },
                            {
                                id: '_2001_expand',
                                type: 'image',
                                rect: ['134px', '5px', '11px', '131px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"2001_expand.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2005_expand_line2',
                                type: 'image',
                                rect: ['137px', '89px', '1px', '150px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"2005_expand_line.svg",'0px','0px'],
                                transform: [[],['90'],[],['1','0']]
                            },
                            {
                                id: '_2005_expand2',
                                type: 'image',
                                rect: ['153px', '86px', '11px', '157px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2005_expand.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2005_expand_text',
                                type: 'image',
                                rect: ['247px', '146px', '43px', '7px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"2005_expand_text.svg",'0px','0px']
                            },
                            {
                                id: '_2006_expand_line2Copy',
                                type: 'image',
                                rect: ['137px', '184px', '1px', '150px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"2005_expand_line.svg",'0px','0px'],
                                transform: [[],['90'],[],['1','0']]
                            },
                            {
                                id: '_2006_expand2Copy',
                                type: 'image',
                                rect: ['153px', '181px', '11px', '157px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2005_expand.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2006_expand_text',
                                type: 'image',
                                rect: ['295px', '241px', '147px', '27px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2006_expand_text.svg",'0px','0px']
                            },
                            {
                                id: '_2006_expand_line2',
                                type: 'image',
                                rect: ['137px', '277px', '1px', '150px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"2005_expand_line.svg",'0px','0px'],
                                transform: [[],['90'],[],['1','0']]
                            },
                            {
                                id: '_2006_expand2',
                                type: 'image',
                                rect: ['153px', '274px', '11px', '157px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2005_expand.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2009_expand_text',
                                type: 'image',
                                rect: ['290px', '338px', '98px', '25px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2009_expand_text.svg",'0px','0px']
                            },
                            {
                                id: '_2006_expand_line2Copy2',
                                type: 'image',
                                rect: ['137px', '371px', '1px', '150px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"2005_expand_line.svg",'0px','0px'],
                                transform: [[],['90'],[],['1','0']]
                            },
                            {
                                id: '_2006_expand2Copy2',
                                type: 'image',
                                rect: ['153px', '368px', '11px', '157px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2005_expand.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2011_expand_text',
                                type: 'image',
                                rect: ['248px', '478px', '167px', '30px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2011_expand_text.svg",'0px','0px']
                            },
                            {
                                id: '_2011_expand_text_3',
                                type: 'image',
                                rect: ['290px', '433px', '105px', '28px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2011_expand_text_3.svg",'0px','0px']
                            },
                            {
                                id: '_2006_expand_line2Copy3',
                                type: 'image',
                                rect: ['137px', '465px', '1px', '150px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"2005_expand_line.svg",'0px','0px'],
                                transform: [[],['90'],[],['1','0']]
                            },
                            {
                                id: '_2006_expand2Copy3',
                                type: 'image',
                                rect: ['153px', '462px', '11px', '157px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2005_expand.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2012_expand_text',
                                type: 'image',
                                rect: ['295px', '528px', '104px', '28px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2012_expand_text.svg",'0px','0px']
                            },
                            {
                                id: '_2006_expand_line2Copy4',
                                type: 'image',
                                rect: ['137px', '557px', '1px', '150px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"2005_expand_line.svg",'0px','0px'],
                                transform: [[],['90'],[],['1','0']]
                            },
                            {
                                id: '_2006_expand2Copy4',
                                type: 'image',
                                rect: ['153px', '554px', '11px', '157px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2005_expand.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2013_expand_text',
                                type: 'image',
                                rect: ['293px', '618px', '95px', '25px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2013_expand_text.svg",'0px','0px']
                            },
                            {
                                id: '_2006_expand_line2Copy5',
                                type: 'image',
                                rect: ['137px', '651px', '1px', '150px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"2005_expand_line.svg",'0px','0px'],
                                transform: [[],['90'],[],['1','0']]
                            },
                            {
                                id: '_2006_expand2Copy5',
                                type: 'image',
                                rect: ['153px', '648px', '11px', '157px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2005_expand.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2014_expand_text_22',
                                type: 'image',
                                rect: ['275px', '716px', '222px', '224px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2014_expand_text_22.svg",'0px','0px']
                            },
                            {
                                id: '_2006_expand_line2Copy6',
                                type: 'image',
                                rect: ['137px', '745px', '1px', '150px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"2005_expand_line.svg",'0px','0px'],
                                transform: [[],['90'],[],['1','0']]
                            },
                            {
                                id: '_2006_expand2Copy6',
                                type: 'image',
                                rect: ['153px', '742px', '11px', '157px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2005_expand.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2015_expand_text_2',
                                type: 'image',
                                rect: ['252px', '852px', '268px', '134px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2015_expand_text_2.svg",'0px','0px']
                            },
                            {
                                id: '_2006_expand_line2Copy7',
                                type: 'image',
                                rect: ['137px', '839px', '1px', '150px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"2005_expand_line.svg",'0px','0px'],
                                transform: [[],['90'],[],['1','0']]
                            },
                            {
                                id: '_2006_expand2Copy7',
                                type: 'image',
                                rect: ['153px', '836px', '11px', '157px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2005_expand.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2018_expand_text_2',
                                type: 'image',
                                rect: ['308px', '893px', '138px', '43px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2018_expand_text_2.svg",'0px','0px']
                            },
                            {
                                id: '_2006_expand_line2Copy8',
                                type: 'image',
                                rect: ['137px', '934px', '1px', '150px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"2005_expand_line.svg",'0px','0px'],
                                transform: [[],['90'],[],['1','0']]
                            },
                            {
                                id: '_2006_expand2Copy8',
                                type: 'image',
                                rect: ['153px', '931px', '11px', '157px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2005_expand.svg",'0px','0px'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2020_expand_text_2',
                                type: 'image',
                                rect: ['284px', '995px', '143px', '25px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"2020_expand_text_2.svg",'0px','0px']
                            },
                            {
                                id: 'timeline',
                                type: 'image',
                                rect: ['-348px', '447px', '186.8%', '18.2%', 'auto', 'auto'],
                                clip: 'rect(0px 971px 187px -0.5px)',
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"timeline.svg",'50%','50%','972px','39px', 'no-repeat'],
                                transform: [[],['90']]
                            },
                            {
                                id: '_2001_icon',
                                type: 'image',
                                rect: ['215px', '52px', '22px', '37px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2001_icon.svg",'0px','0px']
                            },
                            {
                                id: '_2001',
                                type: 'image',
                                rect: ['80px', '67px', '23px', '8px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2001.svg",'0px','0px'],
                                transform: [[],[],['2'],['1.5','1.5']]
                            },
                            {
                                id: '_2005_icon',
                                type: 'image',
                                rect: ['174px', '157px', '56px', '13px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2005_icon.svg",'0px','0px']
                            },
                            {
                                id: '_2005',
                                type: 'image',
                                rect: ['80px', '160px', '26px', '8px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2005.svg",'0px','0px']
                            },
                            {
                                id: '_2006_icon',
                                type: 'image',
                                rect: ['174px', '240px', '30px', '30px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2006_icon.svg",'0px','0px']
                            },
                            {
                                id: '_2006',
                                type: 'image',
                                rect: ['80px', '254px', '26px', '8px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2006.svg",'0px','0px']
                            },
                            {
                                id: '_2009_icon',
                                type: 'image',
                                rect: ['174px', '335px', '30px', '30px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2009_icon.svg",'0px','0px']
                            },
                            {
                                id: '_2009',
                                type: 'image',
                                rect: ['80px', '348px', '26px', '8px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2009.svg",'0px','0px'],
                                transform: [[],[],[],['1.01']]
                            },
                            {
                                id: '_2011_icon',
                                type: 'image',
                                rect: ['179px', '431px', '20px', '30px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2011_icon.svg",'0px','0px']
                            },
                            {
                                id: '_2011',
                                type: 'image',
                                rect: ['85px', '442px', '21px', '8px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2011.svg",'0px','0px']
                            },
                            {
                                id: '_2012_icon',
                                type: 'image',
                                rect: ['182px', '525px', '28px', '31px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2012_icon.svg",'0px','0px']
                            },
                            {
                                id: '_2012',
                                type: 'image',
                                rect: ['80px', '536px', '24px', '8px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2012.svg",'0px','0px']
                            },
                            {
                                id: '_2013_icon',
                                type: 'image',
                                rect: ['178px', '616px', '30px', '30px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2013_icon.svg",'0px','0px']
                            },
                            {
                                id: '_2013',
                                type: 'image',
                                rect: ['80px', '628px', '23px', '8px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2013.svg",'0px','0px']
                            },
                            {
                                id: '_2014_icon',
                                type: 'image',
                                rect: ['184px', '714px', '18px', '30px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2014_icon.svg",'0px','0px']
                            },
                            {
                                id: '_2014',
                                type: 'image',
                                rect: ['80px', '723px', '24px', '8px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2014.svg",'0px','0px']
                            },
                            {
                                id: '_2015_icon',
                                type: 'image',
                                rect: ['184px', '807px', '66px', '24px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2015_icon.svg",'0px','0px']
                            },
                            {
                                id: '_2015',
                                type: 'image',
                                rect: ['80px', '818px', '23px', '8px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2015.svg",'0px','0px']
                            },
                            {
                                id: '_2018_icon',
                                type: 'image',
                                rect: ['188px', '898px', '30px', '32px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2018_icon.svg",'0px','0px']
                            },
                            {
                                id: '_2018',
                                type: 'image',
                                rect: ['80px', '911px', '24px', '8px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2018.svg",'0px','0px'],
                                transform: [[],[],[],['1','0.92']]
                            },
                            {
                                id: '_2020_icon',
                                type: 'image',
                                rect: ['245px', '991px', '30px', '33px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2020_icon.svg",'0px','0px']
                            },
                            {
                                id: '_2020',
                                type: 'image',
                                rect: ['80px', '1004px', '26px', '8px', 'auto', 'auto'],
                                opacity: '0.5',
                                fill: ["rgba(0,0,0,0)",im+"2020.svg",'0px','0px']
                            },
                            {
                                id: 'Pointer_vert',
                                type: 'image',
                                rect: ['125px', '997px', '25px', '25px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"Pointer.svg",'0px','0px']
                            }]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['0px', '0px', '520px', '131px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.00)",[270,[['rgba(255,255,255,1.00)',0],['rgba(255,255,255,0.00)',100]]]],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            type: 'rect',
                            rect: ['0px', '369px', '520px', '131px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(255,255,255,0.00)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '520px', '500px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 48000,
                    autoPlay: true,
                    labels: {
                        "2001": 0,
                        "2005": 4500,
                        "2006": 8000,
                        "2009": 11750,
                        "2011": 15500,
                        "2012": 19500,
                        "2013": 23250,
                        "2014": 27000,
                        "2015": 33000,
                        "2018": 39000,
                        "2020": 42750
                    },
                    data: [
                        [
                            "eid390",
                            "opacity",
                            15750,
                            140,
                            "easeOutCubic",
                            "${_2011_expand_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid432",
                            "opacity",
                            18860,
                            140,
                            "easeOutCubic",
                            "${_2011_expand_text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1393",
                            "opacity",
                            27205,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1394",
                            "opacity",
                            32500,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1481",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2020_icon}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1468",
                            "opacity",
                            42750,
                            250,
                            "easeOutCubic",
                            "${_2020_icon}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1301",
                            "scaleY",
                            15500,
                            250,
                            "easeOutCubic",
                            "${_2011}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1302",
                            "scaleY",
                            19000,
                            250,
                            "easeOutCubic",
                            "${_2011}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1169",
                            "scaleY",
                            500,
                            250,
                            "easeOutCubic",
                            "${_2001_expand_line}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1203",
                            "scaleY",
                            4250,
                            250,
                            "easeOutCubic",
                            "${_2001_expand_line}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1487",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2014_icon}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1389",
                            "opacity",
                            27000,
                            250,
                            "easeOutCubic",
                            "${_2014_icon}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1390",
                            "opacity",
                            32500,
                            250,
                            "easeOutCubic",
                            "${_2014_icon}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1415",
                            "opacity",
                            33205,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1416",
                            "opacity",
                            38500,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1483",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2018_icon}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1441",
                            "opacity",
                            39000,
                            250,
                            "easeOutCubic",
                            "${_2018_icon}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1442",
                            "opacity",
                            42250,
                            250,
                            "easeOutCubic",
                            "${_2018_icon}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1524",
                            "opacity",
                            4000,
                            500,
                            "easeOutCubic",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1504",
                            "top",
                            7500,
                            500,
                            "easeOutCubic",
                            "${history}",
                            '0px',
                            '-94px'
                        ],
                        [
                            "eid1506",
                            "top",
                            11250,
                            500,
                            "easeOutCubic",
                            "${history}",
                            '-94px',
                            '-188px'
                        ],
                        [
                            "eid1508",
                            "top",
                            15000,
                            500,
                            "easeOutCubic",
                            "${history}",
                            '-188px',
                            '-282px'
                        ],
                        [
                            "eid1510",
                            "top",
                            19000,
                            500,
                            "easeOutCubic",
                            "${history}",
                            '-282px',
                            '-376px'
                        ],
                        [
                            "eid1512",
                            "top",
                            22750,
                            500,
                            "easeOutCubic",
                            "${history}",
                            '-376px',
                            '-468px'
                        ],
                        [
                            "eid1514",
                            "top",
                            26500,
                            500,
                            "easeOutCubic",
                            "${history}",
                            '-468px',
                            '-563px'
                        ],
                        [
                            "eid1516",
                            "top",
                            32500,
                            500,
                            "easeOutCubic",
                            "${history}",
                            '-563px',
                            '-657px'
                        ],
                        [
                            "eid1490",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2012}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1325",
                            "opacity",
                            19500,
                            250,
                            "easeOutCubic",
                            "${_2012}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1326",
                            "opacity",
                            22750,
                            250,
                            "easeOutCubic",
                            "${_2012}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1339",
                            "left",
                            19500,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy3}",
                            '137px',
                            '156px'
                        ],
                        [
                            "eid1340",
                            "left",
                            22750,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy3}",
                            '156px',
                            '137px'
                        ],
                        [
                            "eid1409",
                            "left",
                            33000,
                            250,
                            "easeOutCubic",
                            "${_2015_icon}",
                            '184px',
                            '257px'
                        ],
                        [
                            "eid1410",
                            "left",
                            38500,
                            250,
                            "easeOutCubic",
                            "${_2015_icon}",
                            '257px',
                            '184px'
                        ],
                        [
                            "eid1329",
                            "left",
                            19500,
                            250,
                            "easeOutCubic",
                            "${_2012}",
                            '84px',
                            '39px'
                        ],
                        [
                            "eid1330",
                            "left",
                            22750,
                            250,
                            "easeOutCubic",
                            "${_2012}",
                            '39px',
                            '80px'
                        ],
                        [
                            "eid1313",
                            "left",
                            15500,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy2}",
                            '137px',
                            '156px'
                        ],
                        [
                            "eid1314",
                            "left",
                            19000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy2}",
                            '156px',
                            '137px'
                        ],
                        [
                            "eid1484",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2015}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1403",
                            "opacity",
                            33000,
                            250,
                            "easeOutCubic",
                            "${_2015}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1404",
                            "opacity",
                            38500,
                            250,
                            "easeOutCubic",
                            "${_2015}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1305",
                            "left",
                            15500,
                            250,
                            "easeOutCubic",
                            "${_2011_icon}",
                            '179px',
                            '252px'
                        ],
                        [
                            "eid1306",
                            "left",
                            19000,
                            250,
                            "easeOutCubic",
                            "${_2011_icon}",
                            '252px',
                            '179px'
                        ],
                        [
                            "eid1365",
                            "scaleY",
                            23250,
                            250,
                            "easeOutCubic",
                            "${_2013}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1366",
                            "scaleY",
                            26500,
                            250,
                            "easeOutCubic",
                            "${_2013}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1395",
                            "left",
                            27000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy5}",
                            '137px',
                            '156px'
                        ],
                        [
                            "eid1396",
                            "left",
                            32500,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy5}",
                            '156px',
                            '137px'
                        ],
                        [
                            "eid1373",
                            "left",
                            23250,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy4}",
                            '137px',
                            '156px'
                        ],
                        [
                            "eid1374",
                            "left",
                            26500,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy4}",
                            '156px',
                            '137px'
                        ],
                        [
                            "eid1500",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2001}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid73",
                            "opacity",
                            500,
                            250,
                            "easeOutCubic",
                            "${_2001}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1193",
                            "opacity",
                            4250,
                            250,
                            "easeOutCubic",
                            "${_2001}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1478",
                            "left",
                            42750,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy8}",
                            '137px',
                            '156px'
                        ],
                        [
                            "eid1476",
                            "scaleY",
                            42750,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1474",
                            "opacity",
                            42955,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1473",
                            "opacity",
                            43000,
                            140,
                            "easeOutCubic",
                            "${_2020_expand_text_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1472",
                            "left",
                            42750,
                            250,
                            "easeOutCubic",
                            "${_2020}",
                            '80px',
                            '39px'
                        ],
                        [
                            "eid1217",
                            "left",
                            4500,
                            250,
                            "easeOutCubic",
                            "${_2005}",
                            '84px',
                            '39px'
                        ],
                        [
                            "eid1218",
                            "left",
                            7500,
                            250,
                            "easeOutCubic",
                            "${_2005}",
                            '39px',
                            '80px'
                        ],
                        [
                            "eid1449",
                            "scaleY",
                            39000,
                            250,
                            "easeOutCubic",
                            "${_2018}",
                            '0.92',
                            '1.5'
                        ],
                        [
                            "eid1450",
                            "scaleY",
                            42250,
                            250,
                            "easeOutCubic",
                            "${_2018}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1471",
                            "scaleY",
                            42750,
                            250,
                            "easeOutCubic",
                            "${_2020}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1492",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2011}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1299",
                            "opacity",
                            15500,
                            250,
                            "easeOutCubic",
                            "${_2011}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1300",
                            "opacity",
                            19000,
                            250,
                            "easeOutCubic",
                            "${_2011}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1309",
                            "opacity",
                            15750,
                            140,
                            "easeOutCubic",
                            "${_2011_expand_text_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1310",
                            "opacity",
                            18860,
                            140,
                            "easeOutCubic",
                            "${_2011_expand_text_3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1482",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2018}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1445",
                            "opacity",
                            39000,
                            250,
                            "easeOutCubic",
                            "${_2018}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1446",
                            "opacity",
                            42250,
                            250,
                            "easeOutCubic",
                            "${_2018}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1383",
                            "scaleY",
                            27000,
                            250,
                            "easeOutCubic",
                            "${_2014}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1384",
                            "scaleY",
                            32500,
                            250,
                            "easeOutCubic",
                            "${_2014}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1457",
                            "scaleY",
                            39000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1458",
                            "scaleY",
                            42250,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid553",
                            "opacity",
                            23500,
                            140,
                            "easeOutCubic",
                            "${_2013_expand_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid552",
                            "opacity",
                            26360,
                            140,
                            "easeOutCubic",
                            "${_2013_expand_text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1407",
                            "left",
                            33000,
                            250,
                            "easeOutCubic",
                            "${_2015}",
                            '84px',
                            '39px'
                        ],
                        [
                            "eid1408",
                            "left",
                            38500,
                            250,
                            "easeOutCubic",
                            "${_2015}",
                            '39px',
                            '80px'
                        ],
                        [
                            "eid1327",
                            "scaleY",
                            19500,
                            250,
                            "easeOutCubic",
                            "${_2012}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1328",
                            "scaleY",
                            22750,
                            250,
                            "easeOutCubic",
                            "${_2012}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid333",
                            "opacity",
                            12000,
                            140,
                            "easeOutCubic",
                            "${_2009_expand_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid338",
                            "opacity",
                            14860,
                            140,
                            "easeOutCubic",
                            "${_2009_expand_text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1497",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2006_icon}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1234",
                            "opacity",
                            8000,
                            250,
                            "easeOutCubic",
                            "${_2006_icon}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1235",
                            "opacity",
                            11250,
                            250,
                            "easeOutCubic",
                            "${_2006_icon}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1455",
                            "left",
                            39000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy7}",
                            '137px',
                            '156px'
                        ],
                        [
                            "eid1456",
                            "left",
                            42250,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy7}",
                            '156px',
                            '137px'
                        ],
                        [
                            "eid106",
                            "opacity",
                            4750,
                            140,
                            "easeOutCubic",
                            "${_2005_expand_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            7360,
                            140,
                            "easeOutCubic",
                            "${_2005_expand_text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1453",
                            "opacity",
                            39205,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1454",
                            "opacity",
                            42250,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1401",
                            "scaleX",
                            33000,
                            250,
                            "easeOutCubic",
                            "${_2015}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1402",
                            "scaleX",
                            38500,
                            250,
                            "easeOutCubic",
                            "${_2015}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1451",
                            "opacity",
                            39250,
                            140,
                            "easeOutCubic",
                            "${_2018_expand_text_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1452",
                            "opacity",
                            42110,
                            140,
                            "easeOutCubic",
                            "${_2018_expand_text_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1447",
                            "left",
                            39000,
                            250,
                            "easeOutCubic",
                            "${_2018}",
                            '84px',
                            '39px'
                        ],
                        [
                            "eid1448",
                            "left",
                            42250,
                            250,
                            "easeOutCubic",
                            "${_2018}",
                            '39px',
                            '80px'
                        ],
                        [
                            "eid1293",
                            "left",
                            11750,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2}",
                            '137px',
                            '156px'
                        ],
                        [
                            "eid1294",
                            "left",
                            15000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2}",
                            '156px',
                            '137px'
                        ],
                        [
                            "eid511",
                            "opacity",
                            19750,
                            140,
                            "easeOutCubic",
                            "${_2012_expand_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid513",
                            "opacity",
                            22610,
                            140,
                            "easeOutCubic",
                            "${_2012_expand_text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1250",
                            "scaleY",
                            8000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1251",
                            "scaleY",
                            11250,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1469",
                            "scaleX",
                            42750,
                            250,
                            "easeOutCubic",
                            "${_2020}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1385",
                            "left",
                            27000,
                            250,
                            "easeOutCubic",
                            "${_2014}",
                            '84px',
                            '39px'
                        ],
                        [
                            "eid1386",
                            "left",
                            32500,
                            250,
                            "easeOutCubic",
                            "${_2014}",
                            '39px',
                            '80px'
                        ],
                        [
                            "eid1439",
                            "left",
                            39000,
                            250,
                            "easeOutCubic",
                            "${_2018_icon}",
                            '188px',
                            '261px'
                        ],
                        [
                            "eid1440",
                            "left",
                            42250,
                            250,
                            "easeOutCubic",
                            "${_2018_icon}",
                            '261px',
                            '188px'
                        ],
                        [
                            "eid1297",
                            "scaleX",
                            15500,
                            250,
                            "easeOutCubic",
                            "${_2011}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1298",
                            "scaleX",
                            19000,
                            250,
                            "easeOutCubic",
                            "${_2011}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid104",
                            "opacity",
                            4705,
                            45,
                            "easeOutCubic",
                            "${_2005_expand2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            7500,
                            45,
                            "easeOutCubic",
                            "${_2005_expand2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1255",
                            "top",
                            500,
                            0,
                            "easeOutCubic",
                            "${_2001_expand_line}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid1256",
                            "top",
                            4500,
                            0,
                            "easeOutCubic",
                            "${_2001_expand_line}",
                            '9px',
                            '9px'
                        ],
                        [
                            "eid1303",
                            "left",
                            15500,
                            250,
                            "easeOutCubic",
                            "${_2011}",
                            '85px',
                            '39px'
                        ],
                        [
                            "eid1304",
                            "left",
                            19000,
                            250,
                            "easeOutCubic",
                            "${_2011}",
                            '39px',
                            '80px'
                        ],
                        [
                            "eid1323",
                            "scaleX",
                            19500,
                            250,
                            "easeOutCubic",
                            "${_2012}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1324",
                            "scaleX",
                            22750,
                            250,
                            "easeOutCubic",
                            "${_2012}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1391",
                            "opacity",
                            27250,
                            140,
                            "easeOutCubic",
                            "${_2014_expand_text_22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1392",
                            "opacity",
                            32360,
                            140,
                            "easeOutCubic",
                            "${_2014_expand_text_22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1419",
                            "left",
                            33000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy6}",
                            '137px',
                            '156px'
                        ],
                        [
                            "eid1420",
                            "left",
                            38500,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy6}",
                            '156px',
                            '137px'
                        ],
                        [
                            "eid1277",
                            "left",
                            11750,
                            250,
                            "easeOutCubic",
                            "${_2009_icon}",
                            '174px',
                            '247px'
                        ],
                        [
                            "eid1278",
                            "left",
                            15000,
                            250,
                            "easeOutCubic",
                            "${_2009_icon}",
                            '247px',
                            '174px'
                        ],
                        [
                            "eid1209",
                            "left",
                            4500,
                            250,
                            "easeOutCubic",
                            "${_2005_icon}",
                            '174px',
                            '247px'
                        ],
                        [
                            "eid1210",
                            "left",
                            7500,
                            250,
                            "easeOutCubic",
                            "${_2005_icon}",
                            '247px',
                            '174px'
                        ],
                        [
                            "eid1213",
                            "scaleX",
                            4500,
                            250,
                            "easeOutCubic",
                            "${_2005}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1214",
                            "scaleX",
                            7500,
                            250,
                            "easeOutCubic",
                            "${_2005}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1417",
                            "scaleY",
                            33000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1418",
                            "scaleY",
                            38500,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1246",
                            "opacity",
                            8205,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1247",
                            "opacity",
                            11250,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1371",
                            "opacity",
                            23455,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1372",
                            "opacity",
                            26500,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1543",
                            "clip",
                            0,
                            0,
                            "easeOutCubic",
                            "${history}",
                            [0,520,500.333251953125,0],
                            [0,520,500.333251953125,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1531",
                            "clip",
                            7500,
                            500,
                            "easeOutCubic",
                            "${history}",
                            [0,520,500.333251953125,0],
                            [93.949951171875,520,593.75,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1533",
                            "clip",
                            11250,
                            501,
                            "easeOutCubic",
                            "${history}",
                            [93.949951171875,520,593.75,0],
                            [188,520,688.14990234375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1535",
                            "clip",
                            15000,
                            500,
                            "easeOutCubic",
                            "${history}",
                            [188,520,688.14990234375,0],
                            [282,520,782.14990234375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1537",
                            "clip",
                            19000,
                            500,
                            "easeOutCubic",
                            "${history}",
                            [282,520,782.14990234375,0],
                            [375.75,520,876.14990234375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1540",
                            "clip",
                            22750,
                            500,
                            "easeOutCubic",
                            "${history}",
                            [375.75,520,876.14990234375,0],
                            [467.75,520,967.9833984375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1542",
                            "clip",
                            26500,
                            500,
                            "easeOutCubic",
                            "${history}",
                            [467.75,520,967.9833984375,0],
                            [562.75,520,1063.4833984375,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1248",
                            "left",
                            8000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy}",
                            '137px',
                            '156px'
                        ],
                        [
                            "eid1249",
                            "left",
                            11250,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy}",
                            '156px',
                            '137px'
                        ],
                        [
                            "eid1488",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2013}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1361",
                            "opacity",
                            23250,
                            250,
                            "easeOutCubic",
                            "${_2013}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1362",
                            "opacity",
                            26500,
                            250,
                            "easeOutCubic",
                            "${_2013}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1489",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2013_icon}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1369",
                            "opacity",
                            23250,
                            250,
                            "easeOutCubic",
                            "${_2013_icon}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1370",
                            "opacity",
                            26500,
                            250,
                            "easeOutCubic",
                            "${_2013_icon}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1289",
                            "opacity",
                            11955,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1290",
                            "opacity",
                            15000,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1291",
                            "scaleY",
                            11750,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1292",
                            "scaleY",
                            15000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1166",
                            "left",
                            500,
                            250,
                            "easeOutCubic",
                            "${_2001_icon}",
                            '174px',
                            '215px'
                        ],
                        [
                            "eid1198",
                            "left",
                            4250,
                            250,
                            "easeOutCubic",
                            "${_2001_icon}",
                            '215px',
                            '174px'
                        ],
                        [
                            "eid1285",
                            "scaleY",
                            11750,
                            250,
                            "easeOutCubic",
                            "${_2009}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1286",
                            "scaleY",
                            15000,
                            250,
                            "easeOutCubic",
                            "${_2009}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1335",
                            "opacity",
                            19705,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1336",
                            "opacity",
                            22750,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1467",
                            "left",
                            42750,
                            250,
                            "easeOutCubic",
                            "${_2020_icon}",
                            '187px',
                            '245px'
                        ],
                        [
                            "eid1413",
                            "opacity",
                            33250,
                            140,
                            "easeOutCubic",
                            "${_2015_expand_text_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1414",
                            "opacity",
                            38360,
                            140,
                            "easeOutCubic",
                            "${_2015_expand_text_2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1501",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2001_icon}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid67",
                            "opacity",
                            500,
                            250,
                            "easeOutCubic",
                            "${_2001_icon}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1199",
                            "opacity",
                            4250,
                            250,
                            "easeOutCubic",
                            "${_2001_icon}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid66",
                            "opacity",
                            750,
                            250,
                            "easeOutCubic",
                            "${_2001_expand_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "opacity",
                            4000,
                            250,
                            "easeOutCubic",
                            "${_2001_expand_text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1242",
                            "scaleY",
                            8000,
                            250,
                            "easeOutCubic",
                            "${_2006}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1243",
                            "scaleY",
                            11250,
                            250,
                            "easeOutCubic",
                            "${_2006}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1187",
                            "top",
                            4000,
                            500,
                            "easeOutCubic",
                            "${Pointer_vert}",
                            '58px',
                            '151px'
                        ],
                        [
                            "eid1231",
                            "top",
                            7500,
                            500,
                            "easeOutCubic",
                            "${Pointer_vert}",
                            '151px',
                            '245px'
                        ],
                        [
                            "eid1254",
                            "top",
                            11250,
                            500,
                            "easeOutCubic",
                            "${Pointer_vert}",
                            '245px',
                            '339px'
                        ],
                        [
                            "eid1296",
                            "top",
                            15000,
                            500,
                            "easeOutCubic",
                            "${Pointer_vert}",
                            '339px',
                            '433px'
                        ],
                        [
                            "eid1318",
                            "top",
                            19000,
                            500,
                            "easeOutCubic",
                            "${Pointer_vert}",
                            '433px',
                            '527px'
                        ],
                        [
                            "eid1342",
                            "top",
                            22750,
                            500,
                            "easeOutCubic",
                            "${Pointer_vert}",
                            '527px',
                            '619px'
                        ],
                        [
                            "eid1378",
                            "top",
                            26500,
                            500,
                            "easeOutCubic",
                            "${Pointer_vert}",
                            '619px',
                            '714px'
                        ],
                        [
                            "eid1400",
                            "top",
                            32500,
                            500,
                            "easeOutCubic",
                            "${Pointer_vert}",
                            '714px',
                            '808px'
                        ],
                        [
                            "eid1422",
                            "top",
                            38500,
                            500,
                            "easeOutCubic",
                            "${Pointer_vert}",
                            '808px',
                            '902px'
                        ],
                        [
                            "eid1460",
                            "top",
                            42250,
                            500,
                            "easeOutCubic",
                            "${Pointer_vert}",
                            '902px',
                            '997px'
                        ],
                        [
                            "eid1359",
                            "scaleX",
                            23250,
                            250,
                            "easeOutCubic",
                            "${_2013}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1360",
                            "scaleX",
                            26500,
                            250,
                            "easeOutCubic",
                            "${_2013}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1387",
                            "left",
                            27000,
                            250,
                            "easeOutCubic",
                            "${_2014_icon}",
                            '184px',
                            '257px'
                        ],
                        [
                            "eid1388",
                            "left",
                            32500,
                            250,
                            "easeOutCubic",
                            "${_2014_icon}",
                            '257px',
                            '184px'
                        ],
                        [
                            "eid1485",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2015_icon}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1411",
                            "opacity",
                            33000,
                            250,
                            "easeOutCubic",
                            "${_2015_icon}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1412",
                            "opacity",
                            38500,
                            250,
                            "easeOutCubic",
                            "${_2015_icon}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1397",
                            "scaleY",
                            27000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1398",
                            "scaleY",
                            32500,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1491",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2012_icon}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1321",
                            "opacity",
                            19500,
                            250,
                            "easeOutCubic",
                            "${_2012_icon}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1322",
                            "opacity",
                            22750,
                            250,
                            "easeOutCubic",
                            "${_2012_icon}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1236",
                            "scaleX",
                            8000,
                            250,
                            "easeOutCubic",
                            "${_2006}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1237",
                            "scaleX",
                            11250,
                            250,
                            "easeOutCubic",
                            "${_2006}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1375",
                            "scaleY",
                            23250,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1376",
                            "scaleY",
                            26500,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1337",
                            "scaleY",
                            19500,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1338",
                            "scaleY",
                            22750,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid71",
                            "scaleX",
                            500,
                            250,
                            "easeOutCubic",
                            "${_2001}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1192",
                            "scaleX",
                            4250,
                            250,
                            "easeOutCubic",
                            "${_2001}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1367",
                            "left",
                            23250,
                            250,
                            "easeOutCubic",
                            "${_2013_icon}",
                            '178px',
                            '251px'
                        ],
                        [
                            "eid1368",
                            "left",
                            26500,
                            250,
                            "easeOutCubic",
                            "${_2013_icon}",
                            '251px',
                            '178px'
                        ],
                        [
                            "eid1232",
                            "left",
                            8000,
                            250,
                            "easeOutCubic",
                            "${_2006_icon}",
                            '174px',
                            '247px'
                        ],
                        [
                            "eid1233",
                            "left",
                            11250,
                            250,
                            "easeOutCubic",
                            "${_2006_icon}",
                            '247px',
                            '174px'
                        ],
                        [
                            "eid1486",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2014}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1381",
                            "opacity",
                            27000,
                            250,
                            "easeOutCubic",
                            "${_2014}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1382",
                            "opacity",
                            32500,
                            250,
                            "easeOutCubic",
                            "${_2014}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid174",
                            "opacity",
                            8250,
                            140,
                            "easeOutCubic",
                            "${_2006_expand_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid194",
                            "opacity",
                            11110,
                            140,
                            "easeOutCubic",
                            "${_2006_expand_text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1223",
                            "scaleY",
                            4500,
                            250,
                            "easeOutCubic",
                            "${_2005_expand_line2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1224",
                            "scaleY",
                            7500,
                            250,
                            "easeOutCubic",
                            "${_2005_expand_line2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1281",
                            "scaleX",
                            11750,
                            250,
                            "easeOutCubic",
                            "${_2009}",
                            '1.01',
                            '1.5'
                        ],
                        [
                            "eid1282",
                            "scaleX",
                            15000,
                            250,
                            "easeOutCubic",
                            "${_2009}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1163",
                            "left",
                            500,
                            250,
                            "easeOutCubic",
                            "${_2001}",
                            '84px',
                            '39px'
                        ],
                        [
                            "eid1194",
                            "left",
                            4250,
                            250,
                            "easeOutCubic",
                            "${_2001}",
                            '39px',
                            '80px'
                        ],
                        [
                            "eid1443",
                            "scaleX",
                            39000,
                            250,
                            "easeOutCubic",
                            "${_2018}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1444",
                            "scaleX",
                            42250,
                            250,
                            "easeOutCubic",
                            "${_2018}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1498",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2005}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1215",
                            "opacity",
                            4500,
                            250,
                            "easeOutCubic",
                            "${_2005}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1216",
                            "opacity",
                            7500,
                            250,
                            "easeOutCubic",
                            "${_2005}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1227",
                            "left",
                            4500,
                            250,
                            "easeOutCubic",
                            "${_2005_expand_line2}",
                            '137px',
                            '156px'
                        ],
                        [
                            "eid1229",
                            "left",
                            7500,
                            250,
                            "easeOutCubic",
                            "${_2005_expand_line2}",
                            '156px',
                            '137px'
                        ],
                        [
                            "eid1311",
                            "opacity",
                            15705,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1312",
                            "opacity",
                            19000,
                            45,
                            "easeOutCubic",
                            "${_2006_expand2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1219",
                            "scaleY",
                            4500,
                            250,
                            "easeOutCubic",
                            "${_2005}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1220",
                            "scaleY",
                            7500,
                            250,
                            "easeOutCubic",
                            "${_2005}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1499",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2005_icon}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1211",
                            "opacity",
                            4500,
                            250,
                            "easeOutCubic",
                            "${_2005_icon}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1212",
                            "opacity",
                            7500,
                            250,
                            "easeOutCubic",
                            "${_2005_icon}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1496",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2006}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1238",
                            "opacity",
                            8000,
                            250,
                            "easeOutCubic",
                            "${_2006}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1239",
                            "opacity",
                            11250,
                            250,
                            "easeOutCubic",
                            "${_2006}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid64",
                            "opacity",
                            705,
                            45,
                            "easeOutCubic",
                            "${_2001_expand}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            4250,
                            45,
                            "easeOutCubic",
                            "${_2001_expand}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1287",
                            "left",
                            11750,
                            250,
                            "easeOutCubic",
                            "${_2009}",
                            '84px',
                            '39px'
                        ],
                        [
                            "eid1288",
                            "left",
                            15000,
                            250,
                            "easeOutCubic",
                            "${_2009}",
                            '39px',
                            '80px'
                        ],
                        [
                            "eid1405",
                            "scaleY",
                            33000,
                            250,
                            "easeOutCubic",
                            "${_2015}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1406",
                            "scaleY",
                            38500,
                            250,
                            "easeOutCubic",
                            "${_2015}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid1493",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2011_icon}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1307",
                            "opacity",
                            15500,
                            250,
                            "easeOutCubic",
                            "${_2011_icon}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1308",
                            "opacity",
                            19000,
                            250,
                            "easeOutCubic",
                            "${_2011_icon}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1494",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2009}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1283",
                            "opacity",
                            11750,
                            250,
                            "easeOutCubic",
                            "${_2009}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1284",
                            "opacity",
                            15000,
                            250,
                            "easeOutCubic",
                            "${_2009}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1363",
                            "left",
                            23250,
                            250,
                            "easeOutCubic",
                            "${_2013}",
                            '84px',
                            '39px'
                        ],
                        [
                            "eid1364",
                            "left",
                            26500,
                            250,
                            "easeOutCubic",
                            "${_2013}",
                            '39px',
                            '80px'
                        ],
                        [
                            "eid1240",
                            "left",
                            8000,
                            250,
                            "easeOutCubic",
                            "${_2006}",
                            '84px',
                            '39px'
                        ],
                        [
                            "eid1241",
                            "left",
                            11250,
                            250,
                            "easeOutCubic",
                            "${_2006}",
                            '39px',
                            '80px'
                        ],
                        [
                            "eid1319",
                            "left",
                            19500,
                            250,
                            "easeOutCubic",
                            "${_2012_icon}",
                            '182px',
                            '252px'
                        ],
                        [
                            "eid1320",
                            "left",
                            22750,
                            250,
                            "easeOutCubic",
                            "${_2012_icon}",
                            '252px',
                            '179px'
                        ],
                        [
                            "eid1315",
                            "scaleY",
                            15500,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1316",
                            "scaleY",
                            19000,
                            250,
                            "easeOutCubic",
                            "${_2006_expand_line2Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1495",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2009_icon}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1279",
                            "opacity",
                            11750,
                            250,
                            "easeOutCubic",
                            "${_2009_icon}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1280",
                            "opacity",
                            15000,
                            250,
                            "easeOutCubic",
                            "${_2009_icon}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid1480",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${_2020}",
                            '0.5',
                            '0.5'
                        ],
                        [
                            "eid1470",
                            "opacity",
                            42750,
                            250,
                            "easeOutCubic",
                            "${_2020}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid1379",
                            "scaleX",
                            27000,
                            250,
                            "easeOutCubic",
                            "${_2014}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1380",
                            "scaleX",
                            32500,
                            250,
                            "easeOutCubic",
                            "${_2014}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid72",
                            "scaleY",
                            500,
                            250,
                            "easeOutCubic",
                            "${_2001}",
                            '1',
                            '1.5'
                        ],
                        [
                            "eid1195",
                            "scaleY",
                            4250,
                            250,
                            "easeOutCubic",
                            "${_2001}",
                            '1.5',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("scheduling_history_timeline_mobile_2_edgeActions.js");
})("EDGE-34774265");
