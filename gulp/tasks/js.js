import webpack from "webpack-stream";

export const js = () => {
  return app.gulp.src(app.path.src.js, { sourcemaps: true })
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "JS",
      message: "Error: <%= error.message %>"
    })
  ))
  .pipe(webpack({
    mode: 'development',
    entry: { // Здесь определяются точки входа для каждого исходного файла
      index: './src/js/index.js',
      // Добавьте другие исходные файлы по аналогии
    },
    output: {
      filename: '[name].min.js', // Используем [name] для сохранения исходных имен файлов
    },
  }))
  .pipe(app.gulp.dest(app.path.build.js, { sourcemaps: '.' }))
  .pipe(app.plugins.browsersync.stream());
}