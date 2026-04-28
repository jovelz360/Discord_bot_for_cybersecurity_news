const seenUrls = new Set();
const topicCount = {};
const collected = [];

// 1️ First pass: normalize + collect
for (const item of items) {
  const data = item.json;

  const url =
    data.link ||
    data.guid ||
    data.url ||
    "";

  if (!url || seenUrls.has(url)) continue;
  seenUrls.add(url);

  const title = (data.title || "No title").trim();

  const summary = (
    data.contentSnippet ||
    data.content ||
    data.summary ||
    data.description ||
    ""
  )
    .replace(/<[^>]*>/g, "")
    .trim()
    .slice(0, 400);

  // 2️ Build a topic key (basic NLP-style normalization)
  const topicKey = title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .split(" ")
    .filter(w => w.length > 4)   // remove weak words
    .slice(0, 5)                 // limit topic width
    .join(" ");

  topicCount[topicKey] = (topicCount[topicKey] || 0) + 1;

  collected.push({
    title,
    summary,
    url,
    topicKey
  });
}

// 3️ Rank items based on topic frequency
const ranked = collected.map(item => {
  const count = topicCount[item.topicKey];

  let rank = "less important";
  if (count >= 3) rank = "critical";
  else if (count === 2) rank = "important";

  return {
    json: {
      title: item.title,
      summary: item.summary,
      url: item.url,
      rank,
      occurrences: count
    }
  };
});

// 4️ Sort by importance + frequency
ranked.sort((a, b) => {
  const weight = { critical: 3, important: 2, "less important": 1 };
  return (
    weight[b.json.rank] - weight[a.json.rank] ||
    b.json.occurrences - a.json.occurrences
  );
});

// 5️ Limit output to TOP 50
return ranked.slice(0, 50);

