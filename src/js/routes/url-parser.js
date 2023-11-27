const UrlParser = {
  
  parseURLForRoutes() {
    const url = window.location.hash;
    console.log(url);
    if (url) {
      const hashVal = url.slice(2).toLowerCase();
      const splitURL = this._urlSplitter(hashVal);
      const urlCombiner = this._urlCombiner(splitURL);
      console.log("Ini nilai urlCombiner karna ada url, ", urlCombiner);
      return urlCombiner
    } else {
      const splitURL = this._urlSplitter(url);
      const urlCombiner = this._urlCombiner(splitURL);
      console.log("Ini nilai urlCombiner, ", urlCombiner);
      return urlCombiner;
    }
  },

  _urlSplitter(hashUrl) {
    const urlParam = hashUrl.split("/");
    console.log('URL HASIL SPLITTER : ', urlParam);
    return {
      page: urlParam[0] || null,
      verb: urlParam[1] || null,
      id: urlParam[2] || null,
    };
  },

  _urlCombiner({ page, verb, id }) {
    return (
      (page ? page : "/") +
      (verb ? "/" + verb : "") 
    );
  },
};

export default UrlParser;
