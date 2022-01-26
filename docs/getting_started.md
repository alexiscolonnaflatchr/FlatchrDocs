---
sidebar_position: 1
description: Comment se connecter à l'API Flatchr ? 
---

# Getting Started

## Introduction

#### URL

L'URL racine de l'API Flatchr est : https://api.flatchr.io.

#### Format
L'API est au format REST et toutes les données entrantes ou sortantes sont au format JSON encodé en UTF-8.

:::note
Il est de la responsabilité du client du web service de s’assurer que les caractères transmis ne contiennent pas de symboles « exotiques » (par exemple, un texte copié/collé à partir de Word contient des caractères comme les « ‘ » ou des puces non supportés par le web service).

:::

Les reponses retournées par l'API sont accompagnées des statuts du protocole HTTP reflétant l’état de l’exécution de la requête sur la plateforme flatchr.io.


#### Sécurité
Il est important de noter que les appels à l'API ne peuvent être effectués qu'en HTTPS et que chaque connexion est loggée avec l'adresse IP de l'appelant.

:::caution Avant de commencer
Avant toute mise en place, veuillez valider l’adéquation entre ce service et votre mode de fonctionnement avec votre interlocuteur Flatchr.

[Conditions générales d'utilisation](https://flatchr.io/cgu)

[Support Flatchr](mailto:support@flatchr.io)

:::

<br/>

## Identification

### Token
:::danger Important
Votre `API_KEY` doit être générée dans votre espace Flatchr [**Configuration > Clés**](http://app.flatchr.io/#/board/settings/keys).
:::


Flatchr utilise le système d'authentification par token OAuth pour autoriser l'accès à son API. 

Le token OAuth doit être inclus dans toutes les requêtes :

1. Dans le header de la requête
` Authorization: Bearer API_KEY `
2. Ou à travers un argument dans la requête `?token=API_KEY`

<br/>

### Slug

Pour certaines requêtes vous aurez besoin de votre `slug`, c’est la référence unique de votre entreprise qui se trouve dans l’URL de votre site carrière.
Il est aussi disponible dans [**Administration > Avancée** ](http://app.flatchr.io/#/board/settings/advanced) > **Configuration sous-domaine**

:::info Exemple
**Exemple:** dans https://avivacuisines.flatchr.io, `avivacuisines` est la référence unique ou "slug")
:::

<br/>

### Identifiant de l'entreprise

Pour certaines requêtes vous aurez besoin de votre `clé entreprise`, c’est la clé unique qui définit votre entreprise dans nos données.  
Elle se trouve dans l'onglet [**Configuration > Clés**](http://app.flatchr.io/#/board/settings/keys)

:::info Exemple

![exemple clé d'entrpris](/img/screenshot_cle_entreprise.png)

Ici la clé entreprise est donc `G6KzqPnNLyp31m0l`

:::
