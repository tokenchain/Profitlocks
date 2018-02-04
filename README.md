# profitlocks
The decentralized profit locking machine and trade with the trends

## Environment file configurations

#### requires: the database connector url to hold all your trading data - it is configurated to be a postgres db
DB_POSTGRES=
#### requires: the secret passphrase for the api key connector has to be 32 characters uppercase A-Z and number 0-9
SCRET_CCX_SALT_KEY=
#### optional: the domain name of this bot if it has one
REMOTE_PRODUCTION_DOMAIN=
#### optional: the bot ID name as the ID number between the range of [299 - 999]
GROUPID=
#### optional: the retry times when it fails to make connection to api server
RETRIES=4
#### requires: the bot type, type-a | type-t
TYPE=
#### optional: token api for telegram bot token
TELEGRAM_BOT_TOKEN =
#### optional: token api for telegram bot charID
TELEGRAM_CHAT_ID = 
