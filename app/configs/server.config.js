module.exports = exports = {
  protocols : {
    http : {
      port: 5002
    }
  },

  middleware : {
    validator  : { },
    bodyParser : {
      urlencoded : { extended: false },
      json : { }
    },

    morgan: {
      format: 'dev',
      immediate: true
    }
  }
};
