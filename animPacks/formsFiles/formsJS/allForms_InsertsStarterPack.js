var quoteForm_InsertsStarterPack = 
{
  "schema": {
    "quoteArr": {
      "type": 'array',
      "title": 'Insert quote arr',
      "items": {
        "type": 'object',
        "title": 'Insert quote items',
        "properties": {
          "multiLineText": {
            "type": 'string',
            "title": 'noTitle'
          },
          "maincolor1": {
            "type": "string",
            "title": "Main color1",
            "format": "color",
            "default": "#d41e91"
          },
        }
      }
    }
  },

  "form": [
    {
      "type": "tabarray",
      "htmlClass": "quoteForm",
      "id": "quoteForm0",

      "items": [
        {              
          "type": 'section',
          "title": 'Quote {{idx}}',
          "items": [
            {
              "id": "quoteForm1",
              "key": 'quoteArr[].multiLineText',
              "title": "Quote text",
              "type": "textarea",
              "height": "160px",
              "width": "300px",
              "placeholder": "Type your quote text here",
              "htmlMetaData":{
                "title": "Use 'Enter' to make precise line breaks",
                // "style":"word-wrap: break-word; white-space: pre-wrap; border: 1px solid blue;",
                "data-title":"help text"
              },

            },
            {
              "id": "quoteForm1_1",
              "key": "quoteArr[].multiLineText",
              "title": "Who said that?",
              "type": "textarea",
              "height": "70px",
              "width": "300px",
              "placeholder": "Name goes here",
            },

            {
              "id": "color01",
              "fieldHtmlClass": "quotecolor01",
              "key": "quoteArr[].maincolor1",
              "title": "Your color",
              
            }, 

            {
              "type": "button",
              "title": "speaker's image",
              "htmlClass": "js-open-uploaderInsertQuote_1",
              // "fieldHtmlClass": "js-open-uploader_3",
            //   "onClick": function () {
            //     window.uploader.button = 'img_3';
            //     uploaderHandle.classList.add('uploader_active')
            // }
            },

            {
              "type": "button",
              "title": "background img",
              "htmlClass": "js-open-uploaderInsertQuote_2",
              // "fieldHtmlClass": "js-open-uploader_3",
            //   "onClick": function () {
            //     window.uploader.button = 'img_3';
            //     uploaderHandle.classList.add('uploader_active')
            //}
              "htmlMetaData":{
                //"title": "",
                //"style":"margin: 100px",
                //"data-title":"help text"
            },
            },

            

          ]
        }
      ]
    }
  ]
}


var piechartForm_InsertsStarterPack = 
{
  "schema": {
    "piechartArr": {
      "type": 'array',
      "title": 'Inrograph pie chart',
      "items": {
        "type": 'object',
        "title": 'Inrograph pie chart',
        "properties": {
          "multiLineText": {
            "type": 'string',
            "title": 'noTitle'
          },
          "percentage": {
             "title": "percentageData",
             "type": "integer",
            //  "default": 0
          },
          "maincolor1": {
            "type": "string",
            "title": "Main color1",
            "format": "color",
            "default": "#d41e91"
          },
          "maincolor2": {
            "type": "string",
            "title": "Main color2",
            "format": "color",
            "default": "#008523"
          },
          "maincolor3": {
            "type": "string",
            "title": "Main color2",
            "format": "color",
            "default": "#3440eb"
          },
          "arrowDir": {
            "type": "string",
            "title": "arrow direction",
            "enum": ["No arrow", "up", "down"]
          },
          "rangeFirst": {
            "title": "percentageData",
            "type": "integer",
            "default": 50,
            "minimum": 0,
            "exclusiveMinimum": true,
            "maximum": 100,
         },
         "rangeOthers": {
          "title": "percentageData",
          "type": "integer",
          "default": 0,
          "minimum": 0,
          "exclusiveMinimum": false,
          "maximum": 100,
       },
        }
      }
    }
  },

  "form": [
    {
      "type": "tabarray",
      "htmlClass": "piechartForm",
      "id": "piechartForm0",

      "items": [
        {              
          "type": 'section',
          "title": 'pie chart {{idx}}',
          "items": [
            {
              "id": "piechartForm1",
              "key": 'piechartArr[].multiLineText',
              "title": "You headline for the pie charts",
              "type": "textarea",
              "height": "70px",
              "placeholder": "What this graphic is about?",
            },
            {
              "id": "piechartForm1_1",
              "key": "piechartArr[].multiLineText",
              "title": "First chart name",
              "type": "textarea",
              "height": "70px",
              "placeholder": "Your text for the first pie chart",
            },
            
            // {
            //   "id": "piechartForm1_2",
            //   "key": "piechartArr[].percentage",
            //   "title": "First chart percentage",
            //   "placeholder": "Enter between 1 and 100",
            // },

            {
              "id": "piechartForm1_2",
              "fieldHtmlClass": "rangeElement",
              "key": "piechartArr[].rangeFirst",
              "title": "First pie percentage",
              "type": "range",
              "step": 1,
              "indicator": true,
              "htmlMetaData":{
                //"title": "Keep it at 0 if you want to have a chart with just three bars",
                // "style":"border: 1px solid blue",
                "data-title":"help text"
              },
            },

            {
              "id": "piechartForm1_3",
              "key": "piechartArr[].arrowDir",
              "title": "First chart arrow direction",
            },

            {
              "id": "color01",
              "fieldHtmlClass": "piechartcolor01",
              "key": "piechartArr[].maincolor1",
              "title": "First pie chart color",
              
            },
            
            {
              "id": "piechartForm2_1",
              "key": "piechartArr[].multiLineText",
              "title": "Name for your second pie chart",
              "type": "textarea",
              "height": "70px",
              "placeholder": "Your text for the second pie chart",
            },
            // {
            //   "id": "piechartForm2_2",
            //   "key": "piechartArr[].percentage",
            //   "title": "Second chart percentage",
            //   "placeholder": "Enter between 1 and 100",

            //   "htmlMetaData":{
            //     "title": "Leave it blank if you want to have just one pie chart",
            //     // "style":"border: 1px solid blue",
            //     "data-title":"help text"
            //   },
            // },

            {
              "id": "piechartForm2_2",
              "fieldHtmlClass": "rangeElement",
              "key": "piechartArr[].rangeOthers",
              "title": "Second pie percentage",
              "type": "range",
              "step": 1,
              "indicator": true,
              "htmlMetaData":{
                "title": "Keep it at 0 if you want to have a chart with just one pie",
                // "style":"border: 1px solid blue",
                "data-title":"help text"
              },
            },

            {
              "id": "piechartForm2_3",
              "key": "piechartArr[].arrowDir",
              "title": "Second chart arrow direction",
            },
            {
              "id": "color02",
              "fieldHtmlClass": "piechartcolor02",
              "key": "piechartArr[].maincolor2",
              "title": "Second pie chart color",
              
            },

            {
              "id": "piechartForm3_1",
              "key": "piechartArr[].multiLineText",
              "title": "Third pie chart name",
              "type": "textarea",
              "height": "70px",
              "placeholder": "Your text for the third chart",
            },
            // {
            //   "id": "piechartForm3_2",
            //   "key": "piechartArr[].percentage",
            //   "title": "Third chart percentage",
            //   "placeholder": "Enter between 1 and 100",

            //   "htmlMetaData":{
            //     "title": "Leave it blank if you want to have just two pie charts",
            //     // "style":"border: 1px solid blue",
            //     "data-title":"help text"
            //   },
            // },

            {
              "id": "piechartForm3_2",
              "fieldHtmlClass": "rangeElement",
              "key": "piechartArr[].rangeOthers",
              "title": "Third pie percentage",
              "type": "range",
              "step": 1,
              "indicator": true,
              "htmlMetaData":{
                "title": "Keep it at 0 if you want to have a chart with just two pies",
                // "style":"border: 1px solid blue",
                "data-title":"help text"
              },
            },

            {
              "id": "piechartForm3_3",
              "key": "piechartArr[].arrowDir",
              "title": "Third chart arrow direction",
            },
            {
              "id": "color03",
              "fieldHtmlClass": "piechartcolor03",
              "key": "piechartArr[].maincolor3",
              "title": "Third piechart color",
              
            },            
          ]
        }
      ]
    }
  ]
}

var comparegraphForm_InsertsStarterPack = 
{
  "schema": {
    "comparegraphArr": {
      "type": 'array',
      "title": 'Inrograph compare graph chart',
      "items": {
        "type": 'object',
        "title": 'Infograph compare graph chart',
        "properties": {
          "multiLineText": {
            "type": 'string',
            "title": 'noTitle'
          },
          "range": {
             "title": "percentageData",
             "type": "integer",
             "default": 50,
             "minimum": 0,
             "exclusiveMinimum": true,
             "maximum": 100,
            
          },
          "maincolor1": {
            "type": "string",
            "title": "Main color1",
            "format": "color",
            "default": "#d41e91"
          },
          "maincolor2": {
            "type": "string",
            "title": "Main color2",
            "format": "color",
            "default": "#008523"
          },
        }
      }
    }
  },

  "form": [
    {
      "type": "tabarray",
      "htmlClass": "comparegraphForm",
      "id": "comparegraphForm0",

      "items": [
        {              
          "type": 'section',
          "title": 'Compare chart {{idx}}',
          "items": [
            {
              "id": "comparegraphForm1",
              "key": 'comparegraphArr[].multiLineText',
              "title": "You graph headline",
              "type": "textarea",
              "height": "70px",
              "placeholder": "What this graph is about?",
            },
            {
              "id": "comparegraphForm2",
              "key": "comparegraphArr[].multiLineText",
              "title": "First object you compare",
              "type": "textarea",
              "height": "70px",
              "placeholder": "Your text for the first item",
            },
            {
              "id": "color02",
              "fieldHtmlClass": "comparegraphcolor02", //adds class to the input field itself
              "key": "comparegraphArr[].maincolor1",
              "title": "Color for the first item",
              
            },  
            {
              "id": "comparegraphForm3",
              "key": "comparegraphArr[].multiLineText",
              "title": "Second object for comparrison",
              "type": "textarea",
              "height": "70px",
              "placeholder": "Your text for the second item",
            },
            {
              "id": "color01",
              "fieldHtmlClass": "comparegraphcolor01",
              "key": "comparegraphArr[].maincolor2",
              "title": "Second item color",
              
            }, 
            {
              "id": "comparegraphForm4",
              //"htmlClass": "rangeElement",
              "key": "comparegraphArr[].range",
              "title": "Set your value between 0 and 100",
              "type": "range",
              "step": 1,
              "indicator": true,
              
              //"placeholder": "Enter between 1 and 100",
            },
             
          ]
        }
      ]
    }
  ]
}



