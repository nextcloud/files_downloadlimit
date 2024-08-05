<!--
  - SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
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

#### PropFind

```sh
hurl propfind.hurl --variable owner=admin --variable path=/welcome.txt
```

> propfind.hurl
````hurl
PROPFIND https://nextcloud.local/remote.php/dav/files/{{owner}}/{{path}}

[BasicAuth]
{{owner}}: {{owner}}

```xml
<?xml version="1.0"?>
<d:propfind xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns" xmlns:nc="http://nextcloud.org/ns">
	<d:prop>
		<oc:fileid />
		<d:displayname />
		<d:getlastmodified />
		<d:getcontenttype />
		<oc:size />
		<oc:owner-id />
		<oc:share-types />
		<nc:sharees />
		<nc:share-download-limits />
	</d:prop>
</d:propfind>
```

HTTP 207
[Asserts]
xpath "//nc:share-download-limits" isCollection
````

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
