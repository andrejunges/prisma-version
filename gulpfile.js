var gulp = require('gulp');
var rimraf = require('rimraf');
var d = new Date(),
    vDesc = './Versions/Version-' + d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + '/';

gulp.task('genV', function () {
    gulp.src('../Controles/DoisDWeb.Web.Mvc/Content/**').pipe(gulp.dest('base/Content'));
    gulp.src('../Controles/DoisDWeb.Web.Mvc/Scripts/**').pipe(gulp.dest(vDesc + 'base/Scripts'));
    gulp.src('../Controles/DoisDWeb.Web.Mvc/plugins/**').pipe(gulp.dest(vDesc + 'base/plugins'));
    gulp.src('../Controles/DoisDWeb.Web.Mvc/UI/**').pipe(gulp.dest(vDesc + 'base/UI'));
    gulp.src('../Controles/DoisDWeb.Web.Mvc/ViewModels/**').pipe(gulp.dest(vDesc + 'base/ViewModels'));
    gulp.src('../Controles/DoisDWeb.Web.Mvc/Views/**').pipe(gulp.dest(vDesc + 'base/Views'));

    var prismaPath = '../Projetos/Prisma/Prisma/';
    gulp.src(prismaPath + 'bin/*.dll').pipe(gulp.dest(vDesc + 'bin'));
    gulp.src(prismaPath + 'Content/**').pipe(gulp.dest(vDesc + 'Content'));
    gulp.src(prismaPath + 'images/**').pipe(gulp.dest(vDesc + 'images'));
    gulp.src(prismaPath + 'SCRIPTS/**').pipe(gulp.dest(vDesc + 'SCRIPTS'));
    gulp.src(prismaPath + 'ESTRUTURA/**').pipe(gulp.dest(vDesc + 'ESTRUTURA'));
    gulp.src(prismaPath + 'ViewModels/**').pipe(gulp.dest(vDesc + 'ViewModels'));
    gulp.src(prismaPath + 'Views/**').pipe(gulp.dest(vDesc + 'Views'));
    gulp.src([prismaPath + '*.asax', prismaPath + 'MenuOpcoes.xml', prismaPath + '*.ashx']).pipe(gulp.dest(vDesc));
});

gulp.task('moveVersion', function () {
    gulp.src(vDesc + '**').pipe(gulp.dest('\\\\srv2dweb/Web/PrismaTeste/'));
});

gulp.task('default', ['genV']);
