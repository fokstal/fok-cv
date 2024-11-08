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
          {
            loader: "sass-loader", // Компилирует SASS в CSS
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, "src/styles")], // Укажите путь к стилям
              },
            },
          },
        ],
      },
    ],
  },
  ignoreWarnings: [
    {
      module: /sass-loader/,
      message: /Deprecation Warning/,
    },
    {
      module: /sass-loader/,
      message: /repetitive deprecation warnings omitted/,
    },
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"], // Добавьте .scss
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@scripts": path.resolve(__dirname, "src/scripts/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@icons": path.resolve(__dirname, "public/assets/icons/"),
      "@images": path.resolve(__dirname, "public/assets/images/"),
      "@fonts": path.resolve(__dirname, "public/assets/fonts/"),
    }
  },
  output: {
    filename: "scripts.js",
    path: path.resolve(__dirname, "public", "dist"),
  },
  mode: "development", // Или "production"
};