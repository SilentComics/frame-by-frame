"use strict";

// Load plugins
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const cp = require("child_process");
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const sharp = require("sharp");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const basswork = require("gulp-basswork");
const size = require("gulp-size");
const uglify = require("gulp-uglify");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./_site/"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean assets
function clean() {
  return del(["./_site/assets/"]);
}

// Optimize & resize images for PhotoSwipe galleries
// specify transforms
const transforms = [
  {
    src: "./Galleries/*",
    dist: "./img/gallery/_1920x960/",
    options: {
      width: 1920,
      height: 960,
      fit: "cover"
    }
  },
  {
    src: "./Galleries/*",
    dist: "./img/gallery/_960x480/",
    options: {
      width: 960,
      height: 480,
      fit: "cover"
    }
  }
];

// resize images
function images(done) {
  transforms.forEach(function(transform) {
    // if folder does not exist create it with all above folders
    if (!fs.existsSync(transform.dist)) {
      fs.mkdirSync(transform.dist, { recursive: true }, err => {
        if (err) throw err;
      });
    }

    // glob all files
    let files = glob.sync(transform.src);

    // for each file, apply transforms and save to file
    files.forEach(function(file) {
      let filename = path.basename(file);
      sharp(file)
        .resize(transform.options)
        .toFile(`${transform.dist}/${filename}`)
        .catch(err => {
          console.log(err);
        });
    });
  });
  done();
}

// exports (Common JS)
module.exports = {
  resize: images
};

// CSS task
function css() {
  return gulp
    .src("./src/silent-tachyons.css")
    .pipe(plumber())
    .pipe(basswork())
    .pipe(gulp.dest("./assets/css/"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(size({gzip: false, showFiles: true, title:"cssnano css"}))
    .pipe(size({gzip: true, showFiles: true, title:"cssnano gzipped css"}))
    .pipe(gulp.dest("./assets/css/"))
    .pipe(browsersync.stream());
}

// Lint scripts
function scriptsLint() {
  return gulp
    .src(["./gulpfile.js"])
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Transpile, concatenate and minify scripts
function scripts() {
  return gulp
      .src(["./assets/photoswipe/dist/*.js", "_js/photoswipe.alt.js"])
      .pipe(plumber())
      .pipe(concat("photoswipe.all.js"))
      .pipe(uglify())
      // folder only, filename is specified in webpack config
      .pipe(gulp.dest("./assets/js"));
}

function pswpassets() {
  return gulp
  .src(["./assets/photoswipe/dist/default-skin/*.png", "./assets/photoswipe/dist/default-skin/*.svg", "/assets/photoswipe/dist/default-skin/*.gif"])
  .pipe(gulp.dest("./css"));
}

function jsall() {
  return gulp
    .src(["./_js/lazyload.js"])
    .pipe(concat("all.js"))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest("./assets/js"));
}

// Jekyll
function jekyll() {
  return cp.spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" });
}

// Watch files
function watchFiles() {
  gulp.watch("./src/**/*", css);
  gulp.watch("./assets/js/**/*", gulp.series(scriptsLint, scripts));
  gulp.watch(
    [
      "*.html",
      "css/**/*.css",
      "./_includes/**/*",
      "./_layouts/**/*",
      "./_pages/**/*",
      "./_posts/**/*",
      "./_comics/**/*"
    ],
    gulp.series(jekyll, browserSyncReload)
  );
  gulp.watch("./img/**/*", images);
}

// Tasks
gulp.task("images", images);
gulp.task("css", css);
gulp.task("js", gulp.series(scriptsLint, scripts, jsall));
gulp.task("pswpassets", pswpassets);
gulp.task("jekyll", jekyll);
gulp.task("clean", clean);

// build
gulp.task(
  "build",
  gulp.series(clean, gulp.parallel(css, images, jekyll, "js", "pswpassets"))
);

// watch
gulp.task("watch", gulp.parallel(watchFiles, browserSync));
