#!/usr/bin/env node
const { program } = require("commander");
const { add_icon_to_congo } = require("./update_icon");

// Adds an icon to the project.
program
  .command("add-icon <icon_name>")
  .description("Add icon to the project")
  .action(add_icon_to_congo);

program.parse(process.argv);
