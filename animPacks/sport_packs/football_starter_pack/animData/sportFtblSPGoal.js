var sportFtblSPGoalAnim =
{
    "v": "5.7.13",
    "fr": 25,
    "ip": 0,
    "op": 76,
    "w": 1920,
    "h": 1080,
    "nm": "footballGoalEvt",
    "ddd": 0,
    "assets": [
      {
        "id": "comp_0",
        "nm": "footballGoalEvtMainStitch",
        "layers": [
          {
            "ddd": 0,
            "ind": 1,
            "ty": 5,
            "nm": ".teamOneName #teamOneName",
            "ln": "teamOneName",
            "cl": "teamOneName",
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
                  740,
                  794,
                  0
                ],
                "ix": 2,
                "l": 2,
                "x": "var $bm_rt;\nvar teamOneTextShift, x, y;\nteamOneTextShift = Math.max(thisLayer.sourceRectAtTime().width, thisComp.layer('.teamTwoName #teamTwoName').sourceRectAtTime().width);\nx = $bm_sub($bm_sub($bm_sub(thisComp.layer('.totalScore #totalScore').transform.position[0], $bm_div(thisComp.layer('.totalScore #totalScore').sourceRectAtTime().width, 2)), $bm_div(teamOneTextShift, 2)), 30);\ny = thisComp.layer('.totalScore #totalScore').transform.position[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                      "s": 65,
                      "f": "Scada-Bold",
                      "t": "teamOne",
                      "ca": 0,
                      "j": 2,
                      "tr": 0,
                      "lh": 78,
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
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 2,
            "ty": 5,
            "nm": ".teamOneGoals #teamOneGoals",
            "ln": "teamOneGoals",
            "cl": "teamOneGoals",
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
                  776,
                  452,
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
                      "t": "1",
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
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 3,
            "ty": 5,
            "nm": ".teamTwoName #teamTwoName",
            "ln": "teamTwoName",
            "cl": "teamTwoName",
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
                  1214,
                  798,
                  0
                ],
                "ix": 2,
                "l": 2,
                "x": "var $bm_rt;\nvar teamTwoTextShift, x, y;\nteamTwoTextShift = Math.max(thisLayer.sourceRectAtTime().width, thisComp.layer('.teamOneName #teamOneName').sourceRectAtTime().width);\nx = $bm_sum($bm_sum($bm_sum(thisComp.layer('.totalScore #totalScore').transform.position[0], $bm_div(thisComp.layer('.totalScore #totalScore').sourceRectAtTime().width, 2)), $bm_div(teamTwoTextShift, 2)), 30);\ny = thisComp.layer('.totalScore #totalScore').transform.position[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                      "s": 65,
                      "f": "Scada-Bold",
                      "t": "team2",
                      "ca": 0,
                      "j": 2,
                      "tr": 0,
                      "lh": 78,
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
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 4,
            "ty": 5,
            "nm": ".teamTwoGoals #teamTwoGoals",
            "ln": "teamTwoGoals",
            "cl": "teamTwoGoals",
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
                  868,
                  452,
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
                      "t": "2",
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
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 5,
            "ty": 5,
            "nm": ".scorerSource .scorerSource ",
            "cl": "scorerSource scorerSource",
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
                  206,
                  410,
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
                      "s": 40,
                      "f": "Scada-Bold",
                      "t": "Name here",
                      "ca": 0,
                      "j": 2,
                      "tr": 0,
                      "lh": 48,
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
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 6,
            "ty": 5,
            "nm": ".scoringTeam #scoringTeam",
            "ln": "scoringTeam",
            "cl": "scoringTeam",
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
                  254,
                  500,
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
                      "s": 46,
                      "f": "Scada-Bold",
                      "t": "team1",
                      "ca": 0,
                      "j": 2,
                      "tr": 0,
                      "lh": 55.2,
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
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 7,
            "ty": 5,
            "nm": ".totalScore #totalScore",
            "ln": "totalScore",
            "cl": "totalScore",
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
                  960.7,
                  816,
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
                      "s": 65,
                      "f": "Scada-Bold",
                      "t": "\r",
                      "ca": 0,
                      "j": 2,
                      "tr": 0,
                      "lh": 78,
                      "ls": 0,
                      "fc": [
                        0,
                        0,
                        0
                      ]
                    },
                    "t": 0
                  }
                ],
                "x": "var $bm_rt;\n$bm_rt = $bm_sum($bm_sum(thisComp.layer('.teamOneGoals #teamOneGoals').text.sourceText, '-'), thisComp.layer('.teamTwoGoals #teamTwoGoals').text.sourceText);"
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
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 8,
            "ty": 4,
            "nm": "totalScoreBKG",
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
                        214.699,
                        99
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar totalScoreWidth, addX, x, y;\ntotalScoreWidth = thisComp.layer('.totalScore #totalScore').sourceRectAtTime().width;\naddX = 30;\nx = $bm_sum(totalScoreWidth, addX);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        0,
                        0
                      ],
                      "ix": 3,
                      "x": "var $bm_rt;\nvar x, y;\nx = thisComp.layer('.totalScore #totalScore').transform.position[0];\ny = $bm_sub(thisComp.layer('.totalScore #totalScore').transform.position[1], 25);\n$bm_rt = [\n    x,\n    y\n];"
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
                "nm": "scoreUnderlay",
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
                        214.699,
                        99
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar teamsMaxWidth, addX, x, y;\nteamsMaxWidth = Math.max(thisComp.layer('.teamOneName #teamOneName').sourceRectAtTime().width, thisComp.layer('.teamTwoName #teamTwoName').sourceRectAtTime().width);\naddX = 40;\nx = $bm_sum(teamsMaxWidth, addX);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        0,
                        0
                      ],
                      "ix": 3,
                      "x": "var $bm_rt;\nvar teamsMaxWidth, x, y;\nteamsMaxWidth = Math.max(thisComp.layer('.teamOneName #teamOneName').sourceRectAtTime().width, thisComp.layer('.teamTwoName #teamTwoName').sourceRectAtTime().width);\nx = $bm_sub($bm_sub($bm_sub(thisComp.layer('.totalScore #totalScore').transform.position[0], $bm_div(thisComp.layer('.totalScore #totalScore').sourceRectAtTime().width, 2)), $bm_div(teamsMaxWidth, 2)), 30);\ny = content('scoreUnderlay').content('Rectangle Path 1').position[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                        0.388235294118,
                        0.309803921569,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\nvar txt, team1OneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.teamsColors #teamsColors').text.sourceText.split(',')[0];\nteam1OneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(team1OneColor);"
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
                "nm": "teamOneUnderlay",
                "np": 3,
                "cix": 2,
                "bm": 0,
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
                        214.699,
                        99
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar teamsMaxWidth, addX, x, y;\nteamsMaxWidth = Math.max(thisComp.layer('.teamOneName #teamOneName').sourceRectAtTime().width, thisComp.layer('.teamTwoName #teamTwoName').sourceRectAtTime().width);\naddX = 40;\nx = $bm_sum(teamsMaxWidth, addX);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        0,
                        0
                      ],
                      "ix": 3,
                      "x": "var $bm_rt;\nvar teamsMaxWidth, x, y;\nteamsMaxWidth = Math.max(thisComp.layer('.teamOneName #teamOneName').sourceRectAtTime().width, thisComp.layer('.teamTwoName #teamTwoName').sourceRectAtTime().width);\nx = $bm_sum($bm_sum($bm_sum(thisComp.layer('.totalScore #totalScore').transform.position[0], $bm_div(thisComp.layer('.totalScore #totalScore').sourceRectAtTime().width, 2)), $bm_div(teamsMaxWidth, 2)), 30);\ny = content('scoreUnderlay').content('Rectangle Path 1').position[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                        0.337254901961,
                        0.219607843137,
                        0.666666666667,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\nvar txt, team1OneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.teamsColors #teamsColors').text.sourceText.split(',')[1];\nteam1OneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(team1OneColor);"
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
                "nm": "teamTwoUnderlay",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 3,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 0,
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 9,
            "ty": 5,
            "nm": ".teamOneScorer #teamOneScorer",
            "ln": "teamOneScorer",
            "cl": "teamOneScorer",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\nif (thisComp.layer('.scoringTeam #scoringTeam').text.sourceText != 'team1' || thisComp.layer('.scorerSource .scorerSource ').text.sourceText == '') {\n    $bm_rt = 0;\n} else {\n    $bm_rt = 100;\n}"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [
                  740,
                  730,
                  0
                ],
                "ix": 2,
                "l": 2,
                "x": "var $bm_rt;\nvar x, y;\nx = $bm_sub($bm_sub($bm_sub(thisComp.layer('.totalScore #totalScore').transform.position[0], $bm_div(thisComp.layer('.totalScore #totalScore').sourceRectAtTime().width, 2)), $bm_div(thisLayer.sourceRectAtTime().width, 2)), 30);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                      "f": "Scada-Bold",
                      "t": "Ronaldo",
                      "ca": 0,
                      "j": 2,
                      "tr": 0,
                      "lh": 48,
                      "ls": 0,
                      "fc": [
                        0,
                        0,
                        0
                      ]
                    },
                    "t": 0
                  }
                ],
                "x": "var $bm_rt;\nif (thisComp.layer('.scoringTeam #scoringTeam').text.sourceText == 'team1') {\n    $bm_rt = thisComp.layer('.scorerSource .scorerSource ').text.sourceText;\n} else {\n    $bm_rt = '';\n}"
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
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 10,
            "ty": 4,
            "nm": "scorerOneBKG",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\n$bm_rt = thisComp.layer('.teamOneScorer #teamOneScorer').transform.opacity;"
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
                      "x": 0.833,
                      "y": 0.833
                    },
                    "o": {
                      "x": 0.167,
                      "y": 0.167
                    },
                    "t": 16,
                    "s": [
                      0,
                      50,
                      0
                    ],
                    "to": [
                      0,
                      -8.333,
                      0
                    ],
                    "ti": [
                      0,
                      8.333,
                      0
                    ]
                  },
                  {
                    "i": {
                      "x": 0.833,
                      "y": 0.833
                    },
                    "o": {
                      "x": 0.167,
                      "y": 0.167
                    },
                    "t": 20,
                    "s": [
                      0,
                      0,
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
                      "y": 0.833
                    },
                    "o": {
                      "x": 0.167,
                      "y": 0.167
                    },
                    "t": 50,
                    "s": [
                      0,
                      0,
                      0
                    ],
                    "to": [
                      0,
                      8.333,
                      0
                    ],
                    "ti": [
                      0,
                      -8.333,
                      0
                    ]
                  },
                  {
                    "t": 54,
                    "s": [
                      0,
                      50,
                      0
                    ]
                  }
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
                        99.759,
                        46
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar x, y;\nx = $bm_sum(thisComp.layer('.teamOneScorer #teamOneScorer').sourceRectAtTime().width, 30);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                        0.80387543323,
                        0.843502508425,
                        0.847058823529,
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
                        718
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar x, y;\nx = $bm_sub($bm_sub(thisComp.layer('.totalScore #totalScore').transform.position[0], $bm_div(thisComp.layer('.totalScore #totalScore').sourceRectAtTime().width, 2)), 15);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        0,
                        0
                      ],
                      "ix": 1,
                      "x": "var $bm_rt;\nvar x, y;\nx = $bm_div(content('scorerOneUnderlay').content('Rectangle Path 1').size[0], 2);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                              1.036,
                              1
                            ]
                          },
                          "o": {
                            "x": [
                              0.085,
                              0.333
                            ],
                            "y": [
                              0,
                              0
                            ]
                          },
                          "t": 20,
                          "s": [
                            3,
                            100
                          ]
                        },
                        {
                          "i": {
                            "x": [
                              0,
                              0.667
                            ],
                            "y": [
                              4.489,
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
                          "t": 30,
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
                          "t": 40,
                          "s": [
                            100,
                            100
                          ]
                        },
                        {
                          "t": 50,
                          "s": [
                            3,
                            100
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
                "nm": "scorerOneUnderlay",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 0,
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 11,
            "ty": 5,
            "nm": ".teamTwoScorer #teamTwoScorer",
            "ln": "teamTwoScorer",
            "cl": "teamTwoScorer",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\nif (thisComp.layer('.scoringTeam #scoringTeam').text.sourceText != 'team2' || thisComp.layer('.scorerSource .scorerSource ').text.sourceText == '') {\n    $bm_rt = 0;\n} else {\n    $bm_rt = 100;\n}"
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [
                  740,
                  730,
                  0
                ],
                "ix": 2,
                "l": 2,
                "x": "var $bm_rt;\nvar x, y;\nx = $bm_sum($bm_sum($bm_sum(thisComp.layer('.totalScore #totalScore').transform.position[0], $bm_div(thisComp.layer('.totalScore #totalScore').sourceRectAtTime().width, 2)), $bm_div(thisLayer.sourceRectAtTime().width, 2)), 30);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                      "k": 12,
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
                      "f": "Scada-Bold",
                      "t": "Neymar",
                      "ca": 0,
                      "j": 2,
                      "tr": 0,
                      "lh": 48,
                      "ls": 0,
                      "fc": [
                        0,
                        0,
                        0
                      ]
                    },
                    "t": 0
                  }
                ],
                "x": "var $bm_rt;\nif (thisComp.layer('.scoringTeam #scoringTeam').text.sourceText == 'team2') {\n    $bm_rt = thisComp.layer('.scorerSource .scorerSource ').text.sourceText;\n} else {\n    $bm_rt = '';\n}"
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
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 12,
            "ty": 4,
            "nm": "scorerTwoBKG",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11,
                "x": "var $bm_rt;\n$bm_rt = thisComp.layer('.teamTwoScorer #teamTwoScorer').transform.opacity;"
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
                      "x": 0.833,
                      "y": 0.833
                    },
                    "o": {
                      "x": 0.167,
                      "y": 0.167
                    },
                    "t": 16,
                    "s": [
                      0,
                      50,
                      0
                    ],
                    "to": [
                      0,
                      -8.333,
                      0
                    ],
                    "ti": [
                      0,
                      8.333,
                      0
                    ]
                  },
                  {
                    "i": {
                      "x": 0.833,
                      "y": 0.833
                    },
                    "o": {
                      "x": 0.167,
                      "y": 0.167
                    },
                    "t": 20,
                    "s": [
                      0,
                      0,
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
                      "y": 0.833
                    },
                    "o": {
                      "x": 0.167,
                      "y": 0.167
                    },
                    "t": 50,
                    "s": [
                      0,
                      0,
                      0
                    ],
                    "to": [
                      0,
                      8.333,
                      0
                    ],
                    "ti": [
                      0,
                      -8.333,
                      0
                    ]
                  },
                  {
                    "t": 54,
                    "s": [
                      0,
                      50,
                      0
                    ]
                  }
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
                        99.759,
                        46
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar x, y;\nx = $bm_sum(thisComp.layer('.teamTwoScorer #teamTwoScorer').sourceRectAtTime().width, 30);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                        0.803921568627,
                        0.843137254902,
                        0.847058823529,
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
                        718
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar x, y;\nx = $bm_sum($bm_sum(thisComp.layer('.totalScore #totalScore').transform.position[0], $bm_div(thisComp.layer('.totalScore #totalScore').sourceRectAtTime().width, 2)), 15);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        0,
                        0
                      ],
                      "ix": 1,
                      "x": "var $bm_rt;\nvar x, y;\nx = $bm_div($bm_neg(content('scorerTwoUnderlay').content('Rectangle Path 1').size[0]), 2);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                              0.063,
                              0.333
                            ],
                            "y": [
                              0,
                              0
                            ]
                          },
                          "t": 20,
                          "s": [
                            3,
                            100
                          ]
                        },
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
                              0.167,
                              0.167
                            ],
                            "y": [
                              0,
                              0
                            ]
                          },
                          "t": 30,
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
                          "t": 40,
                          "s": [
                            100,
                            100
                          ]
                        },
                        {
                          "t": 50,
                          "s": [
                            3,
                            100
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
                "nm": "scorerTwoUnderlay",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 0,
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 13,
            "ty": 5,
            "nm": ".event #event",
            "ln": "event",
            "cl": "event",
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
                  910,
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
                      "k": 14,
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
                      "s": 65,
                      "f": "Scada-Bold",
                      "t": "GOAL",
                      "ca": 0,
                      "j": 2,
                      "tr": 0,
                      "lh": 78,
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
                "x": "var $bm_rt;\n$bm_rt = text.sourceText;"
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
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 14,
            "ty": 4,
            "nm": "eventBKG",
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
                        195.181,
                        90
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar totalScoreWidth, addX, x, y;\ntotalScoreWidth = thisComp.layer('.event #event').sourceRectAtTime().width;\naddX = 30;\nx = $bm_sum(totalScoreWidth, addX);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
                    },
                    "p": {
                      "a": 0,
                      "k": [
                        0,
                        0
                      ],
                      "ix": 3,
                      "x": "var $bm_rt;\nvar x, y;\nx = thisComp.layer('.event #event').transform.position[0];\ny = $bm_sub(thisComp.layer('.event #event').transform.position[1], 25);\n$bm_rt = [\n    x,\n    y\n];"
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
                        0.164705882353,
                        0.137254901961,
                        0.137254901961,
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
                      "a": 1,
                      "k": [
                        {
                          "i": {
                            "x": 0,
                            "y": 1
                          },
                          "o": {
                            "x": 0.078,
                            "y": 0
                          },
                          "t": 10,
                          "s": [
                            0,
                            -95
                          ],
                          "to": [
                            0,
                            15.833
                          ],
                          "ti": [
                            0,
                            -15.833
                          ]
                        },
                        {
                          "i": {
                            "x": 0,
                            "y": 0
                          },
                          "o": {
                            "x": 0.167,
                            "y": 0.167
                          },
                          "t": 20,
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
                            "x": 0.833,
                            "y": 1
                          },
                          "o": {
                            "x": 0.167,
                            "y": 0
                          },
                          "t": 50,
                          "s": [
                            0,
                            0
                          ],
                          "to": [
                            0,
                            -15.833
                          ],
                          "ti": [
                            0,
                            15.833
                          ]
                        },
                        {
                          "t": 60,
                          "s": [
                            0,
                            -95
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
                      "a": 0,
                      "k": 100,
                      "ix": 7,
                      "x": "var $bm_rt;\nif (thisComp.layer('.event #event').text.sourceText == '') {\n    $bm_rt = 0;\n} else {\n    $bm_rt = 100;\n}"
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
                "nm": "eventUnderlay",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
              }
            ],
            "ip": 0,
            "op": 76,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 15,
            "ty": 5,
            "nm": ".teamsColors #teamsColors",
            "ln": "teamsColors",
            "cl": "teamsColors",
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
                  1104,
                  276,
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
        //   {
        //     "origin": 0,
        //     "fPath": "",
        //     "fClass": "",
        //     "fFamily": "Scada",
        //     "fWeight": "",
        //     "fStyle": "Bold",
        //     "fName": "Scada-Bold",
        //     "ascent": 69.9996948242188
        //     }
          
        ]
      },
    "layers": [
      {
        "ddd": 0,
        "ind": 1,
        "ty": 0,
        "nm": "footballGoalEvtMainStitch",
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
                    "x": 0.667,
                    "y": 1
                  },
                  "o": {
                    "x": 0.333,
                    "y": 0
                  },
                  "t": 0,
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
                          960,
                          650
                        ],
                        [
                          960,
                          650
                        ],
                        [
                          960,
                          982
                        ],
                        [
                          960,
                          982
                        ]
                      ],
                      "c": true
                    }
                  ]
                },
                {
                  "i": {
                    "x": 0.667,
                    "y": 1
                  },
                  "o": {
                    "x": 0.167,
                    "y": 0
                  },
                  "t": 25,
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
                          960,
                          650
                        ],
                        [
                          -4,
                          650
                        ],
                        [
                          -4,
                          982
                        ],
                        [
                          960,
                          982
                        ]
                      ],
                      "c": true
                    }
                  ]
                },
                {
                  "i": {
                    "x": 0.667,
                    "y": 1
                  },
                  "o": {
                    "x": 0.167,
                    "y": 0
                  },
                  "t": 50,
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
                          960,
                          650
                        ],
                        [
                          -4,
                          650
                        ],
                        [
                          -4,
                          982
                        ],
                        [
                          960,
                          982
                        ]
                      ],
                      "c": true
                    }
                  ]
                },
                {
                  "t": 75,
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
                          960,
                          650
                        ],
                        [
                          960,
                          650
                        ],
                        [
                          960,
                          982
                        ],
                        [
                          960,
                          982
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
          },
          {
            "inv": false,
            "mode": "a",
            "pt": {
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
                  "t": 0,
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
                          960,
                          650
                        ],
                        [
                          960,
                          650
                        ],
                        [
                          960,
                          982
                        ],
                        [
                          960,
                          982
                        ]
                      ],
                      "c": true
                    }
                  ]
                },
                {
                  "i": {
                    "x": 0.667,
                    "y": 1
                  },
                  "o": {
                    "x": 0.167,
                    "y": 0
                  },
                  "t": 25,
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
                          960,
                          650
                        ],
                        [
                          1922,
                          650
                        ],
                        [
                          1922,
                          982
                        ],
                        [
                          960,
                          982
                        ]
                      ],
                      "c": true
                    }
                  ]
                },
                {
                  "i": {
                    "x": 0.667,
                    "y": 1
                  },
                  "o": {
                    "x": 0.167,
                    "y": 0
                  },
                  "t": 50,
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
                          960,
                          650
                        ],
                        [
                          1922,
                          650
                        ],
                        [
                          1922,
                          982
                        ],
                        [
                          960,
                          982
                        ]
                      ],
                      "c": true
                    }
                  ]
                },
                {
                  "t": 75,
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
                          960,
                          650
                        ],
                        [
                          960,
                          650
                        ],
                        [
                          960,
                          982
                        ],
                        [
                          960,
                          982
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
            "nm": "Mask 2"
          }
        ],
        "w": 1920,
        "h": 1080,
        "ip": 0,
        "op": 76,
        "st": 0,
        "bm": 0
      }
    ],
    "markers": []
  }