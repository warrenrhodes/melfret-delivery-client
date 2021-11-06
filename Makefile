# variable declaration
.PHONY: start-postgres init-postgres drop-database create-database add-database-role grant-database-permission create-os-user
pg_version?="13"
pg_port?="5333"
pg_path?="/usr/lib/postgresql"
user_name?="anoncell"
log_file_name?="pg_log.bt"
data_root?="/usr/local/pgsql"
data_path?="$(data_root)/data"
data_log?="$(data_root)/log"
db_name?="mel_delivery_service_db"
role_name?="admin_user"
role_pass?="admin_user"
take?=50

su0 = sudo
rusr = runuser

start-postgres: ## demarre le serveur postgres
	$(su0) $(rusr) $(user_name) -c "$(pg_path)/$(pg_version)/bin/postgres -p $(pg_port) -D $(data_path) >\"$(data_log)/$(log_file_name)\" 2>&1 &"
	@echo "done!"

show-postgres-log: ## affiche les logs du serveur postgres
	$(su0) $(rusr) $(user_name) -c "tail -n ${take} -f \"$(data_log)/$(log_file_name)\""

create-os-user: ### create sytem user who should be responsible for making a futher action.
	$(su0) useradd $(user_name)
	@echo "add a password for the new user $(user_name)"
	$(su0) passwd $(user_name)

init-postgres: ## create new user and initialize postgres data for the user
	$(su0) adduser $(user_name) "postgres"
	$(su0) mkdir $(data_root)
	$(su0) chmod 770 $(data_root)
	$(su0) chown $(user_name) $(data_root)
	$(su0) chgrp $(user_name) $(data_root)
	@echo "starting initialisation..."
	$(su0) $(rusr) $(user_name) -c  "mkdir $(data_path)"
	$(su0) $(rusr) $(user_name) -c  "$(pg_path)/$(pg_version)/bin/initdb -D $(data_path)"
	$(su0) $(rusr) $(user_name) -c  "mkdir $(data_log)"
	@echo "done!"

drop-database: ## drop previous created database. 
	$(su0) $(rusr) $(user_name) -c  "dropdb -p $(pg_port) $(db_name)"
	@echo "done!"

create-database: ## create new database and new admin role
	$(su0) $(rusr) $(user_name) -c  "createdb -p $(pg_port) $(db_name) "
	@echo "done!"

add-database-role: ## creatre diffrent role with diffrent permission on all tables in current database. I just consider a super admin role who can do every thing in the database.
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"create role $(role_name) with login password '$(role_pass)' noinherit;\""
	@echo "done!"

grant-database-permission: ## grant permission to all previous created role
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"alter database $(db_name) owner to $(role_name);\""
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"grant all on schema public to $(role_name);\""
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"grant all on all sequences in schema public to $(role_name);\""
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"alter default privileges in schema public grant all on sequences to $(role_name);\""
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"grant all on all functions in schema public to $(role_name);\""
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"grant all on all procedures in schema public to $(role_name);\""
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"alter default privileges in schema public grant all on functions to $(role_name);\""
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"grant all on all routines in schema public to $(role_name);\""
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"alter default privileges in schema public grant all on routines to $(role_name);\""
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"grant all on all tables in schema public to $(role_name);\""
	$(su0) $(rusr) $(user_name) -c  "psql -d $(db_name) -p $(pg_port) -c \"alter default privileges in schema public grant all on tables to $(role_name);\""
	@echo "done!"

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
