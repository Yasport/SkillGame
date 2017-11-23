define({ "api": [
  {
    "type": "delete",
    "url": "/answers/:id",
    "title": "delete a Answer",
    "name": "DeleteAnswer",
    "group": "Answer",
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
            "field": "ConceptNotFound",
            "description": "<p>The <code>id</code> of the Concept was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ConceptNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "answer/index.spec.js",
    "groupTitle": "Answer"
  },
  {
    "type": "get",
    "url": "/answers",
    "title": "Read data of Answer",
    "name": "GetAnswer",
    "group": "Answer",
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
            "field": "expediteur",
            "description": "<p>Expediteur of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinateur",
            "description": "<p>Destinateur of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_type",
            "description": "<p>Type of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of the Answer.</p>"
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
            "description": "<p>The new Answer-ID.</p>"
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
            "field": "AnswerNotFound",
            "description": "<p>The <code>id</code> of the Answer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"AnswerNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "answer/index.spec.js",
    "groupTitle": "Answer"
  },
  {
    "type": "get",
    "url": "/answers/:id",
    "title": "Read data of answers by id",
    "name": "GetAnswer",
    "group": "Answer",
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
            "field": "expediteur",
            "description": "<p>Expediteur of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinateur",
            "description": "<p>Destinateur of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_type",
            "description": "<p>Type of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of the Answer.</p>"
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
            "description": "<p>The new Answer-ID.</p>"
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
            "field": "AnswerNotFound",
            "description": "<p>The <code>id</code> of the Answer was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"AnswerNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "answer/index.spec.js",
    "groupTitle": "Answer"
  },
  {
    "type": "patch",
    "url": "/answers/:id",
    "title": "Change a Answer",
    "name": "PatchAnswer",
    "group": "Answer",
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
            "field": "expediteur",
            "description": "<p>Expediteur of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinateur",
            "description": "<p>Destinateur of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_type",
            "description": "<p>Type of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of the Answer.</p>"
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
            "field": "AnswerNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"AnswerNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "answer/index.spec.js",
    "groupTitle": "Answer"
  },
  {
    "type": "post",
    "url": "/answers",
    "title": "Create a new Answer",
    "name": "PostAnswer",
    "group": "Answer",
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
            "field": "expediteur",
            "description": "<p>Expediteur of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinateur",
            "description": "<p>Destinateur of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_type",
            "description": "<p>Type of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of the Answer.</p>"
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
            "description": "<p>The new Answer-ID.</p>"
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
            "field": "AnswerNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"AnswerNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "answer/index.spec.js",
    "groupTitle": "Answer"
  },
  {
    "type": "put",
    "url": "/answers/:id",
    "title": "Change a Answer",
    "name": "PutAnswer",
    "group": "Answer",
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
            "field": "expediteur",
            "description": "<p>Expediteur of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinateur",
            "description": "<p>Destinateur of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_type",
            "description": "<p>Type of the Answer.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of the Answer.</p>"
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
            "field": "AnswerNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"AnswerNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "answer/index.spec.js",
    "groupTitle": "Answer"
  }
] });
