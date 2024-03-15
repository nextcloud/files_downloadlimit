# Files download limit

[![Node GitHub Action](https://github.com/nextcloud/files_downloadlimit/workflows/Node/badge.svg)](https://github.com/nextcloud/files_downloadlimit/actions?query=workflow%3ANode)
[![Lint GitHub Action](https://github.com/nextcloud/files_downloadlimit/workflows/Lint/badge.svg)](https://github.com/nextcloud/files_downloadlimit/actions?query=workflow%3ALint)

This app allows limiting the number of downloads for external link shares.

---

## API

The examples below can be run using [hurl](https://github.com/Orange-OpenSource/hurl).

> [!TIP]
> To ignore assertions pass the `--ignore-asserts` flag.

### External share limit

An external share limit may be queried by its token.

#### Get

```sh
hurl get.hurl --variable token='2Nyq27RKT7Jw9q3'
```

> get.hurl
```hurl
GET https://nextcloud.local/ocs/v2.php/apps/files_downloadlimit/api/v1/{{token}}/limit

OCS-APIRequest: true
Accept: application/json

[BasicAuth]
alice: alice

HTTP 200
[Asserts]
jsonpath "$.ocs.data.limit" exists
jsonpath "$.ocs.data.count" exists
```

#### Set

```sh
hurl set.hurl --variable token='2Nyq27RKT7Jw9q3' --variable limit=5
```

> set.hurl
```hurl
PUT https://nextcloud.local/ocs/v2.php/apps/files_downloadlimit/api/v1/{{token}}/limit

OCS-APIRequest: true
Accept: application/json

[BasicAuth]
alice: alice

{
	"limit": {{limit}}
}

HTTP 200
[Asserts]
jsonpath "$.ocs.data" isEmpty
```

#### Remove

```sh
hurl remove.hurl --variable token='2Nyq27RKT7Jw9q3'
```

> remove.hurl
```hurl
DELETE https://nextcloud.local/ocs/v2.php/apps/files_downloadlimit/api/v1/{{token}}/limit

OCS-APIRequest: true
Accept: application/json

[BasicAuth]
alice: alice

HTTP 200
[Asserts]
jsonpath "$.ocs.data" isEmpty
```

### Default limit

Admins may set a default limit.

```sh
hurl set-default.hurl --variable limit=1
```

> set-default.hurl
```hurl
PUT https://nextcloud.local/ocs/v2.php/apps/files_downloadlimit/api/v1/limit

OCS-APIRequest: true
Accept: application/json

[BasicAuth]
admin: admin

{
    "limit": {{limit}}
}

HTTP 200
[Asserts]
jsonpath "$.ocs.data" isEmpty
```
