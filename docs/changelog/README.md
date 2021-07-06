# Cnangelog


* **Imunify360**

  It is a comprehensive security solution for Linux web severs: Antivirus, Firewall, WAF, PHP Security Layer, Patch Management, Domain Reputation with easy UI and advanced automation.
* **ImunifyAV(+)**

  It is the best antivirus for Linux web servers with malware cleanup.
* **WAF Rules**

  TBD
* **OSSEC Rules**

  TBD

## Imunify360

----

**Jul 5, 2021**

**5.8.3**

* DEF-17049: Fix for malware scanner
* DEF-16852: Obsolete imunify360-webshield-modsec package on CentOS 6 system
* DEF-16855: Fix wrong place for ModSec rules disable global on Plesk
* DEF-16867: Improvement for MDS working with escaped strings
* DEF-16976: Fix for support of error subcommand "-period_started" in imunify-notifier
* DEF-16985: Fix for WebShield processes stockpilingDEF-17010: Fix for the error psutil.AccessDenied
* DEF-17045: Correct handling of double URL encoding during cleanup

----

**Jun 24, 2021**

**5.8**

* Overridable config
* HyperScan
* Better infection source detection
* Control over user’s impact on server security
* Improvement of PAM module
* DEF-16670: Optimize 'dangerlist' lookups for Proactive Defence
* DEF-16702: Fix for the installation page presented to the user after upgrade process is completed
* DEF-16865: Fix for absent saved sentry reports directory for AI-Bolit wrapper
* DEF-16872: Temporally restored "Quarantine" related actions in UI
* DEF-16884: Improvement for cron notification on CentOS 7/8 servers - redundant notifications removed
* DEF-16948: Fix for unknown files in Plesk Obsidian 18.0.35.2 (edited) 
* DEF-16952: Deobfuscator enhancement
* DEF-16975: Fix for loading dynamic library 'hyperscan.so'
* DEF-16956: Fix auditd-log-reader reporting on CloudLinux 6
* DEF-16335: Change in "Notifications" description
* DEF-16263: Changes in interface text
* DEF-16102: Fix for malware scanner leaving an empty file on cleanup
* DEF-14825 :Fixed 503 errors for ionCube Loader protected scripts
* DEF-16372: Verifying the list of scanned files before running stat() function
* DEF-16419:	Change of PHP Handler for resident mode
* DEF-16318, DEF-16345, DEF-16352, DEF-16439, DEF-16467, DEF-16486, DEF-16537: Deobfuscator enhancement
* DEF-15775:	File streaming for CloudAssisted and RapidAccountScan in AI-Bolit
* DEF-15172:	Fix for blocking of legitimate requests by the PAM module
* DEF-16489:	Background scan reporting includes cases with no malware
* DEF-16519:	Imunify360 custom http config files are moved from vhosts dir\
* DEF-16344:	Changing initial configuration for PAM and Malware Scan Schedule to better fit security practices

----

**Jun 23, 2021**

**5.8.2 beta**

* DEF-16952: Deobfuscator enhancement
* DEF-16975: Fix for loading dynamic library 'hyperscan.so'
* DEF-16956: Fix auditd-log-reader reporting on CloudLinux OS 6

----

## ImunifyAV(+)

----

**Jul 5, 2021**

**5.8.3**

* DEF-17049: Fix for malware scanner
* DEF-16867: Improvement for MDS working with escaped strings
* DEF-17045: Correct handling of double URL encoding during cleanup

----

**Jun 24, 2021**

**5.8**

* Overridable config
* HyperScan
* DEF-16865: Fix for absent saved sentry reports directory for AI-Bolit wrapper
* DEF-16952: Deobfuscator enhancement
* DEF-16975: Fix for loading dynamic library 'hyperscan.so'
* DEF-16419:	Change of PHP Handler for resident mode
* DEF-16486, DEF-16439, DEF-16467, DEF-16352, DEF-16318, DEF-16345, DEF-16537: Deobfuscator enhancement
* DEF-16372	Verifying the list of scanned files before running stat() function
* DEF-15775	File streaming for CloudAssisted and RapidAccountScan in AI-Bolit
* DEF-16489	Background scan reporting includes cases with no malware

----

**Jun 23, 2021**

**5.8.2 beta**

* DEF-16952: Deobfuscator enhancement
* DEF-16975: Fix for loading dynamic library 'hyperscan.so'



-----

## WAF Rules

-------

**Jun 30, 2021**

**3.94**

* Added rule id: 77316856 - IM360 WAF: Privilege Escalation in WP User Avatar plugin for WordPress
* Added rule id: 77316852 - IM360 WAF: Request header interception
* Added rule id: 77316853 - IM360 WAF: Unauthenticated Privilege Escalation in WP User Avatar plugin for WordPress
* Added rule id: 77316854 - IM360 WAF: Arbitrary File Upload in WP User Avatar plugin for WordPress
* Added rule id: 77316855 - IM360 WAF: Authenticated Privilege Escalation in WP User Avatar plugin for WordPress

-------

**Jun 25, 2021**

**3.93**

* Updated rule id: 77316850 - z0 optimization
* Updated rule id: 77316851 - Path traversal rules optimization

-------

**Jun 24, 2021**

**3.92**

* Added rule id: 77310043 - WLRM-0199a15d
* Added rule id: 77316851 - Path traversal rules optimization
* Updated rule id: 77142112 - IM360 WAF: Combined Attack on Elementor Pro and Ultimate Addons
* Updated rule id: 77211190 - IM360 WAF: Remote File Access Attempt
* Updated the list of blocked malicious sources

----

## OSSEC Rules

----

**Jun 01, 2021**

**3.1.0-91f**

* Added Plesk files operation monitoring

-----


**May 30, 2021**

**3.1.0-97a**

* Updated rule for Plesk login with root user

-----