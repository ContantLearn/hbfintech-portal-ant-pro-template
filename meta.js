module.exports = {
    prompts: {
        name: {
            type: "String",
            default: "hbfintech-portal-ma",
            message: "Project Name"
        },
        description: {
            type: "String",
            default: "HBFintech Portal Project",
            message: "Project description"
        },
        cssPreHandler: {
            choices: [ "scss", "less" ],
            type: "list",
            default: "scss",
            message: "using scss or less ?"
        },
        autoInstall: {
            type: "confirm",
            default: false,
            message: "Automatic execution of 'npm install'？"
        }
    }
};