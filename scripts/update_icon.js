const jsdom = require("jsdom");
const fs = require("fs");

const DOC_DIR = "./exampleSite/content/samples/icons";
const FONTAWESOME_VERSION = "v6.5.1";
const DEFAULT_TABLE_DELIMITER = "| -------------------- | --------------------------------- |";

/**
 * Saves an icon to the congo project and update documentation.
 * @param {string} icon_name Icon name from Font Awesome to download
 * @returns null
 */
const add_icon_to_congo = async (icon_name) => {
  try {
    const icon_url = create_icon_url(icon_name, FONTAWESOME_VERSION);
    const file = await get_file(icon_url);
    const final_svg = modify_svg_string(file);
    const icon_download_path = create_icon_download_path(icon_name);
    save_file(icon_download_path, final_svg);
    add_documentation(icon_name);
  } catch (e) {
    console.log(e);
    return;
  }
};

const modify_svg_string = (svg_string) => {
  try {
    dom = new jsdom.JSDOM(svg_string);
    svg = dom.window.document.documentElement.querySelector("svg");
    svg.querySelector("path").setAttribute("fill", "currentColor");
    return svg.outerHTML;
  } catch (e) {
    throw new Error("Invalid SVG file");
  }
};

const create_icon_url = (icon_name, fontawesome_version) => {
  return `https://site-assets.fontawesome.com/releases/${fontawesome_version}/svgs/brands/${icon_name}.svg`;
};

const create_icon_download_path = (icon_name) => {
  return `./assets/icons/${icon_name}.svg`;
};

const get_file = async (url) => {
  console.log("Getting file at " + url + "...");
  const response = await fetch(url);
  if (response.status >= 400) {
    throw new Error("Could not download icon / icon not found");
  }
  return response.text();
};

const save_file = (file_path, file) => {
  console.log("Saving file at " + file_path + "...");
  fs.writeFile(file_path, file, function (err) {
    if (err) throw err;
    console.log("File saved!");
  });
};

const add_documentation = async (icon_name) => {
  files = get_md_docs();

  for (const file of files) {
    const file_path = `${DOC_DIR}/${file}`;
    const file_contents = fs.readFileSync(file_path, "utf8");
    const file_result = process_file(file_contents, icon_name);
    console.log(file_result);
    // Save file_result to file_path
    fs.writeFile(file_path, file_result, function (err) {
      if (err) throw err;
    });
    console.log(`Updated ${file_path}`);
  }
};

/**
 * Process the file contents to include the icon name.
 * @param {string} file_contents contents of the documentation files.
 * @returns {string} processed file contents.
 */
const process_file = (file_contents, icon_name) => {
  const [headers, table] = file_contents.split(DEFAULT_TABLE_DELIMITER);
  const table_rows = table.split("\n").map((x) => x.trim()).filter((row) => row !== "");
  console.log(table_rows);
  table_rows.push(table_rows[0].replace("amazon", icon_name));
  table_rows.sort();
  const new_table = table_rows.join("\n");
  return `${headers.trimEnd()}\n${DEFAULT_TABLE_DELIMITER}\n${new_table}\n`;
};

const get_md_docs = () => {
  return fs.readdirSync(DOC_DIR).filter((file) => file.endsWith(".md"));
};

module.exports = { add_icon_to_congo };
