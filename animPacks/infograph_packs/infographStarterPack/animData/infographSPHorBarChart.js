var infogrSPHorBarChartData =

{
    "v": "5.7.13",
    "fr": 25,
    "ip": 0,
    "op": 125,
    "w": 1920,
    "h": 1080,
    "nm": "horBarChart",
    "ddd": 0,
    "assets": [
      {
        "id": "comp_0",
        "nm": "horBarChartMainStitch",
        "layers": [
          {
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "titleMatte",
            "td": 1,
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
                        462,
                        150
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar x, y;\nx = thisComp.layer('.horBarChartTitle #horBarChartTitle').sourceRectAtTime().width;\ny = thisComp.layer('.horBarChartTitle #horBarChartTitle').sourceRectAtTime().height;\n$bm_rt = [\n    x,\n    y\n];"
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        0,
                        0
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
                        0.282353001015,
                        0.282353001015,
                        0.282353001015,
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
                        0,
                        0
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar x, y;\nx = thisComp.layer('.horBarChartTitle #horBarChartTitle').transform.position[0];\ny = thisComp.layer('.horBarChartTitle #horBarChartTitle').transform.position[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                      "a": 1,
                      "k": [
                        {
                          "i": {
                            "x": [
                              0,
                              0.667
                            ],
                            "y": [
                              1,
                              1
                            ]
                          },
                          "o": {
                            "x": [
                              0.058,
                              0.333
                            ],
                            "y": [
                              0,
                              0
                            ]
                          },
                          "t": 0,
                          "s": [
                            0,
                            120
                          ]
                        },
                        {
                          "t": 20,
                          "s": [
                            110,
                            120
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
                "nm": "titleMatte",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 0,
            "op": 125,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 2,
            "ty": 5,
            "nm": ".horBarChartTitle #horBarChartTitle",
            "ln": "horBarChartTitle",
            "cl": "horBarChartTitle",
            "tt": 1,
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
                  920,
                  182,
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
                "l": 2,
                "x": "var $bm_rt;\nvar x, y;\nx = value[0];\ny = $bm_sum(thisLayer.sourceRectAtTime().top, $bm_div(thisLayer.sourceRectAtTime().height, 2)), $bm_rt = [\n    x,\n    y\n];"
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
                      "s": 75,
                      "f": "Scada-Bold",
                      "t": "Title goes here\rsecond line",
                      "ca": 0,
                      "j": 2,
                      "tr": 0,
                      "lh": 90,
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
            "op": 125,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 3,
            "ty": 5,
            "nm": ".percentageOne #percentageOne",
            "ln": "percentageOne",
            "cl": "percentageOne",
            "sr": 1,
            "ks": {
              "o": {
                "a": 1,
                "k": [
                  {
                    "i": {
                      "x": [
                        0.833
                      ],
                      "y": [
                        0.833
                      ]
                    },
                    "o": {
                      "x": [
                        0.167
                      ],
                      "y": [
                        0.167
                      ]
                    },
                    "t": 3,
                    "s": [
                      0
                    ]
                  },
                  {
                    "t": 13,
                    "s": [
                      100
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
                "a": 0,
                "k": [
                  680.1,
                  428,
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
                "l": 2,
                "x": "var $bm_rt;\nvar targetSize, realSize, x, x, y;\ntargetSize = 110;\nrealSize = thisLayer.sourceRectAtTime().width;\nif (realSize > targetSize) {\n    x = $bm_mul($bm_div(targetSize, realSize), 100);\n} else {\n    x = 100;\n}\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [
                  {
                    "s": {
                      "s": 60,
                      "f": "Scada-Bold",
                      "t": "15",
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
                ],
                "x": "var $bm_rt;\n$bm_rt = $bm_sum(text.sourceText, '%');"
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
            "op": 125,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 4,
            "ty": 5,
            "nm": ".textOne #textOne",
            "ln": "textOne",
            "cl": "textOne",
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
                  593.975,
                  410.05,
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
                "l": 2,
                "x": "var $bm_rt;\nvar x, y;\nx = value[0];\ny = $bm_sum(thisLayer.sourceRectAtTime().top, $bm_div(thisLayer.sourceRectAtTime().height, 2));\n$bm_rt = [\n    x,\n    y\n];"
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
            "hasMask": true,
            "masksProperties": [
              {
                "inv": false,
                "mode": "a",
                "pt": {
                  "a": 1,
                  "k": [
                    {
                      "i": {
                        "x": 0,
                        "y": 1
                      },
                      "o": {
                        "x": 0.116,
                        "y": 0
                      },
                      "t": 1,
                      "s": [
                        {
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
                            ],
                            [
                              0,
                              0
                            ]
                          ],
                          "v": [
                            [
                              28.025,
                              -56.3
                            ],
                            [
                              19.025,
                              -56.3
                            ],
                            [
                              19.025,
                              81.7
                            ],
                            [
                              28.025,
                              81.7
                            ]
                          ],
                          "c": true
                        }
                      ]
                    },
                    {
                      "t": 45,
                      "s": [
                        {
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
                            ],
                            [
                              0,
                              0
                            ]
                          ],
                          "v": [
                            [
                              28.025,
                              -56.3
                            ],
                            [
                              -593.975,
                              -56.3
                            ],
                            [
                              -593.975,
                              81.7
                            ],
                            [
                              28.025,
                              81.7
                            ]
                          ],
                          "c": true
                        }
                      ]
                    }
                  ],
                  "ix": 1
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 3
                },
                "x": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "nm": "Mask 1"
              }
            ],
            "t": {
              "d": {
                "k": [
                  {
                    "s": {
                      "s": 55,
                      "f": "Scada-Bold",
                      "t": "Text one",
                      "ca": 0,
                      "j": 1,
                      "tr": 0,
                      "lh": 66,
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
            "op": 125,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 5,
            "ty": 4,
            "nm": "barOneMatte",
            "td": 1,
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
                  992.75,
                  616,
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
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                      "a": 0,
                      "k": {
                        "i": [
                          [
                            -12.406,
                            -7.769
                          ],
                          [
                            46.5,
                            -37.25
                          ]
                        ],
                        "o": [
                          [
                            24.75,
                            15.5
                          ],
                          [
                            -24.834,
                            19.894
                          ]
                        ],
                        "v": [
                          [
                            -268,
                            -262.5
                          ],
                          [
                            -269,
                            -149
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
                        1,
                        1,
                        1,
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
                "nm": "Shape 1",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 0,
            "op": 125,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 6,
            "ty": 4,
            "nm": "barOne",
            "tt": 2,
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
                  737.606,
                  410.25,
                  0
                ],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [
                  737.606,
                  410.25,
                  0
                ],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 1,
                "k": [
                  {
                    "i": {
                      "x": [
                        0,
                        0.667,
                        0.667
                      ],
                      "y": [
                        1,
                        1,
                        1
                      ]
                    },
                    "o": {
                      "x": [
                        0.054,
                        0.333,
                        0.333
                      ],
                      "y": [
                        0,
                        0,
                        0
                      ]
                    },
                    "t": 15,
                    "s": [
                      0,
                      100,
                      100
                    ]
                  },
                  {
                    "t": 33,
                    "s": [
                      100,
                      100,
                      100
                    ]
                  }
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
                        1025,
                        100
                      ],
                      "ix": 2
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        1251,
                        411
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
                        0.972549019608,
                        0.163998457965,
                        0.163998457965,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\n$bm_rt = thisComp.layer('circleOne').content('circleOne').content('Fill 1').color;"
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
                        738,
                        411.5
                      ],
                      "ix": 2
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        738,
                        411.5
                      ],
                      "ix": 1
                    },
                    "s": {
                      "a": 0,
                      "k": [
                        100,
                        100
                      ],
                      "ix": 3,
                      "x": "var $bm_rt;\nvar x, y;\nx = thisComp.layer('.percentageOne #percentageOne').text.sourceText.split('%')[0];\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                "nm": "rectOne",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 0,
            "op": 125,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 7,
            "ty": 4,
            "nm": "circleOne",
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
                  679.8,
                  478.7,
                  0
                ],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [
                  679.8,
                  478.7,
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
                      "k": 1,
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
            "shapes": [
              {
                "ty": "gr",
                "it": [
                  {
                    "d": 1,
                    "ty": "el",
                    "s": {
                      "a": 0,
                      "k": [
                        135,
                        135
                      ],
                      "ix": 2
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        680.1,
                        410
                      ],
                      "ix": 3
                    },
                    "nm": "Ellipse Path 1",
                    "mn": "ADBE Vector Shape - Ellipse",
                    "hd": false
                  },
                  {
                    "ty": "fl",
                    "c": {
                      "a": 0,
                      "k": [
                        0.862745098039,
                        0.280815064673,
                        0.280815064673,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\nvar txt, barOneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.barColors #barColors').text.sourceText.split(',')[0];\nbarOneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(barOneColor);"
                    },
                    "o": {
                      "a": 1,
                      "k": [
                        {
                          "i": {
                            "x": [
                              0.833
                            ],
                            "y": [
                              0.833
                            ]
                          },
                          "o": {
                            "x": [
                              0.167
                            ],
                            "y": [
                              0.167
                            ]
                          },
                          "t": 1,
                          "s": [
                            0
                          ]
                        },
                        {
                          "t": 13,
                          "s": [
                            100
                          ]
                        }
                      ],
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
                        680,
                        442
                      ],
                      "ix": 2
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        680,
                        442
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
                "nm": "circleOne",
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
                          ],
                          [
                            0,
                            0
                          ]
                        ],
                        "v": [
                          [
                            -326.562,
                            -381.438
                          ],
                          [
                            -372.438,
                            -381.312
                          ],
                          [
                            -333.156,
                            -284.875
                          ],
                          [
                            -286.031,
                            -285
                          ]
                        ],
                        "c": true
                      },
                      "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
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
                    "ty": "rp",
                    "c": {
                      "a": 1,
                      "k": [
                        {
                          "i": {
                            "x": [
                              0
                            ],
                            "y": [
                              1
                            ]
                          },
                          "o": {
                            "x": [
                              0.106
                            ],
                            "y": [
                              0
                            ]
                          },
                          "t": 7,
                          "s": [
                            0
                          ]
                        },
                        {
                          "t": 23,
                          "s": [
                            17
                          ]
                        }
                      ],
                      "ix": 1
                    },
                    "o": {
                      "a": 0,
                      "k": 0,
                      "ix": 2
                    },
                    "m": 1,
                    "ix": 4,
                    "tr": {
                      "ty": "tr",
                      "p": {
                        "a": 0,
                        "k": [
                          57.9,
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
                        "ix": 4
                      },
                      "so": {
                        "a": 0,
                        "k": 100,
                        "ix": 5
                      },
                      "eo": {
                        "a": 0,
                        "k": 100,
                        "ix": 6
                      },
                      "nm": "Transform"
                    },
                    "nm": "Repeater 1",
                    "mn": "ADBE Vector Filter - Repeater",
                    "hd": false
                  },
                  {
                    "ty": "tr",
                    "p": {
                      "a": 0,
                      "k": [
                        1118.5,
                        744.25
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
                      "k": 25,
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
                "nm": "fullBarOne",
                "np": 4,
                "cix": 2,
                "bm": 0,
                "ix": 2,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 0,
            "op": 125,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 8,
            "ty": 5,
            "nm": ".percentageTwo #percentageTwo",
            "ln": "percentageTwo",
            "cl": "percentageTwo",
            "sr": 1,
            "ks": {
              "o": {
                "a": 1,
                "k": [
                  {
                    "i": {
                      "x": [
                        0.833
                      ],
                      "y": [
                        0.833
                      ]
                    },
                    "o": {
                      "x": [
                        0.167
                      ],
                      "y": [
                        0.167
                      ]
                    },
                    "t": 15,
                    "s": [
                      0
                    ]
                  },
                  {
                    "t": 25,
                    "s": [
                      100
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
                "a": 0,
                "k": [
                  680.1,
                  601,
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
                "l": 2,
                "x": "var $bm_rt;\nvar targetSize, realSize, x, x, y;\ntargetSize = 110;\nrealSize = thisLayer.sourceRectAtTime().width;\nif (realSize > targetSize) {\n    x = $bm_mul($bm_div(targetSize, realSize), 100);\n} else {\n    x = 100;\n}\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [
                  {
                    "s": {
                      "s": 60,
                      "f": "Scada-Bold",
                      "t": "45",
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
                ],
                "x": "var $bm_rt;\n$bm_rt = $bm_sum(text.sourceText, '%');"
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
            "ip": 12,
            "op": 137,
            "st": 12,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 9,
            "ty": 5,
            "nm": ".textTwo #textTwo",
            "ln": "textTwo",
            "cl": "textTwo",
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
                  594.975,
                  573,
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
                "l": 2,
                "x": "var $bm_rt;\nvar x, y;\nx = value[0];\ny = $bm_sum(thisLayer.sourceRectAtTime().top, $bm_div(thisLayer.sourceRectAtTime().height, 2));\n$bm_rt = [\n    x,\n    y\n];"
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
            "hasMask": true,
            "masksProperties": [
              {
                "inv": false,
                "mode": "a",
                "pt": {
                  "a": 1,
                  "k": [
                    {
                      "i": {
                        "x": 0,
                        "y": 1
                      },
                      "o": {
                        "x": 0.116,
                        "y": 0
                      },
                      "t": 13,
                      "s": [
                        {
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
                            ],
                            [
                              0,
                              0
                            ]
                          ],
                          "v": [
                            [
                              28.025,
                              -56.3
                            ],
                            [
                              19.025,
                              -56.3
                            ],
                            [
                              19.025,
                              81.7
                            ],
                            [
                              28.025,
                              81.7
                            ]
                          ],
                          "c": true
                        }
                      ]
                    },
                    {
                      "t": 57,
                      "s": [
                        {
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
                            ],
                            [
                              0,
                              0
                            ]
                          ],
                          "v": [
                            [
                              28.025,
                              -56.3
                            ],
                            [
                              -593.975,
                              -56.3
                            ],
                            [
                              -593.975,
                              81.7
                            ],
                            [
                              28.025,
                              81.7
                            ]
                          ],
                          "c": true
                        }
                      ]
                    }
                  ],
                  "ix": 1
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 3
                },
                "x": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "nm": "Mask 1"
              }
            ],
            "t": {
              "d": {
                "k": [
                  {
                    "s": {
                      "s": 55,
                      "f": "Scada-Bold",
                      "t": "text two",
                      "ca": 0,
                      "j": 1,
                      "tr": 0,
                      "lh": 66,
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
            "ip": 12,
            "op": 137,
            "st": 12,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 10,
            "ty": 4,
            "nm": "barTwoMatte",
            "td": 1,
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
                  992.75,
                  778,
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
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                      "a": 0,
                      "k": {
                        "i": [
                          [
                            -12.406,
                            -7.769
                          ],
                          [
                            46.5,
                            -37.25
                          ]
                        ],
                        "o": [
                          [
                            24.75,
                            15.5
                          ],
                          [
                            -24.834,
                            19.894
                          ]
                        ],
                        "v": [
                          [
                            -268,
                            -262.5
                          ],
                          [
                            -269,
                            -149
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
                        1,
                        1,
                        1,
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
                "nm": "Shape 1",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 12,
            "op": 137,
            "st": 12,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 11,
            "ty": 4,
            "nm": "barTwo",
            "tt": 2,
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
                  737.606,
                  572.35,
                  0
                ],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [
                  737.606,
                  410.25,
                  0
                ],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 1,
                "k": [
                  {
                    "i": {
                      "x": [
                        0,
                        0.667,
                        0.667
                      ],
                      "y": [
                        1,
                        1,
                        1
                      ]
                    },
                    "o": {
                      "x": [
                        0.054,
                        0.333,
                        0.333
                      ],
                      "y": [
                        0,
                        0,
                        0
                      ]
                    },
                    "t": 27,
                    "s": [
                      0,
                      100,
                      100
                    ]
                  },
                  {
                    "t": 45,
                    "s": [
                      100,
                      100,
                      100
                    ]
                  }
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
                        1025,
                        100
                      ],
                      "ix": 2
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        1251,
                        411
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
                        0.972549019608,
                        0.163998457965,
                        0.163998457965,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\n$bm_rt = thisComp.layer('circleTwo').content('circleTwo').content('Fill 1').color;"
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
                        738,
                        411.5
                      ],
                      "ix": 2
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        738,
                        411.5
                      ],
                      "ix": 1
                    },
                    "s": {
                      "a": 0,
                      "k": [
                        100,
                        100
                      ],
                      "ix": 3,
                      "x": "var $bm_rt;\nvar x, y;\nx = thisComp.layer('.percentageTwo #percentageTwo').text.sourceText.split('%')[0];\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                "nm": "rectThree",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 12,
            "op": 137,
            "st": 12,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 12,
            "ty": 4,
            "nm": "circleTwo",
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
                  679.8,
                  640.7,
                  0
                ],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [
                  679.8,
                  478.7,
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
                      "k": 1,
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
            "shapes": [
              {
                "ty": "gr",
                "it": [
                  {
                    "d": 1,
                    "ty": "el",
                    "s": {
                      "a": 0,
                      "k": [
                        135,
                        135
                      ],
                      "ix": 2
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        680.1,
                        410
                      ],
                      "ix": 3
                    },
                    "nm": "Ellipse Path 1",
                    "mn": "ADBE Vector Shape - Ellipse",
                    "hd": false
                  },
                  {
                    "ty": "fl",
                    "c": {
                      "a": 0,
                      "k": [
                        0.527279615402,
                        0.280815064907,
                        0.86274510622,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\nvar txt, barOneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.barColors #barColors').text.sourceText.split(',')[1];\nbarOneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(barOneColor);"
                    },
                    "o": {
                      "a": 1,
                      "k": [
                        {
                          "i": {
                            "x": [
                              0.833
                            ],
                            "y": [
                              0.833
                            ]
                          },
                          "o": {
                            "x": [
                              0.167
                            ],
                            "y": [
                              0.167
                            ]
                          },
                          "t": 13,
                          "s": [
                            0
                          ]
                        },
                        {
                          "t": 25,
                          "s": [
                            100
                          ]
                        }
                      ],
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
                        680,
                        442
                      ],
                      "ix": 2
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        680,
                        442
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
                "nm": "circleTwo",
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
                          ],
                          [
                            0,
                            0
                          ]
                        ],
                        "v": [
                          [
                            -326.562,
                            -381.438
                          ],
                          [
                            -372.438,
                            -381.312
                          ],
                          [
                            -333.156,
                            -284.875
                          ],
                          [
                            -286.031,
                            -285
                          ]
                        ],
                        "c": true
                      },
                      "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
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
                    "ty": "rp",
                    "c": {
                      "a": 1,
                      "k": [
                        {
                          "i": {
                            "x": [
                              0
                            ],
                            "y": [
                              1
                            ]
                          },
                          "o": {
                            "x": [
                              0.106
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
                          "t": 36,
                          "s": [
                            17
                          ]
                        }
                      ],
                      "ix": 1
                    },
                    "o": {
                      "a": 0,
                      "k": 0,
                      "ix": 2
                    },
                    "m": 1,
                    "ix": 4,
                    "tr": {
                      "ty": "tr",
                      "p": {
                        "a": 0,
                        "k": [
                          57.9,
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
                        "ix": 4
                      },
                      "so": {
                        "a": 0,
                        "k": 100,
                        "ix": 5
                      },
                      "eo": {
                        "a": 0,
                        "k": 100,
                        "ix": 6
                      },
                      "nm": "Transform"
                    },
                    "nm": "Repeater 1",
                    "mn": "ADBE Vector Filter - Repeater",
                    "hd": false
                  },
                  {
                    "ty": "tr",
                    "p": {
                      "a": 0,
                      "k": [
                        1118.5,
                        744.25
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
                      "k": 25,
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
                "nm": "fullBarTwo",
                "np": 4,
                "cix": 2,
                "bm": 0,
                "ix": 2,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 12,
            "op": 137,
            "st": 12,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 13,
            "ty": 5,
            "nm": ".percentageThree #percentageThree",
            "ln": "percentageThree",
            "cl": "percentageThree",
            "sr": 1,
            "ks": {
              "o": {
                "a": 1,
                "k": [
                  {
                    "i": {
                      "x": [
                        0.833
                      ],
                      "y": [
                        0.833
                      ]
                    },
                    "o": {
                      "x": [
                        0.167
                      ],
                      "y": [
                        0.167
                      ]
                    },
                    "t": 25,
                    "s": [
                      0
                    ]
                  },
                  {
                    "t": 35,
                    "s": [
                      100
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
                "a": 0,
                "k": [
                  680.1,
                  752,
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
                "l": 2,
                "x": "var $bm_rt;\nvar targetSize, realSize, x, x, y;\ntargetSize = 110;\nrealSize = thisLayer.sourceRectAtTime().width;\nif (realSize > targetSize) {\n    x = $bm_mul($bm_div(targetSize, realSize), 100);\n} else {\n    x = 100;\n}\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [
                  {
                    "s": {
                      "s": 60,
                      "f": "Scada-Bold",
                      "t": "67",
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
                ],
                "x": "var $bm_rt;\n$bm_rt = $bm_sum(text.sourceText, '%');"
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
            "ip": 22,
            "op": 147,
            "st": 22,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 14,
            "ty": 5,
            "nm": ".textThree #textThree",
            "ln": "textThree",
            "cl": "textThree",
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
                  594.975,
                  734,
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
                "l": 2,
                "x": "var $bm_rt;\nvar x, y;\nx = value[0];\ny = $bm_sum(thisLayer.sourceRectAtTime().top, $bm_div(thisLayer.sourceRectAtTime().height, 2));\n$bm_rt = [\n    x,\n    y\n];"
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
            "hasMask": true,
            "masksProperties": [
              {
                "inv": false,
                "mode": "a",
                "pt": {
                  "a": 1,
                  "k": [
                    {
                      "i": {
                        "x": 0,
                        "y": 1
                      },
                      "o": {
                        "x": 0.116,
                        "y": 0
                      },
                      "t": 23,
                      "s": [
                        {
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
                            ],
                            [
                              0,
                              0
                            ]
                          ],
                          "v": [
                            [
                              28.025,
                              -56.3
                            ],
                            [
                              19.025,
                              -56.3
                            ],
                            [
                              19.025,
                              81.7
                            ],
                            [
                              28.025,
                              81.7
                            ]
                          ],
                          "c": true
                        }
                      ]
                    },
                    {
                      "t": 67,
                      "s": [
                        {
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
                            ],
                            [
                              0,
                              0
                            ]
                          ],
                          "v": [
                            [
                              28.025,
                              -56.3
                            ],
                            [
                              -593.975,
                              -56.3
                            ],
                            [
                              -593.975,
                              81.7
                            ],
                            [
                              28.025,
                              81.7
                            ]
                          ],
                          "c": true
                        }
                      ]
                    }
                  ],
                  "ix": 1
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 3
                },
                "x": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "nm": "Mask 1"
              }
            ],
            "t": {
              "d": {
                "k": [
                  {
                    "s": {
                      "s": 55,
                      "f": "Scada-Bold",
                      "t": "text three",
                      "ca": 0,
                      "j": 1,
                      "tr": 0,
                      "lh": 66,
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
            "ip": 22,
            "op": 147,
            "st": 22,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 15,
            "ty": 4,
            "nm": "barThreeMatte",
            "td": 1,
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
                  992.75,
                  938,
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
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                      "a": 0,
                      "k": {
                        "i": [
                          [
                            -12.406,
                            -7.769
                          ],
                          [
                            46.5,
                            -37.25
                          ]
                        ],
                        "o": [
                          [
                            24.75,
                            15.5
                          ],
                          [
                            -24.834,
                            19.894
                          ]
                        ],
                        "v": [
                          [
                            -268,
                            -262.5
                          ],
                          [
                            -269,
                            -149
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
                        1,
                        1,
                        1,
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
                "nm": "Shape 1",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 22,
            "op": 147,
            "st": 22,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 16,
            "ty": 4,
            "nm": "barThree",
            "tt": 2,
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
                  737.606,
                  731.95,
                  0
                ],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [
                  737.606,
                  410.25,
                  0
                ],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 1,
                "k": [
                  {
                    "i": {
                      "x": [
                        0,
                        0.667,
                        0.667
                      ],
                      "y": [
                        1,
                        1,
                        1
                      ]
                    },
                    "o": {
                      "x": [
                        0.054,
                        0.333,
                        0.333
                      ],
                      "y": [
                        0,
                        0,
                        0
                      ]
                    },
                    "t": 37,
                    "s": [
                      0,
                      100,
                      100
                    ]
                  },
                  {
                    "t": 55,
                    "s": [
                      100,
                      100,
                      100
                    ]
                  }
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
                        1025,
                        100
                      ],
                      "ix": 2
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        1251,
                        411
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
                        0.972549019608,
                        0.163998457965,
                        0.163998457965,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\n$bm_rt = thisComp.layer('circleThree').content('circleThree').content('Fill 1').color;"
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
                        738,
                        411.5
                      ],
                      "ix": 2
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        738,
                        411.5
                      ],
                      "ix": 1
                    },
                    "s": {
                      "a": 0,
                      "k": [
                        100,
                        100
                      ],
                      "ix": 3,
                      "x": "var $bm_rt;\nvar x, y;\nx = thisComp.layer('.percentageThree #percentageThree').text.sourceText.split('%')[0];\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                "nm": "rectThree",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 22,
            "op": 147,
            "st": 22,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 17,
            "ty": 4,
            "nm": "circleThree",
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
                  679.8,
                  640.7,
                  0
                ],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [
                  679.8,
                  318.7,
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
                      "k": 1,
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
            "shapes": [
              {
                "ty": "gr",
                "it": [
                  {
                    "d": 1,
                    "ty": "el",
                    "s": {
                      "a": 0,
                      "k": [
                        135,
                        135
                      ],
                      "ix": 2
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        680.1,
                        410
                      ],
                      "ix": 3
                    },
                    "nm": "Ellipse Path 1",
                    "mn": "ADBE Vector Shape - Ellipse",
                    "hd": false
                  },
                  {
                    "ty": "fl",
                    "c": {
                      "a": 0,
                      "k": [
                        0.280815064907,
                        0.86274510622,
                        0.554664433002,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\nvar txt, barOneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.barColors #barColors').text.sourceText.split(',')[2];\nbarOneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(barOneColor);"
                    },
                    "o": {
                      "a": 1,
                      "k": [
                        {
                          "i": {
                            "x": [
                              0.833
                            ],
                            "y": [
                              0.833
                            ]
                          },
                          "o": {
                            "x": [
                              0.167
                            ],
                            "y": [
                              0.167
                            ]
                          },
                          "t": 23,
                          "s": [
                            0
                          ]
                        },
                        {
                          "t": 35,
                          "s": [
                            100
                          ]
                        }
                      ],
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
                        680,
                        442
                      ],
                      "ix": 2
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        680,
                        442
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
                "nm": "circleThree",
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
                          ],
                          [
                            0,
                            0
                          ]
                        ],
                        "v": [
                          [
                            -326.562,
                            -381.438
                          ],
                          [
                            -372.438,
                            -381.312
                          ],
                          [
                            -333.156,
                            -284.875
                          ],
                          [
                            -286.031,
                            -285
                          ]
                        ],
                        "c": true
                      },
                      "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
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
                    "ty": "rp",
                    "c": {
                      "a": 1,
                      "k": [
                        {
                          "i": {
                            "x": [
                              0
                            ],
                            "y": [
                              1
                            ]
                          },
                          "o": {
                            "x": [
                              0.106
                            ],
                            "y": [
                              0
                            ]
                          },
                          "t": 30,
                          "s": [
                            0
                          ]
                        },
                        {
                          "t": 46,
                          "s": [
                            17
                          ]
                        }
                      ],
                      "ix": 1
                    },
                    "o": {
                      "a": 0,
                      "k": 0,
                      "ix": 2
                    },
                    "m": 1,
                    "ix": 4,
                    "tr": {
                      "ty": "tr",
                      "p": {
                        "a": 0,
                        "k": [
                          57.9,
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
                        "ix": 4
                      },
                      "so": {
                        "a": 0,
                        "k": 100,
                        "ix": 5
                      },
                      "eo": {
                        "a": 0,
                        "k": 100,
                        "ix": 6
                      },
                      "nm": "Transform"
                    },
                    "nm": "Repeater 1",
                    "mn": "ADBE Vector Filter - Repeater",
                    "hd": false
                  },
                  {
                    "ty": "tr",
                    "p": {
                      "a": 0,
                      "k": [
                        1118.5,
                        744.25
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
                      "k": 25,
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
                "nm": "fullBarThree",
                "np": 4,
                "cix": 2,
                "bm": 0,
                "ix": 2,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 22,
            "op": 147,
            "st": 22,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 18,
            "ty": 5,
            "nm": ".percentageFour #percentageFour",
            "ln": "percentageFour",
            "cl": "percentageFour",
            "sr": 1,
            "ks": {
              "o": {
                "a": 1,
                "k": [
                  {
                    "i": {
                      "x": [
                        0.833
                      ],
                      "y": [
                        0.833
                      ]
                    },
                    "o": {
                      "x": [
                        0.167
                      ],
                      "y": [
                        0.167
                      ]
                    },
                    "t": 35,
                    "s": [
                      0
                    ]
                  },
                  {
                    "t": 45,
                    "s": [
                      100
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
                "a": 0,
                "k": [
                  680.1,
                  911,
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
                "l": 2,
                "x": "var $bm_rt;\nvar targetSize, realSize, x, x, y;\ntargetSize = 110;\nrealSize = thisLayer.sourceRectAtTime().width;\nif (realSize > targetSize) {\n    x = $bm_mul($bm_div(targetSize, realSize), 100);\n} else {\n    x = 100;\n}\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
              }
            },
            "ao": 0,
            "t": {
              "d": {
                "k": [
                  {
                    "s": {
                      "s": 60,
                      "f": "Scada-Bold",
                      "t": "34",
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
                ],
                "x": "var $bm_rt;\n$bm_rt = $bm_sum(text.sourceText, '%');"
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
            "ip": 32,
            "op": 157,
            "st": 32,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 19,
            "ty": 5,
            "nm": ".textFour #textFour",
            "ln": "textFour",
            "cl": "textFour",
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
                  593.975,
                  892.05,
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
                "l": 2,
                "x": "var $bm_rt;\nvar x, y;\nx = value[0];\ny = $bm_sum(thisLayer.sourceRectAtTime().top, $bm_div(thisLayer.sourceRectAtTime().height, 2));\n$bm_rt = [\n    x,\n    y\n];"
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
            "hasMask": true,
            "masksProperties": [
              {
                "inv": false,
                "mode": "a",
                "pt": {
                  "a": 1,
                  "k": [
                    {
                      "i": {
                        "x": 0,
                        "y": 1
                      },
                      "o": {
                        "x": 0.116,
                        "y": 0
                      },
                      "t": 33,
                      "s": [
                        {
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
                            ],
                            [
                              0,
                              0
                            ]
                          ],
                          "v": [
                            [
                              28.025,
                              -56.3
                            ],
                            [
                              19.025,
                              -56.3
                            ],
                            [
                              19.025,
                              81.7
                            ],
                            [
                              28.025,
                              81.7
                            ]
                          ],
                          "c": true
                        }
                      ]
                    },
                    {
                      "t": 77,
                      "s": [
                        {
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
                            ],
                            [
                              0,
                              0
                            ]
                          ],
                          "v": [
                            [
                              28.025,
                              -56.3
                            ],
                            [
                              -593.975,
                              -56.3
                            ],
                            [
                              -593.975,
                              81.7
                            ],
                            [
                              28.025,
                              81.7
                            ]
                          ],
                          "c": true
                        }
                      ]
                    }
                  ],
                  "ix": 1
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 3
                },
                "x": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "nm": "Mask 1"
              }
            ],
            "t": {
              "d": {
                "k": [
                  {
                    "s": {
                      "s": 55,
                      "f": "Scada-Bold",
                      "t": "text four",
                      "ca": 0,
                      "j": 1,
                      "tr": 0,
                      "lh": 66,
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
            "ip": 32,
            "op": 157,
            "st": 32,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 20,
            "ty": 4,
            "nm": "barFourMatte",
            "td": 1,
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
                  992.75,
                  1097,
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
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                      "a": 0,
                      "k": {
                        "i": [
                          [
                            -12.406,
                            -7.769
                          ],
                          [
                            46.5,
                            -37.25
                          ]
                        ],
                        "o": [
                          [
                            24.75,
                            15.5
                          ],
                          [
                            -24.834,
                            19.894
                          ]
                        ],
                        "v": [
                          [
                            -268,
                            -262.5
                          ],
                          [
                            -269,
                            -149
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
                        1,
                        1,
                        1,
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
                "nm": "Shape 1",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 32,
            "op": 157,
            "st": 32,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 21,
            "ty": 4,
            "nm": "barFour",
            "tt": 2,
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
                  737.606,
                  732.45,
                  0
                ],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [
                  737.606,
                  252.25,
                  0
                ],
                "ix": 1,
                "l": 2
              },
              "s": {
                "a": 1,
                "k": [
                  {
                    "i": {
                      "x": [
                        0,
                        0.667,
                        0.667
                      ],
                      "y": [
                        1,
                        1,
                        1
                      ]
                    },
                    "o": {
                      "x": [
                        0.054,
                        0.333,
                        0.333
                      ],
                      "y": [
                        0,
                        0,
                        0
                      ]
                    },
                    "t": 47,
                    "s": [
                      0,
                      100,
                      100
                    ]
                  },
                  {
                    "t": 65,
                    "s": [
                      100,
                      100,
                      100
                    ]
                  }
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
                        1025,
                        100
                      ],
                      "ix": 2
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        1251,
                        411
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
                        0.972549019608,
                        0.163998457965,
                        0.163998457965,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\n$bm_rt = thisComp.layer('circleFour').content('circleFour').content('Fill 1').color;"
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
                        738,
                        411.5
                      ],
                      "ix": 2
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        738,
                        411.5
                      ],
                      "ix": 1
                    },
                    "s": {
                      "a": 0,
                      "k": [
                        100,
                        100
                      ],
                      "ix": 3,
                      "x": "var $bm_rt;\nvar x, y;\nx = thisComp.layer('.percentageFour #percentageFour').text.sourceText.split('%')[0];\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                "nm": "rectFour",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 32,
            "op": 157,
            "st": 32,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 22,
            "ty": 4,
            "nm": "circleFour",
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
                  679.8,
                  798.9,
                  0
                ],
                "ix": 2,
                "l": 2
              },
              "a": {
                "a": 0,
                "k": [
                  679.8,
                  318.7,
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
                      "k": 1,
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
            "shapes": [
              {
                "ty": "gr",
                "it": [
                  {
                    "d": 1,
                    "ty": "el",
                    "s": {
                      "a": 0,
                      "k": [
                        135,
                        135
                      ],
                      "ix": 2
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        680.1,
                        410
                      ],
                      "ix": 3
                    },
                    "nm": "Ellipse Path 1",
                    "mn": "ADBE Vector Shape - Ellipse",
                    "hd": false
                  },
                  {
                    "ty": "fl",
                    "c": {
                      "a": 0,
                      "k": [
                        0.933333333333,
                        0.67406688017,
                        0.117124176025,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\nvar txt, barOneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.barColors #barColors').text.sourceText.split(',')[3];\nbarOneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(barOneColor);"
                    },
                    "o": {
                      "a": 1,
                      "k": [
                        {
                          "i": {
                            "x": [
                              0.833
                            ],
                            "y": [
                              0.833
                            ]
                          },
                          "o": {
                            "x": [
                              0.167
                            ],
                            "y": [
                              0.167
                            ]
                          },
                          "t": 33,
                          "s": [
                            0
                          ]
                        },
                        {
                          "t": 45,
                          "s": [
                            100
                          ]
                        }
                      ],
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
                        680,
                        442
                      ],
                      "ix": 2
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        680,
                        442
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
                "nm": "circleFour",
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
                          ],
                          [
                            0,
                            0
                          ]
                        ],
                        "v": [
                          [
                            -326.562,
                            -381.438
                          ],
                          [
                            -372.438,
                            -381.312
                          ],
                          [
                            -333.156,
                            -284.875
                          ],
                          [
                            -286.031,
                            -285
                          ]
                        ],
                        "c": true
                      },
                      "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
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
                    "ty": "rp",
                    "c": {
                      "a": 1,
                      "k": [
                        {
                          "i": {
                            "x": [
                              0
                            ],
                            "y": [
                              1
                            ]
                          },
                          "o": {
                            "x": [
                              0.106
                            ],
                            "y": [
                              0
                            ]
                          },
                          "t": 40,
                          "s": [
                            0
                          ]
                        },
                        {
                          "t": 56,
                          "s": [
                            17
                          ]
                        }
                      ],
                      "ix": 1
                    },
                    "o": {
                      "a": 0,
                      "k": 0,
                      "ix": 2
                    },
                    "m": 1,
                    "ix": 4,
                    "tr": {
                      "ty": "tr",
                      "p": {
                        "a": 0,
                        "k": [
                          57.9,
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
                        "ix": 4
                      },
                      "so": {
                        "a": 0,
                        "k": 100,
                        "ix": 5
                      },
                      "eo": {
                        "a": 0,
                        "k": 100,
                        "ix": 6
                      },
                      "nm": "Transform"
                    },
                    "nm": "Repeater 1",
                    "mn": "ADBE Vector Filter - Repeater",
                    "hd": false
                  },
                  {
                    "ty": "tr",
                    "p": {
                      "a": 0,
                      "k": [
                        1118.5,
                        744.25
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
                      "k": 25,
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
                "nm": "fullBarThree",
                "np": 4,
                "cix": 2,
                "bm": 0,
                "ix": 2,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 32,
            "op": 157,
            "st": 32,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 23,
            "ty": 5,
            "nm": ".barColors #barColors",
            "ln": "barColors",
            "cl": "barColors",
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
                  1540,
                  76,
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
                      "s": 45,
                      "f": "Scada-Bold",
                      "t": "DC4848,8648DC,48DC8D,EEAC1E",
                      "ca": 0,
                      "j": 2,
                      "tr": 0,
                      "lh": 54,
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
            "op": 125,
            "st": 0,
            "bm": 0
          }
        ]
      }
    ],
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
        // {
        //   "origin": 0,
        //   "fPath": "",
        //   "fClass": "",
        //   "fFamily": "Scada",
        //   "fWeight": "",
        //   "fStyle": "Bold",
        //   "fName": "Scada-Bold",
        //   "ascent": 69.9996948242188
        // }
      ]
    },
    "layers": [
      {
        "ddd": 0,
        "ind": 1,
        "ty": 1,
        "nm": "horMatte",
        "td": 1,
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
              0,
              0
            ],
            "ix": 2,
            "l": 2,
            "x": "var $bm_rt;\nvar x, y, y;\nx = value[0];\nif (thisComp.layer('horBarChartMainStitch').transform.position[1] > 1080) {\n    y = $bm_neg($bm_sum($bm_sub(thisComp.layer('horBarChartMainStitch').transform.position[1], 1080), 110));\n} else {\n    y = 0;\n}\n$bm_rt = [\n    x,\n    y\n];"
          },
          "a": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": 0.947,
                  "y": 1
                },
                "o": {
                  "x": 1,
                  "y": 0
                },
                "t": 101,
                "s": [
                  960,
                  0,
                  0
                ],
                "to": [
                  0,
                  187.333,
                  0
                ],
                "ti": [
                  0,
                  -187.333,
                  0
                ]
              },
              {
                "t": 120,
                "s": [
                  960,
                  1124,
                  0
                ]
              }
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
        "sw": 1920,
        "sh": 1080,
        "sc": "#e7ffff",
        "ip": 0,
        "op": 125,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 2,
        "ty": 0,
        "nm": "horBarChartMainStitch",
        "tt": 1,
        "refId": "comp_0",
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
              1080,
              0
            ],
            "ix": 2,
            "l": 2,
            "x": "var $bm_rt;\nvar percValFour, percValThree, percValTwo, y, y, y, y, x;\npercValFour = comp('horBarChartMainStitch').layer('.percentageFour #percentageFour').text.sourceText.split('%')[0];\npercValThree = comp('horBarChartMainStitch').layer('.percentageThree #percentageThree').text.sourceText.split('%')[0];\npercValTwo = comp('horBarChartMainStitch').layer('.percentageTwo #percentageTwo').text.sourceText.split('%')[0];\nif (percValFour == '0' && percValThree != '0' && percValTwo != '0')\n    y = 1160;\nelse if (percValThree == '0' && percValTwo != '0')\n    y = 1245;\nelse if (percValTwo == '0')\n    y = 1320;\nelse\n    y = value[1];\nx = value[0];\n$bm_rt = [\n    x,\n    y\n];"
          },
          "a": {
            "a": 0,
            "k": [
              960,
              1080,
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
        "w": 1920,
        "h": 1080,
        "ip": 0,
        "op": 125,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 3,
        "ty": 3,
        "nm": "Null 2",
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
              544,
              540,
              0
            ],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [
              0,
              50,
              0
            ],
            "ix": 1,
            "l": 2
          },
          "s": {
            "a": 0,
            "k": [
              100,
              391,
              100
            ],
            "ix": 6,
            "l": 2
          }
        },
        "ao": 0,
        "ip": 0,
        "op": 125,
        "st": 0,
        "bm": 0
      },
      {
        "ddd": 0,
        "ind": 4,
        "ty": 1,
        "nm": "semiTransBkg",
        "sr": 1,
        "ks": {
          "o": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": [
                    0.833
                  ],
                  "y": [
                    0.833
                  ]
                },
                "o": {
                  "x": [
                    0.167
                  ],
                  "y": [
                    0.167
                  ]
                },
                "t": 0,
                "s": [
                  0
                ]
              },
              {
                "i": {
                  "x": [
                    0.833
                  ],
                  "y": [
                    0.833
                  ]
                },
                "o": {
                  "x": [
                    0.167
                  ],
                  "y": [
                    0.167
                  ]
                },
                "t": 6,
                "s": [
                  40
                ]
              },
              {
                "i": {
                  "x": [
                    0.833
                  ],
                  "y": [
                    0.833
                  ]
                },
                "o": {
                  "x": [
                    0.167
                  ],
                  "y": [
                    0.167
                  ]
                },
                "t": 117,
                "s": [
                  40
                ]
              },
              {
                "t": 120,
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
            "a": 0,
            "k": [
              960,
              540,
              0
            ],
            "ix": 2,
            "l": 2
          },
          "a": {
            "a": 0,
            "k": [
              960,
              540,
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
        "sw": 1920,
        "sh": 1080,
        "sc": "#000000",
        "ip": 0,
        "op": 125,
        "st": 0,
        "bm": 0
      }
    ],
    "markers": [
      {
        "tm": 0,
        "cm": "{\r\n\"name\":\"animIn\"\r\n}",
        "dr": 70
      },
      {
        "tm": 71,
        "cm": "{\r\n\"name\":\"animIdle\"\r\n}",
        "dr": 27
      },
      {
        "tm": 100,
        "cm": "{\r\n\"name\":\"animOut\"\r\n}",
        "dr": 24
      }
    ]
  }
//{"v":"5.7.13","fr":25,"ip":0,"op":125,"w":1920,"h":1080,"nm":"horBarChart","ddd":0,"assets":[{"id":"comp_0","nm":"horBarChartMainStitch","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"titleMatte","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[462,150],"ix":2,"x":"var $bm_rt;\nvar x, y;\nx = thisComp.layer('.horBarChartTitle #horBarChartTitle').sourceRectAtTime().width;\ny = thisComp.layer('.horBarChartTitle #horBarChartTitle').sourceRectAtTime().height;\n$bm_rt = [\n    x,\n    y\n];"},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.282353001015,0.282353001015,0.282353001015,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2,"x":"var $bm_rt;\nvar x, y;\nx = thisComp.layer('.horBarChartTitle #horBarChartTitle').transform.position[0];\ny = thisComp.layer('.horBarChartTitle #horBarChartTitle').transform.position[1];\n$bm_rt = [\n    x,\n    y\n];"},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0,0.667],"y":[1,1]},"o":{"x":[0.058,0.333],"y":[0,0]},"t":0,"s":[0,120]},{"t":20,"s":[110,120]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"titleMatte","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":5,"nm":".horBarChartTitle #horBarChartTitle","ln":"horBarChartTitle","cl":"horBarChartTitle","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[920,182,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2,"x":"var $bm_rt;\nvar x, y;\nx = value[0];\ny = $bm_sum(thisLayer.sourceRectAtTime().top, $bm_div(thisLayer.sourceRectAtTime().height, 2)), $bm_rt = [\n    x,\n    y\n];"},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"t":{"d":{"k":[{"s":{"s":75,"f":"Scada-Bold","t":"Title goes here\rsecond line","ca":0,"j":2,"tr":0,"lh":90,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":5,"nm":".percentageOne #percentageOne","ln":"percentageOne","cl":"percentageOne","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":3,"s":[0]},{"t":13,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[680.1,428,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2,"x":"var $bm_rt;\nvar targetSize, realSize, x, x, y;\ntargetSize = 110;\nrealSize = thisLayer.sourceRectAtTime().width;\nif (realSize > targetSize) {\n    x = $bm_mul($bm_div(targetSize, realSize), 100);\n} else {\n    x = 100;\n}\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"}},"ao":0,"t":{"d":{"k":[{"s":{"s":60,"f":"Scada-Bold","t":"15","ca":0,"j":2,"tr":0,"lh":72,"ls":0,"fc":[1,1,1]},"t":0}],"x":"var $bm_rt;\n$bm_rt = $bm_sum(text.sourceText, '%');"},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":5,"nm":".textOne #textOne","ln":"textOne","cl":"textOne","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[593.975,410.05,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2,"x":"var $bm_rt;\nvar x, y;\nx = value[0];\ny = $bm_sum(thisLayer.sourceRectAtTime().top, $bm_div(thisLayer.sourceRectAtTime().height, 2));\n$bm_rt = [\n    x,\n    y\n];"},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.116,"y":0},"t":1,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.025,-56.3],[19.025,-56.3],[19.025,81.7],[28.025,81.7]],"c":true}]},{"t":45,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.025,-56.3],[-593.975,-56.3],[-593.975,81.7],[28.025,81.7]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"t":{"d":{"k":[{"s":{"s":55,"f":"Scada-Bold","t":"Text one","ca":0,"j":1,"tr":0,"lh":66,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"barOneMatte","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[992.75,616,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.406,-7.769],[46.5,-37.25]],"o":[[24.75,15.5],[-24.834,19.894]],"v":[[-268,-262.5],[-269,-149]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"barOne","tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[737.606,410.25,0],"ix":2,"l":2},"a":{"a":0,"k":[737.606,410.25,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.054,0.333,0.333],"y":[0,0,0]},"t":15,"s":[0,100,100]},{"t":33,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[1025,100],"ix":2},"p":{"a":0,"k":[1251,411],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.972549019608,0.163998457965,0.163998457965,1],"ix":4,"x":"var $bm_rt;\n$bm_rt = thisComp.layer('circleOne').content('circleOne').content('Fill 1').color;"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[738,411.5],"ix":2},"a":{"a":0,"k":[738,411.5],"ix":1},"s":{"a":0,"k":[100,100],"ix":3,"x":"var $bm_rt;\nvar x, y;\nx = thisComp.layer('.percentageOne #percentageOne').text.sourceText.split('%')[0];\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"rectOne","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"circleOne","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[679.8,478.7,0],"ix":2,"l":2},"a":{"a":0,"k":[679.8,478.7,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":28,"nm":"Set Matte","np":8,"mn":"ADBE Set Matte3","ix":1,"en":1,"ef":[{"ty":10,"nm":"Take Matte From Layer","mn":"ADBE Set Matte3-0001","ix":1,"v":{"a":0,"k":5,"ix":1}},{"ty":7,"nm":"Use For Matte","mn":"ADBE Set Matte3-0002","ix":2,"v":{"a":0,"k":4,"ix":2}},{"ty":7,"nm":"Invert Matte","mn":"ADBE Set Matte3-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":7,"nm":"If Layer Sizes Differ","mn":"ADBE Set Matte3-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Composite Matte with Original","mn":"ADBE Set Matte3-0005","ix":5,"v":{"a":0,"k":1,"ix":5}},{"ty":7,"nm":"Premultiply Matte Layer","mn":"ADBE Set Matte3-0006","ix":6,"v":{"a":0,"k":1,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[135,135],"ix":2},"p":{"a":0,"k":[680.1,410],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.862745098039,0.280815064673,0.280815064673,1],"ix":4,"x":"var $bm_rt;\nvar txt, barOneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.barColors #barColors').text.sourceText.split(',')[0];\nbarOneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(barOneColor);"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":1,"s":[0]},{"t":13,"s":[100]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[680,442],"ix":2},"a":{"a":0,"k":[680,442],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circleOne","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-326.562,-381.438],[-372.438,-381.312],[-333.156,-284.875],[-286.031,-285]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"rp","c":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.106],"y":[0]},"t":7,"s":[0]},{"t":23,"s":[17]}],"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":4,"tr":{"ty":"tr","p":{"a":0,"k":[57.9,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false},{"ty":"tr","p":{"a":0,"k":[1118.5,744.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":25,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"fullBarOne","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":5,"nm":".percentageTwo #percentageTwo","ln":"percentageTwo","cl":"percentageTwo","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[0]},{"t":25,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[680.1,601,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2,"x":"var $bm_rt;\nvar targetSize, realSize, x, x, y;\ntargetSize = 110;\nrealSize = thisLayer.sourceRectAtTime().width;\nif (realSize > targetSize) {\n    x = $bm_mul($bm_div(targetSize, realSize), 100);\n} else {\n    x = 100;\n}\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"}},"ao":0,"t":{"d":{"k":[{"s":{"s":60,"f":"Scada-Bold","t":"80","ca":0,"j":2,"tr":0,"lh":72,"ls":0,"fc":[1,1,1]},"t":0}],"x":"var $bm_rt;\n$bm_rt = $bm_sum(text.sourceText, '%');"},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":12,"op":137,"st":12,"bm":0},{"ddd":0,"ind":9,"ty":5,"nm":".textTwo #textTwo","ln":"textTwo","cl":"textTwo","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[594.975,573,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2,"x":"var $bm_rt;\nvar x, y;\nx = value[0];\ny = $bm_sum(thisLayer.sourceRectAtTime().top, $bm_div(thisLayer.sourceRectAtTime().height, 2));\n$bm_rt = [\n    x,\n    y\n];"},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.116,"y":0},"t":13,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.025,-56.3],[19.025,-56.3],[19.025,81.7],[28.025,81.7]],"c":true}]},{"t":57,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.025,-56.3],[-593.975,-56.3],[-593.975,81.7],[28.025,81.7]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"t":{"d":{"k":[{"s":{"s":55,"f":"Scada-Bold","t":"text two","ca":0,"j":1,"tr":0,"lh":66,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":12,"op":137,"st":12,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"barTwoMatte","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[992.75,778,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.406,-7.769],[46.5,-37.25]],"o":[[24.75,15.5],[-24.834,19.894]],"v":[[-268,-262.5],[-269,-149]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":12,"op":137,"st":12,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"barTwo","tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[737.606,572.35,0],"ix":2,"l":2},"a":{"a":0,"k":[737.606,410.25,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.054,0.333,0.333],"y":[0,0,0]},"t":27,"s":[0,100,100]},{"t":45,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[1025,100],"ix":2},"p":{"a":0,"k":[1251,411],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.972549019608,0.163998457965,0.163998457965,1],"ix":4,"x":"var $bm_rt;\n$bm_rt = thisComp.layer('circleTwo').content('circleTwo').content('Fill 1').color;"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[738,411.5],"ix":2},"a":{"a":0,"k":[738,411.5],"ix":1},"s":{"a":0,"k":[100,100],"ix":3,"x":"var $bm_rt;\nvar x, y;\nx = thisComp.layer('.percentageTwo #percentageTwo').text.sourceText.split('%')[0];\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"rectThree","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":12,"op":137,"st":12,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"circleTwo","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[679.8,640.7,0],"ix":2,"l":2},"a":{"a":0,"k":[679.8,478.7,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":28,"nm":"Set Matte","np":8,"mn":"ADBE Set Matte3","ix":1,"en":1,"ef":[{"ty":10,"nm":"Take Matte From Layer","mn":"ADBE Set Matte3-0001","ix":1,"v":{"a":0,"k":5,"ix":1}},{"ty":7,"nm":"Use For Matte","mn":"ADBE Set Matte3-0002","ix":2,"v":{"a":0,"k":4,"ix":2}},{"ty":7,"nm":"Invert Matte","mn":"ADBE Set Matte3-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":7,"nm":"If Layer Sizes Differ","mn":"ADBE Set Matte3-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Composite Matte with Original","mn":"ADBE Set Matte3-0005","ix":5,"v":{"a":0,"k":1,"ix":5}},{"ty":7,"nm":"Premultiply Matte Layer","mn":"ADBE Set Matte3-0006","ix":6,"v":{"a":0,"k":1,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[135,135],"ix":2},"p":{"a":0,"k":[680.1,410],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.527279615402,0.280815064907,0.86274510622,1],"ix":4,"x":"var $bm_rt;\nvar txt, barOneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.barColors #barColors').text.sourceText.split(',')[1];\nbarOneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(barOneColor);"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":13,"s":[0]},{"t":25,"s":[100]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[680,442],"ix":2},"a":{"a":0,"k":[680,442],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circleTwo","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-326.562,-381.438],[-372.438,-381.312],[-333.156,-284.875],[-286.031,-285]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"rp","c":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.106],"y":[0]},"t":20,"s":[0]},{"t":36,"s":[17]}],"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":4,"tr":{"ty":"tr","p":{"a":0,"k":[57.9,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false},{"ty":"tr","p":{"a":0,"k":[1118.5,744.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":25,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"fullBarTwo","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":12,"op":137,"st":12,"bm":0},{"ddd":0,"ind":13,"ty":5,"nm":".percentageThree #percentageThree","ln":"percentageThree","cl":"percentageThree","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[0]},{"t":35,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[680.1,752,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2,"x":"var $bm_rt;\nvar targetSize, realSize, x, x, y;\ntargetSize = 110;\nrealSize = thisLayer.sourceRectAtTime().width;\nif (realSize > targetSize) {\n    x = $bm_mul($bm_div(targetSize, realSize), 100);\n} else {\n    x = 100;\n}\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"}},"ao":0,"t":{"d":{"k":[{"s":{"s":60,"f":"Scada-Bold","t":"90","ca":0,"j":2,"tr":0,"lh":72,"ls":0,"fc":[1,1,1]},"t":0}],"x":"var $bm_rt;\n$bm_rt = $bm_sum(text.sourceText, '%');"},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":22,"op":147,"st":22,"bm":0},{"ddd":0,"ind":14,"ty":5,"nm":".textThree #textThree","ln":"textThree","cl":"textThree","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[594.975,734,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2,"x":"var $bm_rt;\nvar x, y;\nx = value[0];\ny = $bm_sum(thisLayer.sourceRectAtTime().top, $bm_div(thisLayer.sourceRectAtTime().height, 2));\n$bm_rt = [\n    x,\n    y\n];"},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.116,"y":0},"t":23,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.025,-56.3],[19.025,-56.3],[19.025,81.7],[28.025,81.7]],"c":true}]},{"t":67,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.025,-56.3],[-593.975,-56.3],[-593.975,81.7],[28.025,81.7]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"t":{"d":{"k":[{"s":{"s":55,"f":"Scada-Bold","t":"text three","ca":0,"j":1,"tr":0,"lh":66,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":22,"op":147,"st":22,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"barThreeMatte","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[992.75,938,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.406,-7.769],[46.5,-37.25]],"o":[[24.75,15.5],[-24.834,19.894]],"v":[[-268,-262.5],[-269,-149]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":22,"op":147,"st":22,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"barThree","tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[737.606,731.95,0],"ix":2,"l":2},"a":{"a":0,"k":[737.606,410.25,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.054,0.333,0.333],"y":[0,0,0]},"t":37,"s":[0,100,100]},{"t":55,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[1025,100],"ix":2},"p":{"a":0,"k":[1251,411],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.972549019608,0.163998457965,0.163998457965,1],"ix":4,"x":"var $bm_rt;\n$bm_rt = thisComp.layer('circleThree').content('circleThree').content('Fill 1').color;"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[738,411.5],"ix":2},"a":{"a":0,"k":[738,411.5],"ix":1},"s":{"a":0,"k":[100,100],"ix":3,"x":"var $bm_rt;\nvar x, y;\nx = thisComp.layer('.percentageThree #percentageThree').text.sourceText.split('%')[0];\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"rectThree","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":22,"op":147,"st":22,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"circleThree","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[679.8,640.7,0],"ix":2,"l":2},"a":{"a":0,"k":[679.8,318.7,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":28,"nm":"Set Matte","np":8,"mn":"ADBE Set Matte3","ix":1,"en":1,"ef":[{"ty":10,"nm":"Take Matte From Layer","mn":"ADBE Set Matte3-0001","ix":1,"v":{"a":0,"k":5,"ix":1}},{"ty":7,"nm":"Use For Matte","mn":"ADBE Set Matte3-0002","ix":2,"v":{"a":0,"k":4,"ix":2}},{"ty":7,"nm":"Invert Matte","mn":"ADBE Set Matte3-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":7,"nm":"If Layer Sizes Differ","mn":"ADBE Set Matte3-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Composite Matte with Original","mn":"ADBE Set Matte3-0005","ix":5,"v":{"a":0,"k":1,"ix":5}},{"ty":7,"nm":"Premultiply Matte Layer","mn":"ADBE Set Matte3-0006","ix":6,"v":{"a":0,"k":1,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[135,135],"ix":2},"p":{"a":0,"k":[680.1,410],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.280815064907,0.86274510622,0.554664433002,1],"ix":4,"x":"var $bm_rt;\nvar txt, barOneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.barColors #barColors').text.sourceText.split(',')[2];\nbarOneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(barOneColor);"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":23,"s":[0]},{"t":35,"s":[100]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[680,442],"ix":2},"a":{"a":0,"k":[680,442],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circleThree","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-326.562,-381.438],[-372.438,-381.312],[-333.156,-284.875],[-286.031,-285]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"rp","c":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.106],"y":[0]},"t":30,"s":[0]},{"t":46,"s":[17]}],"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":4,"tr":{"ty":"tr","p":{"a":0,"k":[57.9,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false},{"ty":"tr","p":{"a":0,"k":[1118.5,744.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":25,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"fullBarThree","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":22,"op":147,"st":22,"bm":0},{"ddd":0,"ind":18,"ty":5,"nm":".percentageFour #percentageFour","ln":"percentageFour","cl":"percentageFour","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":35,"s":[0]},{"t":45,"s":[100]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[680.1,911,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2,"x":"var $bm_rt;\nvar targetSize, realSize, x, x, y;\ntargetSize = 110;\nrealSize = thisLayer.sourceRectAtTime().width;\nif (realSize > targetSize) {\n    x = $bm_mul($bm_div(targetSize, realSize), 100);\n} else {\n    x = 100;\n}\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"}},"ao":0,"t":{"d":{"k":[{"s":{"s":60,"f":"Scada-Bold","t":"65","ca":0,"j":2,"tr":0,"lh":72,"ls":0,"fc":[1,1,1]},"t":0}],"x":"var $bm_rt;\n$bm_rt = $bm_sum(text.sourceText, '%');"},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":32,"op":157,"st":32,"bm":0},{"ddd":0,"ind":19,"ty":5,"nm":".textFour #textFour","ln":"textFour","cl":"textFour","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[593.975,892.05,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2,"x":"var $bm_rt;\nvar x, y;\nx = value[0];\ny = $bm_sum(thisLayer.sourceRectAtTime().top, $bm_div(thisLayer.sourceRectAtTime().height, 2));\n$bm_rt = [\n    x,\n    y\n];"},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"a","pt":{"a":1,"k":[{"i":{"x":0,"y":1},"o":{"x":0.116,"y":0},"t":33,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.025,-56.3],[19.025,-56.3],[19.025,81.7],[28.025,81.7]],"c":true}]},{"t":77,"s":[{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[28.025,-56.3],[-593.975,-56.3],[-593.975,81.7],[28.025,81.7]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"t":{"d":{"k":[{"s":{"s":55,"f":"Scada-Bold","t":"text four","ca":0,"j":1,"tr":0,"lh":66,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":32,"op":157,"st":32,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"barFourMatte","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[992.75,1097,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.406,-7.769],[46.5,-37.25]],"o":[[24.75,15.5],[-24.834,19.894]],"v":[[-268,-262.5],[-269,-149]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":10,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":32,"op":157,"st":32,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"barFour","tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[737.606,732.45,0],"ix":2,"l":2},"a":{"a":0,"k":[737.606,252.25,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.054,0.333,0.333],"y":[0,0,0]},"t":47,"s":[0,100,100]},{"t":65,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[1025,100],"ix":2},"p":{"a":0,"k":[1251,411],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.972549019608,0.163998457965,0.163998457965,1],"ix":4,"x":"var $bm_rt;\n$bm_rt = thisComp.layer('circleFour').content('circleFour').content('Fill 1').color;"},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[738,411.5],"ix":2},"a":{"a":0,"k":[738,411.5],"ix":1},"s":{"a":0,"k":[100,100],"ix":3,"x":"var $bm_rt;\nvar x, y;\nx = thisComp.layer('.percentageFour #percentageFour').text.sourceText.split('%')[0];\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"rectFour","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":32,"op":157,"st":32,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"circleFour","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[679.8,798.9,0],"ix":2,"l":2},"a":{"a":0,"k":[679.8,318.7,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":28,"nm":"Set Matte","np":8,"mn":"ADBE Set Matte3","ix":1,"en":1,"ef":[{"ty":10,"nm":"Take Matte From Layer","mn":"ADBE Set Matte3-0001","ix":1,"v":{"a":0,"k":5,"ix":1}},{"ty":7,"nm":"Use For Matte","mn":"ADBE Set Matte3-0002","ix":2,"v":{"a":0,"k":4,"ix":2}},{"ty":7,"nm":"Invert Matte","mn":"ADBE Set Matte3-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":7,"nm":"If Layer Sizes Differ","mn":"ADBE Set Matte3-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Composite Matte with Original","mn":"ADBE Set Matte3-0005","ix":5,"v":{"a":0,"k":1,"ix":5}},{"ty":7,"nm":"Premultiply Matte Layer","mn":"ADBE Set Matte3-0006","ix":6,"v":{"a":0,"k":1,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[135,135],"ix":2},"p":{"a":0,"k":[680.1,410],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.933333333333,0.67406688017,0.117124176025,1],"ix":4,"x":"var $bm_rt;\nvar txt, barOneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.barColors #barColors').text.sourceText.split(',')[3];\nbarOneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(barOneColor);"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":33,"s":[0]},{"t":45,"s":[100]}],"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[680,442],"ix":2},"a":{"a":0,"k":[680,442],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"circleFour","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[0,0]],"v":[[-326.562,-381.438],[-372.438,-381.312],[-333.156,-284.875],[-286.031,-285]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"rp","c":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.106],"y":[0]},"t":40,"s":[0]},{"t":56,"s":[17]}],"ix":1},"o":{"a":0,"k":0,"ix":2},"m":1,"ix":4,"tr":{"ty":"tr","p":{"a":0,"k":[57.9,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":4},"so":{"a":0,"k":100,"ix":5},"eo":{"a":0,"k":100,"ix":6},"nm":"Transform"},"nm":"Repeater 1","mn":"ADBE Vector Filter - Repeater","hd":false},{"ty":"tr","p":{"a":0,"k":[1118.5,744.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":25,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"fullBarThree","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":32,"op":157,"st":32,"bm":0},{"ddd":0,"ind":23,"ty":5,"nm":".barColors #barColors","ln":"barColors","cl":"barColors","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1540,76,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"t":{"d":{"k":[{"s":{"s":45,"f":"Scada-Bold","t":"DC4848,8648DC,48DC8D,EEAC1E","ca":0,"j":2,"tr":0,"lh":54,"ls":0,"fc":[1,1,1]},"t":0}]},"p":{},"m":{"g":1,"a":{"a":0,"k":[0,0],"ix":2}},"a":[]},"ip":0,"op":125,"st":0,"bm":0}]}],"fonts":{"list":[{"origin":0,"fPath":"","fClass":"","fFamily":"Scada","fWeight":"","fStyle":"Bold","fName":"Scada-Bold","ascent":69.9996948242188}]},"layers":[{"ddd":0,"ind":1,"ty":1,"nm":"horMatte","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,0,0],"ix":2,"l":2,"x":"var $bm_rt;\nvar x, y, y;\nx = value[0];\nif (thisComp.layer('horBarChartMainStitch').transform.position[1] > 1080) {\n    y = $bm_neg($bm_sum($bm_sub(thisComp.layer('horBarChartMainStitch').transform.position[1], 1080), 110));\n} else {\n    y = 0;\n}\n$bm_rt = [\n    x,\n    y\n];"},"a":{"a":1,"k":[{"i":{"x":0.947,"y":1},"o":{"x":1,"y":0},"t":101,"s":[960,0,0],"to":[0,187.333,0],"ti":[0,-187.333,0]},{"t":120,"s":[960,1124,0]}],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"sw":1920,"sh":1080,"sc":"#e7ffff","ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":0,"nm":"horBarChartMainStitch","tt":1,"refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,1080,0],"ix":2,"l":2,"x":"var $bm_rt;\nvar percValFour, percValThree, percValTwo, y, y, y, y, x;\npercValFour = comp('horBarChartMainStitch').layer('.percentageFour #percentageFour').text.sourceText.split('%')[0];\npercValThree = comp('horBarChartMainStitch').layer('.percentageThree #percentageThree').text.sourceText.split('%')[0];\npercValTwo = comp('horBarChartMainStitch').layer('.percentageTwo #percentageTwo').text.sourceText.split('%')[0];\nif (percValFour == '' && percValThree != '' && percValTwo != '')\n    y = 1160;\nelse if (percValThree == '' && percValTwo != '')\n    y = 1245;\nelse if (percValTwo == '')\n    y = 1320;\nelse\n    y = value[1];\nx = value[0];\n$bm_rt = [\n    x,\n    y\n];"},"a":{"a":0,"k":[960,1080,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":1920,"h":1080,"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"Null 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[544,540,0],"ix":2,"l":2},"a":{"a":0,"k":[0,50,0],"ix":1,"l":2},"s":{"a":0,"k":[100,391,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":125,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":1,"nm":"semiTransBkg","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":6,"s":[40]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":117,"s":[40]},{"t":120,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[960,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"sw":1920,"sh":1080,"sc":"#000000","ip":0,"op":125,"st":0,"bm":0}],"markers":[{"tm":0,"cm":"{\r\n\"name\":\"animIn\"\r\n}","dr":70},{"tm":71,"cm":"{\r\n\"name\":\"animIdle\"\r\n}","dr":27},{"tm":100,"cm":"{\r\n\"name\":\"animOut\"\r\n}","dr":24}]}