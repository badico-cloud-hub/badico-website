exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /typeform/,
            loader: "null-loader",
          },
          {
            test: /material-ui/,
            loader: "null-loader",
          },
        ],
      },
    })
  }
}
