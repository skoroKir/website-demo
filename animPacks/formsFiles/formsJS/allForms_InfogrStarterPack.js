var barchartForm_InfogrStarterPack = 
{
  "schema": {
    "barchartArr": {
      "type": 'array',
      "title": 'Infograph hor bar chart',
      "items": {
        "type": 'object',
        "title": 'Infograph hor bar chart',
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
          "maincolor4": {
            "type": "string",
            "title": "Main color2",
            "format": "color",
            "default": "#b80e02"
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
      "htmlClass": "barchartForm",
      "id": "barchartForm0",

      "items": [
        {              
          "type": 'section',
          "title": 'Bar chart {{idx}}',
          "items": [
            {
              "id": "barchartForm1",
              "key": 'barchartArr[].multiLineText',
              "title": "Your headline",
              "type": "textarea",
              "height": "70px",
              "placeholder": "What this chart is about?",
            },
            {
              "id": "barchartForm1_1",
              "key": "barchartArr[].multiLineText",
              "title": "First bar name",
              "type": "textarea",
              "height": "70px",
              "placeholder": "Your text for the first bar",
            },
            // {
            //   "id": "barchartForm1_2",
            //   "key": "barchartArr[].percentage",
            //   "title": "First bar percentage",
            //   "placeholder": "Enter between 1 and 100",
            // },
            {
              "id": "barchartForm1_2",
              "fieldHtmlClass": "rangeElement",
              "key": "barchartArr[].rangeFirst",
              "title": "First bar percentage",
              "type": "range",
              "step": 1,
              "indicator": true,
              
              //"placeholder": "Enter between 1 and 100",
            },
            {
              "id": "color01",
              "fieldHtmlClass": "barchartcolor01",
              "key": "barchartArr[].maincolor1",
              "title": "First bar color",
              
            },
            
            {
              "id": "barchartForm2_1",
              "key": "barchartArr[].multiLineText",
              "title": "Second bar name",
              "type": "textarea",
              "height": "70px",
              "placeholder": "Your text for the second bar",
            },
            // {
            //   "id": "barchartForm2_2",
            //   "key": "barchartArr[].percentage",
            //   "title": "Second bar percentage",
            //   "placeholder": "Enter between 1 and 100",
            // },
            {
              "id": "barchartForm2_2",
              "fieldHtmlClass": "rangeElement",
              "key": "barchartArr[].rangeOthers",
              "title": "Second bar percentage",
              "type": "range",
              "step": 1,
              "indicator": true,
              "htmlMetaData":{
              "title": "Keep it at 0 if you want to have a chart with just two bars",
              // "style": "border: 1px solid blue; height: 300px; background-color: blue; opacity: 0.3; :hover opacity: 2;",
              //"style":"width: 50%",
              "data-title":"help text",
              },
            },
            {
              "id": "color02",
              "fieldHtmlClass": "barchartcolor02",
              "key": "barchartArr[].maincolor2",
              "title": "Second bar color",
              
            },

            {
              "id": "barchartForm3_1",
              "key": "barchartArr[].multiLineText",
              "title": "Third bar name",
              "type": "textarea",
              "height": "70px",
              "placeholder": "Your text for the third bar",
            },
            // {
            //   "id": "barchartForm3_2",
            //   "key": "barchartArr[].percentage",
            //   "title": "Third bar percentage",
            //   "placeholder": "Enter between 1 and 100",
            // },
            {
              "id": "barchartForm3_2",
              "fieldHtmlClass": "rangeElement",
              "key": "barchartArr[].rangeOthers",
              "title": "Third bar percentage",
              "type": "range",
              "step": 1,
              "indicator": true,
              "htmlMetaData":{
                "title": "Keep it at 0 if you want to have a chart with just two bars",
                // "style":"border: 1px solid blue",
                "data-title":"help text"
              },
            },
            {
              "id": "color03",
              "fieldHtmlClass": "barchartcolor03",
              "key": "barchartArr[].maincolor3",
              "title": "Third bar color",
              
            },
            {
              "id": "barchartForm4_1",
              "key": "barchartArr[].multiLineText",
              "title": "Fourth bar name",
              "type": "textarea",
              "height": "70px",
              "placeholder": "Your text for the fourth bar",
            },
            // {
            //   "id": "barchartForm4_2",
            //   "key": "barchartArr[].percentage",
            //   "title": "Fourth bar percentage",
            //   "placeholder": "Enter between 1 and 100",
            // },
            {
              "id": "barchartForm4_2",
              "fieldHtmlClass": "rangeElement",
              "key": "barchartArr[].rangeOthers",
              "title": "Fourth bar percentage",
              "type": "range",
              "step": 1,
              "indicator": true,
              "htmlMetaData":{
                "title": "Keep it at 0 if you want to have a chart with just three bars",
                // "style":"border: 1px solid blue",
                "data-title":"help text"
              },
            },
            {
              "id": "color04",
              "fieldHtmlClass": "barchartcolor04",
              "key": "barchartArr[].maincolor4",
              "title": "Fourth bar color",
              
            },
            
          ]
        }
      ]
    }
  ]
}


var piechartForm_InfogrStarterPack = 
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

var comparegraphForm_InfogrStarterPack = 
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



