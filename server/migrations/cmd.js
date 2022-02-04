const { Command } = require("commander");
const fs = require("fs");
const cli = new Command();
const migrationsDir = "versions";

cli.name("db-migrations").description("Postgres db migrations tool");

//cli.command('init')

cli
  .command("create")
  .description("create a new migration")
  .option("-n, --name <string>", "migration name")
  .option("-e, --ext <string>", "file extension", "sql")
  .action((args) => {
    const tstamp = new Date().getTime();
    const underscrName = args.name.replace(" ", "_");
    fs.writeFileSync(
      `${migrationsDir}/${tstamp}_${underscrName}_up.${args.ext}`,
      ""
    );
    fs.writeFileSync(
      `${migrationsDir}/${tstamp}_${underscrName}_down.${args.ext}`,
      ""
    );
  });

cli.parse();
