import { exec } from "child_process";
import chalk from "chalk";

// Function to execute a command and return a promise
function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(chalk.red(`Error: ${error.message}`));
            } else if (stderr) {
                reject(chalk.yellow(`Stderr: ${stderr}`));
            } else {
                resolve(stdout);
            }
        });
    });
}

(async () => {
    try {
        console.log(chalk.green("Running Python script..."));
        const pythonOutput = await runCommand("python main.py");
        console.log(chalk.green("Python Output:\n") + chalk.magenta(pythonOutput));

        console.log(chalk.green("Running JavaScript script..."));
        const jsOutput = await runCommand("node main.js");
        console.log(chalk.green("JavaScript Output:\n") + chalk.magenta(jsOutput));

        console.log(chalk.green("Running Ruby script..."));
        const rbOutput = await runCommand("ruby main.rb");
        console.log(chalk.green("Ruby Output:\n") + chalk.magenta(rbOutput));
    } catch (error) {
        console.error(error);
    }
})();
