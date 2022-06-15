let url = "http://ip-api.com/json/?lang=en-US"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
    let ip = jsonData.query
  body = {
    title: "🚀 𝙋𝙍𝙊𝙓𝙔 𝙄𝙉𝙁𝙊  🛰",
    content: `𝑰𝑷：${ip}\n𝑰𝑺𝑷：${isp}\n𝑳𝑶𝑪: ${emoji} | ${country} - ${city}`,
    icon: "externaldrive.connected.to.line.below.fill",
    "icon-color": "#2edfa3"
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
