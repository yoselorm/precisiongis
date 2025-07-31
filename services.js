const service_details = [
    {
      id: "utility-mapping-inventory",
      img:"assets/img/about/image3.png",
      title: "Utility Mapping and Inventory Management: Utility GIS & Electricity Mapping",
      description: "Advanced GIS solutions specifically tailored for electricity utility providers and energy distribution agencies. Our systems enhance visibility, streamline operations, support real-time monitoring, and improve decision-making across every layer of utility infrastructure.",
      offerings: [
        {
          title: "Asset Mapping and Tracing",
          description: "Detailed geospatial models of all electrical assets—substations, transformers, feeders, poles, meters, and customer connections—capturing both spatial and relational data.",
          features: [
            "Visualize network layouts",
            "Trace service paths (e.g., from substation to household)",
            "Establish upstream/downstream relationships",
            "Integrate with maintenance and outage systems"
          ]
        },
        {
          title: "Meter Integration and Hourly Reading Updates",
          description: "Integration of GIS platforms with smart meter data for real-time energy monitoring.",
          features: [
            "Hourly or real-time meter data capture",
            "Link meter locations with asset and customer data",
            "Enable automated data syncing and reporting",
            "Detect anomalies and consumption patterns"
          ]
        },
        {
          title: "Fault Detection and Ticketing",
          description: "Systems that use spatial analysis and network tracing to help detect outages and infrastructure issues faster.",
          features: [
            "Automated outage detection via spatial modeling",
            "Assign fault tickets to nearest field teams",
            "Link faults to affected customers and infrastructure",
            "Historical fault data tracking and resolution analytics"
          ]
        },
        {
          title: "Dashboards and Reporting Tools",
          description: "Interactive dashboards that provide operational insights for decision-makers and field teams.",
          features: [
            "Real-time map-based dashboards",
            "Custom performance KPIs (e.g., downtime, load, response time)",
            "Historical reports and trend analysis",
            "Exportable maps and statistics for management"
          ]
        }
      ],
      technologies: {
        openSource: [
          "QGIS – For interactive spatial editing, map creation, and layer symbology",
          "PostgreSQL/PostGIS – For relational database management and spatial querying",
          "GeoServer – For web map services and spatial data publication",
          "Leaflet / OpenLayers – For custom web-based mapping and dashboard interfaces",
          "Mergin Maps / ODK – For field data collection and synchronization",
          "Python & R – For geospatial analysis and reporting automation"
        ],
        proprietary: [
          "ESRI ArcGIS Pro / ArcMap – For advanced mapping, analysis, and model building",
          "ArcGIS Online / Portal for ArcGIS – For web-based maps and apps",
          "ESRI Utility Network (UN) Model – For detailed network topology, tracing, and relationship modeling",
          "Survey123 / Collector – For advanced field survey integration",
          "Power BI with ArcGIS or Leaflet plugins – For visual dashboards and reports"
        ]
      },
      targetClients: [
        "National power distribution utilities",
        "Rural electrification authorities",
        "Renewable energy operators",
        "Independent Power Producers (IPPs)",
        "Smart grid and metering companies",
        "Government regulatory and planning bodies"
      ]
    },
    {
      id: "enterprise-gis-it-systems",
      img:"assets/img/about/ent-gis.jpeg",
      title: "Enterprise GIS & IT Systems Development",
      description: "Robust, enterprise-grade GIS and IT platforms that power spatial intelligence across sectors. Scalable, secure, and customized solutions for national infrastructure management, health surveillance systems, or urban development.",
      offerings: [
        {
          title: "Custom Web and Mobile GIS Applications",
          description: "User-friendly, responsive GIS applications tailored to organizational workflows.",
          features: [
            "Interactive web maps for real-time data exploration",
            "Mobile-ready interfaces for field teams and managers",
            "User role-based access controls",
            "Lightweight, intuitive UI/UX design"
          ]
        },
        {
          title: "Backend Integration & Spatial Infrastructure",
          description: "Strong, spatially-aware data infrastructures based on open standards.",
          features: [
            "PostgreSQL/PostGIS spatial databases",
            "QGIS Server and GeoServer for WMS/WFS publishing",
            "Scheduled ETL jobs to synchronize external data",
            "Authentication and multi-user editing environments"
          ]
        },
        {
          title: "ESRI ArcGIS Configuration & Automation",
          description: "Configuration and automation for institutions that rely on ESRI environments.",
          features: [
            "ArcGIS Pro-based workflows",
            "ArcGIS Enterprise/Portal deployments",
            "ModelBuilder and Python-based geoprocessing tools",
            "Map automation and layout templates"
          ]
        },
        {
          title: "API & Dashboard Development",
          description: "Secure RESTful APIs and data visualization dashboards that connect GIS to the broader IT ecosystem.",
          features: [
            "Leaflet.js / MapLibre / OpenLayers for custom map UIs",
            "Power BI, Dash, and Streamlit integration for analytics",
            "Real-time dashboards with live syncing",
            "Cross-platform REST/GraphQL API development"
          ]
        }
      ],
      technologies: {
        openSource: [
          "PostgreSQL + PostGIS",
          "QGIS Server",
          "GeoServer",
          "Leaflet / OpenLayers / MapLibre",
          "Python, Flask, Django, Streamlit, R Shiny"
        ],
        proprietary: [
          "ArcGIS Pro / ArcGIS Online / ArcGIS Enterprise",
          "ArcGIS API for Python and ArcPy",
          "Power BI (with ArcGIS integration)",
          "Survey123 / Experience Builder / Operations Dashboard"
        ]
      }
    },
    {
      id: "custom-system-design-non-gis",
      img:"assets/img/about/custom-sys.jpeg",
      title: "Custom System Design (Non-GIS)",
      description: "Non-GIS digital systems that are powerful, scalable, and built to solve real-world challenges across sectors. Enterprise-grade applications from internal management tools to citizen-facing platforms.",
      offerings: [
        {
          title: "Web and Mobile Enterprise Solutions",
          description: "Responsive platforms tailored for enterprise workflows.",
          features: [
            "Role-based platforms for operations, HR, logistics, finance, and reporting",
            "Mobile apps for Android and iOS (hybrid or native)",
            "Offline/online sync capability for rural deployment",
            "Admin dashboards with detailed control over users and workflows"
          ]
        },
        {
          title: "Management Information Systems (MIS)",
          description: "Structured MIS platforms that simplify tracking, analysis, and reporting across sectors such as health, agriculture, education, utilities, and logistics.",
          features: [
            "Custom database structures",
            "KPI visualization and report generation",
            "Workflow automation",
            "Integration with external systems (SMS, APIs, e-signature, payments, etc.)"
          ]
        },
        {
          title: "Full Backend & Frontend System Development",
          description: "Complete software engineering services using agile methodologies.",
          features: [
            "Frontend: React, Vue, Angular, Flutter",
            "Backend: Node.js, Django, Laravel, .NET Core",
            "CI/CD pipelines and GitHub/GitLab version control",
            "API-first development and microservices architecture"
          ]
        },
        {
          title: "Secure, Scalable Software Architecture",
          description: "Systems built to handle large data volumes and complex user interactions while maintaining data security, performance, and compliance.",
          features: [
            "OAuth2 and JWT authentication",
            "PostgreSQL, MySQL, MongoDB databases",
            "Cloud-native deployment (AWS, Azure, DigitalOcean)",
            "Load balancing, data encryption, and backup routines"
          ]
        }
      ],
      technologies: {
        frontend: ["ReactJS", "Vue.js", "Angular", "Flutter"],
        backend: ["Django (Python)", "Laravel (PHP)", "Node.js", "Express", ".NET Core"],
        database: ["PostgreSQL", "MySQL", "Firebase", "MongoDB"],
        mobile: ["React Native", "Flutter", "Java/Kotlin (Android)", "Swift (iOS)"],
        devops: ["Docker", "GitLab CI/CD", "NGINX", "AWS EC2/S3", "DigitalOcean"],
        apis: ["REST", "GraphQL", "Firebase", "Twilio", "Stripe", "DHIS2 API", "SMS gateways"]
      }
    },
    {
      id: "environmental-agricultural-gis",
      img:"assets/img/about/env-gis.jpeg",
      title: "Environmental & Agricultural GIS",
      description: "Geospatial intelligence to address complex environmental and agricultural challenges. Solutions blend remote sensing, AI, and spatial analysis to support sustainable land use, environmental conservation, climate-smart agriculture, and regulatory compliance.",
      offerings: [
        {
          title: "Sentinel-2 & Earth Engine Land Cover Classification",
          description: "High-resolution satellite imagery and machine learning to classify land cover across large areas.",
          features: [
            "Cocoa plantation detection using spectral and texture features",
            "Illegal mining (galamsey) detection via time-series analysis",
            "Forest degradation, waterbody mapping, urban sprawl assessment",
            "Temporal change detection using Google Earth Engine and R"
          ]
        },
        {
          title: "Climate-Smart Agriculture Zoning",
          description: "Help national and regional authorities define optimal agricultural zones.",
          features: [
            "Suitability analysis for cocoa, maize, rice, cassava, etc.",
            "Climate variable overlays (rainfall, LST, soil moisture)",
            "Elevation, slope, NDVI, land cover integration",
            "Crop diversification and vulnerability assessments"
          ]
        },
        {
          title: "Protected Area Mapping & EUDR Compliance",
          description: "Support conservation planning and supply chain transparency.",
          features: [
            "Mapping forest reserves, national parks, and buffer zones",
            "Analyzing encroachment and land use pressure",
            "Supporting cocoa and timber traceability initiatives",
            "Generating spatial compliance reports aligned with EU Deforestation Regulation (EUDR)"
          ]
        }
      ],
      technologies: {
        remoteSensing: [
          "Sentinel-2, Landsat 8, PlanetScope",
          "Google Earth Engine (GEE)",
          "ENVI, SNAP, Orfeo Toolbox",
          "Random Forest, SVM, and CNN models",
          "GLCM texture extraction, NDVI, SAVI, and custom indices"
        ],
        gisSpatial: [
          "QGIS, PostGIS, ArcGIS Pro",
          "R (raster, terra, caret, randomForest, tmap)",
          "Python (geopandas, rasterio, scikit-learn, TensorFlow)",
          "Leaflet.js, Streamlit, and Dash for visualization"
        ]
      },
      targetClients: [
        "Governments",
        "Agribusinesses",
        "NGOs",
        "Conservation organizations",
        "Agricultural authorities"
      ]
    },
    {
      id: "field-data-collection-solutions",
      img:"assets/img/about/field-data.jpeg",
      title: "Field Data Collection Solutions",
      description: "Reliable, flexible, and scalable field data collection solutions for organizations operating in health, energy, agriculture, environment, and governance. Systems combine mobile data collection tools, GPS mapping, smart form design, offline support, and real-time dashboards.",
      offerings: [
        {
          title: "Open-Source Mobile Data Collection Platforms",
          description: "Deploy and customize leading tools for comprehensive data collection.",
          features: [
            "ODK (Open Data Kit) for complex survey logic and wide device support",
            "KoboToolbox for rapid humanitarian and health deployments",
            "Mergin Maps + QField for spatial surveys and asset mapping with QGIS integration",
            "Pre-filled forms, barcode scanning, GPS logging, multimedia support"
          ]
        },
        {
          title: "Offline Sync Capabilities",
          description: "Ensure data collection works even in the most remote environments.",
          features: [
            "Full offline support for surveys and GPS mapping",
            "Seamless sync once back online",
            "Data encryption and secure transmission",
            "Automatic backups and storage options (cloud or on-premise)"
          ]
        },
        {
          title: "Custom Forms & Validation Rules",
          description: "Smart forms that reduce human error and improve data quality.",
          features: [
            "Conditional logic and cascading selects",
            "Auto-calculations, constraints, and regex validations",
            "Location-based dependencies (e.g., district selects, proximity checks)",
            "Multi-language support for local adaptation"
          ]
        },
        {
          title: "Real-Time Dashboards and Integration",
          description: "Connected platforms to visualize and act on field data.",
          features: [
            "Interactive dashboards using Streamlit, Power BI, or Metabase",
            "Map-based reports showing survey coverage and trends",
            "Automatic updates to centralized databases (PostGIS, DHIS2, etc.)",
            "APIs and webhooks for integration with other systems"
          ]
        }
      ],
      technologies: {
        mobilePlatforms: [
          "KoboToolbox, ODK Collect, Enketo",
          "Mergin Maps + QField",
          "Survey123 (for ESRI-based deployments)",
          "Custom Android/iOS apps (React Native / Flutter)"
        ],
        databases: [
          "PostgreSQL/PostGIS",
          "Firebase / MongoDB",
          "Node.js / Django / Laravel",
          "Integration with DHIS2, ArcGIS Online, CKAN, etc."
        ],
        dashboards: [
          "Streamlit, Dash, Power BI, Metabase",
          "Leaflet / Mapbox / OpenLayers",
          "Google Data Studio / R Shiny"
        ]
      },
      targetSectors: [
        "Health",
        "Energy",
        "Agriculture",
        "Environment",
        "Governance"
      ]
    }
  ];