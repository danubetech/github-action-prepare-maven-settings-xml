# github-action-prepare-maven-settings-xml

Action can be used to prepare a maven settings.xml file with multiple server entries. The file content is saved to `$SETTINGS_FILE` as a global env variable. No files are created or manipulated with this action.

## Usage

```shell script
  - name: Prepare multi server settings file
    uses: danubetech/github-action-prepare-maven-settings-xml@master
    with:
      server_ids: <server_id1>,<server_id2>,<server_idN>
```

Can be consumed by e.g. danubetech's [github-action-maven-deploy](https://github.com/danubetech/github-action-maven-deploy) action