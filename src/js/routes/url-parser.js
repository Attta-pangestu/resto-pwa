const UrlParser = {
  hashUrl() {
    const url = window.location.hash;
    console.log("INI URL NYA ", url);
    if (url) {
      const hashVal = url.slice(2).toLowerCase();
      const splitURL = this._urlSplitter(hashVal);
      return this._urlCombiner(splitURL);
    }
    const splitURL = this._urlSplitter(url);
    const urlCombiner = this._urlCombiner(splitURL);
    console.log("Ini nilai urlCombiner, ", urlCombiner);
    return urlCombiner;
  },

  _urlSplitter(hashUrl) {
    const urlParam = hashUrl.split("/");
    return {
      page: urlParam[0] || null,
      verb: urlParam[1] || null,
      id: urlParam[2] || null,
    };
  },

  _urlCombiner({ page, verb, id }) {
    return (
      (page ? page : "/") +
      (verb ? "/" + verb : "") +
      (id ? "/" + `id=${id}` : "")
    );
  },
};

export default UrlParser;
