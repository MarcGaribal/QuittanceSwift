# QuittanceSwift
Manager of receipts and contracts


## Lancement de l'application

### Démarrage des conteneurs Docker
docker-compose up --build

### Arrêter les conteneurs
docker-compose down

### Redémarrer les conteneurs
docker-compose restart

### Accéder à un conteneur en cours d'exécution
docker-compose exec <service_name> /bin/bash

#### Par exemple, pour accéder au conteneur de l'application PHP :
docker-compose exec app /bin/bash

### Accéder à l'application
http://localhost:8080


