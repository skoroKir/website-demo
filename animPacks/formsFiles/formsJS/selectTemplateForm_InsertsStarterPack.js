var selectTemplate = {
    "schema": {
      "template": {
        "type": "string",
        "title": "Select your graphic",
        // "enum": ["Score", "Game event","Substitution"],
        "enum": ["Quote", "Pie chart", "Compare graph"]
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