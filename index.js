const core = require('@actions/core');
const { create } = require('xmlbuilder2');

const createSkeleton = () => {
    const rootStr = '<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0  http://maven.apache.org/xsd/settings-1.0.0.xsd"></settings>'
    return create(rootStr);
}

const addServerIds = (serverIds, doc) => {
    const finalDoc = doc.root().ele('servers')
    serverIds.forEach(serverId => {
        finalDoc.ele('server').ele('id').txt(serverId.trim()).up()
            .ele('username').txt('$MAVEN_USERNAME').up()
            .ele('password').txt('$MAVEN_PASSWORD')
    })
    return finalDoc;
}

const serverIds = core.getInput('server_ids').split(',');
const finalDoc = addServerIds(serverIds, createSkeleton());

core.exportVariable("SETTINGS_FILE", finalDoc.end({ prettyPrint: true }));
