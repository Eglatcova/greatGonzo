import { src, dest } from "gulp";
import plumber from "gulp-plumber";

const libs = () => src("app/libs/*.js").pipe(plumber()).pipe(dest("dist/libs"));

export default libs;
