define({ "api": [
  {
    "type": "delete",
    "url": "/concepts/:id",
    "title": "delete a Concept",
    "name": "DeleteConcept",
    "group": "Concept",
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
            "field": "name",
            "description": "<p>Name of the Concept.</p>"
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
    "filename": "concept/index.spec.js",
    "groupTitle": "Concept"
  },
  {
    "type": "get",
    "url": "/concepts",
    "title": "Read data of Concept",
    "name": "GetConcept",
    "group": "Concept",
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
            "field": "name",
            "description": "<p>Name of the Concept.</p>"
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
            "description": "<p>The new Concept-ID.</p>"
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
            "field": "ConceptNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
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
    "filename": "concept/index.spec.js",
    "groupTitle": "Concept"
  },
  {
    "type": "get",
    "url": "/concepts/:id",
    "title": "Read data of Concept by id",
    "name": "GetConcept",
    "group": "Concept",
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
            "field": "id",
            "description": "<p>unique ID.</p>"
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
            "description": "<p>ID of the Concept.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Concept.</p>"
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
    "filename": "concept/index.spec.js",
    "groupTitle": "Concept"
  },
  {
    "type": "patch",
    "url": "/concepts/:id",
    "title": "Change a Concept",
    "name": "PatchConcept",
    "group": "Concept",
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
            "field": "name",
            "description": "<p>Name of the Concept.</p>"
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
            "field": "ConceptNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"ConceptNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "concept/index.spec.js",
    "groupTitle": "Concept"
  },
  {
    "type": "post",
    "url": "/concepts",
    "title": "Create a new Concept",
    "name": "PostConcept",
    "group": "Concept",
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
            "field": "name",
            "description": "<p>Name of the Concept.</p>"
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
            "description": "<p>The new Concept-ID.</p>"
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
            "field": "ConceptNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"ConceptNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "concept/index.spec.js",
    "groupTitle": "Concept"
  },
  {
    "type": "put",
    "url": "/concepts/:id",
    "title": "Change a Concept",
    "name": "PutConcept",
    "group": "Concept",
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
            "field": "name",
            "description": "<p>Name of the Concept.</p>"
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
            "field": "ConceptNotFound",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response(exemple):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"ConceptNameTooShort\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "concept/index.spec.js",
    "groupTitle": "Concept"
  }
] });