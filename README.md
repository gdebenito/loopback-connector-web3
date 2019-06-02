# loopback-connector-web3

Do not use this in production.

Example at (https://github.com/gdebenito/loopback-web3-example)

Datasource.json example
```json
{
	"name":"web3datasource",
	"connector":"@gdbc/loopback-connector-web3",
	"provider":"ws://localhost:8545",
	"debug": true
}
```