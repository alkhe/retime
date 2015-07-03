import gulp from 'gulp';
import babel from 'gulp-babel';

const src = './src/**/*.js',
	lib = './lib';

gulp.task('default', () => gulp.watch(src, 'build'));

gulp.task('build', () =>
	gulp.src(src)
		.pipe(babel({ stage: 0 }))
		.pipe(gulp.dest(lib))
);
