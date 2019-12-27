function ActualizarCacheDinamico(dynamicCache, req, res) {

    if (res.ok) {
        return caches.open(dynamicCache).then(cache => {
            cache.put(req, res.clone());
            return res.clone();
        });
    } else { //si falla solo se envia nuevamente la respuesta
        return res.clone();
    }

}