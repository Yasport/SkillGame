define({ "api": [
  {
    "type": "delete",
    "url": "/choices/:id",
    "title": "delete a Choice",
    "name": "DeleteChoice",
    "group": "Choice",
    "permission": [
      {
        "name": "none"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChoiceNotFound",
            "description": "<p>The <code>id</code> of Choice was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ChoiceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "choice/index.spec.js",
    "groupTitle": "Choice"
  },
  {
    "type": "get",
    "url": "/choices",
    "title": "Read data of Choice",
    "name": "GetChoice",
    "group": "Choice",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "QuestionId",
            "description": "<p>ID of question.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statement",
            "description": "<p>Statement.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The new Choice-ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChoiceNotFound",
            "description": "<p>The <code>id</code> of the Choice was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ChoiceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "choice/index.spec.js",
    "groupTitle": "Choice"
  },
  {
    "type": "get",
    "url": "/choices/:id",
    "title": "Read data of Choice by id",
    "name": "GetChoice",
    "group": "Choice",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "QuestionId",
            "description": "<p>ID of question.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statement",
            "description": "<p>Statement.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The new Choice-ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChoiceNotFound",
            "description": "<p>The <code>id</code> of the Choice was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ChoiceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "choice/index.spec.js",
    "groupTitle": "Choice"
  },
  {
    "type": "patch",
    "url": "/choices/:id",
    "title": "Change a Choice",
    "name": "PatchChoice",
    "group": "Choice",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "QuestionId",
            "description": "<p>ID of question.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statement",
            "description": "<p>Statement.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChoiceNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"ChoiceNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "choice/index.spec.js",
    "groupTitle": "Choice"
  },
  {
    "type": "post",
    "url": "/choices",
    "title": "Create a new Choice",
    "name": "PostChoice",
    "group": "Choice",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "QuestionId",
            "description": "<p>ID of question.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statement",
            "description": "<p>Statement.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The new Choice-ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChoiceNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"ChoiceNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "choice/index.spec.js",
    "groupTitle": "Choice"
  },
  {
    "type": "put",
    "url": "/choices/:id",
    "title": "Change a Choice",
    "name": "PutChoice",
    "group": "Choice",
    "permission": [
      {
        "name": "none"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "QuestionId",
            "description": "<p>ID of question.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "statement",
            "description": "<p>Statement.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ChoiceNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"ChoiceNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "choice/index.spec.js",
    "groupTitle": "Choice"
  }
] });