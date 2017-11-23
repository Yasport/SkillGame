define({ "api": [
  {
    "type": "delete",
    "url": "/questions/:id",
    "title": "delete a Question",
    "name": "DeleteQuestion",
    "group": "Question",
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
            "field": "QuestionNotFound",
            "description": "<p>The <code>id</code> of the Question was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"QuestionNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "question/index.spec.js",
    "groupTitle": "Question"
  },
  {
    "type": "get",
    "url": "/questions",
    "title": "Read data of Question",
    "name": "GetQuestion",
    "group": "Question",
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
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>contains of the question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "owner",
            "description": "<p>The owner-ID of question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbAppearance",
            "description": "<p>number of appearances.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbContestation",
            "description": "<p>number of protest.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "concept",
            "description": "<p>The concept-ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodAnswer",
            "description": "<p>Good Answer.</p>"
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
            "description": "<p>The new Question-ID.</p>"
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
            "field": "QuestionNotFound",
            "description": "<p>The <code>id</code> of the AQuestion was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"QuestionNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "question/index.spec.js",
    "groupTitle": "Question"
  },
  {
    "type": "get",
    "url": "/questions/:id",
    "title": "Read data of Question by id",
    "name": "GetQuestion",
    "group": "Question",
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
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>contains of the question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "owner",
            "description": "<p>The owner-ID of question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbAppearance",
            "description": "<p>number of appearances.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbContestation",
            "description": "<p>number of protest.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "concept",
            "description": "<p>The concept-ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodAnswer",
            "description": "<p>Good Answer.</p>"
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
            "description": "<p>The new Question-ID.</p>"
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
            "field": "QuestionNotFound",
            "description": "<p>The <code>id</code> of the Question was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"QuestionNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "question/index.spec.js",
    "groupTitle": "Question"
  },
  {
    "type": "patch",
    "url": "/questions/:id",
    "title": "Change a Question",
    "name": "PatchQuestion",
    "group": "Question",
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
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>contains of the question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "owner",
            "description": "<p>The owner-ID of question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbAppearance",
            "description": "<p>number of appearances.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbContestation",
            "description": "<p>number of protest.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "concept",
            "description": "<p>The concept-ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodAnswer",
            "description": "<p>Good Answer.</p>"
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
            "field": "QuestionNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"QuestionNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "question/index.spec.js",
    "groupTitle": "Question"
  },
  {
    "type": "post",
    "url": "/questions",
    "title": "Create a new Question",
    "name": "PostQuestion",
    "group": "Question",
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
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>contains of the question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "owner",
            "description": "<p>The owner-ID of question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbAppearance",
            "description": "<p>number of appearances.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbContestation",
            "description": "<p>number of protest.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "concept",
            "description": "<p>The concept-ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodAnswer",
            "description": "<p>Good Answer.</p>"
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
            "description": "<p>The new Question-ID.</p>"
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
            "field": "QuestionNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"QuestionNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "question/index.spec.js",
    "groupTitle": "Question"
  },
  {
    "type": "put",
    "url": "/questions/:id",
    "title": "Change a Question",
    "name": "PutQuestion",
    "group": "Question",
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
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>contains of the question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "owner",
            "description": "<p>The owner-ID of question.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbAppearance",
            "description": "<p>number of appearances.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "nbContestation",
            "description": "<p>number of protest.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "concept",
            "description": "<p>The concept-ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "goodAnswer",
            "description": "<p>Good Answer.</p>"
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
            "field": "QuestionNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"QuestionNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "question/index.spec.js",
    "groupTitle": "Question"
  }
] });