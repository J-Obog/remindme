const fs = require("fs");
const { Command } = require("commander");
const cli = new Command();
const migrationsDir = "versions";

cli
  .name("db-migrations")
  .description("Postgres db migrations tool")
  .option("-m, --mode <string>", "mode");

cli
  .command("create")
  .description("create a new migration")
  .option("-n, --name <string>", "migration name")
  .action((args) => {
    const currDate = new Date();
    const underscoreName = args.name.replace(" ", "_");
    const sampleFile = fs.readFileSync("./example.js", {
      encoding: "utf8",
    });
    const fileContent = sampleFile
      .replace("{% mnm %}", `Name: ${underscoreName}`)
      .replace("{% cdt %}", `Date: ${currDate}`);

    fs.writeFileSync(
      `${migrationsDir}/${currDate.getTime()}_${underscoreName}.js`,
      fileContent
    );
  });

/*cli
  .command("up")
  .description("execute a db up command")
  .option("-n, --name <string>", "name of a specific migration")
  .option("-c, --catch <int>", "some text", 1)
  .action((args) => {
    const migrationFiles = fs.readdirSync(migrationsDir);
    const startIdx = args.name ? migrationFiles.indexOf(args.name) : 0;
    const endIdx = startIdx + args.catch;
    for (let i = startIdx; i < endIdx; i++) {
      const { up } = require("./" + migrationsDir + "/" + migrationFiles[i]);
      up();
    }
  });*/

cli.parse();
