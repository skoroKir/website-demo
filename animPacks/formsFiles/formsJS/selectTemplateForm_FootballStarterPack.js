var selectTemplate = {
    "schema": {
      "template": {
        "type": "string",
        "title": "Select your graphics",
        "enum": ["Score", "Game event","Substitution"],
        // "enum": ["Opener", "Score", "Game event","Substitution"]
      }
    },
    "form": [
      {
        "key": "template",
        "notitle": true,
        "id": "templateSelect",
        "htmlClass": "templateSelect",
      }
    ]
  }