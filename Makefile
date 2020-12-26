help:
	@echo '--------------------'
	@echo "\033[32m Commands: \033[0m"
	@echo '--------------------'
	@echo "make up"
	@echo "make down"
	@echo '--------------------'

up:
	cd infra && docker-compose up -d

down:
	cd infra && docker-compose down
