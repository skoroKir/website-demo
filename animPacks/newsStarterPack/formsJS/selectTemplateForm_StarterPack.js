var selectTemplate = {
    "schema": {
      "template": {
        "type": "string",
        //"title": "Select your caption type",
        "enum": ["Speaker", "Attribution", "Place","Header"]
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