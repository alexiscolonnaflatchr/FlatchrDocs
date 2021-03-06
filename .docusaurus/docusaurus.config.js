export default {
  "title": "Flatchr Docs",
  "tagline": "flatchr.io | Logiciel de recrutement",
  "url": "https://developers.flatchr.io/",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/logo.svg",
  "organizationName": "alexiscolonnaflatchr",
  "projectName": "FlatchrDocs",
  "trailingSlash": false,
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/home/alexisc/Github-FlatchrDocs/FlatchrDocs/sidebars.js"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/home/alexisc/Github-FlatchrDocs/FlatchrDocs/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "navbar": {
      "title": "Flatchr Docs",
      "logo": {
        "alt": "Logo Fl",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "getting_started",
          "position": "left",
          "label": "API"
        },
        {
          "to": "/site-carriere",
          "label": "Site Carrière",
          "position": "left"
        },
        {
          "to": "/sso",
          "label": "SSO",
          "position": "left"
        },
        {
          "to": "/webhooks",
          "label": "Webhooks",
          "position": "left"
        },
        {
          "href": "https://www.postman.com/flatchr/workspace/flatchr-public-api/overview",
          "label": "Run in Postman",
          "position": "right",
          "className": "postman_navbar__link"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [
        {
          "title": "Documentation",
          "items": [
            {
              "label": "API",
              "to": "/docs/getting_started"
            },
            {
              "to": "/site-carriere",
              "label": "Site Carrière"
            },
            {
              "to": "/sso",
              "label": "SSO"
            },
            {
              "to": "/webhooks",
              "label": "Webhooks"
            },
            {
              "href": "https://www.postman.com/flatchr/workspace/flatchr-public-api/overview",
              "label": "Run in Postman",
              "className": "postman_footer__link-item"
            }
          ]
        },
        {
          "title": "Communauté",
          "items": [
            {
              "label": "Linkedin",
              "href": "https://www.linkedin.com/company/flatchr/"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/Flatchr"
            },
            {
              "label": "Instagram",
              "href": "https://www.instagram.com/flatchr.io/"
            }
          ]
        },
        {
          "title": "En savoir plus",
          "items": [
            {
              "label": "Flatchr.io",
              "href": "https://www.flatchr.io/"
            },
            {
              "label": "Blog",
              "href": "https://blog.flatchr.io/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Flatchr International ",
      "style": "light"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌙",
        "darkIconStyle": {
          "marginLeft": "2px"
        },
        "lightIcon": "☀️",
        "lightIconStyle": {
          "marginLeft": "1px"
        }
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadata": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};