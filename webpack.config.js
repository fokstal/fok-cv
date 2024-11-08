import path from "path";
import { fileURLToPath } from "url";

// Получаем путь к текущему модулю
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/scripts/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/, // Обработка SASS
        use: [
          "style-loader", // Вставляет CSS в DOM
          "css-loader",   // Преобразует CSS в CommonJS
          "sass-loader",  // Компилирует SASS в CSS
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"], // Добавьте .scss
  },
  output: {
    filename: "scripts.js",
    path: path.resolve(__dirname, "public", "dist"),
  },
  mode: "development", // Или "production"
};
