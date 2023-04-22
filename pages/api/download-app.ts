export default function handler(req, res) {
  const userAgent = req.headers['user-agent']

  if (userAgent.match(/Android/i)) {
    res.writeHead(302, {
      Location: 'https://play.google.com/store/apps/details?id=markets.mango',
    })
  } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
    res.writeHead(302, {
      Location: 'https://testflight.apple.com/join/x60TmlgF',
    })
  } else {
    res.writeHead(302, {
      Location: '/',
    })
  }
  res.end()
}
