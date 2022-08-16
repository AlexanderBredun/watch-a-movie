module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                
                @import "@/styles/_mixins.scss";
                @import "@/styles/_constants.scss";
            `
            }
        }
    },
    devServer: {
        disableHostCheck: true,
        port: 4000,
        public: '0.0.0.0:4000'
    },
    publicPath: "/"
};