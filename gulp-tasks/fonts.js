import { src, dest } from "gulp";
import plumber from "gulp-plumber";

const fonts = () =>
  src("app/fonts/**/*.{ttf,woff}").pipe(plumber()).pipe(dest("dist/fonts"));

export default fonts;
