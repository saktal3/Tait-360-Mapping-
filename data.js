var APP_DATA = {
  "scenes": [
    {
      "id": "0-cs-entrance",
      "name": "CS Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8860519078425497,
          "pitch": 0.07211412516019422,
          "rotation": 0,
          "target": "7-lobby"
        },
        {
          "yaw": 0.12547786028567387,
          "pitch": 0.27621451442956513,
          "rotation": 0,
          "target": "1-laundry-hallway"
        },
        {
          "yaw": -0.08490358733977565,
          "pitch": -0.018466171380149277,
          "rotation": 5.497787143782138,
          "target": "2-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-laundry-hallway",
      "name": "laundry hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.754248541447729,
        "pitch": 0.1809760531196929,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.23752895695767506,
          "pitch": -0.020810641257037688,
          "rotation": 0,
          "target": "2-laundry"
        },
        {
          "yaw": -1.4130322049608868,
          "pitch": 0.28646537861284216,
          "rotation": 0,
          "target": "0-cs-entrance"
        },
        {
          "yaw": -3.0388889968198,
          "pitch": 0.3477802306108231,
          "rotation": 0,
          "target": "3-mailroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4069024966312043,
          "pitch": 0.12378195919630741,
          "title": "Equipment Service",
          "text": "Geoff / Jeff office"
        }
      ]
    },
    {
      "id": "2-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.134751985825556,
        "pitch": 0.08337968061004908,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.1412168877594322,
          "pitch": 0.17527883890527107,
          "rotation": 0,
          "target": "1-laundry-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-mailroom",
      "name": "mailroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.251867157806787,
        "pitch": 0.09473388265438842,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.6788095459573658,
          "pitch": 0.36474599484783,
          "rotation": 0,
          "target": "1-laundry-hallway"
        },
        {
          "yaw": -1.5940282509603332,
          "pitch": -0.000352893796353726,
          "rotation": 0,
          "target": "2-laundry"
        },
        {
          "yaw": 1.646679737055682,
          "pitch": 0.35866269057871847,
          "rotation": 0,
          "target": "4-front-desk"
        },
        {
          "yaw": 1.60957988311001,
          "pitch": 0.12388947196548727,
          "rotation": 5.497787143782138,
          "target": "5-equipment-desk"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.0021620083192139816,
          "pitch": 0.08693596139888626,
          "title": "Mailroom",
          "text": "Remember to write the person ,date ,time, and courier on the board"
        },
        {
          "yaw": 3.0715743590409588,
          "pitch": 0.05375704137610704,
          "title": "Camp Office",
          "text": "<br>"
        },
        {
          "yaw": 2.167390984050482,
          "pitch": 0.0993463931821097,
          "title": "Pride Shop",
          "text": "For Pride Shop Sales"
        }
      ]
    },
    {
      "id": "4-front-desk",
      "name": "Front Desk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.2515024132734442,
        "pitch": 0.060360965301390124,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 3.1147620737524706,
          "pitch": 0.055660786747461444,
          "rotation": 0,
          "target": "7-lobby"
        },
        {
          "yaw": -1.4596916074098427,
          "pitch": 0.3449327540530511,
          "rotation": 0.7853981633974483,
          "target": "3-mailroom"
        },
        {
          "yaw": -1.5960550054077718,
          "pitch": 0.20634302918122494,
          "rotation": 0,
          "target": "1-laundry-hallway"
        },
        {
          "yaw": 1.4442703123350125,
          "pitch": 0.5061781381033192,
          "rotation": 0,
          "target": "5-equipment-desk"
        },
        {
          "yaw": 1.519053094450073,
          "pitch": -0.07740131555110885,
          "rotation": 4.71238898038469,
          "target": "9-client-side-equipment"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0111415494235985,
          "pitch": 0.4652026662299633,
          "title": "Panic Button / Silent Alarm",
          "text": "Use the panic button/silent alarm to notified securies to this location"
        },
        {
          "yaw": 2.631066827886487,
          "pitch": 0.7900109416817145,
          "title": "Panic Button / Silent Alarm",
          "text": "Use the panic button/silent alarm to notified securies to this location"
        },
        {
          "yaw": -1.1729424850559305,
          "pitch": -0.08579821874293359,
          "title": "Coordinator's Office",
          "text": "Linda's Office"
        }
      ]
    },
    {
      "id": "5-equipment-desk",
      "name": "Equipment Desk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.585692545738862,
        "pitch": 0.04497452461094298,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.508490908645685,
          "pitch": 0.41162246841411054,
          "rotation": 0,
          "target": "4-front-desk"
        },
        {
          "yaw": -3.041311318672447,
          "pitch": 0.32927225108787184,
          "rotation": 0,
          "target": "6-equipment-room"
        },
        {
          "yaw": 0.2963736677038895,
          "pitch": -0.06105359440517866,
          "rotation": 0,
          "target": "7-lobby"
        },
        {
          "yaw": -1.33319454626713,
          "pitch": -0.013184717915915911,
          "rotation": 4.71238898038469,
          "target": "9-client-side-equipment"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-equipment-room",
      "name": "Equipment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.9565887069964676,
        "pitch": 0.06187249676896478,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.03551435080668952,
          "pitch": 0.2623319905846042,
          "rotation": 0,
          "target": "5-equipment-desk"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.044939066299712,
        "pitch": 0.16674564409599668,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -3.137888657360927,
          "pitch": -0.043929742769282853,
          "rotation": 0,
          "target": "4-front-desk"
        },
        {
          "yaw": -2.000779745352787,
          "pitch": 0.11499287228585686,
          "rotation": 0,
          "target": "8-turnstile"
        },
        {
          "yaw": 0.02215167776630622,
          "pitch": 0.05921812848393593,
          "rotation": 0,
          "target": "104-outside-near-key-and-gator-location"
        },
        {
          "yaw": 1.6892696972667762,
          "pitch": 0.05818667530212274,
          "rotation": 0,
          "target": "0-cs-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.166350553589476,
          "pitch": 0.05155984741518971,
          "title": "Pride Shop",
          "text": "<br>"
        },
        {
          "yaw": -1.3185529947397523,
          "pitch": -0.026216919153869256,
          "title": "Whiteboard",
          "text": "Use for telling infomation"
        }
      ]
    },
    {
      "id": "8-turnstile",
      "name": "turnstile",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.806153474715435,
        "pitch": 0.08921040222340082,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.4635317487285278,
          "pitch": 0.28573542939899355,
          "rotation": 0,
          "target": "9-client-side-equipment"
        },
        {
          "yaw": -2.4588656701728127,
          "pitch": 0.3225634342008057,
          "rotation": 5.497787143782138,
          "target": "13-lobby-staircase"
        },
        {
          "yaw": 0.539961805830778,
          "pitch": 0.18164997475186873,
          "rotation": 0,
          "target": "7-lobby"
        },
        {
          "yaw": 1.4821666381845793,
          "pitch": -0.13637672462776074,
          "rotation": 3.141592653589793,
          "target": "4-front-desk"
        },
        {
          "yaw": 0.6695455997025448,
          "pitch": 0.032611346200710045,
          "rotation": 0,
          "target": "0-cs-entrance"
        },
        {
          "yaw": -0.10205161862208989,
          "pitch": 0.006873558992834816,
          "rotation": 0,
          "target": "105-outside-and-opening-tait-keys"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-client-side-equipment",
      "name": "client side equipment",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5390268074040456,
          "pitch": -0.029912520369093087,
          "rotation": 0,
          "target": "5-equipment-desk"
        },
        {
          "yaw": 1.130318859832668,
          "pitch": -0.027250311653933323,
          "rotation": 4.71238898038469,
          "target": "4-front-desk"
        },
        {
          "yaw": -0.06377069741417607,
          "pitch": 0.21397523994185264,
          "rotation": 0.7853981633974483,
          "target": "8-turnstile"
        },
        {
          "yaw": 3.0283929206357616,
          "pitch": 0.2584277530706949,
          "rotation": 0,
          "target": "10-hallway-first-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-hallway-first-elevator",
      "name": "hallway first elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.12293144732803,
        "pitch": 0.12327654546544942,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.07073384987358722,
          "pitch": 0.18702831263929554,
          "rotation": 0,
          "target": "8-turnstile"
        },
        {
          "yaw": -3.1237647765981276,
          "pitch": 0.19150485594623134,
          "rotation": 0,
          "target": "11-inside-1st-elevator"
        },
        {
          "yaw": -2.618890954090336,
          "pitch": 0.21014866408024346,
          "rotation": 0,
          "target": "16-past-the-first-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-inside-1st-elevator",
      "name": "inside 1st elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.967916074086025,
        "pitch": 0.18170651728714127,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.06286764507473919,
          "pitch": 0.528239261305746,
          "rotation": 0,
          "target": "10-hallway-first-elevator"
        },
        {
          "yaw": 0.00025204705265835514,
          "pitch": 0.10959163428092467,
          "rotation": 0,
          "target": "8-turnstile"
        },
        {
          "yaw": 3.0013594889181725,
          "pitch": -0.3342647879865268,
          "rotation": 0,
          "target": "12-first-elevator-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-first-elevator-second-floor",
      "name": "first elevator second floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.007061813818442,
          "pitch": 0.14568397690636914,
          "rotation": 1.5707963267948966,
          "target": "81-hallway-to-vending-machine-near-the-men-washroom"
        },
        {
          "yaw": -0.08493775094789946,
          "pitch": 0.35710389309692125,
          "rotation": 3.141592653589793,
          "target": "11-inside-1st-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-lobby-staircase",
      "name": "lobby staircase",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0684949281778167,
        "pitch": -0.26577195858468095,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 3.083667649251783,
          "pitch": -0.04302625619102507,
          "rotation": 0,
          "target": "14-lobby-staircase2stop"
        },
        {
          "yaw": 1.22580583597761,
          "pitch": 0.20028430012040133,
          "rotation": 0,
          "target": "8-turnstile"
        },
        {
          "yaw": -3.0285863340747827,
          "pitch": -0.20896532404780643,
          "rotation": 0,
          "target": "15-lobby-staircase3"
        },
        {
          "yaw": 3.0637982742307033,
          "pitch": -0.3389170611589982,
          "rotation": 0,
          "target": "81-hallway-to-vending-machine-near-the-men-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-lobby-staircase2stop",
      "name": "lobby staircase2stop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.003446373014336,
        "pitch": -0.10453895691882309,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.021493056979588587,
          "pitch": 0.5819384203672868,
          "rotation": 0,
          "target": "13-lobby-staircase"
        },
        {
          "yaw": -3.0017806049625637,
          "pitch": -0.08976677880248829,
          "rotation": 0,
          "target": "15-lobby-staircase3"
        },
        {
          "yaw": 0.25644528671291944,
          "pitch": 0.3461236282543716,
          "rotation": 1.5707963267948966,
          "target": "8-turnstile"
        },
        {
          "yaw": -2.889032920164855,
          "pitch": -0.18970746901829472,
          "rotation": 0,
          "target": "81-hallway-to-vending-machine-near-the-men-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-lobby-staircase3",
      "name": "lobby staircase3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0361057207769537,
        "pitch": -0.08378995465091421,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.025960338352010837,
          "pitch": 0.6210699439038905,
          "rotation": 0,
          "target": "14-lobby-staircase2stop"
        },
        {
          "yaw": -0.03720098937171201,
          "pitch": 0.43204671081257473,
          "rotation": 0,
          "target": "13-lobby-staircase"
        },
        {
          "yaw": 0.16987436834552305,
          "pitch": 0.32222619980056066,
          "rotation": 1.5707963267948966,
          "target": "8-turnstile"
        },
        {
          "yaw": -2.8335672750063026,
          "pitch": -0.02120313649345107,
          "rotation": 0,
          "target": "81-hallway-to-vending-machine-near-the-men-washroom"
        },
        {
          "yaw": 3.1157870463233897,
          "pitch": -0.028242847048382203,
          "rotation": 0,
          "target": "82-hallway-to-fitness-centre1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-past-the-first-elevator",
      "name": "past the first elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.009080520917242652,
          "pitch": 0.2546256512116596,
          "rotation": 0,
          "target": "17-pool-door-near-cs"
        },
        {
          "yaw": 2.9283652583484177,
          "pitch": 0.26020281881880436,
          "rotation": 0,
          "target": "10-hallway-first-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-pool-door-near-cs",
      "name": "pool door near cs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.13400148538141465,
        "pitch": -0.10080793048033598,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.195862043649356,
          "pitch": 0.46673264510006973,
          "rotation": 0,
          "target": "16-past-the-first-elevator"
        },
        {
          "yaw": -3.0031458236211925,
          "pitch": 0.07750341319981047,
          "rotation": 0,
          "target": "106-pool-door-near-cs-inside-pool"
        },
        {
          "yaw": 1.5047944310091497,
          "pitch": 0.129742279232957,
          "rotation": 0,
          "target": "18-stair-1-floor-1"
        },
        {
          "yaw": 0.2130233441644851,
          "pitch": 0.13033451163596688,
          "rotation": 0,
          "target": "19-outside-women-changeroom-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-stair-1-floor-1",
      "name": "stair 1 floor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.024062457103101,
        "pitch": 0.03631247685297723,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.5586789458814527,
          "pitch": 0.09421903310269997,
          "rotation": 0,
          "target": "17-pool-door-near-cs"
        },
        {
          "yaw": -2.9084060418637563,
          "pitch": -0.34500282003956073,
          "rotation": 0,
          "target": "80-stairs-to-upper-gym-near-men-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-outside-women-changeroom-door",
      "name": "outside women changeroom door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.43325686664776697,
          "pitch": 0.07449246628903339,
          "rotation": 0,
          "target": "20-squash-walkway1"
        },
        {
          "yaw": -2.6253189197883025,
          "pitch": 0.15106438385343957,
          "rotation": 0,
          "target": "17-pool-door-near-cs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.17527825198449776,
          "pitch": -0.10802465154400487,
          "title": "Day Lockers",
          "text": "Free to use for the day, cut locks at the end of the night"
        }
      ]
    },
    {
      "id": "20-squash-walkway1",
      "name": "squash walkway1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8141030267227585,
          "pitch": 0.09066940876157226,
          "rotation": 0,
          "target": "19-outside-women-changeroom-door"
        },
        {
          "yaw": -2.8891219930748075,
          "pitch": 0.02819219731500411,
          "rotation": 0,
          "target": "41-left-staircase-between-basement-and-cs-floor"
        },
        {
          "yaw": 0.23813499994531462,
          "pitch": 0.23529647050314573,
          "rotation": 0,
          "target": "21-squash-walkway2"
        },
        {
          "yaw": 0.2395727393218401,
          "pitch": 0.10744232366200279,
          "rotation": 0,
          "target": "22-squash-walkway3"
        },
        {
          "yaw": 0.20152051445785446,
          "pitch": 0.002175721742737835,
          "rotation": 0,
          "target": "23-men-changeroom-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-squash-walkway2",
      "name": "squash walkway2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.022939437887787406,
          "pitch": 0.22035081323094552,
          "rotation": 0,
          "target": "22-squash-walkway3"
        },
        {
          "yaw": -3.0370950669674404,
          "pitch": 0.3306740668406647,
          "rotation": 0,
          "target": "20-squash-walkway1"
        },
        {
          "yaw": 0.07712110739544187,
          "pitch": 0.011366133297743275,
          "rotation": 0,
          "target": "23-men-changeroom-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-squash-walkway3",
      "name": "squash walkway3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07936756959796654,
          "pitch": 0.23574452243758515,
          "rotation": 0,
          "target": "21-squash-walkway2"
        },
        {
          "yaw": -0.10989967000871559,
          "pitch": 0.008148505050680654,
          "rotation": 0,
          "target": "20-squash-walkway1"
        },
        {
          "yaw": 3.019665907475062,
          "pitch": 0.15186323015067593,
          "rotation": 0,
          "target": "23-men-changeroom-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-men-changeroom-door",
      "name": "men changeroom door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2844550282663736,
          "pitch": 0.13210944487452636,
          "rotation": 0,
          "target": "22-squash-walkway3"
        },
        {
          "yaw": 0.26142828177635025,
          "pitch": 0.0194488934705781,
          "rotation": 0,
          "target": "20-squash-walkway1"
        },
        {
          "yaw": -2.7779313050841665,
          "pitch": -0.0065139568452323715,
          "rotation": 3.9269908169872414,
          "target": "24-stair-4-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-stair-4-floor-1",
      "name": "stair 4 floor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7897387251884176,
          "pitch": 0.14079976581773934,
          "rotation": 5.497787143782138,
          "target": "23-men-changeroom-door"
        },
        {
          "yaw": -0.41488238675994715,
          "pitch": 0.4003957849280688,
          "rotation": 3.141592653589793,
          "target": "25-stair-4-floor-basement-near-studio1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-stair-4-floor-basement-near-studio1",
      "name": "stair 4 floor basement near studio1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4744879513399205,
          "pitch": 0.26301653551749027,
          "rotation": 0.7853981633974483,
          "target": "26-studio-1"
        },
        {
          "yaw": -2.7127013903457726,
          "pitch": 0.37420567847842,
          "rotation": 0,
          "target": "27-spin-studio-outside"
        },
        {
          "yaw": -1.1852253971120632,
          "pitch": -0.15137028664269359,
          "rotation": 0.7853981633974483,
          "target": "24-stair-4-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-studio-1",
      "name": "studio 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0053702438522922336,
          "pitch": 0.2030137372908598,
          "rotation": 0,
          "target": "25-stair-4-floor-basement-near-studio1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-spin-studio-outside",
      "name": "spin studio outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.95580813475629,
          "pitch": 0.3124402051386177,
          "rotation": 0,
          "target": "29-outside-squash-3-and-studio-2"
        },
        {
          "yaw": 2.9769701579651198,
          "pitch": 0.10358443664020278,
          "rotation": 4.71238898038469,
          "target": "34-hallway-to-studio-4-and-hpc-1"
        },
        {
          "yaw": 2.952754295701122,
          "pitch": -0.043490720324568244,
          "rotation": 3.141592653589793,
          "target": "40-left-staircase-near-squash-court-inside"
        },
        {
          "yaw": -1.72694697719853,
          "pitch": 0.2599069611886158,
          "rotation": 0,
          "target": "28-spin-studio"
        },
        {
          "yaw": -0.1419890968840516,
          "pitch": 0.1577027968358209,
          "rotation": 5.497787143782138,
          "target": "25-stair-4-floor-basement-near-studio1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-spin-studio",
      "name": "spin studio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.16351518490156636,
          "pitch": 0.062228522642364226,
          "rotation": 0,
          "target": "27-spin-studio-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-outside-squash-3-and-studio-2",
      "name": "outside squash 3 and studio 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.030957789003752,
          "pitch": 0.31104381686412275,
          "rotation": 0,
          "target": "32-squash-court-4-outside"
        },
        {
          "yaw": 3.011592821768353,
          "pitch": -0.09974964063678016,
          "rotation": 3.141592653589793,
          "target": "37-squash-court-7-outside-and-left-staircase"
        },
        {
          "yaw": 2.9882379890715747,
          "pitch": 0.046188939754546965,
          "rotation": 4.71238898038469,
          "target": "34-hallway-to-studio-4-and-hpc-1"
        },
        {
          "yaw": -2.3213743946724,
          "pitch": 0.04112332785089379,
          "rotation": 0,
          "target": "31-table-tennis-court"
        },
        {
          "yaw": 0.7981929675562522,
          "pitch": 0.22742264933326695,
          "rotation": 0,
          "target": "30-studio-2"
        },
        {
          "yaw": -0.11981453487100602,
          "pitch": 0.26427991008638685,
          "rotation": 0,
          "target": "27-spin-studio-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-studio-2",
      "name": "studio 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12809804912484957,
          "pitch": 0.05148718522672624,
          "rotation": 0,
          "target": "29-outside-squash-3-and-studio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-table-tennis-court",
      "name": "table tennis court",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11450861854575578,
          "pitch": 0.05784849715020712,
          "rotation": 0,
          "target": "29-outside-squash-3-and-studio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-squash-court-4-outside",
      "name": "squash court 4 outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39916460232058704,
          "pitch": 0.15731666478244577,
          "rotation": 11.780972450961727,
          "target": "45-hallway-to-studio-4-and-hpc-2"
        },
        {
          "yaw": 0.40623379610261345,
          "pitch": 0.005004452492997302,
          "rotation": 0,
          "target": "37-squash-court-7-outside-and-left-staircase"
        },
        {
          "yaw": -2.6928296936578384,
          "pitch": 0.19808027276150852,
          "rotation": 0,
          "target": "29-outside-squash-3-and-studio-2"
        },
        {
          "yaw": 2.526497004359518,
          "pitch": 0.18789730711295505,
          "rotation": 0,
          "target": "33-squash-court-4"
        },
        {
          "yaw": -2.6860542966417533,
          "pitch": -0.08081916508890785,
          "rotation": 3.141592653589793,
          "target": "25-stair-4-floor-basement-near-studio1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-squash-court-4",
      "name": "squash court 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9323008853234,
          "pitch": 0.313577955582911,
          "rotation": 0,
          "target": "32-squash-court-4-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-hallway-to-studio-4-and-hpc-1",
      "name": "hallway to studio 4 and hpc 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9356179650056795,
          "pitch": 0.24858572684592595,
          "rotation": 0.7853981633974483,
          "target": "36-squash-court-6"
        },
        {
          "yaw": -1.555455988947882,
          "pitch": 0.17563087736202476,
          "rotation": 0,
          "target": "37-squash-court-7-outside-and-left-staircase"
        },
        {
          "yaw": 3.032505768483956,
          "pitch": 0.5985916966508551,
          "rotation": 0,
          "target": "45-hallway-to-studio-4-and-hpc-2"
        },
        {
          "yaw": 3.072062481596136,
          "pitch": 0.1918996862864688,
          "rotation": 0,
          "target": "49-studio-4b-and-hpc"
        },
        {
          "yaw": 1.4309129884417615,
          "pitch": 0.0912908553347318,
          "rotation": 0,
          "target": "32-squash-court-4-outside"
        },
        {
          "yaw": 1.4594499239045104,
          "pitch": -0.1382325165008389,
          "rotation": 3.141592653589793,
          "target": "25-stair-4-floor-basement-near-studio1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-squash-court-7",
      "name": "squash court 7?",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8070734194417177,
          "pitch": 0.5161149825120113,
          "rotation": 0,
          "target": "37-squash-court-7-outside-and-left-staircase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-squash-court-6",
      "name": "squash court 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9309992174344073,
          "pitch": 0.5810960373872316,
          "rotation": 0,
          "target": "34-hallway-to-studio-4-and-hpc-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-squash-court-7-outside-and-left-staircase",
      "name": "squash court 7 outside and left staircase",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7104321473440471,
          "pitch": 0.38245895127217366,
          "rotation": 4.71238898038469,
          "target": "35-squash-court-7"
        },
        {
          "yaw": 0.24038039378148213,
          "pitch": 0.1719259770421857,
          "rotation": 0,
          "target": "34-hallway-to-studio-4-and-hpc-1"
        },
        {
          "yaw": -2.9075482970358824,
          "pitch": 0.13395282947453602,
          "rotation": 0,
          "target": "40-left-staircase-near-squash-court-inside"
        },
        {
          "yaw": 0.22257206730843748,
          "pitch": -0.044503255370791805,
          "rotation": 3.141592653589793,
          "target": "25-stair-4-floor-basement-near-studio1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-studio-3-outside",
      "name": "studio 3 outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9875993387838164,
          "pitch": 0.3932009860823307,
          "rotation": 0.7853981633974483,
          "target": "40-left-staircase-near-squash-court-inside"
        },
        {
          "yaw": -0.43264488869987616,
          "pitch": 0.0631887966281699,
          "rotation": 5.497787143782138,
          "target": "39-studio-3"
        },
        {
          "yaw": 0.14204260273942282,
          "pitch": 0.26787715278755364,
          "rotation": 0,
          "target": "37-squash-court-7-outside-and-left-staircase"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-studio-3",
      "name": "studio 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4589623261444764,
          "pitch": 0.13263387367923585,
          "rotation": 0,
          "target": "38-studio-3-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-left-staircase-near-squash-court-inside",
      "name": "left staircase near squash court inside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7564250842529319,
          "pitch": -0.23506616010384462,
          "rotation": 5.497787143782138,
          "target": "41-left-staircase-between-basement-and-cs-floor"
        },
        {
          "yaw": 0.5680862708492072,
          "pitch": 0.28137882060292085,
          "rotation": 0,
          "target": "38-studio-3-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-left-staircase-between-basement-and-cs-floor",
      "name": "left staircase between basement and cs floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0737267964795727,
          "pitch": -0.1770713824807082,
          "rotation": 11.780972450961727,
          "target": "42-stair-3-floor-cs-or-floor-1"
        },
        {
          "yaw": 2.780096316524925,
          "pitch": 0.4397077369446851,
          "rotation": 4.71238898038469,
          "target": "40-left-staircase-near-squash-court-inside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-stair-3-floor-cs-or-floor-1",
      "name": "stair 3 floor cs or floor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4523396178691197,
          "pitch": 0.41297200912234544,
          "rotation": 2.356194490192345,
          "target": "41-left-staircase-between-basement-and-cs-floor"
        },
        {
          "yaw": -3.131159377239644,
          "pitch": 0.18379018349375897,
          "rotation": 0,
          "target": "20-squash-walkway1"
        },
        {
          "yaw": 2.241576656215763,
          "pitch": -0.09905909963633341,
          "rotation": 5.497787143782138,
          "target": "43-staircase3-left-above-floor-1-or-cs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-staircase3-left-above-floor-1-or-cs",
      "name": "staircase3 left above floor 1 or cs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9819142884594427,
          "pitch": 0.36031171172796306,
          "rotation": 2.356194490192345,
          "target": "42-stair-3-floor-cs-or-floor-1"
        },
        {
          "yaw": 2.836567353239465,
          "pitch": -0.16034070823247504,
          "rotation": 0,
          "target": "44-stair-3-floor-2-near-fitness-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-stair-3-floor-2-near-fitness-centre",
      "name": "Stair 3 floor 2 near fitness centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1479432784780048,
          "pitch": 0.08905031467865143,
          "rotation": 0,
          "target": "83-fitness-centre-hallway-2"
        },
        {
          "yaw": 0.8376140469066016,
          "pitch": -0.09836676222824003,
          "rotation": 3.141592653589793,
          "target": "43-staircase3-left-above-floor-1-or-cs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-hallway-to-studio-4-and-hpc-2",
      "name": "hallway to studio 4 and hpc 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.876818601052644,
          "pitch": 0.4672571885751875,
          "rotation": 0,
          "target": "34-hallway-to-studio-4-and-hpc-1"
        },
        {
          "yaw": 0.21040387549991557,
          "pitch": 0.5458252833007151,
          "rotation": 6.283185307179586,
          "target": "46-studio-4a-outside"
        },
        {
          "yaw": 0.32690902714680803,
          "pitch": 0.20527370473945794,
          "rotation": 0,
          "target": "49-studio-4b-and-hpc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-studio-4a-outside",
      "name": "studio 4A outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8930730845572201,
          "pitch": 0.1726128391739472,
          "rotation": 0,
          "target": "49-studio-4b-and-hpc"
        },
        {
          "yaw": -1.3614130788312817,
          "pitch": 0.15592860952825127,
          "rotation": 6.283185307179586,
          "target": "45-hallway-to-studio-4-and-hpc-2"
        },
        {
          "yaw": 0.3131508796995526,
          "pitch": 0.4692344624517766,
          "rotation": 0,
          "target": "47-studio-4a-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-studio-4a-left",
      "name": "studio 4A left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0305385756361574,
          "pitch": 0.09998781495337639,
          "rotation": 0,
          "target": "46-studio-4a-outside"
        },
        {
          "yaw": 1.4545193895348723,
          "pitch": 0.2070098224303898,
          "rotation": 0,
          "target": "48-studio-4b-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-studio-4b-right",
      "name": "studio 4b right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6389944890191313,
          "pitch": 0.23927923355937253,
          "rotation": 1.5707963267948966,
          "target": "47-studio-4a-left"
        },
        {
          "yaw": -2.3510502160299094,
          "pitch": 0.10894941235581612,
          "rotation": 4.71238898038469,
          "target": "46-studio-4a-outside"
        },
        {
          "yaw": 3.0298416681123683,
          "pitch": 0.11988856269806014,
          "rotation": 0,
          "target": "46-studio-4a-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-studio-4b-and-hpc",
      "name": "studio 4b and hpc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2916189784703782,
          "pitch": 0.12845880099084184,
          "rotation": 0,
          "target": "50-hpc"
        },
        {
          "yaw": -1.7158737494025758,
          "pitch": 0.17349831499016943,
          "rotation": 0,
          "target": "48-studio-4b-right"
        },
        {
          "yaw": 3.065829935711486,
          "pitch": 0.1689770995275559,
          "rotation": 1.5707963267948966,
          "target": "47-studio-4a-left"
        },
        {
          "yaw": 2.8827802920807954,
          "pitch": 0.04114560864321426,
          "rotation": 0,
          "target": "45-hallway-to-studio-4-and-hpc-2"
        },
        {
          "yaw": -0.263720684564003,
          "pitch": 0.22316890771120157,
          "rotation": 5.497787143782138,
          "target": "52-hallway-to-studio-4-and-hpc-to-teamsroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-hpc",
      "name": "hpc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.101883725297764,
          "pitch": 0.23006070776995458,
          "rotation": 5.497787143782138,
          "target": "51-hpc-center"
        },
        {
          "yaw": -2.847604270301801,
          "pitch": 0.20943761865482635,
          "rotation": 0,
          "target": "49-studio-4b-and-hpc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-hpc-center",
      "name": "hpc center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.948753896833141,
          "pitch": 0.31258387153669,
          "rotation": 0,
          "target": "50-hpc"
        },
        {
          "yaw": -2.223984236456273,
          "pitch": 0.10590715279768581,
          "rotation": 0,
          "target": "49-studio-4b-and-hpc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-hallway-to-studio-4-and-hpc-to-teamsroom",
      "name": "hallway to studio 4 and hpc to teamsroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.670410825034942,
          "pitch": 0.24321775846793514,
          "rotation": 0,
          "target": "49-studio-4b-and-hpc"
        },
        {
          "yaw": -0.17317847470904368,
          "pitch": -0.009100289226735114,
          "rotation": 1.5707963267948966,
          "target": "53-teamroom-hallway"
        },
        {
          "yaw": -1.6742332988053406,
          "pitch": 0.007076452094821661,
          "rotation": 0,
          "target": "45-hallway-to-studio-4-and-hpc-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-teamroom-hallway",
      "name": "teamroom hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6886546105496159,
          "pitch": 0.07984035420162527,
          "rotation": 0,
          "target": "52-hallway-to-studio-4-and-hpc-to-teamsroom"
        },
        {
          "yaw": 0.11992479913136478,
          "pitch": 0.22135849869822444,
          "rotation": 0,
          "target": "54-teamroom-hallway-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-teamroom-hallway-2",
      "name": "teamroom hallway 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1145188917131943,
          "pitch": 0.19676681886245362,
          "rotation": 0,
          "target": "53-teamroom-hallway"
        },
        {
          "yaw": 0.008584677429938736,
          "pitch": 0.42443100755523133,
          "rotation": 0,
          "target": "55-teamroom-hallway-3-team-room-4"
        },
        {
          "yaw": -1.6450848447410884,
          "pitch": 0.5108230546595642,
          "rotation": 0,
          "target": "57-teamroom-hallway-betweem-stair-2-floor-b-and-elevator"
        },
        {
          "yaw": -0.02268639095065339,
          "pitch": 0.006336702418366258,
          "rotation": 0,
          "target": "62-loading-dock-doors-maglock"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-teamroom-hallway-3-team-room-4",
      "name": "teamroom hallway 3 team room 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.134093671249895,
          "pitch": 0.03407566155456543,
          "rotation": 4.71238898038469,
          "target": "54-teamroom-hallway-2"
        },
        {
          "yaw": 0.0028713486211859873,
          "pitch": 0.08260215778727442,
          "rotation": 0,
          "target": "56-teamroom-hallway-4-near-maglock"
        },
        {
          "yaw": -2.962137229205176,
          "pitch": 0.33171264659420174,
          "rotation": 1.5707963267948966,
          "target": "57-teamroom-hallway-betweem-stair-2-floor-b-and-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-teamroom-hallway-4-near-maglock",
      "name": "teamroom hallway 4 near maglock",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0032573694355165,
          "pitch": 0.19245063603076495,
          "rotation": 0,
          "target": "55-teamroom-hallway-3-team-room-4"
        },
        {
          "yaw": -3.0691753655062346,
          "pitch": -0.04612514090659303,
          "rotation": 3.141592653589793,
          "target": "54-teamroom-hallway-2"
        },
        {
          "yaw": -3.0392951984303203,
          "pitch": 0.07101148274604441,
          "rotation": 1.5707963267948966,
          "target": "57-teamroom-hallway-betweem-stair-2-floor-b-and-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-teamroom-hallway-betweem-stair-2-floor-b-and-elevator",
      "name": "teamroom hallway betweem stair 2 floor b and elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.403475225195935,
          "pitch": 0.3666881715740402,
          "rotation": 0,
          "target": "55-teamroom-hallway-3-team-room-4"
        },
        {
          "yaw": -0.7204736495047257,
          "pitch": 0.22935395182727447,
          "rotation": 4.71238898038469,
          "target": "58-elevator-basement"
        },
        {
          "yaw": 3.0879149103829633,
          "pitch": -0.13768138471338887,
          "rotation": 0.7853981633974483,
          "target": "67-stair-2-floor-2-near-student-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-elevator-basement",
      "name": "elevator basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3998110086566502,
          "pitch": 0.09190756609056905,
          "rotation": 0,
          "target": "59-inside-second-elevator-floor-1"
        },
        {
          "yaw": -1.5751869349059966,
          "pitch": 0.054630002801744126,
          "rotation": 0,
          "target": "54-teamroom-hallway-2"
        },
        {
          "yaw": -1.5691961909891958,
          "pitch": 0.5006604234108849,
          "rotation": 0,
          "target": "57-teamroom-hallway-betweem-stair-2-floor-b-and-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-inside-second-elevator-floor-1",
      "name": "inside second elevator floor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0709003639488657,
          "pitch": 0.2097645657478946,
          "rotation": 3.141592653589793,
          "target": "60-near-elevator-loading-dock-and-family-changeroom"
        },
        {
          "yaw": 2.760514882741118,
          "pitch": 0.07158012980670136,
          "rotation": 0,
          "target": "59-inside-second-elevator-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-near-elevator-loading-dock-and-family-changeroom",
      "name": "near elevator loading dock and family changeroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.8651873766675795,
        "pitch": 0.2792711343478018,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.02849738131977908,
          "pitch": 0.49383679258469826,
          "rotation": 3.141592653589793,
          "target": "59-inside-second-elevator-floor-1"
        },
        {
          "yaw": 2.9311557844606906,
          "pitch": 0.5686326618831998,
          "rotation": 6.283185307179586,
          "target": "61-near-loading-dock-"
        },
        {
          "yaw": 2.3336027582191328,
          "pitch": 0.17625078569539987,
          "rotation": 7.0685834705770345,
          "target": "62-loading-dock-doors-maglock"
        },
        {
          "yaw": 3.0656128075881774,
          "pitch": 0.2536227347384994,
          "rotation": 0,
          "target": "63-family-changeroom-and-visint-team-changeroom-2"
        },
        {
          "yaw": -1.6010944706670536,
          "pitch": 0.13964875195803472,
          "rotation": 0,
          "target": "66-near-aquatics-office-and-mens-pool-access"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-near-loading-dock-",
      "name": "near loading dock ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.581630214125255,
        "pitch": 0.19147591952656207,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.13660629834792815,
          "pitch": 0.4777924457302074,
          "rotation": 0,
          "target": "60-near-elevator-loading-dock-and-family-changeroom"
        },
        {
          "yaw": 1.6132372544442806,
          "pitch": 0.3995561622814279,
          "rotation": 0,
          "target": "62-loading-dock-doors-maglock"
        },
        {
          "yaw": -2.9248733028097362,
          "pitch": 0.3600206727440529,
          "rotation": 0,
          "target": "63-family-changeroom-and-visint-team-changeroom-2"
        },
        {
          "yaw": -0.046598398367828864,
          "pitch": 0.07306917339129448,
          "rotation": 0,
          "target": "59-inside-second-elevator-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-loading-dock-doors-maglock",
      "name": "loading dock doors maglock",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.800128237937324,
        "pitch": 0.08687161906560092,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.8929255526433977,
          "pitch": 0.16127083351108595,
          "rotation": 0,
          "target": "61-near-loading-dock-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-family-changeroom-and-visint-team-changeroom-2",
      "name": "family changeroom and visint team changeroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.9258037913338235,
        "pitch": 0.06564183653452815,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.9325470314695723,
          "pitch": 0.21550452883045423,
          "rotation": 0,
          "target": "64-family-changeroom-and-visint-team-changeroom-3"
        },
        {
          "yaw": 2.9080880721824744,
          "pitch": -0.00750530029758778,
          "rotation": 1.5707963267948966,
          "target": "65-end-of-family-changeroom-and-visiting-team-changeroom-near-the-left-side-of-swimming-pool"
        },
        {
          "yaw": -0.2234813778990965,
          "pitch": 0.4465387530276921,
          "rotation": 0,
          "target": "61-near-loading-dock-"
        },
        {
          "yaw": -0.2723509915164488,
          "pitch": 0.046480432136117855,
          "rotation": 0,
          "target": "59-inside-second-elevator-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-family-changeroom-and-visint-team-changeroom-3",
      "name": "family changeroom and visint team changeroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.3779635912653028,
        "pitch": 0.051606351075552226,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.850471747352442,
          "pitch": 0.3793560090016541,
          "rotation": 0,
          "target": "63-family-changeroom-and-visint-team-changeroom-2"
        },
        {
          "yaw": -1.8647684757436451,
          "pitch": 0.1812384532022815,
          "rotation": 0,
          "target": "61-near-loading-dock-"
        },
        {
          "yaw": 1.2237526939284784,
          "pitch": -0.020449769326402745,
          "rotation": 1.5707963267948966,
          "target": "65-end-of-family-changeroom-and-visiting-team-changeroom-near-the-left-side-of-swimming-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-end-of-family-changeroom-and-visiting-team-changeroom-near-the-left-side-of-swimming-pool",
      "name": "end of family changeroom and visiting team changeroom near the left side of swimming pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.071317971705163,
          "pitch": 0.09833247350599272,
          "rotation": 0,
          "target": "64-family-changeroom-and-visint-team-changeroom-3"
        },
        {
          "yaw": -3.0324397725121806,
          "pitch": 0.1627050683587612,
          "rotation": 0,
          "target": "108-pool-left-side-near-aquatics-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0589177579057356,
          "pitch": -0.02792882814204134,
          "title": "Swimming pool",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "66-near-aquatics-office-and-mens-pool-access",
      "name": "near aquatics office and mens pool access",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.575608957506331,
        "pitch": -0.036386721432428715,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.4529868204465064,
          "pitch": 0.2224044460302217,
          "rotation": 0,
          "target": "109-outside-aquatics-office-and-gender-neutral-changeroom-pool"
        },
        {
          "yaw": 0.5089263849232317,
          "pitch": -0.07620184544638242,
          "rotation": 0,
          "target": "108-pool-left-side-near-aquatics-office"
        },
        {
          "yaw": 0.2830989045855681,
          "pitch": -0.022560218046240976,
          "rotation": 4.71238898038469,
          "target": "60-near-elevator-loading-dock-and-family-changeroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.8926142030317274,
          "pitch": 0.15660812627321263,
          "title": "Men changeroom",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "67-stair-2-floor-2-near-student-lounge",
      "name": "stair 2 floor 2 near student lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6015272230582713,
          "pitch": -0.025880282555359457,
          "rotation": 0,
          "target": "68-main-maglock-and-near-second-elevator-and-near-student-lounge"
        },
        {
          "yaw": -3.0543447476717738,
          "pitch": 0.12424922884858347,
          "rotation": 0,
          "target": "69-hallway-to-student-lounge"
        },
        {
          "yaw": -0.25093545608324064,
          "pitch": 0.5140378006212067,
          "rotation": 3.9269908169872414,
          "target": "57-teamroom-hallway-betweem-stair-2-floor-b-and-elevator"
        },
        {
          "yaw": -0.6337945581617355,
          "pitch": -0.11111269840449722,
          "rotation": 0,
          "target": "101-stair-2-floor-3-near-elevator-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-main-maglock-and-near-second-elevator-and-near-student-lounge",
      "name": "main maglock and near second elevator and near student lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5054906285467045,
          "pitch": 0.020889402779726396,
          "rotation": 0,
          "target": "69-hallway-to-student-lounge"
        },
        {
          "yaw": -2.5588003482967068,
          "pitch": 0.053343424624962665,
          "rotation": 5.497787143782138,
          "target": "67-stair-2-floor-2-near-student-lounge"
        },
        {
          "yaw": -1.7178011761520295,
          "pitch": 0.10941619599476482,
          "rotation": 0,
          "target": "101-stair-2-floor-3-near-elevator-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.769860462479528,
          "pitch": 0.1454009864381387,
          "title": "Main Mag Lock (New Tait)",
          "text": "Main Mag Lock. once turned off, all Mag Lock will unlock. This will be required to confirmed that all Mag Lock are lacthed on after reactivation."
        }
      ]
    },
    {
      "id": "69-hallway-to-student-lounge",
      "name": "hallway to student lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1274883585614166,
          "pitch": -0.0013103460552699175,
          "rotation": 0,
          "target": "70-student-lounge"
        },
        {
          "yaw": 0.15508131396361335,
          "pitch": 0.07680960335663833,
          "rotation": 0,
          "target": "67-stair-2-floor-2-near-student-lounge"
        },
        {
          "yaw": 1.358124310464195,
          "pitch": 0.023735844342084533,
          "rotation": 0,
          "target": "68-main-maglock-and-near-second-elevator-and-near-student-lounge"
        },
        {
          "yaw": -1.5089104100355843,
          "pitch": 0.14669157005560507,
          "rotation": 0,
          "target": "71-main-gym-outside-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "70-student-lounge",
      "name": "student lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1189092989340903,
          "pitch": 0.10896542557237154,
          "rotation": 0,
          "target": "69-hallway-to-student-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "71-main-gym-outside-door",
      "name": "main gym outside door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.942171878021435,
        "pitch": -0.020982917434475112,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -2.920149792824944,
          "pitch": 0.1459847975895716,
          "rotation": 0,
          "target": "69-hallway-to-student-lounge"
        },
        {
          "yaw": 1.571811089405215,
          "pitch": 0.17378153450257372,
          "rotation": 0,
          "target": "72-main-gym-inside-hallway"
        },
        {
          "yaw": 0.21897391551096135,
          "pitch": 0.09269318848126318,
          "rotation": 0,
          "target": "78-stair-1-floor-2-men-washroom-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "72-main-gym-inside-hallway",
      "name": "main gym inside hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.5385510471388351,
        "pitch": 0.09060282340905346,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.47947836476364003,
          "pitch": 0.20723413758241094,
          "rotation": 0,
          "target": "73-main-gym-entrance-center-bottom"
        },
        {
          "yaw": 2.8342497837343714,
          "pitch": 0.12361408067074642,
          "rotation": 0,
          "target": "71-main-gym-outside-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "73-main-gym-entrance-center-bottom",
      "name": "main gym entrance center bottom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03160966270122145,
          "pitch": 0.16078039199767247,
          "rotation": 0,
          "target": "72-main-gym-inside-hallway"
        },
        {
          "yaw": 1.564594044505573,
          "pitch": 0.10306315596385573,
          "rotation": 0,
          "target": "74-main-gym-left-bottom"
        },
        {
          "yaw": 2.2634983937144044,
          "pitch": 0.08165444603838878,
          "rotation": 0.7853981633974483,
          "target": "75-main-gym-center-left"
        },
        {
          "yaw": 3.0887969325775657,
          "pitch": 0.16668103465394957,
          "rotation": 0,
          "target": "76-main-gym-center-center"
        },
        {
          "yaw": -2.6798027508986486,
          "pitch": 0.09832596655079229,
          "rotation": 0,
          "target": "77-main-gym-top-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "74-main-gym-left-bottom",
      "name": "main gym left bottom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.561760224333682,
          "pitch": 0.1656755808450434,
          "rotation": 0,
          "target": "73-main-gym-entrance-center-bottom"
        },
        {
          "yaw": 2.973143021755642,
          "pitch": 0.16460877538273166,
          "rotation": 0,
          "target": "75-main-gym-center-left"
        },
        {
          "yaw": -2.5657677670970465,
          "pitch": 0.14702035286247828,
          "rotation": 0,
          "target": "76-main-gym-center-center"
        },
        {
          "yaw": -2.4138018231910117,
          "pitch": 0.0752654389586116,
          "rotation": 0,
          "target": "77-main-gym-top-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "75-main-gym-center-left",
      "name": "main gym center left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12632121035825605,
          "pitch": 0.1853594459696737,
          "rotation": 0,
          "target": "74-main-gym-left-bottom"
        },
        {
          "yaw": -1.6980856950909846,
          "pitch": 0.2266561352198515,
          "rotation": 0,
          "target": "76-main-gym-center-center"
        },
        {
          "yaw": -1.9651663961792423,
          "pitch": 0.11561204272099168,
          "rotation": 0,
          "target": "77-main-gym-top-right"
        },
        {
          "yaw": -0.7602502157216744,
          "pitch": 0.14437092574409505,
          "rotation": 7.0685834705770345,
          "target": "73-main-gym-entrance-center-bottom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "76-main-gym-center-center",
      "name": "main gym center center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11192717240987804,
          "pitch": 0.15257191448480256,
          "rotation": 0,
          "target": "73-main-gym-entrance-center-bottom"
        },
        {
          "yaw": -0.11039491205424312,
          "pitch": -0.009798215717221836,
          "rotation": 0,
          "target": "71-main-gym-outside-door"
        },
        {
          "yaw": 1.610678264838846,
          "pitch": 0.12598599526649323,
          "rotation": 0,
          "target": "75-main-gym-center-left"
        },
        {
          "yaw": 0.8011395159937962,
          "pitch": 0.03885444690406814,
          "rotation": 0,
          "target": "74-main-gym-left-bottom"
        },
        {
          "yaw": -2.023412210044457,
          "pitch": 0.12418427093002293,
          "rotation": 0,
          "target": "77-main-gym-top-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "77-main-gym-top-right",
      "name": "main gym top right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7649337490434789,
          "pitch": 0.15268346856748138,
          "rotation": 0,
          "target": "76-main-gym-center-center"
        },
        {
          "yaw": -1.6322703226651285,
          "pitch": 0.05841854407875857,
          "rotation": 0,
          "target": "75-main-gym-center-left"
        },
        {
          "yaw": -1.973508086849371,
          "pitch": 0.03306123557429075,
          "rotation": 0,
          "target": "74-main-gym-left-bottom"
        },
        {
          "yaw": -2.483314208197161,
          "pitch": 0.09045204661915562,
          "rotation": 0,
          "target": "73-main-gym-entrance-center-bottom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "78-stair-1-floor-2-men-washroom-second-floor",
      "name": "stair 1 floor 2 men washroom second floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07490249870957122,
          "pitch": 0.05012718111342096,
          "rotation": 0,
          "target": "71-main-gym-outside-door"
        },
        {
          "yaw": -1.271656560916103,
          "pitch": 0.16109673965310378,
          "rotation": 0,
          "target": "79-stairs-to-upper-gym"
        },
        {
          "yaw": -2.5412351655341503,
          "pitch": 0.2892239480898695,
          "rotation": 0,
          "target": "81-hallway-to-vending-machine-near-the-men-washroom"
        },
        {
          "yaw": 2.89443530396022,
          "pitch": 0.08870420962091785,
          "rotation": 4.71238898038469,
          "target": "15-lobby-staircase3"
        },
        {
          "yaw": -2.6681752135190315,
          "pitch": 0.13138239005573382,
          "rotation": 7.853981633974483,
          "target": "82-hallway-to-fitness-centre1"
        },
        {
          "yaw": -1.6421291460374405,
          "pitch": 0.12465257674790209,
          "rotation": 3.141592653589793,
          "target": "18-stair-1-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "79-stairs-to-upper-gym",
      "name": "stairs to upper gym",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0673703119468367,
          "pitch": -0.2587017989300726,
          "rotation": 0,
          "target": "97-upper-gym-and-room-316-outside"
        },
        {
          "yaw": 2.757703726101905,
          "pitch": 0.4771111895891593,
          "rotation": 3.141592653589793,
          "target": "78-stair-1-floor-2-men-washroom-second-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "80-stairs-to-upper-gym-near-men-washroom",
      "name": "stairs to upper gym near men washroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.26366900037598384,
          "pitch": -0.2713436373519986,
          "rotation": 0,
          "target": "79-stairs-to-upper-gym"
        },
        {
          "yaw": -1.6508221704795183,
          "pitch": 0.19784017801299214,
          "rotation": 0,
          "target": "81-hallway-to-vending-machine-near-the-men-washroom"
        },
        {
          "yaw": 2.8468231281338,
          "pitch": 0.18329203234862135,
          "rotation": 4.71238898038469,
          "target": "78-stair-1-floor-2-men-washroom-second-floor"
        },
        {
          "yaw": -0.11531965794203813,
          "pitch": 0.6259599203258901,
          "rotation": 0,
          "target": "18-stair-1-floor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "81-hallway-to-vending-machine-near-the-men-washroom",
      "name": "hallway to vending machine near the men washroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1075622191110748,
          "pitch": 0.2750667328793277,
          "rotation": 5.497787143782138,
          "target": "78-stair-1-floor-2-men-washroom-second-floor"
        },
        {
          "yaw": 1.1792253203265695,
          "pitch": 0.1529259399399212,
          "rotation": 0,
          "target": "80-stairs-to-upper-gym-near-men-washroom"
        },
        {
          "yaw": -2.797076780533585,
          "pitch": 0.1322190681577773,
          "rotation": 3.9269908169872414,
          "target": "15-lobby-staircase3"
        },
        {
          "yaw": -1.2260474490646516,
          "pitch": 0.37454689955656484,
          "rotation": 2.356194490192345,
          "target": "82-hallway-to-fitness-centre1"
        },
        {
          "yaw": -1.7983180957352136,
          "pitch": 0.15577511179499837,
          "rotation": 0,
          "target": "12-first-elevator-second-floor"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.031604050528837746,
          "pitch": 0.08749668841931779,
          "title": "Main Gym",
          "text": "<br>"
        },
        {
          "yaw": -1.7945362520428265,
          "pitch": -0.10697563403453358,
          "title": "Accesability Elevator",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "82-hallway-to-fitness-centre1",
      "name": "hallway to fitness centre1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22565715271976394,
          "pitch": 0.1330934444842775,
          "rotation": 0,
          "target": "83-fitness-centre-hallway-2"
        },
        {
          "yaw": -2.8393059692872225,
          "pitch": -0.01664000956768774,
          "rotation": 3.141592653589793,
          "target": "15-lobby-staircase3"
        },
        {
          "yaw": -2.9315731399948977,
          "pitch": 0.1400226001981455,
          "rotation": 4.71238898038469,
          "target": "81-hallway-to-vending-machine-near-the-men-washroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "83-fitness-centre-hallway-2",
      "name": "fitness centre hallway 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.656236003830667,
          "pitch": 0.1338688294137409,
          "rotation": 0,
          "target": "82-hallway-to-fitness-centre1"
        },
        {
          "yaw": 0.7752859668125609,
          "pitch": 0.011747952737662715,
          "rotation": 0,
          "target": "84-near-main-maglock-and-near-fitness-centre"
        },
        {
          "yaw": -1.047582273864844,
          "pitch": 0.14416437535749083,
          "rotation": 4.71238898038469,
          "target": "85-hallway-to-injury-clinic-and-fitness-centre"
        },
        {
          "yaw": -1.0283893717956207,
          "pitch": 0.016397710100847007,
          "rotation": 0,
          "target": "91-fieldhouse-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "84-near-main-maglock-and-near-fitness-centre",
      "name": "near main maglock and near fitness centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.121997322250083,
          "pitch": 0.6120565131722664,
          "rotation": 0,
          "target": "83-fitness-centre-hallway-2"
        },
        {
          "yaw": -0.13264543407294127,
          "pitch": 0.12111219317853283,
          "rotation": 0,
          "target": "44-stair-3-floor-2-near-fitness-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "85-hallway-to-injury-clinic-and-fitness-centre",
      "name": "hallway to injury clinic and fitness centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8805672002601987,
          "pitch": -0.03319344600666696,
          "rotation": 0,
          "target": "90-fitness-centre"
        },
        {
          "yaw": 0.10219230833510196,
          "pitch": 0.15041101666908752,
          "rotation": 0,
          "target": "91-fieldhouse-outside"
        },
        {
          "yaw": 1.4137852863160951,
          "pitch": 0.42960676110274143,
          "rotation": 0,
          "target": "86-hallway-to-injury-clinic"
        },
        {
          "yaw": -2.985453254880486,
          "pitch": 0.1835898903986859,
          "rotation": 0,
          "target": "83-fitness-centre-hallway-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "86-hallway-to-injury-clinic",
      "name": "hallway to injury clinic",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18269098510978665,
          "pitch": 0.2760317284961449,
          "rotation": 0,
          "target": "87-hallway-to-injury-clinic-2"
        },
        {
          "yaw": -2.9520809616720634,
          "pitch": 0.33015841304185756,
          "rotation": 0,
          "target": "85-hallway-to-injury-clinic-and-fitness-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "87-hallway-to-injury-clinic-2",
      "name": "hallway to injury clinic 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1185949819125707,
          "pitch": 0.503868302836052,
          "rotation": 0,
          "target": "86-hallway-to-injury-clinic"
        },
        {
          "yaw": -3.1009320255555153,
          "pitch": 0.2212877102211177,
          "rotation": 0,
          "target": "85-hallway-to-injury-clinic-and-fitness-centre"
        },
        {
          "yaw": 0.032015048587153316,
          "pitch": 0.2594181368849675,
          "rotation": 0,
          "target": "89-injury-clinic-office-and-maglock"
        },
        {
          "yaw": 1.5713881227460025,
          "pitch": 0.2958599348692079,
          "rotation": 0,
          "target": "88-hallway-to-event-office-and-kelly-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "88-hallway-to-event-office-and-kelly-office",
      "name": "hallway to event office and kelly office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9857344301189084,
          "pitch": 0.3803338694146241,
          "rotation": 0,
          "target": "87-hallway-to-injury-clinic-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "89-injury-clinic-office-and-maglock",
      "name": "injury clinic office and maglock",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6290100373399827,
          "pitch": 0.4320733248588873,
          "rotation": 0,
          "target": "87-hallway-to-injury-clinic-2"
        },
        {
          "yaw": 0.396319224044273,
          "pitch": 0.1010362092465158,
          "rotation": 4.71238898038469,
          "target": "88-hallway-to-event-office-and-kelly-office"
        },
        {
          "yaw": 0.6275353753209174,
          "pitch": 0.10411677625920213,
          "rotation": 0,
          "target": "85-hallway-to-injury-clinic-and-fitness-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "90-fitness-centre",
      "name": "fitness centre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2617993877991598,
          "pitch": 0.3684323380463752,
          "rotation": 0,
          "target": "85-hallway-to-injury-clinic-and-fitness-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "91-fieldhouse-outside",
      "name": "fieldhouse outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0600475514344847,
          "pitch": 0.10818959923376603,
          "rotation": 0,
          "target": "92-fieldhouse-court-1"
        },
        {
          "yaw": -3.100551897970732,
          "pitch": 0.16193945567178858,
          "rotation": 0,
          "target": "85-hallway-to-injury-clinic-and-fitness-centre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "92-fieldhouse-court-1",
      "name": "fieldhouse court 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.200126585376875,
          "pitch": 0.04061606495936765,
          "rotation": 0,
          "target": "91-fieldhouse-outside"
        },
        {
          "yaw": 0.8831583931180162,
          "pitch": -0.016875136694617154,
          "rotation": 0,
          "target": "93-fieldhouse-court-1-and-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4073218291005496,
          "pitch": -0.005845053890263685,
          "title": "Lights Control Panel",
          "text": "<br>"
        },
        {
          "yaw": -2.7785124161897965,
          "pitch": 0.0297418418334221,
          "title": "Net Control",
          "text": "Key required"
        },
        {
          "yaw": 3.007562220945653,
          "pitch": 0.02554632697994208,
          "title": "Curtain Control",
          "text": "Key required"
        },
        {
          "yaw": -2.425801632083342,
          "pitch": 0.06662762899144603,
          "title": "Badminton/volleyball Pole",
          "text": "Place them here"
        },
        {
          "yaw": 0.4839870527579606,
          "pitch": -0.019396645853575478,
          "title": "Net Controller",
          "text": "Key required"
        },
        {
          "yaw": 0.16931917618165038,
          "pitch": -0.13544886929629918,
          "title": "Basketball Net",
          "text": "Requires the drill"
        }
      ]
    },
    {
      "id": "93-fieldhouse-court-1-and-2",
      "name": "fieldhouse court 1 and 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.026278814901022,
          "pitch": 0.09663192655052733,
          "rotation": 0,
          "target": "92-fieldhouse-court-1"
        },
        {
          "yaw": 2.245607951853689,
          "pitch": 0.023296497605615585,
          "rotation": 0,
          "target": "91-fieldhouse-outside"
        },
        {
          "yaw": 0.8518730740714577,
          "pitch": 0.11940488736345145,
          "rotation": 0,
          "target": "94-fieldhouse-court-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "94-fieldhouse-court-2",
      "name": "fieldhouse court 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.456351266999892,
          "pitch": 0.031817994853405196,
          "rotation": 0,
          "target": "93-fieldhouse-court-1-and-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "95-upper-gym-near-elevator",
      "name": "upper gym near elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.23009455269348678,
          "pitch": 0.09811322732078587,
          "rotation": 4.71238898038469,
          "target": "99-upper-gym-inside"
        },
        {
          "yaw": -0.031692549763702615,
          "pitch": -0.03948271152210481,
          "rotation": 1.5707963267948966,
          "target": "79-stairs-to-upper-gym"
        },
        {
          "yaw": 2.868946452867224,
          "pitch": 0.05866795912700695,
          "rotation": 5.497787143782138,
          "target": "101-stair-2-floor-3-near-elevator-2"
        },
        {
          "yaw": 1.0071311737313504,
          "pitch": 0.20559187878771468,
          "rotation": 0,
          "target": "96-staff-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "96-staff-lounge",
      "name": "staff lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0451379147562037,
          "pitch": 0.5618327013046809,
          "rotation": 0,
          "target": "95-upper-gym-near-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "97-upper-gym-and-room-316-outside",
      "name": "upper gym and room 316 outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7142575034498293,
          "pitch": 0.059475409968513304,
          "rotation": 1.5707963267948966,
          "target": "79-stairs-to-upper-gym"
        },
        {
          "yaw": 2.6051073575599153,
          "pitch": 0.1536168511256264,
          "rotation": 0,
          "target": "99-upper-gym-inside"
        },
        {
          "yaw": 0.05134105866687477,
          "pitch": 0.14346002098267974,
          "rotation": 0,
          "target": "98-room-316"
        },
        {
          "yaw": 0.6104641715473846,
          "pitch": 0.13870606973139488,
          "rotation": 0,
          "target": "95-upper-gym-near-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "98-room-316",
      "name": "room 316",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4240041901924023,
          "pitch": 0.2858946157606379,
          "rotation": 0,
          "target": "97-upper-gym-and-room-316-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "99-upper-gym-inside",
      "name": "upper gym inside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.022202134266832374,
          "pitch": 0.0022200266357526033,
          "rotation": 0,
          "target": "97-upper-gym-and-room-316-outside"
        },
        {
          "yaw": 0.8714704644374756,
          "pitch": 0.012340681301392209,
          "rotation": 4.71238898038469,
          "target": "100-upper-gym-net-password-keypad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "100-upper-gym-net-password-keypad",
      "name": "upper gym net password keypad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6852220010169834,
          "pitch": 0.5023390354528665,
          "rotation": 6.283185307179586,
          "target": "99-upper-gym-inside"
        },
        {
          "yaw": -1.0329133130310169,
          "pitch": 0.10276995441927816,
          "rotation": 1.5707963267948966,
          "target": "97-upper-gym-and-room-316-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.08303743131710206,
          "pitch": -0.02961784213090013,
          "title": "Net Control Panel",
          "text": "Password: 4,3,2,1 -&gt; backboard -&gt; press 0-&gt; the net # -&gt; lower or lift net"
        }
      ]
    },
    {
      "id": "101-stair-2-floor-3-near-elevator-2",
      "name": "stair 2 floor 3 near elevator 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0306553751296423,
          "pitch": 0.1851501188058613,
          "rotation": 1.5707963267948966,
          "target": "95-upper-gym-near-elevator"
        },
        {
          "yaw": -0.6272593652144778,
          "pitch": -0.2706075925300535,
          "rotation": 0.7853981633974483,
          "target": "103-stair-2-floor-4-elevator-2-near-studio-6"
        },
        {
          "yaw": -0.2522492968412138,
          "pitch": 0.19796106687580917,
          "rotation": 10.210176124166829,
          "target": "67-stair-2-floor-2-near-student-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "102-studio-6",
      "name": "studio 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9236593209096178,
          "pitch": 0.2230485715160455,
          "rotation": 1.5707963267948966,
          "target": "103-stair-2-floor-4-elevator-2-near-studio-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "103-stair-2-floor-4-elevator-2-near-studio-6",
      "name": "stair 2 floor 4 elevator 2 near studio 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.367162811320256,
          "pitch": -0.07557273357756245,
          "rotation": 4.71238898038469,
          "target": "102-studio-6"
        },
        {
          "yaw": -0.44949848628306555,
          "pitch": -0.007977466476546624,
          "rotation": 3.141592653589793,
          "target": "101-stair-2-floor-3-near-elevator-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "104-outside-near-key-and-gator-location",
      "name": "outside near key and gator location",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9747473282264458,
          "pitch": 0.013287835609240517,
          "rotation": 4.71238898038469,
          "target": "7-lobby"
        },
        {
          "yaw": -2.6825650078485612,
          "pitch": -0.06138270801597301,
          "rotation": 2.356194490192345,
          "target": "105-outside-and-opening-tait-keys"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5687674264467084,
          "pitch": 0.08469775471025898,
          "title": "Keys to Open Tait",
          "text": "Also a parking spot for Gator"
        }
      ]
    },
    {
      "id": "105-outside-and-opening-tait-keys",
      "name": "outside and opening tait keys",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.7858547763938546,
        "pitch": 0.2650457125741781,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.350275606332053,
          "pitch": 0.12379038714699142,
          "rotation": 5.497787143782138,
          "target": "104-outside-near-key-and-gator-location"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0320872025651884,
          "pitch": 0.5568035949744345,
          "title": "Tait Opening keys",
          "text": "Make sure to put it back after opening"
        }
      ]
    },
    {
      "id": "106-pool-door-near-cs-inside-pool",
      "name": "pool door near cs inside pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9728957718067015,
          "pitch": 0.2195658703891752,
          "rotation": 1.5707963267948966,
          "target": "107-pool-center"
        },
        {
          "yaw": -1.1509440218795426,
          "pitch": 0.11812764893329586,
          "rotation": 0.7853981633974483,
          "target": "108-pool-left-side-near-aquatics-office"
        },
        {
          "yaw": -1.1030699231203194,
          "pitch": -0.06311309971553669,
          "rotation": 10.210176124166829,
          "target": "109-outside-aquatics-office-and-gender-neutral-changeroom-pool"
        },
        {
          "yaw": -2.983638640153673,
          "pitch": 0.2431741114021051,
          "rotation": 0,
          "target": "17-pool-door-near-cs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "107-pool-center",
      "name": "pool center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1363099485154997,
          "pitch": 0.1971707816604038,
          "rotation": 0,
          "target": "108-pool-left-side-near-aquatics-office"
        },
        {
          "yaw": 0.9383500073843756,
          "pitch": 0.01319752126722129,
          "rotation": 5.497787143782138,
          "target": "109-outside-aquatics-office-and-gender-neutral-changeroom-pool"
        },
        {
          "yaw": -1.9289182720722664,
          "pitch": 0.1785086036952741,
          "rotation": 0.7853981633974483,
          "target": "106-pool-door-near-cs-inside-pool"
        },
        {
          "yaw": -1.860736434886853,
          "pitch": -0.029589959210074568,
          "rotation": 2.356194490192345,
          "target": "17-pool-door-near-cs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "108-pool-left-side-near-aquatics-office",
      "name": "pool left side near aquatics office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5933560206213961,
          "pitch": 0.06032912332026896,
          "rotation": 5.497787143782138,
          "target": "109-outside-aquatics-office-and-gender-neutral-changeroom-pool"
        },
        {
          "yaw": -2.065497236856004,
          "pitch": 0.2973668878747535,
          "rotation": 4.71238898038469,
          "target": "107-pool-center"
        },
        {
          "yaw": -2.0607919299394055,
          "pitch": 0.1296962428392341,
          "rotation": 0.7853981633974483,
          "target": "106-pool-door-near-cs-inside-pool"
        },
        {
          "yaw": -2.0180200067702962,
          "pitch": -0.02999545166990103,
          "rotation": 8.63937979737193,
          "target": "17-pool-door-near-cs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "109-outside-aquatics-office-and-gender-neutral-changeroom-pool",
      "name": "outside aquatics office and gender neutral changeroom pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.919027091685841,
          "pitch": 0.22218677261523112,
          "rotation": 0,
          "target": "66-near-aquatics-office-and-mens-pool-access"
        },
        {
          "yaw": 2.223696070621286,
          "pitch": 0.09937610393162188,
          "rotation": 0,
          "target": "108-pool-left-side-near-aquatics-office"
        },
        {
          "yaw": -0.8355068559906016,
          "pitch": 0.4264222656140202,
          "rotation": 1.5707963267948966,
          "target": "60-near-elevator-loading-dock-and-family-changeroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
