let project_folder = "build"
let source_folder = "src"

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: [source_folder + "/*.html", "!"+source_folder+ "/_*.html"],
        css: source_folder + "/scss/*.scss",
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: source_folder+ "/**/*.html",
        css: source_folder+ "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    clean: "./"+ project_folder + "/"

}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require("browser-sync").create(),
    fileinclude = require("gulp-file-include"),
    del = require("del"),
    scss = require('gulp-sass')(require('sass')),
    autoprefixer = require("gulp-autoprefixer"),
    group_media = require("gulp-group-css-media-queries"),
    clean_css = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify-es").default 

function browserSync(params) {
    browsersync.init({
        server:{
            baseDir: "./" + project_folder + "/"
        },
        port:3000,
        notify:false
    })

}

function clean(params) {
    return del(path.clean);
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.img], images)
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude()) 
        .pipe(dest(path.build.html)) 
        .pipe(browsersync.stream())

}

function js() {
    return src(path.src.js)
        .pipe(fileinclude()) 
        .pipe(dest(path.build.js)) 
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js)) 
        .pipe(browsersync.stream())

}


function images() {
    return src(path.src.img)
        // .pipe(
        //     webp({
        //         quality: 80
        //     })
        // )
        // .pipe(dest(path.build.img))
        // .pipe(dest(path.src.img)) // ?????? ?????? webp 
        // .pipe(
        //     imagemin({
        //         progressive: true,
        //         svgoPlugins: [{removeViewBox: false}],
        //         interlaced: true,
        //         optimizationLevel: 2 // 0 to 7
        //     })
        // ) // doesn't work on macos, commented
        .pipe(dest(path.build.img)) 
        .pipe(browsersync.stream())

}

function css() {
    return src(path.src.css)
        .pipe (
            scss({ outputStyle: 'expanded' }).on('error', scss.logError))
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserlist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(dest(path.build.css)) 
        .pipe(clean_css({level: 2}))
        .pipe(
            rename({
                extname: ".min.css" 
            })
        )
        .pipe(dest(path.build.css)) 
        .pipe(browsersync.stream())

}

function fonts(params) {
    src(path.src.fonts)
        .pipe(dest(path.build.fonts))
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts))
}


let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts))
let watch = gulp.parallel(build, watchFiles, browserSync)

exports.fonts = fonts 
exports.images = images
exports.js = js
exports.css = css
exports.html = html
exports.build = build
exports.watch = watch
exports.default = watch

