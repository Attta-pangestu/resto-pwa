const UrlParser = {
  
  parseURLForRoutes() {
    const url = window.location.hash || '/';
    const sliceUrl = url.slice(2).toLowerCase();
    const splitURL = this._urlSplitter(sliceUrl);
    console.log( 'ini split url',splitURL);
    const urlCombiner = this._urlCombiner(splitURL);
    console.log("Ini nilai urlCombiner , ", urlCombiner);
    return urlCombiner;
  },

  parseURLParam() {
    const url = window.location.hash || '/';
    const sliceUrl = url.slice(2).toLowerCase();
    const splitURL = this._urlSplitter(sliceUrl);
    return splitURL;
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
