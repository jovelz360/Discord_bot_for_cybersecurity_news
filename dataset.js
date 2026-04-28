return [
  // ======== TOP CYBERSECURITY NEWS (VERY STABLE) ========
  { json: { source: "Krebs on Security", url: "https://krebsonsecurity.com/feed/" } },
  { json: { source: "BleepingComputer", url: "https://www.bleepingcomputer.com/feed/" } },
  { json: { source: "The Hacker News", url: "https://feeds.feedburner.com/TheHackersNews" } },
  { json: { source: "SecurityWeek", url: "https://www.securityweek.com/feed/" } },
  { json: {source: "dark reading", url: "https://darkreading.com/rss.xml"}},
  { json: {source: "threat post", url: "https://threatpost.com/feed"}},
  { json: {source: "security affairs", url: "https://securityaffairs.com/feed"}},
  { json: {source: "NVD", url: "https://nvd.nist.gov/feeds/xml/cve/misc/nvd-rss.xml"}},
  //{ json: { source: "Infosecurity Magazine", url: "https://www.infosecurity-magazine.com/rss/news/" } },

  // ======== GOVERNMENT / OFFICIAL (VERY RELIABLE) ========
  { json: { source: "CISA Advisories", url: "https://www.cisa.gov/cybersecurity-advisories/all.xml" } },
  

  // ======== VULNERABILITIES & BUGS ========
  { json: { source: "Exploit-DB", url: "https://www.exploit-db.com/rss.xml" } },
  //{ json: { source: "Packet Storm Security", url: "https://packetstormsecurity.com/feeds/news/" } }, not working

  // ======== MALWARE / THREAT RESEARCH ========
  { json: { source: "Malwarebytes Labs", url: "https://blog.malwarebytes.com/feed/" } },
  //{ json: { source: "Sophos X-Ops", url: "https://news.sophos.com/en-us/feed/" } },  //too match time 
  { json: { source: "WeLiveSecurity (ESET)", url: "https://www.welivesecurity.com/feed/" } },

  // ======== THREAT INTEL / RESEARCH TEAMS ========
  { json: { source: "Cisco Talos", url: "https://blog.talosintelligence.com/rss/" } },
  { json: { source: "Unit 42 (Palo Alto)", url: "https://unit42.paloaltonetworks.com/feed/" } },

  // ======== TECH + SECURITY OVERLAP ========
  //{ json: { source: "Ars Technica Security", url: "https://feeds.arstechnica.com/arstechnica/security" } } //not working
];