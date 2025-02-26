var sportFtblSPSubAnim =
{
    "v": "5.7.13",
    "fr": 25,
    "ip": 0,
    "op": 91,
    "w": 1920,
    "h": 1080,
    "nm": "footballSub",
    "ddd": 0,
    "assets": [],
    "fonts": {
      "list": [
        {
          "origin": 0,
          "fPath": "",
          "fClass": "",
          "fFamily": "Barlow Condensed",
          "fWeight": "",
          "fStyle": "SemiBold",
          "fName": "",
          "ascent": 69.9996948242188
        },
        {
          "origin": 0,
          "fPath": "",
          "fClass": "",
          "fFamily": "Scada",
          "fWeight": "",
          "fStyle": "Bold",
          "fName": "Scada-Bold",
          "ascent": 69.9996948242188
          }
        
      ]
    },
    "layers": [
      {
        "ddd": 0,
        "ind": 1,
        "ty": 4,
        "nm": "outArrow",
        "sr": 1,
        "ks": {
          "o": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": [
                    0.667
                  ],
                  "y": [
                    1
                  ]
                },
                "o": {
                  "x": [
                    0.333
                  ],
                  "y": [
                    0
                  ]
                },
                "t": 15,
                "s": [
                  0
                ]
              },
              {
                "i": {
                  "x": [
                    0.667
                  ],
                  "y": [
                    1
                  ]
                },
                "o": {
                  "x": [
                    0.333
                  ],
                  "y": [
                    0
                  ]
                },
                "t": 26,
                "s": [
                  100
                ]
              },
              {
                "i": {
                  "x": [
                    0.667
                  ],
                  "y": [
                    1
                  ]
                },
                "o": {
                  "x": [
                    0.333
                  ],
                  "y": [
                    0
                  ]
                },
                "t": 60,
                "s": [
                  100
                ]
              },
              {
                "t": 71,
                "s": [
                  0
                ]
              }
            ],
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": 0.667,
                  "y": 1
                },
                "o": {
                  "x": 0.333,
                  "y": 0
                },
                "t": 15,
                "s": [
                  1130.75,
                  729.75,
                  0
                ],
                "to": [
                  0,
                  1.667,
                  0
                ],
                "ti": [
                  0,
                  -1.667,
                  0
                ]
              },
              {
                "i": {
                  "x": 0.667,
                  "y": 0.667
                },
                "o": {
                  "x": 0.333,
                  "y": 0.333
                },
                "t": 26,
                "s": [
                  1130.75,
                  739.75,
                  0
                ],
                "to": [
                  0,
                  0,
                  0
                ],
                "ti": [
                  0,
                  0,
                  0
                ]
              },
              {
                "i": {
                  "x": 0.667,
                  "y": 1
                },
                "o": {
                  "x": 0.333,
                  "y": 0
                },
                "t": 60,
                "s": [
                  1130.75,
                  739.75,
                  0
                ],
                "to": [
                  0,
                  -1.667,
                  0
                ],
                "ti": [
                  0,
                  1.667,
                  0
                ]
              },
              {
                "t": 71,
                "s": [
                  1130.75,
                  729.75,
                  0
                ]
              }
            ],
            "ix": 2,
            "l": 2,
            "x": "var $bm_rt;\nvar textLengthMax, x, y;\ntextLengthMax = Math.max(thisComp.layer('.playerOut #playerOut').sourceRectAtTime().width, thisComp.layer('.playerIn #playerIn').sourceRectAtTime().width);\nx = $bm_sum($bm_sum(thisComp.layer('.playerOut #playerOut').transform.position[0], $bm_div(textLengthMax, 2)), 25);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
          },
          "a": {
            "a": 0,
            "k": [
              301.75,
              200.75,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ind": 0,
                "ty": "sh",
                "ix": 1,
                "ks": {
                  "a": 0,
                  "k": {
                    "i": [
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ]
                    ],
                    "o": [
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ]
                    ],
                    "v": [
                      [
                        302.125,
                        199.875
                      ],
                      [
                        323.75,
                        224.25
                      ],
                      [
                        346.75,
                        200.25
                      ]
                    ],
                    "c": false
                  },
                  "ix": 2
                },
                "nm": "Path 1",
                "mn": "ADBE Vector Shape - Group",
                "hd": false
              },
              {
                "ty": "st",
                "c": {
                  "a": 0,
                  "k": [
                    0.901960784314,
                    0,
                    0,
                    1
                  ],
                  "ix": 3
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 4
                },
                "w": {
                  "a": 0,
                  "k": 10,
                  "ix": 5
                },
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "bm": 0,
                "nm": "Stroke 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
              },
              {
                "ty": "tr",
                "p": {
                  "a": 0,
                  "k": [
                    0,
                    0
                  ],
                  "ix": 2
                },
                "a": {
                  "a": 0,
                  "k": [
                    0,
                    0
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 0,
                  "k": [
                    100,
                    100
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 7
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Transform"
              }
            ],
            "nm": "arrowOut",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }
        ],
        "ip": 0,
        "op": 91,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 2,
        "ty": 4,
        "nm": "inArrow",
        "sr": 1,
        "ks": {
          "o": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": [
                    0.667
                  ],
                  "y": [
                    1
                  ]
                },
                "o": {
                  "x": [
                    0.333
                  ],
                  "y": [
                    0
                  ]
                },
                "t": 20,
                "s": [
                  0
                ]
              },
              {
                "i": {
                  "x": [
                    0.667
                  ],
                  "y": [
                    1
                  ]
                },
                "o": {
                  "x": [
                    0.167
                  ],
                  "y": [
                    0
                  ]
                },
                "t": 31,
                "s": [
                  100
                ]
              },
              {
                "i": {
                  "x": [
                    0.833
                  ],
                  "y": [
                    1
                  ]
                },
                "o": {
                  "x": [
                    0.167
                  ],
                  "y": [
                    0
                  ]
                },
                "t": 60,
                "s": [
                  100
                ]
              },
              {
                "t": 71,
                "s": [
                  0
                ]
              }
            ],
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": 0.667,
                  "y": 1
                },
                "o": {
                  "x": 0.333,
                  "y": 0
                },
                "t": 20,
                "s": [
                  1130.75,
                  865,
                  0
                ],
                "to": [
                  0,
                  -1.625,
                  0
                ],
                "ti": [
                  0,
                  1.625,
                  0
                ]
              },
              {
                "i": {
                  "x": 0.667,
                  "y": 0.667
                },
                "o": {
                  "x": 0.167,
                  "y": 0.167
                },
                "t": 31,
                "s": [
                  1130.75,
                  855.25,
                  0
                ],
                "to": [
                  0,
                  0,
                  0
                ],
                "ti": [
                  0,
                  0,
                  0
                ]
              },
              {
                "i": {
                  "x": 0.833,
                  "y": 1
                },
                "o": {
                  "x": 0.167,
                  "y": 0
                },
                "t": 60,
                "s": [
                  1130.75,
                  855.25,
                  0
                ],
                "to": [
                  0,
                  1.625,
                  0
                ],
                "ti": [
                  0,
                  -1.625,
                  0
                ]
              },
              {
                "t": 71,
                "s": [
                  1130.75,
                  865,
                  0
                ]
              }
            ],
            "ix": 2,
            "l": 2,
            "x": "var $bm_rt;\nvar textLengthMax, x, y;\ntextLengthMax = Math.max(thisComp.layer('.playerOut #playerOut').sourceRectAtTime().width, thisComp.layer('.playerIn #playerIn').sourceRectAtTime().width);\nx = $bm_sum($bm_sum(thisComp.layer('.playerOut #playerOut').transform.position[0], $bm_div(textLengthMax, 2)), 25);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
          },
          "a": {
            "a": 0,
            "k": [
              301.75,
              200.75,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ind": 0,
                "ty": "sh",
                "ix": 1,
                "ks": {
                  "a": 0,
                  "k": {
                    "i": [
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ]
                    ],
                    "o": [
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ]
                    ],
                    "v": [
                      [
                        301.403,
                        193
                      ],
                      [
                        323.898,
                        169
                      ],
                      [
                        347.514,
                        192.486
                      ]
                    ],
                    "c": false
                  },
                  "ix": 2
                },
                "nm": "Path 1",
                "mn": "ADBE Vector Shape - Group",
                "hd": false
              },
              {
                "ty": "st",
                "c": {
                  "a": 0,
                  "k": [
                    0,
                    0.78431372549,
                    0.166090019076,
                    1
                  ],
                  "ix": 3
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 4
                },
                "w": {
                  "a": 0,
                  "k": 10,
                  "ix": 5
                },
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "bm": 0,
                "nm": "Stroke 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
              },
              {
                "ty": "tr",
                "p": {
                  "a": 0,
                  "k": [
                    0,
                    0
                  ],
                  "ix": 2
                },
                "a": {
                  "a": 0,
                  "k": [
                    0,
                    0
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 0,
                  "k": [
                    100,
                    100
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 7
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Transform"
              }
            ],
            "nm": "arrowIn",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }
        ],
        "ip": 0,
        "op": 91,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 3,
        "ty": 5,
        "nm": ".playerOut #playerOut",
        "ln": "playerOut",
        "cl": "playerOut",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              958,
              771,
              0
            ],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "ef": [
          {
            "ty": 28,
            "nm": "Set Matte",
            "np": 8,
            "mn": "ADBE Set Matte3",
            "ix": 1,
            "en": 1,
            "ef": [
              {
                "ty": 10,
                "nm": "Take Matte From Layer",
                "mn": "ADBE Set Matte3-0001",
                "ix": 1,
                "v": {
                  "a": 0,
                  "k": 5,
                  "ix": 1
                }
              },
              {
                "ty": 7,
                "nm": "Use For Matte",
                "mn": "ADBE Set Matte3-0002",
                "ix": 2,
                "v": {
                  "a": 0,
                  "k": 4,
                  "ix": 2
                }
              },
              {
                "ty": 7,
                "nm": "Invert Matte",
                "mn": "ADBE Set Matte3-0003",
                "ix": 3,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 3
                }
              },
              {
                "ty": 7,
                "nm": "If Layer Sizes Differ",
                "mn": "ADBE Set Matte3-0004",
                "ix": 4,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 4
                }
              },
              {
                "ty": 7,
                "nm": "Composite Matte with Original",
                "mn": "ADBE Set Matte3-0005",
                "ix": 5,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 5
                }
              },
              {
                "ty": 7,
                "nm": "Premultiply Matte Layer",
                "mn": "ADBE Set Matte3-0006",
                "ix": 6,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 6
                }
              }
            ]
          }
        ],
        "t": {
          "d": {
            "k": [
              {
                "s": {
                  "s": 60,
                  "f": "Barlow Condensed",
                  "t": "Ronaldo",
                  "ca": 0,
                  "j": 2,
                  "tr": 0,
                  "lh": 72,
                  "ls": 0,
                  "fc": [
                    0,
                    0,
                    0
                  ]
                },
                "t": 0
              }
            ]
          },
          "p": {},
          "m": {
            "g": 1,
            "a": {
              "a": 0,
              "k": [
                0,
                0
              ],
              "ix": 2
            }
          },
          "a": []
        },
        "ip": 0,
        "op": 91,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 4,
        "ty": 5,
        "nm": ".playerOutNumb #playerOutNumb",
        "ln": "playerOutNumb",
        "cl": "playerOutNumb",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              787,
              771,
              0
            ],
            "ix": 2,
            "l": 2,
            "x": "var $bm_rt;\nvar textMaxLength, x, y;\ntextMaxLength = Math.max(thisComp.layer('.playerOut #playerOut').sourceRectAtTime().width, thisComp.layer('.playerIn #playerIn').sourceRectAtTime().width);\nx = $bm_sub($bm_sub(thisComp.layer('.playerOut #playerOut').transform.position[0], $bm_div(textMaxLength, 2)), 46);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
          },
          "a": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "ef": [
          {
            "ty": 28,
            "nm": "Set Matte",
            "np": 8,
            "mn": "ADBE Set Matte3",
            "ix": 1,
            "en": 1,
            "ef": [
              {
                "ty": 10,
                "nm": "Take Matte From Layer",
                "mn": "ADBE Set Matte3-0001",
                "ix": 1,
                "v": {
                  "a": 0,
                  "k": 5,
                  "ix": 1
                }
              },
              {
                "ty": 7,
                "nm": "Use For Matte",
                "mn": "ADBE Set Matte3-0002",
                "ix": 2,
                "v": {
                  "a": 0,
                  "k": 4,
                  "ix": 2
                }
              },
              {
                "ty": 7,
                "nm": "Invert Matte",
                "mn": "ADBE Set Matte3-0003",
                "ix": 3,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 3
                }
              },
              {
                "ty": 7,
                "nm": "If Layer Sizes Differ",
                "mn": "ADBE Set Matte3-0004",
                "ix": 4,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 4
                }
              },
              {
                "ty": 7,
                "nm": "Composite Matte with Original",
                "mn": "ADBE Set Matte3-0005",
                "ix": 5,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 5
                }
              },
              {
                "ty": 7,
                "nm": "Premultiply Matte Layer",
                "mn": "ADBE Set Matte3-0006",
                "ix": 6,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 6
                }
              }
            ]
          }
        ],
        "t": {
          "d": {
            "k": [
              {
                "s": {
                  "s": 55,
                  "f": "Scada-Bold",
                  "t": "6",
                  "ca": 0,
                  "j": 2,
                  "tr": 0,
                  "lh": 66,
                  "ls": 0,
                  "fc": [
                    0,
                    0,
                    0
                  ]
                },
                "t": 0
              }
            ]
          },
          "p": {},
          "m": {
            "g": 1,
            "a": {
              "a": 0,
              "k": [
                0,
                0
              ],
              "ix": 2
            }
          },
          "a": []
        },
        "ip": 0,
        "op": 91,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 5,
        "ty": 4,
        "nm": "playerOutBkg",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {
                  "a": 0,
                  "k": [
                    296.022,
                    82
                  ],
                  "ix": 2,
                  "x": "var $bm_rt;\nvar extraPlayerOut, x, y;\nextraPlayerOut = 100;\nx = $bm_sum(Math.max(thisComp.layer('.playerOut #playerOut').sourceRectAtTime().width, thisComp.layer('.playerIn #playerIn').sourceRectAtTime().width), extraPlayerOut);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                },
                "p": {
                  "a": 0,
                  "k": [
                    0,
                    750
                  ],
                  "ix": 3,
                  "x": "var $bm_rt;\nvar x, y;\nx = $bm_sum(thisComp.layer('.playerOut #playerOut').transform.position[0], 40);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
              },
              {
                "ty": "fl",
                "c": {
                  "a": 0,
                  "k": [
                    1,
                    1,
                    1,
                    1
                  ],
                  "ix": 4
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 5
                },
                "r": 1,
                "bm": 0,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
              },
              {
                "ty": "tr",
                "p": {
                  "a": 0,
                  "k": [
                    982,
                    791
                  ],
                  "ix": 2
                },
                "a": {
                  "a": 0,
                  "k": [
                    982,
                    791
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 1,
                  "k": [
                    {
                      "i": {
                        "x": [
                          0.638,
                          0.634
                        ],
                        "y": [
                          1,
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.407,
                          0.403
                        ],
                        "y": [
                          0,
                          0
                        ]
                      },
                      "t": 0,
                      "s": [
                        100,
                        0
                      ]
                    },
                    {
                      "i": {
                        "x": [
                          0.638,
                          0.634
                        ],
                        "y": [
                          1,
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.333,
                          0.333
                        ],
                        "y": [
                          0,
                          0
                        ]
                      },
                      "t": 9,
                      "s": [
                        100,
                        100
                      ]
                    },
                    {
                      "i": {
                        "x": [
                          0.667,
                          0.667
                        ],
                        "y": [
                          1,
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.333,
                          0.333
                        ],
                        "y": [
                          0,
                          0
                        ]
                      },
                      "t": 70,
                      "s": [
                        100,
                        100
                      ]
                    },
                    {
                      "t": 80,
                      "s": [
                        100,
                        0
                      ]
                    }
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 7
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Transform"
              }
            ],
            "nm": "playerOutUnderlay",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          },
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {
                  "a": 0,
                  "k": [
                    75,
                    82
                  ],
                  "ix": 2
                },
                "p": {
                  "a": 0,
                  "k": [
                    795,
                    832
                  ],
                  "ix": 3,
                  "x": "var $bm_rt;\nvar x, y;\nx = $bm_sub($bm_sub(content('playerOutUnderlay').content('Rectangle Path 1').position[0], $bm_div(content('playerOutUnderlay').content('Rectangle Path 1').size[0], 2)), 35);\ny = content('playerOutUnderlay').content('Rectangle Path 1').position[1];\n$bm_rt = [\n    x,\n    y\n];"
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
              },
              {
                "ty": "gf",
                "o": {
                  "a": 0,
                  "k": 25,
                  "ix": 10
                },
                "r": 1,
                "bm": 0,
                "g": {
                  "p": 3,
                  "k": {
                    "a": 0,
                    "k": [
                      0,
                      1,
                      1,
                      1,
                      0.5,
                      0.678,
                      0.678,
                      0.678,
                      1,
                      0.357,
                      0.357,
                      0.357
                    ],
                    "ix": 9
                  }
                },
                "s": {
                  "a": 0,
                  "k": [
                    755,
                    790
                  ],
                  "ix": 5
                },
                "e": {
                  "a": 0,
                  "k": [
                    755,
                    730
                  ],
                  "ix": 6
                },
                "t": 1,
                "nm": "Gradient Fill 1",
                "mn": "ADBE Vector Graphic - G-Fill",
                "hd": false
              },
              {
                "ty": "tr",
                "p": {
                  "a": 0,
                  "k": [
                    0,
                    0
                  ],
                  "ix": 2,
                  "x": "var $bm_rt;\n$bm_rt = content('playerOutNumbUnderlay').transform.position;"
                },
                "a": {
                  "a": 0,
                  "k": [
                    0,
                    0
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 0,
                  "k": [
                    100,
                    100
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 7,
                  "x": "var $bm_rt;\n$bm_rt = content('playerOutNumbUnderlay').transform.opacity;"
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Transform"
              }
            ],
            "nm": "playerOutNumbUnderlayGrad",
            "np": 3,
            "cix": 2,
            "bm": 1,
            "ix": 2,
            "mn": "ADBE Vector Group",
            "hd": false
          },
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {
                  "a": 0,
                  "k": [
                    75,
                    82
                  ],
                  "ix": 2
                },
                "p": {
                  "a": 0,
                  "k": [
                    795,
                    832
                  ],
                  "ix": 3,
                  "x": "var $bm_rt;\nvar x, y;\nx = $bm_sub($bm_sub(content('playerOutUnderlay').content('Rectangle Path 1').position[0], $bm_div(content('playerOutUnderlay').content('Rectangle Path 1').size[0], 2)), 35);\ny = content('playerOutUnderlay').content('Rectangle Path 1').position[1];\n$bm_rt = [\n    x,\n    y\n];"
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
              },
              {
                "ty": "fl",
                "c": {
                  "a": 0,
                  "k": [
                    0.887351361443,
                    0.366966516831,
                    0.964705882353,
                    1
                  ],
                  "ix": 4,
                  "x": "var $bm_rt;\nvar teamSelected, teamSelected, txt, team1OneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\nif (thisComp.layer('.subbingTeam #subbingTeam').text.sourceText == 'team1') {\n    teamSelected = 0;\n} else {\n    teamSelected = 1;\n}\ntxt = thisComp.layer('.teamsColors #teamsColors').text.sourceText.split(',')[teamSelected];\nteam1OneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(team1OneColor);"
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 5
                },
                "r": 1,
                "bm": 0,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
              },
              {
                "ty": "tr",
                "p": {
                  "a": 1,
                  "k": [
                    {
                      "i": {
                        "x": 0.667,
                        "y": 1
                      },
                      "o": {
                        "x": 0.333,
                        "y": 0
                      },
                      "t": 9,
                      "s": [
                        78,
                        0
                      ],
                      "to": [
                        -13,
                        0
                      ],
                      "ti": [
                        13,
                        0
                      ]
                    },
                    {
                      "t": 18,
                      "s": [
                        0,
                        0
                      ]
                    }
                  ],
                  "ix": 2
                },
                "a": {
                  "a": 0,
                  "k": [
                    0,
                    0
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 0,
                  "k": [
                    100,
                    100
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 1,
                  "k": [
                    {
                      "i": {
                        "x": [
                          0.667
                        ],
                        "y": [
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.333
                        ],
                        "y": [
                          0
                        ]
                      },
                      "t": 9,
                      "s": [
                        0
                      ]
                    },
                    {
                      "i": {
                        "x": [
                          0.667
                        ],
                        "y": [
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.333
                        ],
                        "y": [
                          0
                        ]
                      },
                      "t": 10,
                      "s": [
                        100
                      ]
                    },
                    {
                      "i": {
                        "x": [
                          0.667
                        ],
                        "y": [
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.333
                        ],
                        "y": [
                          0
                        ]
                      },
                      "t": 70,
                      "s": [
                        100
                      ]
                    },
                    {
                      "t": 74,
                      "s": [
                        0
                      ]
                    }
                  ],
                  "ix": 7
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Transform"
              }
            ],
            "nm": "playerOutNumbUnderlay",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 3,
            "mn": "ADBE Vector Group",
            "hd": false
          }
        ],
        "ip": 0,
        "op": 91,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 6,
        "ty": 5,
        "nm": ".playerIn #playerIn",
        "ln": "playerIn",
        "cl": "playerIn",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              960,
              852,
              0
            ],
            "ix": 2,
            "l": 2,
            "x": "var $bm_rt;\nvar x, y;\nx = thisComp.layer('.playerOut #playerOut').transform.position[0];\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
          },
          "a": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "ef": [
          {
            "ty": 28,
            "nm": "Set Matte",
            "np": 8,
            "mn": "ADBE Set Matte3",
            "ix": 1,
            "en": 1,
            "ef": [
              {
                "ty": 10,
                "nm": "Take Matte From Layer",
                "mn": "ADBE Set Matte3-0001",
                "ix": 1,
                "v": {
                  "a": 0,
                  "k": 8,
                  "ix": 1
                }
              },
              {
                "ty": 7,
                "nm": "Use For Matte",
                "mn": "ADBE Set Matte3-0002",
                "ix": 2,
                "v": {
                  "a": 0,
                  "k": 4,
                  "ix": 2
                }
              },
              {
                "ty": 7,
                "nm": "Invert Matte",
                "mn": "ADBE Set Matte3-0003",
                "ix": 3,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 3
                }
              },
              {
                "ty": 7,
                "nm": "If Layer Sizes Differ",
                "mn": "ADBE Set Matte3-0004",
                "ix": 4,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 4
                }
              },
              {
                "ty": 7,
                "nm": "Composite Matte with Original",
                "mn": "ADBE Set Matte3-0005",
                "ix": 5,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 5
                }
              },
              {
                "ty": 7,
                "nm": "Premultiply Matte Layer",
                "mn": "ADBE Set Matte3-0006",
                "ix": 6,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 6
                }
              }
            ]
          }
        ],
        "t": {
          "d": {
            "k": [
              {
                "s": {
                  "s": 60,
                  "f": "Barlow Condensed",
                  "t": "Messi",
                  "ca": 0,
                  "j": 2,
                  "tr": 0,
                  "lh": 72,
                  "ls": 0,
                  "fc": [
                    1,
                    1,
                    1
                  ]
                },
                "t": 0
              }
            ]
          },
          "p": {},
          "m": {
            "g": 1,
            "a": {
              "a": 0,
              "k": [
                0,
                0
              ],
              "ix": 2
            }
          },
          "a": []
        },
        "ip": 0,
        "op": 91,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 7,
        "ty": 5,
        "nm": ".playerInNumb #playerInNumb",
        "ln": "playerInNumb",
        "cl": "playerInNumb",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              787,
              852,
              0
            ],
            "ix": 2,
            "l": 2,
            "x": "var $bm_rt;\nvar textMaxLength, x, y;\ntextMaxLength = Math.max(thisComp.layer('.playerOut #playerOut').sourceRectAtTime().width, thisComp.layer('.playerIn #playerIn').sourceRectAtTime().width);\nx = $bm_sub($bm_sub(thisComp.layer('.playerOut #playerOut').transform.position[0], $bm_div(textMaxLength, 2)), 46);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
          },
          "a": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "ef": [
          {
            "ty": 28,
            "nm": "Set Matte",
            "np": 8,
            "mn": "ADBE Set Matte3",
            "ix": 1,
            "en": 1,
            "ef": [
              {
                "ty": 10,
                "nm": "Take Matte From Layer",
                "mn": "ADBE Set Matte3-0001",
                "ix": 1,
                "v": {
                  "a": 0,
                  "k": 8,
                  "ix": 1
                }
              },
              {
                "ty": 7,
                "nm": "Use For Matte",
                "mn": "ADBE Set Matte3-0002",
                "ix": 2,
                "v": {
                  "a": 0,
                  "k": 4,
                  "ix": 2
                }
              },
              {
                "ty": 7,
                "nm": "Invert Matte",
                "mn": "ADBE Set Matte3-0003",
                "ix": 3,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 3
                }
              },
              {
                "ty": 7,
                "nm": "If Layer Sizes Differ",
                "mn": "ADBE Set Matte3-0004",
                "ix": 4,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 4
                }
              },
              {
                "ty": 7,
                "nm": "Composite Matte with Original",
                "mn": "ADBE Set Matte3-0005",
                "ix": 5,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 5
                }
              },
              {
                "ty": 7,
                "nm": "Premultiply Matte Layer",
                "mn": "ADBE Set Matte3-0006",
                "ix": 6,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 6
                }
              }
            ]
          }
        ],
        "t": {
          "d": {
            "k": [
              {
                "s": {
                  "s": 55,
                  "f": "Scada-Bold",
                  "t": "29",
                  "ca": 0,
                  "j": 2,
                  "tr": 0,
                  "lh": 66,
                  "ls": 0,
                  "fc": [
                    0,
                    0,
                    0
                  ]
                },
                "t": 0
              }
            ]
          },
          "p": {},
          "m": {
            "g": 1,
            "a": {
              "a": 0,
              "k": [
                0,
                0
              ],
              "ix": 2
            }
          },
          "a": []
        },
        "ip": 0,
        "op": 91,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 8,
        "ty": 4,
        "nm": "playerInBkg",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {
                  "a": 0,
                  "k": [
                    296.022,
                    82
                  ],
                  "ix": 2,
                  "x": "var $bm_rt;\nvar extraPlayerOut, x, y;\nextraPlayerOut = 100;\nx = $bm_sum(Math.max(thisComp.layer('.playerOut #playerOut').sourceRectAtTime().width, thisComp.layer('.playerIn #playerIn').sourceRectAtTime().width), extraPlayerOut);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                },
                "p": {
                  "a": 0,
                  "k": [
                    0,
                    832
                  ],
                  "ix": 3,
                  "x": "var $bm_rt;\nvar x, y;\nx = $bm_sum(thisComp.layer('.playerOut #playerOut').transform.position[0], 40);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
              },
              {
                "ty": "fl",
                "c": {
                  "a": 0,
                  "k": [
                    0.282352941176,
                    0.282352941176,
                    0.282352941176,
                    1
                  ],
                  "ix": 4
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 5
                },
                "r": 1,
                "bm": 0,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
              },
              {
                "ty": "tr",
                "p": {
                  "a": 0,
                  "k": [
                    982,
                    791
                  ],
                  "ix": 2
                },
                "a": {
                  "a": 0,
                  "k": [
                    982,
                    791
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 1,
                  "k": [
                    {
                      "i": {
                        "x": [
                          0.667,
                          0.667
                        ],
                        "y": [
                          1,
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.333,
                          0.333
                        ],
                        "y": [
                          0,
                          0
                        ]
                      },
                      "t": 5,
                      "s": [
                        100,
                        0
                      ]
                    },
                    {
                      "i": {
                        "x": [
                          0.667,
                          0.667
                        ],
                        "y": [
                          1,
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.167,
                          0.167
                        ],
                        "y": [
                          0,
                          0
                        ]
                      },
                      "t": 14,
                      "s": [
                        100,
                        100
                      ]
                    },
                    {
                      "i": {
                        "x": [
                          0.833,
                          0.833
                        ],
                        "y": [
                          1,
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.167,
                          0.167
                        ],
                        "y": [
                          0,
                          0
                        ]
                      },
                      "t": 70,
                      "s": [
                        100,
                        100
                      ]
                    },
                    {
                      "t": 80,
                      "s": [
                        100,
                        0
                      ]
                    }
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 7
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Transform"
              }
            ],
            "nm": "playerInUnderlay",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          },
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {
                  "a": 0,
                  "k": [
                    75,
                    82
                  ],
                  "ix": 2
                },
                "p": {
                  "a": 0,
                  "k": [
                    795,
                    832
                  ],
                  "ix": 3,
                  "x": "var $bm_rt;\nvar x, y;\nx = $bm_sub($bm_sub(content('playerInUnderlay').content('Rectangle Path 1').position[0], $bm_div(content('playerInUnderlay').content('Rectangle Path 1').size[0], 2)), 35);\ny = content('playerInUnderlay').content('Rectangle Path 1').position[1];\n$bm_rt = [\n    x,\n    y\n];"
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
              },
              {
                "ty": "gf",
                "o": {
                  "a": 0,
                  "k": 25,
                  "ix": 10
                },
                "r": 1,
                "bm": 0,
                "g": {
                  "p": 3,
                  "k": {
                    "a": 0,
                    "k": [
                      0,
                      1,
                      1,
                      1,
                      0.5,
                      0.678,
                      0.678,
                      0.678,
                      1,
                      0.357,
                      0.357,
                      0.357
                    ],
                    "ix": 9
                  }
                },
                "s": {
                  "a": 0,
                  "k": [
                    755,
                    850
                  ],
                  "ix": 5
                },
                "e": {
                  "a": 0,
                  "k": [
                    755,
                    790
                  ],
                  "ix": 6
                },
                "t": 1,
                "nm": "Gradient Fill 1",
                "mn": "ADBE Vector Graphic - G-Fill",
                "hd": false
              },
              {
                "ty": "tr",
                "p": {
                  "a": 0,
                  "k": [
                    0,
                    0
                  ],
                  "ix": 2,
                  "x": "var $bm_rt;\n$bm_rt = content('playerInNumbUnderlay').transform.position;"
                },
                "a": {
                  "a": 0,
                  "k": [
                    0,
                    0
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 0,
                  "k": [
                    100,
                    100
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 7,
                  "x": "var $bm_rt;\n$bm_rt = content('playerInNumbUnderlay').transform.opacity;"
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Transform"
              }
            ],
            "nm": "playerInNumbUnderlayGrad",
            "np": 3,
            "cix": 2,
            "bm": 1,
            "ix": 2,
            "mn": "ADBE Vector Group",
            "hd": false
          },
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {
                  "a": 0,
                  "k": [
                    75,
                    82
                  ],
                  "ix": 2
                },
                "p": {
                  "a": 0,
                  "k": [
                    795,
                    832
                  ],
                  "ix": 3,
                  "x": "var $bm_rt;\nvar x, y;\nx = $bm_sub($bm_sub(content('playerInUnderlay').content('Rectangle Path 1').position[0], $bm_div(content('playerInUnderlay').content('Rectangle Path 1').size[0], 2)), 35);\ny = content('playerInUnderlay').content('Rectangle Path 1').position[1];\n$bm_rt = [\n    x,\n    y\n];"
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
              },
              {
                "ty": "fl",
                "c": {
                  "a": 0,
                  "k": [
                    0.366966515779,
                    0.964705884457,
                    0.648255586624,
                    1
                  ],
                  "ix": 4,
                  "x": "var $bm_rt;\n$bm_rt = thisComp.layer('playerOutBkg').content('playerOutNumbUnderlay').content('Fill 1').color;"
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 5
                },
                "r": 1,
                "bm": 0,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
              },
              {
                "ty": "tr",
                "p": {
                  "a": 1,
                  "k": [
                    {
                      "i": {
                        "x": 0.667,
                        "y": 1
                      },
                      "o": {
                        "x": 0.333,
                        "y": 0
                      },
                      "t": 14,
                      "s": [
                        78,
                        0
                      ],
                      "to": [
                        -13,
                        0
                      ],
                      "ti": [
                        13,
                        0
                      ]
                    },
                    {
                      "t": 23,
                      "s": [
                        0,
                        0
                      ]
                    }
                  ],
                  "ix": 2
                },
                "a": {
                  "a": 0,
                  "k": [
                    0,
                    0
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 0,
                  "k": [
                    100,
                    100
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 1,
                  "k": [
                    {
                      "i": {
                        "x": [
                          0.667
                        ],
                        "y": [
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.333
                        ],
                        "y": [
                          0
                        ]
                      },
                      "t": 14,
                      "s": [
                        0
                      ]
                    },
                    {
                      "i": {
                        "x": [
                          0.667
                        ],
                        "y": [
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.167
                        ],
                        "y": [
                          0
                        ]
                      },
                      "t": 15,
                      "s": [
                        100
                      ]
                    },
                    {
                      "i": {
                        "x": [
                          0.667
                        ],
                        "y": [
                          1
                        ]
                      },
                      "o": {
                        "x": [
                          0.333
                        ],
                        "y": [
                          0
                        ]
                      },
                      "t": 70,
                      "s": [
                        100
                      ]
                    },
                    {
                      "t": 74,
                      "s": [
                        0
                      ]
                    }
                  ],
                  "ix": 7
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Transform"
              }
            ],
            "nm": "playerInNumbUnderlay",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 3,
            "mn": "ADBE Vector Group",
            "hd": false
          }
        ],
        "ip": 0,
        "op": 91,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 9,
        "ty": 5,
        "nm": ".teamName #teamName",
        "ln": "teamName",
        "cl": "teamName",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              960,
              695,
              0
            ],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "ef": [
          {
            "ty": 28,
            "nm": "Set Matte",
            "np": 8,
            "mn": "ADBE Set Matte3",
            "ix": 1,
            "en": 1,
            "ef": [
              {
                "ty": 10,
                "nm": "Take Matte From Layer",
                "mn": "ADBE Set Matte3-0001",
                "ix": 1,
                "v": {
                  "a": 0,
                  "k": 10,
                  "ix": 1
                }
              },
              {
                "ty": 7,
                "nm": "Use For Matte",
                "mn": "ADBE Set Matte3-0002",
                "ix": 2,
                "v": {
                  "a": 0,
                  "k": 4,
                  "ix": 2
                }
              },
              {
                "ty": 7,
                "nm": "Invert Matte",
                "mn": "ADBE Set Matte3-0003",
                "ix": 3,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 3
                }
              },
              {
                "ty": 7,
                "nm": "If Layer Sizes Differ",
                "mn": "ADBE Set Matte3-0004",
                "ix": 4,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 4
                }
              },
              {
                "ty": 7,
                "nm": "Composite Matte with Original",
                "mn": "ADBE Set Matte3-0005",
                "ix": 5,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 5
                }
              },
              {
                "ty": 7,
                "nm": "Premultiply Matte Layer",
                "mn": "ADBE Set Matte3-0006",
                "ix": 6,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 6
                }
              }
            ]
          }
        ],
        "t": {
          "d": {
            "k": [
              {
                "s": {
                  "s": 40,
                  "f": "Barlow Condensed",
                  "t": "Team name",
                  "ca": 0,
                  "j": 2,
                  "tr": 0,
                  "lh": 48,
                  "ls": 0,
                  "fc": [
                    1,
                    1,
                    1
                  ]
                },
                "t": 0
              }
            ]
          },
          "p": {},
          "m": {
            "g": 1,
            "a": {
              "a": 0,
              "k": [
                0,
                0
              ],
              "ix": 2
            }
          },
          "a": []
        },
        "ip": 20,
        "op": 72,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 10,
        "ty": 4,
        "nm": "teamNameBkg",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {
                  "a": 0,
                  "k": [
                    274.426,
                    54
                  ],
                  "ix": 2,
                  "x": "var $bm_rt;\nvar addExtraX, x, y;\naddExtraX = 30;\nx = $bm_sum(thisComp.layer('.teamName #teamName').sourceRectAtTime().width, addExtraX);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                },
                "p": {
                  "a": 1,
                  "k": [
                    {
                      "i": {
                        "x": 0.667,
                        "y": 1
                      },
                      "o": {
                        "x": 0.333,
                        "y": 0
                      },
                      "t": 20,
                      "s": [
                        0,
                        69
                      ],
                      "to": [
                        0,
                        -11.5
                      ],
                      "ti": [
                        0,
                        11.5
                      ]
                    },
                    {
                      "i": {
                        "x": 0.667,
                        "y": 0.667
                      },
                      "o": {
                        "x": 0.333,
                        "y": 0.333
                      },
                      "t": 31,
                      "s": [
                        0,
                        0
                      ],
                      "to": [
                        0,
                        0
                      ],
                      "ti": [
                        0,
                        0
                      ]
                    },
                    {
                      "i": {
                        "x": 0.667,
                        "y": 1
                      },
                      "o": {
                        "x": 0.333,
                        "y": 0
                      },
                      "t": 60,
                      "s": [
                        0,
                        0
                      ],
                      "to": [
                        0,
                        11.5
                      ],
                      "ti": [
                        0,
                        -11.5
                      ]
                    },
                    {
                      "t": 71,
                      "s": [
                        0,
                        69
                      ]
                    }
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
              },
              {
                "ty": "fl",
                "c": {
                  "a": 0,
                  "k": [
                    0.282352941176,
                    0.282352941176,
                    0.282352941176,
                    1
                  ],
                  "ix": 4
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 5
                },
                "r": 1,
                "bm": 0,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
              },
              {
                "ty": "tr",
                "p": {
                  "a": 0,
                  "k": [
                    -4,
                    681.5
                  ],
                  "ix": 2,
                  "x": "var $bm_rt;\nvar x, y;\nx = thisComp.layer('.teamName #teamName').transform.position[0];\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                },
                "a": {
                  "a": 0,
                  "k": [
                    0,
                    0
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 0,
                  "k": [
                    100,
                    100
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 7
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Transform"
              }
            ],
            "nm": "Rectangle 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }
        ],
        "ip": 20,
        "op": 72,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 11,
        "ty": 5,
        "nm": ".subbingTeam #subbingTeam",
        "ln": "subbingTeam",
        "cl": "subbingTeam",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 0,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              1180,
              516,
              0
            ],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "t": {
          "d": {
            "k": [
              {
                "s": {
                  "s": 50,
                  "f": "Scada-Bold",
                  "t": "team1",
                  "ca": 0,
                  "j": 2,
                  "tr": 0,
                  "lh": 60,
                  "ls": 0,
                  "fc": [
                    0,
                    0,
                    0
                  ]
                },
                "t": 0
              }
            ]
          },
          "p": {},
          "m": {
            "g": 1,
            "a": {
              "a": 0,
              "k": [
                0,
                0
              ],
              "ix": 2
            }
          },
          "a": []
        },
        "ip": 0,
        "op": 91,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 12,
        "ty": 5,
        "nm": ".teamsColors #teamsColors",
        "ln": "teamsColors",
        "cl": "teamsColors",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 0,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              526,
              493,
              0
            ],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [
              0,
              0,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              100,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "t": {
          "d": {
            "k": [
              {
                "s": {
                  "s": 50,
                  "f": "Scada-Bold",
                  "t": "00F6EB,C2384B",
                  "ca": 0,
                  "j": 0,
                  "tr": 0,
                  "lh": 60,
                  "ls": 0,
                  "fc": [
                    0,
                    0,
                    0
                  ]
                },
                "t": 0
              }
            ]
          },
          "p": {},
          "m": {
            "g": 1,
            "a": {
              "a": 0,
              "k": [
                0,
                0
              ],
              "ix": 2
            }
          },
          "a": []
        },
        "ip": 0,
        "op": 91,
        "st": 0,
        "bm": 0
      }
    ],
    "markers": []
  }