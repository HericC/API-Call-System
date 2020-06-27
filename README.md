# API-Call-System

API de um sistema de chamado, desenvolvido para um projeto de fins didáticos realizado durante o curso de Desenvolvimento de Sistemas no SENAI.

## Installation

Windows:

You need to have nodejs installed.

If you don't have nodejs installed, download it here:
```sh
https://nodejs.org/en/
```

Clone the GitHub repository
```sh
git clone https://github.com/HericC/API-Call-System.git
```

## Development Setup

Installing dependencies
```sh
npm install
```

Running API
```sh
npm start
```

## Routes

Home Routes
```sh
get: /
get: /views-sectors
get: /views-equipment/id
```

User Routes
```sh
post: /user/login
post: /user/add-user
post: /user/update-password
```

Called Routes
```sh
get: /called/views-calleds
post: /called/add-called
post: /called/update-technical
post: /called/update-solution
post: /called/concluded-called
```
