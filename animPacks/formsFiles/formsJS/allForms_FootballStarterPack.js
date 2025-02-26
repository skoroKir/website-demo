var openerForm_FootballStarterPack = 
{
  "schema": {
    "openerArr": {
      "type": 'array',
      "title": 'Football match opening',
      "items": {
        "type": 'object',
        "title": 'Football match details',
        "properties": {
          "leagueName": {
            "type": 'string',
            "title": 'leagueName'
          },
          "matchDate": {
            "type": 'string',
            "title": 'matchDate'
          },
          "teamOne": {
            "type": 'string',
            "title": 'teamOne'
          },
          "teamTwo": {
            "type": 'string',
            "title": 'teamTwo'
          },
          "venue": {
            "type": 'string',
            "title": 'venue'
          },
        }
      }
    }
  },
  "form": [
    {
      "type": 'tabarray',
      "htmlClass": "openerForm",
      "items": [
        {              
          "type": 'section',
          "title": 'Football Match {{idx}}',
          "items": [
            {
              "htmlClass": "openerForm",
              "id": "OpenerForm0",
              "key": 'openerArr[].leagueName',
              "title": 'League Name',
              "placeholder": "Enter a league name",
            },
            {
              "htmlClass": "openerForm",
              "id": "OpenerForm1",
              "key": 'openerArr[].matchDate',
              "title": 'Date of the game',
              "placeholder": "Enter the game date",
            },
            {
             "htmlClass": "openerForm",
             "id": "OpenerForm2",
             "key": 'openerArr[].teamOne',
             "title": 'Team one',
             "placeholder": "Enter the team one name",
            },
            {
              "htmlClass": "openerForm",
              "id": "OpenerForm3",
              "key": 'openerArr[].teamTwo',
              "title": 'Team two',
              "placeholder": "Enter the team two name",
            },
            {
             "htmlClass": "openerForm",
             "id": "OpenerForm3",
             "key": 'openerArr[].venue',
             "title": 'Venue',
             "placeholder": "Where is this game played?",
            },
            
          ]
        }
      ]
    }
  ]
}


var scoreForm_FootballStarterPack = 
{
  "schema": {
    "scoreArr": {
      "type": 'array',
      "title": 'score details',
      "items": {
        "type": 'object',
        "title": 'Score details',
        "properties": {
          "textInput": {
            "type": 'string',
            "title": 'textInput'
          },
          "scoreInput": {
            "type": "integer",
            "title": "score",
            "default": 0
            },
        }
      }
    }
  },

  "form": [
    {
      "type": "tabarray",
      "htmlClass": "scoreForm",
      "id": "scoreForm0",

      "items": [
        {              
          "type": 'section',
          "title": 'Score {{idx}}',
          "items": [
            {
              "id": "scoreForm1",
              "key": 'scoreArr[].textInput',
              "title": 'Team one name',
              "placeholder": "enter the short name",
            },
            {
              "id": "scoreForm2",
              "key": 'scoreArr[].scoreInput',
              "title": 'Team one score',
            },
            {
              "id": "scoreForm3",
              "key": 'scoreArr[].textInput',
              "title": 'Team two name',
              "placeholder": "second team short name",
            },
            {
              "id": "scoreForm4",
              "key": 'scoreArr[].scoreInput',
              "title": 'Team two score',
            },
            {
              "id": "scoreForm5",
              "key": 'scoreArr[].textInput',
              "title": 'Time the game started',
              "placeholder": "enter the time in HH:MM format",
            },
          ]
        }
      ]
    }
  ]
}


var gameeventForm_FootballStarterPack =
{
  "schema": {
    "gameEvent": {
      "type": "array",
      "items": {
        "type": 'object',
        "title": 'Game event details',
        "properties": {
          "textInput": {
            "type": 'string',
            "title": 'textInput'
          },
          "score": {
            "type": "integer",
            "title": "score",
            "default": 0
            },
          "teamScored": {
            "type": 'string',
            "title": 'teamScored',
            "enum": [ "team1", "team2"]
          },
        }
      }
    }
  },

  "form": [
    {
      "type": "tabarray",
      "htmlClass": "gameeventForm",
      "id": "gameeventForm0",  
      // "draggable": "true",
      "items": [{
        "htmlClass": "gameeventForm",
        "type" : "section",
        "title": "Game event {{idx}}",
        "items":[
          {
          "htmlMetaData":{
            "title": "Team one name goes here",
            // "style":"border: 1px solid blue",
            "data-title":"Something"
          },
          // "htmlClass": "gameeventForm",
          "id": "gameeventForm0",
          "key": "gameEvent[].textInput",
          "title": "Team one name",
          "fieldHtmlClass": "gameEventInput", //adds class to the input field itself
          "placeholder": "Host team name",
          },
          {
            // "htmlClass": "gameeventForm",
            "id": "gameeventForm1",
            "key": 'gameEvent[].score',
            "title": 'Team one score',
          },
          {
            // "htmlClass": "gameeventForm",
            "id": "gameeventForm2",
            "key": 'gameEvent[].textInput',
            "title": 'Team two name',
            "placeholder": "Enter guest team name",
          },
          {
            // "htmlClass": "gameeventForm",
            "id": "gameeventForm3",
            "key": 'gameEvent[].score',
            "title": 'Team two score',
          },
          {
            "htmlMetaData":{
              "title": "Who scored or got a card?",
              // "style":"border: 1px solid blue",
              "data-title":"help text"
            },
            // "htmlClass": "gameeventForm",
            "id": "gameeventForm4",
            "key": 'gameEvent[].textInput',
            "title": 'Player\'s name',
            "placeholder": "Enter playes\'s name",
          },
          {
            // "htmlClass": "gameeventForm",
            "id": "gameeventForm5",
            "key": 'gameEvent[].teamScored',
            "title": "Team scored",
            "titleMap": {
              "team1": "team1",
              "team2": "team2",
            }
          },
          {
            "htmlMetaData":{
              "title": "What happened? Goal, card, etc...",
              // "style":"border: 1px solid blue",
              "data-title":"help text"
            },
            // "htmlClass": "gameeventForm",
            "id": "gameeventForm6",
            "key": 'gameEvent[].textInput',
            "title": 'Goal or card?',
            "placeholder": "Was it a goal or a card?",
          },

        
        ]
      }]
    },
    
  ]  
}

var substitutionForm_FootballStarterPack = 
{
  "schema": {
    "subArr": {
      "type": 'array',
      "title": 'substitution details',
      "items": {
        "type": 'object',
        "title": 'sub details',
        "properties": {
          "textInput": {
            "type": 'string',
            "title": 'textInput'
          },
          "playerNum": {
            "type": "integer",
            "title": "playerNum",
            "default": 1
            },
          "teamSubbed": {
            "type": 'string',
            "title": 'teamSubbed',
            "enum": [ "team1", "team2"]
          },
        }
      }
    }
  },

  "form": [
    {
      "type": "tabarray",
      "htmlClass": "substitutionForm",
      "id": "substitutionForm0",

      "items": [
        {              
          "type": 'section',
          "title": 'Sub {{idx}}',
          "items": [
            {
              "id": "substitutionForm1",
              "key": 'subArr[].textInput',
              "title": 'Player going out',
              "placeholder": "Player\'s name",
            },
            {
              "id": "substitutionForm2",
              "key": 'subArr[].playerNum',
              "title": 'Player\'s number',
            },
            {
              "id": "substitutionForm3",
              "key": 'subArr[].textInput',
              "title": 'Player coming in',
              "placeholder": "Player\'s name",
            },
            {
              "id": "substitutionForm4",
              "key": 'subArr[].playerNum',
              "title": 'Player\'s number',
            },
            {
              "id": "substitutionForm5",
              "key": 'subArr[].textInput',
              "title": 'Team name',
              "placeholder": "Enter the team name",
            },
            {
              "id": "substitutionForm6",
              "key": 'subArr[].teamSubbed',
              "title": 'Team which made the sub',
              "titleMap": {
                "team1": "team1",
                "team2": "team2",
              }
            },
          ]
        }
      ]
    }
  ]
}
