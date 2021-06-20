(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{575:function(e,t,n){"use strict";n.r(t);var i=n(42),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"presentation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#presentation"}},[e._v("#")]),e._v(" Presentation")]),e._v(" "),n("h2",{attrs:{id:"features"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" features")]),e._v(" "),n("h2",{attrs:{id:"default-initialisation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#default-initialisation"}},[e._v("#")]),e._v(" default initialisation")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<awesome-form :schema="{schema of the fields}" mode="create" :item="{}" />\n')])])]),n("h2",{attrs:{id:"props"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[e._v("#")]),e._v(" props")]),e._v(" "),n("ClientOnly",[n("ComponentDoc",{attrs:{component:"AwesomeForm"}})],1),e._v("\ndisplayMode\n"),n("h2",{attrs:{id:"field-types"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#field-types"}},[e._v("#")]),e._v(" field types")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("string")]),e._v(" "),n("td",[e._v("Basic string stype")])]),e._v(" "),n("tr",[n("td",[e._v("integer")]),e._v(" "),n("td",[e._v("Number based field")])]),e._v(" "),n("tr",[n("td",[e._v("number")]),e._v(" "),n("td",[e._v("Number based field")])]),e._v(" "),n("tr",[n("td",[e._v("input")]),e._v(" "),n("td",[e._v("Number based field")])]),e._v(" "),n("tr",[n("td",[e._v("booelan")]),e._v(" "),n("td",[e._v("Shows a green tick(✔) or a red cross(❌) depending on the value")])]),e._v(" "),n("tr",[n("td",[e._v("image")]),e._v(" "),n("td",[e._v("Image column (displays the actual image)")])]),e._v(" "),n("tr",[n("td",[e._v("date")]),e._v(" "),n("td",[e._v('Date field ("DD-MM-YYYY")')])]),e._v(" "),n("tr",[n("td",[e._v("datetime")]),e._v(" "),n("td",[e._v("Date time field (exact format will depend on your browser)")])]),e._v(" "),n("tr",[n("td",[e._v("EnyoSelect")]),e._v(" "),n("td",[e._v("@deprecated use VSelect")])]),e._v(" "),n("tr",[n("td",[e._v("textArea")]),e._v(" "),n("td",[e._v("textArea")])]),e._v(" "),n("tr",[n("td",[e._v("JsonTextarea")]),e._v(" "),n("td",[e._v("textArea that presents json data")])]),e._v(" "),n("tr",[n("td",[e._v("VSelect")]),e._v(" "),n("td",[e._v("Select  using VSelect mode")])]),e._v(" "),n("tr",[n("td",[e._v("fileInput")]),e._v(" "),n("td",[e._v("fileInput  using base64 picker")])]),e._v(" "),n("tr",[n("td",[e._v("ImagePicker")]),e._v(" "),n("td",[e._v("Image Picker using base64 picker")])]),e._v(" "),n("tr",[n("td",[e._v("time")]),e._v(" "),n("td",[e._v("time picker")])])])]),e._v(" "),n("h2",{attrs:{id:"field-definition-schema"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#field-definition-schema"}},[e._v("#")]),e._v(" field definition schema")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("module.exports = {\n  $id: 'http://enyosolutions.com/field.json',\n  type: 'object',\n  properties: {\n    title: {\n      type: 'object',\n      title: 'The title of the property, used in form fields and columns',\n      column: {\n        type: 'image',\n      },\n    },\n    type: {\n      type: 'object',\n      title: 'The title of the property, used in form fields and columns',\n      column: {\n        type: 'image',\n      },\n    },\n    relation: {\n      type: 'string',\n      title: 'The object that this property is related to',\n      example: 'user',\n    },\n    relationKey: {\n      type: 'string',\n      title: 'The field of the object that this property is related to (eg relation[foreignKey] == this property',\n      example: '_id',\n    },\n    relationUrl: {\n      type: 'string',\n      title: 'The field of the object that this property is related to (eg relation[foreignKey] == this property',\n      example: '_id',\n    },\n    relationLabel: {\n      type: 'string',\n      title: 'The field of the object that this property is related to (eg relation[foreignKey] == this property',\n      example: '_id',\n    },\n    min: {\n      type: 'number',\n      title: 'the minimum number of characters',\n    },\n    max: {\n      type: 'number',\n      title: 'the maximum number of characters',\n    },\n    field: {\n      type: 'object',\n      title: 'Configuration of the behavior of the property in forms',\n      properties: {\n        title: {\n          type: 'string',\n          title: 'The title of the field',\n        },\n        type: {\n          type: 'string',\n          title: 'The type of the field, comming from https://vue-generators.gitbook.io/vue-generators/fields',\n          example: 'EnyoSelect, dateTime, textArea',\n          enum: ['string', 'input', 'number', 'list-of-value', 'list-of-data', 'EnyoSelect', 'dateTime', 'textArea', 'JsonTextarea', 'VSelect', 'date', 'datetime', 'time', 'fileInput', 'ImagePicker'],\n        },\n        inputType: {\n          type: 'string',\n          title:\n            'The type of the field, when its a text input comming from https://vue-generators.gitbook.io/vue-generators/fields',\n          example: 'file',\n          enum: ['text', 'date', 'number', 'radio', 'checkbox', 'datetime', 'masked'],\n        },\n        required: {\n          type: 'boolean',\n          title: 'If the form field is required',\n        },\n        readonly: {\n          type: 'boolean',\n          title: 'If the form field is readlonly',\n        },\n        hidden: {\n          type: 'boolean',\n          title: 'If the form field is displayed',\n        },\n        styleClasses: {\n          type: 'string',\n          title: 'The class that will be around the field',\n          example: 'col-md-12',\n        },\n        min: {\n          type: 'number',\n          title: 'the minimum number of characters',\n        },\n        max: {\n          type: 'number',\n          title: 'the maximum number of characters',\n        },\n\n        fieldOptions: {\n          title: 'Options to be used on custom forms fields like multiselect, toggle etc',\n          properties: {\n            type: {\n              type: 'string',\n              description:\n                'The type that links to the field option. In case of a dateTime selector, this would be date or datetime',\n              enum: ['date', 'datetime'],\n            },\n            multiple: {\n              type: 'boolean',\n              description: 'If the select is multiple (for selects)',\n            },\n            enum: {\n              type: ['string', 'array'],\n              description:\n                'The list of values to use for the select. If the value is string and starts with $store then the value is taken from the vuejs $store',\n              example: '$store.listOfValues.users',\n            },\n            url: {\n              type: 'string',\n              title: 'The url to use to load the data for the select (ajax)',\n              example: '/user',\n            },\n            trackBy: {\n              type: 'string',\n              title: 'The field to use as the value in the select',\n              example: '_id',\n            },\n\n            label: {\n              type: 'string',\n              title: 'The field to use as the Label in the select',\n              example: 'username',\n            },\n\n            prefix: {\n              type: 'string',\n              title: 'Text displayed before the value',\n              description: 'example : £',\n              example: 'username',\n            },\n\n            suffix: {\n              type: 'string',\n              title: 'Text displayed before the value',\n              description: 'example : cm | €',\n              example: 'username',\n            },\n\n            displayContextActions: {\n              type: 'boolean',\n              title: 'Should we display the add/edit button?',\n              description: 'When the field type is VueSelect and when the field is used to display a relation then this serve to create a new item',\n            }\n          },\n        },\n        validator: {\n          type: ['string', 'array', 'function'],\n          title: 'Validator',\n          description: 'Custom validator to use to validate the field. can be default validators, or custom ones. Default validators are : required | number | integer | double | string | array | date | regexp (using field.pattern) | email | url | credit card | alpha | alphaNumeric',\n          example: ['string'],\n        },\n      },\n    },\n  },\n};\n\n")])])]),n("h2",{attrs:{id:"events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" events")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("Type")]),e._v(" "),n("th",[e._v("description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("create")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("edit")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("bulkEdit")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("aw-select-previous-item")]),e._v(" "),n("td")]),e._v(" "),n("tr",[n("td",[e._v("aw-select-next-item")]),e._v(" "),n("td")])])]),e._v(" "),n("h2",{attrs:{id:"styling-classes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#styling-classes"}},[e._v("#")]),e._v(" Styling classes :")]),e._v(" "),n("p",[n("code",[e._v("aw-form")])]),e._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);