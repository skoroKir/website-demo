var sportFtblSPScoreAnim =
{
    "v": "5.7.13",
    "fr": 25,
    "ip": 0,
    "op": 76,
    "w": 1920,
    "h": 1080,
    "nm": "footballScoreTile",
    "ddd": 0,
    "assets": [
      {
        "id": "comp_0",
        "nm": "footballScoreTileMainStitch",
        "layers": [
          {
            "ddd": 0,
            "ind": 1,
            "ty": 5,
            "nm": ".teamOne #teamOne",
            "ln": "teamOne",
            "cl": "teamOne",
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
                  152,
                  128,
                  0
                ],
                "ix": 2,
                "l": 2,
                "x": "var $bm_rt;\nvar scoresWidth, scoresPosX, teamOneNameWidth, team2NameWidth, posXTeamOneMove, x, y;\nscoresWidth = thisComp.layer('.scoresBoth #scoresBoth').sourceRectAtTime().width;\nscoresPosX = thisComp.layer('.scoresBoth #scoresBoth').transform.position[0];\nteamOneNameWidth = thisLayer.sourceRectAtTime().width;\nteam2NameWidth = thisComp.layer('.teamTwo #teamTwo').sourceRectAtTime().width;\nposXTeamOneMove = Math.max(teamOneNameWidth, team2NameWidth);\nx = $bm_sub($bm_sub($bm_sub(scoresPosX, $bm_div(scoresWidth, 2)), $bm_div(posXTeamOneMove, 2)), 25);\ny = $bm_sum(thisComp.layer('.scoresBoth #scoresBoth').transform.position[1], 15);\n$bm_rt = [\n    x,\n    y\n];"
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
                      "f": "Barlow Condensed",
                      "t": "DDD",
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
            "op": 125,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 2,
            "ty": 5,
            "nm": ".score1 #score1",
            "ln": "score1",
            "cl": "score1",
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
                  222,
                  150,
                  0
                ],
                "ix": 2,
                "l": 2,
                "x": "var $bm_rt;\nvar x, y;\nx = $bm_sub(thisComp.layer('.scoresBoth #scoresBoth').transform.position[0], 15);\ny = $bm_sum(thisComp.layer('.scoresBoth #scoresBoth').transform.position[1], 15);\n$bm_rt = [\n    x,\n    y\n];"
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
                      "f": "Barlow Condensed",
                      "t": "6",
                      "ca": 0,
                      "j": 1,
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
          },
          {
            "ddd": 0,
            "ind": 3,
            "ty": 5,
            "nm": ".teamTwo #teamTwo",
            "ln": "teamTwo",
            "cl": "teamTwo",
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
                  442,
                  125,
                  0
                ],
                "ix": 2,
                "l": 2,
                "x": "var $bm_rt;\nvar scoresWidth, scoresPosX, teamTwoNameWidth, team1NameWidth, posXTeamTwoMove, x, y;\nscoresWidth = thisComp.layer('.scoresBoth #scoresBoth').sourceRectAtTime().width;\nscoresPosX = thisComp.layer('.scoresBoth #scoresBoth').transform.position[0];\nteamTwoNameWidth = thisLayer.sourceRectAtTime().width;\nteam1NameWidth = thisComp.layer('.teamOne #teamOne').sourceRectAtTime().width;\nposXTeamTwoMove = Math.max(teamTwoNameWidth, team1NameWidth);\nx = $bm_sum($bm_sum($bm_sum(scoresPosX, $bm_div(scoresWidth, 2)), $bm_div(posXTeamTwoMove, 2)), 25);\ny = $bm_sum(thisComp.layer('.scoresBoth #scoresBoth').transform.position[1], 15);\n$bm_rt = [\n    x,\n    y\n];"
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
                      "t": "JJJ",
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
            "op": 125,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 4,
            "ty": 5,
            "nm": ".score2 #score2",
            "ln": "score2",
            "cl": "score2",
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
                  256,
                  150,
                  0
                ],
                "ix": 2,
                "l": 2,
                "x": "var $bm_rt;\nvar x, y;\nx = $bm_sum(thisComp.layer('.scoresBoth #scoresBoth').transform.position[0], 15);\ny = $bm_sum(thisComp.layer('.scoresBoth #scoresBoth').transform.position[1], 15);\n$bm_rt = [\n    x,\n    y\n];"
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
                      "t": "5",
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
          },
          {
            "ddd": 0,
            "ind": 5,
            "ty": 5,
            "nm": ".scoresBoth #scoresBoth",
            "ln": "scoresBoth",
            "cl": "scoresBoth",
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
                  309.5,
                  109.5,
                  0
                ],
                "ix": 2,
                "l": 2,
                "x": "var $bm_rt;\nvar x, y;\nx = 310;\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
              },
              "a": {
                "a": 0,
                "k": [
                  0,
                  -16.5,
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
                      "f": "Barlow Condensed-Bold",
                      "t": "-",
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
                ],
                "x": "var $bm_rt;\n$bm_rt = $bm_sum($bm_sum(thisComp.layer('.score1 #score1').text.sourceText, ' - '), thisComp.layer('.score2 #score2').text.sourceText);"
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
            "ind": 6,
            "ty": 4,
            "nm": "scoreBkg",
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
                        137.941,
                        70
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar addition, x, y;\naddition = 30;\nx = $bm_sum(thisComp.layer('.scoresBoth #scoresBoth').sourceRectAtTime().width, addition);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                      "k": 5,
                      "ix": 5
                    },
                    "lc": 1,
                    "lj": 1,
                    "ml": 4,
                    "bm": 0,
                    "nm": "Stroke 1",
                    "mn": "ADBE Vector Graphic - Stroke",
                    "hd": true
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
                      "ix": 2,
                      "x": "var $bm_rt;\nvar scoreTextWidthCorr, x, y;\nscoreTextWidthCorr = $bm_div($bm_sub(thisComp.layer('.score1 #score1').sourceRectAtTime().width, thisComp.layer('.score2 #score2').sourceRectAtTime().width), 2);\nx = thisComp.layer('.scoresBoth #scoresBoth').transform.position[0];\ny = thisComp.layer('.scoresBoth #scoresBoth').transform.position[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                        154,
                        68
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar teamOneBkgWidth, x, y;\nteamOneBkgWidth = Math.max(thisComp.layer('.teamOne #teamOne').sourceRectAtTime().width, thisComp.layer('.teamTwo #teamTwo').sourceRectAtTime().width);\nx = $bm_sum(teamOneBkgWidth, 25);\ny = content('scoreUnderlay').content('Rectangle Path 1').size[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                      "k": 5,
                      "ix": 5
                    },
                    "lc": 1,
                    "lj": 1,
                    "ml": 4,
                    "bm": 0,
                    "nm": "Stroke 1",
                    "mn": "ADBE Vector Graphic - Stroke",
                    "hd": true
                  },
                  {
                    "ty": "fl",
                    "c": {
                      "a": 0,
                      "k": [
                        0.247058823705,
                        0.529411792755,
                        0.360784322023,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\nvar txt, team1OneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.teamColors #teamColors').text.sourceText.split(',')[0];\nteam1OneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(team1OneColor);"
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
                        266,
                        109.5
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar x, y;\nx = $bm_sum($bm_sub(content('scoreUnderlay').transform.position[0], $bm_div(content('scoreUnderlay').content('Rectangle Path 1').size[0], 2)), 5);\ny = content('scoreUnderlay').transform.position[1];\n$bm_rt = [\n    x,\n    y\n];"
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        0,
                        0
                      ],
                      "ix": 1,
                      "x": "var $bm_rt;\nvar x, y;\nx = $bm_div(content('teamOneUnderlay').content('Rectangle Path 1').size[0], 2);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                        154,
                        68
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\n$bm_rt = content('teamOneUnderlay').content('Rectangle Path 1').size;"
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
                      "k": 5,
                      "ix": 5
                    },
                    "lc": 1,
                    "lj": 1,
                    "ml": 4,
                    "bm": 0,
                    "nm": "Stroke 1",
                    "mn": "ADBE Vector Graphic - Stroke",
                    "hd": true
                  },
                  {
                    "ty": "fl",
                    "c": {
                      "a": 0,
                      "k": [
                        0.86274510622,
                        0.580392181873,
                        0.070588238537,
                        1
                      ],
                      "ix": 4,
                      "x": "var $bm_rt;\nvar txt, team1OneColor;\nfunction hexToColor(theHex) {\n    var r = theHex >> 16;\n    var g = (theHex & 65280) >> 8;\n    var b = theHex & 255;\n    return [\n        r / 255,\n        g / 255,\n        b / 255,\n        1\n    ];\n}\ntxt = thisComp.layer('.teamColors #teamColors').text.sourceText.split(',')[1];\nteam1OneColor = parseInt(txt, 16);\n$bm_rt = hexToColor(team1OneColor);"
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
                        266,
                        109.5
                      ],
                      "ix": 2,
                      "x": "var $bm_rt;\nvar x, y;\nx = $bm_sub($bm_sum(content('scoreUnderlay').transform.position[0], $bm_div(content('scoreUnderlay').content('Rectangle Path 1').size[0], 2)), 5);\ny = content('scoreUnderlay').transform.position[1];\n$bm_rt = [\n    x,\n    y\n];"
                    },
                    "a": {
                      "a": 0,
                      "k": [
                        0,
                        0
                      ],
                      "ix": 1,
                      "x": "var $bm_rt;\nvar x, y;\nx = $bm_div($bm_neg(content('teamTwoUnderlay').content('Rectangle Path 1').size[0]), 2);\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
            "op": 125,
            "st": 0,
            "bm": 0
          },
          {
            "ddd": 0,
            "ind": 7,
            "ty": 5,
            "nm": ".startTime #startTime",
            "ln": "startTime",
            "cl": "startTime",
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
                  987,
                  129,
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
                      "t": "12:40",
                      "ca": 0,
                      "j": 0,
                      "tr": 0,
                      "lh": 54,
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
          },
          {
            "ddd": 0,
            "ind": 8,
            "ty": 5,
            "nm": ".timingTile #timingText",
            "ln": "timingText",
            "cl": "timingTile",
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
                  239.14,
                  186.25,
                  0
                ],
                "ix": 2,
                "l": 2,
                "x": "var $bm_rt;\nvar x, y;\nx = 310;\ny = value[1];\n$bm_rt = [\n    x,\n    y\n];"
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
                      "t": "sample",
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
                ],
                "x": "var $bm_rt;\nvar D, startHour, startMinutes, startSeconds, elapsedMin, elapsedSec, elapsedSecCorr, elapsedSecCorr, elapsedTime;\nD = new Date(Date(0));\nstartHour = thisComp.layer('.startTime #startTime').text.sourceText.split(':')[0];\nstartMinutes = thisComp.layer('.startTime #startTime').text.sourceText.split(':')[1];\nstartSeconds = 0;\nelapsedMin = $bm_sum($bm_mul($bm_sub(D.getHours(), startHour), 60), $bm_sub(D.getMinutes(), startMinutes));\nelapsedSec = $bm_sub(D.getSeconds(), startSeconds);\nif (elapsedSec < 10) {\n    elapsedSecCorr = $bm_sum('0', elapsedSec);\n} else {\n    elapsedSecCorr = elapsedSec;\n}\n$bm_rt = elapsedTime = $bm_sum($bm_sum(elapsedMin, ':'), elapsedSecCorr);"
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
            "ind": 9,
            "ty": 4,
            "nm": ".timingTile #timingBgr",
            "ln": "timingBgr",
            "cl": "timingTile",
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
                  8,
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
                        171.951,
                        50
                      ],
                      "ix": 2
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
                    "hd": true
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
                        305,
                        169.5
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
                "nm": "Rectangle 1",
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
            "ind": 10,
            "ty": 5,
            "nm": ".teamColors #teamColors",
            "ln": "teamColors",
            "cl": "teamColors",
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
          {
            "origin": 0,
            "fPath": "",
            "fClass": "",
            "fFamily": "Barlow Condensed",
            "fWeight": "",
            "fStyle": "Bold",
            "fName": "Barlow Condensed-Bold",
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
        "nm": "footballScoreTileMainStitch",
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
                    "x": 0.833,
                    "y": 0.833
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
                          310.75,
                          50.25
                        ],
                        [
                          310.75,
                          50.25
                        ],
                        [
                          310.75,
                          217
                        ],
                        [
                          310.75,
                          217
                        ]
                      ],
                      "c": true
                    }
                  ]
                },
                {
                  "i": {
                    "x": 0.833,
                    "y": 1
                  },
                  "o": {
                    "x": 0.167,
                    "y": 0.167
                  },
                  "t": 20,
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
                          314.474,
                          50.25
                        ],
                        [
                          90.25,
                          50.25
                        ],
                        [
                          90.25,
                          217
                        ],
                        [
                          314.474,
                          217
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
                          314.474,
                          50.25
                        ],
                        [
                          90.25,
                          50.25
                        ],
                        [
                          90.25,
                          217
                        ],
                        [
                          314.474,
                          217
                        ]
                      ],
                      "c": true
                    }
                  ]
                },
                {
                  "t": 74,
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
                          310.75,
                          50.25
                        ],
                        [
                          310.75,
                          50.25
                        ],
                        [
                          310.75,
                          217
                        ],
                        [
                          310.75,
                          217
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
                    "x": 0.833,
                    "y": 0.833
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
                          310.75,
                          50.25
                        ],
                        [
                          310.75,
                          50.25
                        ],
                        [
                          310.75,
                          217
                        ],
                        [
                          310.75,
                          217
                        ]
                      ],
                      "c": true
                    }
                  ]
                },
                {
                  "i": {
                    "x": 0.833,
                    "y": 1
                  },
                  "o": {
                    "x": 0.167,
                    "y": 0.167
                  },
                  "t": 20,
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
                          307.418,
                          50.25
                        ],
                        [
                          555.162,
                          50.25
                        ],
                        [
                          555.162,
                          217
                        ],
                        [
                          307.418,
                          217
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
                          307.418,
                          50.25
                        ],
                        [
                          555.162,
                          50.25
                        ],
                        [
                          555.162,
                          217
                        ],
                        [
                          307.418,
                          217
                        ]
                      ],
                      "c": true
                    }
                  ]
                },
                {
                  "t": 74,
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
                          310.75,
                          50.25
                        ],
                        [
                          310.75,
                          50.25
                        ],
                        [
                          310.75,
                          217
                        ],
                        [
                          310.75,
                          217
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
    "markers": [
      {
        "tm": 0,
        "cm": "{\r\n\"name\":\"animIn\"\r\n}",
        "dr": 20
      },
      {
        "tm": 25,
        "cm": "{\r\n\"name\":\"animIdle\"\r\n}",
        "dr": 20
      },
      {
        "tm": 55,
        "cm": "{\r\n\"name\":\"animOut\"\r\n}",
        "dr": 20
      }
    ]
  }