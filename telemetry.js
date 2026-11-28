// 안내 사이트 방문 카운터 — Apps Script 수집기에 익명 방문 1회 전송 (2026-11-28)
// APPS_URL 은 tools/appscript_사용자수집.txt 배포 후 받은 웹앱 URL 을 넣는다. 비어 있으면 아무것도 안 한다.
(function () {
  const APPS_URL = "https://script.google.com/macros/s/AKfycbzZ75qK7wXS0WI5W3v8A1a7pVR03aoBKlycJ_bgjcjI2MV0Hv-wJ67spRSeH8mqPm8F_A/exec";
  if (!APPS_URL) return;
  try {
    let id = localStorage.getItem("yta-visit-id");
    if (!id) { id = Math.random().toString(36).slice(2, 14); localStorage.setItem("yta-visit-id", id); }
    const body = JSON.stringify({ source: "visit", id: id, os: navigator.platform || "", py: "", note: location.pathname });
    fetch(APPS_URL, { method: "POST", body: body, headers: { "Content-Type": "text/plain" } }).catch(function () {});
  } catch (e) {}
})();
