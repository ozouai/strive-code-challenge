package web

//go:generate go-bindata-assetfs -prefix client/ -pkg web -o ./bindata_assetfs.go client/build/...

import (
	assetfs "github.com/elazarl/go-bindata-assetfs"
)

func AssetFS() *assetfs.AssetFS {
	return assetFS()
}
