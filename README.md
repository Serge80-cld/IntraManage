Mini‑application RH — API Node.js + SQL Server + Frontend HTML/JS
Présentation du projet
IntraManage est une mini‑application RH permettant d’afficher la liste des employés depuis une base SQL Server via une API Node.js.
Le projet démontre une architecture fullstack simple, propre et professionnelle, incluant :

Backend Node.js (Express)

Base de données SQL Server

Frontend HTML/CSS/JS

Documentation technique complète

Intégration GitHub structurée

Ce projet sert de lab pédagogique et de preuve de compétences pour un poste Cloud / Modern Workplace / DevOps.

 Architecture globale
Code
+------------------+        +------------------+        +----------------------+
|   Frontend       | -----> |   API Node.js    | -----> |   SQL Server         |
| HTML / CSS / JS  |        | Express + CORS   |        | Table Employees      |
+------------------+        +------------------+        +----------------------+
Le frontend appelle l’API via fetch()

L’API interroge SQL Server via mssql

Les données sont renvoyées en JSON

Le frontend affiche dynamiquement la liste des employés

 Structure du dépôt
Code
IntraManage/
│
├── api/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── docs/
│   ├── fiche-technique-phase1-sql.md
│   ├── fiche-technique-phase2-api.md
│   ├── fiche-technique-phase3-tests.md
│   ├── fiche-technique-phase4-frontend.md
│   └── autres documents…
│
└── README.md
🛠️ Technologies utilisées
Backend
Node.js

Express

CORS

mssql (connexion SQL Server)

Base de données
SQL Server 2019

Table : Employees

Colonnes : Id, FirstName, Lastname, Department

Frontend
HTML5

CSS3

JavaScript (Fetch API)

Live Server (VS Code)

🔌 API — Endpoints disponibles
✔️ GET /employees
Retourne la liste des employés :

json
[
  {"Id":1,"FirstName":"John","Lastname":"Doe","Department":"IT"},
  {"Id":2,"FirstName":"Sarah","Lastname":"Connor","Department":"HR"},
  {"Id":4,"FirstName":"Mike","Lastname":"Ross","Department":"Finance"}
]
💻 Frontend — Aperçu
Le frontend affiche les employés dans un tableau HTML dynamique.

Fonctionnalités :

Appel API via fetch()

Génération automatique des lignes du tableau

Gestion des erreurs

Interface simple et claire

📘 Documentation technique
Toutes les étapes du projet sont documentées dans /docs :

Installation SQL Server

Création de la table Employees

Développement de l’API Node.js

Tests Postman

Intégration frontend

Résolution des erreurs (CORS, Live Server, etc.)

 Objectifs pédagogiques
Ce projet démontre :

La maîtrise d’une architecture fullstack simple

La capacité à intégrer API + SQL Server

La compréhension du CORS et des appels HTTP

La structuration d’un dépôt GitHub professionnel

La documentation technique claire et exploitable

 Roadmap (prochaines étapes)
[ ] Ajout du CRUD complet (POST / PUT / DELETE)

[ ] Ajout d’un formulaire d’ajout d’employé

[ ] Version Bootstrap (UI moderne)

[ ] Version React (composants + hooks)

[ ] Dashboard professionnel (Material UI)

[ ] Authentification (JWT / Entra ID)

 Auteur
Serge — Cloud / Modern Workplace Engineer  
Azure • AWS • Intune • Entra ID • Hybrid AD • Automation • PowerShell
Portfolio GitHub : https://github.com/Serge80-cld/IntraManage
LinkedIn : https://www.linkedin.com/in/serge-ngindu-48861031a
