module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/carousel-portfolio/'
    : '/',
    "transpileDependencies": [
      "vuetify"
    ]
}