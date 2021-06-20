(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{511:function(e,t,n){e.exports=n.p+"assets/media/awesomecrud-demo.db9f8ae6.mp4"},569:function(e,t,n){"use strict";n.r(t);var o=n(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("The Awesome Crud is one of the most powerful components of the package. It allows you to quickly build and CRUD capable interface in vue, with a table list, and forms for creating / editing items.")]),e._v(" "),o("video",{attrs:{width:"800",height:"600",controls:"",autoplay:"true"}},[o("source",{attrs:{src:n(511),type:"video/mp4"}}),e._v("\n  Your browser does not support the video tag.\n")]),e._v(" "),o("h2",{attrs:{id:"presentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#presentation"}},[e._v("#")]),e._v(" Presentation")]),e._v(" "),o("p",[e._v("This component magically create lists and edit data based on a json schema.")]),e._v(" "),o("h2",{attrs:{id:"initialisation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#initialisation"}},[e._v("#")]),e._v(" Initialisation")]),e._v(" "),o("p",[e._v("There are 3 ways of using the Awesome Crud.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("1 - The component works best when connected directly to the router. The config can the be passed as props. See the token section for an example of how to set-up a route based awesome crud")])]),e._v(" "),o("li",[o("p",[e._v("2 - If you want to further personalize your page, it's possible to create your own component, use the awesome crud in the body, and then use slots to create the desired features.")])]),e._v(" "),o("li",[o("p",[e._v("3 - The 3rd way of reusing the awesome crud if simply by extending the component and redesigning the template part completely. One use case would be to remove the json schema form and create your own form.\nWhatever the reason for you to modify the component, we suggest that you read the html code as source for your edits. Then you can extend it/")])])]),e._v(" "),o("h3",{attrs:{id:"_1-configuration-with-the-router"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-configuration-with-the-router"}},[e._v("#")]),e._v(" 1 - configuration with the router")]),e._v(" "),o("h4",{attrs:{id:"_1-1-connecting-the-awesomecrud-to-the-router"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-connecting-the-awesomecrud-to-the-router"}},[e._v("#")]),e._v(" 1.1 Connecting the AwesomeCrud to the router")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("// example of route for awsome crud\n{\n name: 'contact',\n path: 'contact',\n component: AwesomeCrud,\n beforeEnter: authGuard,\n props: {\n   modelName: 'contact',\n   options: {\n     url: '/contact',\n     stats: true,\n     actions: {\n       view: true,\n       delete: true,\n     }\n   }\n },\n children: [{\n   name: 'contact-view',\n   path: ':id',\n   component: AwesomeCrud,\n   props: {\n     modelName: 'contact',\n     options: {\n       actions: {\n         view: true,\n         delete: true,\n       }\n     }\n   }\n }, {\n   name: 'contact-edit',\n   path: ':id/edit',\n   component: AwesomeCrud,\n   props: {\n     modelName: 'contact',\n     options: {\n       actions: {\n         edit: true,\n         view: true,\n         delete: true,\n       }\n     }\n   }\n }]\n}\n")])])]),o("h4",{attrs:{id:"_1-2-automatically-loading-routes-rest-routes-when-needed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-automatically-loading-routes-rest-routes-when-needed"}},[e._v("#")]),e._v(" 1.2 - automatically loading routes REST routes when needed;")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("if (config.automaticModels && config.automaticModels.length) {\nconst appRoute = routes.find(route => route.path === '/app');\nconfig.automaticModels.forEach((model) => {\n  const options = {\n    mode: 'remote',\n    url: null,\n    columns: null,\n    viewPath: null,\n    stats: false,\n    detailPageMode: 'sidebar', // sidebar | modal\n    initialDisplayMode: 'table', // list | table\n    nestedDisplayMode: 'list', // list | object\n    actions: {\n      noActions: false,\n      create: false,\n      edit: false,\n      filter: true,\n      dateFilter: true,\n      view: true,\n      delete: false,\n      import: false,\n      export: true,\n    },\n  };\n  appRoute.children.push({\n    name: model.name,\n    path: model.route || model.name,\n    component: AwesomeCrud,\n    beforeEnter: authGuard,\n    props: {\n      name: model.name,\n      modelName: model.modelName || model.name,\n      options: _.merge(options, model.options, model.listOptions),\n      nestedSchemas: model.nestedSchemas,\n      nestedDisplayMode: 'object',\n    },\n    children: [{\n      name: `${model.name}-view`,\n      path: ':id',\n      component: AwesomeCrud,\n      props: {\n        name: model.name,\n        modelName: model.modelName || model.name,\n        options: _.merge(options, model.options, model.displayOptions),\n        nestedSchemas: model.nestedSchemas,\n        nestedDisplayMode: 'object',\n      },\n    }, {\n      name: `${model.name}-edit`,\n      path: ':id/edit',\n      component: AwesomeCrud,\n      props: {\n        name: model.name,\n        modelName: model.modelName || model.name,\n        options: _.merge(options, model.options, model.editOptions),\n        nestedSchemas: model.nestedSchemas,\n        nestedDisplayMode: 'object',\n      },\n    }],\n  });\n});\n}\n\n")])])]),o("h2",{attrs:{id:"configuring-the-list-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-list-mode"}},[e._v("#")]),e._v(" configuring the list mode")]),e._v(" "),o("p",[e._v("initialDisplayMode: 'table', // list | table | 'kanban'")])])}),[],!1,null,null,null);t.default=a.exports}}]);