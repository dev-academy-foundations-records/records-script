# records-script
Script to pull student's code from their git repos and push combined records to a cohort repo.

### Instructions
1. Change the students variable to contain all the GitHub usernames for one cohort. Strings seperated by spaces.
2. Change the cohort variable to (in capitals) the cohort name and year.
3. Create your own access token from [Personal Access Tokens](https://github.com/settings/tokens/new?scopes=repo&description=Foundations%20records%20script) and add it to the `my_access_token` variable.
4. Run the script.
*(Running it for the first time? First do this:)*
```shell
chmod +x records.sh
```

```shell
./records.sh
```

### Troubleshooting
<details open>
<summary>On Windows and receiving error: `./records.sh: 5: Syntax error: "(" unexpected`</summary>

  1. Try changing line 1 from `#!/bin/sh` to `#!/usr/bin/env bash`

</details>

