# Imunify360 Features

[[toc]]

## External Black/Whitelist Management

To use external files with the list of <span class="notranslate">Black/White IPs</span>, place this list into the following directory:

* for the White List:

<div class="notranslate">

```
/etc/imunify360/whitelist/*.txt
```
</div>

* for the Black List:

<div class="notranslate">

```
/etc/imunify360/blacklist/*.txt
```
</div>

The files may have IP addresses or subnet in [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).

In order to apply the IP lists, run the following command:

<div class="notranslate">

```
imunify360-agent reload-lists
```
</div>

Or restart the agent.

:::warning Warning
Specifying IPs in those files will not prevent Imunify from adding the same IPs to dynamic lists (like Gray list), but all White lists always have the priority over Black lists when it comes to actual filtering of requests/packages.
:::


## RapidScan

RapidScan feature allows you to increase scanning speed by lower system resource usage and gives you an opportunity to scan more frequently, further hardening your systems’ security posture.

#### RapidScan techniques

* **Faster File Integrity Checking**. File metadata, such as file hashes, are stored locally. This means that unchanged files don't need to be rescanned.
* **Efficient Cloud-assisted Scanning**. Imunify360 stores its malicious file hash database in the cloud. We detect malicious files and skip white-listed files. The remaining files are fewer, so the overall scan time is significantly reduced.
* **Optimized Malware Signatures**. Our malware signature database continually expands to match the variety of malicious software. While the database becomes more accurate and comprehensive, it also becomes larger and more cumbersome to index. We tackle this by actively curating the database and re-evaluating complex signatures, recasting any that affect scanning performance.
 
#### What does it mean to you?

When you first enable the RapidScan feature, the first scan will run as before. But subsequent scans will see a speed improvement, anywhere between 5 to 20 times faster. This is the case for both on-demand and scheduled scans, and means you can afford more scans without affecting system performance.

To take advantage of these new improvements, go to your Imunify360 control panel and enable RapidScan in Settings→Malware Scanner. See details [here](/dashboard/#malware).

## Low Resource Usage mode

This is a special operation mode where Imunify360 consumes less CPU and RAM. It is intended for servers with limited resources.

This mode disables <span class="notranslate">[WebShield](/webshield/)</span> switching off GrayList and Captcha. 

<span class="notranslate">_Low Resource Usage_</span> mode also enables the <span class="notranslate">_[Minimized Modsec Ruleset](/dashboard/#waf-settings)_</span> option that disables Imunify WAF rules with a high memory footprint, leaving critical rulesets enabled. 

When the <span class="notranslate">_Low Resource Usage_</span> mode is activated it is reflected on the UI: an Imunify main menu changes color to light green, and an appropriate label appears on the top right.

![](/images/LowResourceUsage.png)

#### How to switch from the Low Resource Usage mode to the normal resource usage mode

You can switch the mode via CLI and in the UI.

In CLI, run the following commands:

<div class="notranslate">

```
imunify360-agent config update '{"WEBSHIELD": {"enable": true}}'
imunify360-agent config update '{"MOD_SEC": {"ruleset": "FULL"}}'
```
</div>

In the UI, do the following steps:

1. Go to <span class="notranslate">_Settings_ | _General_ | _WebShield_</span> and enable _WebShield_:

  ![](/images/WebShieldEnabled.jpeg)

2. Go to <span class="notranslate">_Settings_ | _General_ | _WAF Settings_</span> and disable _Minimized ModSec Ruleset_:

  ![](/images/MinimazedModSecRulesetDisable.jpeg)
  

## Exim+Dovecot brute-force attack protection

:::tip Note
cPanel only, other panels will be added later
:::

Exim+Dovecot brute-force attack protection is an advanced protection against Dovecot brute-force attacks. PAM module protects against IMAP/POP3 brute-force attack and prevents mail account from being compromised via brute-forcing.

**How to enable Dovecot**

We recommend using Imunify360 agent config to enable Dovecot because this allows to correctly switch OSSEC rules/configs:

<div class="notranslate">

```
imunify360-agent config update '{"PAM": {"enable": true, "exim_dovecot_protection": true}}'
```
</div>

**How to disable Dovecot**

To disable all PAM module via config file:

<div class="notranslate">

```
imunify360-agent config update '{"PAM": {"enable": false, "exim_dovecot_protection": false}}'
```
</div>

To disable only Exim+Dovecot via config file:

<div class="notranslate">

```
imunify360-agent config update '{"PAM": {"exim_dovecot_protection": false}}'
```
</div>


The options of the `pam_imunufy` are placed in the file: <span class="notranslate">`/etc/pam_imunify/i360.ini`</span>

**Values**

| | |
|-|-|
|<span class="notranslate">`USER_LOCK_TIMEOUT=5`</span>|a period of time during which a user should be blocked (minutes)|
|<span class="notranslate">`USER_LOCK_ATTEMPTS=10`</span>|a number of attempts after which a user should be blocked|
|<span class="notranslate">`USER_LOCK_MINUTES=5`</span>|a period of time (minutes) during which violation attempts from a user are counted; all attempts earlier than <span class="notranslate">`USER_LOCK_MINUTES`</span> are not counted|
|<span class="notranslate">`USER_IP_LOCK_TIMEOUT=5`</span>|a period of time during which a user + IP should be blocked (minutes)|
|<span class="notranslate">`USER_IP_LOCK_ATTEMPTS=10`</span>|a number of attempts after which a user + IP should be blocked|
|<span class="notranslate">`USER_IP_LOCK_MINUTES=5`</span>|a period of time (minutes) during which violation attempts from a user + IP are counted; all attempts earlier than <span class="notranslate">`USER_IP_LOCK_MINUTES`</span> are not counted|
|<span class="notranslate">`IP_LOCK_TIMEOUT=5`</span>|a period of time during which an IP should be blocked (minutes)|
|<span class="notranslate">`IP_LOCK_ATTEMPTS=10`</span>|a number of attempts after which an IP should be blocked|
|<span class="notranslate">`IP_LOCK_MINUTES=5`</span>|a period of time during which violation attempts from an IP are counted; all attempts earlier than <span class="notranslate">`IP_LOCK_MINUTES`</span> are not counted|
|<span class="notranslate">`rbl=net-brute.rbl.imunify.com.`</span>| RBL DNS Zone |
|<span class="notranslate">`RBL_timeout=5`</span>|this is the wait time for a response from RBL|
|<span class="notranslate">`RBL_nameserver=ns1-rbl.imunify.com:53`</span>|NS Server|


:::tip Notes

Default RBL block time for IP = 4 hours.

:::


**How to apply settings**

In order to apply new settings in the <span class="notranslate">`/etc/pam_imunify/i360.ini`</span>, run the following command:

<div class="notranslate">

```
systemctl restart imunify360-pam
```
</div>

#### How it works

During the last <span class="notranslate">`XXX_LOCK_MINUTES`</span> we count the number of login failures (unsuccessful login attempts). If the number of attempts exceeds the specified threshold <span class="notranslate">`XXX_LOCK_ATTEMPTS`</span>, the PAM plugin blocks access for <span class="notranslate">`XXX_LOCK_TIMEOUT`</span> minutes. After that, the counter is reset and the process repeats. 
Note that the plugin has three separate counters and a set of settings for USER/IP/USER+IP management regarding brute-force attacks (see the table above).


:::tip Notes
* If a user is blocked by <span class="notranslate">`USER_LOCK_ATTEMPTS`</span>, then this user will not have access to the server from any IP
* If a user is blocked by <span class="notranslate">`USER_IP_LOCK_ATTEMPTS`</span>, then this user will not have access to the server from that specific IP
* If an IP is blocked by <span class="notranslate">`IP_LOCK_ATTEMPTS`</span>, then all users will not have access to the server from that specific blocked IP
:::

## Hooks <Badge text="Deprecated" type="warning"/>

You can use a new notification system via [CLI](/command_line_interface/#notifications-config) and [UI](/features/#notifications).

### Overview

Hooks are introduced as a script-based interface for various application events. This is a simple and effective way to automate Imunify360 alerts and event processing.
For example, an administrator can have Imunify360 calling his own script when malicious files are detected or misconfigurations are detected and perform a custom processing or specific actions, for example, create a ticket.
Hooks are available only via CLI.

#### Requirements

* You can use any programming language to create a hook script
* A hook script should be executable
* For Native hooks, you should use Python 3.5 only

### How to start using hooks

Start using hooks with three simple steps:

1) Create a script to handle an event (a hook handler):

   * you can use our [scripts example](/features/#structure-and-examples-of-a-hook-script) as a template
   * [the following events are available](/features/#available-events-and-their-parameters)

2) Register your hook handler in Imunify360 agent - use registration command:

<div class="notranslate">

```
imunify360-agent hook add --event <event name> --path </path/to/hook_script>
```

</div>

3) Once the event added - check results and the [log file](/features/#log-file)

### Available events and their parameters

#### agent

* subtype ( started | misconfig )
  * started - the event is generated each time the Imunify agent is started/restarted
    * params[]
      * version / string / version of agent

    <div class="notranslate">

    ```
    {"version": "4.6.2-2"}
    ```

    </div>

  * misconfig - the event is generated when the agent detects agent misconfiguration / broken settings / etc.
    * params[]
      * error / string / error message where / what type of misconfiguration was detected and some details

    <div class="notranslate">

    ```
    {
    "error": "ValidationError({'SMTP_BLOCKING': [{'allow_groups': ['must be of list type']}]},)"
    }
    ```

    </div>

#### malware-scanning

* subtype ( started | finished )


  * **started** - the event is generated when the malware scanning process is started (for on-demand and background scans only, yet not the ftp / waf / inotify)

    * params[]
      * scan_id / string / identifier of running scan
      * path / string / path that’s scanning
      * started / int / unixtime when scan started
      * scan_type / string / type of scanning (“on-demand”, “background”, “ftp”, “rescan“)
      * scan_params[]  / initial scanning params
        * file_patterns / string / file mask to scan
        * exclude_patterns / string / file mask to ignore
        * follow_symlinks / boolean / shall scanner follow symlinks
        * intensity_cpu / int / intensity for cpu operations (from 1 to 7)
        * intensity_io / int / intensity for IO operations (from 1 to 7)
        * intensity_ram / int / amount of memory allocated to the scan process in MB

    <div class="notranslate">

    ```
    {
        "scan_id": "dc3c6061c572410a83be19d153809df1",
        "home": "/home/a/abdhf/",
        "user": "abdhf",
        "type": "background",
        "scan_params": {
            "file_patterns": "*",
            "exclude_patterns": null,
            "follow_symlinks": true,
            "intensity_cpu": 2
            "intensity_io": 2
            "intensity_ram": 2048
        }
    }
    ```

    </div>

  * **finished** - the event is generated when the malware scanning process is finished (for on-demand and background scans only, yet not the ftp / waf / inotify)

    * params[]
      * scan_id / string / identifier of running scan
      * path / string / path that’s scanned
      * started / int / unixtime when scan started
      * scan_type / string / type of scanning (“on-demand”, “background”, “ftp”, “rescan“)
      * total_files / int / total number of files that were scanned
      * total_malicious / int / number of detected malicious files
      * error / string / error message if any occurred during scanning
      * status / string / status of scan (“ok”, “failed”)
      * users[] / string array/ user that’s scanned
      * scan_params[]  / initial scanning params
        * file_patterns / string / file mask to scan
        * exclude_patterns / string / file mask to ignore
        * follow_symlinks / boolean / shall scanner follow symlinks
        * intensity_cpu / int / intensity for cpu operations (from 1 to 7)
        * intensity_io / int / intensity for IO operations (from 1 to 7)
        * intensity_ram / int / amount of memory allocated to the scan process in MB

    <div class="notranslate">

    ```
    {
        "scan_id": "dc3c6061c572410a83be19d153809df1",
        "path": "/home/a/abdhf/",
        "started": 1587365282,
        "scan_type": "background",
        "total_files": 873535,
        "total_malicious": 345,
        "error": null,
        "status": "ok",
        "users": ["abdhf"],
        "scan_params": {
            "file_patterns": "*",
            "exclude_patterns": null,
            "follow_symlinks": true,
            "intensity_cpu": 2
            "intensity_io": 2
            "intensity_ram": 2048
        }
    }
    ```

    </div>



#### malware-detected

* subtype ( critical )
  * **critical**

    * params[]
      * scan_id / string / unique id of the scan
      * scan_type / string / type of scanning (“on-demand”, “background”, “ftp”, “rescan“)
      * error / string / error message if any occurred during scanning
      * started / int / unixtime when the scan was started
      * path / string / path that was scanned
      * users[] / string array / users that have been scanned (if any)
      * total_files / int / number of files checked within the last scanning
      * total_malicious / int / number of detected malicious files
      * tmp_filename / string / path to a temporary file with a list of detected threads. The list of threads is in the format of the following command: <span class="notranslate"> `imunify360-agent malware malicious list --by-scan-id=... --json` </span>

    <div class="notranslate">

    ```
    {
        "scan_id": "dc3c6061c572410a83be19d153809df1",
        "scan_type": "on-demand",
        "path": "/home/a/abdhf/",
        "users": [
            "imunify",
            "u1"
        ],
        "started": 1587365282,
        "total_files": 873535,
        "total_malicious": 345,
        "error": null,
        "tmp_filename": "/var/imunify360/tmp/malware_detected_critical_sldkf2j.json"
    }
    ```

    ```
    [
        {
          "scan_id": "dc3c6061c572410a83be19d153809df1",
          "username": "imunify",
          "hash": "17c1dd3659578126a32701bb5eaccecc2a6d8307d8e392f5381b7273bfb8a89d",
          "size": "182",
          "cleaned_at": 1553762878.6882641,
          "extra_data": {


          },
          "malicious": true,
          "id": 32,
          "status": "cleanup_removed",
          "file": "/home/imunify/public_html/01102018_2.php",
          "type": "SMW-INJ-04174-bkdr",
          "scan_type": "on-demand",
          "created": 1553002672
        },
        {
          "scan_id": "dc3c6061c572410a83be19d153809df1",
          "username": "imunify",
          "hash": "04425f71ae6c3cd04f8a7f156aee57096dd658ce6321c92619a07e122d33bd32",
          "size": "12523",
          "cleaned_at": 1553762878.6882641,
          "extra_data": {


          },
          "malicious": true,
          "id": 33,
          "status": "cleanup_done",
          "file": "/home/imunify/public_html/22.js",
          "type": "SMW-INJ-04346-js.inj",
          "scan_type": "on-demand",
          "created": 1553002672
        },
    ...
    ]
    ```
    </div>


::: tip Note
All results can be saved in a temporary file before handler invocation and then remove the file after the event is being processed
:::

#### malware-cleanup

* subtype ( started | finished )

  * **started** - the event is generated when the malware cleanup process is started (for on-demand and background cleanup only, background auto-cleanup will be implemented later)
    * params[]
      * cleanup_id / string / unique id of the cleanup
      * started / int / unixtime when the cleanup was started
      * tmp_filename / string / path to a temporary file with a scanning report. The list is in the format of the following command: <span class="notranslate"> `imunify360-agent malware malicious list --by-scan-id=... --json` </span>. See malware-detected hook section for details.
      * total_files / int / number of files that were sent for cleanup

    <div class="notranslate">

    ```
    {
        "cleanup_id": "dc3c6061c572410a83be19d153809df1",
        "started": 1587365282,
        "total_files": 873535,
        "tmp_filename": "/var/imunify/tmp/hooks/tmp_02q648234692834698456728439587245.json",
    }
    ```

    </div>

  * **finished** - the event is generated when the malware scanning process is finished (for on-demand and background cleanup only, background auto-cleanup will be implemented later)
    * params[]
      * cleanup_id / string / identifier of running cleanup
      * started / int / unixtime when cleanup started
      * total_files / int / number of files that were sent for cleanup
      * total_cleaned / int / number of files that were successfully cleaned
      * tmp_filename / string / path to a temporary file with a list of results.
      * error / string / error message if any occurred during cleanup
      * status / string / status of scan (“ok”, “failed”)

    <div class="notranslate">

    ```
    {
        "cleanup_id": "dc3c6061c572410a83be19d153809df1",
        "started": 1587365282,
        "total_files": 873535,
        "total_cleaned": 872835,
        "tmp_filename": "/var/imunify/tmp/malware_cleanup_finished_slkj2f.json",
        "error": null,
        "status": "ok"
    }
    ```

    </div>


#### license

* subtype ( expiring | expired | renewed )

  * **expiring** - the event is generated when license is about to expire, the even should be sent 3 days prior to expiration
    * params[]
      * **exp_time** / int / unixtime data when the license expired

      <div class="notranslate">

      ```
      {"exp_time": 1587365282}
      ```
      </div>
  * **expired** - the event is generated when license has expired
    * params[]
      * **exp_time** / int / unixtime data when the license is expired
      
      <div class="notranslate">

      ```
      {"exp_time": 1587365282}
      ```
      </div>
  * **renewed** - the event is generated when the license is updated (renewed)
    * params[]
      * **exp_time** / int / unixtime data when the license will expire
      * **license** / string / license type

       <div class="notranslate">

      ```
      {
        "exp_time": 1587365282,
        "license": "imunify360"
      }
      ```
      </div>



### CLI

The following CLI command is used to manage hooks:

<div class="notranslate">

```
imunify360-agent hook [command] --event [event_name|all] [--path </path/to/hook_script>]
```

</div>

The following commands are supported:

* <span class="notranslate"> **add** </span> - register a new event handler
* <span class="notranslate"> **delete** </span> - unregister existing event handler
* <span class="notranslate"> **list** </span> - show existing event handlers
* <span class="notranslate"> **add-native** </span> - register a new native event handler

The third parameter <span class="notranslate"> _event_name_ </span> defines a particular event that invokes a registered handler as opposed to <span class="notranslate"> **all** </span> keyword.
The fourth parameter `/path/to/hook_script` shall contain a valid path to a handler of the event, it shall be any executable or Python Native event handlers that agent will run upon a registered event.

### Native

Native hook is a script written on Python 3.5 and allows to quickly process events. The Python file should contain only one method that customer would implement:

<div class="notranslate">

```
def im_hook(dict_param):
  …
  pass
```

</div>

where `dict_param` would hold the same data as JSON that non-Native hook would get.

### Log File

You can see all hook data in the log file. It is located at <span class="notranslate"> _/var/log/imunify360/hook.log_ </span> .
When the event comes, the data is recorded to the log file in the following format:

<div class="notranslate">

```
timestamp event : id : started [native:] name :  subtype : script_path
```

</div>

* <span class="notranslate"> **native** </span> is prepended for the Native hook implementation
* <span class="notranslate"> **id** </span> is a unique ID for each event

Once the listener is done, the data is recorded to the log file in the following format:

<div class="notranslate">

```
timestamp event : id : done [native:] script_path [OK|ERROR:code]
```

</div>

In case of an error, you can see the error code you have specified.

### Structure and examples of a hook script

Regular (non-native) hook:

<div class="notranslate">

```
#!/bin/bash

data=$(cat)

event=$(jq -r '.event' <<< ${data})
subtype=$(jq -r '.subtype' <<< ${data})

case ${event} in
    malware-scanning)
        case ${subtype} in
            started)
                # do stuff here
            ;;
            *)
                echo "Unhandled subtype: ${subtype}" 1>&2
                exit 1
        esac
        ;;
    *)
        echo "Unhandled event: ${event}/${subtype}" 1>&2
        exit 2
esac
```

</div>

Native hook:

<div class="notranslate">

```
def im_hook(dict_param):
   event = dict_param['event']
   subtype = dict_param['subtype']

   if event == 'malware-scanning':
       if subtype == 'started':
           # do stuff here
           pass
       elif subtype == 'finished':
           # do other stuff here
           pass
       else:
           raise Exception('Unhandled subtype {}'.format(subtype))
   else:
       raise Exception('Unhandled event {}'.format(event))
```

</div>

### Notifications

Starting from version 4.10, an administrator is able to configure email addresses to submit reports and execute custom scripts. Go to <span class="notranslate">_Settings_</span> and choose <span class="notranslate">_Notifications_</span> tab.

![](/images/notifications.png)

* <span class="notranslate">**Default admin emails**</span>: specify the default list of emails used for all enabled admin email notifications. 
* <span class="notranslate">**From**</span>: specify a sender of all emails sent by the Hooks. 

The following events are available.

#### Real-Time scan: malware detected

Occurs when malware is detected during the real-time scanning.

![](/images/RealTimeScanDetected.png)

* <span class="notranslate">**Enable email notifications for admin**</span>: move the slider to <span class="notranslate">ON</span> to notify the administrator and a custom user list via email upon event occurrence. To notify the administrator on the default admin email, tick the <span class="notranslate">_Default admin emails_</span> checkbox. 
* <span class="notranslate">**Notify every (mins)**</span>: set a notification interval in minutes. The data for all events that happened within the interval will be accumulated and sent altogether.
* <span class="notranslate">**Admin emails**</span>: tick the <span class="notranslate">_Default admin emails_</span> and/or specify your emails for notifications.
* <span class="notranslate">**Enable script execution**</span>: move the slide to <span class="notranslate">ON</span> to run a script (event handler) upon event occurrence. 
* <span class="notranslate">**Notify every (sec)**</span>: set a notification interval in seconds. The data for all events that happened within the interval will be accumulated and sent altogether. 
* <span class="notranslate">**Run a script**</span>: specify the full path to the script(s) or any other Linux executable to be launched on event occurrence. Make sure that the script has an executable bit (+x) on. A line-separated list of scripts is supported. 

#### User scan: started

Occurs immediately after the user scanning has started.

![](/images/UserScanStarted.png)


#### Custom scan: started

![](/images/CustomScanStarted.png)

Occurs immediately after on-demand (manual) scanning has started.


#### User scan: finished

Occurs immediately after the user scanning has finished, regardless the malware has found or not.

![](/images/UserScanFinished.png)

#### Custom scan: finished

![](/images/CustomScanFinished.png)

Occurs immediately after on-demand (manual) scanning has finished, regardless the malware has found or not.


#### Custom scan: malware detected

Occurs when the on-demand scanning process has finished and malware found.

![](/images/CustomScanDetected.png)


#### User scan: malware detected

Occurs when the malware scanning process of a user account has finished and malware found.

![](/images/UserScanDetected.png)


#### Script blocked

Occurs when the Proactive Defense has blocked malicious script.

![](/images/ScriptBlocked.png)

Click <span class="notranslate">_Save changes_</span> at the bottom to apply all changes.


## Malware Database Scanner (MDS)

<span class="notranslate">Malware Database Scanner (MDS)</span> is designed to solve all malware related problems in the database.

:::danger Warning
Version 5.1 of the Imunify360 introduces a CLI tool without the UI. Further versions will be integrated with the Malware Scanner UI.
:::

:::danger Warning
For now, Malware Database Scanner (MDS) supports WordPress databases only.
:::

### How to use Malware Database Scanner (MDS)

To provide safe work with database MDS supports several methods:

* <span class="notranslate">`--scan`</span> - only scan the database, no changes will be applied
* <span class="notranslate">`--clean`</span> - scan database and clean-up malicious
* <span class="notranslate">`--restore`</span> - restore data affected by clean-up from the backup CSV file

:::tip Note
“Clean” operation includes “scan”, so you don’t need to run a scan before the cleanup. Whereas the “scan” can be used for non-disruptive checks of the database. Cleanup mode creates a backup file that can be used to rollback all changes back. It makes MDS safe to use and prevents websites from breaking and data loss.
:::

The easiest way to use MDS is to run it with  <span class="notranslate">`--search-configs`</span> argument: MDS will try to find the config files and print out database credentials that should be later specified for scanning. 

<span class="notranslate">`--creds-from-xargs`</span> argument can be used to run MDS without a need to manually enter credentials. It allows automating the process of credentials discovery and the scan process.

#### Usage

<div class="notranslate">

```
php /opt/ai-bolit/imunify_dbscan.php [OPTIONS] [PATH]
```
</div>

**Options**

| | |
|-|-|
|<span class="notranslate">`--host=<host>`</span>|Database host|
|<span class="notranslate">`--port=<port>`</span>|Database port|
|<span class="notranslate">`--login=<username>`</span>|Database username|
|<span class="notranslate">`--password=<password>`</span>|Database password|
|<span class="notranslate">`--password-from-stdin`</span>|Get database password from stdin|
|<span class="notranslate">`--database=<db_name>`</span>|Database name|
|<span class="notranslate">`--prefix=<prefix>`</span>|Prefix for table|
|<span class="notranslate">`--scan`</span>|Do scan|
|<span class="notranslate">`--clean`</span>|Do clean|
|<span class="notranslate">`--search-configs`</span>|Find the config files and print out database credentials|
|<span class="notranslate">`--creds-from-xargs`</span>|Discover credentials and do scan|
|<span class="notranslate">`--report-file=<filepath>`</span>|Filepath where to put the report|
|<span class="notranslate">`--signature-db=<filepath>`</span>|Filepath with signatures|
|<span class="notranslate">`--progress=<filepath>`</span>|Filepath with progress|
|<span class="notranslate">`--shared-mem-progress=<shmem_id>`</span>|ID of shared memory segment|
|<span class="notranslate">`--create-shared-mem`</span>|MDS create own shared memory segment|
|<span class="notranslate">`--status=<filepath>`</span>|Filepath with status for control task|
|<span class="notranslate">`--avdb=<filepath>`</span>|Filepath with ai-bolit signatures database|
|<span class="notranslate">`--procudb=<filepath>`</span>|Filepath with procu signatures database|
|<span class="notranslate">`--state-file=<filepath>`</span>|Filepath with info about state (content: <span class="notranslate">`new`/`working`/`done`/`canceled`</span>). You can change it on <span class="notranslate">`canceled`</span>.|
|<span class="notranslate">`--restore=<filepath>`</span>|Filepath to restore CSV file|
|<span class="notranslate">`-h, --help`</span>|Display this help and exit|
|<span class="notranslate">`-v, --version`</span>|Show version|

#### Example of usage

#### Scan database

<div class="notranslate">

```
# /opt/alt/php74-imunify/usr/bin/php -n -d extension=json.so -d extension=pdo.so -d extension=mysqlnd.so -d extension=nd_mysqli.so /opt/ai-bolit/imunify_dbscan.php --port=3306 --login=user --password-from-stdin --database=$DATABASE --avdb=/var/imunify360/files/sigs/v1/aibolit/mds-ai-bolit-hoster.db --report-file=`pwd`/report.json --scan
```
</div>

Scan results will be stored in the <span class="notranslate">`results.json`</span>.

#### Scan & Clean-up database

<div class="notranslate">

```
#  /opt/alt/php74-imunify/usr/bin/php -n -d extension=json.so -d extension=pdo.so -d extension=mysqlnd.so -d extension=nd_mysqli.so /opt/ai-bolit/imunify_dbscan.php --port=3306 --login=user --password-from-stdin --database=$DATABASE --avdb=/var/imunify360/files/sigs/v1/aibolit/mds-ai-bolit-hoster.db --procudb=/var/imunify360/files/sigs/v1/aibolit/mds-procu2.db --report-file=`pwd`/report.json --clean
```
</div>

Cleanup results will be stored in the <span class="notranslate">`results.json`</span>. Also, backup of the affected data will be created with a filename similar to the <span class="notranslate">`mds_backup_1597223818.csv`</span>.


#### Undo changes (restore)

<div class="notranslate">

```
# /opt/alt/php74-imunify/usr/bin/php -n -d extension=json.so -d extension=pdo.so -d extension=mysqlnd.so -d extension=nd_mysqli.so /opt/ai-bolit/imunify_dbscan.php --port=3306 --login=user --password-from-stdin --database=$DATABASE --report-file=$REPORT --restore=`pwd`/mds_backup_1597223818.csv
```
</div>


## Overridable config

Starting from Imunify360 v.5.8, we introduce the overridable config which provides the ability to provision default config for the whole fleet of Imunify servers and keep the ability for fine-tuning each particular server depending on its requirements.

**Configs organization**:

* A new directory for custom configs. The local overrides of the main config are put there: <span class="notranslate">`/etc/sysconfig/imunify360/imunify360.config.d/`</span>
* The old config <span class="notranslate">`/etc/sysconfig/imunify360/imunify360.config`</span> is now linked to the <span class="notranslate">`imunify360.config.d/90-local.config`</span>. It contains changes made through UI as well as through CLI.
* Configs in that directory will override the <span class="notranslate">`imunify360-base.config`</span> and each other in lexical order. First-level "sections" (like <span class="notranslate">`FIREWALL`</span>) are merged, while second-level "options" (like <span class="notranslate">`FIREWALL.TCP_IN_IPv4`</span>) are replaced completely.

This way you can keep your local customizations, but still be able to rollout the main config.

The CLI command to check the default configuration before merging with <span class="notranslate">`90-local.config`</span>:

<div class="notranslate">

```
imunify360-agent config show defaults
```
</div>

Here is an example of custom server configuration:

| | |
|-|-|
|<span class="notranslate">`imunify360-base.config`</span><br><br>Provided by Imunify installation. Contains default recommended configuration|<span class="notranslate">`FIREWALL:`</span><br><span class="notranslate">`TCP_IN_IPv4:`</span><br>`- '20'`<br>`- '8880'`<br><span class="notranslate">`port_blocking_mode: ALLOW`</span>|
|<span class="notranslate">`imunify360.config.d/50-common.config`</span><br><br>Provisioned by server owner to the fleet of servers.|<span class="notranslate">`FIREWALL:`</span><br><span class="notranslate">`TCP_IN_IPv4:`</span><br>`- '20'`<br>`- '21'`<br><span class="notranslate">`port_blocking_mode: DENY`</span>|
|<span class="notranslate">`imunify360.config.d/90-local.config`</span><br><br>Contains local customization per server individually.|<span class="notranslate">`FIREWALL:`</span><br><span class="notranslate">`TCP_IN_IPv4:`</span><br>`- '20'`<br>`- '22'`<br>`- '12345'`|

The resulting (merged) configuration will look like this:

<div class="notranslate">

```
FIREWALL:
  TCP_IN_IPv4:
  - '20'
  - '22'
  - '12345'
  port_blocking_mode: DENY
```
</div>

The mechanics is as follows: first-level "sections" - for example <span class="notranslate">`FIREWALL`</span> are merged, while second-level "options" - for example <span class="notranslate">`FIREWALL.TCP_IN_IPv4`</span> are replaced completely. 

Those who don’t need this type of overridable configs can continue using custom configurations in the <span class="notranslate">`/etc/sysconfig/imunify360/imunify360.config`</span>.

This feature is backward compatible.




