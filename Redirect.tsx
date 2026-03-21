<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirecting...</title>

  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      text-align: center;
    }

    h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      color: #666;
      margin-bottom: 30px;
    }

    button {
      padding: 15px 25px;
      font-size: 18px;
      border: none;
      border-radius: 10px;
      background: #000;
      color: #fff;
      cursor: pointer;
    }

    button:hover {
      opacity: 0.85;
    }
  </style>
</head>

<body>

  <h1>Redirecting...</h1>
  <p>If nothing happens, tap the button below</p>

  <button onclick="openLink()">Open in Browser</button>

  <script>
    function openLink() {
      var url = "https://www.bugha.xyz"; // ضع رابطك هنا

      var ua = navigator.userAgent.toLowerCase();

      // Android → حاول فتح Chrome
      if (ua.includes("android")) {
        window.location.href =
          "intent://" +
          url.replace(/^https?:\/\//, "") +
          "#Intent;scheme=https;package=com.android.chrome;end;";
      }

      // iOS → Safari
      else if (ua.includes("iphone") || ua.includes("ipad")) {
        window.location.href = url;
      }

      // باقي الأجهزة
      else {
        window.location.href = url;
      }
    }

    // auto redirect (بعد 1 ثانية)
    setTimeout(openLink, 1000);
  </script>

</body>
</html>
